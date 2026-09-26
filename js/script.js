/**
 * ============================================================================
 * OLIVE CAFE — PUTALI LINE, DHARAN-10, NEPAL
 * Production Vanilla JavaScript Application
 * ============================================================================
 */

'use strict';

/* ==========================================================================
   1. BUSINESS CONFIGURATION
   ========================================================================== */

const businessInfo = {
  name: "Olive Cafe",
  tagline: "Firewood Pizza & Italian Dishes",
  bio: "All of you are heartily welcome to our restaurant. You can get the best pizza in the town and many Italian dishes.",
  address: "Putali Line, Dharan-10, Dharan, Nepal",
  phone: "025-572996",
  email: "diwos.tuladhar@gmail.com",
  openingHours: "Opening hours — Please confirm with Olive Cafe",
  instagram: "https://www.instagram.com/olivecafe_dhrn/",
  instagramHandle: "olivecafe_dhrn",
  facebook: "https://www.facebook.com/OliveCafeDharan",
  messenger: "Olive Cafe, Dharan",
  messengerUrl: "https://m.me/OliveCafeDharan",
  whatsapp: "+977 984-5748312",
  whatsappUrl: "https://wa.me/9779845748312",
  maps: "https://maps.google.com/?q=Olive+Cafe+Putali+Line+Dharan+Nepal"
};


/* ==========================================================================
   2. MENU DATA
   ========================================================================== */

const menuItems = [
  {
    name: "Firewood Baked Pizza",
    category: "Pizza",
    description: "Signature firewood oven baked thin-crust pizza topped with melted mozzarella, savory chicken, crisp peppers, and onions.",
    price: "NPR 580",
    image: "/assets/images/firewood-pizza.jpg",
    badge: "Firewood Specialty",
    dietary: "non-veg"
  },
  {
    name: "Classic Italian Margherita Pizza",
    category: "Pizza",
    description: "Wood-fired artisanal crust with rich Italian pomodoro sauce, fresh mozzarella, extra virgin olive oil, and sweet basil leaves.",
    price: "NPR 490",
    image: "/assets/images/pizza.jpg",
    badge: "Italian Classic",
    dietary: "veg"
  },
  {
    name: "Olive Special Herb Stone Pizza",
    category: "Pizza",
    description: "Crispy hearth-baked pizza loaded with black and green olives, diced bell peppers, red onions, mushrooms, and melted cheese.",
    price: "NPR 540",
    image: "/assets/images/firewood-pizza.jpg",
    badge: "House Style",
    dietary: "veg"
  },

  {
    name: "Crispy Nepali C-Momo",
    category: "Momo",
    description: "Golden fried dumplings tossed in a zesty, savory chili glaze garnished with fresh spring onions and crisp shredded cabbage.",
    price: "NPR 280",
    image: "/assets/images/chili-momo.jpg",
    badge: "House Special",
    dietary: "non-veg"
  },
  {
    name: "Tandoori Roasted Momo",
    category: "Momo",
    description: "Succulent momos marinated in aromatic spiced yoghurt, flame-roasted to smoky perfection, served with creamy dip and lime wedges.",
    price: "NPR 320",
    image: "/assets/images/momo.jpg",
    badge: "Smoky & Crisp",
    dietary: "non-veg"
  },
  {
    name: "Steamed Classic Momo",
    category: "Momo",
    description: "Traditional delicate steamed dumplings packed with seasoned minced filling, served with homemade sesame-tomato achaar.",
    price: "NPR 220",
    image: "/assets/images/momo.jpg",
    badge: "Popular",
    dietary: "non-veg"
  },

  {
    name: "Whole Grilled Fish Platter",
    category: "Specialties",
    description: "Fresh whole fish marinated in fragrant Himalayan herbs and chili, chargrilled and served on a fish platter with cucumber and salad.",
    price: "NPR 750",
    image: "/assets/images/grilled-fish.jpg",
    badge: "Signature Seafood",
    dietary: "non-veg"
  },
  {
    name: "Creamy Fettuccine Alfredo Pasta",
    category: "Italian",
    description: "Al dente pasta ribbons coated in a silky parmesan garlic cream sauce, seasoned with fresh black pepper and herbs.",
    price: "NPR 420",
    image: "/assets/images/pasta.jpg",
    badge: "Italian Favorite",
    dietary: "veg"
  },
  {
    name: "Penne All'Arrabbiata",
    category: "Italian",
    description: "Penne pasta tossed in slow-simmered garlic and chili-infused Italian tomato sauce, finished with extra virgin olive oil.",
    price: "NPR 380",
    image: "/assets/images/pasta.jpg",
    badge: "Spicy",
    dietary: "veg"
  },

  {
    name: "Crispy Chicken Lollipop",
    category: "Fast Food",
    description: "Crisp seasoned chicken drumettes with wrapped bone foil, tossed with peppers and scallions, served with spicy dipping sauce.",
    price: "NPR 350",
    image: "/assets/images/chili-momo.jpg",
    badge: "Crispy",
    dietary: "non-veg"
  },
  {
    name: "Grilled Chicken Satay Skewers",
    category: "Fast Food",
    description: "Tender skewered marinated chicken fillets flame-grilled to perfection, served with fresh vegetable salad garnish.",
    price: "NPR 380",
    image: "/assets/images/chili-momo.jpg",
    badge: "Grilled",
    dietary: "non-veg"
  },
  {
    name: "Olive Gourmet Burger",
    category: "Burgers",
    description: "Juicy seared patty topped with melted cheddar, crisp lettuce, tomato slices, pickles, and house sauce on a toasted sesame bun.",
    price: "NPR 340",
    image: "/assets/images/burger.jpg",
    badge: "Popular",
    dietary: "non-veg"
  },
  {
    name: "Crispy Calamari & Rings",
    category: "Fast Food",
    description: "Golden battered crispy rings served with house-made tartar dip, freshly ground black pepper, and herbs.",
    price: "NPR 290",
    image: "/assets/images/burger.jpg",
    badge: "Golden Crunch",
    dietary: "non-veg"
  },
  {
    name: "Golden French Fries",
    category: "Fast Food",
    description: "Crispy golden cut potatoes lightly salted and served piping hot with ketchup and creamy mayonnaise.",
    price: "NPR 200",
    image: "/assets/images/burger.jpg",
    badge: "Snack",
    dietary: "veg"
  },

  {
    name: "Handcrafted Latte Art Coffee",
    category: "Beverages",
    description: "Freshly pulled rich espresso combined with silky microfoam milk, poured with intricate tulip latte art in a ceramic cup.",
    price: "NPR 180",
    image: "/assets/images/latte-coffee.jpg",
    badge: "Fresh Brew",
    dietary: "veg"
  },
  {
    name: "Tropical Citrus Refresher",
    category: "Beverages",
    description: "Chilled tropical cooler garnished with fresh orange slices, maraschino cherry, and fresh citrus notes.",
    price: "NPR 220",
    image: "/assets/images/cold-drinks.jpg",
    badge: "Chilled",
    dietary: "veg"
  },
  {
    name: "Artisan Chocolate Brownie",
    category: "Desserts",
    description: "Decadent warm chocolate brownie with rich cocoa, served with chocolate drizzle.",
    price: "NPR 240",
    image: "/assets/images/desserts.jpg",
    badge: "Sweet Treat",
    dietary: "veg"
  }
];


