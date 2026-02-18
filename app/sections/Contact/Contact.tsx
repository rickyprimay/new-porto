import { motion } from "framer-motion";
import { ParallaxSection } from "~/components/ParallaxSection";
import { Container } from "~/components/Container";
import { profile } from "~/data/profile";
import { useInView } from "~/hooks/useInView";
import { staggerContainer, fadeInUp, scaleIn } from "~/utils/motion";
import "./Contact.css";

export function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <ParallaxSection id="contact" background="primary">
      <Container narrow>
        <motion.div
          ref={ref}
          className="contact"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.p className="contact__label" variants={fadeInUp}>
            Get In Touch
          </motion.p>

          <motion.h2 className="contact__heading" variants={fadeInUp}>
            Let's work together
          </motion.h2>

          <motion.p className="contact__subtitle" variants={fadeInUp}>
            I'm always open to discussing new projects, creative ideas,
            or opportunities to be part of your vision.
          </motion.p>

          {/* Email CTA */}
          <motion.div className="contact__email-wrapper" variants={fadeInUp}>
            <a
              href={`mailto:${profile.email}`}
              className="contact__email-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              {profile.email}
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div className="contact__socials" variants={fadeInUp}>
            {profile.socialLinks.map((link) => (
              <motion.a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social-link"
                variants={scaleIn}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Visit ${link.platform}`}
              >
                {link.icon === "github" && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                )}
                {link.icon === "linkedin" && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                )}
                {link.icon === "instagram" && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                )}
                <span>{link.platform}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Footer */}
          <motion.footer className="contact__footer" variants={fadeInUp}>
            <p>&copy; {new Date().getFullYear()} {profile.name}.</p>
          </motion.footer>
        </motion.div>
      </Container>
    </ParallaxSection>
  );
}
