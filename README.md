# Sameer Ranjan Nayak — Portfolio

A premium, fully responsive React portfolio for Sameer Ranjan Nayak.  
Built with **React 18 · Tailwind CSS · Framer Motion**.

---

## 📁 Folder Structure

```
portfolio/
├── public/
│   ├── index.html
│   └── Sameer_Ranjan_Nayak_Elite_Internship_CV_With_Certifications.pdf  ← PUT YOUR PDF HERE
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Timeline.jsx
│   │   ├── Highlights.jsx
│   │   ├── Resume.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── SectionWrapper.jsx
│   ├── data/
│   │   ├── projects.js
│   │   ├── skills.js
│   │   └── timeline.js
│   ├── hooks/
│   │   └── useTheme.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── package.json
```

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Add your photo (optional)
Place `me.jpg` in the `public/` folder.
Then update `Hero.jsx` to use `<img src="/me.jpg" ... />` instead of the emoji placeholder.

### 3. Add your resume PDF
Place your PDF at:
```
public/Sameer_Ranjan_Nayak_Elite_Internship_CV_With_Certifications.pdf
```

### 4. Set up the contact form
Sign up at [formspree.io](https://formspree.io), create a form, and paste your form ID into `src/components/Contact.jsx`:
```js
const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
```

### 5. Run locally
```bash
npm start
```
Opens at [http://localhost:3000](http://localhost:3000)

---

## 📦 Build for Production

```bash
npm run build
```
Creates an optimized `build/` folder.

---

## 🌐 Deploy to Vercel

### Method 1 — Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Method 2 — GitHub + Vercel Dashboard
1. Push this folder to a **GitHub repo**
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Framework: **Create React App**
5. Build Command: `npm run build`
6. Output Directory: `build`
7. Click **Deploy** ✅

---

## 🎨 Customisation Guide

| What to change         | Where                         |
|------------------------|-------------------------------|
| Projects               | `src/data/projects.js`        |
| Skills & levels        | `src/data/skills.js`          |
| Timeline events        | `src/data/timeline.js`        |
| Color palette          | `tailwind.config.js` + `index.css` |
| Fonts                  | `public/index.html` + `tailwind.config.js` |
| Social links           | `src/components/Contact.jsx`  |
| Hero text              | `src/components/Hero.jsx`     |
| Contact form endpoint  | `src/components/Contact.jsx`  |

---

## 🛠 Tech Stack

| Tool           | Purpose                        |
|----------------|--------------------------------|
| React 18       | UI framework                   |
| Tailwind CSS   | Utility-first styling          |
| Framer Motion  | Animations & transitions       |
| react-type-animation | Typewriter hero effect  |
| react-intersection-observer | Scroll reveals  |
| Formspree      | Contact form backend           |

---

## 📝 License
Personal use only. Content belongs to Sameer Ranjan Nayak.
