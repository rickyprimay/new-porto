export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  philosophy: string;
  email: string;
  profileImage: string;
  aboutImage: string;
  skills: SkillCategory[];
  education: EducationEntry[];
  certifications: CertificationEntry[];
  socialLinks: SocialLink[];
  resumeUrl: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  year: string;
  description?: string;
}

export interface CertificationEntry {
  name: string;
  issuer: string;
  year: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export const profile: ProfileData = {
  name: "Ricky Primayuda Putra",
  title: "Software Engineer",
  tagline: "Crafting digital experiences with clean code and creative vision",
  bio: "I'm a passionate software engineer with a deep love for building products that make a difference. From mobile apps to web platforms, I bring ideas to life with modern technologies and thoughtful design. I thrive at the intersection of engineering and creativity — where elegant code meets beautiful interfaces.",
  philosophy: "I believe great software is built on three pillars: clean architecture, user empathy, and relentless iteration. Every line of code should serve a purpose, and every interaction should feel intuitive.",
  email: "rickyprimay@gmail.com",
  profileImage: "/assets/me.jpeg",
  aboutImage: "/assets/about.png",
  skills: [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      category: "Mobile",
      items: ["Flutter", "Swift", "iOS Development", "Android"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "REST APIs", "PostgreSQL", "MongoDB"],
    },
    {
      category: "Tools & DevOps",
      items: ["Git", "Docker", "CI/CD", "Figma", "VS Code"],
    },
  ],
  education: [
    {
      degree: "Bachelor of Computer Science",
      institution: "Telkom University",
      year: "2020 – 2024",
      description: "Focused on software engineering, mobile development, and AI/ML fundamentals.",
    },
  ],
  certifications: [
    {
      name: "Google Associate Android Developer",
      issuer: "Google",
      year: "2023",
    },
  ],
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/rickyprimay",
      icon: "github",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/rickyprimay",
      icon: "linkedin",
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/rickyprimay",
      icon: "instagram",
    },
  ],
  resumeUrl: "/assets/resume.pdf",
};