/* ==========================================================================
   3. GALLERY DATA
   ========================================================================== */

const galleryData = [
  {
    id: "g1",
    title: "Outdoor Patio Seating",
    category: "interior",
    categoryLabel: "Atmosphere",
    image: "/assets/images/hero-patio.jpg",
    caption: "Olive Cafe's outdoor patio seating at night with wooden bench sofas, warm cushions, and leafy plants in Dharan."
  },
  {
    id: "g2",
    title: "Artisan Firewood Oven Pizza",
    category: "food",
    categoryLabel: "Food & Dishes",
    image: "/assets/images/firewood-pizza.jpg",
    caption: "Thin, blistered firewood crust topped with melted mozzarella, chicken, bell peppers, and fresh herbs."
  },
  {
    id: "g3",
    title: "Fresh Barista Latte Art",
    category: "drinks",
    categoryLabel: "Drinks & Brews",
    image: "/assets/images/latte-coffee.jpg",
    caption: "Silky handcrafted tulip latte art in a white ceramic cup on a classic red saucer."
  },
  {
    id: "g4",
    title: "Crispy Nepali C-Momo Platter",
    category: "food",
    categoryLabel: "Food & Dishes",
    image: "/assets/images/chili-momo.jpg",
    caption: "Crispy fried momo dumplings tossed in red savory chili sauce with fresh cabbage and carrot garnish."
  },
  {
    id: "g5",
    title: "Whole Grilled Spiced Fish",
    category: "food",
    categoryLabel: "Food & Dishes",
    image: "/assets/images/grilled-fish.jpg",
    caption: "Charcoal-spiced whole fish served on an elegant fish platter with cucumber and fresh greens."
  },
  {
    id: "g6",
    title: "Tropical Citrus Cooler",
    category: "drinks",
    categoryLabel: "Drinks & Brews",
    image: "/assets/images/cold-drinks.jpg",
    caption: "Chilled tropical drink decorated with fresh orange slice and maraschino cherry."
  }
];


/* ==========================================================================
   4. APPLICATION STATE
   ========================================================================== */

const appState = {
  activeCategory: "all",
  searchQuery: "",
  activeGalleryFilter: "all",
  activeLightboxIndex: 0,
  cart: {},
  orderType: "dine-in"
};

let currentLightboxList = [];


/* ==========================================================================
   5. HELPERS
   ========================================================================== */

function parsePrice(priceStr) {
  if (typeof priceStr === "number") return priceStr;

  const num = parseInt(
    String(priceStr).replace(/[^\d]/g, ""),
    10
  );

  return Number.isNaN(num) ? 0 : num;
}


