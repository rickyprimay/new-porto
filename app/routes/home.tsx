import type { Route } from "./+types/home";
import { Navbar } from "~/components/Navbar";
import { SectionIndicator } from "~/components/SectionIndicator";
import { Hero } from "~/sections/Hero/Hero";
import { About } from "~/sections/About/About";
import { WorkExperience } from "~/sections/WorkExperience/WorkExperience";
import { Projects } from "~/sections/Projects/Projects";
import { CV } from "~/sections/CV/CV";
import { Contact } from "~/sections/Contact/Contact";

export function meta({}: Route.MetaArgs) {
  const title = "Ricky Primayuda Putra — Software Engineer";
  const description =
    "Portfolio of Ricky Primayuda Putra — Software Engineer specializing in React, Flutter, and full-stack development. Crafting digital experiences with clean code and creative vision.";
  const image = "https://www.rickyprimay.tech/assets/me.jpeg";
  const url = "https://www.rickyprimay.tech/";

  return [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: "Ricky Primayuda Putra, Software Engineer, Mobile Developer, Web Developer, React, Next.js, Flutter, Portfolio, Frontend Engineer, Full Stack Developer" },
    { name: "author", content: "Ricky Primayuda Putra" },
    { name: "robots", content: "index, follow" },
    
    // Open Graph
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url }, 
    { property: "og:image", content: image },
    { property: "og:site_name", content: "Ricky Primayuda Putra" },
    
    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
    { name: "twitter:creator", content: "@rickyprimay" },
  ];
}

export default function Home() {
  return (
    <>
      <Navbar />
      <SectionIndicator />
      <main>
        <Hero />
        <About />
        <WorkExperience />
        <Projects />
        <CV />
        <Contact />
      </main>
    </>
  );
}
