import { motion } from "framer-motion";
import { useInView } from "~/hooks/useInView";
import { fadeInUp, fadeInUpLarge } from "~/utils/motion";
import type { ReactNode } from "react";

interface AnimatedTextProps {
  children: ReactNode;
  /** "default" = 40px slide, "large" = 60px slide (for hero text) */
  variant?: "default" | "large";
  /** Additional class name */
  className?: string;
  /** Delay before animation starts (seconds) */
  delay?: number;
  /** HTML element to render as */
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

export function AnimatedText({
  children,
  variant = "default",
  className = "",
  delay = 0,
  as = "div",
}: AnimatedTextProps) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const MotionComponent = motion.create(as);
  const animVariant = variant === "large" ? fadeInUpLarge : fadeInUp;

  return (
    <MotionComponent
      ref={ref}
      className={className}
      variants={animVariant}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      style={{ transition: `delay ${delay}s` }}
      custom={delay}
    >
      {children}
    </MotionComponent>
  );
}
