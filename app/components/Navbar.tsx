import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useActiveSection, SECTION_IDS } from "~/hooks/useActiveSection";
import "./Navbar.css";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "cv", label: "CV" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const activeSection = useActiveSection();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="navbar__inner">
        <button
          className="navbar__logo"
          onClick={() => handleNavClick("hero")}
          aria-label="Go to top"
        >
          rickyprimay
        </button>

        {/* Desktop Nav */}
        <ul className="navbar__links">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                className={`navbar__link ${activeSection === item.id ? "navbar__link--active" : ""}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className="navbar__link-indicator"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
        <button
          className={`navbar__hamburger ${mobileMenuOpen ? "navbar__hamburger--open" : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="navbar__mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                className={`navbar__mobile-link ${activeSection === item.id ? "navbar__mobile-link--active" : ""}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
