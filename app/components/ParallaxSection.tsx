import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";

interface ParallaxSectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  /** Background theme variant */
  background?: "primary" | "secondary" | "gradient";
  /** Full viewport height (default: false) */
  fullHeight?: boolean;
  /** Parallax speed for content (0 = no parallax, larger = more movement) */
  parallaxSpeed?: number;
  /** Show floating gradient orbs */
  showOrbs?: boolean;
}

export function ParallaxSection({
  id,
  children,
  className = "",
  background = "primary",
  fullHeight = false,
  parallaxSpeed = 0.05,
  showOrbs = false,
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Content parallax: subtle upward drift as section scrolls
  const contentY = useTransform(scrollYProgress, [0, 1], ["2%", `-${parallaxSpeed * 100}%`]);

  const bgClass =
    background === "secondary"
      ? "section--secondary"
      : background === "gradient"
        ? "section--gradient"
        : "section--primary";

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`parallax-section ${bgClass} ${className}`}
    >
      {/* Floating gradient orbs */}
      {showOrbs && (
        <div className="parallax-section__orbs" aria-hidden="true">
          <div className="parallax-section__orb parallax-section__orb--1" />
          <div className="parallax-section__orb parallax-section__orb--2" />
        </div>
      )}

      {/* Section divider line at top */}
      <div className="parallax-section__divider" aria-hidden="true" />

      {/* Parallax-wrapped content */}
      <motion.div
        className="parallax-section__content"
        style={{ y: contentY }}
      >
        {children}
      </motion.div>

      <style>{`
        .parallax-section {
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        .parallax-section__content {
          position: relative;
          z-index: 1;
          width: 100%;
          padding: var(--section-padding-y) var(--section-padding-x);
          ${fullHeight ? "min-height: 100vh; display: flex; flex-direction: column; justify-content: center;" : ""}
        }

        .parallax-section__divider {
          position: absolute;
          top: 0;
          left: 10%;
          right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--color-border-light) 30%, var(--color-border-accent) 50%, var(--color-border-light) 70%, transparent);
          opacity: 0.6;
        }

        .section--primary {
          background-color: var(--color-bg-primary);
        }

        .section--secondary {
          background-color: var(--color-bg-secondary);
        }

        .section--gradient {
          background: linear-gradient(
            180deg,
            var(--color-bg-secondary) 0%,
            var(--color-bg-tertiary) 50%,
            var(--color-bg-secondary) 100%
          );
        }

        /* Floating gradient orbs */
        .parallax-section__orbs {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .parallax-section__orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.3;
        }

        .parallax-section__orb--1 {
          width: 400px;
          height: 400px;
          background: rgba(99, 102, 241, 0.08);
          top: 10%;
          right: -5%;
          animation: orb-drift-1 15s ease-in-out infinite;
        }

        .parallax-section__orb--2 {
          width: 300px;
          height: 300px;
          background: rgba(139, 92, 246, 0.06);
          bottom: 15%;
          left: -5%;
          animation: orb-drift-2 20s ease-in-out infinite;
        }

        @keyframes orb-drift-1 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(-20px, 15px); }
          66% { transform: translate(15px, -10px); }
        }

        @keyframes orb-drift-2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -20px); }
        }
      `}</style>
    </section>
  );
}
