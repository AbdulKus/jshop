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
  }
];

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

const refs = {
  lotGrid: document.getElementById("lotGrid"),
  template: document.getElementById("lotCardTemplate"),
  searchInput: document.getElementById("searchInput"),
  sortSelect: document.getElementById("sortSelect"),
  categoryChips: document.getElementById("categoryChips"),
  emptyState: document.getElementById("emptyState"),
  lotsInCatalog: document.getElementById("lotsInCatalog"),
  clockNow: document.getElementById("clockNow"),
  openFeaturedBtn: document.getElementById("openFeaturedBtn"),
  modal: document.getElementById("lotModal"),
  modalWindow: document.querySelector(".modal-window"),
  dragHandle: document.getElementById("dragHandle"),
  closeModalBtn: document.getElementById("closeModalBtn"),
  prevLotBtn: document.getElementById("prevLotBtn"),
  nextLotBtn: document.getElementById("nextLotBtn"),
  prevImageBtn: document.getElementById("prevImageBtn"),
  nextImageBtn: document.getElementById("nextImageBtn"),
  modalWindowTitle: document.getElementById("modalWindowTitle"),
  modalCategory: document.getElementById("modalCategory"),
  modalTitle: document.getElementById("modalTitle"),
  modalPrice: document.getElementById("modalPrice"),
  modalDescription: document.getElementById("modalDescription"),
  modalSpecs: document.getElementById("modalSpecs"),
  modalImage: document.getElementById("modalImage"),
  imageCounter: document.getElementById("imageCounter"),
  thumbStrip: document.getElementById("thumbStrip")
};

const state = {
  query: "",
  category: "all",
  sort: "featured",
  visibleLots: [...LOTS],
  activeLotId: null,
  activeImageIndex: 0
};

