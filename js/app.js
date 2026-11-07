const USD_RUB = 95;
const FREE_SHIPPING_FROM_RUB = 10000;
const DELIVERY_FEE_RUB = 3000;
const REGIONS = ["Адыгея","Алтай","Алтайский край","Амурская область","Архангельская область","Астраханская область","Башкортостан","Белгородская область","Брянская область","Бурятия","Владимирская область","Волгоградская область","Вологодская область","Воронежская область","Дагестан","Донецкая Народная Республика","Еврейская автономная область","Забайкальский край","Запорожская область","Ивановская область","Ингушетия","Иркутская область","Кабардино-Балкарская Республика","Калининградская область","Калмыкия","Калужская область","Камчатский край","Карачаево-Черкесская Республика","Карелия","Кемеровская область — Кузбасс","Кировская область","Коми","Костромская область","Краснодарский край","Красноярский край","Крым","Курганская область","Курская область","Ленинградская область","Липецкая область","Луганская Народная Республика","Магаданская область","Марий Эл","Мордовия","Москва","Московская область","Мурманская область","Ненецкий автономный округ","Нижегородская область","Новгородская область","Новосибирская область","Омская область","Оренбургская область","Орловская область","Пензенская область","Пермский край","Приморский край","Псковская область","Ростовская область","Рязанская область","Самарская область","Санкт-Петербург","Саратовская область","Саха (Якутия)","Сахалинская область","Свердловская область","Севастополь","Северная Осетия — Алания","Смоленская область","Ставропольский край","Тамбовская область","Татарстан","Тверская область","Томская область","Тульская область","Тыва","Тюменская область","Удмуртская Республика","Ульяновская область","Хабаровский край","Хакасия","Ханты-Мансийский автономный округ — Югра","Херсонская область","Челябинская область","Чеченская Республика","Чувашская Республика","Чукотский автономный округ","Ямало-Ненецкий автономный округ","Ярославская область"];

const ANNOUNCE = [
  ["При заказе от 10000 доставка бесплатная", "#shop"],
  ["Нажмите сюда: 1+1 на мармелад Soda Rosin", "#shop"],
  ["Впервые у нас? Возьмите набор, где есть всё", "#shop"]
];

const PRODUCTS = [
  { id: "starter", name: "Стартовый набор", price: 164.2, reviews: "16", badge: "ВЫГОДА 21%", tab: "variety", img: "img/packs/starter-pack.jpg?v=10" },
  { id: "box", name: "Набор Trust-Club", price: 199.99, reviews: "32", badge: "ВЫГОДА 31%", tab: "variety", img: "img/packs/trust-club-box.jpg?v=11" },
  { id: "coned-vp", name: "Мороженки — набор вкусов", price: 168.41, reviews: "61", badge: "ВЫГОДА 33%", tab: "variety", img: "img/ice-cream/variety-four.jpg?v=9" },
  { id: "dough-vp", name: "Набор печенья", price: 147.36, reviews: "21", badge: "ВЫГОДА 33%", tab: "variety", img: "img/cookies/dough-variety-1.jpg?v=6" },
  { id: "popcorn-vp", name: "Попкорн — набор вкусов", price: 136.83, reviews: "105", badge: "ВЫГОДА 44%", tab: "new", img: "img/popcorn/popcorn-pack.jpg?v=6" },
  { id: "gummies-vp", name: "Мармелад — набор вкусов", price: 202.09, reviews: "28", badge: "ВЫГОДА 29%", tab: "picks", img: "img/gummies/marmelad-pack.jpg?v=7" },
  { id: "stockup", name: "Набор про запас", price: 315.78, reviews: "3", badge: "ВЫГОДА 52%", tab: "new", img: "img/packs/stockup-pack.jpg?v=7" },
  { id: "limited", name: "Бокс Trust-Club — лимитированный", price: 70.52, reviews: "", badge: "СКОРО", tab: "new", soon: true, img: "img/packs/limited-soon.png" },
  { id: "milk", name: "Мороженое со вкусом молочного шоколада", price: 42.09, reviews: "97", tab: "sellers", img: "img/ice-cream/best-milk-chocolate.png?v=9" },
  { id: "strawberry-pop", name: "Попкорн с клубничным вкусом", price: 46.31, reviews: "105", tab: "new", img: "img/popcorn/best-popcorn-strawberry.png?v=1" },
  { id: "birthday", name: "Печенье со вкусом праздничного торта", price: 36.83, reviews: "113", tab: "sellers", img: "img/cookies/dough-cake-1.jpg?v=5" },
  { id: "tropical", name: "Мармелад Live Rosin — тропический микс", price: 50.52, reviews: "40", tab: "picks", img: "img/gummies/gummy-tropical.jpg?v=2" },
  { id: "baja", name: "Мармелад со вкусом тропиков", price: 50.52, reviews: "83", tab: "sellers", img: "img/gummies/best-gummies-baja.png?v=3" },
  { id: "shortcake", name: "Мороженое с клубничным вкусом", price: 42.09, reviews: "97", tab: "picks", img: "img/ice-cream/shortcake-card.jpg?v=7" },
  { id: "mint", name: "Мороженое со вкусом мяты", price: 42.09, reviews: "", hidden: true, img: "img/ice-cream/mint-pack.jpg?v=1" },
  { id: "cookies", name: "Мороженое со вкусом печенья", price: 42.09, reviews: "", hidden: true, img: "img/ice-cream/variety-four.jpg?v=9" },
  { id: "cake", name: "Мороженое со вкусом праздничного торта", price: 42.09, reviews: "", hidden: true, img: "img/ice-cream/variety-four.jpg?v=9" },
  { id: "peppermint", name: "Мороженое со вкусом перечной мяты", price: 42.09, reviews: "", hidden: true, img: "img/ice-cream/variety-four.jpg?v=9" },
  { id: "cbd", name: "Мороженое со вкусом шоколада с CBD", price: 37.88, reviews: "", hidden: true, img: "img/ice-cream/variety-four.jpg?v=9" },
  { id: "dough-white", name: "Печенье со вкусом белого шоколада", price: 36.83, reviews: "", hidden: true, img: "img/cookies/dough-white-1.jpg?v=5" },
  { id: "dough-cream", name: "Печенье со вкусом взбитых сливок", price: 36.83, reviews: "", hidden: true, img: "img/cookies/dough-cream-1.jpg?v=5" },
  { id: "dough-brownie", name: "Печенье со вкусом темного шоколада", price: 36.83, reviews: "", hidden: true, img: "img/cookies/dough-brownie-1.jpg?v=5" },
  { id: "dough-brownie-1000", name: "Печенье со вкусом темного шоколада, большая упаковка", price: 92.62, reviews: "", hidden: true, img: "img/cookies/dough-brownie-1000-1.jpg?v=5" },
  { id: "dough-cake", name: "Печенье со вкусом праздничного торта", price: 36.83, reviews: "", hidden: true, img: "img/cookies/dough-cake-1.jpg?v=5" },
  { id: "dough-raspberry", name: "Печенье со вкусом малины", price: 36.83, reviews: "", hidden: true, img: "img/cookies/dough-raspberry-2.jpg?v=5" },
  { id: "dough-chip-1000", name: "Печенье со вкусом белого шоколада, большая упаковка", price: 92.62, reviews: "", hidden: true, img: "img/cookies/dough-white-1.jpg?v=5" },
  { id: "gummy-peach", name: "Мармелад со вкусом абрикоса", price: 50.52, reviews: "", hidden: true, img: "img/gummies/gummy-peach.png?v=5" },
  { id: "gummy-peach-900", name: "Мармелад со вкусом абрикоса", price: 126.31, reviews: "", hidden: true, img: "img/gummies/gummy-peach-900.png?v=5" },
  { id: "gummy-baja", name: "Мармелад со вкусом тропиков", price: 50.52, reviews: "", hidden: true, img: "img/gummies/gummy-baja.png?v=2" },
  { id: "gummy-baja-900", name: "Мармелад со вкусом тропиков", price: 126.31, reviews: "", hidden: true, img: "img/gummies/gummy-baja-900.png?v=2" },
  { id: "gummy-cotton", name: "Мармелад со вкусом сахарной ваты", price: 50.52, reviews: "", hidden: true, img: "img/gummies/gummy-cotton.png?v=3" },
  { id: "gummy-lemonade", name: "Мармелад со вкусом лимонада", price: 50.52, reviews: "", hidden: true, img: "img/gummies/gummy-lemonade.png?v=3" },
  { id: "gummy-lemonade-900", name: "Мармелад со вкусом лимонада", price: 126.31, reviews: "", hidden: true, img: "img/gummies/gummy-lemonade-900.png?v=3" },
  { id: "gummy-apple", name: "Мармелад со вкусом кислого яблока", price: 50.52, reviews: "", hidden: true, img: "img/gummies/gummy-apple.png?v=3" },
  { id: "gummy-apple-900", name: "Мармелад со вкусом кислого яблока", price: 126.31, reviews: "", hidden: true, img: "img/gummies/gummy-apple-900.png?v=3" },
  { id: "gummy-melon", name: "Мармелад со вкусом кислого арбуза", price: 50.52, reviews: "", hidden: true, img: "img/gummies/gummy-melon.png?v=3" },
  { id: "gummy-melon-900", name: "Мармелад со вкусом кислого арбуза", price: 126.31, reviews: "", hidden: true, img: "img/gummies/gummy-melon-900.png?v=3" },
  { id: "gummy-raspberry", name: "Мармелад со вкусом черники", price: 50.52, reviews: "", hidden: true, img: "img/gummies/gummy-blueberry.png?v=3" },
  { id: "gummy-raspberry-900", name: "Мармелад со вкусом черники", price: 126.31, reviews: "", hidden: true, img: "img/gummies/gummy-blueberry-900.png?v=3" },
  { id: "gummy-dream", name: "Мармелад со вкусом ягод с CBD", price: 75.78, reviews: "", hidden: true, img: "img/gummies/gummy-dream.jpg?v=2" },
  { id: "club-sub", name: "Подписка Trust-Club", price: 52.63, reviews: "", hidden: true, img: "img/brand/trust-club-logo.svg" }
];

const TABS = [
  { id: "variety", label: "Наборы" },
  { id: "sellers", label: "Хиты" },
  { id: "new", label: "Новинки" },
  { id: "picks", label: "Выбор команды" }
];

const REVIEWS = [
  ["Молочный шоколад тает и не горчит. Эффект мягкий, я спокойно досмотрела фильм и уснула без гонки мыслей.", "Марина К.", "Мороженое"],
  ["Набор мороженого к сериалу — топ. Со вкусом праздничного торта на двоих самое то, утром голова свежая.", "Маркус Д.", "Мороженое"],
  ["Печенье со вкусом белого шоколада сладкое в меру. Разделила пачку с подругой, обе остались довольны.", "Алина В.", "Печенье"],
  ["Мармелад со вкусом тропиков кислый, как газировка. Подействовало примерно через час и держалось спокойно.", "Никита Р.", "Мармелад"],
  ["Брал набор на выходные. Упаковка пришла обычной коробкой, внутри всё целое, вкусы не слипаются в одну сладость.", "Олег П.", "Наборы"],
  ["Нравится, что дозировка написана прямо на пачке. Беру по половине — мне хватает.", "Дарья М.", "Дозировка"]
];

