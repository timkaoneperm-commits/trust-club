const PRODUCT_ID = "gummy-peach";
const product = productById(PRODUCT_ID);
let qty = 1;

const STRENGTHS = {
  apricot: [
    {
      id: "gummy-peach",
      label: "D9 | 300 мг",
      mg: "300",
      count: "30",
      each: "10",
      shots: [
        { src: "img/gummies/gummy-peach-1.png?v=5", alt: "Мармелад со вкусом абрикоса, 300 мг" },
        { src: "img/gummies/gummy-peach-2.png?v=5", alt: "Упаковка и мармелад со вкусом абрикоса, 300 мг" }
      ]
    },
    {
      id: "gummy-peach-900",
      label: "D8 | 900 мг",
      mg: "900",
      count: "30",
      each: "30",
      shots: [
        { src: "img/gummies/gummy-peach-900-1.png?v=5", alt: "Мармелад со вкусом абрикоса, 900 мг" },
        { src: "img/gummies/gummy-peach-900-2.png?v=5", alt: "Упаковка и мармелад со вкусом абрикоса, 900 мг" }
      ]
    }
  ],
  apple: [
    {
      id: "gummy-apple",
      label: "D9 | 300 мг",
      mg: "300",
      count: "30",
      each: "10",
      shots: [
        { src: "img/gummies/gummy-apple-1.png?v=3", alt: "Мармелад со вкусом кислого яблока, 300 мг" },
        { src: "img/gummies/gummy-apple-2.png?v=3", alt: "Упаковка и мармелад со вкусом кислого яблока, 300 мг" }
      ]
    },
    {
      id: "gummy-apple-900",
      label: "D8 | 900 мг",
      mg: "900",
      count: "30",
      each: "30",
      shots: [
        { src: "img/gummies/gummy-apple-900-1.png?v=3", alt: "Мармелад со вкусом кислого яблока, 900 мг" },
        { src: "img/gummies/gummy-apple-900-2.png?v=3", alt: "Упаковка и мармелад со вкусом кислого яблока, 900 мг" }
      ]
    }
  ],
  melon: [
    {
      id: "gummy-melon",
      label: "D9 | 300 мг",
      mg: "300",
      count: "30",
      each: "10",
      shots: [
        { src: "img/gummies/gummy-melon-1.png?v=3", alt: "Мармелад со вкусом кислого арбуза, 300 мг" },
        { src: "img/gummies/gummy-melon-2.png?v=3", alt: "Упаковка и мармелад со вкусом кислого арбуза, 300 мг" }
      ]
    },
    {
      id: "gummy-melon-900",
      label: "D8 | 900 мг",
      mg: "900",
      count: "30",
      each: "30",
      shots: [
        { src: "img/gummies/gummy-melon-900-1.png?v=3", alt: "Мармелад со вкусом кислого арбуза, 900 мг" },
        { src: "img/gummies/gummy-melon-900-2.png?v=3", alt: "Упаковка и мармелад со вкусом кислого арбуза, 900 мг" }
      ]
    }
  ],
  blueberry: [
    {
      id: "gummy-raspberry",
      label: "D9 | 300 мг",
      mg: "300",
      count: "30",
      each: "10",
      shots: [
        { src: "img/gummies/gummy-blueberry-1.png?v=3", alt: "Мармелад со вкусом черники, 300 мг" },
        { src: "img/gummies/gummy-blueberry-2.png?v=3", alt: "Упаковка и мармелад со вкусом черники, 300 мг" }
      ]
    },
    {
      id: "gummy-raspberry-900",
      label: "D8 | 900 мг",
      mg: "900",
      count: "30",
      each: "30",
      shots: [
        { src: "img/gummies/gummy-blueberry-900-1.png?v=3", alt: "Мармелад со вкусом черники, 900 мг" },
        { src: "img/gummies/gummy-blueberry-900-2.png?v=3", alt: "Упаковка и мармелад со вкусом черники, 900 мг" }
      ]
    }
  ],
  lemonade: [
    {
      id: "gummy-lemonade",
      label: "D9 | 300 мг",
      mg: "300",
      count: "30",
      each: "10",
      shots: [
        { src: "img/gummies/gummy-lemonade-1.png?v=3", alt: "Мармелад со вкусом лимонада, 300 мг" },
        { src: "img/gummies/gummy-lemonade-2.png?v=3", alt: "Упаковка и мармелад со вкусом лимонада, 300 мг" }
      ]
    },
    {
      id: "gummy-lemonade-900",
      label: "D8 | 900 мг",
      mg: "900",
      count: "30",
      each: "30",
      shots: [
        { src: "img/gummies/gummy-lemonade-900-1.png?v=3", alt: "Мармелад со вкусом лимонада, 900 мг" },
        { src: "img/gummies/gummy-lemonade-900-2.png?v=3", alt: "Упаковка и мармелад со вкусом лимонада, 900 мг" }
      ]
    }
  ],
  baja: [
    {
      id: "gummy-baja",
      label: "D9 | 300 мг",
      mg: "300",
      count: "30",
      each: "10",
      shots: [
        { src: "img/gummies/gummy-baja-1.png?v=2", alt: "Мармелад со вкусом тропиков, 300 мг" },
        { src: "img/gummies/gummy-baja-2.png?v=2", alt: "Упаковка и мармелад со вкусом тропиков, 300 мг" }
      ]
    },
    {
      id: "gummy-baja-900",
      label: "D8 | 900 мг",
      mg: "900",
      count: "30",
      each: "30",
      shots: [
        { src: "img/gummies/gummy-baja-900-1.png?v=2", alt: "Мармелад со вкусом тропиков, 900 мг" },
        { src: "img/gummies/gummy-baja-900-2.png?v=2", alt: "Упаковка и мармелад со вкусом тропиков, 900 мг" }
      ]
    }
  ]
};

