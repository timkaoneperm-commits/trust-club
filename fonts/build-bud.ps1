$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Drawing
$inv = [System.Globalization.CultureInfo]::InvariantCulture
$ink = [System.Drawing.Color]::FromArgb(110, 62, 44)
$fontFile = "C:\Users\User\hearth-crate\fonts\ImperialScript-Regular.ttf"
if (-not (Test-Path $fontFile)) {
  Invoke-WebRequest -Uri "https://github.com/google/fonts/raw/main/ofl/imperialscript/ImperialScript-Regular.ttf" -OutFile $fontFile -UseBasicParsing
}
$pfc = New-Object System.Drawing.Text.PrivateFontCollection
$pfc.AddFontFile($fontFile)
$family = $pfc.Families[0]

function Fmt($n) { return ([double]$n).ToString("0.##", $inv) }

$mono = New-Object System.Drawing.Drawing2D.GraphicsPath
$fmt = New-Object System.Drawing.StringFormat
$mono.AddString("T", $family, 0, 320, (New-Object System.Drawing.PointF 0, 0), $fmt)
$mb = $mono.GetBounds()
$fit = 340.0 / [Math]::Max($mb.Width, $mb.Height)
$m1 = New-Object System.Drawing.Drawing2D.Matrix
$m1.Translate(-($mb.X + $mb.Width / 2), -($mb.Y + $mb.Height / 2))
$mono.Transform($m1)
$m2 = New-Object System.Drawing.Drawing2D.Matrix
$m2.Scale($fit, $fit)
$mono.Transform($m2)
$m3 = New-Object System.Drawing.Drawing2D.Matrix
$m3.Translate(304, 314)
$mono.Transform($m3)

# Bracts only on the outer edge of the thick strokes. The swash stays a hairline.
$flat = [System.Drawing.Drawing2D.GraphicsPath]::new()
$flat.AddPath($mono, $false)
$flat.Flatten([System.Drawing.Drawing2D.Matrix]::new(), 1.2)
$pts = $flat.PathPoints
$bracts = @()
$acc = 0.0
for ($i = 1; $i -lt $pts.Length; $i++) {
  $dx = $pts[$i].X - $pts[$i - 1].X
  $dy = $pts[$i].Y - $pts[$i - 1].Y
  $dist = [Math]::Sqrt($dx * $dx + $dy * $dy)
  if ($dist -lt 0.4) { continue }
  $acc += $dist
  if ($acc -lt 12.0) { continue }
  $acc = 0.0
  $nx = -$dy / $dist
  $ny = $dx / $dist
  $px = [double]$pts[$i].X
  $py = [double]$pts[$i].Y
  $inX = 0.0; $inY = 0.0; $thick = $false
  foreach ($sign in @(1, -1)) {
    $tx = $px + $nx * 12 * $sign
    $ty = $py + $ny * 12 * $sign
    if ($mono.IsVisible([single]$tx, [single]$ty)) { $inX = $nx * $sign; $inY = $ny * $sign; $thick = $true; break }
  }
  if (-not $thick) { continue }
  $ox = -$inX; $oy = -$inY
  $vx = $px - 304.0; $vy = $py - 314.0
  if (($ox * $vx + $oy * $vy) -le 0) { continue }
  if ($px -lt 290 -and $py -gt 305) { continue }
  $scale = 0.78 + 0.34 * [Math]::Abs([Math]::Sin($bracts.Count * 1.9))
  $bracts += [pscustomobject]@{
    X = $px - $ox * 3.4 + ($dx / $dist) * 2.2
    Y = $py - $oy * 3.4 + ($dy / $dist) * 2.2
    Tx = $dx / $dist; Ty = $dy / $dist
    Ox = $ox; Oy = $oy
    S = [double]$scale
    Rx = 11.5 * $scale
    Ry = 9.2 * $scale
  }
}

function BractPath($b) {
  $sb = New-Object System.Text.StringBuilder
  $n = 24
  for ($k = 0; $k -le $n; $k++) {
    $t = 2 * [Math]::PI * $k / $n
    $lx = [Math]::Cos($t) * $b.Rx
    $ly = [Math]::Sin($t) * $b.Ry
    $x = $b.X + $lx * $b.Tx + $ly * $b.Ox
    $y = $b.Y + $lx * $b.Ty + $ly * $b.Oy
    if ($k -eq 0) { [void]$sb.Append("M $(Fmt $x) $(Fmt $y) ") }
    else { [void]$sb.Append("L $(Fmt $x) $(Fmt $y) ") }
  }
  [void]$sb.Append("Z")
  return $sb.ToString()
}

