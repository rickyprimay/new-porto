import type { Variants, Transition } from "framer-motion";

/* ============================================
   SHARED FRAMER MOTION ANIMATION VARIANTS
   Premium Parallax Portfolio
   ============================================ */

/** Cinematic easing curves */
const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1]; // easeOutExpo-like
const quickEase: [number, number, number, number] = [0.4, 0, 0.2, 1]; // material ease

const defaultTransition: Transition = {
  duration: 0.9,
  ease: smoothEase,
};

const quickTransition: Transition = {
  duration: 0.5,
  ease: quickEase,
};

/* ───── FADE VARIANTS ───── */

/** Fade in + slide up from 50px below */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

/** Fade in + slide up from 80px below (larger movement for hero text) */
export const fadeInUpLarge: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...defaultTransition, duration: 1.1 },
  },
};

/** Fade in + slide from left */
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

/** Fade in + slide from right */
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

/** Simple fade in (no translation) */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: defaultTransition,
  },
};

/* ───── SCALE VARIANTS ───── */

/** Scale up from 0.92 + fade in */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: defaultTransition,
  },
};

/** Blur fade in — content reveals with blur removal */
export const blurFadeIn: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 30 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { ...defaultTransition, duration: 1 },
  },
};

/** Slide in + subtle scale */
export const slideInScale: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: defaultTransition,
  },
};

/* ───── STAGGER CONTAINERS ───── */

/** Container variant for staggering children */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

/** Fast stagger for lists */
export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

/** Slow stagger for hero elements */
export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};
