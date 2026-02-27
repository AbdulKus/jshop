const LOTS = [
  {
    id: "aurora-ring",
    featured: true,
    name: "Aurora Halo Ring",
    category: "ring",
    price: 249000,
    description:
      "Центральный бриллиант в ореоле из микропаве. Мягкая округлая шинка и посадка рассчитаны на ежедневный комфорт.",
    specs: ["Золото 750 пробы", "Бриллиант 0.82 ct", "Ручная полировка", "Сертификат подлинности"],
    images: [
      "https://loremflickr.com/1400/1000/jewelry,ring?lock=21",
      "https://loremflickr.com/1400/1000/diamond,ring?lock=22",
      "https://loremflickr.com/1400/1000/luxury,ring?lock=23"
    ]
  },
  {
    id: "celeste-necklace",
    featured: true,
    name: "Celeste Sapphire Necklace",
    category: "necklace",
    price: 189000,
    description:
      "Сапфировая капля в обрамлении световых граней. Подвес создан так, чтобы ловить блики при каждом движении.",
    specs: ["Белое золото", "Сапфир 1.9 ct", "Длина 42 см", "Механизм anti-twist"],
    images: [
      "https://loremflickr.com/1400/1000/jewelry,necklace?lock=24",
      "https://loremflickr.com/1400/1000/sapphire,necklace?lock=25",
      "https://loremflickr.com/1400/1000/luxury,pendant?lock=26"
    ]
  },
  {
    id: "verona-earrings",
    featured: false,
    name: "Verona Pearl Earrings",
    category: "earrings",
    price: 97000,
    description:
      "Классические серьги с натуральным перламутровым свечением и платиновой фурнитурой. Легкие и праздничные одновременно.",
    specs: ["Платина", "Натуральный жемчуг", "Вес пары 5.8 г", "Английский замок"],
    images: [
      "https://loremflickr.com/1400/1000/jewelry,earrings?lock=27",
      "https://loremflickr.com/1400/1000/pearl,earrings?lock=28",
      "https://loremflickr.com/1400/1000/luxury,earrings?lock=29"
    ]
  },
  {
    id: "orion-bracelet",
    featured: false,
    name: "Orion Emerald Bracelet",
    category: "bracelet",
    price: 156000,
    description:
      "Гибкая посадка и ювелирная точность звеньев. Изумрудные вставки добавляют глубину цвета и эффект дорогого сияния.",
    specs: ["Золото 585 пробы", "Изумруды багет", "Длина 17-19 см", "Регулируемый замок"],
    images: [
      "https://loremflickr.com/1400/1000/jewelry,bracelet?lock=30",
      "https://loremflickr.com/1400/1000/emerald,bracelet?lock=31",
      "https://loremflickr.com/1400/1000/luxury,bracelet?lock=32"
    ]
  },
  {
    id: "noctis-pendant",
    featured: true,
    name: "Noctis Black Diamond Pendant",
    category: "pendant",
    price: 212000,
    description:
      "Контрастный кулон с черным бриллиантом и холодным металлическим блеском. Для образов с акцентом на графику.",
    specs: ["Платина", "Черный бриллиант 1.1 ct", "Минималистичная огранка", "Подарочный футляр"],
    images: [
      "https://loremflickr.com/1400/1000/jewelry,pendant?lock=33",
      "https://loremflickr.com/1400/1000/diamond,pendant?lock=34",
      "https://loremflickr.com/1400/1000/luxury,jewelry?lock=35"
    ]
  },
  {
    id: "solaris-set",
    featured: false,
    name: "Solaris Topaz Set",
    category: "set",
    price: 278000,
    description:
      "Комплект из кольца и серег с имперским топазом. Баланс между торжественным характером и чистой геометрией линий.",
    specs: ["Белое золото", "Имперский топаз", "Комплект: 3 изделия", "Гарантия 12 месяцев"],
    images: [
      "https://loremflickr.com/1400/1000/jewelry,set?lock=36",
      "https://loremflickr.com/1400/1000/topaz,jewelry?lock=37",
      "https://loremflickr.com/1400/1000/luxury,set?lock=38"
    ]
  },
  {
    id: "riviera-ruby",
    featured: false,
    name: "Riviera Ruby Ring",
    category: "ring",
    price: 143000,
    description:
      "Рубиновая дорожка с точной калибровкой камней создает непрерывный алый поток. Кольцо идеально сочетается с вечерними образами.",
    specs: ["Красное золото", "Рубины 0.9 ct", "Дорожка full round", "Индивидуальный размер"],
    images: [
      "https://loremflickr.com/1400/1000/ruby,ring?lock=39",
      "https://loremflickr.com/1400/1000/jewelry,ring?lock=40",
      "https://loremflickr.com/1400/1000/luxury,gemstone?lock=41"
    ]
  },
  {
    id: "mist-chain",
    featured: false,
    name: "Mist Platinum Chain",
    category: "chain",
    price: 88000,
    description:
      "Платиновая цепь с воздушной фактурой звеньев. Носится соло или как база для подвесов любой формы.",
    specs: ["Платина", "Длина 45 см", "Вес 9.4 г", "Двойной замок"],
    images: [
      "https://loremflickr.com/1400/1000/jewelry,chain?lock=42",
      "https://loremflickr.com/1400/1000/luxury,chain?lock=43",
      "https://loremflickr.com/1400/1000/jewelry,necklace?lock=44"
    ]
  },
  {
    id: "lumen-opal-ring",
    featured: false,
    name: "Lumen Opal Ring",
    category: "ring",
    price: 132000,
    description:
      "Опал с живой игрой цвета в тонкой оправе. Камень переливается в холодных и теплых оттенках при разном свете.",
    specs: ["Золото 585 пробы", "Австралийский опал", "Вес 4.1 г", "Подарочный кейс"],
    images: [
      "https://loremflickr.com/1400/1000/opal,ring?lock=45",
      "https://loremflickr.com/1400/1000/jewelry,ring?lock=46",
      "https://loremflickr.com/1400/1000/luxury,opal?lock=47"
    ]
  },
  {
    id: "atlas-cuff",
    featured: false,
    name: "Atlas Silver Cuff",
    category: "bracelet",
    price: 92000,
    description:
      "Жесткий браслет с чистой геометрией и зеркальной полировкой. Легко комбинируется как с базовыми, так и с вечерними образами.",
    specs: ["Стерлинговое серебро", "Регулируемый размер", "Ручная гравировка", "Антиокислительное покрытие"],
    images: [
      "https://loremflickr.com/1400/1000/silver,bracelet?lock=48",
      "https://loremflickr.com/1400/1000/jewelry,bracelet?lock=49",
      "https://loremflickr.com/1400/1000/luxury,bracelet?lock=50"
    ]
  },
  {
    id: "serein-earrings",
    featured: true,
    name: "Serein Diamond Earrings",
    category: "earrings",
    price: 174000,
    description:
      "Подвесные серьги с бриллиантовой дорожкой и легкой подвижностью. При движении создают мягкий световой шлейф.",
    specs: ["Белое золото", "Бриллианты 0.58 ct", "Вес пары 6.3 г", "Надежный замок"],
    images: [
      "https://loremflickr.com/1400/1000/diamond,earrings?lock=51",
      "https://loremflickr.com/1400/1000/jewelry,earrings?lock=52",
      "https://loremflickr.com/1400/1000/luxury,earrings?lock=53"
    ]
  },
  {
    id: "noble-chain",
    featured: false,
    name: "Noble Rope Chain",
    category: "chain",
    price: 101000,
    description:
      "Плетение rope с плотной посадкой и ярким металлическим блеском. Универсальная цепь для соло-носки и подвесов.",
    specs: ["Золото 585 пробы", "Длина 50 см", "Вес 11.2 г", "Карабин усиленный"],
    images: [
      "https://loremflickr.com/1400/1000/gold,chain?lock=54",
      "https://loremflickr.com/1400/1000/jewelry,chain?lock=55",
      "https://loremflickr.com/1400/1000/luxury,necklace?lock=56"
    ]
  },
  {
    id: "astra-necklace",
    featured: false,
    name: "Astra Moon Necklace",
    category: "necklace",
    price: 117000,
    description:
      "Колье с лунным камнем и серебристым свечением огранки. Минималистичный профиль подходит к повседневной и праздничной стилистике.",
    specs: ["Белое золото", "Лунный камень", "Длина 40-45 см", "Регулируемая цепочка"],
    images: [
      "https://loremflickr.com/1400/1000/moonstone,necklace?lock=57",
      "https://loremflickr.com/1400/1000/jewelry,necklace?lock=58",
      "https://loremflickr.com/1400/1000/luxury,pendant?lock=59"
    ]
  },
  {
    id: "prime-ruby-set",
    featured: true,
    name: "Prime Ruby Suite",
    category: "set",
    price: 312000,
    description:
      "Премиальный комплект с рубинами и бриллиантовыми акцентами. Выдержанная архитектура форм придает комплекту характер коллекционного изделия.",
    specs: ["Белое золото", "Рубины 1.8 ct", "Комплект: серьги + кольцо", "Лимитированная серия"],
    images: [
      "https://loremflickr.com/1400/1000/ruby,jewelry?lock=60",
      "https://loremflickr.com/1400/1000/luxury,set?lock=61",
      "https://loremflickr.com/1400/1000/diamond,set?lock=62"
    ]
  },
  {
    id: "aqua-pendant",
    featured: false,
    name: "Aqua Drop Pendant",
    category: "pendant",
    price: 126000,
    description:
      "Каплевидный кулон с аквамарином и прозрачной посадкой камня. За счет тонкой оправы создает эффект парящего кристалла.",
    specs: ["Платина", "Аквамарин 1.2 ct", "Цепь 42 см", "Платиновый замок"],
    images: [
      "https://loremflickr.com/1400/1000/aquamarine,pendant?lock=63",
      "https://loremflickr.com/1400/1000/jewelry,pendant?lock=64",
      "https://loremflickr.com/1400/1000/luxury,jewelry?lock=65"
    ]
  },
  {
    id: "viva-ring",
    featured: false,
    name: "Viva Citrine Ring",
    category: "ring",
    price: 109000,
    description:
      "Кольцо с цитрином медового оттенка и мягким высоким кастом. Камень раскрывает теплый отблеск под дневным и вечерним светом.",
    specs: ["Желтое золото", "Цитрин 1.5 ct", "Вес 4.9 г", "Индивидуальный размер"],
    images: [
      "https://loremflickr.com/1400/1000/citrine,ring?lock=66",
      "https://loremflickr.com/1400/1000/jewelry,ring?lock=67",
      "https://loremflickr.com/1400/1000/luxury,ring?lock=68"
    ]
  },
  {
    id: "azure-bracelet",
    featured: false,
    name: "Azure Tennis Bracelet",
    category: "bracelet",
    price: 168000,
    description:
      "Теннисный браслет с акцентом на плавность линий и ровную посадку по запястью. Микс сапфировых и бриллиантовых вставок усиливает глубину цвета.",
    specs: ["Белое золото", "Сапфиры + бриллианты", "Длина 18 см", "Классический замок"],
    images: [
      "https://loremflickr.com/1400/1000/sapphire,bracelet?lock=69",
      "https://loremflickr.com/1400/1000/diamond,bracelet?lock=70",
      "https://loremflickr.com/1400/1000/jewelry,bracelet?lock=71"
    ]
  },
  {
    id: "echo-earrings",
    featured: false,
    name: "Echo Hoop Earrings",
    category: "earrings",
    price: 86000,
    description:
      "Лаконичные серьги-кольца с выразительным полированным профилем. Дают чистый блеск и удобны для долгого ношения.",
    specs: ["Красное золото", "Диаметр 22 мм", "Вес пары 4.6 г", "Надежная застежка"],
    images: [
      "https://loremflickr.com/1400/1000/hoop,earrings?lock=72",
      "https://loremflickr.com/1400/1000/jewelry,earrings?lock=73",
      "https://loremflickr.com/1400/1000/luxury,earrings?lock=74"
    ]
  },
  {
    id: "zenith-necklace",
    featured: true,
    name: "Zenith Emerald Necklace",
    category: "necklace",
    price: 221000,
    description:
      "Колье с центральным изумрудом и тонкой россыпью бриллиантов. Композиция рассчитана на яркую посадку в зоне декольте.",
    specs: ["Платина", "Изумруд 1.4 ct", "Бриллианты 0.3 ct", "Длина 41 см"],
    images: [
      "https://loremflickr.com/1400/1000/emerald,necklace?lock=75",
      "https://loremflickr.com/1400/1000/jewelry,necklace?lock=76",
      "https://loremflickr.com/1400/1000/luxury,necklace?lock=77"
    ]
  }
];