const galleries = {
  "Со вкусом сахарной ваты": [
    { src: "img/gummies/gummy-cotton-1.png?v=3", alt: "Мармелад со вкусом сахарной ваты" },
    { src: "img/gummies/gummy-cotton-2.png?v=3", alt: "Упаковка и мармелад со вкусом сахарной ваты" }
  ],
  "Со вкусом ягод с CBD": [
    { src: "img/gummies/gummy-dream-1.jpg?v=2", alt: "Мармелад со вкусом ягод с CBD" },
    { src: "img/gummies/gummy-dream-2.jpg?v=2", alt: "Упаковка и мармелад со вкусом ягод с CBD" }
  ],
  "Live Rosin — тропический микс": [
    { src: "img/gummies/gummy-tropical-1.jpg?v=2", alt: "Мармелад Live Rosin — тропический микс" },
    { src: "img/gummies/gummy-tropical-3.jpg?v=3", alt: "Мармелад Live Rosin — тропический микс" }
  ],
  "Набор вкусов": [
    { src: "img/gummies/marmelad-pack.jpg?v=7", alt: "Мармелад — набор вкусов" }
  ]
};

let shots = STRENGTHS.apricot[0].shots.slice();
let cartId = PRODUCT_ID;

function unitUsd() {
  const item = productById(cartId);
  return item ? item.price : product.price;
}
function bundleDeal(count) {
  const full = unitUsd() * count;
  const off = bundleOff(count, true);
  return { full, sale: full - off, off };
}
function paintBundle() {
  $("bundleRow").querySelectorAll(".bundle-card").forEach((card) => {
    const deal = bundleDeal(Number(card.dataset.count));
    const sale = card.querySelector("[data-role=sale]");
    const full = card.querySelector("[data-role=full]");
    const save = card.querySelector("[data-role=save]");
    if (sale) sale.textContent = money(deal.sale);
    if (full) full.textContent = money(deal.full);
    if (save) save.textContent = "экономия " + money(deal.off);
  });
  const sale = bundleDeal(qty).sale;
  const rate = typeof memberRate === "function" ? memberRate() : 1;
  $("purchasePrice").textContent = money(sale * rate);
  $("subPrice").textContent = money(sale * SUBSCRIBE_RATE);
  $("subWas").textContent = money(sale);
}
function showPrice(usd) {
  const rate = typeof memberRate === "function" ? memberRate() : 1;
  $("productPrice").textContent = money(usd * rate);
  paintBundle();
}
function mgText(value) {
  return Number(value).toLocaleString("ru-RU") + " мг";
}
function applyPackFacts(opts) {
  const mg = opts.mg || "300";
  const count = opts.count || "30";
  const each = opts.each || "10";
  const piece = opts.dose || mgText(each);
  if (opts.set) {
    const packs = opts.packs || "4";
    const packMg = opts.packMg || "300";
    const totalMg = opts.mg || String(Number(packs) * Number(packMg));
    const totalCount = opts.count || String(Number(packs) * 30);
    const perPack = String(Math.round(Number(totalCount) / Number(packs)));
    $("packMg").textContent = packs + " упаковки по " + mgText(packMg);
    $("packCount").textContent = totalCount + " штук мармелада в наборе";
    $("packEach").textContent = piece + " в мармеладе";
    $("doseEach").textContent = piece;
    $("packLine").textContent = "В наборе " + packs + " упаковки по " + mgText(packMg) + ": " + perPack + " штук в каждой, " + piece + " в каждом мармеладе, " + mgText(totalMg) + " всего.";
    return;
  }
  $("packMg").textContent = mgText(mg) + " в упаковке";
  $("packCount").textContent = count + " штук мармелада в упаковке";
  $("packEach").textContent = piece + " в мармеладе";
  $("doseEach").textContent = piece;
  $("packLine").textContent = "В упаковке " + count + " штук мармелада: " + piece + " в каждом мармеладе, " + mgText(mg) + " на пачку.";
}
function applyStrength(option) {
  cartId = option.id;
  applyPackFacts(option);
  renderShots(option.shots);
  const item = productById(cartId);
  showPrice(item ? item.price : product.price);
  rememberSeen(cartId);
  syncWish();
}
function paintStrength(key, preferredId) {
  const box = $("strengthBox");
  const row = $("strengthRow");
  const list = STRENGTHS[key];
  if (!list || !list.length) {
    box.hidden = true;
    row.innerHTML = "";
    return null;
  }
  box.hidden = false;
  const selected = list.find((item) => item.id === preferredId) || list[0];
  row.innerHTML = list.map((item) => {
    const on = item.id === selected.id;
    return `<button class="strength-card${on ? " on" : ""}" type="button" data-id="${item.id}"${on ? ' aria-pressed="true"' : ""}>${item.label}</button>`;
  }).join("");
  applyStrength(selected);
  return selected;
}
function hideStrength() {
  $("strengthBox").hidden = true;
  $("strengthRow").innerHTML = "";
}
function selectFlavorCard(card, preferredStrengthId) {
  if (!card) return;
  $("flavorGrid").querySelectorAll(".flavor-card").forEach((el) => {
    const on = el === card;
    el.classList.toggle("on", on);
    if (on) el.setAttribute("aria-pressed", "true");
    else el.removeAttribute("aria-pressed");
  });
  $("flavorName").textContent = card.dataset.name;
  $("productTitle").textContent = card.dataset.title;
  document.title = card.dataset.title + " — Trust-Club";
  if ($("leadFlavor")) $("leadFlavor").textContent = card.dataset.title;

  if (card.dataset.strengths && STRENGTHS[card.dataset.strengths]) {
    paintStrength(card.dataset.strengths, preferredStrengthId || card.dataset.id);
    return;
  }

  hideStrength();
  if (card.dataset.set) {
    applyPackFacts({
      set: true,
      packs: card.dataset.packs,
      packMg: card.dataset.packMg,
      mg: card.dataset.mg,
      count: card.dataset.count,
      each: card.dataset.each,
      dose: card.dataset.dose
    });
  } else {
    applyPackFacts({
      mg: card.dataset.mg,
      count: card.dataset.count,
      each: card.dataset.each,
      dose: card.dataset.dose
    });
  }
  renderShots(galleries[card.dataset.name] || [{ src: card.dataset.photo, alt: card.dataset.title }]);
  cartId = card.dataset.id || PRODUCT_ID;
  const item = productById(cartId);
  showPrice(item ? item.price : product.price);
  rememberSeen(cartId);
  syncWish();
}