function BractGdi($b) {
  $path = New-Object System.Drawing.Drawing2D.GraphicsPath
  $n = 24
  $arr = New-Object System.Drawing.PointF[] ($n + 1)
  for ($k = 0; $k -le $n; $k++) {
    $t = 2 * [Math]::PI * $k / $n
    $lx = [Math]::Cos($t) * $b.Rx
    $ly = [Math]::Sin($t) * $b.Ry
    $arr[$k] = New-Object System.Drawing.PointF ([single]($b.X + $lx * $b.Tx + $ly * $b.Ox)), ([single]($b.Y + $lx * $b.Ty + $ly * $b.Oy))
  }
  $path.AddPolygon($arr)
  return $path
}

# A few pistils, far apart, curling off the outer tips. They read as pen flicks.
$pistils = @()
foreach ($b in $bracts) {
  $tipX = $b.X + $b.Ox * ($b.Ry + 0.6)
  $tipY = $b.Y + $b.Oy * ($b.Ry + 0.6)
  $near = $false
  foreach ($p in $pistils) {
    $ddx = $tipX - $p.X0; $ddy = $tipY - $p.Y0
    if (($ddx * $ddx + $ddy * $ddy) -lt 58 * 58) { $near = $true; break }
  }
  if ($near) { continue }
  $flip = $(if ($pistils.Count % 2 -eq 0) { 1.0 } else { -1.0 })
  $pistils += [pscustomobject]@{
    X0 = $tipX; Y0 = $tipY
    X1 = $tipX + $b.Ox * 14 + $b.Tx * 8 * $flip
    Y1 = $tipY + $b.Oy * 14 + $b.Ty * 8 * $flip
    X2 = $tipX + $b.Ox * 22 - $b.Tx * 10 * $flip
    Y2 = $tipY + $b.Oy * 22 - $b.Ty * 10 * $flip
    X3 = $tipX + $b.Ox * 13 - $b.Tx * 4 * $flip
    Y3 = $tipY + $b.Oy * 13 - $b.Ty * 4 * $flip
  }
  if ($pistils.Count -ge 4) { break }
}

function CurvePath($p) {
  return "M $(Fmt $p.X0) $(Fmt $p.Y0) C $(Fmt $p.X1) $(Fmt $p.Y1) $(Fmt $p.X2) $(Fmt $p.Y2) $(Fmt $p.X3) $(Fmt $p.Y3)"
}

function PathToSvg($path) {
  $p = $path.PathPoints
  $types = $path.PathTypes
  $sb = New-Object System.Text.StringBuilder
  $i = 0
  while ($i -lt $p.Length) {
    $raw = [int]$types[$i]
    $kind = $raw -band 7
    $close = ($raw -band 128) -ne 0
    if ($kind -eq 0) {
      [void]$sb.AppendFormat($inv, "M {0:0.##} {1:0.##} ", $p[$i].X, $p[$i].Y)
    } elseif ($kind -eq 1) {
      [void]$sb.AppendFormat($inv, "L {0:0.##} {1:0.##} ", $p[$i].X, $p[$i].Y)
    } elseif ($kind -eq 3) {
      [void]$sb.AppendFormat($inv, "C {0:0.##} {1:0.##} {2:0.##} {3:0.##} {4:0.##} {5:0.##} ", $p[$i].X, $p[$i].Y, $p[$i+1].X, $p[$i+1].Y, $p[$i+2].X, $p[$i+2].Y)
      if ((([int]$types[$i+2]) -band 128) -ne 0) { [void]$sb.Append("Z ") }
      $i += 2
    }
    if ($close -and $kind -ne 3) { [void]$sb.Append("Z ") }
    $i++
  }
  return $sb.ToString().Trim()
}

