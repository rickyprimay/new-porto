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
  return [
    { title: "Ricky Primayuda Putra — Software Engineer" },
    {
      name: "description",
      content:
        "Portfolio of Ricky Primayuda Putra — Software Engineer specializing in React, Flutter, and full-stack development.",
    },
    { property: "og:title", content: "Ricky Primayuda Putra — Software Engineer" },
    {
      property: "og:description",
      content:
        "Portfolio of Ricky Primayuda Putra — Software Engineer specializing in React, Flutter, and full-stack development.",
    },
    { property: "og:type", content: "website" },
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
