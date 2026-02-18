# Architecture — Parallax Portfolio

## 1. Architecture Pattern

**Feature-based + Shared UI** — each portfolio section is a self-contained feature module. Common UI primitives (animated wrappers, typography, buttons) live in a shared layer.

```
Feature Module = Component + styles + data + hooks
Shared UI      = Reusable primitives used across features
```

---

## 2. Folder Structure

```
porto/
├── app/
│   ├── root.tsx                    # Root layout (nav, scroll provider)
│   ├── routes.ts                   # Route definitions
│   ├── routes/
│   │   └── home.tsx                # Single-page route (all sections)
│   │
│   ├── components/                 # Shared UI components
│   │   ├── ParallaxSection.tsx     # Reusable sticky/pinned section wrapper
│   │   ├── AnimatedText.tsx        # Scroll-triggered text animation
│   │   ├── SectionIndicator.tsx    # Active section dot indicator
│   │   ├── Navbar.tsx              # Fixed navigation bar
│   │   └── Container.tsx           # Max-width centered container
│   │
│   ├── sections/                   # Feature modules (one per section)
│   │   ├── Hero/
│   │   │   ├── Hero.tsx
│   │   │   └── Hero.css
│   │   ├── About/
│   │   │   ├── About.tsx
│   │   │   └── About.css
│   │   ├── WorkExperience/
│   │   │   ├── WorkExperience.tsx
│   │   │   ├── ExperienceCard.tsx
│   │   │   └── WorkExperience.css
│   │   ├── Projects/
│   │   │   ├── Projects.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   └── Projects.css
│   │   ├── CV/
│   │   │   ├── CV.tsx
│   │   │   └── CV.css
│   │   └── Contact/
│   │       ├── Contact.tsx
│   │       └── Contact.css
│   │
│   ├── hooks/                      # Custom hooks
│   │   ├── useScrollProgress.ts    # Returns 0-1 scroll progress for an element
│   │   ├── useInView.ts            # IntersectionObserver wrapper
│   │   └── useActiveSection.ts     # Tracks which section is in viewport
│   │
│   ├── data/                       # Static content data
│   │   ├── experiences.ts          # Work experience entries
│   │   ├── projects.ts             # Project entries
│   │   └── profile.ts              # Bio, skills, contact info
│   │
│   ├── styles/                     # Global styles
│   │   └── globals.css             # CSS custom properties, resets, typography
│   │
│   └── utils/                      # Utility functions
│       └── motion.ts               # Animation presets / variants
│
├── public/
│   ├── assets/                     # Images, resume PDF
│   └── favicon.ico
│
├── docs/                           # Documentation (this folder)
├── package.json
├── tsconfig.json
├── vite.config.ts
└── react-router.config.ts
```

---

## 3. Routing Strategy

**Single-page with hash/scroll navigation** — the entire portfolio is one route (`/`). Sections are navigated via smooth-scroll anchors (`#hero`, `#about`, etc.).

- **React Router v7** handles the single route with SSR support
- No client-side route transitions needed — all content on one page
- Future: if a blog or project-detail pages are needed, add nested routes under `/blog/:slug` or `/projects/:id`

```tsx
// app/routes.ts
import { type RouteConfig } from "@react-router/dev/routes";
import { route } from "@react-router/dev/routes";

export default [
  route("/", "routes/home.tsx"),
] satisfies RouteConfig;
```

---

## 4. State Management

**Minimal — no external state library needed.**

| State                                 | Solution                                             |
| ------------------------------------- | ---------------------------------------------------- |
| Active section (for nav highlighting) | `useActiveSection` hook using `IntersectionObserver` |
| Scroll progress (for animations)      | `useScrollProgress` hook reading scroll position     |
| Static content data                   | TypeScript modules in `data/` — no runtime state     |
| Form state (Contact)                  | Local `useState` or uncontrolled form                |

Rationale: This is a content-driven portfolio with no user-generated data, authentication, or complex async flows. React's built-in hooks are more than sufficient.

---

## 5. Styling Strategy

- **Vanilla CSS** with CSS custom properties for design tokens (colors, spacing, typography)
- **CSS Modules or scoped CSS** per section to avoid conflicts
- **No Tailwind** for the component styles — the existing Tailwind setup will only be used if needed for utility classes
- Responsive design via CSS media queries and `clamp()` for fluid typography

---

## 6. Scalability Strategy

| Concern                     | Strategy                                                                                                                         |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Adding new sections         | Create a new folder in `sections/`, register in `home.tsx` — follows the pattern of existing sections                            |
| Adding project-detail pages | Add routes under `/projects/:id` with React Router                                                                               |
| Content updates             | Edit TypeScript data files in `data/` — no build changes needed                                                                  |
| Animation library swap      | All animation logic isolated in `hooks/` and `utils/motion.ts` — swap Framer Motion for GSAP without touching section components |
| Performance at scale        | Lazy-load below-fold sections with `React.lazy` + `Suspense`                                                                     |
