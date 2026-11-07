const PRODUCT_ID = "dough-vp";
const product = productById(PRODUCT_ID);
let qty = 1;

const galleries = {
  "Со вкусом белого шоколада": [
    { src: "img/cookies/dough-white-1.jpg?v=5", alt: "Печенье со вкусом белого шоколада" },
    { src: "img/cookies/dough-white-2.jpg?v=5", alt: "Упаковка печенья со вкусом белого шоколада" },
    { src: "img/cookies/dough-white-3.jpg?v=5", alt: "Печенье Trust-Club со вкусом белого шоколада" },
    { src: "img/cookies/dough-white-4.jpg?v=5", alt: "Печенье со вкусом белого шоколада крупным планом" },
    { src: "img/cookies/dough-white-5.jpg?v=5", alt: "Упаковка и печенье со вкусом белого шоколада" }
  ],
  "Со вкусом темного шоколада": [
    { src: "img/cookies/dough-brownie-1.jpg?v=5", alt: "Печенье со вкусом темного шоколада" },
    { src: "img/cookies/dough-brownie-2.jpg?v=5", alt: "Упаковка печенья со вкусом темного шоколада" },
    { src: "img/cookies/dough-brownie-3.jpg?v=5", alt: "Печенье со вкусом темного шоколада крупным планом" }
  ],
  "Со вкусом темного шоколада, большая упаковка": [
    { src: "img/cookies/dough-brownie-1000-1.jpg?v=5", alt: "Печенье со вкусом темного шоколада, большая упаковка" },
    { src: "img/cookies/dough-brownie-1000-2.jpg?v=5", alt: "Упаковка печенья со вкусом темного шоколада, большая упаковка" },
    { src: "img/cookies/dough-brownie-3.jpg?v=5", alt: "Печенье со вкусом темного шоколада крупным планом" }
  ],
  "Со вкусом взбитых сливок": [
    { src: "img/cookies/dough-cream-1.jpg?v=5", alt: "Печенье со вкусом взбитых сливок" },
    { src: "img/cookies/dough-cream-2.jpg?v=5", alt: "Упаковка печенья со вкусом взбитых сливок" }
  ],
  "Со вкусом праздничного торта": [
    { src: "img/cookies/dough-cake-1.jpg?v=5", alt: "Печенье со вкусом праздничного торта" },
    { src: "img/cookies/dough-cake-2.jpg?v=5", alt: "Упаковка печенья со вкусом праздничного торта" },
    { src: "img/cookies/dough-cake-3.jpg?v=5", alt: "Печенье со вкусом праздничного торта крупным планом" }
  ],
  "Со вкусом малины": [
    { src: "img/cookies/dough-raspberry-2.jpg?v=5", alt: "Печенье со вкусом малины" },
    { src: "img/cookies/dough-raspberry-1.jpg?v=5", alt: "Упаковка печенья со вкусом малины" },
    { src: "img/cookies/dough-raspberry-3.jpg?v=5", alt: "Печенье со вкусом малины крупным планом" },
    { src: "img/cookies/dough-raspberry-4.jpg?v=5", alt: "Печенье со вкусом малины в руке" }
  ],
  "Набор печенья": [
    { src: "img/cookies/dough-variety-1.jpg?v=6", alt: "Набор печенья Trust-Club" }
  ],
  "Со вкусом белого шоколада, большая упаковка": [
    { src: "img/cookies/dough-white-1.jpg?v=5", alt: "Печенье со вкусом белого шоколада, большая упаковка" },
    { src: "img/cookies/dough-white-2.jpg?v=5", alt: "Упаковка печенья со вкусом белого шоколада, большая упаковка" },
    { src: "img/cookies/dough-white-3.jpg?v=5", alt: "Печенье Trust-Club со вкусом белого шоколада, большая упаковка" },
    { src: "img/cookies/dough-white-4.jpg?v=5", alt: "Печенье со вкусом белого шоколада крупным планом" },
    { src: "img/cookies/dough-white-5.jpg?v=5", alt: "Упаковка и печенье со вкусом белого шоколада" }
  ]
};
let shots = galleries["Набор печенья"];

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
showPrice(product.price);

$("flavorGrid").onclick = (e) => {
  const card = e.target.closest(".flavor-card");
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
  const mgText = (value) => Number(value).toLocaleString("ru-RU") + " мг";
  if (card.dataset.set) {
    const packs = card.dataset.packs || "4";
    const packMg = card.dataset.packMg || "200";
    const mg = card.dataset.mg || String(Number(packs) * Number(packMg));
    const count = card.dataset.count || String(Number(packs) * 40);
    const each = card.dataset.each || "5";
    const perPack = String(Math.round(Number(count) / Number(packs)));
    $("packMg").textContent = packs + " упаковки по " + mgText(packMg);
    $("packCount").textContent = count + " штук печенья в наборе";
    $("packEach").textContent = mgText(each) + " в печенье";
    $("doseEach").textContent = mgText(each);
    $("packLine").textContent = "В наборе " + packs + " упаковки по " + mgText(packMg) + ": " + perPack + " штук в каждой, " + mgText(each) + " в каждом печенье, " + mgText(mg) + " всего.";
  } else {
    const mg = card.dataset.mg || "200";
    const count = card.dataset.count || "40";
    const each = card.dataset.each || "5";
    $("packMg").textContent = mgText(mg) + " в упаковке";
    $("packCount").textContent = count + " штук печенья в упаковке";
    $("packEach").textContent = mgText(each) + " в печенье";
    $("doseEach").textContent = mgText(each);
    $("packLine").textContent = "В упаковке " + count + " штук печенья: " + mgText(each) + " в каждом печенье, " + mgText(mg) + " на пачку.";
  }
  renderShots(galleries[card.dataset.name] || [{ src: card.dataset.photo, alt: card.dataset.title }]);
  cartId = card.dataset.id || PRODUCT_ID;
  const item = productById(cartId);
  showPrice(item ? item.price : product.price);
  rememberSeen(cartId);
  syncWish();
};

const photo = $("productPhoto");
function renderShots(list) {
  shots = list;
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
renderShots(shots);
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
rememberSeen(cartId);
syncWish();

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
if (wantedFlavor) {
  const picked = Array.from(document.querySelectorAll("#flavorGrid .flavor-card")).find((el) => el.dataset.id === wantedFlavor);
  if (picked) $("flavorGrid").onclick({ target: picked });
}
