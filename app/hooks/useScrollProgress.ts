import { useRef, useEffect, useState } from "react";

/**
 * Returns a 0–1 scroll progress value for a ref'd element.
 * 0 = element's top has just entered the viewport bottom
 * 1 = element's bottom has just left the viewport top
 * 
 * @param offset - extra scroll distance multiplier (for sticky sections)
 */
export function useScrollProgress(offset: number = 1) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    let rafId: number;

    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementHeight = rect.height * offset;

        // Calculate progress: 0 when top enters viewport, 1 when bottom leaves
        const scrolled = windowHeight - rect.top;
        const total = windowHeight + elementHeight;
        const currentProgress = Math.min(Math.max(scrolled / total, 0), 1);

        setProgress(currentProgress);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial calculation

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [offset]);

  return { ref, progress };
}
