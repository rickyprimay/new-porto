# Parallax System — Technical Design

## 1. Overview

The parallax system creates an immersive, scroll-driven storytelling experience where sections pin to the viewport, animate their internal content, then release to reveal the next section sliding up from beneath — inspired by the [Dongwon ESG About page](https://www.dongwon.com/kr/esg/about).

---

## 2. How Parallax Sections Work

### 2.1 The "Sticky Stack" Pattern

Each major section uses a **sticky positioning** approach:

```
┌─────────────────────────────────┐
│         VIEWPORT                │
│  ┌───────────────────────────┐  │
│  │  Section A (sticky)       │  │  ← Pinned, content animates
│  │  - text fades in          │  │
│  │  - background moves slow  │  │
│  └───────────────────────────┘  │
│                                 │
│  ┌───────────────────────────┐  │
│  │  Section B (below)        │  │  ← Slides up and covers A
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

**How it works:**
1. Each section has `position: sticky; top: 0` and occupies at least `100vh`
2. A **scroll spacer** (`200vh`–`300vh`) after each section provides room for the pin duration
3. As the user scrolls through the spacer, the section stays pinned and internal content animates based on scroll progress (0 → 1)
4. When the spacer ends, the next section naturally scrolls up and covers the pinned one

### 2.2 Scroll Progress Calculation

```tsx
// Simplified: measure how far through the "pin zone" the user has scrolled
const progress = (scrollY - sectionTop) / (sectionHeight - viewportHeight);
// progress: 0 = section just entered, 1 = section about to leave
```

This `progress` value (0–1) drives all internal animations.

---

## 3. Scroll Behavior

### 3.1 Smooth Scrolling
- `html { scroll-behavior: smooth }` for nav-link clicks
- No scroll hijacking — natural browser scrolling preserved
- No scroll snapping (let the user scroll freely)

### 3.2 Touch Device Handling
- On touch devices / mobile: **simplify** parallax to basic fade-in on scroll
- Detect via `(pointer: coarse)` media query or `'ontouchstart' in window`
- Avoid heavy transforms that cause mobile browser repaints

### 3.3 Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
  .parallax-section { position: relative !important; } /* un-pin */
}
```

---

## 4. Animation Strategy — Framer Motion

### Why Framer Motion over GSAP
| Factor                   | Framer Motion                     | GSAP + ScrollTrigger          |
| ------------------------ | --------------------------------- | ----------------------------- |
| React integration        | Native — `motion` components      | Requires refs + `useEffect`   |
| Bundle size              | ~30 KB (tree-shaken)              | ~45 KB (core + ScrollTrigger) |
| SSR compatibility        | Built-in (delays until hydration) | Manual setup needed           |
| Learning curve           | Low (declarative API)             | Medium (imperative API)       |
| Scroll-linked animations | `useScroll()` + `useTransform()`  | ScrollTrigger `scrub`         |

### Animation Patterns Used

#### 4.1 Fade + Slide Up (most common)
```tsx
const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
```

#### 4.2 Staggered Children
```tsx
const container = {
  visible: { transition: { staggerChildren: 0.15 } },
};
```

#### 4.3 Scale Background
```tsx
const { scrollYProgress } = useScroll({ target: ref });
const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
```

#### 4.4 Parallax Depth (different speeds)
```tsx
const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]); // slower layer
```

---

## 5. Core Component: `<ParallaxSection>`

```tsx
interface ParallaxSectionProps {
  id: string;                      // Section anchor ID
  children: React.ReactNode;       // Section content
  className?: string;
  pinDuration?: number;            // Multiplier for scroll spacer (default: 1)
  background?: "dark" | "light";   // Theme variant
}
```

This wrapper handles:
- `position: sticky` logic
- Scroll progress calculation via `useScroll`
- Passing `progress` to children via context or render prop
- Reduced-motion fallback (simple static layout)

---

## 6. Performance Notes

### Do ✅
- Use `transform` and `opacity` only (GPU composited, no layout/paint)
- Use `will-change: transform` on animated elements
- Use `IntersectionObserver` to skip animations for off-screen sections
- Throttle scroll calculations with `requestAnimationFrame`
- Lazy-load images below the fold

### Don't ❌
- Animate `width`, `height`, `top`, `left`, `margin`, `padding` (layout triggers)
- Read layout properties (`.offsetTop`, `.getBoundingClientRect()`) in scroll handlers without batching
- Attach heavy listeners to the `scroll` event — use Framer Motion's `useScroll` which is RAF-throttled
- Apply `filter` or `backdrop-filter` animations (expensive on mobile)

### Performance Budget
- Total JS bundle: < 200 KB gzipped
- First Contentful Paint: < 1.5 s
- Largest Contentful Paint: < 2.5 s
- Cumulative Layout Shift: < 0.1
- No dropped frames during scroll on mid-range devices
