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
  organizationAndCommunities: OrganizationAndCommunitiesEnty[];
  socialLinks: SocialLink[];
  resumeUrl: string;
  architecture: {
    mobile: string[];
    web: string[];
  };
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  year: string;
  gpa?: string;
  description?: string;
}

export interface OrganizationAndCommunitiesEnty {
  name: string;
  position: string;
  issuer: string;
  year: string;
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
  bio: "I'm a passionate software engineer with a deep love for building products that make a difference. From mobile apps to web platforms, I bring ideas to life with modern technologies and thoughtful design. I thrive at the intersection of engineering and creativity where elegant code meets beautiful interfaces.",
  philosophy: "I believe great software is built on three pillars: clean architecture, user empathy, and relentless iteration. Every line of code should serve a purpose, and every interaction should feel intuitive.",
  email: "rickyprimay@gmail.com",
  profileImage: "/assets/me.jpeg",
  aboutImage: "/assets/about.png",
  skills: [
    {
      category: "Frontend",
      items: ["React", "Next.js", "Svelte", "Vue", "Tailwind CSS"],
    },
    {
      category: "Mobile",
      items: ["Flutter", "ReactNative", "SwiftUI", "UIKit", "Xml", "Kotlin", "JetpackCompose"],
    },
    {
      category: "Backend",
      items: ["node.js", "express", "nestjs", "Laravel", "GO", "MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      category: "Tools & DevOps",
      items: ["Git", "Docker", "CI/CD", "Figma", "VS Code", "Android Studio", "Xcode"],
    },
  ],
  architecture: {
    mobile: [
      "MVVM (Model-View-ViewModel)",
      "Clean Architecture",
      "MVP (Model-View-Presenter)",
      "MVC (Model-View-Controller)",
      "DI (Dependency Injection)",
      "VIPER (View-Interactor-Presenter-Entity-Router)"
    ],
    web: [
      "MVC (Model-View-Controller)",
      "DI (Dependency Injection)",
      "EDA (Event-Driven-Architecture)"
    ],
  },
  education: [
    {
      degree: "Bachelor of Computer Science",
      institution: "Universitas Dian Nuswantoro",
      year: "2022 – 2026",
      gpa: "3.6 / 4.0",
      description: "Throughout my academic journey, I balanced coursework with continuous freelance projects and academic assistance services for peers. I actively pursued internships and professional roles to apply theoretical knowledge in real-world software engineering environments.",
    },
  ],
  certifications: [
    {
      name: "Google Associate Android Developer",
      issuer: "Google",
      year: "2023",
    },
  ],
  organizationAndCommunities: [
    {
      name: "Google Developer Group on Campus UDINUS",
      position: "Lead",
      issuer: "Google",
      year: "2024 - 2025",
    },
    {
      name: "Google Developer Student Club UDINUS",
      position: "Core Team",
      issuer: "Google",
      year: "2023 - 2024",
    },
    {
      name: "Himpunan Mahasiswa Teknik Informatika",
      position: "Head Of Department Software",
      issuer: "Google",
      year: "2022 - 2025",
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