function escapeHTML(str) {
  if (str === null || str === undefined) return "";

  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


/* ==========================================================================
   6. DOM REFERENCES
   ========================================================================== */

const DOM = {
  scrollProgress: document.getElementById("scroll-progress"),
  siteHeader: document.getElementById("site-header"),

  menuToggleBtn: document.getElementById("menu-toggle-btn"),
  mobileNav: document.getElementById("mobile-nav"),
  mobileNavOverlay: document.getElementById("mobile-nav-overlay"),
  mobileNavCloseBtn: document.getElementById("mobile-nav-close-btn"),

  navLinks: document.querySelectorAll(".nav-link, .mobile-nav-link"),

  menuGrid: document.getElementById("menu-grid"),
  menuSearchInput: document.getElementById("menu-search-input"),
  categoryTabs: document.querySelectorAll(".category-tab-btn"),

  cartToggleBtn: document.getElementById("cart-toggle-btn"),
  cartBadge: document.getElementById("cart-badge"),
  cartDrawer: document.getElementById("cart-drawer"),
  cartDrawerOverlay: document.getElementById("cart-drawer-overlay"),
  cartDrawerClose: document.getElementById("cart-drawer-close"),
  cartItemsList: document.getElementById("cart-items-list"),
  cartSubtotal: document.getElementById("cart-subtotal"),
  cartTotalPrice: document.getElementById("cart-total-price"),
  cartClearBtn: document.getElementById("cart-clear-btn"),
  cartCheckoutBtn: document.getElementById("cart-checkout-btn"),
  cartWhatsappBtn: document.getElementById("cart-whatsapp-btn"),
  cartOrderTypeRadios: document.querySelectorAll(
    'input[name="cart-order-type"]'
  ),
  cartOrderTypeLabels: document.querySelectorAll(
    ".cart-order-type label"
  ),

  orderEnquiryModal: document.getElementById("order-enquiry-modal"),
  orderEnquiryModalClose: document.getElementById(
    "order-enquiry-modal-close"
  ),
  orderEnquirySummary: document.getElementById(
    "order-enquiry-summary"
  ),
  orderModalWhatsappBtn: document.getElementById(
    "order-modal-whatsapp-btn"
  ),

  galleryGrid: document.getElementById("gallery-grid"),
  galleryFilterTabs: document.querySelectorAll(".gallery-tab-btn"),

  lightboxModal: document.getElementById("lightbox-modal"),
  lightboxImg: document.getElementById("lightbox-img"),
  lightboxTitle: document.getElementById("lightbox-title"),
  lightboxCategory: document.getElementById("lightbox-category"),
  lightboxClose: document.getElementById("lightbox-close"),
  lightboxPrev: document.getElementById("lightbox-prev"),
  lightboxNext: document.getElementById("lightbox-next"),

  reservationForm: document.getElementById("reservation-form"),
  reservationModal: document.getElementById("reservation-modal"),
  reservationModalClose: document.getElementById(
    "reservation-modal-close"
  ),
  reservationSummaryBox: document.getElementById(
    "reservation-summary-content"
  ),

  backToTopBtn: document.getElementById("back-to-top-btn"),
  toastContainer: document.getElementById("toast-container")
};


/* ==========================================================================
   7. INITIALIZATION
   ========================================================================== */

function initializeApp() {
  try {
    initBusinessInfo();
  } catch (error) {
    console.error("Business info initialization failed:", error);
  }

  try {
    initNavigation();
  } catch (error) {
    console.error("Navigation initialization failed:", error);
  }

  try {
    initMenu();
  } catch (error) {
    console.error("Menu initialization failed:", error);
  }

  try {
    initCart();
  } catch (error) {
    console.error("Cart initialization failed:", error);
  }

  try {
    initGallery();
  } catch (error) {
    console.error("Gallery initialization failed:", error);
  }

  try {
    initReservationForm();
  } catch (error) {
    console.error("Reservation initialization failed:", error);
  }

  try {
    initScrollEffects();
  } catch (error) {
    console.error("Scroll effects initialization failed:", error);
  }

  console.log("Olive Cafe website initialized successfully.");
}


/* ==========================================================================
   8. BUSINESS INFORMATION
   ========================================================================== */

function initBusinessInfo() {
  const currentYearEl = document.getElementById("current-year");

  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  document.querySelectorAll("[data-business-phone]").forEach((el) => {
    el.textContent = businessInfo.phone;

    if (el.tagName === "A") {
      const cleanPhone = businessInfo.phone.replace(/[^\d+]/g, "");
      el.href = `tel:${cleanPhone}`;
    }
  });

  document.querySelectorAll("[data-business-address]").forEach((el) => {
    el.textContent = businessInfo.address;
  });

  document.querySelectorAll("[data-business-email]").forEach((el) => {
    el.textContent = businessInfo.email;

    if (el.tagName === "A") {
      el.href = `mailto:${businessInfo.email}`;
    }
  });

  document.querySelectorAll("[data-business-whatsapp]").forEach((el) => {
    el.textContent = businessInfo.whatsapp;

    if (el.tagName === "A") {
      el.href = businessInfo.whatsappUrl;
    }
  });

  document
    .querySelectorAll("[data-business-hours-notice]")
    .forEach((el) => {
      el.textContent = businessInfo.openingHours;
    });

  document
    .querySelectorAll("[data-business-instagram]")
    .forEach((btn) => {
      if (businessInfo.instagram) {
        btn.href = businessInfo.instagram;
        btn.style.display = "";
      } else {
        btn.style.display = "none";
      }
    });

  document
    .querySelectorAll("[data-business-facebook]")
    .forEach((btn) => {
      if (businessInfo.facebook) {
        btn.href = businessInfo.facebook;
        btn.style.display = "";
      } else {
        btn.style.display = "none";
      }
    });

  document
    .querySelectorAll("[data-business-messenger]")
    .forEach((btn) => {
      if (businessInfo.messengerUrl) {
        btn.href = businessInfo.messengerUrl;
        btn.style.display = "";
      }
    });

  document
    .querySelectorAll("[data-business-maps]")
    .forEach((btn) => {
      btn.href = businessInfo.maps;
    });
}


/* ==========================================================================
   9. MENU
   ========================================================================== */

function initMenu() {
  renderMenuItems();

  DOM.categoryTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      DOM.categoryTabs.forEach((t) =>
        t.classList.remove("is-active")
      );

      tab.classList.add("is-active");

      appState.activeCategory =
        tab.dataset.category || "all";

      renderMenuItems();
    });
  });

  if (DOM.menuSearchInput) {
    let debounceTimer;

    DOM.menuSearchInput.addEventListener("input", (e) => {
      clearTimeout(debounceTimer);

      debounceTimer = setTimeout(() => {
        appState.searchQuery =
          e.target.value.trim().toLowerCase();

        renderMenuItems();
      }, 150);
    });
  }
}


