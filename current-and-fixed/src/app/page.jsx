import AboutMe from "@/components/AboutMe";
import { Hero } from "@/components/Hero";
import { MyNavbar } from "@/components/MyNavbar";
import ProjectCard from "@/components/ProjectCard";
import css3 from "../assets/skills/css3.png";
import SkillsSection from "@/components/SkillsSection";
import { ContactForm } from "@/components/ContactForm";
import { Services } from "@/components/Services";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-black">
      <MyNavbar />

      <Hero />
      <AboutMe />

      <SkillsSection />

      <Projects />
      {/* <Services /> */}

      <ContactForm />
      <Footer />
    </div>
  );
}