const REVIEWS_WALL = [
  { name: "Кирилл Л.", city: "Омск", text: "Огонь. Переживал за доставку, но доставили чуть раньше чем ожидалось. Каждый раз как в первый — очень вкусно и реально работает. Беру снова.", stars: 5, photo: "img/reviews/BzNfyy--l_mid.jpg", productId: "mint" },
  { name: "Татьяна М.", city: "Казань", text: "Хотела взять мороженое со вкусом молочного шоколада, в итоге взяла набор печенья — оказалось довольна, получилось даже вкуснее, чем ожидала.", stars: 5, photo: "img/reviews/o3D3bi6Qzc_mid.jpg", productId: "dough-vp" },
  { name: "Артём Р.", city: "Новосибирск", text: "Мармелад точно работает, но только со второй мармеладки. Другие вкусы тоже рабочие. Закажу ещё.", stars: 4, photo: "img/reviews/jRfgASIN7_mid.jpg", productId: "gummy-baja" },
  { name: "Екатерина У.", city: "Москва", text: "Обожаю этот мармелад. Со вкусом абрикоса — мой любимый в линейке.", stars: 5, photo: "img/reviews/eSDRZ2C5r_mid.jpg", productId: "gummy-peach" },
  { name: "Никита Г.", city: "Екатеринбург", text: "Кислое яблоко просто супер. Ем по половине — хватает на вечер.", stars: 5, photo: "", productId: "gummy-apple" },
  { name: "Антон Б.", city: "Санкт-Петербург", text: "Вкус отличный, эффект ровный. Коробка пришла без лишних надписей.", stars: 5, photo: "img/reviews/hvHsYmUTF_mid.jpg", productId: "tropical" },
  { name: "Егор Е.", city: "Краснодар", text: "Взял две пачки печенья. Вкусы яркие, доставка в касание все 10. Вернусь еще раз объязательно. Рекомендасьен!", stars: 5, photo: "img/reviews/rZk6hgLn_6_mid.jpg", productId: "dough-cream" },
  { name: "Алина В.", city: "Самара", text: "Печенье со вкусом белого шоколада сладкое в меру. Разделила пачку с подругой — обе довольны.", stars: 5, photo: "img/reviews/8bIfXBkW5_mid.jpg", productId: "dough-white" },
  { name: "Маркус Д.", city: "Челябинск", text: "Мороженое со вкусом праздничного торта к сериалу это топ!!! — на двоих самое то, главное утром голова свежая.", stars: 5, photo: "img/reviews/NAuljVFeM_mid.jpg", productId: "coned-vp" },
  { name: "Дарья М.", city: "Нижний Новгород", text: "Нравится, что дозировка написана прямо на пачке. Беру по половине мне хватает.", stars: 5, photo: "img/reviews/HTDcjCLwQ_mid.jpg", productId: "" },
  { name: "Олег П.", city: "Ростов-на-Дону", text: "Набор на выходные пришёл обычной коробкой, внутри всё целое, вкусы не смешались.", stars: 5, photo: "img/reviews/Tx0EnPir__mid.jpg", productId: "starter" },
  { name: "Катя Н.", city: "Пермь", text: "Мармелад со вкусом лимонада мягкий, можно добавить в сок или газированный напиток, эффект классный. Удобно.", stars: 5, photo: "img/reviews/WfqPfEORFY_mid.jpg", productId: "gummy-lemonade" },
  { name: "Роман Т.", city: "Воронеж", text: "Мармелад со вкусом лимонада кислый и свежий. Пачка закончилась как только я ее достал, те кто в теме знают что это такое и не дают шансов дожить до завтра!", stars: 5, photo: "img/reviews/znsGBf1lUU_mid.jpg", productId: "gummy-lemonade" },
  { name: "Сергей Л.", city: "Уфа", text: "Мороженое со вкусом молочного шоколада как обычный десерт. Доставили без опознавательных знаков как и обещали.", stars: 5, photo: "img/reviews/_hnlslu0y_mid.jpg", productId: "milk" },
  { name: "Виктор А.", city: "Тюмень", text: "Подписка окупилась со второго заказа: скидка 20% реально чувствуется на наборах.", stars: 5, photo: "", productId: "box" },
  { name: "Елена Ф.", city: "Красноярск", text: "Написала в чат номер заказа — адрес уточнили быстро, привезли вовремя.", stars: 5, photo: "", productId: "gummies-vp" },
  { name: "Павел Д.", city: "Волгоград", text: "Стартовый набор — лучший способ попробовать разные вкусы Trust-Club.", stars: 5, photo: "", productId: "starter" },
  { name: "Марина К.", city: "Иркутск", text: "Молочный шоколад тает и не горчит. Спокойно досмотрела фильм и уснула.", stars: 5, photo: "", productId: "milk" }
];

const COMPARE = [
  "Независимые лабораторные тесты",
  "Понятная дозировка на упаковке",
  "Ингредиенты из США",
  "Формулы высокой крепости",
  "Незаметная доставка",
  "Высокие оценки вкуса и текстуры",
  "Более 1 500 проверенных отзывов"
];

const FAQ = [
  ["Как оформить заказ?", "Достаточно просто: выберите товар и оплатите его. После оплаты вы получите уникальный номер заказа — запомните его или сделайте скриншот: он понадобится для оформления доставки."],
  ["Оформление доставки", "Для оформления доставки обратитесь в чат поддержки, укажите свой уникальный номер заказа, а также уточните точный адрес — куда нужно доставить. Trust-Club доставит в мгновение."],
  ["Правила подписки Trust-Club", "Подписка действует 1 месяц с момента оплаты и даёт скидку 20% на все товары в каталоге для вашего аккаунта. Подписка не продлевается автоматически. Отмена возможна в личном кабинете; оплата за текущий период не возвращается. Скидка не суммируется с другими акциями на одну позицию, если иное не указано. Покупатель подтверждает возраст 21+ и согласие на обработку данных для доставки заказов."],
  ["Что такое дельта-9 ТГК?", "Дельта-9-тетрагидроканнабинол, основной психоактивный каннабиноид растения Cannabis. Именно он в значительной степени отвечает за опьяняющий эффект каннабиса."],
  ["Дельта-9 ТГК легален?", "В РФ дельта-9 запрещён законом."],
  ["Есть возрастной порог?", "Trust-Club просит, чтобы покупателю было 21 год или больше."],
  ["Как получают дельта-9 из конопли?", "Дельта-9 естественным образом содержится в конопле. Этот концентрат получают путём переработки растений Cannabis."],
  ["Продукты проверяют в лаборатории?", "Все продукты проверены лабораторией Trust-Club. Результаты находятся в свободном доступе. В каждой упаковке есть QR-код на протокол анализа."]
];

const SUB_TERMS = [
  ["Срок", "Подписка действует 1 календарный месяц с момента подтверждения оплаты."],
  ["Скидка", "На время действия подписки на все товары каталога применяется скидка 20% для аккаунта, с которого оформлена покупка."],
  ["Продление", "Автопродления нет. Чтобы продлить, оформите подписку снова в личном кабинете."],
  ["Отмена", "Отменить можно в личном кабинете. Оплата за уже начавшийся период не возвращается."],
  ["Оплата", "Подписка активируется только после поступления оплаты. До этого скидка не действует."],
  ["Акции", "Скидка по подписке не суммируется с другими персональными скидками на одну позицию, если иное прямо не указано."],
  ["Возраст и данные", "Покупатель подтверждает, что ему 21 год или больше, и соглашается на сохранение данных профиля для заказов и доставки."],
  ["Ограничения", "Trust-Club может приостановить подписку при нарушении правил магазина, мошенничестве или злоупотреблении аккаунтом."]
];

const POSTS = [
  ["22 сент. 2026", "High Rocks: 7 причин, почему леденцы 100 мг дельта-9 + 100 мг CBD ощущаются мягко", "img/blog/article-high-rocks.png"],
  ["15 сент. 2026", "25 мг съедобного продукта опьяняют? Что говорит наука", "img/blog/article-25mg.png"],
  ["8 сент. 2026", "Dope Dough и попкорн: почему из них получается пара для перекуса", "img/blog/article-dough-popcorn.png"]
];

const FREQ_LABEL = {
  month: "Каждый месяц"
};
const SUB_FREQ = "month";
const SUBSCRIBE_RATE = 0.8;

function productById(id) {
  return PRODUCTS.find((p) => p.id === id);
}

function bundleOff(qty, bundle) {
  if (!bundle) return 0;
  const count = Number(qty) || 0;
  if (count >= 3) return 10;
  if (count === 2) return 5;
  return 0;
}

function loadJson(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "");
    return value ?? fallback;
  } catch {
    return fallback;
  }
}
function users() {
  const list = loadJson("bb-users", []);
  return Array.isArray(list) ? list : [];
}
function saveUsers(list) {
  try {
    localStorage.setItem("bb-users", JSON.stringify(list));
  } catch {
    throw new Error("storage");
  }
}
function subscriptions() { return loadJson("bb-subs", []); }
function saveSubscriptions(list) { localStorage.setItem("bb-subs", JSON.stringify(list)); }
function passHash(value) {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(16);
}
function esc(value) {
  return String(value).replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[ch]));
}
function validEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
function currentUser() {
  const email = localStorage.getItem("bb-session");
  if (!email) return null;
  return users().find((user) => user.email === email) || null;
}
function registerUser(name, email, password) {
  const cleanName = String(name || "").trim();
  const cleanEmail = String(email || "").trim().toLowerCase();
  const cleanPass = String(password || "");
  if (cleanName.length < 2) return "Напишите имя";
  if (!validEmail(cleanEmail)) return "Введите эл. почту, например name@mail.ru";
  if (cleanPass.length < 6) return "Пароль — не короче 6 символов";
  const list = users();
  if (list.some((user) => user.email === cleanEmail) || cleanEmail === ADMIN_EMAIL) {
    return "Эта почта уже зарегистрирована. Нажмите «Уже есть аккаунт? Войти»";
  }
  list.push({ name: cleanName, email: cleanEmail, pass: passHash(cleanPass) });
  try {
    saveUsers(list);
    localStorage.setItem("bb-session", cleanEmail);
  } catch {
    return "Не удалось сохранить аккаунт. Выйдите из режима инкогнито или разрешите сайту хранить данные";
  }
  return "";
}
function loginUser(email, password) {
  const cleanEmail = String(email || "").trim().toLowerCase();
  const cleanPass = String(password || "");
  if (!validEmail(cleanEmail)) return "Введите эл. почту";
  if (cleanPass.length < 6) return "Пароль — не короче 6 символов";
  const user = users().find((item) => item.email === cleanEmail);
  if (!user || user.pass !== passHash(cleanPass)) {
    return "Почта или пароль не совпадают. Если аккаунта ещё нет — нажмите «Нет аккаунта? Зарегистрироваться»";
  }
  try {
    localStorage.setItem("bb-session", cleanEmail);
  } catch {
    return "Не удалось сохранить вход. Выйдите из режима инкогнито или разрешите сайту хранить данные";
  }
  return "";
}
function logoutUser() {
  localStorage.removeItem("bb-session");
}

const PROFILE_FIELDS = [
  ["firstName", "Имя", "given-name"],
  ["lastName", "Фамилия", "family-name"],
  ["city", "Город", "address-level2"],
  ["street", "Улица", "address-line1"],
  ["house", "Дом", ""],
  ["apt", "Квартира", ""]
];
const CLUB_SUB_ID = "club-sub";

function profiles() {
  const data = loadJson("bb-profiles", {});
  return data && typeof data === "object" ? data : {};
}
function saveProfiles(map) {
  localStorage.setItem("bb-profiles", JSON.stringify(map));
}
function userProfile(email) {
  const key = String(email || "").trim().toLowerCase();
  if (!key) return null;
  const row = profiles()[key];
  return row && typeof row === "object" ? row : null;
}
function profileComplete(email) {
  const row = userProfile(email);
  if (!row) return false;
  return PROFILE_FIELDS.every(([field]) => String(row[field] || "").trim().length > 0);
}
function saveUserProfile(email, payload) {
  const key = String(email || "").trim().toLowerCase();
  if (!key) return "Нет почты аккаунта";
  const clean = {};
  for (const [field, label] of PROFILE_FIELDS) {
    const value = String(payload[field] || "").trim();
    if (!value) return "Заполните поле: " + label;
    clean[field] = value;
  }
  const map = profiles();
  map[key] = clean;
  try {
    saveProfiles(map);
  } catch {
    return "Не удалось сохранить данные. Разрешите сайту хранить данные";
  }
  return "";
}
function profileSummaryHtml(email) {
  const row = userProfile(email);
  if (!row) return "";
  const name = [row.firstName, row.lastName].filter(Boolean).join(" ");
  const address = [
    row.city,
    row.street ? "ул. " + row.street : "",
    row.house ? "д. " + row.house : "",
    row.apt ? "кв. " + row.apt : ""
  ].filter(Boolean).join(", ");
  const lines = [name, address].filter(Boolean);
  if (!lines.length) return "";
  return lines.map((line) => `<span>${esc(line)}</span>`).join("");
}
function ensureJoinProfileMeta() {
  let box = $("joinProfileMeta");
  if (box) return box;
  const host = $("joinLead") || $("joinMemberLead");
  if (!host || !host.parentNode) return null;
  box = document.createElement("p");
  box.className = "join-profile-meta";
  box.id = "joinProfileMeta";
  box.hidden = true;
  host.after(box);
  return box;
}

let pendingSub = null;
let joinMode = "register";