$old = [System.IO.File]::ReadAllText("C:\Users\User\hearth-crate\trust-club-logo.svg")
$ring = [regex]::Match($old, '<path fill="#6E3E2C" d="([^"]+)"/>').Groups[1].Value
$letter = PathToSvg $mono
$calyx = ($bracts | ForEach-Object { "  <path fill=`"#6E3E2C`" d=`"$(BractPath $_)`"/>" }) -join "`n"
$hairs = ($pistils | ForEach-Object { "    <path d=`"$(CurvePath $_)`"/>" }) -join "`n"
if ($hairs) {
  $hairs = "  <g fill=`"none`" stroke=`"#6E3E2C`" stroke-width=`"1.35`" stroke-linecap=`"round`">`n$hairs`n  </g>"
}

$svg = @"
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" role="img" aria-label="Trust-Club">
  <g fill="none" stroke="#6E3E2C" stroke-linecap="round">
    <circle cx="300" cy="300" r="272" stroke-width="3.5"/>
    <circle cx="300" cy="300" r="208" stroke-width="10"/>
  </g>
  <path fill="#6E3E2C" d="$ring"/>
  <path fill="#6E3E2C" d="$letter"/>
$calyx
$hairs
</svg>
"@
$utf8 = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllText("C:\Users\User\hearth-crate\trust-club-logo.svg", $svg, $utf8)

function Draw-SvgPath($graphics, $d, $brush, $pen) {
  $tokens = [regex]::Matches($d, "[MLCZ]|-?\d+\.?\d*")
  $path = New-Object System.Drawing.Drawing2D.GraphicsPath ([System.Drawing.Drawing2D.FillMode]::Winding)
  $i = 0
  $cx0 = 0.0; $cy0 = 0.0
  while ($i -lt $tokens.Count) {
    $cmd = $tokens[$i].Value
    if ($cmd -eq "M" -or $cmd -eq "L") {
      $x = [double]::Parse($tokens[$i+1].Value, $inv)
      $y = [double]::Parse($tokens[$i+2].Value, $inv)
      if ($cmd -eq "M") { $path.StartFigure() } else { $path.AddLine($cx0, $cy0, $x, $y) }
      $cx0 = $x; $cy0 = $y
      $i += 3
    } elseif ($cmd -eq "C") {
      $x1 = [double]::Parse($tokens[$i+1].Value, $inv); $y1 = [double]::Parse($tokens[$i+2].Value, $inv)
      $x2 = [double]::Parse($tokens[$i+3].Value, $inv); $y2 = [double]::Parse($tokens[$i+4].Value, $inv)
      $x = [double]::Parse($tokens[$i+5].Value, $inv); $y = [double]::Parse($tokens[$i+6].Value, $inv)
      $path.AddBezier($cx0, $cy0, $x1, $y1, $x2, $y2, $x, $y)
      $cx0 = $x; $cy0 = $y
      $i += 7
    } elseif ($cmd -eq "Z") {
      $path.CloseFigure()
      $i += 1
    } else { $i += 1 }
  }
  if ($brush) { $graphics.FillPath($brush, $path) }
  if ($pen) { $graphics.DrawPath($pen, $path) }
  $path.Dispose()
}

$bmp = New-Object System.Drawing.Bitmap 900, 900
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = "AntiAlias"
$g.PixelOffsetMode = "HighQuality"
$g.Clear([System.Drawing.Color]::FromArgb(246, 232, 204))
$g.ScaleTransform(900/600.0, 900/600.0)
$penOut = New-Object System.Drawing.Pen $ink, 3.5
$penIn = New-Object System.Drawing.Pen $ink, 10
$g.DrawEllipse($penOut, (300-272), (300-272), 544, 544)
$g.DrawEllipse($penIn, (300-208), (300-208), 416, 416)
$brush = New-Object System.Drawing.SolidBrush $ink
Draw-SvgPath $g $ring $brush $null
$g.FillPath($brush, $mono)
foreach ($b in $bracts) {
  $bp = BractGdi $b
  $g.FillPath($brush, $bp)
  $bp.Dispose()
}
$hairPen = New-Object System.Drawing.Pen $ink, 1.35
$hairPen.StartCap = "Round"
$hairPen.EndCap = "Round"
foreach ($p in $pistils) {
  $g.DrawBezier($hairPen, $p.X0, $p.Y0, $p.X1, $p.Y1, $p.X2, $p.Y2, $p.X3, $p.Y3)
}
$bmp.Save("C:\Users\User\hearth-crate\trust-club-logo.png", [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose(); $bmp.Dispose()
Write-Output "bracts=$($bracts.Count) pistils=$($pistils.Count)"
