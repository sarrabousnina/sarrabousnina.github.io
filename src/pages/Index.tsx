import { useEffect, useState } from "react";
import ParticleBackground from "@/components/ParticleBackground";
import MouseGlow from "@/components/MouseGlow";
import Navbar from "@/components/Navbar";
import FloatingChatbot from "@/components/FloatingChatbot";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import { Awards, Certifications, Community } from "@/components/sections/CertsAwards";
import Contact from "@/components/sections/Contact";
import type { Lang } from "@/lib/i18n";

const Index = () => {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    document.title = "Sarra Bousnina — AI Software Engineer | Portfolio";
    const desc = "AI Software Engineer & ESPRIT final-year student. Agentic AI, RAG, LLMs & full-stack. Multi-time hackathon medalist.";
    let m = document.querySelector('meta[name="description"]');
    if (!m) { m = document.createElement("meta"); m.setAttribute("name", "description"); document.head.appendChild(m); }
    m.setAttribute("content", desc);
    let canon = document.querySelector('link[rel="canonical"]');
    if (!canon) { canon = document.createElement("link"); canon.setAttribute("rel", "canonical"); document.head.appendChild(canon); }
    canon.setAttribute("href", window.location.origin + "/");
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-clip">
      <ParticleBackground />
      <MouseGlow />
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <Awards lang={lang} />
        <About lang={lang} />
        <Skills lang={lang} />
        <Projects lang={lang} />
        <Experience lang={lang} />
        <Certifications lang={lang} />
        <Community lang={lang} />
        <Contact lang={lang} />
        <FloatingChatbot />
      </main>
      <footer className="py-10 border-t border-border/50 text-center font-mono text-xs text-muted-foreground">
        <span className="text-gradient">© {new Date().getFullYear()} Sarra Bousnina</span> · Crafted with neon & curiosity ✦
      </footer>
    </div>
  );
};

export default Index;