const SOLD_LOT_IDS = new Set([
  "noctis-pendant",
  "riviera-ruby",
  "lumen-opal-ring",
  "prime-ruby-set",
  "viva-ring",
  "zenith-necklace"
]);

const GLITCH_BACKGROUNDS = [
  "bg_glitch/20260227_111640.jpg",
  "bg_glitch/20260227_111643.jpg",
  "bg_glitch/20260227_111649.jpg",
  "bg_glitch/20260227_111654.jpg",
  "bg_glitch/20260227_111659.jpg",
  "bg_glitch/20260227_111706.jpg",
  "bg_glitch/20260227_111710.jpg",
  "bg_glitch/20260227_111715.jpg",
  "bg_glitch/20260227_111722.jpg",
  "bg_glitch/20260227_111805.jpg",
  "bg_glitch/20260227_111815.jpg",
  "bg_glitch/20260227_111820.jpg",
  "bg_glitch/20260227_111824.jpg",
  "bg_glitch/20260227_111830.jpg",
  "bg_glitch/20260227_111838.jpg",
  "bg_glitch/20260227_111843.jpg"
];

function shuffleArray(items) {
  const next = [...items];
  for (let index = next.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [next[index], next[randomIndex]] = [next[randomIndex], next[index]];
  }
  return next;
}

const randomizedGlitchBackgrounds = shuffleArray(GLITCH_BACKGROUNDS);
let soldBackgroundOffset = 0;
LOTS.forEach((lot) => {
  lot.sold = SOLD_LOT_IDS.has(lot.id);
  lot.glitchBackground = lot.sold
    ? randomizedGlitchBackgrounds[soldBackgroundOffset % randomizedGlitchBackgrounds.length]
    : "";
  if (lot.sold) {
    soldBackgroundOffset += 1;
  }
});

const CATEGORY_LABELS = {
  all: "Все",
  ring: "Кольца",
  necklace: "Колье",
  earrings: "Серьги",
  bracelet: "Браслеты",
  pendant: "Подвесы",
  set: "Комплекты",
  chain: "Цепи"
};

const ORDER_CONTACTS = [
  {
    id: "telegram",
    label: "Telegram",
    hint: "@AbdulKus",
    href: () => "https://t.me/AbdulKus",
    external: true,
    icon: `
      <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
        <path fill="currentColor" d="M20.67 3.61c.77-.31 1.53.38 1.35 1.18l-2.73 12.47c-.16.74-.95 1.12-1.62.78l-4.17-2.11-2.35 2.17a.9.9 0 0 1-1.51-.52l-.48-3.48 9.59-8.71a.45.45 0 0 0-.54-.72L6.32 12.3l-4.1-1.64a.9.9 0 0 1 .05-1.69z"/>
      </svg>
    `
  },
  {
    id: "jabber",
    label: "Jabber",
    hint: "abdulkus@xmpp.jp",
    href: () => "xmpp:abdulkus@xmpp.jp?message",
    external: false,
    icon: `
      <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
        <path fill="none" stroke="currentColor" stroke-width="1.8" d="M4.6 6.7a5.7 5.7 0 0 1 5.7-2.7h3.4a5.7 5.7 0 0 1 5.7 5.7v2.6a5.7 5.7 0 0 1-5.7 5.7H10l-3.4 2.3v-3A5.7 5.7 0 0 1 4 12.3z"/>
        <circle cx="9.4" cy="10.9" r="1.1" fill="currentColor"/>
        <circle cx="12" cy="10.9" r="1.1" fill="currentColor"/>
        <circle cx="14.6" cy="10.9" r="1.1" fill="currentColor"/>
      </svg>
    `
  },
  {
    id: "signal",
    label: "Signal",
    hint: "+1 202 555 0142",
    href: () => "https://signal.me/#p/+12025550142",
    external: true,
    icon: `
      <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
        <path fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-dasharray="2.2 2.2" d="M12 3.6c4.9 0 8.8 3.3 8.8 7.5S16.9 18.6 12 18.6c-.7 0-1.4-.1-2.1-.2l-4 1.9 1.2-3.5c-2.2-1.3-3.6-3.3-3.6-5.7 0-4.2 4-7.5 8.8-7.5z"/>
        <path fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" d="M8.1 11.1h7.8M9.5 14h5"/>
      </svg>
    `
  },
  {
    id: "mail",
    label: "Mail",
    hint: "orders@aerogem.shop",
    href: (lot) =>
      `mailto:orders@aerogem.shop?subject=${encodeURIComponent(`Заказ: ${lot.name}`)}&body=${encodeURIComponent(
        `Здравствуйте! Хочу оформить заказ на лот «${lot.name}».`
      )}`,
    external: false,
    icon: `
      <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
        <rect x="3.3" y="5.1" width="17.4" height="13.8" rx="2.2" fill="none" stroke="currentColor" stroke-width="1.8"/>
        <path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="m4.6 7.1 7.4 5.6 7.4-5.6"/>
      </svg>
    `
  }
];

