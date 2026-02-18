export interface ProjectEntry {
  id: string;
  title: string;
  description: string;
  image?: string;
  techStack: string[];
  category: "Web" | "iOS" | "Flutter" | "Android";
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projects: ProjectEntry[] = [
  {
    id: "proj-youapp",
    title: "YouApp Social",
    description:
      "Interest-based social networking app. Built and optimized mobile features, handled API integration, and improved app performance. Released on Apple App Store and Google Play Store.",
    image: "/assets/projects/youapp.png",
    techStack: ["Flutter", "Dart", "REST API"],
    category: "Flutter",
    liveUrl: "https://apps.apple.com/id/app/youapp-sosial-sesuai-minat/id6444595490",
    featured: true,
  },
  {
    id: "proj-maharbote",
    title: "Maharbote Social",
    description:
      "Personality-based social app with real-time chat, MBTI scoring, Maharbote mythology score, zodiac, horoscope, and numerology. Built as Mobile Developer (Flutter) and Backend Developer (NestJS).",
    image: "/assets/projects/maharbote.png",
    techStack: ["Flutter", "NestJS", "WebSocket", "PostgreSQL"],
    category: "Flutter",
    liveUrl: "https://apps.apple.com/us/app/maharbote-social/id6753066582",
    featured: true,
  },
  {
    id: "proj-vehiloc",
    title: "Vehiloc App",
    description:
      "Vehicle tracking app published on App Store & Google Play. Uses Google Maps API and WebSocket for real-time vehicle tracking. Migrated from legacy Felgo app to Flutter.",
    image: "/assets/projects/vehiloc.png",
    techStack: ["Flutter", "Google Maps", "WebSocket"],
    category: "Flutter",
    liveUrl: "https://apps.apple.com/id/app/vehiloc/id6478942877",
    featured: true,
  },
  {
    id: "proj-widya",
    title: "Widya Mobile",
    description:
      "Comprehensive Learning Management System (LMS) designed to preserve Indonesian arts and culture through AI. Features include Batik identification, assignment review, and chatbot. Responsible for end-to-end development, UI/UX, and AI model integration.",
    image: "/assets/projects/widya.jpg",
    techStack: ["Flutter", "Dart", "AI/ML", "Python"],
    category: "Flutter",
    featured: true,
  },
  {
    id: "proj-senikita-ios",
    title: "SeniKita (iOS)",
    description:
      "A marketplace art platform featuring real-time tracking, secure payments, and AI-powered chatbot. Built backend with Laravel (RESTful APIs, Xendit, RajaOngkir, Gemini AI, ElevenLabs) and native iOS app with SwiftUI.",
    image: "/assets/projects/senikita.jpg",
    techStack: ["SwiftUI", "Laravel", "Gemini AI", "Xendit"],
    category: "iOS",
    featured: true,
  },
  {
    id: "proj-senikita",
    title: "Seni Kita",
    description:
      "A full-stack art marketplace built with Laravel and React.js. Features include art listings, payment gateway via Xendit, shipping cost calculation with Raja Ongkir, and real-time tracking.",
    image: "/assets/projects/senikita.png",
    techStack: ["Laravel", "React.js", "Bun", "Xendit", "Raja Ongkir"],
    category: "Web",
    liveUrl: "https://senikita.my.id",
    featured: true,
  },
  {
    id: "proj-cooksmart",
    title: "Cook Smart",
    description:
      "iOS recipe management app built with SwiftUI, SQLite, Firebase, and Alamofire. Features meal planning by day/week/month using the Spoonacular API.",
    image: "/assets/projects/cooksmart.png",
    techStack: ["Swift", "SwiftUI", "Firebase", "SQLite"],
    category: "iOS",
    githubUrl: "https://github.com/rickyprimay/CookSmart",
    featured: true,
  },
  {
    id: "proj-movie",
    title: "Movie App",
    description:
      "iOS movie discovery app built with SwiftUI and Alamofire. Features popular movies list, details, and search using TMDB API with SDWebImage for image caching.",
    image: "/assets/projects/movie.png",
    techStack: ["Swift", "SwiftUI", "Alamofire", "TMDB API"],
    category: "iOS",
    githubUrl: "https://github.com/rickyprimay/MovieApp",
  },
  {
    id: "proj-sevensummit",
    title: "Seven Summit Central Java Guide",
    description:
      "iOS hiking guide app with SwiftUI. Features mountain listings, details, custom itineraries, and MapKit for interactive maps and route planning.",
    image: "/assets/projects/sevensummit.png",
    techStack: ["Swift", "SwiftUI", "MapKit"],
    category: "iOS",
    githubUrl: "https://github.com/rickyprimay/MVVMSevenSummitApp",
  },
  {
    id: "proj-expense",
    title: "Expense Tracker",
    description:
      "iOS expense tracker with SwiftUI, Core Data, Swift Charts for data visualization, advanced filters, biometric lock, and widget support.",
    image: "/assets/projects/expense.png",
    techStack: ["Swift", "SwiftUI", "Core Data", "Swift Charts"],
    category: "iOS",
    githubUrl: "https://github.com/rickyprimay/ExpenseApp",
  },
  {
    id: "proj-lms",
    title: "Learning Management System",
    description:
      "LMS platform with OAuth, email verification, and structured video learning materials. Built with Next.js, PostgreSQL, Supabase, Prisma, and Shadcn UI.",
    image: "/assets/projects/lms.png",
    techStack: ["Next.js", "PostgreSQL", "Supabase", "Prisma"],
    category: "Web",
    githubUrl: "https://github.com/rickyprimay/lms",
    liveUrl: "https://rickieslearn.vercel.app/",
  },
  {
    id: "proj-hitech",
    title: "Face Recognition Presence System",
    description:
      "Online presence system with face recognition and geolocation for Hi-Technology 2023 Software Fair. Built with SvelteKit, Supabase, face-api.js, and Mozilla Web API.",
    image: "/assets/projects/hitech.jpeg",
    techStack: ["SvelteKit", "Supabase", "face-api.js", "PostgreSQL"],
    category: "Web",
    githubUrl: "https://github.com/RickyPrima30/presensi-facerecognition-geolocation",
    liveUrl: "https://presensi-mhs.netlify.app/",
  },
  {
    id: "proj-weather",
    title: "Weather App",
    description:
      "Flutter weather app using OpenWeatherMap API with BLoC state management, Dio for HTTP, and geo_locator for user location.",
    image: "/assets/projects/weather-flutter.png",
    techStack: ["Flutter", "BLoC", "Dio", "OpenWeatherMap"],
    category: "Flutter",
    githubUrl: "https://github.com/rickyprimay/WeatherAppFlutter",
  },
  {
    id: "proj-ticketify",
    title: "Ticketify",
    description:
      "Event ticketing platform similar to Tiket.com. Built with Laravel backend, React frontend, and Midtrans payment gateway.",
    image: "/assets/projects/ticketify.png",
    techStack: ["Laravel", "React", "Midtrans", "MySQL"],
    category: "Web",
    liveUrl: "https://ticketify.id",
  },
  {
    id: "proj-tf-sense",
    title: "Traffic Sense",
    description:
      "DINACOM competition app for finding low-pollution routes. Uses Graphhopper API for maps and IoT with ESP-32 and MQ-135 sensors.",
    image: "/assets/projects/tf-sense.png",
    techStack: ["Graphhopper", "IoT", "ESP-32", "API"],
    category: "Android",
    liveUrl: "https://smart-traffic.my.id/",
  },
];

export const projectCategories = ["All", "Web", "Flutter", "iOS", "Android"] as const;
export type ProjectCategory = (typeof projectCategories)[number];
