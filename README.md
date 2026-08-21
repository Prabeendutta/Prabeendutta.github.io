# Prabeen Dutta — Portfolio

A premium, dark-themed personal portfolio site for a Senior DevOps Engineer / SRE, built as a
plain **HTML + CSS + JavaScript** static site — no build step, no framework, no npm install required.

**Live design concept:** the whole site is styled like an infrastructure status dashboard —
pulsing "operational" indicators, a monospace metrics bar, a deployment-log-style experience
timeline, and service-registry-style skill cards. It's not decoration for its own sake — every
device on the page ties back to the actual work (uptime, incidents resolved, automation %).

---

## 1. Folder structure

```
portfolio-site/
├── index.html                 # all page content & structure
├── assets/
│   ├── css/
│   │   └── style.css          # entire design system (colors, type, layout, animations)
│   ├── js/
│   │   └── main.js            # scroll reveal, mobile nav, typing effect, active-link tracking
│   └── resume/
│       └── Prabeen_Dutta_Resume.pdf   # powers the "Download Résumé" buttons
├── .gitignore
└── README.md                  # this file
```

Because there's no build step, this repo IS the deployable site — what you see locally is
exactly what ships.

---

## 2. Run it locally

You don't need Node, npm, or any tooling. Any of these work:

**Option A — just open the file**
Double-click `index.html`, or right-click → "Open with" your browser.

**Option B — local server (recommended, avoids browser file:// quirks)**
```bash
cd portfolio-site
python3 -m http.server 8080
# then open http://localhost:8080
```
or, if you have Node installed:
```bash
npx serve .
```

---

## 3. Customize content

| What you want to change            | Where to edit                                  |
|-------------------------------------|-------------------------------------------------|
| Any text (name, bio, roles, bullets)| `index.html` — it's plain semantic HTML, search for the section by its `<!-- ===== SECTION ===== -->` comment |
| Colors, fonts, spacing, animations  | `assets/css/style.css` — all tokens are CSS variables at the top (`:root { --bg, --accent-blue, ... }`) |
| Scroll-reveal / typing effect / nav behavior | `assets/js/main.js` |
| Résumé file                         | Replace `assets/resume/Prabeen_Dutta_Resume.pdf` with your latest file — keep the same filename, or update the two `href` links in `index.html` that point to it |
| Rotating hero roles                 | `assets/js/main.js` → the `roles` array near the bottom |

To swap the accent color scheme, only 3 variables matter:
```css
--accent-blue: #4f8cff;
--accent-violet: #8b7bff;
--accent-green: #22d3a5;
```

---

## 4. Push to GitHub

```bash
cd portfolio-site
git init
git add .
git commit -m "Initial commit: portfolio site"
git branch -M main
git remote add origin https://github.com/Prabeendutta/portfolio.git
git push -u origin main
```
(Create the empty `portfolio` repo on GitHub first at https://github.com/new — don't initialize
it with a README, since your local repo already has one.)

---

## 5. Deploy — pick one

### Option A: GitHub Pages (free, zero config, ties directly to your GitHub)
1. In your repo on GitHub, go to **Settings → Pages**.
2. Under "Build and deployment", set **Source** to `Deploy from a branch`.
3. Set **Branch** to `main` and folder to `/ (root)`. Save.
4. Wait ~1 minute — your site goes live at:
   `https://prabeendutta.github.io/portfolio/`
5. Optional: add a custom domain (e.g. `projtrunks.xyz`) under the same Pages settings —
   GitHub will show you the DNS records to add at your domain registrar.

### Option B: Vercel (free, fast, great for custom domains)
1. Go to https://vercel.com and sign in with your GitHub account.
2. Click **Add New → Project**, select your `portfolio` repo.
3. Framework preset: choose **"Other"** (it's a static site — no build command needed).
4. Leave **Build Command** and **Output Directory** blank, or set Output Directory to `.`
5. Click **Deploy**. You'll get a live URL like `portfolio-prabeendutta.vercel.app` in ~30 seconds.
6. To use `projtrunks.xyz`: **Project → Settings → Domains** → add the domain → follow the DNS
   instructions shown (usually one `A` record or `CNAME`).

### Option C: Netlify (also free, drag-and-drop friendly)
1. Go to https://app.netlify.com/drop
2. Drag the whole `portfolio-site` folder onto the page. That's it — instant live URL.
3. For ongoing GitHub-linked deploys instead, use **Add new site → Import an existing project**.

---

## 6. Before you go live — checklist

- [ ] Confirm `assets/resume/Prabeen_Dutta_Resume.pdf` is your latest résumé version
- [ ] Double-check LinkedIn, GitHub, email, and phone links in the Contact section
- [ ] If `projtrunks.xyz` isn't live yet, either remove that contact card in `index.html` or
      point it somewhere real
- [ ] Test the mobile menu and dark-mode contrast on an actual phone, not just browser dev tools
- [ ] Run a quick Lighthouse audit in Chrome DevTools (Performance/Accessibility/SEO) once deployed

---

## 7. Tech notes

- **No build tooling** — this was a deliberate choice for reliability and speed: zero dependency
  drift, instant deploys, nothing to `npm install`.
- **Fonts**: Space Grotesk (display), Inter (body), JetBrains Mono (data/labels) — loaded from
  Google Fonts via `<link>` in `index.html`. Requires internet at page-load (standard for any
  Google Fonts usage); swap to self-hosted `.woff2` files under `assets/fonts/` if you need
  fully offline capability.
- **Animations** respect `prefers-reduced-motion` — users with that OS setting get the content
  instantly, no motion.
- **Accessibility**: skip-link, visible focus states, semantic landmarks (`<header>`, `<main>`,
  `<footer>`), `aria-live` on the typing effect, `aria-expanded` on the mobile menu toggle.