const photo = $("productPhoto");
function renderShots(list) {
  shots = list && list.length ? list : [{ src: product.img, alt: product.name }];
  const thumbs = $("thumbs");
  if (shots.length < 2) {
    thumbs.innerHTML = "";
    thumbs.hidden = true;
  } else {
    thumbs.hidden = false;
    thumbs.innerHTML = shots.map((shot, i) => `<button type="button" class="${i === 0 ? "on" : ""}" data-shot="${i}"><img src="${shot.src}" alt="${shot.alt}" /></button>`).join("");
  }
  photo.src = shots[0].src;
  photo.alt = shots[0].alt;
}
$("thumbs").onclick = (e) => {
  const button = e.target.closest("[data-shot]");
  if (!button) return;
  const shot = shots[Number(button.dataset.shot)];
  photo.src = shot.src;
  photo.alt = shot.alt;
  $("thumbs").querySelectorAll("button").forEach((el) => el.classList.toggle("on", el === button));
};
function syncWish() {
  const on = favIds().includes(cartId);
  $("wish").classList.toggle("on", on);
  $("wish").setAttribute("aria-pressed", on ? "true" : "false");
}
$("wish").onclick = () => {
  const on = toggleFav(cartId);
  syncWish();
  if (!$("joinHero").hidden) paintJoinRails();
  toast(on ? "Добавлено в избранное" : "Убрано из избранного");
};

