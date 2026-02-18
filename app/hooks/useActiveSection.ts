import { useEffect, useState } from "react";

const SECTION_IDS = ["hero", "about", "experience", "projects", "cv", "contact"];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    let timeoutId: number | null = null;

    const checkActiveSection = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollY + viewportHeight >= docHeight - 10) {
        setActiveSection(SECTION_IDS[SECTION_IDS.length - 1]);
        return;
      }

      const viewportMiddle = scrollY + (viewportHeight / 3);

      for (const id of SECTION_IDS) {
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (viewportMiddle >= offsetTop && viewportMiddle < offsetBottom) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    const handleScroll = () => {
      if (timeoutId) return;
      timeoutId = window.setTimeout(() => {
        checkActiveSection();
        timeoutId = null;
      }, 50);
    };

    window.addEventListener("scroll", handleScroll);
    checkActiveSection();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  return activeSection;
}

export { SECTION_IDS };
