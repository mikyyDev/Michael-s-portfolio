// src/app/page.tsx

import Image from "next/image";
import HeroSection from "@/components/home/hero/HeroSection";
import AboutSection from "@/components/home/about/AboutSection";
import ResumeSection from "@/components/resume/ResumeSection";
import ProjectSection from "@/components/Projects/ProjectSection";
import SkillSection from "@/components/skills/SkillSection";
import ContactSection from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ResumeSection />
      <ProjectSection />
      <SkillSection />
      <ContactSection />
    </div>
  );
}