function renderMenuItems() {
  if (!DOM.menuGrid) {
    console.warn("Menu grid element not found.");
    return;
  }

  const filteredItems = menuItems.filter((item) => {
    const itemCat = item.category.toLowerCase();
    const activeCat =
      appState.activeCategory.toLowerCase();

    const matchesCategory =
      activeCat === "all" ||
      itemCat === activeCat ||
      (
        activeCat === "fast food" &&
        (
          itemCat === "fast food" ||
          itemCat === "burgers"
        )
      );

    const matchesSearch =
      !appState.searchQuery ||
      item.name.toLowerCase().includes(appState.searchQuery) ||
      item.description
        .toLowerCase()
        .includes(appState.searchQuery) ||
      item.category
        .toLowerCase()
        .includes(appState.searchQuery);

    return matchesCategory && matchesSearch;
  });

  if (filteredItems.length === 0) {
    DOM.menuGrid.innerHTML = `
      <div class="menu-empty-state">
        <h3>No matching menu items</h3>
        <p>
          No dishes found matching
          "${escapeHTML(appState.searchQuery)}".
        </p>
      </div>
    `;

    return;
  }

  DOM.menuGrid.innerHTML = filteredItems
    .map((item) => {
      const isVeg = item.dietary === "veg";

      const dietIcon = isVeg
        ? `
          <span class="diet-badge diet-veg">
            <span class="diet-dot"></span>
            Veg
          </span>
        `
        : `
          <span class="diet-badge diet-nonveg">
            <span class="diet-dot"></span>
            Non-Veg
          </span>
        `;

      return `
        <article
          class="menu-card"
          data-category="${escapeHTML(
            item.category.toLowerCase()
          )}"
        >

          <div class="menu-card-image-wrap">

            <img
              src="${item.image}"
              alt="${escapeHTML(item.name)}"
              class="menu-card-img"
              loading="lazy"
              width="800"
              height="600"
              onerror="
                this.onerror=null;
                this.src='/assets/images/firewood-pizza.jpg';
              "
            />

            ${
              item.badge
                ? `
                  <span class="menu-badge">
                    ${escapeHTML(item.badge)}
                  </span>
                `
                : ""
            }

            <div class="menu-diet-wrap">
              ${dietIcon}
            </div>

          </div>

          <div class="menu-card-body">

            <div class="menu-card-header">

              <span class="menu-card-category">
                ${escapeHTML(item.category)}
              </span>

              <h3 class="menu-card-title">
                ${escapeHTML(item.name)}
              </h3>

            </div>

            <p class="menu-card-desc">
              ${escapeHTML(item.description)}
            </p>

            <div class="menu-card-footer">

              <div class="menu-card-price">
                <span class="price-value">
                  ${escapeHTML(item.price)}
                </span>
              </div>

              <button
                type="button"
                class="menu-add-btn"
                data-item-name="${escapeHTML(item.name)}"
              >
                <span>+</span>
                <span>Add</span>
              </button>

            </div>

          </div>

        </article>
      `;
    })
    .join("");

  DOM.menuGrid
    .querySelectorAll(".menu-add-btn")
    .forEach((btn) => {
      btn.addEventListener("click", () => {
        addToCart(btn.dataset.itemName);
      });
    });
}


/* ==========================================================================
   10. CART
   ========================================================================== */

function initCart() {
  DOM.cartToggleBtn?.addEventListener(
    "click",
    openCartDrawer
  );

  DOM.cartDrawerClose?.addEventListener(
    "click",
    closeCartDrawer
  );

  DOM.cartDrawerOverlay?.addEventListener(
    "click",
    closeCartDrawer
  );

  DOM.cartClearBtn?.addEventListener("click", () => {
    if (Object.keys(appState.cart).length === 0) return;

    if (
      confirm(
        "Are you sure you want to clear your selected enquiry list?"
      )
    ) {
      appState.cart = {};
      updateCartUI();
      showToast("Enquiry list cleared");
    }
  });

  DOM.cartOrderTypeRadios.forEach((radio) => {
    radio.addEventListener("change", (e) => {
      appState.orderType = e.target.value;

      DOM.cartOrderTypeLabels.forEach((label) => {
        label.classList.remove("active");
      });

      const activeLabel = document.querySelector(
        `.cart-order-type label[data-type="${appState.orderType}"]`
      );

      activeLabel?.classList.add("active");
    });
  });

  DOM.cartWhatsappBtn?.addEventListener(
    "click",
    sendOrderViaWhatsApp
  );

  DOM.cartCheckoutBtn?.addEventListener(
    "click",
    handleOrderEnquiry
  );

  DOM.orderModalWhatsappBtn?.addEventListener(
    "click",
    sendOrderViaWhatsApp
  );

  DOM.orderEnquiryModalClose?.addEventListener(
    "click",
    closeOrderEnquiryModal
  );

  DOM.orderEnquiryModal?.addEventListener(
    "click",
    (e) => {
      if (e.target === DOM.orderEnquiryModal) {
        closeOrderEnquiryModal();
      }
    }
  );

  updateCartUI();
}