function planLine(order) {
  const item = productById(order.id);
  if (!item) return "";
  return item.name + ", " + order.qty + " шт., " + FREQ_LABEL.month.toLowerCase() + ".";
}
function rememberSub(id, qty, freq) {
  const user = currentUser();
  const item = productById(id);
  if (!user || !item) return;
  const period = SUB_FREQ;
  const count = Math.max(1, Number(qty) || 1);
  const list = subscriptions();
  const existing = list.find((sub) => sub.email === user.email && sub.id === id && sub.freq === period);
  if (existing) {
    existing.qty = count;
    existing.freq = period;
  } else {
    const uid = (window.crypto && crypto.randomUUID) ? crypto.randomUUID() : String(Date.now());
    list.push({ uid, email: user.email, id, qty: count, freq: period });
  }
  saveSubscriptions(list);
}
function hasActiveSubscription(user) {
  const u = user || currentUser();
  if (!u || isAdmin(u)) return false;
  return subscriptions().some((sub) => sub.email === u.email && sub.id === CLUB_SUB_ID);
}
function memberRate() {
  return hasActiveSubscription() ? SUBSCRIBE_RATE : 1;
}
function memberPrice(usd) {
  return Number(usd || 0) * memberRate();
}
function cartLineRate(line) {
  if (!line || line.id === CLUB_SUB_ID) return 1;
  if (hasActiveSubscription()) return SUBSCRIBE_RATE;
  if (line.subscribe) return SUBSCRIBE_RATE;
  return 1;
}
function placeClubSubscription() {
  const user = currentUser();
  const item = productById(CLUB_SUB_ID);
  if (!item || !user) return false;
  if (hasActiveSubscription(user)) {
    toast("Подписка уже активна");
    return false;
  }
  if (!profileComplete(user.email)) {
    toast("Сначала заполните все поля");
    return false;
  }
  const period = SUB_FREQ;
  const line = state.cart.find((entry) => entry.id === CLUB_SUB_ID && entry.subscribe);
  if (line) {
    line.qty = 1;
    line.bundle = false;
    line.subscribe = true;
    line.freq = period;
  } else state.cart.push({ id: CLUB_SUB_ID, qty: 1, bundle: false, subscribe: true, freq: period });
  pendingSub = null;
  saveCart();
  paintJoin();
  openClubPaySheet();
  toast("Оплатите подписку — скидка −20% включится после поступления денег");
  return true;
}
function activateClubSubscriptionPaid() {
  const user = currentUser();
  if (!user || isAdmin(user)) return false;
  rememberSub(CLUB_SUB_ID, 1, SUB_FREQ);
  state.cart = state.cart.filter((line) => line.id !== CLUB_SUB_ID);
  saveCart();
  paintJoin();
  if ($("grid")) renderGrid();
  if ($("best")) renderBest();
  return true;
}
function clubPayDigits(value) {
  return String(value || "").replace(/\D/g, "");
}
function cartPayTotalRub() {
  return Math.round(cartGoodsUsd() * USD_RUB) + deliveryRubFor();
}
function formatRub(amount) {
  return Math.round(Number(amount) || 0).toLocaleString("ru-RU") + " ₽";
}
function formatCardNumber(value) {
  const digits = clubPayDigits(value).slice(0, 16);
  return digits.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
}
function formatCardExp(value) {
  let digits = clubPayDigits(value).slice(0, 4);
  if (digits.length >= 1) {
    const first = Number(digits[0]);
    if (first > 1) digits = "0" + digits;
  }
  if (digits.length >= 2) {
    let month = Number(digits.slice(0, 2));
    if (month === 0) month = 1;
    if (month > 12) month = 12;
    digits = String(month).padStart(2, "0") + digits.slice(2);
  }
  if (digits.length <= 2) return digits;
  return digits.slice(0, 2) + "/" + digits.slice(2);
}
function bindPayFieldMasks() {
  const card = $("clubPayCard");
  const exp = $("clubPayExp");
  const cvc = $("clubPayCvc");
  if (card) {
    card.setAttribute("maxlength", "19");
    card.setAttribute("placeholder", "0000 0000 0000 0000");
    card.addEventListener("input", () => {
      const start = card.selectionStart;
      const before = card.value;
      card.value = formatCardNumber(card.value);
      const diff = card.value.length - before.length;
      const pos = Math.max(0, (start || 0) + diff);
      try { card.setSelectionRange(pos, pos); } catch {}
    });
  }
  if (exp) {
    exp.setAttribute("maxlength", "5");
    exp.setAttribute("placeholder", "ММ/ГГ");
    exp.addEventListener("input", () => {
      exp.value = formatCardExp(exp.value);
    });
  }
  if (cvc) {
    cvc.setAttribute("maxlength", "4");
    cvc.setAttribute("inputmode", "numeric");
    cvc.setAttribute("placeholder", "000");
    cvc.addEventListener("input", () => {
      cvc.value = clubPayDigits(cvc.value).slice(0, 4);
    });
  }
}
function fillPayForm(body, options) {
  const opts = options || {};
  const amountLabel = opts.amountLabel || formatRub(opts.amountRub || 0);
  const lead = opts.lead || "Номер заказа будет выдан только после поступления оплаты.";
  body.innerHTML = `
    <p class="join-sub-lead">${lead}</p>
    <p class="join-sub-price"><span>К оплате</span><strong>${amountLabel}</strong></p>
    <form id="clubPayForm" novalidate>
      <input id="clubPayCard" name="card" type="text" inputmode="numeric" autocomplete="cc-number" maxlength="19" placeholder="0000 0000 0000 0000" aria-label="Номер карты" />
      <div class="club-pay-row">
        <input id="clubPayExp" name="exp" type="text" inputmode="numeric" autocomplete="cc-exp" maxlength="5" placeholder="ММ/ГГ" aria-label="Срок карты" />
        <input id="clubPayCvc" name="cvc" type="password" inputmode="numeric" autocomplete="cc-csc" maxlength="4" placeholder="000" aria-label="CVC" />
      </div>
      <p class="form-error" id="clubPayError" hidden></p>
      <button class="btn join-submit" type="submit" id="clubPaySubmit">Оплатить ${amountLabel}</button>
    </form>`;
  bindPayFieldMasks();
  $("clubPayForm").onsubmit = (event) => {
    event.preventDefault();
    if (typeof opts.onPay === "function") opts.onPay();
  };
}
function unlockPayForm(btn, amountLabel) {
  if (btn) {
    btn.disabled = false;
    btn.textContent = amountLabel ? ("Оплатить " + amountLabel) : "Оплатить";
  }
  ["clubPayCard", "clubPayExp", "clubPayCvc"].forEach((id) => {
    if ($(id)) $(id).disabled = false;
  });
}
function lockPayForm(btn) {
  if (btn) {
    btn.disabled = true;
    btn.textContent = "Ждём поступление оплаты…";
  }
  ["clubPayCard", "clubPayExp", "clubPayCvc"].forEach((id) => {
    if ($(id)) $(id).disabled = true;
  });
}
function validatePayFields() {
  const err = $("clubPayError");
  const card = clubPayDigits(($("clubPayCard") || {}).value);
  const exp = String(($("clubPayExp") || {}).value || "").trim();
  const cvc = clubPayDigits(($("clubPayCvc") || {}).value);
  if (card.length < 16 || !/^\d{2}\/\d{2}$/.test(exp) || cvc.length < 3) {
    if (err) {
      err.hidden = false;
      err.textContent = "Проверьте данные карты";
    }
    return false;
  }
  if (err) err.hidden = true;
  return true;
}
function startClubPayment() {
  if (!validatePayFields()) return;
  if (!state.cart.some((line) => line.id === CLUB_SUB_ID)) {
    const err = $("clubPayError");
    if (err) {
      err.hidden = false;
      err.textContent = "Подписка не найдена в корзине";
    }
    return;
  }
  const err = $("clubPayError");
  const btn = $("clubPaySubmit");
  const sub = productById(CLUB_SUB_ID);
  const amountLabel = money(sub.price);
  lockPayForm(btn);
  setTimeout(async () => {
    const user = currentUser();
    try {
      if (!user) throw new Error("Войдите в аккаунт");
      // Номер заказа создаём только после «успешной» оплаты
      const profile = userProfile(user.email) || {};
      const order = await createServerOrder({
        email: user.email,
        name: user.name || [profile.firstName, profile.lastName].filter(Boolean).join(" ") || "Покупатель",
        kind: "subscription",
        region: cartRegion(),
        profile,
        items: [{
          id: CLUB_SUB_ID,
          name: sub ? sub.name : "Подписка Trust-Club",
          qty: 1,
          priceRub: Math.round((sub ? sub.price : 0) * USD_RUB)
        }],
        totalRub: Math.round((sub ? sub.price : 0) * USD_RUB)
      });
      if (!activateClubSubscriptionPaid()) {
        throw new Error("Не удалось активировать подписку");
      }
      hideSubSheet();
      hideJoin();
      setOpen("drawer", false);
      toast("Оплата поступила. Подписка активна: −20%");
      showOrderSuccess(order);
      paintJoin();
    } catch (error) {
      unlockPayForm(btn, amountLabel);
      if (err) {
        err.hidden = false;
        err.textContent = error && error.message ? error.message : "Оплата не подтверждена. Попробуйте снова";
      }
    }
  }, 1600);
}
function startCartPayment() {
  if (!validatePayFields()) return;
  if (!state.cart.length || state.cart.some((line) => line.id === CLUB_SUB_ID)) {
    const err = $("clubPayError");
    if (err) {
      err.hidden = false;
      err.textContent = "Корзина изменилась. Откройте оплату снова";
    }
    return;
  }
  const err = $("clubPayError");
  const btn = $("clubPaySubmit");
  const amountRub = cartPayTotalRub();
  const amountLabel = formatRub(amountRub);
  const snapshot = {
    items: cartLinesForOrder(),
    totalRub: amountRub,
    region: cartRegion()
  };
  lockPayForm(btn);
  setTimeout(async () => {
    const user = currentUser();
    try {
      if (!user) throw new Error("Войдите в аккаунт");
      if (!snapshot.items.length) throw new Error("Корзина пуста");
      // Номер заказа — только после успешной оплаты
      const profile = userProfile(user.email) || {};
      const order = await createServerOrder({
        email: user.email,
        name: user.name || [profile.firstName, profile.lastName].filter(Boolean).join(" ") || "Покупатель",
        kind: "cart",
        region: snapshot.region,
        profile,
        items: snapshot.items,
        totalRub: snapshot.totalRub
      });
      state.cart = [];
      saveCart();
      hideSubSheet();
      hideJoin();
      setOpen("drawer", false);
      paintJoin();
      toast("Оплата поступила");
      showOrderSuccess(order);
    } catch (error) {
      unlockPayForm(btn, amountLabel);
      if (err) {
        err.hidden = false;
        err.textContent = error && error.message ? error.message : "Оплата не подтверждена. Попробуйте снова";
      }
    }
  }, 1600);
}
function openClubPaySheet() {
  const user = currentUser();
  if (!user || isAdmin(user)) return;
  if (!state.cart.some((line) => line.id === CLUB_SUB_ID)) {
    toast("Сначала добавьте подписку в корзину");
    return;
  }
  const sub = productById(CLUB_SUB_ID);
  showJoin("login");
  ensureSubSheet();
  $("subSheetTitle").textContent = "Оплата подписки";
  fillPayForm($("subSheetBody"), {
    amountRub: Math.round((sub ? sub.price : 0) * USD_RUB),
    amountLabel: money(sub.price),
    lead: "Номер заказа и скидка −20% появятся только после поступления оплаты на счёт.",
    onPay: startClubPayment
  });
  $("subSheet").hidden = false;
}
function openCartPaySheet() {
  const user = currentUser();
  if (!user || isAdmin(user)) return;
  if (!state.cart.length) {
    toast("Корзина пока пуста");
    return;
  }
  if (!ORDERS_API) {
    toast("Откройте сайт через http://127.0.0.1:8000/ — так выдаётся номер заказа");
    return;
  }
  const amountRub = cartPayTotalRub();
  showJoin("login");
  ensureSubSheet();
  $("subSheetTitle").textContent = "Оплата заказа";
  fillPayForm($("subSheetBody"), {
    amountRub,
    amountLabel: formatRub(amountRub),
    lead: "Уникальный номер заказа будет выдан только после успешной оплаты. Сохраните его для связи с поддержкой.",
    onPay: startCartPayment
  });
  $("subSheet").hidden = false;
}
function forgetSub(id, freq) {
  const user = currentUser();
  if (!user) return;
  saveSubscriptions(subscriptions().filter((sub) => {
    if (sub.email !== user.email || sub.id !== id) return true;
    return freq ? sub.freq !== freq : false;
  }));
}
function dropSub(uid) {
  const user = currentUser();
  if (!user) return;
  const sub = subscriptions().find((item) => item.uid === uid && item.email === user.email);
  if (!sub) return;
  forgetSub(sub.id, sub.freq);
  saveCart();
  if ($("grid")) renderGrid();
  if ($("best")) renderBest();
  state.cart = state.cart.filter((line) => !(line.id === sub.id && line.subscribe && line.freq === sub.freq));
  saveCart();
}
function ensureRegSuccess() {
  let box = $("heroSuccess");
  if (box) return box;
  box = document.createElement("aside");
  box.className = "reg-success";
  box.id = "heroSuccess";
  box.hidden = true;
  box.setAttribute("role", "status");
  box.innerHTML = `<div class="reg-success-head"><strong>Регистрация прошла успешно</strong><button type="button" id="heroSuccessClose" aria-label="Закрыть">✕</button></div><p class="reg-success-text">Теперь можно оформлять подписку и заказы в личном кабинете.</p>`;
  document.body.appendChild(box);
  $("heroSuccessClose").onclick = hideHeroSuccess;
  return box;
}
function showHeroSuccess() {
  const box = ensureRegSuccess();
  box.hidden = false;
  clearTimeout(showHeroSuccess._t);
  showHeroSuccess._t = setTimeout(hideHeroSuccess, 6000);
  return true;
}
function hideHeroSuccess() {
  const box = $("heroSuccess");
  if (box) box.hidden = true;
  clearTimeout(showHeroSuccess._t);
  sessionStorage.removeItem("bb-reg-ok");
}
function finishAuth(message, registered) {
  const order = pendingSub;
  pendingSub = null;
  if (registered) {
    sessionStorage.setItem("bb-reg-ok", "1");
    showHeroSuccess();
    if (order) {
      pendingSub = order;
      showJoin("login");
      openSubSheet();
    } else {
      hideJoin();
    }
  } else if (order) {
    pendingSub = order;
    showJoin("login");
    openSubSheet();
  } else {
    toast(message || "Вы вошли");
    paintJoin();
    scrollJoin("orders");
  }
  saveCart();
  if ($("grid")) renderGrid();
  if ($("best")) renderBest();
  claimGuestChat();
  if (typeof paintChat === "function") paintChat();
}
const POPULAR_IDS = ["milk", "shortcake", "birthday", "baja", "gummies-vp"];
function storedIds(key, store) {
  try {
    const list = JSON.parse(store.getItem(key) || "[]");
    return Array.isArray(list) ? list.filter((id) => productById(id)) : [];
  } catch {
    return [];
  }
}
function seenIds() { return storedIds("bb-seen", sessionStorage); }
function favIds() { return storedIds("bb-favs", localStorage); }
function rememberSeen(id) {
  if (!productById(id)) return;
  const list = [id, ...seenIds().filter((item) => item !== id)].slice(0, 8);
  sessionStorage.setItem("bb-seen", JSON.stringify(list));
}
function toggleFav(id) {
  if (!productById(id)) return false;
  const has = favIds().includes(id);
  const list = has ? favIds().filter((item) => item !== id) : [id, ...favIds()];
  localStorage.setItem("bb-favs", JSON.stringify(list));
  return !has;
}
function productHref(id) {
  const ice = ["milk", "shortcake", "mint", "cookies", "peppermint", "cbd", "cake", "coned-vp"];
  const dough = ["dough-vp", "dough-white", "dough-cream", "dough-brownie", "dough-brownie-1000", "dough-cake", "dough-raspberry", "dough-chip-1000"];
  const gummy = ["gummy-peach", "gummy-peach-900", "gummy-baja", "gummy-baja-900", "gummy-cotton", "gummy-lemonade", "gummy-lemonade-900", "gummy-apple", "gummy-apple-900", "gummy-melon", "gummy-melon-900", "gummy-raspberry", "gummy-raspberry-900", "gummy-dream", "tropical"];
  const item = encodeURIComponent(id);
  if (ice.includes(id)) return "morozhenoe.html?item=" + item;
  if (dough.includes(id)) return "pechenie.html?item=" + item;
  if (gummy.includes(id)) return "marmelad.html?item=" + item;
  if (id === "birthday") return "pechenie.html?item=dough-cake";
  if (id === "baja") return "marmelad.html?item=gummy-baja";
  if (id === "gummies-vp") return "marmelad.html?item=gummies-vp";
  return home("#shop");
}
function railCard(id) {
  const item = productById(id);
  if (!item) return "";
  return `<a class="join-card" href="${productHref(id)}"><img src="${esc(item.img)}" alt="${esc(item.name)}" /><span>${money(memberPrice(item.price))}</span></a>`;
}
function paintJoinRails() {
  if (!$("joinSeen")) return;
  const user = currentUser();
  const admin = isAdmin(user);
  const ordersBlock = document.querySelector('[data-join-block="orders"]');
  const favsBlock = document.querySelector('[data-join-block="favs"]');
  const seenBlock = document.querySelector('[data-join-block="seen"]');
  const popularBlock = document.querySelector('[data-join-block="popular"]');
  const chipRow = document.querySelector(".join-chip-row");
  if (ordersBlock) ordersBlock.hidden = !!admin;
  if (favsBlock) favsBlock.hidden = !!admin;
  if (seenBlock) seenBlock.hidden = !!admin;
  if (popularBlock) popularBlock.hidden = !!admin;
  if (chipRow) chipRow.hidden = !!admin;
  if ($("joinDock")) {
    $("joinDock").querySelectorAll('button[data-join="orders"], button[data-join="you"]').forEach((button) => {
      button.hidden = !!admin;
    });
    $("joinDock").hidden = !!admin;
  }
  if (admin) {
    $("joinOrders").innerHTML = "";
    $("joinFavs").innerHTML = "";
    $("joinSeen").innerHTML = "";
    $("joinPopular").innerHTML = "";
    return;
  }
  const seen = seenIds();
  $("joinSeen").classList.toggle("join-rail", seen.length > 0);
  $("joinSeen").innerHTML = seen.length ? seen.map(railCard).join("") : `<p class="join-empty">Здесь появятся товары, которые вы открывали</p>`;
  const favs = favIds();
  if (!user) $("joinFavs").innerHTML = `<p class="join-empty">Войдите, чтобы открыть избранное</p>`;
  else if (!favs.length) $("joinFavs").innerHTML = `<p class="join-empty">В избранном пока пусто</p>`;
  else $("joinFavs").innerHTML = `<div class="join-rail">${favs.map(railCard).join("")}</div>`;
  $("joinPopular").innerHTML = POPULAR_IDS.filter((id) => productById(id)).map(railCard).join("");
  if (!user) {
    $("joinOrders").innerHTML = `<p class="join-empty">Войдите, чтобы увидеть заказы</p>`;
    return;
  }
  const mineSubs = subscriptions().filter((sub) => sub.email === user.email && productById(sub.id));
  const subHtml = mineSubs.map((sub) => {
    const item = productById(sub.id);
    const usd = (item.price * sub.qty - bundleOff(sub.qty, sub.id !== CLUB_SUB_ID)) * (sub.id === CLUB_SUB_ID ? 1 : SUBSCRIBE_RATE);
    return `<article class="join-order"><img src="${esc(item.img)}" alt="" /><div><strong>${esc(item.name)}</strong><span>${esc(FREQ_LABEL.month)} · ${sub.qty} шт. · ${money(usd)}</span></div><button type="button" data-cancel-sub="${esc(sub.uid)}">Отменить</button></article>`;
  }).join("");
  $("joinOrders").innerHTML = `<p class="join-empty">Загружаем заказы…</p>` + subHtml;
  fetchMyOrders(user.email).then((orders) => {
    if (!$("joinOrders") || currentUser()?.email !== user.email) return;
    const orderHtml = orders.map((order) => {
      const titles = (order.items || []).map((row) => row.name).filter(Boolean).slice(0, 2).join(", ");
      const total = Number(order.totalRub || 0);
      return `<article class="join-order join-order-code"><div><strong>${esc(order.code)}</strong><span>${esc(titles || order.kind || "Заказ")} · ${total.toLocaleString("ru-RU")} ₽</span><span class="join-order-tip">Укажите номер в чате поддержки для доставки</span></div><button type="button" data-copy-order="${esc(order.code)}">Копировать</button></article>`;
    }).join("");
    if (!orderHtml && !subHtml) {
      $("joinOrders").innerHTML = `<p class="join-empty">Заказов пока нет</p>`;
      return;
    }
    $("joinOrders").innerHTML = (orderHtml ? `<h4 class="join-orders-label">Номера заказов</h4>${orderHtml}` : "") + (subHtml ? `<h4 class="join-orders-label">Подписки</h4>${subHtml}` : "");
  });
}
function syncRailArrows(row, scroller) {
  if (!row || !scroller) return;
  const max = scroller.scrollWidth - scroller.clientWidth;
  const atStart = max <= 2 || scroller.scrollLeft <= 2;
  const atEnd = max <= 2 || scroller.scrollLeft >= max - 2;
  row.classList.toggle("at-start", atStart);
  row.classList.toggle("at-end", atEnd);
  row.classList.toggle("has-prev", !atStart);
}
function syncChipArrows() {
  syncRailArrows(document.querySelector(".join-chip-row"), $("joinChips"));
  syncRailArrows(document.querySelector(".join-rail-row"), $("joinPopular"));
}
function scrollJoin(name) {
  const scroller = $("joinScroll");
  const block = scroller && scroller.querySelector(`[data-join-block="${name}"]`);
  if (!scroller || !block) return;
  const top = block.getBoundingClientRect().top - scroller.getBoundingClientRect().top + scroller.scrollTop;
  scroller.scrollTo({ top, behavior: "smooth" });
  $("joinDock").querySelectorAll("button").forEach((button) => button.classList.toggle("on", button.dataset.join === name));
}
function paintJoin() {
  const hero = $("joinHero");
  if (!hero) return;
  const user = currentUser();
  const login = joinMode === "login";
  hero.classList.toggle("login", !user && login);
  hero.classList.toggle("logged", !!user);
  if (user) {
    const admin = isAdmin(user);
    const waiting = admin ? unreadCount() : 0;
    $("joinTitle").textContent = admin ? "Админ-панель" : user.name;
    $("joinLead").textContent = admin
      ? "Только чат с покупателями. Подписки и заказы здесь скрыты."
      : user.email;
    $("joinPlan").textContent = "";
    if ($("joinMemberLead")) {
      $("joinMemberLead").textContent = admin
        ? (waiting ? "Есть непрочитанные диалоги: " + waiting + "." : "Список диалогов открывается кнопкой «Чаты» слева внизу.")
        : (hasActiveSubscription(user)
          ? "Подписка активна: на все товары действует скидка 20%."
          : "Подписку можно купить только в личном кабинете.");
    }
    const meta = ensureJoinProfileMeta();
    if (meta) {
      const html = admin ? "" : profileSummaryHtml(user.email);
      meta.innerHTML = html;
      meta.hidden = !html;
    }
    let buySub = $("joinBuySub");
    if (!admin) {
      if (!buySub) {
        buySub = document.createElement("button");
        buySub.type = "button";
        buySub.className = "btn join-submit";
        buySub.id = "joinBuySub";
        buySub.textContent = "Купить подписку";
        $("joinLogout").before(buySub);
        buySub.onclick = () => startCabinetSubscription();
      }
      buySub.hidden = false;
      buySub.textContent = hasActiveSubscription(user) ? "Подписка активна" : "Купить подписку";
    } else if (buySub) {
      buySub.hidden = true;
    }
    let openChats = $("joinOpenChats");
    if (admin) {
      if (!openChats) {
        openChats = document.createElement("button");
        openChats.type = "button";
        openChats.className = "btn join-submit";
        openChats.id = "joinOpenChats";
        openChats.textContent = "Открыть чаты";
        $("joinLogout").before(openChats);
        openChats.onclick = () => {
          hideJoin();
          if ($("chatLaunch")) $("chatLaunch").click();
        };
      }
      openChats.hidden = false;
      openChats.textContent = waiting ? "Открыть чаты (" + waiting + ")" : "Открыть чаты";
    } else if (openChats) {
      openChats.hidden = true;
    }
  } else {
    $("joinTitle").textContent = login ? "Войдите в аккаунт" : "Создайте аккаунт";
    $("joinLead").textContent = pendingSub
      ? "Покупка по подписке откроется после входа в Trust-Club."
      : "Заказы, подписки и избранное — в одном кабинете.";
    $("joinPlan").textContent = pendingSub ? planLine(pendingSub) : "";
    if ($("joinSubmit")) $("joinSubmit").textContent = login ? "Войти" : "Зарегистрироваться";
    if ($("joinSwitch")) $("joinSwitch").textContent = login ? "Нет аккаунта? Зарегистрироваться" : "Уже есть аккаунт? Войти";
    if ($("joinPass")) $("joinPass").autocomplete = login ? "current-password" : "new-password";
    if ($("joinError")) $("joinError").hidden = true;
    if ($("joinOpenChats")) $("joinOpenChats").hidden = true;
    if ($("joinBuySub")) $("joinBuySub").hidden = true;
    if ($("joinProfileMeta")) {
      $("joinProfileMeta").hidden = true;
      $("joinProfileMeta").innerHTML = "";
    }
  }
  paintJoinRails();
}
function showJoin(mode) {
  if (!$("joinHero")) return;
  joinMode = mode || (currentUser() ? "login" : "register");
  paintJoin();
  $("joinHero").hidden = false;
  document.body.classList.add("join-open");
  $("joinScroll").scrollTop = 0;
  const user = currentUser();
  scrollJoin(user && !isAdmin(user) ? "orders" : "profile");
  requestAnimationFrame(syncChipArrows);
}
function hideJoin() {
  hideSubSheet();
  if ($("joinHero")) $("joinHero").hidden = true;
  document.body.classList.remove("join-open");
}
function ensureSubSheet() {
  if ($("subSheet")) return $("subSheet");
  const sheet = document.createElement("div");
  sheet.className = "join-sub-sheet";
  sheet.id = "subSheet";
  sheet.hidden = true;
  sheet.innerHTML = `
    <div class="join-sub-card" role="dialog" aria-modal="true" aria-labelledby="subSheetTitle">
      <header class="join-sub-top">
        <strong id="subSheetTitle">Данные для подписки</strong>
        <button type="button" id="subSheetClose" aria-label="Закрыть">✕</button>
      </header>
      <div class="join-sub-body" id="subSheetBody"></div>
    </div>`;
  const host = $("joinHero") || document.body;
  host.appendChild(sheet);
  sheet.addEventListener("click", (event) => {
    if (event.target === sheet) hideSubSheet();
  });
  $("subSheetClose").onclick = () => hideSubSheet();
  return sheet;
}
function hideSubSheet() {
  if ($("subSheet")) $("subSheet").hidden = true;
}
function fillSubTerms(body, user) {
  body.innerHTML = `
    <p class="join-sub-lead">Условия и возможности при покупке подписки Trust-Club.</p>
    <div class="join-sub-terms">
      ${SUB_TERMS.map(([title, text]) =>
        `<article><strong>${esc(title)}</strong><p>${esc(text)}</p></article>`
      ).join("")}
    </div>
    <button class="btn join-submit" type="button" id="subTermsBack">Назад к оформлению</button>`;
  $("subTermsBack").onclick = () => {
    $("subSheetTitle").textContent = "Купить подписку";
    fillProfileForm(body, user);
  };
}
function fillProfileForm(body, user) {
  const saved = userProfile(user.email) || {};
  const sub = productById(CLUB_SUB_ID);
  body.innerHTML = `
    <p class="join-sub-lead">Заполните все поля. Данные сохранятся для почты <strong>${esc(user.email)}</strong>.</p>
    <form id="subProfileForm" novalidate>
      ${PROFILE_FIELDS.map(([field, label, auto]) =>
        `<input id="sub_${field}" name="${field}" type="text" autocomplete="${auto || "off"}" placeholder="${label}" aria-label="${label}" value="${esc(saved[field] || "")}" />`
      ).join("")}
      <p class="join-sub-price"><span>Стоимость подписки</span><strong>${money(sub.price)}</strong></p>
      <label class="join-sub-agree" for="subAgree">
        <input id="subAgree" name="agree" type="checkbox" />
        <span>Совершая покупку, я соглашаюсь с <a href="#sub-terms" id="subTermsLink">правилами</a></span>
      </label>
      <p class="form-error" id="subProfileError" hidden></p>
      <button class="btn join-submit" type="submit">Купить подписку</button>
    </form>`;
  $("subTermsLink").onclick = (event) => {
    event.preventDefault();
    $("subSheetTitle").textContent = "Правила подписки";
    fillSubTerms(body, user);
  };
  $("subProfileForm").onsubmit = (event) => {
    event.preventDefault();
    const err = $("subProfileError");
    if (!$("subAgree") || !$("subAgree").checked) {
      if (err) {
        err.hidden = false;
        err.textContent = "Отметьте согласие с правилами подписки";
      }
      return;
    }
    const payload = {};
    PROFILE_FIELDS.forEach(([field]) => {
      payload[field] = ($("sub_" + field) || {}).value || "";
    });
    const error = saveUserProfile(user.email, payload);
    if (error) {
      if (err) {
        err.hidden = false;
        err.textContent = error;
      }
      return;
    }
    paintJoin();
    placeClubSubscription();
  };
}
function openSubSheet() {
  const user = currentUser();
  if (!user || isAdmin(user)) return;
  ensureSubSheet();
  $("subSheetTitle").textContent = "Купить подписку";
  fillProfileForm($("subSheetBody"), user);
  $("subSheet").hidden = false;
}
function askSubscription() {
  if (!currentUser()) {
    pendingSub = { id: CLUB_SUB_ID, qty: 1, freq: SUB_FREQ };
    showJoin("register");
    return;
  }
  if (isAdmin(currentUser())) {
    toast("Админ не оформляет подписку");
    return;
  }
  showJoin("login");
  openSubSheet();
}
function startCabinetSubscription() {
  const user = currentUser();
  if (!user) {
    showJoin("register");
    return;
  }
  if (isAdmin(user)) {
    toast("Админ не оформляет подписку");
    return;
  }
  showJoin("login");
  openSubSheet();
}
function renderAccount() {
  if ($("joinHero") && !$("joinHero").hidden) paintJoin();
}

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem("bb-cart") || "[]");
    if (!Array.isArray(saved)) return [];
    return saved.filter((line) => line && productById(line.id) && Number(line.qty) > 0);
  } catch {
    return [];
  }
}

