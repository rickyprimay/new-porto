export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  workMode?: "On-site" | "Remote" | "Hybrid";
  description: string;
  highlights: string[];
  techStack?: string[];
  logo?: string;
}

export const experiences: ExperienceEntry[] = [
  {
    id: "exp-1",
    company: "YouApp Pte. Ltd",
    role: "Mobile Developer",
    period: "October 2025 – January 2026",
    location: "Semarang, Jawa Tengah, Indonesia",
    description:
      "Mobile Developer with hands-on experience in developing and maintaining production-ready mobile applications for a global audience. Worked on Mahabote Social App (Myanmar-based social platform published on the Apple App Store and Google Play Store) as well as YouApp, contributing to feature development, performance optimization, and application scalability.",
    highlights: [
      "Worked on Mahabote Social App and YouApp, contributing to feature development, performance optimization, and scalability",
      "Specialized in Flutter development using GetX for state management and navigation",
      "Implemented modularized architecture to ensure clean code, reusability, and long-term maintainability",
      "Actively used Melos to manage monorepo workflows, shared packages, and dependency consistency across multiple modules and applications",
      "Collaborated closely with backend, UI/UX, and product teams to deliver stable, high-quality mobile features",
      "Followed best practices in code structure, version control, and release management",
    ],
    techStack: [
      "Flutter",
      "GetX",
      "Melos",
      "iOS",
      "Android",
      "FCM",
      "Shorebird",
      "Fastlane",
    ],
  },
  {
    id: "exp-2",
    company: "YouApp Pte. Ltd",
    role: "Full Stack Developer",
    period: "July 2025 – October 2025",
    location: "Semarang, Jawa Tengah, Indonesia",
    description:
      "Experienced Fullstack Developer with a strong background in building and maintaining global-scale mobile applications. Played a key role in developing Mahabote Social App, a Myanmar-based social platform successfully released on both Apple App Store and Google Play Store.",
    highlights: [
      "Played a key role in developing Mahabote Social App (released on Apple App Store and Google Play Store)",
      "Responsible for end-to-end development with primary focus on backend architecture using NestJS and PostgreSQL",
      "Ensured scalability, performance, and secure API design",
      "Actively involved in frontend and mobile development using Flutter",
      "Collaborated with cross-functional teams to design, implement, and deploy production-ready features for a global audience",
      "Handled authentication, database design, API integration, and real-time application requirements",
    ],
    techStack: ["NestJS", "PostgreSQL", "Flutter", "REST API"],
  },
  {
    id: "exp-3",
    company: "Himpunan Mahasiswa Teknik Informatika UDINUS",
    role: "Full Stack Developer",
    period: "November 2022 – July 2025",
    location: "Semarang, Jawa Tengah, Indonesia",
    workMode: "On-site",
    description:
      "Full Stack Developer managing organizational web platforms and supporting technical events through scalable web solutions.",
    highlights: [
      "Developed an event website that attracted over 200 visitors",
      "Oversaw the management of 5+ event websites, including Paa.hmtiudinus.org, Lcc.hmtiudinus.org, Hitech.hmtiudinus.org, Hitalk.hmtiudinus.org, and Semnasti.hmtiudinus.org",
      "Joined the Program Penguatan Kapasitas Ormawa (PPK-Ormawa) as a Developer",
      'Became a speaker at Code Jam Academy HMTI presenting "Laravel 10 CRUD and Authorization"',
      'Led the "Seminar Nasional Teknik Informatika 2024" as event coordinator and presented the topic "Artificial Intelligence in the Era of Digital Transformation" (273 offline and 72 online participants)',
    ],
    techStack: ["Laravel", "PHP", "MySQL"],
  },
  {
    id: "exp-4",
    company: "PT. Winnicode Garuda Teknologi",
    role: "Full Stack Developer (Internship)",
    period: "September 2024 – December 2024",
    location: "Bantul, Yogyakarta",
    workMode: "Remote",
    description:
      "During my internship, I remotely contributed to the development of a news website using Laravel for the backend and React.js with Inertia.js for the frontend.",
    highlights: [
      "Developed backend features using Laravel",
      "Built frontend using React.js with Inertia.js",
      "Contributed to building and integrating RESTful APIs for web platforms",
    ],
    techStack: ["Laravel", "React.js", "Inertia.js", "REST API"],
  },
  {
    id: "exp-5",
    company: "PT. Buana Online Sejahtera",
    role: "Full Stack App Developer (Internship)",
    period: "January 2024 – June 2024",
    location: "Semarang, Jawa Tengah, Indonesia",
    description:
      "During my internship, I worked on multiple major projects across web and mobile development. I built the vehiloc.net website, developed APIs using Flask, migrated frontend technologies, and transitioned mobile apps to Flutter. I also integrated the backend with the company's GPS dashcam system and delivered an app successfully published on both the Apple App Store and Google Play Store.",
    highlights: [
      "Created the vehiloc.net website",
      "Developed APIs using Flask",
      "Migrated the frontend from Vue.js to HTMX",
      "Transitioned the Vehiloc mobile application (Android & iOS) from Felgo to Flutter",
      "Integrated the backend with the GPS dashcam system developed by the company",
      "Successfully delivered an application published on Apple App Store and Google Play Store",
    ],
    techStack: ["Flask", "Python", "HTMX", "Vue.js", "Flutter", "iOS", "Android"],
  },
];