function openCartDrawer() {
  DOM.cartDrawer?.classList.add("is-open");
  DOM.cartDrawerOverlay?.classList.add("is-open");

  document.body.classList.add("scroll-locked");
}


function closeCartDrawer() {
  DOM.cartDrawer?.classList.remove("is-open");
  DOM.cartDrawerOverlay?.classList.remove("is-open");

  document.body.classList.remove("scroll-locked");
}


function addToCart(itemName) {
  const menuItem = menuItems.find(
    (item) => item.name === itemName
  );

  if (!menuItem) return;

  if (appState.cart[itemName]) {
    appState.cart[itemName].quantity += 1;
  } else {
    appState.cart[itemName] = {
      item: menuItem,
      quantity: 1
    };
  }

  updateCartUI();

  showToast(
    `Added "${menuItem.name}" to enquiry list`
  );
}


function updateCartQuantity(itemName, delta) {
  if (!appState.cart[itemName]) return;

  appState.cart[itemName].quantity += delta;

  if (appState.cart[itemName].quantity <= 0) {
    delete appState.cart[itemName];
  }

  updateCartUI();
}


function removeFromCart(itemName) {
  if (!appState.cart[itemName]) return;

  const name = appState.cart[itemName].item.name;

  delete appState.cart[itemName];

  updateCartUI();

  showToast(`Removed "${name}"`);
}


function calculateCartTotals() {
  let totalItemsCount = 0;
  let totalPriceNPR = 0;

  Object.values(appState.cart).forEach((entry) => {
    totalItemsCount += entry.quantity;

    totalPriceNPR +=
      parsePrice(entry.item.price) *
      entry.quantity;
  });

  return {
    totalItemsCount,
    totalPriceNPR
  };
}


function updateCartUI() {
  const cartEntries =
    Object.entries(appState.cart);

  const {
    totalItemsCount,
    totalPriceNPR
  } = calculateCartTotals();

  if (DOM.cartBadge) {
    DOM.cartBadge.textContent = totalItemsCount;

    DOM.cartBadge.style.display =
      totalItemsCount > 0
        ? "inline-block"
        : "none";
  }

  if (DOM.cartItemsList) {
    if (cartEntries.length === 0) {
      DOM.cartItemsList.innerHTML = `
        <div class="cart-empty-message">

          <p>
            <strong>
              Your order enquiry basket is empty
            </strong>
          </p>

          <p>
            Browse the menu and click "Add"
            to select items.
          </p>

        </div>
      `;

      if (DOM.cartCheckoutBtn) {
        DOM.cartCheckoutBtn.disabled = true;
      }

      if (DOM.cartWhatsappBtn) {
        DOM.cartWhatsappBtn.disabled = true;
      }
    } else {
      DOM.cartItemsList.innerHTML =
        cartEntries
          .map(([name, entry]) => {
            const item = entry.item;

            const itemSubtotal =
              parsePrice(item.price) *
              entry.quantity;

            return `
              <div
                class="cart-item"
                data-cart-item="${escapeHTML(name)}"
              >

                <img
                  src="${item.image}"
                  alt="${escapeHTML(item.name)}"
                  class="cart-item-img"
                  width="120"
                  height="90"
                  onerror="
                    this.onerror=null;
                    this.src='/assets/images/firewood-pizza.jpg';
                  "
                />

                <div class="cart-item-info">

                  <h4>
                    ${escapeHTML(item.name)}
                  </h4>

                  <div class="cart-item-price">
                    ${item.price} each
                    ·
                    <strong>
                      NPR ${itemSubtotal.toLocaleString()}
                    </strong>
                  </div>

                </div>

                <div class="cart-item-actions">

                  <div class="cart-qty-control">

                    <button
                      type="button"
                      class="cart-qty-btn"
                      data-qty-delta="-1"
                      data-name="${escapeHTML(name)}"
                    >
                      −
                    </button>

                    <span class="cart-qty-value">
                      ${entry.quantity}
                    </span>

                    <button
                      type="button"
                      class="cart-qty-btn"
                      data-qty-delta="1"
                      data-name="${escapeHTML(name)}"
                    >
                      +
                    </button>

                  </div>

                  <button
                    type="button"
                    class="cart-item-remove-btn"
                    data-remove-name="${escapeHTML(name)}"
                  >
                    Remove
                  </button>

                </div>

              </div>
            `;
          })
          .join("");

      if (DOM.cartCheckoutBtn) {
        DOM.cartCheckoutBtn.disabled = false;
      }

      if (DOM.cartWhatsappBtn) {
        DOM.cartWhatsappBtn.disabled = false;
      }

      DOM.cartItemsList
        .querySelectorAll("[data-qty-delta]")
        .forEach((btn) => {
          btn.addEventListener("click", () => {
            updateCartQuantity(
              btn.dataset.name,
              parseInt(
                btn.dataset.qtyDelta,
                10
              )
            );
          });
        });

      DOM.cartItemsList
        .querySelectorAll("[data-remove-name]")
        .forEach((btn) => {
          btn.addEventListener("click", () => {
            removeFromCart(
              btn.dataset.removeName
            );
          });
        });
    }
  }

  if (DOM.cartSubtotal) {
    DOM.cartSubtotal.textContent =
      totalItemsCount > 0
        ? `${totalItemsCount} item(s)`
        : "0 items";
  }

  if (DOM.cartTotalPrice) {
    DOM.cartTotalPrice.textContent =
      `NPR ${totalPriceNPR.toLocaleString()}`;
  }
}


/* ==========================================================================
   11. WHATSAPP ORDER
   ========================================================================== */

