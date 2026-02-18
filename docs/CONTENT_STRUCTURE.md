# Content Structure — Section Order & Behavior

## Section Flow

```
 ┌──────────────────────────────────────────────────┐
 │  1. HERO                                         │
 │  Full-viewport · pinned · text reveal animation  │
 ├──────────────────────────────────────────────────┤
 │  2. ABOUT                                        │
 │  Slides up over Hero · bio + skills              │
 ├──────────────────────────────────────────────────┤
 │  3. WORK EXPERIENCE  (NEW)                       │
 │  Timeline/cards · staggered entry                │
 ├──────────────────────────────────────────────────┤
 │  4. PROJECTS                                     │
 │  Grid cards · hover interactions                 │
 ├──────────────────────────────────────────────────┤
 │  5. CV                                           │
 │  Education + skills + download CTA               │
 ├──────────────────────────────────────────────────┤
 │  6. CONTACT                                      │
 │  Links + optional form · footer                  │
 └──────────────────────────────────────────────────┘
```

---

## 1. Hero Section

### Content
- Full name (large, bold)
- Professional title / role
- One-line tagline or mission statement
- Animated scroll-down indicator

### Parallax Behavior
- **Pinned** for ~200vh of scroll
- Background: abstract gradient or subtle particle animation
- Text enters with staggered fade + slide-up on page load
- As user scrolls, text slowly fades out and scales slightly
- Background parallaxes (moves slower than scroll)

### Data Source
`data/profile.ts` → `name`, `title`, `tagline`

---

## 2. About Section

### Content
- Short bio paragraph (2–3 sentences)
- Key skills / tech stack (icon chips or badges)
- Professional philosophy or approach
- Optional: profile photo

### Parallax Behavior
- **Slides up** over the Hero section (card-over-card)
- Internal content uses **staggered fade-in** as it enters the viewport
- Background: solid dark with subtle gradient shift from Hero

### Data Source
`data/profile.ts` → `bio`, `skills[]`, `philosophy`

---

## 3. Work Experience Section (NEW)

### Content
- Section heading: "Work Experience" or "Career Journey"
- List of experience entries, each containing:
  - Company name
  - Role / job title
  - Date range (e.g., "Jan 2022 – Present")
  - Short description of responsibilities and achievements
  - Optional: company logo

### Parallax Behavior
- **Slides up** over About section
- Experience cards enter with **staggered slide-up + fade-in**
- Optional: vertical timeline line that draws/extends as user scrolls
- Each card animates in sequence (150ms stagger)

### Layout
- **Desktop:** timeline layout (alternating left/right or single column with line)
- **Mobile:** single-column stack

### Data Source
`data/experiences.ts` → `ExperienceEntry[]`

```ts
interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  description: string;
  logo?: string;
}
```

---

## 4. Projects Section

### Content
- Section heading: "Projects" or "Featured Work"
- Project cards, each containing:
  - Project name
  - Screenshot or thumbnail
  - Short description
  - Tech stack tags
  - Links (live demo, GitHub)

### Parallax Behavior
- **Slides up** over Work Experience section
- Cards enter with **staggered scale + fade-in**
- Hover: subtle lift + shadow + border glow

### Layout
- **Desktop:** 2–3 column responsive grid
- **Tablet:** 2 columns
- **Mobile:** single column

### Data Source
`data/projects.ts` → `ProjectEntry[]`

```ts
interface ProjectEntry {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}
```

---

## 5. CV Section

### Content
- Section heading: "Curriculum Vitae" or "Education & Skills"
- Education entries (degree, institution, year)
- Certifications (name, issuer, year)
- Technical skills grouped by category
- Download CV button (links to PDF in `/public/assets/`)

### Parallax Behavior
- **Slides up** over Projects section
- Content appears with **fade-in** (no complex animation — keep it clean and readable)
- Download button has a subtle glow/pulse to draw attention

### Layout
- **Desktop:** two-column (education left, skills right)
- **Mobile:** stacked single column

### Data Source
`data/profile.ts` → `education[]`, `certifications[]`, `technicalSkills{}`

---

## 6. Contact Section

### Content
- Section heading: "Get In Touch" or "Let's Connect"
- Email address (clickable `mailto:` link)
- Social links (GitHub, LinkedIn, Twitter/X)
- Optional: simple contact form (name, email, message)
- Copyright footer

### Parallax Behavior
- **Slides up** over CV section
- Minimal animation — clean, focused
- Social icons enter with **staggered fade-in**
- Background: slightly lighter or gradient shift to signal end of page

### Data Source
`data/profile.ts` → `email`, `socialLinks{}`

---

## Navigation (overlay)

| Element          | Behavior                                                                 |
| ---------------- | ------------------------------------------------------------------------ |
| Logo / Name      | Links to `#hero`, always visible                                         |
| Section links    | Smooth-scroll to `#about`, `#experience`, `#projects`, `#cv`, `#contact` |
| Active indicator | Dot or underline on the currently visible section                        |
| Background       | Transparent → `backdrop-filter: blur` on scroll                          |
| Mobile           | Hamburger menu → slide-out drawer                                        |