const state = {
  tab: "variety",
  query: "",
  bestPage: 0,
  cart: loadCart()
};

const $ = (id) => document.getElementById(id);
const rub = new Intl.NumberFormat("ru-RU", { style: "currency", currency: "RUB", maximumFractionDigits: 0 });
const money = (usd) => rub.format(Math.round(usd * USD_RUB));

function setOpen(id, open) {
  $(id).classList.toggle("open", open);
}

function toast(msg) {
  const el = $("toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.classList.remove("show"), 2200);
}

function card(p) {
  const from = p.tab === "variety" || p.badge ? "ОТ " : "";
  const href = productHref(p.id);
  const badge = p.badge ? `<span class="badge">${p.badge}</span>` : "";
  const visual = p.soon
    ? `<div class="card-media">${badge}<div class="soon-label">скоро в продаже</div></div>`
    : `<a class="card-media" href="${href}">${badge}<img src="${p.img}" alt="${esc(p.name)}" /></a>`;
  const title = p.soon ? esc(p.name) : `<a href="${href}">${esc(p.name)}</a>`;
  const priceUsd = memberPrice(p.price);
  const memberNote = hasActiveSubscription() ? `<small class="price-member">−20% по подписке</small>` : "";
  return `<article class="card">
    ${visual}
    <h3>${title}</h3>
    <div class="stars">${p.reviews ? `<a class="stars-link" href="otzyvy.html">★★★★★ <span>(${p.reviews})</span></a>` : "Новинка"}</div>
    <div class="price">${from}${money(priceUsd)}${memberNote}</div>
    <button class="btn btn-cart" type="button" data-add="${p.id}" ${p.soon ? "disabled" : ""}>${p.soon ? "Скоро" : "В корзину"}</button>
    <a class="more" href="${href}">Есть ещё вкусы →</a>
  </article>`;
}

function matchesTab(p) {
  if (state.tab === "variety") return ["variety", "new", "picks"].includes(p.tab) && Boolean(p.badge);
  return p.tab === state.tab;
}

function visibleProducts() {
  const q = state.query.trim().toLowerCase();
  return PRODUCTS.filter((p) => {
    if (p.hidden) return false;
    if (q) return p.name.toLowerCase().includes(q);
    return matchesTab(p);
  });
}

function renderGrid() {
  const list = visibleProducts();
  $("grid").innerHTML = list.map(card).join("") || "<p>Ничего не найдено.</p>";
  $("tabs").innerHTML = TABS.map((t) => `<button class="tab ${t.id === state.tab ? "active" : ""}" type="button" data-tab="${t.id}">${t.label}</button>`).join("");
}

const BEST_IDS = ["milk", "shortcake", "birthday", "baja"];

function renderBest() {
  const items = BEST_IDS.map(productById);
  const pageSize = 4;
  const max = Math.max(1, Math.ceil(items.length / pageSize));
  state.bestPage = (state.bestPage + max) % max;
  const slice = items.slice(state.bestPage * pageSize, state.bestPage * pageSize + pageSize);
  $("best").innerHTML = slice.map(card).join("");
}

function cartLineUsd(l) {
  const p = productById(l.id);
  if (!p) return 0;
  return (p.price * l.qty - bundleOff(l.qty, l.bundle)) * cartLineRate(l);
}
function cartGoodsUsd() {
  return state.cart.reduce((sum, l) => sum + cartLineUsd(l), 0);
}
function cartPhysicalUsd() {
  return state.cart.reduce((sum, l) => (l.id === CLUB_SUB_ID ? sum : sum + cartLineUsd(l)), 0);
}
function cartOnlySubscription() {
  return state.cart.length > 0 && state.cart.every((l) => l.id === CLUB_SUB_ID);
}
function cartRegion() {
  const region = localStorage.getItem("bb-region");
  return region && REGIONS.includes(region) ? region : "";
}
function deliveryRubFor() {
  const physicalRub = Math.round(cartPhysicalUsd() * USD_RUB);
  if (!physicalRub || physicalRub >= FREE_SHIPPING_FROM_RUB) return 0;
  return DELIVERY_FEE_RUB;
}
function paintCartShipping(goodsUsd) {
  const shipRow = $("shipRow");
  const shipLabel = $("shipLabel");
  const shipping = $("shipping");
  const cartTotal = $("cartTotal");
  if (!shipRow || !shipLabel || !shipping || !cartTotal) {
    $("subtotal").textContent = money(goodsUsd);
    return;
  }
  const region = cartRegion();
  const digitalOnly = cartOnlySubscription();
  const shipRub = deliveryRubFor();
  const empty = !state.cart.length;
  shipRow.hidden = empty;
  if ($("shipHint")) $("shipHint").hidden = empty || digitalOnly;
  if ($("totalRow")) $("totalRow").hidden = empty;
  if (empty) {
    $("subtotal").textContent = money(0);
    shipping.textContent = money(0);
    cartTotal.textContent = money(0);
    shipLabel.textContent = "Доставка";
    return;
  }
  $("subtotal").textContent = money(goodsUsd);
  if (digitalOnly) {
    shipLabel.textContent = "Доставка";
    shipping.textContent = "Не нужна";
    shipping.classList.add("is-free");
  } else if (!shipRub) {
    shipLabel.textContent = region ? "Доставка в " + regionTo(region) : "Доставка";
    shipping.textContent = "Бесплатно";
    shipping.classList.add("is-free");
  } else {
    shipLabel.textContent = region ? "Доставка в " + regionTo(region) : "Доставка (выберите регион)";
    shipping.textContent = rub.format(shipRub);
    shipping.classList.remove("is-free");
  }
  cartTotal.textContent = rub.format(Math.round(goodsUsd * USD_RUB) + shipRub);
}
function saveCart() {
  state.cart = state.cart.filter((line) => productById(line.id) && line.qty > 0);
  localStorage.setItem("bb-cart", JSON.stringify(state.cart));
  $("cartCount").textContent = state.cart.reduce((n, l) => n + l.qty, 0);
  const lines = $("lines");
  if (!state.cart.length) {
    lines.innerHTML = "<p>Корзина пока пуста.</p>";
    paintCartShipping(0);
    return;
  }
  let sum = 0;
  lines.innerHTML = state.cart.map((l) => {
    const p = productById(l.id);
    const usd = (p.price * l.qty - bundleOff(l.qty, l.bundle)) * cartLineRate(l);
    sum += usd;
    const token = lineToken(l);
    const freq = l.subscribe ? `<div class="line-freq">${FREQ_LABEL.month}</div>` : "";
    return `<div class="line">
      <img src="${p.img}" alt="" />
      <div><strong>${p.name}</strong>${freq}
        <div class="qty">
          <button type="button" data-qty="${token}|-1">−</button>
          <span>${l.qty}</span>
          <button type="button" data-qty="${token}|1">+</button>
        </div>
      </div>
      <div>${money(usd)}<br><button type="button" data-rm="${token}">Удалить</button></div>
    </div>`;
  }).join("");
  paintCartShipping(sum);
}

function lineToken(line) {
  return line.id + "~" + (line.subscribe ? "1" : "0") + "~" + (line.freq || "once");
}
function addToCart(id, qty = 1, bundle = false, subscribe = false, freq = "") {
  const p = productById(id);
  if (!p || p.soon) return;
  const add = Math.max(1, Number(qty) || 1);
  const period = subscribe ? SUB_FREQ : "";
  const line = state.cart.find((l) => l.id === id && !!l.subscribe === !!subscribe && (l.freq || "") === period);
  if (line) {
    line.qty += add;
    if (bundle) line.bundle = true;
  } else state.cart.push({ id, qty: add, bundle: !!bundle, subscribe: !!subscribe, freq: period });
  saveCart();
  setOpen("drawer", true);
  toast("Добавлено: " + p.name);
}

const home = (hash) => (/(morozhenoe|pechenie|marmelad)\.html$/i.test(location.pathname) ? "index.html" + hash : hash);

function startMarquee() {
  const track = $("marquee");
  const view = track.parentElement.clientWidth;
  const unit = ANNOUNCE.map(([t, href]) => `<a href="${home(href)}">${t}</a><span class="dot">•</span>`).join("");
  const group = document.createElement("div");
  group.className = "marquee-group";
  group.innerHTML = unit;
  track.replaceChildren(group);
  let guard = 0;
  while (group.scrollWidth < view + 8 && guard < 16) {
    group.insertAdjacentHTML("beforeend", unit);
    guard += 1;
  }
  const clone = group.cloneNode(true);
  clone.setAttribute("aria-hidden", "true");
  track.appendChild(clone);
  track.style.setProperty("--shift", group.getBoundingClientRect().width + "px");
  track.style.animationDuration = Math.max(16, group.getBoundingClientRect().width / 40) + "s";
}
startMarquee();
window.addEventListener("resize", startMarquee);
$("mega").innerHTML = [
  ["Мороженое", "coned-vp"],
  ["Печенье", "dough-vp"],
  ["Мармелад", "gummies-vp"],
  ["Лимитка", "limited"]
].map(([name, id]) => {
  const p = productById(id);
  const visual = p.soon ? `<span class="soon-label">скоро в продаже</span>` : `<img src="${p.img}" alt="${name}" />`;
  const href = name === "Мороженое" ? "morozhenoe.html" : name === "Печенье" ? "pechenie.html" : name === "Мармелад" ? "marmelad.html" : home("#shop");
  return `<a class="mega-card" href="${href}">${visual}${name}</a>`;
}).join("");
const megaMenu = document.querySelector(".mega");
let megaTimer;
megaMenu.addEventListener("mouseenter", () => {
  clearTimeout(megaTimer);
  megaMenu.classList.add("open");
});
megaMenu.addEventListener("mouseleave", () => {
  clearTimeout(megaTimer);
  megaTimer = setTimeout(() => megaMenu.classList.remove("open"), 280);
});
function reviewCard([text, name, tag]) {
  const label = tag ? `<small class="review-tag">${esc(tag)}</small>` : "";
  return `<blockquote class="review"><div class="stars">★★★★★</div>${label}<p>${esc(text)}</p><cite>${esc(name)}</cite></blockquote>`;
}
function starsHtml(count) {
  const n = Math.max(1, Math.min(5, Number(count) || 5));
  return "★".repeat(n) + (n < 5 ? `<span class="stars-empty">${"★".repeat(5 - n)}</span>` : "");
}
function reviewWallCard(entry) {
  const item = entry.productId ? productById(entry.productId) : null;
  const productName = item ? item.name : (entry.productName || "");
  const productImg = item ? item.img : (entry.productImg || "");
  const href = entry.productId ? productHref(entry.productId) : "index.html#shop";
  const photo = entry.photo
    ? `<img class="review-wall-photo" src="${esc(entry.photo)}" alt="" loading="lazy" />`
    : "";
  const product = (item || entry.productName)
    ? `<a class="review-wall-product" href="${href}">
        <img src="${esc(productImg || "img/brand/trust-club-logo.svg")}" alt="" />
        <span class="review-wall-product-meta">
          <span class="review-wall-product-name">${esc(productName).toUpperCase()}</span>
          ${entry.productNote ? `<span class="review-wall-product-note">${esc(entry.productNote)}</span>` : ""}
        </span>
      </a>`
    : "";
  return `<article class="review-wall-card">
    ${photo}
    <div class="review-wall-body">
      <div class="review-wall-who">
        <div class="review-wall-nameblock">
          <strong>${esc(entry.name)}</strong>
          ${entry.city ? `<span class="review-city">${esc(entry.city)}</span>` : ""}
        </div>
        <span class="review-verified" title="Подтверждённый покупатель"><span aria-hidden="true">✓</span> Подтверждён</span>
      </div>
      <div class="stars review-wall-stars">${starsHtml(entry.stars)}</div>
      <p>${esc(entry.text)}</p>
      ${product}
    </div>
  </article>`;
}
const FRIENDS_VIDEOS = [
  { src: "img/videos/friends-01.mp4?v=2" },
  { src: "img/videos/friends-02.mp4?v=2" },
  { src: "img/videos/friends-03.mp4?v=2" },
  { src: "img/videos/friends-04.mp4?v=2" }
];

function friendCard(entry) {
  return `<article class="friend-card" data-friend-video>
    <video playsinline muted loop preload="metadata" src="${esc(entry.src)}"></video>
    <span class="friend-play" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
    </span>
  </article>`;
}

function bindFriendsVideos() {
  const rail = $("friendsRail");
  if (!rail) return;
  const stopAll = (except) => {
    rail.querySelectorAll("[data-friend-video]").forEach((other) => {
      if (except && other === except) return;
      const v = other.querySelector("video");
      if (!v) return;
      v.pause();
      other.classList.remove("is-playing");
    });
  };
  const startVideo = (card, video) => {
    const play = () => {
      video.muted = true;
      video.play().then(() => card.classList.add("is-playing")).catch(() => {});
    };
    if (video.readyState >= 2) play();
    else {
      video.addEventListener("loadeddata", play, { once: true });
      video.load();
    }
  };
  rail.querySelectorAll("[data-friend-video]").forEach((card) => {
    const video = card.querySelector("video");
    if (!video) return;
    card.addEventListener("mouseenter", () => {
      stopAll(card);
      startVideo(card, video);
    });
    card.addEventListener("mouseleave", () => {
      video.pause();
      card.classList.remove("is-playing");
    });
  });
}

if ($("reviewRow")) {
  $("reviewRow").innerHTML = REVIEWS.slice(0, 3).map(reviewCard).join("");
}
if ($("reviewsPageList")) {
  $("reviewsPageList").innerHTML = REVIEWS_WALL.map(reviewWallCard).join("");
}
if ($("friendsRail")) {
  $("friendsRail").innerHTML = FRIENDS_VIDEOS.map(friendCard).join("");
  bindFriendsVideos();
}
if ($("compare")) {
  $("compare").innerHTML = COMPARE.map((row) => `<tr><td>${row}</td><td class="yes">✓</td><td class="no">×</td></tr>`).join("");
}
if ($("faqList")) {
  $("faqList").innerHTML = FAQ.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("");
}
if ($("blogGrid")) {
  $("blogGrid").innerHTML = POSTS.map(([date, title, src]) => `<a class="blog-card" href="${home("#blog")}"><img src="${src}" alt="" /><div><small>${date}</small><h3>${title}</h3></div></a>`).join("");
}

REGIONS.forEach((name) => {
  const o = document.createElement("option");
  o.value = name;
  o.textContent = name;
  $("stateSelect").appendChild(o);
});
const savedRegion = localStorage.getItem("bb-region");
if (savedRegion && REGIONS.includes(savedRegion)) $("stateSelect").value = savedRegion;

function regionTo(name) {
  const fixed = {
    "Саха (Якутия)": "Саху (Якутию)",
    "Северная Осетия — Алания": "Северную Осетию — Аланию"
  };
  if (fixed[name]) return fixed[name];
  return name
    .replace("ая автономная область", "ую автономную область")
    .replace("ая Народная Республика", "ую Народную Республику")
    .replace("ая Республика", "ую Республику")
    .replace("ая область", "ую область")
    .replace(/[ие]я$/, (end) => end[0] + "ю")
    .replace(/а$/, "у");
}
function showDeliver(region) {
  const line = $("deliverTo");
  const known = region && REGIONS.includes(region);
  const label = known ? "Доставка в " + regionTo(region) : "Выберите регион";
  if (line) line.hidden = !known;
  if (known) $("deliverRegion").textContent = label;
  if ($("mobileRegion")) $("mobileRegion").textContent = label;
}
showDeliver(savedRegion);

function renderRegionList() {
  const current = localStorage.getItem("bb-region");
  $("regionList").innerHTML = REGIONS.map((name) => `<button type="button" class="${name === current ? "on" : ""}" data-region="${esc(name)}">${esc(name)}</button>`).join("");
  const currentButton = $("regionList").querySelector(".on");
  if (!currentButton) return;
  const list = $("regionList");
  const top = currentButton.getBoundingClientRect().top - list.getBoundingClientRect().top + list.scrollTop;
  list.scrollTop = Math.max(0, top - 8);
}
function setRegionOpen(open) {
  const banner = $("regionGate");
  if (!banner) return;
  if (open) {
    renderRegionList();
    if (window.matchMedia("(max-width: 980px)").matches) {
      const header = document.querySelector(".header");
      const bottom = header ? Math.round(header.getBoundingClientRect().bottom) : 64;
      banner.style.top = Math.max(8, bottom + 8) + "px";
    } else banner.style.top = "";
  }
  banner.hidden = !open;
}
function pickRegion(name) {
  if (!REGIONS.includes(name)) return;
  localStorage.setItem("bb-region", name);
  $("stateSelect").value = name;
  showDeliver(name);
  syncAgeReady();
  setRegionOpen(false);
  saveCart();
}
if ($("deliverRegion") && $("regionGate")) {
  const toggleRegionBanner = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setRegionOpen($("regionGate").hidden);
  };
  $("deliverRegion").addEventListener("click", toggleRegionBanner);
  document.querySelector(".deliver svg").addEventListener("click", toggleRegionBanner);
  $("regionList").addEventListener("click", (event) => {
    const button = event.target.closest("[data-region]");
    if (!button) return;
    event.stopPropagation();
    pickRegion(button.dataset.region);
  });
}