function sendOrderViaWhatsApp() {
  const cartEntries =
    Object.entries(appState.cart);

  if (cartEntries.length === 0) {
    showToast(
      "Please select menu items first"
    );
    return;
  }

  const { totalPriceNPR } =
    calculateCartTotals();

  const orderTypeText =
    appState.orderType === "dine-in"
      ? "Dine-In"
      : "Takeaway";

  const itemsListText =
    cartEntries
      .map(([, entry]) => {
        const subtotal =
          parsePrice(entry.item.price) *
          entry.quantity;

        return `• ${entry.item.name} x${entry.quantity} (NPR ${subtotal.toLocaleString()})`;
      })
      .join("\n");

  const text = `Hello Olive Cafe!

I would like to place an order from your website.

Order Type: ${orderTypeText}

Selected Items:
${itemsListText}

Total Estimated Price: NPR ${totalPriceNPR.toLocaleString()}

Please confirm item availability and preparation time. Thank you!`;

  const whatsappUrl =
    `https://wa.me/9779845748312?text=${encodeURIComponent(text)}`;

  window.open(
    whatsappUrl,
    "_blank",
    "noopener,noreferrer"
  );
}


function handleOrderEnquiry() {
  const cartEntries =
    Object.entries(appState.cart);

  if (cartEntries.length === 0) return;

  const {
    totalItemsCount,
    totalPriceNPR
  } = calculateCartTotals();

  if (DOM.orderEnquirySummary) {
    DOM.orderEnquirySummary.innerHTML = `
      <div class="enquiry-summary-type">
        <span>Order Preference:</span>
        <strong>
          ${
            appState.orderType === "dine-in"
              ? "Dine-In"
              : "Takeaway"
          }
        </strong>
      </div>

      <ul class="enquiry-summary-items">

        ${cartEntries
          .map(([, entry]) => {
            const subtotal =
              parsePrice(entry.item.price) *
              entry.quantity;

            return `
              <li>

                <span>
                  ${escapeHTML(entry.item.name)}
                  × ${entry.quantity}
                </span>

                <strong>
                  NPR ${subtotal.toLocaleString()}
                </strong>

              </li>
            `;
          })
          .join("")}

      </ul>

      <div class="enquiry-summary-total">

        <span>
          Estimated Total
          (${totalItemsCount} items):
        </span>

        <strong>
          NPR ${totalPriceNPR.toLocaleString()}
        </strong>

      </div>
    `;
  }

  DOM.orderEnquiryModal?.classList.add(
    "is-open"
  );

  document.body.classList.add(
    "scroll-locked"
  );
}


function closeOrderEnquiryModal() {
  DOM.orderEnquiryModal?.classList.remove(
    "is-open"
  );

  document.body.classList.remove(
    "scroll-locked"
  );
}


/* ==========================================================================
   12. GALLERY
   ========================================================================== */

function initGallery() {
  renderGallery();

  DOM.galleryFilterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      DOM.galleryFilterTabs.forEach((t) =>
        t.classList.remove("is-active")
      );

      tab.classList.add("is-active");

      appState.activeGalleryFilter =
        tab.dataset.filter || "all";

      renderGallery();
    });
  });

  DOM.lightboxClose?.addEventListener(
    "click",
    closeLightbox
  );

  DOM.lightboxPrev?.addEventListener(
    "click",
    showPrevLightboxImage
  );

  DOM.lightboxNext?.addEventListener(
    "click",
    showNextLightboxImage
  );

  DOM.lightboxModal?.addEventListener(
    "click",
    (e) => {
      if (e.target === DOM.lightboxModal) {
        closeLightbox();
      }
    }
  );

  window.addEventListener("keydown", (e) => {
    if (
      !DOM.lightboxModal ||
      !DOM.lightboxModal.classList.contains(
        "is-open"
      )
    ) {
      return;
    }

    if (e.key === "Escape") {
      closeLightbox();
    }

    if (e.key === "ArrowLeft") {
      showPrevLightboxImage();
    }

    if (e.key === "ArrowRight") {
      showNextLightboxImage();
    }
  });
}


function renderGallery() {
  if (!DOM.galleryGrid) {
    console.warn(
      "Gallery grid element not found."
    );
    return;
  }

  const filteredGallery =
    galleryData.filter((item) => {
      return (
        appState.activeGalleryFilter === "all" ||
        item.category ===
          appState.activeGalleryFilter
      );
    });

  DOM.galleryGrid.innerHTML =
    filteredGallery
      .map((item, index) => {
        return `
          <div
            class="gallery-item"
            data-gallery-index="${index}"
            tabindex="0"
            role="button"
            aria-label="View ${escapeHTML(item.title)}"
          >

            <img
              src="${item.image}"
              alt="${escapeHTML(item.title)}"
              class="gallery-item-img"
              loading="lazy"
              width="800"
              height="600"
              onerror="
                this.onerror=null;
                this.src='/assets/images/firewood-pizza.jpg';
              "
            />

            <div class="gallery-item-overlay">

              <span class="gallery-item-category">
                ${escapeHTML(item.categoryLabel)}
              </span>

              <h4 class="gallery-item-title">
                ${escapeHTML(item.title)}
              </h4>

            </div>

          </div>
        `;
      })
      .join("");

  DOM.galleryGrid
    .querySelectorAll(".gallery-item")
    .forEach((el) => {
      const open = () => {
        const index = parseInt(
          el.dataset.galleryIndex,
          10
        );

        openLightbox(
          filteredGallery,
          index
        );
      };

      el.addEventListener("click", open);

      el.addEventListener("keydown", (e) => {
        if (
          e.key === "Enter" ||
          e.key === " "
        ) {
          e.preventDefault();
          open();
        }
      });
    });
}


