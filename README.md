# Ashraful Alam Omi — Portfolio

A premium, animated personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, and Three.js (via React Three Fiber). Static, no backend, no database — every piece of content lives in one file.

---

## 1. Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint    # ESLint (including React Compiler rules)
```

No environment variables or extra configuration are required to run this locally.

---

## 2. Folder structure

```
src/
  app/                # Next.js App Router: layout, page, sitemap, robots
  components/         # Reusable UI: Navbar, Footer, ThemeToggle, HeroCanvas, etc.
  sections/            # One file per homepage section (Hero, About, Skills, ...)
  data/portfolio.ts    # ⭐ ALL editable content lives here
  config/site.ts        # Site-wide SEO metadata (title, description, URL)
  lib/utils.ts           # Small shared helpers
public/                # Static assets — put resume.pdf, favicon.ico, og-image.png here
```

---

## 3. Editing content — the only file you need

Everything you see on the page — your bio, education, skills, projects, competitions,
achievements, and social links — is defined in **`src/data/portfolio.ts`**. Components
never contain hardcoded copy; they just render whatever is in this file.

### Update personal info / bio
Edit the `personal` object at the top of `portfolio.ts` (name, role, summary,
`aboutParagraphs`, social links, resume path, email).

### Add a new project
Add a new object to the `projects` array:

```ts
{
  slug: "my-new-project",           // unique, url-safe id
  title: "My New Project",
  category: "Web Development",
  description: "One or two sentence summary.",
  features: ["Feature one", "Feature two"],
  challenges: "The hardest part of building this.",
  learned: "What you took away from it.",
  stack: ["Next.js", "Tailwind CSS"],
  github: "https://github.com/you/repo",   // optional
  demo: "https://your-demo.vercel.app",     // optional
  featured: true,                            // optional, purely informational today
}
```
It will automatically appear as a card in the Projects grid — clicking it opens the
detail modal with the fields above.

### Update skills
Edit the `skills` array. Each category has a `skills` list of `{ name, level }` (level
is 0–100 and drives the animated progress bar).

### Update competitions
Edit the `competitions` array — it renders newest-first in the order you provide, so
keep the most recent entry at the top. `result` is optional (e.g. `"Winner"`, `"Top 5"`).

### Update experience / leadership
Edit the `experience` array — each entry becomes one item on the Experience timeline.

### Update education / certifications / achievements
Edit the `education`, `certifications`, and `achievements` arrays respectively.

After any edit, save the file — Next.js hot-reloads instantly in `npm run dev`.

---

## 4. Assets to add yourself

The following files are referenced but not included (add them to `public/`):

| File | Purpose |
|---|---|
| `public/resume.pdf` | Powers every "Download Resume" button (`personal.resumeUrl`) |
| `public/favicon.ico` | Browser tab icon |
| `public/og-image.png` | 1200×630 image used for social share previews (`config/site.ts` → `ogImage`) |

---

## 5. Theming

- Light mode is the default; dark mode is toggled from the navbar (sun/moon icon) and
  persisted via `next-themes` (`localStorage`), also respecting the OS preference on
  first visit.
- All colors are CSS variables defined in `src/app/globals.css` under `:root` (light)
  and `.dark` (dark) — edit the hex values there to re-theme the whole site in one
  place. The signature accent color is `--signal`.

---

## 6. Deployment

### Deploy to Vercel (recommended)
1. Push this repo to GitHub (see below).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset "Next.js" is auto-detected — no config changes needed.
4. Click **Deploy**.

Or from the CLI:
```bash
npm i -g vercel
vercel
```

### Push to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

---

## 7. Tech stack

- **Next.js 16** (App Router, TypeScript, static generation)
- **Tailwind CSS v4** for styling and design tokens
- **Framer Motion** for scroll reveals, page/section transitions, and the magnetic CTA buttons
- **Three.js + React Three Fiber** for the interactive particle-network hero background
- **next-themes** for light/dark mode with persistence
- **lucide-react** + **react-icons** for iconography
- Fully static — no database, no CMS, no auth, deployable as-is to Vercel or any Node host

---

## 8. Performance & SEO notes

- Fonts are self-hosted via the `geist` package (no external font requests).
- The hero's Three.js canvas is dynamically imported client-side only (`ssr: false`) so
  it never blocks the initial server-rendered paint.
- `sitemap.xml` and `robots.txt` are generated from `src/app/sitemap.ts` /
  `src/app/robots.ts` — update `siteConfig.url` in `src/config/site.ts` once you know
  your production domain.
- Structured data (`Person` JSON-LD) is emitted in `src/app/layout.tsx`.
- Respect for `prefers-reduced-motion` is built into `globals.css`.
