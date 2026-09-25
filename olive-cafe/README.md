# Olive Cafe — Dharan, Nepal

A production-ready website proposal and digital storefront crafted specifically for **Olive Cafe** in **Dharan, Nepal**.

Built strictly using **HTML5**, **CSS3**, and **Vanilla JavaScript** (no external UI frameworks or heavy libraries), delivering high speed, responsiveness, and clean code.

---

## ☕ Key Highlights

- **Visual Identity**: Warm olive green, soft cream, and dark neutral earth tones designed to match a boutique Himalayan cafe.
- **Interactive Menu & Live Search**: Filter by categories (*Pizza, Burgers, Momo, Pasta, Chowmein, Coffee, Cold Drinks, Desserts*) or instantly search by dish keywords.
- **Cart & Order Drawer**: Built entirely in vanilla JavaScript with quantity steppers, live subtotal calculations in Nepali Rupees (`NPR`), and a one-click **"Send Order via WhatsApp"** button.
- **Photo Gallery & Lightbox**: Interactive gallery with category filtering and keyboard-accessible modal lightbox (`Esc`, Left/Right arrow keys).
- **Customer Reviews Carousel**: Smooth slide carousel with touch/mouse pause, next/prev navigation, and dot indicators.
- **Table Reservation Form**: Real-time client-side validation for phone numbers, future dates, time slots, and guest counts. Upon submission, generates pre-formatted WhatsApp and click-to-call links.
- **Free Map Embed**: Zero-API-key OpenStreetMap embed for Dharan, Sunsari, Nepal.
- **Performance & SEO**: Semantic HTML5 tags, Open Graph meta tags, Twitter card tags, Schema.org JSON-LD structured data for cafes/restaurants.

---

## 📂 Project Structure

```
olive-cafe/
│
├── index.html         # Main semantic HTML5 markup & SEO metadata
├── css/
│   └── style.css      # Pure CSS3 stylesheet with CSS variables & responsive layout
├── js/
│   └── script.js      # Vanilla JavaScript for menu, cart, gallery, carousel & form
├── assets/
│   └── images/        # High-resolution food & cafe imagery
│       ├── hero-cafe.jpg
│       ├── about-ambience.jpg
│       ├── pizza.jpg
│       ├── burger.jpg
│       ├── momo.jpg
│       ├── pasta.jpg
│       ├── chowmein.jpg
│       ├── coffee.jpg
│       ├── cold-drinks.jpg
│       └── desserts.jpg
└── README.md          # Setup and customization guide
```

---

## 🛠️ How to Customize for the Cafe Owner

All editable cafe data is cleanly isolated in configuration objects inside `js/script.js`:

### 1. Update Contact & Social Media Information
Open `js/script.js` and locate `businessInfo` at the top:
```javascript
const businessInfo = {
  name: "Olive Cafe",
  tagline: "Good Food. Great Coffee. Better Moments.",
  location: "Dharan, Nepal",
  address: "Bhanu Chowk, Main Road, Dharan, Sunsari, Koshi Province, Nepal",
  phone: "+977 980-0000000",
  phoneDisplay: "+977 98000 00000",
  whatsapp: "9779800000000", // Phone number without + or spaces
  email: "olivecafedharan@gmail.com",
  openingHoursWeekday: "10:00 AM – 9:30 PM",
  openingHoursWeekend: "9:30 AM – 10:00 PM",
  instagram: "https://instagram.com/olivecafe_dharan",
  facebook: "https://facebook.com/olivecafedharan",
  maps: "https://www.google.com/maps/search/?api=1&query=Dharan+Nepal",
  currency: "NPR",
  currencySymbol: "Rs."
};
```

### 2. Add or Edit Menu Dishes & Prices
In `js/script.js`, modify `menuItemsData`. Each item accepts:
```javascript
{
  id: "dish-unique-id",
  name: "Dish Name",
  category: "pizza", // 'pizza', 'burgers', 'momo', 'pasta', 'chowmein', 'coffee', 'cold-drinks', 'desserts'
  categoryLabel: "Pizza",
  price: 650, // Price in NPR (integer)
  dietary: "veg", // 'veg' or 'non-veg'
  badge: "Chef's Special", // Optional badge label
  image: "/assets/images/pizza.jpg",
  description: "Freshly prepared ingredients and flavor profile description."
}
```

### 3. Replace Customer Testimonials
Update `customerReviewsData` in `js/script.js` with genuine feedback from Google, Facebook, or customer logbooks.

---

## 🚀 Running the Project

Open `index.html` in any modern web browser or serve via any static web server (such as Vite, Nginx, or Python `python3 -m http.server 3000`).
