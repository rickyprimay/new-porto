# Design Reference — Dongwon ESG About Page

## 1. Reference

**URL:** [https://www.dongwon.com/kr/esg/about](https://www.dongwon.com/kr/esg/about)

This page serves as the primary visual and interaction reference for the portfolio parallax website.

---

## 2. Key UI Patterns to Replicate

### 2.1 Hero — Immersive Full-Screen Entry

| Aspect      | Dongwon Pattern                                        | Portfolio Adaptation                               |
| ----------- | ------------------------------------------------------ | -------------------------------------------------- |
| Layout      | Full-viewport, background scenic image with fog        | Full-viewport, gradient or abstract background     |
| Typography  | Very large bold text (~60–80px), staggered positioning | Large bold name/title, animated tagline            |
| Color       | White text on dark/image background                    | White or accent text on dark gradient              |
| Animation   | Text fades/slides in on page load                      | Similar — staggered text reveal with Framer Motion |
| Scroll hint | Subtle downward indicator                              | Animated scroll-down chevron                       |

### 2.2 Sticky Panel Transitions

| Aspect        | Dongwon Pattern                                                             | Portfolio Adaptation                                     |
| ------------- | --------------------------------------------------------------------------- | -------------------------------------------------------- |
| Mechanism     | Section stays pinned while content animates, next section slides up over it | Same — `position: sticky` with scroll spacers            |
| Visual effect | Card-over-card stacking — new section covers the old                        | Same — z-index layering with background contrast changes |
| Duration      | ~200vh of scroll per pinned section                                         | Configurable via `pinDuration` prop                      |

### 2.3 Scroll-Driven Content Reveals

| Aspect     | Dongwon Pattern                                               | Portfolio Adaptation                       |
| ---------- | ------------------------------------------------------------- | ------------------------------------------ |
| Text entry | Fade-in + translate-Y (20–50px), triggered by scroll position | Identical — `useInView` or scroll progress |
| Staggering | Multiple text blocks animate sequentially                     | Same — `staggerChildren: 0.15`             |
| Background | Subtle scale-up (1 → 1.1) as section scrolls                  | Same for hero and key sections             |

### 2.4 Navigation Bar

| Aspect         | Dongwon Pattern                            | Portfolio Adaptation                                |
| -------------- | ------------------------------------------ | --------------------------------------------------- |
| Initial state  | Transparent, positioned over hero image    | Transparent with white text                         |
| Scrolled state | Solid background (white/dark), slight blur | Semi-transparent dark with `backdrop-filter: blur`  |
| Transition     | Smooth opacity/background-color transition | Same — CSS transition on scroll threshold           |
| Links          | Text links with active indicator           | Section names with underline/dot for active section |

### 2.5 Content Cards

| Aspect      | Dongwon Pattern                                | Portfolio Adaptation             |
| ----------- | ---------------------------------------------- | -------------------------------- |
| Layout      | Large heading + paragraph description per card | Same for Work Experience entries |
| Iconography | Simple icons paired with headings              | Tech stack icons for Projects    |
| Hover       | Subtle elevation / color shift                 | Scale + shadow on project cards  |

---

## 3. Typography System

| Level           | Dongwon                                     | Portfolio                                  |
| --------------- | ------------------------------------------- | ------------------------------------------ |
| Hero title      | ~70px, bold 800, sans-serif                 | `clamp(2.5rem, 6vw, 5rem)`, weight 800     |
| Section heading | ~48px, bold 700                             | `clamp(2rem, 4vw, 3.5rem)`, weight 700     |
| Sub-heading     | ~24px, semi-bold 600                        | `clamp(1.25rem, 2vw, 1.75rem)`, weight 600 |
| Body text       | ~16–18px, regular 400, generous line-height | `1rem–1.125rem`, line-height 1.7           |
| Caption / meta  | ~14px, regular/light                        | `0.875rem`, weight 400                     |

**Font choice:** Use `Inter` or `Outfit` from Google Fonts for clean, modern aesthetics.

---

## 4. Color Palette

| Token                    | Hex       | Usage                         |
| ------------------------ | --------- | ----------------------------- |
| `--color-bg-primary`     | `#0a0a0a` | Main dark background          |
| `--color-bg-secondary`   | `#111827` | Section alternate background  |
| `--color-bg-card`        | `#1a1a2e` | Card backgrounds              |
| `--color-text-primary`   | `#f5f5f5` | Primary text                  |
| `--color-text-secondary` | `#94a3b8` | Secondary / muted text        |
| `--color-accent`         | `#6366f1` | Buttons, links, active states |
| `--color-accent-glow`    | `#818cf8` | Hover / glow effects          |
| `--color-border`         | `#1e293b` | Subtle borders                |

---

## 5. Spacing & Layout

| Token                   | Value                    | Usage                        |
| ----------------------- | ------------------------ | ---------------------------- |
| `--section-padding-y`   | `clamp(4rem, 8vh, 8rem)` | Vertical padding per section |
| `--section-padding-x`   | `clamp(1rem, 5vw, 6rem)` | Horizontal padding           |
| `--container-max-width` | `1200px`                 | Content max width            |
| `--card-gap`            | `2rem`                   | Gap between cards            |
| `--card-border-radius`  | `1rem`                   | Card corner radius           |

---

## 6. Visual Effects

| Effect                     | Implementation                                                     |
| -------------------------- | ------------------------------------------------------------------ |
| Glassmorphism (nav, cards) | `background: rgba(10,10,10,0.7); backdrop-filter: blur(12px)`      |
| Gradient overlays          | `linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)`   |
| Glow accents               | `box-shadow: 0 0 30px rgba(99,102,241,0.3)`                        |
| Image overlays             | `background: linear-gradient(to bottom, transparent 50%, #0a0a0a)` |
