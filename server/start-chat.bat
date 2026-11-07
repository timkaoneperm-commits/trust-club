@echo off
cd /d "%~dp0\.."
echo На этом ПК: http://127.0.0.1:8000/
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4"') do (
  echo С телефона (та же Wi-Fi): http://%%a:8000/
)
echo.
python "%~dp0chat_server.py"
pause
