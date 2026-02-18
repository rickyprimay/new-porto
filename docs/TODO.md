# TODO — Implementation Checklist

> **Legend:** S = Small (~30 min), M = Medium (~1–2 hr), L = Large (~2–4 hr)
> Dependencies are listed as `→ depends on [task]`

---

## Milestone 1 — Foundation & Infrastructure

- [ ] **[S]** Create folder structure as per `ARCHITECTURE.md`
- [ ] **[S]** Install dependencies: `framer-motion`, Google Fonts setup → depends on folder structure
- [ ] **[M]** Create `styles/globals.css` with CSS custom properties (colors, typography, spacing) → depends on folder structure
- [ ] **[S]** Create `data/profile.ts` with placeholder profile data → depends on folder structure
- [ ] **[S]** Create `data/experiences.ts` with placeholder work experience data → depends on folder structure
- [ ] **[S]** Create `data/projects.ts` with placeholder project data → depends on folder structure

---

## Milestone 2 — Core Parallax Framework

- [ ] **[M]** Build `hooks/useScrollProgress.ts` — returns 0–1 scroll progress for a ref'd element → depends on M1
- [ ] **[S]** Build `hooks/useInView.ts` — IntersectionObserver wrapper → depends on M1
- [ ] **[M]** Build `hooks/useActiveSection.ts` — tracks which section is in viewport → depends on `useInView`
- [ ] **[L]** Build `components/ParallaxSection.tsx` — sticky wrapper with scroll-linked animation support → depends on `useScrollProgress`
- [ ] **[M]** Build `components/AnimatedText.tsx` — scroll-triggered text reveal component → depends on `useInView`
- [ ] **[S]** Build `components/Container.tsx` — max-width centered container → depends on M1
- [ ] **[S]** Build `utils/motion.ts` — shared Framer Motion animation variants → depends on M1

---

## Milestone 3 — Navigation

- [ ] **[M]** Build `components/Navbar.tsx` — fixed nav with transparent→solid transition → depends on `useActiveSection`
- [ ] **[S]** Build `components/SectionIndicator.tsx` — side dot indicator for active section → depends on `useActiveSection`
- [ ] **[S]** Implement smooth scroll-to-section on nav link click → depends on Navbar

---

## Milestone 4 — Page Sections

### 4.1 Hero Section
- [ ] **[M]** Build `sections/Hero/Hero.tsx` — full-viewport layout with animated text → depends on `ParallaxSection`, `AnimatedText`
- [ ] **[S]** Style `sections/Hero/Hero.css` — background gradient, typography, scroll indicator → depends on Hero.tsx

### 4.2 About Section
- [ ] **[M]** Build `sections/About/About.tsx` — bio, skills chips, philosophy → depends on `ParallaxSection`, profile data
- [ ] **[S]** Style `sections/About/About.css` → depends on About.tsx

### 4.3 Work Experience Section (NEW)
- [ ] **[M]** Build `sections/WorkExperience/ExperienceCard.tsx` — single experience entry card → depends on experiences data
- [ ] **[L]** Build `sections/WorkExperience/WorkExperience.tsx` — timeline layout with staggered entry → depends on `ExperienceCard`, `ParallaxSection`
- [ ] **[M]** Style `sections/WorkExperience/WorkExperience.css` — timeline line, cards, responsive → depends on WorkExperience.tsx

### 4.4 Projects Section
- [ ] **[M]** Build `sections/Projects/ProjectCard.tsx` — project card with image, tags, links → depends on projects data
- [ ] **[L]** Build `sections/Projects/Projects.tsx` — responsive grid with staggered entry → depends on `ProjectCard`, `ParallaxSection`
- [ ] **[M]** Style `sections/Projects/Projects.css` — grid, hover effects, responsive → depends on Projects.tsx

### 4.5 CV Section
- [ ] **[M]** Build `sections/CV/CV.tsx` — education, skills, download button → depends on profile data, `ParallaxSection`
- [ ] **[S]** Style `sections/CV/CV.css` — two-column layout, download CTA glow → depends on CV.tsx

### 4.6 Contact Section
- [ ] **[M]** Build `sections/Contact/Contact.tsx` — email, social links, optional form → depends on profile data
- [ ] **[S]** Style `sections/Contact/Contact.css` — centered layout, icon animations → depends on Contact.tsx

---

## Milestone 5 — Page Assembly

- [ ] **[M]** Wire all sections into `routes/home.tsx` in correct order → depends on all M4 sections
- [ ] **[S]** Add SEO meta tags (`<title>`, `<meta>`, Open Graph) in `root.tsx` → depends on home.tsx
- [ ] **[S]** Add `prefers-reduced-motion` fallback styles → depends on globals.css

---

## Milestone 6 — Polish & Responsive

- [ ] **[M]** Mobile responsive pass — test all sections at 375px, 768px, 1024px, 1440px → depends on M5
- [ ] **[S]** Mobile navigation (hamburger menu + drawer) → depends on Navbar
- [ ] **[M]** Accessibility audit — keyboard nav, ARIA labels, contrast → depends on M5
- [ ] **[S]** Add lazy loading for project images → depends on Projects section
- [ ] **[S]** Touch device parallax simplification → depends on parallax framework

---

## Milestone 7 — Verification

- [ ] **[S]** Run dev server and visual test all sections → depends on M6
- [ ] **[S]** Run `npm run build` — verify no TypeScript / build errors → depends on M6
- [ ] **[S]** Browser test: Chrome, Firefox, Safari → depends on build
- [ ] **[S]** Verify scroll performance (no jank on mid-range device) → depends on build
