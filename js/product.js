const PRODUCT_ID = "milk";
const product = productById(PRODUCT_ID);
let qty = 1;

const sizeShot = { src: "img/ice-cream/milk-size.png", alt: "Размер мороженого Trust-Club" };
const galleries = {
  "Со вкусом молочного шоколада": [
    { src: "img/ice-cream/milk-pack.png?v=8", alt: product.name },
    { src: "img/ice-cream/milk-cones.jpg?v=7", alt: "Упаковка и мороженое со вкусом молочного шоколада" },
    sizeShot
  ],
  "С клубничным вкусом": [
    { src: "img/ice-cream/strawberry-pack.jpg?v=7", alt: "Мороженое с клубничным вкусом" },
    { src: "img/ice-cream/strawberry-cones.jpg?v=7", alt: "Упаковка и мороженое с клубничным вкусом" },
    sizeShot
  ],
  "Со вкусом мяты": [
    { src: "img/ice-cream/mint-pack.jpg?v=7", alt: "Мороженое со вкусом мяты" },
    { src: "img/ice-cream/mint-cones.jpg?v=7", alt: "Упаковка и мороженое со вкусом мяты" },
    sizeShot
  ],
  "Со вкусом печенья": [
    { src: "img/ice-cream/cookies-pack.jpg?v=7", alt: "Мороженое со вкусом печенья" },
    { src: "img/ice-cream/cookies-cones.jpg?v=7", alt: "Упаковка и мороженое со вкусом печенья" },
    sizeShot
  ],
  "Набор вкусов": [
    { src: "img/ice-cream/variety-four.jpg?v=9", alt: "Набор вкусов мороженого" },
    { src: "img/ice-cream/variety-stand.png?v=1", alt: "Набор вкусов на подставке" },
    { src: "img/ice-cream/variety-size-chocolate.jpg?v=2", alt: "Размер мороженого со вкусом молочного шоколада" },
    { src: "img/ice-cream/variety-size-strawberry.jpg?v=1", alt: "Размер мороженого с клубничным вкусом" },
    { src: "img/ice-cream/variety-size-cookies.jpg?v=1", alt: "Размер мороженого со вкусом печенья" }
  ]
};
let shots = galleries["Со вкусом молочного шоколада"];

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
  if (card.dataset.set) {
    $("packMg").textContent = "Несколько пачек в наборе";
    $("packCount").textContent = "Вкусы в наборе разные";
    $("packEach").textContent = "Дозировка на каждой пачке";
    $("doseEach").textContent = "своя доза";
    $("packLine").textContent = "Это набор разных вкусов. Число штук и миллиграммы написаны на каждой пачке.";
  } else {
    const mg = card.dataset.mg || "150";
    const count = card.dataset.count || "6";
    const each = card.dataset.each || "25";
    $("packMg").textContent = mg + " мг в упаковке";
    $("packCount").textContent = count + " штук мороженого в упаковке";
    $("packEach").textContent = each + " мг в мороженом";
    $("doseEach").textContent = each + " мг";
    $("packLine").textContent = "В упаковке " + count + " штук мороженого: " + each + " мг в каждом мороженом, " + mg + " мг на пачку.";
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