const refs = {
  lotGrid: document.getElementById("lotGrid"),
  paginationPanel: document.getElementById("paginationPanel"),
  pagePrevBtn: document.getElementById("pagePrevBtn"),
  pageNextBtn: document.getElementById("pageNextBtn"),
  pageList: document.getElementById("pageList"),
  cardTemplate: document.getElementById("lotCardTemplate"),
  lotWindowTemplate: document.getElementById("lotWindowTemplate"),
  trayItemTemplate: document.getElementById("trayItemTemplate"),
  searchInput: document.getElementById("searchInput"),
  sortSelect: document.getElementById("sortSelect"),
  sortSelectTrigger: document.getElementById("sortSelectTrigger"),
  sortSelectValue: document.getElementById("sortSelectValue"),
  sortSelectMenu: document.getElementById("sortSelectMenu"),
  availableToggle: document.getElementById("availableToggle"),
  categoryChips: document.getElementById("categoryChips"),
  emptyState: document.getElementById("emptyState"),
  lotsInCatalog: document.getElementById("lotsInCatalog"),
  clockNow: document.getElementById("clockNow"),
  openFeaturedBtn: document.getElementById("openFeaturedBtn"),
  desktopLayer: document.getElementById("desktopLayer"),
  desktopBackdrop: document.getElementById("desktopBackdrop"),
  windowHost: document.getElementById("windowHost"),
  trayBar: document.getElementById("trayBar"),
  trayItems: document.getElementById("trayItems"),
  trayEmpty: document.getElementById("trayEmpty")
};

const state = {
  query: "",
  category: "all",
  sort: "featured",
  onlyAvailable: false,
  visibleLots: [...LOTS],
  page: 1,
  pageSize: 8,
  pagingVisible: false
};

let lotRenderToken = 0;
const MAX_MINIMIZED_WINDOWS = 6;
const COMPACT_GALLERY_MAX_WIDTH = 860;
const MAXIMIZE_ANIMATION_DURATION = 420;
const CLOSE_ANIMATION_DURATION = 210;
let minimizeHintTimer = null;
let minimizeHintElement = null;

const windowManager = {
  windows: new Map(),
  sequence: 0,
  zCounter: 200,
  activeWindowId: null
};

const interaction = {
  mode: null,
  windowId: null,
  startX: 0,
  startY: 0,
  startLeft: 0,
  startTop: 0,
  startWidth: 0,
  startHeight: 0
};

function formatPrice(value) {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0
  }).format(value);
}

function updateClock() {
  refs.clockNow.textContent = new Date().toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit"
  });
}

function normalize(text) {
  return text.toLowerCase().trim();
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function getLotById(lotId) {
  return LOTS.find((lot) => lot.id === lotId) ?? null;
}

function getLotStatusMeta(lot) {
  if (!lot.sold) {
    return null;
  }

  return {
    label: "Продано",
    className: "sold",
    ariaLabel: "Лот продан"
  };
}

function applyLotGlitchBackground(element, lot) {
  if (!element) {
    return;
  }

  if (lot.sold && lot.glitchBackground) {
    element.style.setProperty("--glitch-bg-image", `url("${lot.glitchBackground}")`);
    return;
  }

  element.style.removeProperty("--glitch-bg-image");
}

function getDesktopReserveHeight() {
  return 118;
}

function isMobileLayout() {
  return window.matchMedia("(max-width: 760px)").matches;
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function makeCategoryChips() {
  const categories = ["all", ...new Set(LOTS.map((item) => item.category))];
  const fragment = document.createDocumentFragment();

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `chip${state.category === category ? " active" : ""}`;
    button.dataset.category = category;
    button.textContent = CATEGORY_LABELS[category] ?? category;
    button.addEventListener("click", () => {
      state.category = category;
      state.page = 1;
      makeCategoryChips();
      renderLots({ animatePage: true });
    });
    fragment.appendChild(button);
  });

  refs.categoryChips.innerHTML = "";
  refs.categoryChips.appendChild(fragment);
}

function getFilteredLots() {
  const query = normalize(state.query);

  let list = LOTS.filter((lot) => {
    const byCategory = state.category === "all" || lot.category === state.category;
    const byQuery = !query || normalize(lot.name).includes(query);
    const byAvailability = !state.onlyAvailable || !lot.sold;
    return byCategory && byQuery && byAvailability;
  });

  if (state.sort === "featured") {
    list.sort((a, b) => Number(b.featured) - Number(a.featured) || a.price - b.price);
  } else if (state.sort === "price-asc") {
    list.sort((a, b) => a.price - b.price);
  } else if (state.sort === "price-desc") {
    list.sort((a, b) => b.price - a.price);
  } else if (state.sort === "name-asc") {
    list.sort((a, b) => a.name.localeCompare(b.name, "ru"));
  }

  return list;
}

function closeSortDropdown() {
  if (!refs.sortSelect || !refs.sortSelectTrigger || !refs.sortSelectMenu) {
    return;
  }
  refs.sortSelect.classList.remove("open");
  refs.sortSelectMenu.classList.remove("is-open");
  refs.sortSelectTrigger.setAttribute("aria-expanded", "false");
}

function positionSortDropdown() {
  if (!refs.sortSelect || !refs.sortSelectTrigger || !refs.sortSelectMenu) {
    return;
  }
  if (!refs.sortSelectMenu.classList.contains("is-open")) {
    return;
  }

  const triggerRect = refs.sortSelectTrigger.getBoundingClientRect();
  const width = Math.min(Math.round(triggerRect.width), window.innerWidth - 16);
  const left = clamp(Math.round(triggerRect.left), 8, Math.max(8, window.innerWidth - width - 8));
  const top = Math.round(triggerRect.bottom + 8);

  refs.sortSelectMenu.style.left = `${left}px`;
  refs.sortSelectMenu.style.top = `${top}px`;
  refs.sortSelectMenu.style.width = `${width}px`;
}

function openSortDropdown() {
  if (!refs.sortSelect || !refs.sortSelectTrigger) {
    return;
  }
  refs.sortSelect.classList.add("open");
  refs.sortSelectMenu?.classList.add("is-open");
  refs.sortSelectTrigger.setAttribute("aria-expanded", "true");
  positionSortDropdown();
}

function getSortOptions() {
  const optionsRoot = refs.sortSelectMenu ?? refs.sortSelect;
  if (!optionsRoot) {
    return [];
  }
  return Array.from(optionsRoot.querySelectorAll(".glass-select-option"));
}

function applySortSelection(nextSort, shouldRender = false) {
  if (!refs.sortSelect || !refs.sortSelectValue) {
    return;
  }

  const options = getSortOptions();
  if (!options.length) {
    return;
  }

  const selectedOption = options.find((option) => option.dataset.value === nextSort) ?? options[0];
  const selectedValue = selectedOption.dataset.value ?? "featured";
  state.sort = selectedValue;
  refs.sortSelect.dataset.value = selectedValue;
  refs.sortSelectValue.textContent = selectedOption.textContent?.trim() ?? "";

  options.forEach((option) => {
    const isActive = option === selectedOption;
    option.classList.toggle("active", isActive);
    option.setAttribute("aria-selected", isActive ? "true" : "false");
  });

  if (shouldRender) {
    state.page = 1;
    renderLots({ animatePage: true });
  }
}

