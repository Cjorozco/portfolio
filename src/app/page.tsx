import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection id="projects" />
        <SkillsSection />
      </main>
      <Footer />
    </>
  );
}