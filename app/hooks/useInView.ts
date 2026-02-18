import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * IntersectionObserver wrapper hook.
 * Returns a ref to attach to the target element and a boolean `inView`.
 */
export function useInView(options: UseInViewOptions = {}) {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = false } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        setInView(isIntersecting);

        // If triggerOnce, disconnect after first intersection
        if (isIntersecting && triggerOnce) {
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, inView };
}