const dragState = {
  active: false,
  offsetX: 0,
  offsetY: 0
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
      makeCategoryChips();
      renderLots();
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
    return byCategory && byQuery;
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

function renderLots() {
  state.visibleLots = getFilteredLots();
  refs.lotsInCatalog.textContent = String(state.visibleLots.length);
  refs.lotGrid.innerHTML = "";

  if (!state.visibleLots.length) {
    refs.emptyState.hidden = false;
    return;
  }

  refs.emptyState.hidden = true;
  const fragment = document.createDocumentFragment();

  state.visibleLots.forEach((lot, index) => {
    const card = refs.template.content.firstElementChild.cloneNode(true);
    const title = card.querySelector(".lot-window-title");
    const image = card.querySelector(".lot-image");
    const category = card.querySelector(".lot-category");
    const name = card.querySelector(".lot-name");
    const price = card.querySelector(".lot-price");
    const action = card.querySelector(".lot-click-zone");

    title.textContent = CATEGORY_LABELS[lot.category] ?? lot.category;
    category.textContent = CATEGORY_LABELS[lot.category] ?? lot.category;
    name.textContent = lot.name;
    price.textContent = formatPrice(lot.price);
    image.src = lot.images[0];
    image.alt = lot.name;

    action.addEventListener("click", () => openLotModal(lot.id));

    fragment.appendChild(card);
    setTimeout(() => {
      card.classList.add("is-visible");
    }, 30 + index * 50);
  });

  refs.lotGrid.appendChild(fragment);
}

function getCurrentLot() {
  return LOTS.find((lot) => lot.id === state.activeLotId) ?? null;
}

function setImage(index) {
  const lot = getCurrentLot();
  if (!lot) {
    return;
  }

  const max = lot.images.length;
  state.activeImageIndex = (index + max) % max;
  refs.modalImage.classList.remove("image-in");
  refs.modalImage.src = lot.images[state.activeImageIndex];
  refs.modalImage.alt = `${lot.name} - фото ${state.activeImageIndex + 1}`;
  refs.imageCounter.textContent = `${state.activeImageIndex + 1} / ${max}`;

  requestAnimationFrame(() => {
    refs.modalImage.classList.add("image-in");
  });

  Array.from(refs.thumbStrip.children).forEach((thumb, thumbIndex) => {
    thumb.classList.toggle("active", thumbIndex === state.activeImageIndex);
  });
}

function renderThumbnails(lot) {
  refs.thumbStrip.innerHTML = "";
  lot.images.forEach((imageUrl, index) => {
    const button = document.createElement("button");
    button.className = "thumb";
    button.type = "button";
    button.setAttribute("aria-label", `Открыть фото ${index + 1}`);
    button.innerHTML = `<img src="${imageUrl}" alt="${lot.name} миниатюра ${index + 1}" loading="lazy">`;
    button.addEventListener("click", () => setImage(index));
    refs.thumbStrip.appendChild(button);
  });
}

function fillModal(lot) {
  refs.modalWindowTitle.textContent = `Карточка: ${lot.name}`;
  refs.modalCategory.textContent = CATEGORY_LABELS[lot.category] ?? lot.category;
  refs.modalTitle.textContent = lot.name;
  refs.modalPrice.textContent = formatPrice(lot.price);
  refs.modalDescription.textContent = lot.description;
  refs.modalSpecs.innerHTML = lot.specs.map((spec) => `<li>${spec}</li>`).join("");
  renderThumbnails(lot);
  setImage(state.activeImageIndex);
}

function resetModalWindowPosition() {
  refs.modalWindow.style.position = "";
  refs.modalWindow.style.left = "";
  refs.modalWindow.style.top = "";
  refs.modalWindow.style.margin = "";
}

function openLotModal(lotId) {
  const lot = LOTS.find((item) => item.id === lotId);
  if (!lot) {
    return;
  }

  state.activeLotId = lot.id;
  state.activeImageIndex = 0;
  fillModal(lot);
  resetModalWindowPosition();
  refs.modal.classList.add("is-open");
  refs.modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-active");
}

function closeLotModal() {
  refs.modal.classList.remove("is-open");
  refs.modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-active");
}

function cycleImage(direction) {
  setImage(state.activeImageIndex + direction);
}

function cycleLot(direction) {
  const list = state.visibleLots.length ? state.visibleLots : LOTS;
  if (!list.length || !state.activeLotId) {
    return;
  }

  const currentIndex = list.findIndex((lot) => lot.id === state.activeLotId);
  const nextIndex = (currentIndex + direction + list.length) % list.length;
  openLotModal(list[nextIndex].id);
}

function startDrag(event) {
  if (!refs.modal.classList.contains("is-open")) {
    return;
  }
  if (window.matchMedia("(max-width: 760px)").matches) {
    return;
  }
  if (event.button !== 0) {
    return;
  }

  const rect = refs.modalWindow.getBoundingClientRect();
  dragState.active = true;
  dragState.offsetX = event.clientX - rect.left;
  dragState.offsetY = event.clientY - rect.top;

  refs.modalWindow.style.position = "fixed";
  refs.modalWindow.style.margin = "0";
  refs.modalWindow.style.left = `${rect.left}px`;
  refs.modalWindow.style.top = `${rect.top}px`;

  document.addEventListener("pointermove", onDrag);
  document.addEventListener("pointerup", stopDrag, { once: true });
}

function onDrag(event) {
  if (!dragState.active) {
    return;
  }

  const width = refs.modalWindow.offsetWidth;
  const height = refs.modalWindow.offsetHeight;
  const maxLeft = window.innerWidth - width - 8;
  const maxTop = window.innerHeight - height - 8;
  const left = Math.min(Math.max(8, event.clientX - dragState.offsetX), maxLeft);
  const top = Math.min(Math.max(8, event.clientY - dragState.offsetY), maxTop);

  refs.modalWindow.style.left = `${left}px`;
  refs.modalWindow.style.top = `${top}px`;
}

function stopDrag() {
  dragState.active = false;
  document.removeEventListener("pointermove", onDrag);
}

function onGlobalKeyDown(event) {
  const modalIsOpen = refs.modal.classList.contains("is-open");
  if (!modalIsOpen) {
    return;
  }

  if (event.key === "Escape") {
    closeLotModal();
    return;
  }

  if (event.key === "ArrowRight") {
    event.preventDefault();
    cycleImage(1);
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    cycleImage(-1);
  }
}

function setupActions() {
  refs.searchInput.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderLots();
  });

  refs.sortSelect.addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderLots();
  });

  refs.openFeaturedBtn.addEventListener("click", () => {
    const featured = LOTS.find((lot) => lot.featured) ?? LOTS[0];
    if (featured) {
      openLotModal(featured.id);
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

  refs.closeModalBtn.addEventListener("click", closeLotModal);
  refs.prevImageBtn.addEventListener("click", () => cycleImage(-1));
  refs.nextImageBtn.addEventListener("click", () => cycleImage(1));
  refs.prevLotBtn.addEventListener("click", () => cycleLot(-1));
  refs.nextLotBtn.addEventListener("click", () => cycleLot(1));
  refs.dragHandle.addEventListener("pointerdown", startDrag);

  refs.modal.addEventListener("click", (event) => {
    const target = event.target;
    if (target instanceof HTMLElement && target.dataset.closeModal === "true") {
      closeLotModal();
    }
  });

  document.addEventListener("keydown", onGlobalKeyDown);
  window.addEventListener("resize", () => {
    if (window.matchMedia("(max-width: 760px)").matches) {
      resetModalWindowPosition();
    }
  });
}

function init() {
  makeCategoryChips();
  renderLots();
  updateClock();
  setupActions();
  setInterval(updateClock, 30000);
}

init();
