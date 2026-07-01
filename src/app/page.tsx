import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Experience } from "@/sections/Experience";
import { Projects } from "@/sections/Projects";
import { Competitions } from "@/sections/Competitions";
import { ContentCreation } from "@/sections/ContentCreation";
import { Contact } from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Competitions />
        <ContentCreation />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
