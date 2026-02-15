# 🛒 Mini Mart

Mini Mart is a simple web-based product management application developed as part of an internship project.  
This project allows users to add, view, and manage products easily.

---

## 🚀 Features

- ➕ Show the products
- 📝 View product details
- ❌ Add to cart
- 📋 Checkout
- 💻 Simple and user-friendly interface

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- Next js
- Tanstack Query
- Reach-hot-toast
- Reach-hook-Form


---
## 📂 Project Structure

```
mini-mart/
│
├── .next/
├── node_modules/
├── public/
│
├── src/
│   ├── app/
│   │   ├── cart/
│   │   │   └── page.jsx
│   │   │
│   │   ├── checkout/
│   │   │   └── page.jsx
│   │   │
│   │   ├── components/
│   │   │   ├── home/
│   │   │   │   ├── FeaturedProduct.jsx
│   │   │   │   └── Hero.jsx
│   │   │   │
│   │   │   ├── share/
│   │   │   │   ├── Footer.jsx
│   │   │   │   └── Navbar.jsx
│   │   │   │
│   │   │   └── ui/
│   │   │       ├── Button.jsx
│   │   │       └── ProductCard.jsx
│   │   │
│   │   ├── context/
│   │   │   └── ProductContext.js
│   │   │
│   │   ├── hooks/
│   │   │   └── useProducts.js
│   │   │
│   │   ├── products/
│   │   │   ├── page.jsx
│   │   │   └── [id]/
│   │   │       └── page.jsx
│   │   │
│   │   ├── providers/
│   │   │   └── QueryProvider.jsx
│   │   │
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.jsx
│
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── package-lock.json
├── postcss.config.mjs
└── README.md
```


---


## 🚀 Getting Started

```bash
git clone https://github.com/adsfixterintern/mini-mart-4.git
cd mini-mart-4
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.