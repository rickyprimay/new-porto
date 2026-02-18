import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ParallaxSection } from "~/components/ParallaxSection";
import { Container } from "~/components/Container";
import { ProjectCard } from "./ProjectCard";
import { projects, projectCategories, type ProjectCategory } from "~/data/projects";
import { useInView } from "~/hooks/useInView";
import { staggerContainer, fadeInUp } from "~/utils/motion";
import "./Projects.css";

export function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [filter, setFilter] = useState<ProjectCategory>("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <ParallaxSection id="projects" background="primary">
      <Container>
        <motion.div
          ref={ref}
          className="projects"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.p className="projects__label" variants={fadeInUp}>
            Featured Work
          </motion.p>

          <motion.h2 className="projects__heading" variants={fadeInUp}>
            Projects
          </motion.h2>

          <motion.p className="projects__subtitle" variants={fadeInUp}>
            A selection of projects I've built — from mobile apps to full-stack platforms.
          </motion.p>

          {/* Category Filter */}
          <motion.div className="projects__filters" variants={fadeInUp}>
            {projectCategories.map((cat) => (
              <button
                key={cat}
                className={`projects__filter-btn ${filter === cat ? "projects__filter-btn--active" : ""}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* Project Grid — outside the stagger container to avoid variant conflicts */}
        <div className="projects__grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                layout
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Container>
    </ParallaxSection>
  );
}
