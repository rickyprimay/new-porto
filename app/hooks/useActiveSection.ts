import { useEffect, useState } from "react";

const SECTION_IDS = ["hero", "about", "experience", "projects", "cv", "contact"];

/**
 * Tracks which section is currently visible in the viewport.
 * Uses the "middle of screen" heuristic + "bottom of page" check.
 */
export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    let timeoutId: number | null = null;

    const checkActiveSection = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // 1. If we are at the very bottom of the page, select the last section
      if (scrollY + viewportHeight >= docHeight - 10) {
        setActiveSection(SECTION_IDS[SECTION_IDS.length - 1]);
        return;
      }

      // 2. Otherwise, find the section that contains the middle of the viewport
      const viewportMiddle = scrollY + (viewportHeight / 3); // Biased slightly towards top (1/3) for better feel

      // Iterate through sections to find the one containing the target point
      for (const id of SECTION_IDS) {
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          // Check if viewportMiddle is within this section's vertical range
          if (viewportMiddle >= offsetTop && viewportMiddle < offsetBottom) {
            setActiveSection(id);
            break; // Found the active section, stop searching
          }
        }
      }
    };

    const handleScroll = () => {
      if (timeoutId) return;
      timeoutId = window.setTimeout(() => {
        checkActiveSection();
        timeoutId = null;
      }, 50); // Slightly more responsive
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    checkActiveSection();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  return activeSection;
}

export { SECTION_IDS };
