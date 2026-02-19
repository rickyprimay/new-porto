import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ParallaxSection } from "~/components/ParallaxSection";
import { Container } from "~/components/Container";
import { profile } from "~/data/profile";
import { useInView } from "~/hooks/useInView";
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from "~/utils/motion";
import "./CV.css";

export function CV() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Differential column parallax: left and right columns move at different speeds
  const leftColumnY = useTransform(scrollYProgress, [0, 1], ["30px", "-50px"]);
  const rightColumnY = useTransform(scrollYProgress, [0, 1], ["50px", "-30px"]);
  // Download button scale pulse
  const btnScale = useTransform(scrollYProgress, [0.6, 0.8, 1], [0.95, 1.02, 1]);

  return (
    <ParallaxSection id="cv" background="secondary" showOrbs>
      <Container>
        <div ref={sectionRef}>
          <motion.div
            ref={ref}
            className="cv"
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.p className="cv__label" variants={fadeInUp}>
              Curriculum Vitae
            </motion.p>

            <motion.h2 className="cv__heading" variants={fadeInUp}>
              Education & Skills
            </motion.h2>

            <div className="cv__grid">
              {/* Education Column — slower parallax */}
              <motion.div className="cv__column" variants={fadeInLeft} style={{ y: leftColumnY }}>
                <h3 className="cv__column-title">Education</h3>
                {profile.education.map((edu, i) => (
                  <div key={i} className="cv__edu-card">
                    <h4 className="cv__edu-degree">{edu.degree}</h4>
                    <p className="cv__edu-institution">{edu.institution}</p>
                    <p className="cv__edu-year">{edu.year}</p>
                    {edu.description && (
                      <p className="cv__edu-description">{edu.description}</p>
                    )}
                  </div>
                ))}

                {profile.organizationAndCommunities.length > 0 && (
                  <>
                    <h3 className="cv__column-title cv__column-title--mt">
                      Organization and Communities
                    </h3>
                    {profile.organizationAndCommunities.map((org, i) => (
                      <div key={i} className="cv__cert-card">
                        <h4 className="cv__cert-name">{org.name}</h4>
                        <p className="cv__cert-issuer">
                          {org.position} · {org.year}
                        </p>
                      </div>
                    ))}
                  </>
                )}

                {/* Architecture Patterns */}
                <h3 className="cv__column-title cv__column-title--mt">Architecture Patterns</h3>
                <div className="cv__skill-section">
                  <h4 className="cv__skill-category">Mobile</h4>
                  <div className="cv__skill-items">
                    {profile.architecture.mobile.map((item) => (
                      <div key={item} className="cv__skill-item">
                        <span className="cv__skill-dot" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="cv__skill-section">
                  <h4 className="cv__skill-category">Web</h4>
                  <div className="cv__skill-items">
                    {profile.architecture.web.map((item) => (
                      <div key={item} className="cv__skill-item">
                        <span className="cv__skill-dot" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Skills Column — faster parallax (opposite offset) */}
              <motion.div className="cv__column" variants={fadeInRight} style={{ y: rightColumnY }}>
                <h3 className="cv__column-title">Technical Skills</h3>
                {profile.skills.map((category) => (
                  <div key={category.category} className="cv__skill-section">
                    <h4 className="cv__skill-category">{category.category}</h4>
                    <div className="cv__skill-items">
                      {category.items.map((skill) => (
                        <div key={skill} className="cv__skill-item">
                          <span className="cv__skill-dot" />
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Download CTA with scale pulse */}
            <motion.div className="cv__download" variants={fadeInUp} style={{ scale: btnScale }}>
              <a
                href={profile.resumeUrl}
                download
                className="cv__download-btn"
                aria-label="Download CV as PDF"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Full CV
              </a>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </ParallaxSection>
  );
}
