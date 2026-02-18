import { motion } from "framer-motion";
import type { ExperienceEntry } from "~/data/experiences";
import { slideInScale } from "~/utils/motion";

interface ExperienceCardProps {
  experience: ExperienceEntry;
  index: number;
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      className="exp-card"
      variants={slideInScale}
    >
      <div className="exp-card__timeline-dot">
        <div className="exp-card__timeline-dot-ping" />
      </div>
      <div className="exp-card__content">
        <div className="exp-card__header">
          <div>
            <h3 className="exp-card__role">{experience.role}</h3>
            <p className="exp-card__company">{experience.company}</p>
            {/* Location & work mode */}
            {(experience.location || experience.workMode) && (
              <p className="exp-card__meta">
                {experience.location && <span>{experience.location}</span>}
                {experience.location && experience.workMode && <span className="exp-card__dot">·</span>}
                {experience.workMode && (
                  <span className="exp-card__work-mode">{experience.workMode}</span>
                )}
              </p>
            )}
          </div>
          <span className="exp-card__period">{experience.period}</span>
        </div>
        <p className="exp-card__description">{experience.description}</p>
        <ul className="exp-card__highlights">
          {experience.highlights.map((highlight, i) => (
            <li key={i} className="exp-card__highlight">
              {highlight}
            </li>
          ))}
        </ul>
        {experience.techStack && (
          <div className="exp-card__tech">
            {experience.techStack.map((tech) => (
              <span key={tech} className="exp-card__tech-tag">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
