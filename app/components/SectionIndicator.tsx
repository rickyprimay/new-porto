import { motion } from "framer-motion";
import { useActiveSection, SECTION_IDS } from "~/hooks/useActiveSection";
import "./SectionIndicator.css";

const SECTION_LABELS: Record<string, string> = {
  hero: "Home",
  about: "About",
  experience: "Experience",
  projects: "Projects",
  cv: "CV",
  contact: "Contact",
};

export function SectionIndicator() {
  const activeSection = useActiveSection();

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="section-indicator" role="navigation" aria-label="Section navigation">
      {SECTION_IDS.map((id) => (
        <button
          key={id}
          className={`section-indicator__dot ${activeSection === id ? "section-indicator__dot--active" : ""}`}
          onClick={() => handleClick(id)}
          aria-label={`Go to ${SECTION_LABELS[id]}`}
          title={SECTION_LABELS[id]}
        >
          {activeSection === id && (
            <motion.span
              className="section-indicator__dot-inner"
              layoutId="sectionDot"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}
