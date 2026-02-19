import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";

interface ParallaxSectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  background?: "primary" | "secondary" | "gradient";
  fullHeight?: boolean;
  parallaxSpeed?: number;
  showOrbs?: boolean;
  /** Fade content at section edges */
  edgeFade?: boolean;
}

export function ParallaxSection({
  id,
  children,
  className = "",
  background = "primary",
  fullHeight = false,
  parallaxSpeed = 0.08,
  showOrbs = false,
  edgeFade = false,
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Content parallax: subtle upward drift
  const contentY = useTransform(scrollYProgress, [0, 1], ["3%", `-${parallaxSpeed * 100}%`]);
  // Edge fade: content fades in at top and out at bottom
  const edgeOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  // Orb parallax: orbs move at different speeds than content
  const orb1Y = useTransform(scrollYProgress, [0, 1], ["10%", "-30%"]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], ["-5%", "25%"]);
  const orb3Y = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);

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
      {/* Floating gradient orbs with scroll-linked parallax */}
      {showOrbs && (
        <div className="parallax-section__orbs" aria-hidden="true">
          <motion.div className="parallax-section__orb parallax-section__orb--1" style={{ y: orb1Y }} />
          <motion.div className="parallax-section__orb parallax-section__orb--2" style={{ y: orb2Y }} />
          <motion.div className="parallax-section__orb parallax-section__orb--3" style={{ y: orb3Y }} />
        </div>
      )}

      {/* Section divider line at top */}
      <div className="parallax-section__divider" aria-hidden="true" />

      {/* Parallax-wrapped content */}
      <motion.div
        className="parallax-section__content"
        style={{
          y: contentY,
          ...(edgeFade ? { opacity: edgeOpacity } : {}),
        }}
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
          opacity: 0.25;
        }

        .parallax-section__orb--1 {
          width: 450px;
          height: 450px;
          background: rgba(99, 102, 241, 0.08);
          top: 10%;
          right: -8%;
          animation: orb-drift-1 18s ease-in-out infinite;
        }

        .parallax-section__orb--2 {
          width: 350px;
          height: 350px;
          background: rgba(139, 92, 246, 0.06);
          bottom: 15%;
          left: -8%;
          animation: orb-drift-2 22s ease-in-out infinite;
        }

        .parallax-section__orb--3 {
          width: 250px;
          height: 250px;
          background: rgba(165, 180, 252, 0.05);
          top: 50%;
          left: 40%;
          animation: orb-drift-3 16s ease-in-out infinite;
        }

        @keyframes orb-drift-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-25px, 18px) scale(1.05); }
          66% { transform: translate(18px, -12px) scale(0.97); }
        }

        @keyframes orb-drift-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(22px, -25px) scale(1.03); }
        }

        @keyframes orb-drift-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          40% { transform: translate(-15px, 20px) scale(1.08); }
          70% { transform: translate(10px, -15px) scale(0.95); }
        }
      `}</style>
    </section>
  );
}
