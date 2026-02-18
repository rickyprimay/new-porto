import { motion } from "framer-motion";
import { ParallaxSection } from "~/components/ParallaxSection";
import { Container } from "~/components/Container";
import { profile } from "~/data/profile";
import { useInView } from "~/hooks/useInView";
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from "~/utils/motion";
import "./About.css";

export function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <ParallaxSection id="about" background="secondary">
      <Container>
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
            <motion.div className="about__image-wrapper" variants={fadeInLeft}>
              <div className="about__image-frame">
                <img
                  src={profile.aboutImage}
                  alt={profile.name}
                  className="about__image"
                />
                <div className="about__image-border" />
              </div>
            </motion.div>

            <motion.div className="about__bio" variants={fadeInUp}>
              <p>{profile.bio}</p>
              <p className="about__philosophy">{profile.philosophy}</p>
            </motion.div>

            <motion.div className="about__skills" variants={fadeInRight}>
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
      </Container>
    </ParallaxSection>
  );
}
