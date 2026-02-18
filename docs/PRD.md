# PRD — Parallax Portfolio Website

## 1. Product Overview & Goals

A modern, scroll-driven parallax portfolio website built with React + TypeScript, inspired by the [Dongwon ESG About page](https://www.dongwon.com/kr/esg/about). The site tells the owner's professional story through immersive, section-based scroll animations — each section pinning and transitioning into the next like layered cards.

### Goals

| # | Goal | Measure |
|---|------|---------|
| 1 | Showcase professional identity through immersive storytelling | Visitor engagement > 60 s avg session |
| 2 | Present CV, Projects, and Work Experience in a visually compelling format | All 3 sections accessible within 2 scrolls from hero |
| 3 | Deliver a performant, accessible, SEO-optimized single-page experience | Lighthouse ≥ 90 on all categories |
| 4 | Create a scalable codebase for future content additions | Feature-based architecture, reusable section components |

---

## 2. Target Users

| Persona | Need |
|---------|------|
| **Recruiters / Hiring Managers** | Quickly scan CV, work experience, and projects |
| **Potential Clients** | Evaluate technical capability and design taste |
| **Peers / Developers** | View projects and tech stack |
| **General Visitors** | Enjoy a visually engaging personal brand experience |

---

## 3. Key Pages / Sections

This is a **single-page application** with six scroll-driven sections:

| Order | Section | Status | Description |
|-------|---------|--------|-------------|
| 1 | **Hero** | Required | Full-viewport intro with name, role, and tagline |
| 2 | **About** | Required | Personal bio, skills summary, profile image |
| 3 | **Work Experience** | **NEW — Required** | Professional timeline with company, role, dates, descriptions |
| 4 | **Projects** | **Existing — Must remain visible** | Portfolio grid/cards showcasing projects |
| 5 | **CV** | **Existing — Must remain visible** | Downloadable CV, education, certifications |
| 6 | **Contact** | Required | Contact form or links (email, LinkedIn, GitHub) |

> [!IMPORTANT]
> **CV must remain visible and accessible** — it is an existing feature that must not be removed.
> **Projects must remain visible and accessible** — it is an existing feature that must not be removed.
> **Work Experience is a new required section** — professional timeline/cards showing career history.

---

## 4. UX Principles

### 4.1 Parallax Storytelling
- Each section occupies a full viewport or more
- Sections pin (sticky) while internal content animates, then un-pin to reveal the next section sliding up from beneath
- Background layers move at different speeds to create depth

### 4.2 Section-Based Navigation
- Fixed navigation bar with smooth scroll-to-section links
- Active section indicator updates as the user scrolls
- Navigation transitions from transparent (hero) to solid/blurred on scroll

### 4.3 Progressive Disclosure
- Content reveals sequentially within each section (staggered fade/slide-in)
- Avoids overwhelming the user with all information at once
- Each section tells a focused piece of the story

### 4.4 Mobile-First Responsiveness
- Parallax effects gracefully degrade on mobile (reduce or disable on touch devices)
- Touch-friendly navigation and interactions
- Content remains fully accessible regardless of device

---

## 5. Functional Requirements

| ID | Requirement |
|----|-------------|
| FR-01 | Full-viewport hero section with animated text entry |
| FR-02 | Sticky/pinned section transitions (card-over-card reveal) |
| FR-03 | Scroll-driven animations (fade, slide, scale) per section |
| FR-04 | Fixed navigation bar with active-section highlighting |
| FR-05 | Work Experience timeline with chronological career entries |
| FR-06 | Projects grid with cards (image, title, tech stack, links) |
| FR-07 | CV section with education, skills, downloadable PDF |
| FR-08 | Contact section with email link, social links, optional form |
| FR-09 | Smooth scrolling between sections via nav links |
| FR-10 | Responsive layout across desktop, tablet, mobile |

---

## 6. Non-Functional Requirements

### 6.1 Performance
- Lighthouse Performance score ≥ 90
- No layout shifts during scroll animations (`will-change`, `transform`-only animations)
- Lazy-load images and heavy assets
- Use `IntersectionObserver` or scroll-position-based triggers (no `scroll` event flooding)

### 6.2 Accessibility
- Lighthouse Accessibility score ≥ 90
- All sections navigable by keyboard (Tab / Enter)
- `prefers-reduced-motion` support — disable parallax for users who request it
- Semantic HTML landmarks (`<header>`, `<main>`, `<section>`, `<footer>`)
- ARIA labels on interactive elements
- Sufficient color contrast (WCAG AA)

### 6.3 SEO
- Lighthouse SEO score ≥ 90
- Proper `<title>`, `<meta description>`, Open Graph tags
- Semantic heading hierarchy (`<h1>` → `<h2>` → `<h3>`)
- Server-side rendering via React Router v7 SSR

---

## 7. Success Metrics

| Metric | Target |
|--------|--------|
| Lighthouse Performance | ≥ 90 |
| Lighthouse Accessibility | ≥ 90 |
| Lighthouse SEO | ≥ 90 |
| Average Session Duration | ≥ 60 seconds |
| Scroll Depth | ≥ 80% of visitors reach Contact section |
| Mobile Usability | No mobile-specific errors |

---

## 8. Out of Scope

- Blog / CMS functionality
- User authentication
- Backend API integration
- Analytics dashboard
- Multi-language (i18n) support
- Dark/light theme toggle (may be added later)
- Content management system

---

## 9. Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Heavy scroll animations cause jank on low-end devices | Poor UX, high bounce rate | Use GPU-accelerated transforms only; test on throttled CPU; provide `prefers-reduced-motion` fallback |
| Parallax breaks on mobile Safari / touch devices | UX degradation on iOS | Detect touch devices; simplify or disable parallax; test on real iOS devices |
| Content overload in CV / Projects sections | Users skip important content | Design concise cards; use progressive disclosure; prioritize visual hierarchy |
| SSR hydration mismatch with scroll-position-dependent animations | Console errors, flickering | Initialize animations client-side only; use `useEffect` for scroll listeners |
| Scope creep (adding features beyond v1) | Delayed delivery | Strict adherence to this PRD; defer non-essential features to v2 |