function shiftSortSelection(step) {
  const options = getSortOptions();
  if (!options.length) {
    return;
  }

  const currentIndex = Math.max(0, options.findIndex((option) => option.dataset.value === state.sort));
  const nextIndex = (currentIndex + step + options.length) % options.length;
  const nextOption = options[nextIndex];
  if (!nextOption) {
    return;
  }
  applySortSelection(nextOption.dataset.value ?? state.sort, true);
}

function syncAvailabilityToggle() {
  if (!refs.availableToggle) {
    return;
  }
  refs.availableToggle.classList.toggle("is-active", state.onlyAvailable);
  refs.availableToggle.setAttribute("aria-checked", state.onlyAvailable ? "true" : "false");
}

function getPageCount(totalItems) {
  return Math.max(1, Math.ceil(totalItems / state.pageSize));
}

function getGridColumnCount() {
  const template = window.getComputedStyle(refs.lotGrid).gridTemplateColumns;
  if (!template || template === "none") {
    return 1;
  }
  const count = template.split(" ").filter(Boolean).length;
  return Math.max(1, count);
}

function getPreferredPageSize() {
  if (isMobileLayout()) {
    return 8;
  }

  const columns = getGridColumnCount();
  let size = Math.max(8, columns * 2);
  size = Math.round(size / columns) * columns;
  size = Math.max(columns, size);
  return size;
}

function ensurePageSize() {
  const next = getPreferredPageSize();
  if (state.pageSize !== next) {
    state.pageSize = next;
    state.page = 1;
  }
}

function buildPageItems(totalPages, currentPage) {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const set = new Set([1, totalPages, currentPage - 1, currentPage, currentPage + 1]);
  const sorted = Array.from(set).filter((value) => value >= 1 && value <= totalPages).sort((a, b) => a - b);
  const items = [];

  sorted.forEach((value, index) => {
    items.push(value);
    const next = sorted[index + 1];
    if (next && next - value > 1) {
      items.push("...");
    }
  });

  return items;
}

function renderPagination(totalItems, totalPages) {
  const shouldShow = totalItems > 0 && totalPages > 1;
  state.pagingVisible = shouldShow;
  refs.paginationPanel.hidden = !shouldShow;
  refs.pagePrevBtn.disabled = state.page <= 1;
  refs.pageNextBtn.disabled = state.page >= totalPages;
  syncTrayVisibility();

  refs.pageList.innerHTML = "";
  if (!shouldShow) {
    return;
  }

  const items = buildPageItems(totalPages, state.page);
  const fragment = document.createDocumentFragment();

  items.forEach((item) => {
    if (item === "...") {
      const span = document.createElement("span");
      span.className = "page-ellipsis";
      span.textContent = "…";
      fragment.appendChild(span);
      return;
    }

    const button = document.createElement("button");
    button.type = "button";
    button.className = `page-btn${item === state.page ? " active" : ""}`;
    button.textContent = String(item);
    button.setAttribute("aria-label", `Страница ${item}`);
    button.setAttribute("aria-current", item === state.page ? "page" : "false");
    button.addEventListener("click", () => {
      if (item !== state.page) {
        state.page = item;
        renderLots({ animatePage: true });
      }
    });
    fragment.appendChild(button);
  });

  refs.pageList.appendChild(fragment);
}

function mountLotCards(lotsOnPage, renderToken) {
  refs.lotGrid.innerHTML = "";
  const fragment = document.createDocumentFragment();

  lotsOnPage.forEach((lot, index) => {
    const card = refs.cardTemplate.content.firstElementChild.cloneNode(true);
    const title = card.querySelector(".lot-window-title");
    const image = card.querySelector(".lot-image");
    const category = card.querySelector(".lot-category");
    const name = card.querySelector(".lot-name");
    const price = card.querySelector(".lot-price");
    const stock = card.querySelector(".lot-stock");
    const action = card.querySelector(".lot-click-zone");
    const statusMeta = getLotStatusMeta(lot);

    title.textContent = CATEGORY_LABELS[lot.category] ?? lot.category;
    category.textContent = CATEGORY_LABELS[lot.category] ?? lot.category;
    name.textContent = lot.name;
    price.textContent = formatPrice(lot.price);
    if (statusMeta) {
      stock.hidden = false;
      stock.className = `lot-stock ${statusMeta.className}`;
      stock.textContent = statusMeta.label;
      stock.setAttribute("aria-label", statusMeta.ariaLabel);
    } else {
      stock.hidden = true;
      stock.className = "lot-stock";
      stock.textContent = "";
      stock.removeAttribute("aria-label");
    }
    image.src = lot.images[0];
    image.alt = lot.name;
    card.classList.toggle("is-sold", lot.sold);
    applyLotGlitchBackground(card, lot);
    action.addEventListener("click", () => openLotWindow(lot.id));

    fragment.appendChild(card);
    setTimeout(() => {
      if (renderToken === lotRenderToken) {
        card.classList.add("is-visible");
      }
    }, 24 + index * 44);
  });

  const columns = getGridColumnCount();
  const remainder = lotsOnPage.length % columns;
  if (columns > 1 && remainder !== 0) {
    const placeholdersCount = columns - remainder;
    for (let index = 0; index < placeholdersCount; index += 1) {
      const placeholder = document.createElement("article");
      placeholder.className = "lot-card lot-card-placeholder shell-window is-visible";
      placeholder.setAttribute("aria-hidden", "true");
      placeholder.innerHTML = `
        <div class="window-bar mini">
          <div class="window-title">Скоро в каталоге</div>
          <div class="window-controls">
            <span class="window-dot"></span>
            <span class="window-dot"></span>
            <span class="window-dot"></span>
          </div>
        </div>
        <div class="lot-placeholder-content">
          <p>Новая ювелирная позиция<br>появится здесь</p>
        </div>
      `;
      fragment.appendChild(placeholder);
    }
  }

  refs.lotGrid.appendChild(fragment);
}

function renderLots({ animatePage = false } = {}) {
  const renderToken = ++lotRenderToken;
  ensurePageSize();
  state.visibleLots = getFilteredLots();
  refs.lotsInCatalog.textContent = String(state.visibleLots.length);

  const totalPages = getPageCount(state.visibleLots.length);
  state.page = clamp(state.page, 1, totalPages);
  renderPagination(state.visibleLots.length, totalPages);

  if (!state.visibleLots.length) {
    refs.emptyState.hidden = false;
    refs.lotGrid.innerHTML = "";
    return;
  }

  refs.emptyState.hidden = true;
  const start = (state.page - 1) * state.pageSize;
  const lotsOnPage = state.visibleLots.slice(start, start + state.pageSize);

  if (animatePage && refs.lotGrid.children.length) {
    refs.lotGrid.classList.remove("page-transition-in");
    refs.lotGrid.classList.add("page-transition-out");

    setTimeout(() => {
      if (renderToken !== lotRenderToken) {
        return;
      }
      mountLotCards(lotsOnPage, renderToken);
      refs.lotGrid.classList.remove("page-transition-out");
      refs.lotGrid.classList.add("page-transition-in");
      setTimeout(() => {
        if (renderToken === lotRenderToken) {
          refs.lotGrid.classList.remove("page-transition-in");
        }
      }, 280);
    }, 160);
    return;
  }

  refs.lotGrid.classList.remove("page-transition-out");
  mountLotCards(lotsOnPage, renderToken);
  refs.lotGrid.classList.add("page-transition-in");
  setTimeout(() => {
    if (renderToken === lotRenderToken) {
      refs.lotGrid.classList.remove("page-transition-in");
    }
  }, 280);
}