function syncAgeReady() {
  const ready = Boolean($("stateSelect").value);
  $("ageYes").disabled = !ready;
  $("ageYes").classList.toggle("ready", ready);
}
syncAgeReady();
$("stateSelect").addEventListener("change", () => {
  if ($("stateSelect").value) localStorage.setItem("bb-region", $("stateSelect").value);
  showDeliver($("stateSelect").value);
  syncAgeReady();
});
$("ageNo").onclick = () => {
  document.body.classList.remove("locked");
  document.body.innerHTML = "<main class=\"age-block\"><div><h1>Возвращайтесь, когда вам исполнится 21.</h1><p>Чтобы войти в магазин, вам должно быть не меньше 21 года.</p></div></main>";
};
$("ageYes").onclick = () => {
  sessionStorage.setItem("bb-age", "1");
  setOpen("ageGate", false);
  document.body.classList.remove("locked");
};
if (sessionStorage.getItem("bb-age") === "1") {
  setOpen("ageGate", false);
  document.body.classList.remove("locked");
}

document.addEventListener("click", (e) => {
  const tab = e.target.closest("[data-tab]");
  if (tab) {
    state.tab = tab.dataset.tab;
    state.query = "";
    $("searchInput").value = "";
    renderGrid();
  }
  const add = e.target.closest("[data-add]");
  if (add) addToCart(add.dataset.add);
  const cancelSub = e.target.closest("[data-cancel-sub]");
  if (cancelSub) {
    dropSub(cancelSub.dataset.cancelSub);
    paintJoin();
    if ($("grid")) renderGrid();
    if ($("best")) renderBest();
    toast("Подписка отменена");
  }
  const copyOrder = e.target.closest("[data-copy-order]");
  if (copyOrder) {
    const code = copyOrder.dataset.copyOrder || "";
    if (code) {
      navigator.clipboard.writeText(code).then(() => toast("Номер скопирован")).catch(() => toast(code));
    }
  }
  const rm = e.target.closest("[data-rm]");
  if (rm) {
    const line = state.cart.find((l) => lineToken(l) === rm.dataset.rm);
    if (line && line.subscribe && line.id !== CLUB_SUB_ID) forgetSub(line.id, line.freq);
    state.cart = state.cart.filter((l) => lineToken(l) !== rm.dataset.rm);
    saveCart();
  }
  const qty = e.target.closest("[data-qty]");
  if (qty) {
    const parts = qty.dataset.qty.split("|");
    const token = parts[0];
    const step = Number(parts[1]);
    const line = state.cart.find((l) => lineToken(l) === token);
    if (!line) return;
    line.qty += step;
    if (line.qty < 2) line.bundle = false;
    if (line.qty <= 0) {
      if (line.subscribe && line.id !== CLUB_SUB_ID) forgetSub(line.id, line.freq);
      state.cart = state.cart.filter((l) => lineToken(l) !== token);
    } else if (line.subscribe && line.id !== CLUB_SUB_ID) rememberSub(line.id, line.qty, line.freq);
    saveCart();
  }
  if ($("regionGate") && !$("regionGate").hidden && !e.target.closest("#regionGate") && !e.target.closest("#deliverRegion") && !e.target.closest("#mobileRegion") && !e.target.closest(".deliver svg")) {
    setRegionOpen(false);
  }
  if ($("mobileNav") && $("mobileNav").classList.contains("open") && !e.target.closest("#mobileNav") && !e.target.closest("#openMenu")) {
    setOpen("mobileNav", false);
  }
});