function openLightbox(list, index) {
  currentLightboxList = list;
  appState.activeLightboxIndex = index;

  updateLightboxContent();

  DOM.lightboxModal?.classList.add(
    "is-open"
  );

  document.body.classList.add(
    "scroll-locked"
  );
}


function closeLightbox() {
  DOM.lightboxModal?.classList.remove(
    "is-open"
  );

  document.body.classList.remove(
    "scroll-locked"
  );
}


function updateLightboxContent() {
  const item =
    currentLightboxList[
      appState.activeLightboxIndex
    ];

  if (!item) return;

  if (DOM.lightboxImg) {
    DOM.lightboxImg.src = item.image;
    DOM.lightboxImg.alt = item.title;
  }

  if (DOM.lightboxTitle) {
    DOM.lightboxTitle.textContent =
      item.title;
  }

  if (DOM.lightboxCategory) {
    DOM.lightboxCategory.textContent =
      `${item.categoryLabel} · ${item.caption}`;
  }
}


function showPrevLightboxImage() {
  if (currentLightboxList.length === 0) {
    return;
  }

  appState.activeLightboxIndex =
    (
      appState.activeLightboxIndex -
      1 +
      currentLightboxList.length
    ) %
    currentLightboxList.length;

  updateLightboxContent();
}


function showNextLightboxImage() {
  if (currentLightboxList.length === 0) {
    return;
  }

  appState.activeLightboxIndex =
    (
      appState.activeLightboxIndex +
      1
    ) %
    currentLightboxList.length;

  updateLightboxContent();
}


/* ==========================================================================
   13. NAVIGATION
   ========================================================================== */

function openMobileNav() {
  if (!DOM.mobileNav) return;

  DOM.mobileNav.classList.add(
    "is-open"
  );

  DOM.mobileNavOverlay?.classList.add(
    "is-open"
  );

  DOM.menuToggleBtn?.classList.add(
    "is-active"
  );

  DOM.menuToggleBtn?.setAttribute(
    "aria-expanded",
    "true"
  );

  document.body.classList.add(
    "scroll-locked"
  );
}


function closeMobileNav() {
  if (!DOM.mobileNav) return;

  DOM.mobileNav.classList.remove(
    "is-open",
    "is-dragging"
  );

  DOM.mobileNav.style.transform = "";
  DOM.mobileNav.style.transition = "";
  DOM.mobileNav.style.opacity = "";

  DOM.mobileNavOverlay?.classList.remove(
    "is-open"
  );

  DOM.menuToggleBtn?.classList.remove(
    "is-active"
  );

  DOM.menuToggleBtn?.setAttribute(
    "aria-expanded",
    "false"
  );

  document.body.classList.remove(
    "scroll-locked"
  );
}


function toggleMobileNav() {
  if (
    DOM.mobileNav?.classList.contains(
      "is-open"
    )
  ) {
    closeMobileNav();
  } else {
    openMobileNav();
  }
}


function initNavigation() {
  DOM.menuToggleBtn?.addEventListener(
    "click",
    toggleMobileNav
  );

  DOM.mobileNavOverlay?.addEventListener(
    "click",
    closeMobileNav
  );

  DOM.mobileNavCloseBtn?.addEventListener(
    "click",
    closeMobileNav
  );

  DOM.navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId =
        link.getAttribute("href");

      if (
        targetId &&
        targetId.startsWith("#")
      ) {
        const targetSection =
          document.querySelector(
            targetId
          );

        if (targetSection) {
          e.preventDefault();

          closeMobileNav();

          const headerOffset = 74;

          const elementPosition =
            targetSection.getBoundingClientRect()
              .top;

          const offsetPosition =
            elementPosition +
            window.pageYOffset -
            headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    });
  });

  const sections =
    document.querySelectorAll(
      "section[id]"
    );

  if (
    "IntersectionObserver" in window &&
    sections.length
  ) {
    const navObserver =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (
              entry.isIntersecting
            ) {
              const currentId =
                `#${entry.target.id}`;

              DOM.navLinks.forEach(
                (link) => {
                  link.classList.toggle(
                    "active",
                    link.getAttribute(
                      "href"
                    ) === currentId
                  );
                }
              );
            }
          });
        },
        {
          rootMargin:
            "-20% 0px -70% 0px"
        }
      );

    sections.forEach((section) =>
      navObserver.observe(section)
    );
  }

  initMobileSwipeHandler();
}


function initMobileSwipeHandler() {
  if (!DOM.mobileNav) return;

  let touchStartX = 0;
  let touchCurrentX = 0;
  let isSwiping = false;

  DOM.mobileNav.addEventListener(
    "touchstart",
    (e) => {
      touchStartX =
        e.touches[0].clientX;

      touchCurrentX =
        touchStartX;

      isSwiping = true;

      DOM.mobileNav.classList.add(
        "is-dragging"
      );
    },
    { passive: true }
  );

  DOM.mobileNav.addEventListener(
    "touchmove",
    (e) => {
      if (!isSwiping) return;

      touchCurrentX =
        e.touches[0].clientX;

      const diff =
        touchCurrentX -
        touchStartX;

      if (diff < 0) {
        DOM.mobileNav.style.transform =
          `translateX(${diff}px)`;
      }
    },
    { passive: true }
  );

  DOM.mobileNav.addEventListener(
    "touchend",
    () => {
      if (!isSwiping) return;

      isSwiping = false;

      DOM.mobileNav.classList.remove(
        "is-dragging"
      );

      const diff =
        touchCurrentX -
        touchStartX;

      if (diff < -80) {
        closeMobileNav();
      } else {
        DOM.mobileNav.style.transform = "";
      }
    }
  );
}