function createWindowRefs(element) {
  return {
    dragHandle: element.querySelector(".js-drag-handle"),
    titleBar: element.querySelector(".js-window-title"),
    headPrevImageBtn: element.querySelector(".js-head-prev-image"),
    headNextImageBtn: element.querySelector(".js-head-next-image"),
    minimizeBtn: element.querySelector(".js-minimize"),
    maximizeBtn: element.querySelector(".js-maximize"),
    closeBtn: element.querySelector(".js-close"),
    prevImageBtn: element.querySelector(".js-prev-image"),
    nextImageBtn: element.querySelector(".js-next-image"),
    imageCounter: element.querySelector(".js-image-counter"),
    thumbStrip: element.querySelector(".js-thumb-strip"),
    category: element.querySelector(".js-category"),
    title: element.querySelector(".js-title"),
    price: element.querySelector(".js-price"),
    stock: element.querySelector(".js-stock"),
    description: element.querySelector(".js-description"),
    specs: element.querySelector(".js-specs"),
    currentImage: element.querySelector(".window-image.current"),
    incomingImage: element.querySelector(".window-image.incoming"),
    resizeHandle: element.querySelector(".js-resize"),
    orderToggleBtn: element.querySelector(".js-order-toggle"),
    orderContacts: element.querySelector(".js-order-contacts")
  };
}

function setOrderContactsExpanded(win, expanded) {
  if (!win?.refs.orderToggleBtn || !win?.refs.orderContacts) {
    return;
  }

  win.isOrderContactsOpen = expanded;
  win.refs.orderToggleBtn.setAttribute("aria-expanded", expanded ? "true" : "false");
  win.refs.orderToggleBtn.classList.toggle("is-open", expanded);
  win.refs.orderContacts.classList.toggle("is-open", expanded);
  win.refs.orderToggleBtn.closest(".details-panel")?.classList.toggle("order-open", expanded);
}

function renderOrderContacts(win, lot) {
  if (!win?.refs.orderContacts) {
    return;
  }

  win.refs.orderContacts.innerHTML = "";
  const fragment = document.createDocumentFragment();

  ORDER_CONTACTS.forEach((contact, index) => {
    const link = document.createElement("a");
    link.className = "order-contact";
    link.href = contact.href(lot);
    link.setAttribute("aria-label", `${contact.label}: ${contact.hint}`);
    link.style.setProperty("--contact-delay", `${index * 52}ms`);

    if (contact.external) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }

    link.innerHTML = `
      <span class="order-contact-icon">${contact.icon}</span>
      <span class="order-contact-copy">
        <span class="order-contact-title">${contact.label}</span>
        <span class="order-contact-hint">${contact.hint}</span>
      </span>
    `;

    fragment.appendChild(link);
  });

  win.refs.orderContacts.appendChild(fragment);
}

function syncBackdropState() {
  const hasVisibleWindows = Array.from(windowManager.windows.values()).some((win) => !win.isMinimized);
  const shouldBlur = isMobileLayout() && hasVisibleWindows;
  refs.desktopLayer.classList.toggle("is-blurred", shouldBlur);
}

function syncTrayVisibility() {
  const hasMinimized = Array.from(windowManager.windows.values()).some((win) => win.isMinimized);
  const dockVisible = hasMinimized || state.pagingVisible;
  refs.trayBar.classList.toggle("has-minimized", hasMinimized);
  refs.trayBar.classList.toggle("is-visible", dockVisible);
  document.body.classList.toggle("has-dock", dockVisible);
}

function getMinimizedWindowsCount() {
  return Array.from(windowManager.windows.values()).filter((win) => win.isMinimized || win.isMinimizing).length;
}

function showMinimizeLimitHint(anchorButton) {
  if (!anchorButton) {
    return;
  }

  if (!minimizeHintElement) {
    minimizeHintElement = document.createElement("div");
    minimizeHintElement.className = "minimize-limit-hint";
    minimizeHintElement.setAttribute("role", "status");
    minimizeHintElement.setAttribute("aria-live", "polite");
    minimizeHintElement.textContent = `Лимит свернутых окон: ${MAX_MINIMIZED_WINDOWS}`;
    document.body.appendChild(minimizeHintElement);
  }

  const rect = anchorButton.getBoundingClientRect();
  const width = 220;
  const left = clamp(rect.left + rect.width / 2 - width / 2, 8, window.innerWidth - width - 8);
  let top = rect.bottom + 10;
  if (top > window.innerHeight - 70) {
    top = rect.top - 44;
  }

  minimizeHintElement.style.left = `${Math.round(left)}px`;
  minimizeHintElement.style.top = `${Math.round(top)}px`;
  minimizeHintElement.classList.remove("is-visible");
  void minimizeHintElement.offsetWidth;
  minimizeHintElement.classList.add("is-visible");

  anchorButton.classList.remove("limit-hit");
  void anchorButton.offsetWidth;
  anchorButton.classList.add("limit-hit");

  if (minimizeHintTimer) {
    clearTimeout(minimizeHintTimer);
  }
  minimizeHintTimer = setTimeout(() => {
    minimizeHintElement?.classList.remove("is-visible");
    anchorButton.classList.remove("limit-hit");
  }, 1800);
}

function findWindowByLotId(lotId) {
  return Array.from(windowManager.windows.values()).find((win) => win.lotId === lotId) ?? null;
}

function pulseWindow(windowId) {
  const win = windowManager.windows.get(windowId);
  if (!win || win.isMinimized) {
    return;
  }

  win.element.classList.remove("attention");
  void win.element.offsetWidth;
  win.element.classList.add("attention");
  setTimeout(() => {
    win.element.classList.remove("attention");
  }, 320);
}

function focusWindow(windowId, bumpZ = true) {
  const win = windowManager.windows.get(windowId);
  if (!win || win.isMinimized) {
    return;
  }

  if (bumpZ) {
    windowManager.zCounter += 1;
    win.element.style.zIndex = String(windowManager.zCounter);
  }

  windowManager.activeWindowId = windowId;

  windowManager.windows.forEach((item) => {
    item.element.classList.toggle("is-focused", item.id === windowId);
  });
}

function focusTopWindow() {
  const visible = Array.from(windowManager.windows.values()).filter((win) => !win.isMinimized);
  if (!visible.length) {
    windowManager.activeWindowId = null;
    return;
  }

  const top = visible.sort((a, b) => Number(a.element.style.zIndex || 0) - Number(b.element.style.zIndex || 0)).at(-1);
  if (top) {
    focusWindow(top.id, false);
  }
}

function syncTray() {
  refs.trayItems.querySelectorAll(".tray-item").forEach((item) => item.remove());

  const minimizedWindows = Array.from(windowManager.windows.values()).filter((win) => win.isMinimized);
  refs.trayEmpty.hidden = minimizedWindows.length > 0;

  minimizedWindows.forEach((win) => {
    const lot = getLotById(win.lotId);
    if (!lot) {
      return;
    }

    const trayItem = refs.trayItemTemplate.content.firstElementChild.cloneNode(true);
    const thumb = trayItem.querySelector(".tray-thumb");
    const label = trayItem.querySelector(".tray-label");

    thumb.src = lot.images[0];
    thumb.alt = lot.name;
    label.textContent = lot.name;

    trayItem.addEventListener("click", () => {
      restoreWindow(win.id);
    });

    refs.trayItems.appendChild(trayItem);
  });

  syncTrayVisibility();
}

function placeWindowDefault(win) {
  const width = Math.min(980, window.innerWidth - (isMobileLayout() ? 8 : 30));
  const height = Math.min(740, window.innerHeight - getDesktopReserveHeight() - (isMobileLayout() ? 8 : 18));
  const offset = (windowManager.windows.size % 6) * 26;

  let left = Math.round((window.innerWidth - width) / 2) + offset - 60;
  let top = (isMobileLayout() ? 12 : 56) + offset;

  left = clamp(left, isMobileLayout() ? 4 : 8, window.innerWidth - width - (isMobileLayout() ? 4 : 8));
  top = clamp(top, isMobileLayout() ? 8 : 8, window.innerHeight - height - getDesktopReserveHeight());

  win.element.style.width = `${Math.round(width)}px`;
  win.element.style.height = `${Math.round(height)}px`;
  win.element.style.left = `${Math.round(left)}px`;
  win.element.style.top = `${Math.round(top)}px`;
}