if ($("searchForm")) $("searchForm").addEventListener("submit", (e) => e.preventDefault());
if ($("searchInput")) {
  const pending = sessionStorage.getItem("bb-search");
  if (pending && $("grid")) {
    sessionStorage.removeItem("bb-search");
    state.query = pending;
    $("searchInput").value = pending;
  }
  $("searchInput").addEventListener("input", (e) => {
    const next = e.target.value;
    if (!$("grid")) {
      const query = next.trim();
      if (!query) return;
      sessionStorage.setItem("bb-search", query);
      location.href = "index.html#shop";
      return;
    }
    const started = !state.query.trim() && next.trim();
    state.query = next;
    renderGrid();
    if (started) $("shop").scrollIntoView({ behavior: "smooth", block: "start" });
  });
}
$("openCart").onclick = () => setOpen("drawer", true);
$("closeCart").onclick = () => setOpen("drawer", false);
$("openAccount").onclick = () => {
  showJoin(currentUser() ? "login" : "register");
};
$("checkout").onclick = async () => {
  if (!state.cart.length) return toast("Корзина пока пуста");
  if (deliveryRubFor() > 0 && !cartRegion()) {
    toast("Выберите регион доставки");
    setRegionOpen(true);
    return;
  }
  const clubLine = state.cart.find((line) => line.id === CLUB_SUB_ID);
  if (clubLine) {
    if (!currentUser()) {
      pendingSub = { id: CLUB_SUB_ID, qty: 1, freq: SUB_FREQ };
      showJoin("register");
      return;
    }
    if (isAdmin(currentUser())) return toast("Админ не оформляет подписку");
    if (hasActiveSubscription()) {
      state.cart = state.cart.filter((line) => line.id !== CLUB_SUB_ID);
      saveCart();
      toast("Подписка уже активна");
      return;
    }
    setOpen("drawer", false);
    openClubPaySheet();
    return;
  }
  const subLine = state.cart.find((line) => line.subscribe);
  if (subLine && !currentUser()) {
    pendingSub = { id: subLine.id, qty: subLine.qty, freq: SUB_FREQ };
    showJoin("register");
    return;
  }
  if (subLine) {
    state.cart.filter((line) => line.subscribe && line.id !== CLUB_SUB_ID).forEach((line) => rememberSub(line.id, line.qty, line.freq));
    state.cart = state.cart.filter((line) => !line.subscribe);
    saveCart();
    paintJoin();
    toast(state.cart.length ? "Подписка оформлена. Остальное осталось в корзине" : "Подписка оформлена");
    return;
  }
  const user = currentUser();
  if (!user) {
    showJoin("register");
    toast("Войдите, чтобы оплатить заказ и получить номер");
    return;
  }
  if (isAdmin(user)) return toast("Админ не оформляет заказы покупателя");
  setOpen("drawer", false);
  openCartPaySheet();
};
if ($("footerLogin")) $("footerLogin").onclick = () => showJoin("login");
function bindJoinCabinet() {
  if (!$("joinHero")) return;
  if ($("joinForm")) {
    $("joinForm").setAttribute("novalidate", "");
    $("joinForm").onsubmit = (event) => {
      event.preventDefault();
      const registering = joinMode !== "login";
      const error = registering
        ? registerUser($("joinName").value, $("joinEmail").value, $("joinPass").value)
        : loginUser($("joinEmail").value, $("joinPass").value);
      if (error) {
        $("joinError").hidden = false;
        $("joinError").textContent = error;
        $("joinError").scrollIntoView({ behavior: "smooth", block: "nearest" });
        return;
      }
      $("joinForm").reset();
      finishAuth(registering ? "Регистрация выполнена" : "Вы вошли", registering);
    };
  }
  if ($("joinSwitch")) $("joinSwitch").onclick = () => {
    joinMode = joinMode === "login" ? "register" : "login";
    paintJoin();
  };
  if ($("joinLogout")) $("joinLogout").onclick = () => {
    logoutUser();
    pendingSub = null;
    joinMode = "login";
    paintJoin();
    saveCart();
    if ($("grid")) renderGrid();
    if ($("best")) renderBest();
    if (typeof paintChat === "function") paintChat();
    toast("Вы вышли");
  };
  if ($("joinClose")) $("joinClose").onclick = () => {
    pendingSub = null;
    hideJoin();
  };
  $("joinHero").addEventListener("click", (event) => {
    if (event.target === $("joinHero") && (!$("subSheet") || $("subSheet").hidden)) {
      pendingSub = null;
      hideJoin();
    }
  });
  if ($("joinChips")) {
    $("joinChips").addEventListener("scroll", syncChipArrows);
    if ($("joinChipPrev")) $("joinChipPrev").onclick = () => $("joinChips").scrollBy({ left: -160, behavior: "smooth" });
    if ($("joinChipNext")) $("joinChipNext").onclick = () => $("joinChips").scrollBy({ left: 160, behavior: "smooth" });
  }
  if ($("joinPopular")) {
    $("joinPopular").addEventListener("scroll", syncChipArrows);
    if ($("joinPopularPrev")) $("joinPopularPrev").onclick = () => $("joinPopular").scrollBy({ left: -144, behavior: "smooth" });
    if ($("joinPopularNext")) $("joinPopularNext").onclick = () => $("joinPopular").scrollBy({ left: 144, behavior: "smooth" });
  }
  if ($("joinDock")) $("joinDock").onclick = (event) => {
    const button = event.target.closest("[data-join]");
    if (button) scrollJoin(button.dataset.join);
  };
}
bindJoinCabinet();
if ($("heroSuccessClose")) $("heroSuccessClose").onclick = hideHeroSuccess;
if (sessionStorage.getItem("bb-reg-ok")) showHeroSuccess();
if ($("subscribe")) $("subscribe").onclick = () => {
  const value = $("email").value.trim();
  if (!value.includes("@")) return toast("Введите эл. почту");
  toast("Вы в списке рассылки");
  $("email").value = "";
};
if ($("prevBest")) $("prevBest").onclick = () => { state.bestPage -= 1; renderBest(); };
if ($("nextBest")) $("nextBest").onclick = () => { state.bestPage += 1; renderBest(); };
$("openMenu").onclick = () => setOpen("mobileNav", true);
$("closeMenu").onclick = () => setOpen("mobileNav", false);
$("mobileNav").querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen("mobileNav", false)));
if ($("mobileNav") && !$("mobileRegion")) {
  const regionBtn = document.createElement("button");
  regionBtn.type = "button";
  regionBtn.className = "mobile-region";
  regionBtn.id = "mobileRegion";
  $("closeMenu").insertAdjacentElement("afterend", regionBtn);
  regionBtn.onclick = () => {
    setOpen("mobileNav", false);
    setRegionOpen(true);
  };
  showDeliver(localStorage.getItem("bb-region"));
}
if ($("grid")) renderGrid();
if ($("best")) renderBest();
saveCart();