/* ==========================================================================
   14. RESERVATION
   ========================================================================== */

function initReservationForm() {
  if (!DOM.reservationForm) {
    return;
  }

  DOM.reservationForm.addEventListener(
    "submit",
    (e) => {
      e.preventDefault();

      const name =
        document.getElementById(
          "res-name"
        )?.value.trim();

      const phone =
        document.getElementById(
          "res-phone"
        )?.value.trim();

      const date =
        document.getElementById(
          "res-date"
        )?.value;

      const time =
        document.getElementById(
          "res-time"
        )?.value;

      const guests =
        document.getElementById(
          "res-guests"
        )?.value;

      const notes =
        document.getElementById(
          "res-notes"
        )?.value.trim();

      if (!name || !phone || !date || !time) {
        showToast(
          "Please fill out all required fields."
        );

        return;
      }

      if (DOM.reservationSummaryBox) {
        DOM.reservationSummaryBox.innerHTML = `
          <div class="reservation-summary-row">
            <span>Name:</span>
            <strong>${escapeHTML(name)}</strong>
          </div>

          <div class="reservation-summary-row">
            <span>Contact Number:</span>
            <strong>${escapeHTML(phone)}</strong>
          </div>

          <div class="reservation-summary-row">
            <span>Date & Time:</span>
            <strong>
              ${escapeHTML(date)}
              at
              ${escapeHTML(time)}
            </strong>
          </div>

          <div class="reservation-summary-row">
            <span>Party Size:</span>
            <strong>
              ${escapeHTML(guests || "1")}
              guest(s)
            </strong>
          </div>

          ${
            notes
              ? `
                <div class="reservation-summary-row">
                  <span>Special Requests:</span>
                  <strong>
                    ${escapeHTML(notes)}
                  </strong>
                </div>
              `
              : ""
          }
        `;
      }

      DOM.reservationModal?.classList.add(
        "is-open"
      );

      document.body.classList.add(
        "scroll-locked"
      );

      DOM.reservationForm.reset();
    }
  );

  DOM.reservationModalClose?.addEventListener(
    "click",
    closeReservationModal
  );

  DOM.reservationModal?.addEventListener(
    "click",
    (e) => {
      if (
        e.target ===
        DOM.reservationModal
      ) {
        closeReservationModal();
      }
    }
  );
}


function closeReservationModal() {
  DOM.reservationModal?.classList.remove(
    "is-open"
  );

  document.body.classList.remove(
    "scroll-locked"
  );
}


/* ==========================================================================
   15. SCROLL EFFECTS
   ========================================================================== */

function initScrollEffects() {
  window.addEventListener(
    "scroll",
    () => {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop;

      const scrollHeight =
        document.documentElement
          .scrollHeight -
        document.documentElement
          .clientHeight;

      if (
        DOM.scrollProgress &&
        scrollHeight > 0
      ) {
        const progress =
          (scrollTop / scrollHeight) *
          100;

        DOM.scrollProgress.style.width =
          `${progress}%`;
      }

      if (DOM.siteHeader) {
        DOM.siteHeader.classList.toggle(
          "scrolled",
          scrollTop > 40
        );
      }

      if (DOM.backToTopBtn) {
        DOM.backToTopBtn.classList.toggle(
          "is-visible",
          scrollTop > 400
        );
      }
    },
    { passive: true }
  );

  DOM.backToTopBtn?.addEventListener(
    "click",
    () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  );


  /* ----------------------------------------------------------
     Reveal Animation
     ---------------------------------------------------------- */

  const revealElements =
    document.querySelectorAll(
      ".reveal-on-scroll"
    );

  if (
    "IntersectionObserver" in window &&
    revealElements.length > 0
  ) {
    const revealObserver =
      new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (
              entry.isIntersecting
            ) {
              entry.target.classList.add(
                "is-visible"
              );

              observer.unobserve(
                entry.target
              );
            }
          });
        },
        {
          threshold: 0.12,
          rootMargin:
            "0px 0px -40px 0px"
        }
      );

    revealElements.forEach((el) => {
      revealObserver.observe(el);
    });

    /*
     * Safety fallback:
     * If an element somehow remains hidden,
     * reveal it shortly after page load.
     */
    setTimeout(() => {
      revealElements.forEach((el) => {
        el.classList.add("is-visible");
      });
    }, 1500);

  } else {
    revealElements.forEach((el) => {
      el.classList.add(
        "is-visible"
      );
    });
  }
}


/* ==========================================================================
   16. TOAST
   ========================================================================== */

function showToast(message) {
  if (!DOM.toastContainer) {
    console.log(message);
    return;
  }

  const toast =
    document.createElement("div");

  toast.className = "toast";

  toast.innerHTML = `
    <span>
      ${escapeHTML(message)}
    </span>
  `;

  DOM.toastContainer.appendChild(toast);

  void toast.offsetWidth;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");

    setTimeout(() => {
      toast.remove();
    }, 250);
  }, 2800);
}


/* ==========================================================================
   17. START APPLICATION
   ========================================================================== */

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    initializeApp,
    { once: true }
  );
} else {
  initializeApp();
}