function setWindowLot(win, lotId, resetImage = true) {
  const lot = getLotById(lotId);
  if (!lot) {
    return;
  }

  const statusMeta = getLotStatusMeta(lot);
  win.lotId = lot.id;
  if (resetImage) {
    win.imageIndex = 0;
  }

  win.refs.titleBar.textContent = `Лот: ${lot.name}`;
  win.refs.category.textContent = CATEGORY_LABELS[lot.category] ?? lot.category;
  win.refs.title.textContent = lot.name;
  win.refs.price.textContent = formatPrice(lot.price);
  if (win.refs.stock) {
    if (statusMeta) {
      win.refs.stock.hidden = false;
      win.refs.stock.className = `modal-stock js-stock ${statusMeta.className}`;
      win.refs.stock.textContent = statusMeta.label;
      win.refs.stock.setAttribute("aria-label", statusMeta.ariaLabel);
    } else {
      win.refs.stock.hidden = true;
      win.refs.stock.className = "modal-stock js-stock";
      win.refs.stock.textContent = "";
      win.refs.stock.removeAttribute("aria-label");
    }
  }
  win.refs.description.textContent = lot.description;
  win.refs.specs.innerHTML = lot.specs.map((spec) => `<li>${spec}</li>`).join("");
  win.element.classList.toggle("is-sold", lot.sold);
  applyLotGlitchBackground(win.element, lot);
  renderOrderContacts(win, lot);
  setOrderContactsExpanded(win, false);

  renderWindowThumbnails(win, lot);
  setWindowImage(win, win.imageIndex, 1, false);
}

function renderWindowThumbnails(win, lot) {
  win.refs.thumbStrip.innerHTML = "";

  lot.images.forEach((imageUrl, index) => {
    const button = document.createElement("button");
    button.className = "thumb";
    button.type = "button";
    button.setAttribute("aria-label", `Открыть фото ${index + 1}`);
    button.innerHTML = `<img src="${imageUrl}" alt="${lot.name} миниатюра ${index + 1}" loading="lazy">`;
    button.addEventListener("click", () => {
      const direction = index >= win.imageIndex ? 1 : -1;
      setWindowImage(win, index, direction, true);
    });
    win.refs.thumbStrip.appendChild(button);
  });
}

function syncThumbSelection(win) {
  Array.from(win.refs.thumbStrip.children).forEach((thumb, index) => {
    thumb.classList.toggle("active", index === win.imageIndex);
  });
}

function syncWindowGalleryLayout(win) {
  if (!win || !win.element) {
    return;
  }

  if (isMobileLayout()) {
    win.element.classList.remove("compact-gallery");
    return;
  }

  const width = win.element.offsetWidth || win.element.getBoundingClientRect().width;
  win.element.classList.toggle("compact-gallery", width <= COMPACT_GALLERY_MAX_WIDTH);
}

function setWindowImage(win, requestedIndex, direction = 1, animate = true) {
  const lot = getLotById(win.lotId);
  if (!lot) {
    return;
  }

  const max = lot.images.length;
  const targetIndex = (requestedIndex + max) % max;
  if (targetIndex === win.imageIndex && win.refs.currentImage.getAttribute("src")) {
    return;
  }
  const targetImage = lot.images[targetIndex];
  const targetAlt = `${lot.name} - фото ${targetIndex + 1}`;
  const transitionToken = (win.imageTransitionToken ?? 0) + 1;
  win.imageTransitionToken = transitionToken;

  if (!animate || !win.refs.currentImage.getAttribute("src")) {
    win.refs.currentImage.src = targetImage;
    win.refs.currentImage.alt = targetAlt;
    win.refs.currentImage.className = "window-image current";
    win.refs.incomingImage.className = "window-image incoming";
  } else {
    const inClass = direction >= 0 ? "anim-in-right" : "anim-in-left";
    const outClass = direction >= 0 ? "anim-out-left" : "anim-out-right";
    const expectedAnimName = direction >= 0 ? "imageInRight" : "imageInLeft";

    win.refs.incomingImage.src = targetImage;
    win.refs.incomingImage.alt = targetAlt;
    win.refs.incomingImage.className = "window-image incoming";
    win.refs.currentImage.className = "window-image current";

    // Force a clean animation restart for rapid sequential clicks.
    void win.refs.incomingImage.offsetWidth;

    win.refs.incomingImage.classList.add(inClass);
    win.refs.currentImage.classList.add(outClass);

    win.refs.incomingImage.addEventListener(
      "animationend",
      (event) => {
        if (event.animationName !== expectedAnimName) {
          return;
        }
        if (win.imageTransitionToken !== transitionToken) {
          return;
        }
        win.refs.currentImage.src = targetImage;
        win.refs.currentImage.alt = targetAlt;
        win.refs.currentImage.className = "window-image current";
        win.refs.incomingImage.className = "window-image incoming";
      },
      { once: true }
    );
  }

  win.imageIndex = targetIndex;
  win.refs.imageCounter.textContent = `${targetIndex + 1} / ${max}`;
  syncThumbSelection(win);
}

function applyMaximize(win) {
  const margin = isMobileLayout() ? 4 : 6;
  const width = window.innerWidth - margin * 2;
  const height = window.innerHeight - getDesktopReserveHeight() - margin;

  win.element.style.left = `${margin}px`;
  win.element.style.top = `${margin}px`;
  win.element.style.width = `${Math.round(width)}px`;
  win.element.style.height = `${Math.round(height)}px`;
  syncWindowGalleryLayout(win);
}

function animateWindowBoundsChange(win, fromRect, mode = "maximize") {
  if (!win || !win.element || !fromRect || isMobileLayout() || prefersReducedMotion()) {
    return;
  }
  if (typeof win.element.animate !== "function") {
    return;
  }

  const toRect = win.element.getBoundingClientRect();
  const deltaX = fromRect.left - toRect.left;
  const deltaY = fromRect.top - toRect.top;
  const scaleX = fromRect.width / Math.max(1, toRect.width);
  const scaleY = fromRect.height / Math.max(1, toRect.height);
  const hasMeaningfulDelta =
    Math.abs(deltaX) > 0.5 ||
    Math.abs(deltaY) > 0.5 ||
    Math.abs(scaleX - 1) > 0.01 ||
    Math.abs(scaleY - 1) > 0.01;

  if (!hasMeaningfulDelta) {
    return;
  }

  if (win.maximizeAnimation) {
    win.maximizeAnimation.cancel();
    win.maximizeAnimation = null;
  }

  const isExpanding = mode === "maximize";
  const easing = isExpanding
    ? "cubic-bezier(0.16, 0.84, 0.23, 1)"
    : "cubic-bezier(0.22, 0.78, 0.34, 1)";
  const duration = isExpanding
    ? MAXIMIZE_ANIMATION_DURATION
    : Math.round(MAXIMIZE_ANIMATION_DURATION * 0.82);
  win.element.classList.add("maximize-animating");

  const animation = win.element.animate(
    [
      {
        transformOrigin: "top left",
        transform: `translate3d(${deltaX}px, ${deltaY}px, 0) scale(${scaleX}, ${scaleY})`,
        opacity: 0.96
      },
      {
        transformOrigin: "top left",
        transform: "translate3d(0, 0, 0) scale(1, 1)",
        opacity: 1
      }
    ],
    {
      duration,
      easing
    }
  );

  win.maximizeAnimation = animation;
  const clearAnimationState = () => {
    if (win.maximizeAnimation !== animation) {
      return;
    }
    win.maximizeAnimation = null;
    win.element.classList.remove("maximize-animating");
  };

  animation.addEventListener("finish", clearAnimationState, { once: true });
  animation.addEventListener("cancel", clearAnimationState, { once: true });
}

function removeWindowWithStateSync(windowId, win) {
  win.element.remove();
  windowManager.windows.delete(windowId);
  syncTray();
  syncBackdropState();
  focusTopWindow();
}

function animateWindowClose(win, onComplete) {
  if (!win || !win.element) {
    onComplete();
    return;
  }

  if (prefersReducedMotion() || typeof win.element.animate !== "function") {
    onComplete();
    return;
  }

  if (win.closeAnimation) {
    win.closeAnimation.cancel();
    win.closeAnimation = null;
  }

  win.element.classList.add("closing-animating");
  const animation = win.element.animate(
    [
      {
        transform: "translate3d(0, 0, 0) scale(1)",
        opacity: 1
      },
      {
        transform: "translate3d(0, 12px, 0) scale(0.96)",
        opacity: 0
      }
    ],
    {
      duration: CLOSE_ANIMATION_DURATION,
      easing: "cubic-bezier(0.22, 0.67, 0.32, 1)"
    }
  );

  win.closeAnimation = animation;
  const clearCloseAnimation = () => {
    if (win.closeAnimation !== animation) {
      return;
    }
    win.closeAnimation = null;
    win.element.classList.remove("closing-animating");
  };

  animation.addEventListener(
    "finish",
    () => {
      clearCloseAnimation();
      onComplete();
    },
    { once: true }
  );
  animation.addEventListener("cancel", clearCloseAnimation, { once: true });
}

