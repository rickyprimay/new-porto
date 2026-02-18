import { motion } from "framer-motion";
import { ParallaxSection } from "~/components/ParallaxSection";
import { Container } from "~/components/Container";
import { ExperienceCard } from "./ExperienceCard";
import { experiences } from "~/data/experiences";
import { useInView } from "~/hooks/useInView";
import { staggerContainer, fadeInUp } from "~/utils/motion";
import "./WorkExperience.css";

export function WorkExperience() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <ParallaxSection id="experience" background="gradient">
      <Container>
        <motion.div
          ref={ref}
          className="work-exp"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.p className="work-exp__label" variants={fadeInUp}>
            Career Journey
          </motion.p>

          <motion.h2 className="work-exp__heading" variants={fadeInUp}>
            Work Experience
          </motion.h2>

          <motion.p className="work-exp__subtitle" variants={fadeInUp}>
            A timeline of my professional journey, building products and growing as an engineer.
          </motion.p>

          <div className="work-exp__timeline">
            <div className="work-exp__timeline-line" />
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </motion.div>
      </Container>
    </ParallaxSection>
  );
}