const ADMIN_EMAIL = "admin@trust-club.com";
const ADMIN_PASS = "Trust-21";
const CHAT_GREETING = "Здравствуйте, вам нужна помощь в оформлении заказа?";
const CHAT_API = (location.protocol === "http:" || location.protocol === "https:")
  ? (location.origin + "/api/chat")
  : "";
const ORDERS_API = (location.protocol === "http:" || location.protocol === "https:")
  ? (location.origin + "/api/orders")
  : "";
let chatThread = "";
let chatCache = [];
let chatApiOnline = false;
let chatSyncing = false;

function localOrders() {
  const data = loadJson("bb-orders", []);
  return Array.isArray(data) ? data : [];
}
function saveLocalOrders(list) {
  localStorage.setItem("bb-orders", JSON.stringify(list.slice(0, 40)));
}
function rememberLocalOrder(order) {
  if (!order || !order.code) return;
  const list = localOrders().filter((row) => row.code !== order.code);
  list.unshift(order);
  saveLocalOrders(list);
  try {
    sessionStorage.setItem("bb-last-order", order.code);
  } catch {}
}
function lastOrderCode() {
  try {
    return sessionStorage.getItem("bb-last-order") || "";
  } catch {
    return "";
  }
}
function cartLinesForOrder() {
  return state.cart.map((line) => {
    const item = productById(line.id);
    const usd = cartLineUsd(line);
    return {
      id: line.id,
      name: item ? item.name : line.id,
      qty: line.qty,
      priceRub: Math.round((usd / Math.max(1, line.qty)) * USD_RUB)
    };
  }).filter((row) => row.id);
}
async function createServerOrder(payload) {
  if (!ORDERS_API) throw new Error("Сервер заказов недоступен. Откройте сайт через http://127.0.0.1:8000/");
  const res = await fetch(ORDERS_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.order || !data.order.code) {
    throw new Error((data && data.error) || "Не удалось создать заказ");
  }
  rememberLocalOrder(data.order);
  return data.order;
}
async function fetchMyOrders(email) {
  if (!ORDERS_API || !email) return localOrders().filter((o) => o.email === email);
  try {
    const res = await fetch(ORDERS_API + "?email=" + encodeURIComponent(email), { cache: "no-store" });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !Array.isArray(data.orders)) return localOrders().filter((o) => o.email === email);
    data.orders.forEach(rememberLocalOrder);
    return data.orders;
  } catch {
    return localOrders().filter((o) => o.email === email);
  }
}
function showOrderSuccess(order) {
  const code = order && order.code ? order.code : "";
  if (!code) return;
  const box = document.createElement("aside");
  box.className = "order-success";
  box.setAttribute("role", "dialog");
  box.innerHTML = `
    <div class="order-success-card">
      <strong>Заказ оформлен</strong>
      <p>Ваш уникальный номер заказа:</p>
      <p class="order-success-code" id="orderSuccessCode">${esc(code)}</p>
      <p class="order-success-hint">Сохраните номер или сделайте скриншот. Напишите его в чат поддержки, чтобы уточнить адрес и оформить доставку.</p>
      <div class="order-success-actions">
        <button class="btn" type="button" id="orderCopyCode">Скопировать номер</button>
        <button class="btn join-submit" type="button" id="orderOpenChat">Написать в поддержку</button>
        <button class="text-link" type="button" id="orderSuccessClose">Закрыть</button>
      </div>
    </div>`;
  document.body.appendChild(box);
  const close = () => box.remove();
  $("orderSuccessClose").onclick = close;
  box.addEventListener("click", (event) => {
    if (event.target === box) close();
  });
  $("orderCopyCode").onclick = async () => {
    try {
      await navigator.clipboard.writeText(code);
      toast("Номер скопирован");
    } catch {
      toast(code);
    }
  };
  $("orderOpenChat").onclick = () => {
    close();
    const launch = $("chatLaunch");
    if (launch) launch.click();
    const text = $("chatText");
    if (text && !text.value.trim()) {
      text.value = "Здравствуйте! Номер заказа: " + code + ". Хочу уточнить данные для доставки.";
      text.focus();
    }
  };
}