function toggleMaximize(windowId) {
  const win = windowManager.windows.get(windowId);
  if (!win || win.isMinimized) {
    return;
  }
  const fromRect = !isMobileLayout() ? win.element.getBoundingClientRect() : null;

  if (!win.isMaximized) {
    const rect = win.element.getBoundingClientRect();
    win.restoreRect = {
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height
    };
    win.isMaximized = true;
    win.element.classList.add("maximized");
    applyMaximize(win);
  } else {
    win.isMaximized = false;
    win.element.classList.remove("maximized");
    if (win.restoreRect) {
      win.element.style.left = `${Math.round(win.restoreRect.left)}px`;
      win.element.style.top = `${Math.round(win.restoreRect.top)}px`;
      win.element.style.width = `${Math.round(win.restoreRect.width)}px`;
      win.element.style.height = `${Math.round(win.restoreRect.height)}px`;
    }
  }

  syncWindowGalleryLayout(win);
  if (fromRect) {
    animateWindowBoundsChange(win, fromRect, win.isMaximized ? "maximize" : "restore");
  }
  focusWindow(windowId);
}

function closeWindow(windowId) {
  const win = windowManager.windows.get(windowId);
  if (!win) {
    return;
  }
  if (win.maximizeAnimation) {
    win.maximizeAnimation.cancel();
    win.maximizeAnimation = null;
  }
  win.element.classList.remove("maximize-animating");
  if (win.closeAnimation) {
    win.closeAnimation.cancel();
    win.closeAnimation = null;
  }
  win.element.classList.remove("closing-animating");

  if (win.isMinimized) {
    removeWindowWithStateSync(windowId, win);
    return;
  }

  win.element.style.transition = "";
  win.element.style.transform = "";
  win.element.style.opacity = "";
  animateWindowClose(win, () => {
    removeWindowWithStateSync(windowId, win);
  });
}

function minimizeWindow(windowId) {
  const win = windowManager.windows.get(windowId);
  if (!win || win.isMinimized) {
    return;
  }

  if (getMinimizedWindowsCount() >= MAX_MINIMIZED_WINDOWS) {
    showMinimizeLimitHint(win.refs.minimizeBtn);
    return;
  }

  if (win.isMaximized) {
    toggleMaximize(windowId);
  }

  const trayRect = refs.trayBar.getBoundingClientRect();
  const rect = win.element.getBoundingClientRect();
  const targetX = trayRect.left + 24;
  const targetY = trayRect.top + 20;
  const dx = targetX - rect.left;
  const dy = targetY - rect.top;
  win.isMinimizing = true;

  win.element.style.transition = "transform 260ms cubic-bezier(0.19, 1, 0.22, 1), opacity 220ms ease";
  win.element.style.transform = `translate(${dx}px, ${dy}px) scale(0.24)`;
  win.element.style.opacity = "0";

  win.element.addEventListener(
    "transitionend",
    () => {
      win.isMinimizing = false;
      win.isMinimized = true;
      win.element.classList.add("is-minimized");
      win.element.style.transition = "";
      win.element.style.transform = "";
      win.element.style.opacity = "";
      syncTray();
      syncBackdropState();
      focusTopWindow();
    },
    { once: true }
  );
}

function restoreWindow(windowId) {
  const win = windowManager.windows.get(windowId);
  if (!win || !win.isMinimized) {
    return;
  }

  const trayRect = refs.trayBar.getBoundingClientRect();
  win.isMinimized = false;
  win.element.classList.remove("is-minimized");
  syncWindowGalleryLayout(win);
  syncTray();
  syncBackdropState();

  const rect = win.element.getBoundingClientRect();
  const fromX = trayRect.left + 24 - rect.left;
  const fromY = trayRect.top + 20 - rect.top;

  win.element.style.transition = "none";
  win.element.style.transform = `translate(${fromX}px, ${fromY}px) scale(0.24)`;
  win.element.style.opacity = "0";

  requestAnimationFrame(() => {
    win.element.style.transition = "transform 300ms cubic-bezier(0.19, 1, 0.22, 1), opacity 260ms ease";
    win.element.style.transform = "translate(0, 0) scale(1)";
    win.element.style.opacity = "1";
  });

  win.element.addEventListener(
    "transitionend",
    () => {
      win.element.style.transition = "";
      win.element.style.transform = "";
      win.element.style.opacity = "";
    },
    { once: true }
  );

  focusWindow(windowId);
}

function startInteraction(mode, win, event) {
  if (isMobileLayout() || win.isMinimized) {
    return;
  }

  if (event.button !== 0) {
    return;
  }

  if (mode === "drag" && win.isMaximized) {
    return;
  }

  interaction.mode = mode;
  interaction.windowId = win.id;
  interaction.startX = event.clientX;
  interaction.startY = event.clientY;

  const rect = win.element.getBoundingClientRect();
  interaction.startLeft = rect.left;
  interaction.startTop = rect.top;
  interaction.startWidth = rect.width;
  interaction.startHeight = rect.height;

  event.preventDefault();

  document.addEventListener("pointermove", onPointerMove);
  document.addEventListener("pointerup", onPointerUp, { once: true });
}

function onPointerMove(event) {
  const win = windowManager.windows.get(interaction.windowId);
  if (!win || !interaction.mode) {
    return;
  }

  const dx = event.clientX - interaction.startX;
  const dy = event.clientY - interaction.startY;

  if (interaction.mode === "drag") {
    const maxLeft = window.innerWidth - win.element.offsetWidth - 6;
    const maxTop = window.innerHeight - win.element.offsetHeight - getDesktopReserveHeight();
    const left = clamp(interaction.startLeft + dx, 6, maxLeft);
    const top = clamp(interaction.startTop + dy, 6, maxTop);
    win.element.style.left = `${Math.round(left)}px`;
    win.element.style.top = `${Math.round(top)}px`;
  }

  if (interaction.mode === "resize") {
    const minWidth = 420;
    const minHeight = 360;
    const maxWidth = window.innerWidth - interaction.startLeft - 6;
    const maxHeight = window.innerHeight - interaction.startTop - getDesktopReserveHeight();
    const width = clamp(interaction.startWidth + dx, minWidth, maxWidth);
    const height = clamp(interaction.startHeight + dy, minHeight, maxHeight);
    win.element.style.width = `${Math.round(width)}px`;
    win.element.style.height = `${Math.round(height)}px`;
    syncWindowGalleryLayout(win);
  }
}

function onPointerUp() {
  interaction.mode = null;
  interaction.windowId = null;
  document.removeEventListener("pointermove", onPointerMove);
}

function bindWindowEvents(win) {
  win.element.addEventListener("pointerdown", () => {
    focusWindow(win.id);
  });

  win.refs.closeBtn.addEventListener("click", () => closeWindow(win.id));
  if (win.refs.minimizeBtn) {
    win.refs.minimizeBtn.addEventListener("click", () => minimizeWindow(win.id));
  }
  if (win.refs.maximizeBtn) {
    win.refs.maximizeBtn.addEventListener("click", () => toggleMaximize(win.id));
  }
  if (win.refs.orderToggleBtn) {
    win.refs.orderToggleBtn.addEventListener("click", () => {
      setOrderContactsExpanded(win, !win.isOrderContactsOpen);
    });
  }

  win.refs.prevImageBtn.addEventListener("click", () => setWindowImage(win, win.imageIndex - 1, -1, true));
  win.refs.nextImageBtn.addEventListener("click", () => setWindowImage(win, win.imageIndex + 1, 1, true));
  if (win.refs.headPrevImageBtn) {
    win.refs.headPrevImageBtn.addEventListener("click", () => setWindowImage(win, win.imageIndex - 1, -1, true));
  }
  if (win.refs.headNextImageBtn) {
    win.refs.headNextImageBtn.addEventListener("click", () => setWindowImage(win, win.imageIndex + 1, 1, true));
  }

  win.refs.dragHandle.addEventListener("pointerdown", (event) => {
    const target = event.target;
    if (target instanceof HTMLElement && target.closest("button")) {
      return;
    }
    startInteraction("drag", win, event);
  });

  win.refs.resizeHandle.addEventListener("pointerdown", (event) => {
    if (win.isMaximized) {
      return;
    }
    startInteraction("resize", win, event);
  });
}