$("flavorGrid").onclick = (e) => {
  const card = e.target.closest(".flavor-card");
  if (!card) return;
  selectFlavorCard(card);
};

$("strengthRow").onclick = (e) => {
  const button = e.target.closest(".strength-card");
  if (!button) return;
  const flavor = $("flavorGrid").querySelector(".flavor-card.on");
  const key = flavor && flavor.dataset.strengths;
  const list = key ? STRENGTHS[key] : null;
  if (!list) return;
  const option = list.find((item) => item.id === button.dataset.id);
  if (!option) return;
  $("strengthRow").querySelectorAll(".strength-card").forEach((el) => {
    const on = el === button;
    el.classList.toggle("on", on);
    if (on) el.setAttribute("aria-pressed", "true");
    else el.removeAttribute("aria-pressed");
  });
  applyStrength(option);
};

$("bundleRow").onclick = (e) => {
  const card = e.target.closest(".bundle-card");
  if (!card) return;
  qty = Number(card.dataset.count) || 1;
  $("bundleRow").querySelectorAll(".bundle-card").forEach((el) => {
    const on = el === card;
    el.classList.toggle("on", on);
    if (on) el.setAttribute("aria-pressed", "true");
    else el.removeAttribute("aria-pressed");
  });
  paintBundle();
};
function pickPurchase(mode) {
  const sub = mode === "sub";
  $("oneTime").classList.toggle("on", !sub);
  $("oneTime").setAttribute("aria-pressed", sub ? "false" : "true");
  $("subscribeCard").classList.toggle("on", sub);
  $("subscribePick").setAttribute("aria-pressed", sub ? "true" : "false");
}
$("oneTime").onclick = () => pickPurchase("once");
$("subscribePick").onclick = () => pickPurchase("sub");
$("addProduct").onclick = () => {
  const subscribed = $("subscribeCard").classList.contains("on");
  if (subscribed) {
    askSubscription(cartId, qty);
    return;
  }
  addToCart(cartId, qty, qty > 1, false, "");
};
$("rewards").onclick = () => toast("Программа наград скоро появится");

const wantedFlavor = new URLSearchParams(location.search).get("item");
let bootCard = $("flavorGrid").querySelector(".flavor-card.on");
let bootStrength = null;
if (wantedFlavor) {
  const strengthHit = Object.keys(STRENGTHS).find((key) => STRENGTHS[key].some((item) => item.id === wantedFlavor));
  if (strengthHit) {
    bootCard = $("flavorGrid").querySelector(`[data-strengths="${strengthHit}"]`) || bootCard;
    bootStrength = wantedFlavor;
  } else {
    bootCard = Array.from(document.querySelectorAll("#flavorGrid .flavor-card")).find((el) => el.dataset.id === wantedFlavor) || bootCard;
  }
}
selectFlavorCard(bootCard, bootStrength);
