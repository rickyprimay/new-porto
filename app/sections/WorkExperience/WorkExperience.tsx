import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ParallaxSection } from "~/components/ParallaxSection";
import { Container } from "~/components/Container";
import { ExperienceCard } from "./ExperienceCard";
import { experiences } from "~/data/experiences";
import { useInView } from "~/hooks/useInView";
import { staggerContainer, fadeInUp } from "~/utils/motion";
import "./WorkExperience.css";

export function WorkExperience() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Timeline line draws as you scroll through the section
  const timelineScaleY = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);
  // Heading parallax: drifts up slightly slower
  const headingY = useTransform(scrollYProgress, [0, 1], ["30px", "-40px"]);

  return (
    <ParallaxSection id="experience" background="gradient" showOrbs>
      <Container>
        <div ref={sectionRef}>
          <motion.div
            ref={ref}
            className="work-exp"
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div style={{ y: headingY }}>
              <motion.p className="work-exp__label" variants={fadeInUp}>
                Career Journey
              </motion.p>

              <motion.h2 className="work-exp__heading" variants={fadeInUp}>
                Work Experience
              </motion.h2>

              <motion.p className="work-exp__subtitle" variants={fadeInUp}>
                A timeline of my professional journey, building products and growing as an engineer.
              </motion.p>
            </motion.div>

            <div className="work-exp__timeline">
              {/* Animated timeline line that draws on scroll */}
              <motion.div
                className="work-exp__timeline-line"
                style={{
                  scaleY: timelineScaleY,
                  transformOrigin: "top",
                }}
              />
              {experiences.map((exp, index) => (
                <ExperienceCard key={exp.id} experience={exp} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </ParallaxSection>
  );
}