function removeWindowImmediate(windowId) {
  const win = windowManager.windows.get(windowId);
  if (!win) {
    return;
  }
  if (win.maximizeAnimation) {
    win.maximizeAnimation.cancel();
    win.maximizeAnimation = null;
  }
  if (win.closeAnimation) {
    win.closeAnimation.cancel();
    win.closeAnimation = null;
  }
  win.element.classList.remove("maximize-animating");
  win.element.classList.remove("closing-animating");
  win.element.remove();
  windowManager.windows.delete(windowId);
}

function normalizeMobileWindows() {
  if (!isMobileLayout()) {
    return;
  }

  const windows = Array.from(windowManager.windows.values());
  if (!windows.length) {
    return;
  }

  const keepId = windowManager.activeWindowId ?? windows[0].id;
  windows.forEach((win) => {
    if (win.id !== keepId) {
      removeWindowImmediate(win.id);
      return;
    }

    if (win.isMinimized) {
      win.isMinimized = false;
      win.element.classList.remove("is-minimized");
    }
    if (win.isMaximized) {
      win.isMaximized = false;
      win.element.classList.remove("maximized");
    }
  });

  syncTray();
  syncBackdropState();
  focusTopWindow();
}

function openLotWindow(lotId) {
  const lot = getLotById(lotId);
  if (!lot) {
    return;
  }

  const existingLotWindow = findWindowByLotId(lotId);
  if (existingLotWindow) {
    if (existingLotWindow.isMinimized) {
      restoreWindow(existingLotWindow.id);
    }
    focusWindow(existingLotWindow.id);
    pulseWindow(existingLotWindow.id);
    return;
  }

  if (isMobileLayout()) {
    const existing = Array.from(windowManager.windows.values())[0];
    if (existing) {
      setWindowLot(existing, lotId, true);
      if (existing.isMinimized) {
        existing.isMinimized = false;
        existing.element.classList.remove("is-minimized");
      }
      focusWindow(existing.id);
      normalizeMobileWindows();
      syncTray();
      syncBackdropState();
      return;
    }
  }

  const element = refs.lotWindowTemplate.content.firstElementChild.cloneNode(true);
  const id = `lot-window-${++windowManager.sequence}`;
  const win = {
    id,
    lotId,
    imageIndex: 0,
    imageTransitionToken: 0,
    isMinimized: false,
    isMinimizing: false,
    isMaximized: false,
    isOrderContactsOpen: false,
    maximizeAnimation: null,
    closeAnimation: null,
    restoreRect: null,
    element,
    refs: createWindowRefs(element)
  };

  placeWindowDefault(win);
  bindWindowEvents(win);
  setWindowLot(win, lotId, true);

  windowManager.zCounter += 1;
  win.element.style.zIndex = String(windowManager.zCounter);

  refs.windowHost.appendChild(win.element);
  windowManager.windows.set(id, win);
  syncWindowGalleryLayout(win);
  if (isMobileLayout()) {
    normalizeMobileWindows();
  }
  syncBackdropState();

  requestAnimationFrame(() => {
    win.element.classList.add("is-visible");
  });

  focusWindow(id, false);
}

function onGlobalKeyDown(event) {
  const target = event.target;
  if (target instanceof HTMLElement && ["INPUT", "TEXTAREA", "SELECT", "BUTTON"].includes(target.tagName)) {
    return;
  }

  const activeId = windowManager.activeWindowId;
  if (!activeId) {
    return;
  }

  const win = windowManager.windows.get(activeId);
  if (!win || win.isMinimized) {
    return;
  }

  if (event.key === "Escape") {
    closeWindow(activeId);
    return;
  }

  if (event.key === "ArrowRight") {
    event.preventDefault();
    setWindowImage(win, win.imageIndex + 1, 1, true);
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    setWindowImage(win, win.imageIndex - 1, -1, true);
  }
}

function onWindowResize() {
  normalizeMobileWindows();
  syncBackdropState();
  positionSortDropdown();
  const prevPageSize = state.pageSize;
  ensurePageSize();
  if (prevPageSize !== state.pageSize) {
    renderLots();
  }
  windowManager.windows.forEach((win) => {
    if (win.isMinimized) {
      return;
    }

    if (win.isMaximized) {
      applyMaximize(win);
      return;
    }

    const rect = win.element.getBoundingClientRect();
    const width = Math.min(rect.width, window.innerWidth - 10);
    const height = Math.min(rect.height, window.innerHeight - getDesktopReserveHeight() - 8);
    const left = clamp(rect.left, 4, window.innerWidth - width - 4);
    const top = clamp(rect.top, 4, window.innerHeight - height - getDesktopReserveHeight());

    win.element.style.left = `${Math.round(left)}px`;
    win.element.style.top = `${Math.round(top)}px`;
    win.element.style.width = `${Math.round(width)}px`;
    win.element.style.height = `${Math.round(height)}px`;
    syncWindowGalleryLayout(win);
  });
}

function setupActions() {
  refs.searchInput.addEventListener("input", (event) => {
    state.query = event.target.value;
    state.page = 1;
    renderLots({ animatePage: true });
  });

  applySortSelection(state.sort, false);

  if (refs.sortSelect && refs.sortSelectTrigger && refs.sortSelectMenu) {
    if (refs.sortSelectMenu.parentElement !== document.body) {
      document.body.appendChild(refs.sortSelectMenu);
    }

    refs.sortSelectTrigger.addEventListener("click", () => {
      const isOpen = refs.sortSelect.classList.contains("open");
      if (isOpen) {
        closeSortDropdown();
      } else {
        openSortDropdown();
      }
    });

    refs.sortSelectMenu.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) {
        return;
      }
      const option = target.closest(".glass-select-option");
      if (!(option instanceof HTMLElement)) {
        return;
      }
      applySortSelection(option.dataset.value ?? state.sort, true);
      closeSortDropdown();
      refs.sortSelectTrigger.focus();
    });

    refs.sortSelectTrigger.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        openSortDropdown();
        shiftSortSelection(1);
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        openSortDropdown();
        shiftSortSelection(-1);
      } else if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        const isOpen = refs.sortSelect.classList.contains("open");
        if (isOpen) {
          closeSortDropdown();
        } else {
          openSortDropdown();
        }
      } else if (event.key === "Escape") {
        closeSortDropdown();
      }
    });

    document.addEventListener("pointerdown", (event) => {
      const target = event.target;
      if (!(target instanceof Node)) {
        return;
      }
      if (!refs.sortSelect.contains(target) && !refs.sortSelectMenu.contains(target)) {
        closeSortDropdown();
      }
    });

    window.addEventListener(
      "scroll",
      () => {
        positionSortDropdown();
      },
      true
    );
  }

  if (refs.availableToggle) {
    syncAvailabilityToggle();
    refs.availableToggle.addEventListener("click", () => {
      state.onlyAvailable = !state.onlyAvailable;
      syncAvailabilityToggle();
      state.page = 1;
      renderLots({ animatePage: true });
    });
  }

  refs.pagePrevBtn.addEventListener("click", () => {
    if (state.page <= 1) {
      return;
    }
    state.page -= 1;
    renderLots({ animatePage: true });
  });

  refs.pageNextBtn.addEventListener("click", () => {
    const totalPages = getPageCount(state.visibleLots.length);
    if (state.page >= totalPages) {
      return;
    }
    state.page += 1;
    renderLots({ animatePage: true });
  });

  refs.openFeaturedBtn.addEventListener("click", () => {
    const featured = LOTS.find((lot) => lot.featured) ?? LOTS[0];
    if (featured) {
      openLotWindow(featured.id);
    }
  });

  document.querySelectorAll("[data-scroll-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.scrollTarget;
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  document.addEventListener("keydown", onGlobalKeyDown);
  refs.desktopBackdrop.addEventListener("click", () => {
    if (!isMobileLayout()) {
      return;
    }
    const activeId = windowManager.activeWindowId;
    if (activeId) {
      closeWindow(activeId);
    }
  });
  window.addEventListener("resize", onWindowResize);
}

function init() {
  makeCategoryChips();
  renderLots();
  updateClock();
  setupActions();
  setInterval(updateClock, 30000);
}

init();