function ensureAdmin() {
  const list = users();
  const found = list.find((user) => user.email === ADMIN_EMAIL);
  const hash = passHash(ADMIN_PASS);
  if (!found) {
    list.push({ name: "Администратор", email: ADMIN_EMAIL, pass: hash, role: "admin" });
    saveUsers(list);
    return;
  }
  let dirty = false;
  if (found.role !== "admin") {
    found.role = "admin";
    dirty = true;
  }
  if (found.pass !== hash) {
    found.pass = hash;
    dirty = true;
  }
  if (dirty) saveUsers(list);
}
function isAdmin(user) {
  return !!(user && user.role === "admin");
}
function chatHeaders(extra) {
  const headers = Object.assign({ "Content-Type": "application/json" }, extra || {});
  if (isAdmin(currentUser())) headers["X-Admin-Pass"] = ADMIN_PASS;
  return headers;
}
function chats() {
  if (chatApiOnline) return chatCache;
  const list = loadJson("bb-chats", []);
  return Array.isArray(list) ? list : [];
}
function saveChats(list) {
  chatCache = Array.isArray(list) ? list : [];
  if (!chatApiOnline) localStorage.setItem("bb-chats", JSON.stringify(chatCache));
}
async function syncChatFromServer() {
  if (!CHAT_API || chatSyncing) return chatApiOnline;
  chatSyncing = true;
  try {
    const user = currentUser();
    const admin = isAdmin(user);
    const url = admin
      ? CHAT_API + "/messages"
      : CHAT_API + "/messages?thread=" + encodeURIComponent(chatViewerId());
    const res = await fetch(url, { headers: chatHeaders(), cache: "no-store" });
    if (!res.ok) throw new Error("chat sync " + res.status);
    const data = await res.json();
    const list = Array.isArray(data.messages) ? data.messages : [];
    chatCache = list;
    chatApiOnline = true;
    return true;
  } catch (err) {
    chatApiOnline = false;
    return false;
  } finally {
    chatSyncing = false;
  }
}
function chatViewerId() {
  const user = currentUser();
  if (user) return user.email;
  let guest = localStorage.getItem("bb-chat-guest");
  if (!guest) {
    guest = "guest-" + Date.now().toString(36);
    localStorage.setItem("bb-chat-guest", guest);
  }
  return guest;
}
function claimGuestChat() {
  const user = currentUser();
  const guest = localStorage.getItem("bb-chat-guest");
  if (!user || isAdmin(user) || !guest) return;
  const list = chats();
  let moved = false;
  list.forEach((msg) => {
    if (msg.thread !== guest) return;
    msg.thread = user.email;
    msg.name = user.name;
    moved = true;
  });
  if (moved) saveChats(list);
  localStorage.removeItem("bb-chat-guest");
}
function chatWhen(stamp) {
  return new Date(stamp).toLocaleString("ru-RU", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
}
function threadMessages(id) {
  return chats().filter((msg) => msg.thread === id);
}
function chatThreads() {
  const map = new Map();
  chats().forEach((msg) => {
    const prev = map.get(msg.thread);
    if (!prev || msg.at > prev.at) map.set(msg.thread, msg);
  });
  return Array.from(map.values()).sort((a, b) => b.at - a.at);
}
function threadSeenKey(threadId) {
  return "bb-chat-seen-admin-" + threadId;
}
function seenKey() {
  const user = currentUser();
  return "bb-chat-seen-" + (isAdmin(user) ? "admin" : chatViewerId());
}
function threadHasUnread(threadId) {
  const seen = Number(localStorage.getItem(threadSeenKey(threadId)) || 0);
  return threadMessages(threadId).some((msg) => msg.from !== "admin" && msg.at > seen);
}
function unreadCount() {
  const user = currentUser();
  if (isAdmin(user)) return chatThreads().filter((msg) => threadHasUnread(msg.thread)).length;
  const seen = Number(localStorage.getItem(seenKey()) || 0);
  const mine = threadMessages(chatViewerId());
  const last = mine[mine.length - 1];
  return last && last.from === "admin" && last.at > seen ? 1 : 0;
}
function markChatSeen() {
  const user = currentUser();
  if (isAdmin(user) && chatThread) {
    localStorage.setItem(threadSeenKey(chatThread), String(Date.now()));
  }
  localStorage.setItem(seenKey(), String(Date.now()));
}
function chatFingerprint() {
  return chats().map((msg) => msg.id + ":" + msg.at).join("|") + "#" + chatThread + "#" + (currentUser() && currentUser().email || "");
}
let chatPaintKey = "";
function paintChat(force) {
  const box = $("chatBox");
  if (!box) return;
  const user = currentUser();
  const admin = isAdmin(user);
  const back = $("chatBack");
  const name = $("chatName");
  const form = $("chatForm");
  const log = $("chatLog");
  const title = $("chatTitle");
  const launch = $("chatLaunch");
  const waiting = unreadCount();
  const key = chatFingerprint() + "|" + waiting + "|" + (box.hidden ? "0" : "1");
  if (!force && key === chatPaintKey && !box.hidden) {
    launch.classList.toggle("has-new", waiting > 0);
    return;
  }
  chatPaintKey = key;
  const stickBottom = log.scrollHeight - log.scrollTop - log.clientHeight < 48;
  launch.classList.toggle("has-new", waiting > 0);
  if (admin) {
    launch.textContent = waiting ? "Чаты (" + waiting + ")" : "Чаты";
    box.classList.add("chat-admin");
  } else {
    launch.textContent = waiting ? "Вопрос по заказу (" + waiting + ")" : "Вопрос по заказу";
    box.classList.remove("chat-admin");
  }
  name.hidden = !!user;
  if (admin && !chatThread) {
    const rows = chatThreads();
    title.textContent = rows.length ? "Диалоги · " + rows.length : "Диалоги";
    back.hidden = true;
    form.hidden = true;
    log.innerHTML = rows.length
      ? rows.map((msg) => {
        const unread = threadHasUnread(msg.thread);
        const count = threadMessages(msg.thread).length;
        return `<button class="chat-thread${unread ? " is-new" : ""}" type="button" data-thread="${esc(msg.thread)}"><div class="chat-thread-top"><strong>${esc(msg.name || "Покупатель")}</strong>${unread ? "<em>новое</em>" : "<small>" + count + "</small>"}</div><span>${esc(msg.text)}</span><small>${esc(chatWhen(msg.at))}</small></button>`;
      }).join("")
      : `<p class="chat-empty">${chatApiOnline ? "Запросов пока нет. Когда покупатель напишет — диалог появится здесь." : "Сервер чата не запущен. Запустите server/chat_server.py и откройте сайт через http://127.0.0.1:8000/"}</p>`;
    return;
  }
  const thread = admin ? chatThread : chatViewerId();
  const peer = admin ? (threadMessages(thread).slice().reverse().find((msg) => msg.from !== "admin") || {}) : null;
  title.textContent = admin ? (peer.name || "Покупатель") : "Вопрос по заказу";
  back.hidden = !admin;
  form.hidden = false;
  $("chatText").placeholder = admin ? "Ответ покупателю" : "Напишите вопрос по заказу";
  const mine = threadMessages(thread);
  const chatFace = `<img class="chat-avatar" src="img/ui/chat-avatar.png?v=2" alt="" width="28" height="28" />`;
  const bubbles = mine.map((msg) => {
    const face = msg.from === "admin" ? "" : chatFace;
    return `<article class="chat-msg ${msg.from === "admin" ? "admin" : "user"}">${face}<div class="chat-bubble"><p>${esc(msg.text)}</p><small>${esc(msg.from === "admin" ? "Администратор" : msg.name)} · ${esc(chatWhen(msg.at))}</small></div></article>`;
  }).join("");
  const greeting = admin
    ? ""
    : `<article class="chat-msg admin">${chatFace}<div class="chat-bubble"><p>${esc(CHAT_GREETING)}</p><small>Администратор</small></div></article>`;
  log.innerHTML = greeting + bubbles;
  if (force || stickBottom) log.scrollTop = log.scrollHeight;
}
async function sendChat(event) {
  event.preventDefault();
  const user = currentUser();
  const admin = isAdmin(user);
  const text = $("chatText").value.trim();
  if (!text) return;
  let name = user ? user.name : $("chatName").value.trim();
  if (!admin && !user && name.length < 2) {
    toast("Напишите имя");
    return;
  }
  if (!user && !admin) localStorage.setItem("bb-chat-name", name);
  const thread = admin ? chatThread : chatViewerId();
  if (admin && !thread) return;
  const localMsg = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    thread,
    from: admin ? "admin" : "user",
    name: admin ? "Администратор" : (name || "Покупатель"),
    text: text.slice(0, 500),
    at: Date.now()
  };
  $("chatText").value = "";
  if (CHAT_API) {
    try {
      const res = await fetch(CHAT_API + "/messages", {
        method: "POST",
        headers: chatHeaders(),
        body: JSON.stringify({
          thread,
          text: localMsg.text,
          name: localMsg.name,
          admin: !!admin,
          adminPass: admin ? ADMIN_PASS : undefined
        })
      });
      if (!res.ok) throw new Error("send " + res.status);
      const data = await res.json();
      chatApiOnline = true;
      if (data.message) {
        chatCache = chatCache.concat([data.message]);
      } else {
        await syncChatFromServer();
      }
    } catch (err) {
      chatApiOnline = false;
      toast("Нет связи с сервером чата. Запустите server/chat_server.py");
      const list = loadJson("bb-chats", []);
      list.push(localMsg);
      localStorage.setItem("bb-chats", JSON.stringify(list));
      chatCache = list;
    }
  } else {
    const list = chats().concat([localMsg]);
    saveChats(list);
    toast("Откройте сайт через сервер чата, чтобы писать с разных устройств");
  }
  markChatSeen();
  paintChat(true);
  if (typeof paintJoin === "function" && $("joinHero") && !$("joinHero").hidden) paintJoin();
}
function mountChat() {
  ensureAdmin();
  const dock = document.createElement("div");
  dock.className = "chat-dock";
  dock.innerHTML = `<button class="chat-launch" type="button" id="chatLaunch">Вопрос по заказу</button><section class="chat-box" id="chatBox" hidden><header class="chat-head"><button type="button" id="chatBack" hidden>Назад</button><strong id="chatTitle">Вопрос по заказу</strong><button class="chat-fold" type="button" id="chatClose">Свернуть</button></header><div class="chat-log" id="chatLog"></div><form class="chat-form" id="chatForm"><input id="chatName" type="text" maxlength="40" placeholder="Ваше имя" aria-label="Ваше имя" /><textarea id="chatText" rows="3" maxlength="500" placeholder="Напишите вопрос по заказу" aria-label="Сообщение"></textarea><button class="btn" type="submit">Отправить</button></form></section>`;
  document.body.appendChild(dock);
  const savedName = localStorage.getItem("bb-chat-name");
  if (savedName) $("chatName").value = savedName;
  function openChatPanel() {
    const box = $("chatBox");
    box.classList.remove("is-open");
    box.hidden = false;
    $("chatLaunch").hidden = true;
    markChatSeen();
    paintChat();
    requestAnimationFrame(() => {
      requestAnimationFrame(() => box.classList.add("is-open"));
    });
    const mobile = window.matchMedia("(max-width: 640px)").matches;
    if (!mobile) setTimeout(() => $("chatText").focus(), 320);
  }
  function closeChatPanel() {
    const box = $("chatBox");
    box.classList.remove("is-open");
    const finish = () => {
      box.hidden = true;
      box.removeEventListener("transitionend", finish);
    };
    box.addEventListener("transitionend", finish);
    setTimeout(finish, 400);
    $("chatLaunch").hidden = false;
    chatThread = "";
    paintChat();
  }
  $("chatLaunch").onclick = openChatPanel;
  $("chatClose").onclick = closeChatPanel;
  $("chatBack").onclick = () => {
    chatThread = "";
    paintChat(true);
  };
  $("chatForm").onsubmit = sendChat;
  $("chatLog").onclick = (event) => {
    const button = event.target.closest("[data-thread]");
    if (!button || !isAdmin(currentUser())) return;
    chatThread = button.dataset.thread;
    markChatSeen();
    paintChat(true);
    const mobile = window.matchMedia("(max-width: 640px)").matches;
    if (!mobile) $("chatText").focus();
  };
  window.addEventListener("storage", (event) => {
    if (event.key === "bb-chats" || (event.key && event.key.indexOf("bb-chat-seen") === 0)) {
      paintChat();
      if (typeof paintJoin === "function" && $("joinHero") && !$("joinHero").hidden) paintJoin();
    }
  });
  async function tickChat() {
    if (CHAT_API) await syncChatFromServer();
    paintChat();
    if (typeof paintJoin === "function" && $("joinHero") && !$("joinHero").hidden && isAdmin(currentUser())) paintJoin();
  }
  setInterval(tickChat, 2000);
  tickChat();
}
mountChat();

document.querySelectorAll("a.logo").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const onProduct = /(morozhenoe|pechenie|marmelad)\.html$/i.test(location.pathname);
    if (onProduct) {
      location.href = "index.html#top";
      return;
    }
    if (location.hash !== "#top") history.replaceState(null, "", "#top");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });
});
