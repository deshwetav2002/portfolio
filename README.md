# 🚀 Shwetav De — Premium Portfolio Website

A **world-class, cinematic portfolio** built with Next.js 14, Framer Motion, Three.js, GSAP, and Tailwind CSS. Designed with a futuristic cyberpunk aesthetic to impress recruiters at Google, OpenAI, and top startups.

## ✨ Features

- 🎬 **Cinematic Loading Screen** with progress animation
- 🌌 **Interactive Particle Canvas** with connecting lines
- 🖱️ **Custom Cursor** with glow and follow effect
- 📜 **Scroll Progress Bar** at top
- 🏠 **Hero Section** — typing animation, profile photo with spinning gradient border
- 👤 **About Section** — timeline layout, animated stats
- 🛠️ **Skills Section** — animated progress bars + skill cards
- 📦 **Projects Section** — 3D tilt cards with hover effects
- 🎓 **Experience / Resume Section** — education timeline + download CTA
- 📬 **Contact Section** — animated form + EmailJS ready
- 🎮 **Easter Egg** — Konami Code (↑↑↓↓←→←→BA) triggers surprise animation
- 🎵 **Music Toggle** — ambient background music button
- 🌐 **Fully Responsive** — Mobile, Tablet, Desktop
- ⚡ **SEO Optimized** — meta tags, Open Graph
- 🎨 **Noise Texture Overlay** — premium film grain effect

---

## 🛠️ Tech Stack

| Technology       | Purpose                        |
|-----------------|-------------------------------|
| Next.js 14      | React framework, App Router   |
| Tailwind CSS    | Utility-first styling         |
| Framer Motion   | Animations & transitions      |
| GSAP            | Advanced scroll animations    |
| Three.js / R3F  | 3D effects (extendable)       |
| React Icons     | Icon library                  |
| TypeAnimation   | Typewriter effect in Hero     |
| Lenis           | Smooth scroll (optional)      |
| EmailJS         | Contact form (plug-in ready)  |

---

## 📁 Folder Structure

```
portfolio/
├── public/
│   ├── images/
│   │   └── profile.jpg         ← YOUR PROFILE PHOTO (already added!)
│   ├── audio/
│   │   └── ambient.mp3         ← Add ambient music here (optional)
│   └── resume.pdf              ← YOUR RESUME (already added!)
├── src/
│   ├── app/
│   │   ├── layout.js           ← Root layout, fonts, metadata
│   │   └── page.js             ← Main page entry
│   ├── components/
│   │   ├── LoadingScreen.js    ← Cinematic loading
│   │   ├── CustomCursor.js     ← Glow cursor
│   │   ├── ScrollProgress.js   ← Top progress bar
│   │   ├── Navbar.js           ← Sticky navbar + mobile menu
│   │   ├── SectionTitle.js     ← Reusable animated section headers
│   │   ├── MusicToggle.js      ← Floating music button
│   │   ├── NoiseOverlay.js     ← Film grain overlay
│   │   └── Footer.js           ← Footer + Easter egg
│   ├── sections/
│   │   ├── HeroSection.js      ← Fullscreen hero
│   │   ├── AboutSection.js     ← Bio + timeline
│   │   ├── SkillsSection.js    ← Skills + progress bars
│   │   ├── ProjectsSection.js  ← Tilt project cards
│   │   ├── ExperienceSection.js← Education + resume
│   │   └── ContactSection.js   ← Contact form
│   └── styles/
│       └── globals.css         ← Design tokens + animations
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# 1. Navigate to the project
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

---

## 📦 Replacing Your Assets

### Profile Photo
```
Place your photo at: public/images/profile.jpg
→ Already added from your upload! ✅
→ Recommended: Square photo, minimum 400x400px
```

### Resume PDF
```
Place your resume at: public/resume.pdf
→ Already added from your upload! ✅
→ The "Download Resume" buttons link to this file
```

### Ambient Music (Optional)
```
Place an MP3 at: public/audio/ambient.mp3
→ Recommended: Lofi/ambient instrumental, ~3-5 min loop
→ Free sources: freemusicarchive.org, pixabay.com/music
```

---

## 🔗 Updating Social Links

Open `src/sections/HeroSection.js` and find the `SOCIAL` array:
```js
const SOCIAL = [
  { icon: FaGithub,   href: 'https://github.com/YOUR_USERNAME', ... },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/YOUR_PROFILE', ... },
  // ...
]
```
Also update links in `Navbar.js`, `Footer.js`, and `ContactSection.js`.

---

## 📧 Setting Up Contact Form (EmailJS)

1. Create free account at [emailjs.com](https://emailjs.com)
2. Create an Email Service (Gmail recommended)
3. Create an Email Template
4. Note your **Service ID**, **Template ID**, and **Public Key**

5. Install EmailJS: `npm install @emailjs/browser`

6. In `src/sections/ContactSection.js`, find the comment block and replace:
```js
import emailjs from '@emailjs/browser'

// Inside handleSubmit:
await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  {
    from_name: form.name,
    from_email: form.email,
    subject: form.subject,
    message: form.message,
  },
  'YOUR_PUBLIC_KEY'
)
```

---

## 🌐 Deployment on Vercel

### Option 1: One-Click Deploy
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from project root
vercel

# Follow prompts → your site will be live!
```

### Option 2: GitHub Integration
1. Push project to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repository
4. Click Deploy — it's automatic!

### Custom Domain
In Vercel Dashboard → Settings → Domains → Add your domain.

---

## 🎮 Easter Egg

Type the **Konami Code** on the keyboard:
```
↑ ↑ ↓ ↓ ← → ← → B A
```
A secret animation will appear! 🎉

---

## 🎨 Customization

### Colors (src/styles/globals.css)
```css
:root {
  --color-cyan:   #00f5ff;  /* Primary accent */
  --color-blue:   #0066ff;  /* Secondary accent */
  --color-purple: #7c3aed;  /* Tertiary accent */
  --color-pink:   #ff0080;  /* Highlight */
  --color-green:  #00ff88;  /* Success/status */
}
```

### Adding New Projects (src/sections/ProjectsSection.js)
```js
const PROJECTS = [
  {
    id: 7,  // increment
    title: 'Your New Project',
    desc: 'Description here',
    tags: ['React', 'Python'],
    github: 'https://github.com/...',
    demo: 'https://yoursite.com',
    accent: '#00f5ff',
    icon: '🚀',
    status: 'Live',  // or 'Completed'
  },
  // ...
]
```

---

## 📊 Performance Tips

- Images are automatically optimized by Next.js `Image` component
- Fonts are loaded via Google Fonts with `display=swap`
- Animations use GPU-accelerated CSS transforms
- Particle canvas uses `requestAnimationFrame` efficiently
- Lazy loading via `react-intersection-observer`

---

## 📄 License

MIT — Free to use and modify.

---

Built with ❤️ for Shwetav De | [shwetavde2002@gmail.com](mailto:shwetavde2002@gmail.com)
