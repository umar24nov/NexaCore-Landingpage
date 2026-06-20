# NexaCore – Tech Company Landing Page
> P2A Frontend Internship Program – Task 1

A modern, fully responsive tech company landing page built with React.js.

---

## 🚀 How to Run Locally

### Prerequisites
- **Node.js** (v16+) → https://nodejs.org

### Steps
```bash
cd nexacore
npm install
npm start
```
Opens at **http://localhost:3000**

---

## 📨 How to Receive Contact Form Messages

### Formspree (Easiest, Free)
1. Go to https://formspree.io → create a free account
2. Create a new form → copy your Form ID (e.g. `xpzvgkqw`)
3. Open `src/components/Contact.js`
4. Replace `YOUR_FORM_ID` in the `handleSubmit` function with your real ID:

```js
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
});
```
✅ Messages will arrive in your email inbox automatically.

---

## 🌐 Deploy on Vercel (Free)

### Via GitHub (Recommended)
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/nexacore-landing.git
git push -u origin main
```
Then go to https://vercel.com → Sign in with GitHub → **Add New Project** → Import your repo → **Deploy**.

### Via Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## 📁 Folder Structure

```
nexacore2/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ui/                  ← Shared, reusable primitives
│   │   │   ├── Badge.js         (section label pill)
│   │   │   ├── Button.js        (primary/outline buttons)
│   │   │   ├── Card.js          (elevated card surface)
│   │   │   └── SectionHeading.js (badge + title + subtitle)
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Services.js
│   │   ├── WhyUs.js
│   │   ├── Testimonials.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── constants/
│   │   ├── data.js              ← ✏️ All text/content lives here
│   │   └── theme.js              ← 🎨 All colors & fonts live here
│   ├── App.js
│   ├── index.js
│   └── index.css                 ← Responsive breakpoints (mobile/tablet/desktop)
└── package.json
```

---

## ✏️ How to Customize

- **Text/content** → edit `src/constants/data.js`
- **Colors/fonts** → edit `src/constants/theme.js`
- **Company name/logo** → search "NexaCore" in `Navbar.js` and `Footer.js`
- **Button/card/badge style globally** → edit the relevant file in `src/components/ui/` — the change applies everywhere automatically

---

## 🧩 Component Reusability

Instead of repeating styles in every section, shared UI lives in `src/components/ui/`:

| Component | Used in |
|---|---|
| `Badge` | About, Services, WhyUs, Testimonials, Contact |
| `Button` | Navbar, Hero, Contact |
| `Card` | About, Services, WhyUs, Testimonials |
| `SectionHeading` | Services, WhyUs, Testimonials |

---

## 📱 Responsive Breakpoints

- **Desktop:** 1025px and above
- **Tablet:** 769px – 1024px
- **Mobile:** up to 768px

---

## 🛠 Tech Stack
- React 18
- Pure CSS-in-JS (no external UI libraries)
- Google Fonts (Space Grotesk + Inter)
- Formspree-ready contact form

---

## 📝 Project Description (for submission)

NexaCore is a modern, fully responsive landing page concept for a fictional cloud/AI infrastructure company, built with React.js. The project demonstrates component-based architecture with a shared UI primitives layer (`Badge`, `Button`, `Card`, `SectionHeading`) reused across all eight sections — Navbar, Hero, About, Services, Why Choose Us, Testimonials, Contact, and Footer. The design uses a dark, indigo/teal color theme with a canvas-based animated particle background in the hero section, and is fully responsive across mobile, tablet, and desktop breakpoints.
