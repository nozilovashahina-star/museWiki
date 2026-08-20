# 🏛️ MuseWiki - Deploy Qilish Qo'llanmasi

Loyiha tayyor fayllarga tegmagan holda deploy (jonli efirga chiqarish) qilish uchun to'liq sozlandi.

---

## 🚀 1. Netlify orqali Deploy qilish (Tavsiya etiladi)

1. [Netlify.com](https://www.netlify.com/) saytiga kiring va akkountingizga kiring.
2. **"Add new site"** -> **"Import an existing project"** (yoki papkani shunchaki sudrab olib kelib tashlang — **Drag & Drop**).
3. Agar GitHub orqali ulansangiz:
   - **Publish directory:** `web` (Loyiha ildizidagi `netlify.toml` fayli tufayli avtomatik aniqlanadi).
4. **"Deploy site"** tugmasini bosing.

---

## ⚡ 2. Vercel orqali Deploy qilish

1. [Vercel.com](https://vercel.com/) saytiga kiring.
2. **"Add New Project"** tugmasini bosing va loyihangizni tanlang.
3. Loyihadagi `vercel.json` fayli avtomatik ravishda `web` papkasini asosiy sahifa deb oladi.
4. **"Deploy"** tugmasini bosing.

---

## 🐙 3. GitHub Pages orqali Deploy qilish

1. Repository sozlamalariga kiring: **Settings** -> **Pages**.
2. **Branch:** `main` (yoki `master`) tanlang.
3. **Folder:** `/ (root)` tanlang va **Save** bosing.
4. Ildiz papkadagi `index.html` avtomatik ravishda tashrif buyuruvchilarni `./web/index.html` sahifasiga yo'naltiradi (`redirect`).

---

## 📁 Fayllar Tuzilishi (Structure)

```
Yangi museWiki/
├── netlify.toml        # Netlify sozlamalari (publish = "web")
├── vercel.json          # Vercel sozlamalari (outputDirectory = "web")
├── index.html           # Root yo'naltiruvchi (redirect to /web/index.html)
├── package.json         # NPM scriptlari
├── .gitignore           # Keraksiz fayllarni yashirish
└── web/                 # Barcha loyiha sahifalari va me'moriy fayllari (O'ZGARTIRILMAGAN)
    ├── index.html
    ├── about-us.html
    ├── british.html
    ├── ermitaj.html
    ├── louvre.html
    ├── metropolitan.html
    ├── style.css
    ├── shared.css
    ├── media.css
    ├── main.js
    └── img/
```
