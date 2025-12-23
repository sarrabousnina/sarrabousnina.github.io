import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import CertificationsSection from "@/components/sections/certifications-section";
import CommunitySection from "@/components/sections/community-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/footer";
import { PrizesSection } from "@/components/sections/prizes-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div id="hero" className="hero-mesh">
        <HeroSection />
      </div>

      <div id="prizes">
        <PrizesSection />
      </div>

      <div id="about">
        <AboutSection />
      </div>

      <div id="technical-skills" className="section-surface mx-4 sm:mx-6 lg:mx-8">
        <SkillsSection />
      </div>

      <div id="featured-projects">
        <ProjectsSection />
      </div>

      <div id="experience" className="section-surface mx-4 sm:mx-6 lg:mx-8">
        <ExperienceSection />
      </div>

      <div id="certifications">
        <CertificationsSection />
      </div>

      <div id="community" className="section-surface mx-4 sm:mx-6 lg:mx-8">
        <CommunitySection />
      </div>

      <div id="get-in-touch">
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}