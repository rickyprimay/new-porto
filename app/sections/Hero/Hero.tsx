import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "~/components/Container";
import { profile } from "~/data/profile";
import { staggerContainerSlow, fadeInUpLarge, fadeInUp, blurFadeIn } from "~/utils/motion";
import "./Hero.css";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax: text fades and drifts up as user scrolls past hero
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  // Photo parallax: drifts slower than text
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const photoScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.05]);

  return (
    <section id="hero" ref={sectionRef} className="hero">
      {/* Animated background layers */}
      <motion.div className="hero__bg" style={{ scale: bgScale, opacity: bgOpacity }}>
        <div className="hero__gradient-mesh" />
        <div className="hero__grid" />
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
      </motion.div>

      {/* Content — animate on mount */}
      <motion.div
        className="hero__content"
        style={{ y: textY, opacity: textOpacity }}
      >
        <Container>
          <div className="hero__layout">
            {/* Left: Text */}
            <motion.div
              variants={staggerContainerSlow}
              initial="hidden"
              animate="visible"
              className="hero__text"
            >
              <motion.p className="hero__greeting" variants={blurFadeIn}>
                Hello, I'm
              </motion.p>
              <motion.h1 className="hero__name" variants={fadeInUpLarge}>
                {profile.name}
              </motion.h1>
              <motion.p className="hero__title" variants={fadeInUpLarge}>
                {profile.title}
              </motion.p>
              <motion.p className="hero__tagline" variants={fadeInUp}>
                {profile.tagline}
              </motion.p>
              <motion.div className="hero__cta" variants={fadeInUp}>
                <button
                  className="hero__btn hero__btn--primary"
                  onClick={() =>
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <span>View My Work</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
                <button
                  className="hero__btn hero__btn--secondary"
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Get In Touch
                </button>
              </motion.div>
            </motion.div>

            {/* Right: Photo */}
            <motion.div
              className="hero__photo-wrapper"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ y: photoY, scale: photoScale }}
            >
              <div className="hero__photo-frame">
                <img
                  src="/assets/me.jpeg"
                  alt={profile.name}
                  className="hero__photo"
                />
                <div className="hero__photo-border" />
              </div>
              <div className="hero__photo-glow" aria-hidden="true" />
            </motion.div>
          </div>
        </Container>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="hero__scroll-line"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
        <span className="hero__scroll-text">Scroll</span>
      </motion.div>
    </section>
  );
}
