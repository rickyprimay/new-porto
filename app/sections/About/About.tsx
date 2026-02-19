import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ParallaxSection } from "~/components/ParallaxSection";
import { Container } from "~/components/Container";
import { profile } from "~/data/profile";
import { useInView } from "~/hooks/useInView";
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from "~/utils/motion";
import "./About.css";

export function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Differential parallax speeds for each column
  const imageY = useTransform(scrollYProgress, [0, 1], ["40px", "-60px"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.98]);
  const bioX = useTransform(scrollYProgress, [0, 1], ["-20px", "15px"]);
  const skillsX = useTransform(scrollYProgress, [0, 1], ["20px", "-15px"]);
  const orbY = useTransform(scrollYProgress, [0, 1], ["50px", "-80px"]);
  const orbScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.9]);

  return (
    <ParallaxSection id="about" background="secondary" showOrbs>
      <Container>
        <div ref={sectionRef}>
          <motion.div
            ref={ref}
            className="about"
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.p className="about__label" variants={fadeInUp}>
              About Me
            </motion.p>

            <motion.h2 className="about__heading" variants={fadeInUp}>
              Passionate about building
              <br />
              <span className="about__heading-accent">digital experiences</span>
            </motion.h2>

            <div className="about__grid">
              {/* Image with parallax */}
              <motion.div
                className="about__image-wrapper"
                variants={fadeInLeft}
                style={{ y: imageY, scale: imageScale }}
              >
                <div className="about__image-frame">
                  <img
                    src={profile.aboutImage}
                    alt={profile.name}
                    className="about__image"
                  />
                  <div className="about__image-border" />
                </div>
                {/* Floating orb behind image */}
                <motion.div
                  className="about__orb"
                  style={{ y: orbY, scale: orbScale }}
                  aria-hidden="true"
                />
              </motion.div>

              {/* Bio with horizontal drift */}
              <motion.div
                className="about__bio"
                variants={fadeInUp}
                style={{ x: bioX }}
              >
                <p>{profile.bio}</p>
                <p className="about__philosophy">{profile.philosophy}</p>
              </motion.div>

              {/* Skills with opposite horizontal drift */}
              <motion.div
                className="about__skills"
                variants={fadeInRight}
                style={{ x: skillsX }}
              >
                {profile.skills.map((category) => (
                  <div key={category.category} className="about__skill-group">
                    <h3 className="about__skill-category">{category.category}</h3>
                    <div className="about__skill-tags">
                      {category.items.map((skill) => (
                        <span key={skill} className="about__skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </ParallaxSection>
  );
}
