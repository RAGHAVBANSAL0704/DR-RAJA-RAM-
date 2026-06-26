# Dr. Raja Ram Aggarawal — Official Website
## Complete Multi-Page Website — Ready to Host

---

## 📁 FILE STRUCTURE

```
drrajaramsite/
├── index.html          ← Homepage (Hero, About preview, Featured Books, Testimonials, News)
├── about.html          ← Full biography, timeline, qualifications, awards
├── books.html          ← All books with search, filter, tabs
├── library.html        ← Digital library with advanced search & citation generator
├── categories.html     ← All 7 subject categories with books
├── news.html           ← News, announcements, upcoming events
├── contact.html        ← Contact form, map, FAQ
├── sitemap.xml         ← SEO sitemap (update your domain name)
├── robots.txt          ← SEO robots file (update your domain name)
├── css/
│   └── style.css       ← Complete shared design system
├── js/
│   └── main.js         ← All book data + shared functions
└── books/              ← 12 individual book detail pages
    ├── bharat-ka-itihas.html
    ├── bharatiya-rajniti-vigyan.html
    ├── shikshan-kala-adhigam.html
    ├── safalta-ka-marg.html
    ├── bharatiya-darshan-sanskriti.html
    ├── rashtriya-vichaardhara.html
    ├── samanya-gyan-kosh.html
    ├── adhunik-bharat-ka-uday.html
    ├── samajshastra-parichay.html
    ├── jeevan-kaushal.html
    ├── shiksha-manovigyan.html
    └── naitik-shiksha.html
```

---

## 🚀 HOW TO HOST (Step by Step)

### Option 1 — GitHub Pages (FREE, Recommended)
1. Create a free account at github.com
2. Create a new repository named `drrajaramaggarawal` (or any name)
3. Upload ALL files maintaining the exact folder structure shown above
4. Go to Settings → Pages → Source: "Deploy from branch" → main → / (root)
5. Your site will be live at: `https://yourusername.github.io/drrajaramaggarawal/`

### Option 2 — Netlify (FREE, Easiest)
1. Create a free account at netlify.com
2. Drag and drop the entire `drrajaramsite` folder onto the Netlify dashboard
3. Your site is instantly live with a free URL like `drrajaramaggarawal.netlify.app`
4. Connect a custom domain (optional) in Settings → Domain Management

### Option 3 — Any Web Hosting (cPanel/FTP)
1. Purchase hosting from any provider (Hostinger, Bluehost, etc.)
2. Open File Manager or FTP client
3. Upload all files to the `public_html` folder
4. Keep folder structure intact
5. Your site is live at your domain

---

## 🌐 AFTER HOSTING — IMPORTANT STEPS

### 1. Update sitemap.xml
Replace `https://yoursite.com` with your actual domain name in `sitemap.xml`

### 2. Update robots.txt
Replace `https://yoursite.com` with your actual domain name in `robots.txt`

### 3. Submit to Google Search Console
- Go to search.google.com/search-console
- Add your domain
- Submit sitemap.xml URL for indexing

### 4. Add Your Photo
Replace the "RRA" avatar placeholder with Dr. Aggarawal's actual photo:
- Save photo as `images/dr-raja-ram-aggarawal.jpg`
- Edit index.html and about.html to use `<img src="images/photo.jpg" alt="Dr. Raja Ram Aggarawal">`

### 5. Add Real Book PDFs
When PDFs are ready:
- Save them in a `pdfs/` folder
- Update the "Read Online" buttons to link to the PDF files
- Or integrate a PDF viewer library like PDF.js

### 6. Update Contact Details
Edit `contact.html` to add:
- Real phone number
- Real email address
- Real Google Maps embed code

---

## ✏️ HOW TO ADD A NEW BOOK

Open `js/main.js` and add a new entry to the `BOOKS` array:

```javascript
{
  id: 13,
  slug: "your-book-slug",        // URL-friendly name (no spaces)
  title: "पुस्तक का नाम",
  subtitle: "English subtitle here",
  category: "History",           // Must match a category name
  catColor: "#e8f0fc",
  catText: "#2563a8",
  coverBg: "#1a2744",
  isbn: "978-81-XXXXX-XX-X",
  publisher: "Publisher Name",
  year: 2024,
  edition: "1st",
  language: "Hindi",
  pages: 300,
  chapters: 12,
  readingTime: "10 hrs",
  featured: false,
  desc: "Full description of the book...",
  keywords: ["keyword1", "keyword2"],
  toc: ["Chapter 1", "Chapter 2", ...],
  apa: "APA citation string",
  mla: "MLA citation string",
  chicago: "Chicago citation string",
  bibtex: "@book{...}",
  related: [1, 2, 3],           // IDs of related books
}
```

Then create a book detail page in the `books/` folder following the same pattern.

---

## 🎨 CUSTOMIZATION

### Colors (edit css/style.css, :root section)
- `--navy` — Main dark navy color
- `--blue` — Primary blue accent
- `--gold` — Gold accent
- `--green` — Green accent

### Dark Mode
Built-in. Toggle via the moon icon in the navigation bar.

### Fonts
Using Google Fonts: Playfair Display (headings), Inter (body), Lora (quotes)

---

## 📧 CONTACT FOR SUPPORT
Website designed for Dr. Raja Ram Aggarawal
Government College, Bhattu Kalan, Haryana – 125104, India

---

## 📄 PAGES SUMMARY

| Page | Description |
|------|-------------|
| index.html | Homepage with hero, featured books, testimonials |
| about.html | Full biography, timeline, qualifications |
| books.html | All books with search & filter |
| library.html | Advanced search + citation generator |
| categories.html | Browse by subject area |
| news.html | News, events, announcements |
| contact.html | Contact form + FAQ |
| books/*.html | 12 individual book detail pages |
