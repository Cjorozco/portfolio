import HeroSection from "@/components/HeroSection"; 
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection id="projects" />
      <SkillsSection />
      <ContactSection id="contact" />
    </main>
  );
}