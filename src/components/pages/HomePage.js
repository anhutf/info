import { Helmet } from "react-helmet-async";
import HeroSection from "../sections/HeroSection";
import SkillsSection from "../sections/SkillsSection";
import ProjectsSection from "../sections/ProjectsSection";
import ContactSection from "../sections/ContactSection";

export default function HomePage() {
  return (
    <div className="bg-slate-800">
      <Helmet>
        <title>Portfolio &mdash; Nguyen Anh Nhut</title>
      </Helmet>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
