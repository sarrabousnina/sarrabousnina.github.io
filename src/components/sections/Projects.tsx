import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Play, X, Github, Trophy, Sparkles, Layers } from "lucide-react";
import Section from "@/components/Section";
import { translations, type Lang } from "@/lib/i18n";

interface Project {
  title: string;
  tag: string;
  desc: string;
  longDesc?: string;
  tech: string[];
  medal?: string;
  demo?: string;
  image?: string;
  architecture?: string;
  github?: string;
  featured?: boolean;
}

const featured: Project[] = [
  {
    title: "ImmersIA",
    tag: "Otraverse PFE · Excellent Honors",
    desc: "ImmersIA transforms a single interior photo into an interactive, textured 3D scene, reducing a manual workflow of roughly 15 days to around 20 minutes on cache-hit runs.",
    longDesc: "ImmersIA is a web application that transforms one interior photo into a downloadable, web-ready 3D scene. Developed during my six-month end-of-studies internship at Otraverse, it combines an asynchronous AI reconstruction architecture powered by Grounding DINO, SAM2, Gemini, Depth Anything, Hunyuan3D, scene assembly, and REPARO with reusable asset caching. This reduces a manual workflow estimated at around 15 days to approximately 20 minutes on cache-hit runs, delivering a roughly 1000x improvement in turnaround. The project was awarded mention excellent by the jury. The application also includes Clerk authentication, token-based usage, PayPal payments, and protected Next.js/FastAPI server routes.",
    tech: ["Python", "FastAPI", "Next.js", "Grounding DINO", "SAM2", "Gemini", "Depth Anything", "Hunyuan3D", "REPARO", "GCP", "Docker", "Redis", "GCS"],
    medal: "✦",
    demo: "immersia-demo.mp4",
    image: "/images/immersia-ui.png",
    architecture: "/images/immersia-architecture.png",
    featured: true,
  },
  {
    title: "EagleScout",
    tag: "CyberIA Hackathon · 2nd / 33 teams",
    desc: "AI-powered security vulnerability detection using vision-language models and ReAct-style graph traversal reasoning. Provides comprehensive security assessments with reasoning traces and compliance classification.",
    longDesc: "Built EagleScout, an intelligent security vulnerability detection system that analyzes infrastructure architecture using AI. Our solution combines local VLM analysis with cloud-based vulnerability scanning to provide comprehensive security assessments with reasoning traces and compliance classification. Achieved 2nd place among 33 teams at ESPRIT.",
    tech: ["VLM", "Foundation-sec-8b", "ReAct", "Graph Traversal", "Sandboxed Security", "Compliance Classification"],
    medal: "🥈",
    demo: "cyber_demo.mp4",
    image: "/images/cyberia.png",
    github: "https://github.com/sarrabousnina/CyberIA_Hack_EagleScout",
    featured: true,
  },
  {
    title: "BFF Loan Hub",
    tag: "Finnovo 1.0 · 2nd Place",
    desc: "AI-powered loan application & decisioning system with automated document verification, fraud detection, and compliance checking for Tunisian banking regulations using Llama-4-Scout.",
    longDesc: "Built BFF Loan Hub, an AI-powered loan application system with automated document verification, fraud detection, and compliance checking for Tunisian banking regulations. Uses Groq's Llama-4-Scout to automatically verify applicant documents and detect inconsistencies. Achieved 2nd place at Finnovo 1.0 Hackathon.",
    tech: ["React 19", "FastAPI", "Groq SDK", "Llama-4-Scout", "SQLite", "Tailwind CSS", "TanStack Router"],
    medal: "🥈",
    demo: "demo BFFB.mp4",
    image: "/images/finnovo.png",
    github: "https://github.com/Roua-Khalfet/bff-loan-hub",
    featured: true,
  },
];

const others: Project[] = [
  {
    title: "AI MINDS",
    tag: "Hackathon",
    desc: "Data ingestion pipeline for MemoryOS — multimodal personal knowledge assistant with privacy-first local storage, dual-vector semantic search, and ReAct agent framework.",
    longDesc: "AI MINDS is a comprehensive data ingestion layer for MemoryOS, a multimodal personal knowledge assistant. Collects data from browser history, clipboard, calendar, emails, file systems. Features BGE-M3 text (1024d) and CLIP image (512d) embeddings, local storage with FAISS + SQLite, and Qwen 4B/Phi-2 SLM with ReAct agent framework.",
    tech: ["Python", "FastAPI", "BGE-M3", "CLIP", "FAISS", "SQLite", "Whisper", "Ollama", "Qwen 4B", "ReAct Agent"],
    image: "/images/aiminds.png",
    github: "https://github.com/AI-MINDS-Hackathon/MemoryOS-Data-Layer",
    demo: "demo ai minds ‐ memoryAI.mp4"
  },
  {
    title: "Furniverse",
    tag: "Hackathon",
    desc: "AI-driven furniture e-commerce with multimodal semantic search, room analysis, product comparison, and AR visualization. Powered by CLIP embeddings and Qdrant vector database.",
    longDesc: "Multimodal semantic search platform featuring room analysis with YOLOv8, product comparison with AI explanations, and AR visualization. Each product represented by 4 multimodal embeddings: CLIP text (512D), CLIP image (512D), Node2Vec graph (64D), K-means color clusters (548D).",
    tech: ["AI/ML", "VLM", "CLIP", "Qdrant", "YOLOv8", "Node2Vec", "Tripo AI", "Python"],
    image: "/images/furniverse.png",
    github: "https://github.com/sarrabousnina/Furniverse",
    demo: "Pytorchi-Furniverse.mp4"
  },
  {
    title: "inspireAI",
    tag: "Personal Project",
    desc: "AI content studio — multi-modal generation hub for creators. Features ReAct-style AI agent for conversational interaction, content history with pin/delete, and image analysis integration.",
    longDesc: "Personal AI content assistant built with React and FastAPI. Generates tailored social media and blog content using Groq's LLMs, enhanced by image analysis via OpenRouter. All posts saved in history panel with pin, delete, and revisit functionality. ReAct-style chat agent answers natural questions about content.",
    tech: ["React", "TypeScript", "FastAPI", "Groq", "OpenRouter", "PostgreSQL", "JWT", "RAG"],
    image: "/images/inspire.png",
    github: "https://github.com/sarrabousnina/InspireAI",
    demo: "inspire2.mp4"
  },
  {
    title: "CorrectMe AI",
    tag: "Internship · Mahd.Group",
    desc: "AI exam correction system that grades open-ended answers with rubric awareness. Uses OCR for text extraction from scanned exams, LLMs for intelligent grading, and ReAct agents for complex workflows.",
    longDesc: "Advanced automated exam correction system leveraging OCR for text extraction, Large Language Models for intelligent grading and feedback generation, and ReAct agents for handling complex correction workflows. Built a full-stack AI exam correction platform from scratch.",
    tech: ["Python", "Flask", "React", "RAG", "OCR", "Qwen3 LLM", "ReAct Agents"],
    image: "/images/correctme.png",
    github: "https://github.com/sarrabousnina/CorrectMeAi",
    demo: "CorrectMeAi-demo.mp4"
  },
  {
    title: "TimeForge",
    tag: "🥇 1st Prize · Bal des Projets",
    desc: "Productivity app blending focus rituals, screen-time analytics, distraction detection, mood analysis with DeepFace, and NLP-driven personalized advice. Built with team of 5 using Spring Boot, Angular, Python, MySQL.",
    longDesc: "TimeForge won 1st Prize among all classes of Software Engineering at Bal des Projets 2025. Modular application providing advanced analytics including screen-time tracking, distraction detection, mood analysis via DeepFace, and personalized recommendations using NLP. Highlights full-stack development skills, AI-driven analytics, and teamwork.",
    tech: ["Spring Boot", "Angular", "Python", "MySQL", "DeepFace", "NLP"],
    medal: "🥇",
    image: "/images/timeforge.jpg",
    demo: "timeforge-demo.mp4",
    github: "https://github.com/BHAmna/PI"
  },
  {
    title: "Employee Manager",
    tag: "Project",
    desc: "CRUD HR system with role-based access and clean architecture. Built to practice Angular + Spring Boot with REST API and reactive UI.",
    longDesc: "Learning project built to practice Angular + Spring Boot. Exposes REST API for employees and reactive Angular UI to list, create, update, and delete records. Supports quick search by name with form validation and error handling.",
    tech: ["Angular", "Spring Boot", "REST API", "TypeScript", "Java"],
    image: "/images/EmployeeManager.png",
    github: "https://github.com/sarrabousnina/EmployeeManagerApp"
  },
  {
    title: "University Platform",
    tag: "Project",
    desc: "Clubs & activities management platform for ESPRIT students. Built in team of 4 using Symfony + MySQL. Owned the Clubs module with CRUD, join/leave, ratings, and Twilio SMS notifications.",
    longDesc: "Campus management web app developed by team of 4 using Symfony + MySQL. My scope was the Clubs module: create/edit clubs, view details, member counts, join/leave with Twilio SMS, search & filters, and club ratings. Also includes events, trainings, and library management.",
    tech: ["Symfony", "PHP", "MySQL", "Twilio SMS", "JavaScript"],
    image: "/images/university.jpg",
    github: "https://github.com/S1merbnb/ProjetSymfony"
  },
  {
    title: "MyCTAMA",
    tag: "Internship · CTAMA Insurance",
    desc: "Cross-platform insurance mobile app for clients & agents. Users can request quotes, browse news feed, and locate agencies on interactive map.",
    longDesc: "Built with .NET MAUI for Android/iOS. Users can request quotes for Home, Car, Agriculture, and Health insurance. Features home screen news feed and GPS-based agency locator with interactive map. Some static pages implemented with embedded HTML/CSS.",
    tech: [".NET MAUI", "C#", "Azure Maps", "GPS", "Mobile", "Embedded HTML/CSS"],
    image: "/images/ctama.png",
    github: "https://github.com/sarrabousnina/MyCTAMA",
    demo: "https://github.com/user-attachments/assets/f62af4be-3fd2-490b-8661-78d6df427005"
  },
];

const getDemoUrl = (demo: string) => {
  if (demo.startsWith("http://") || demo.startsWith("https://")) {
    return demo;
  }
  return encodeURI(`/videos/${demo}`);
};

const Card = ({
  p,
  big,
  onClick,
}: {
  p: Project;
  big?: boolean;
  onClick: () => void;
}) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -6 }}
    onClick={onClick}
    className={`group relative glass glass-hover rounded-3xl overflow-hidden flex flex-col h-full cursor-pointer transition-all duration-300 ${
      big ? "border-gradient shadow-lg" : ""
    } ${p.featured ? "border-gradient" : ""}`}
  >
    {p.image && (
      <div className={`relative overflow-hidden ${big ? "h-56" : "h-48"} bg-gradient-to-br from-primary/10 to-secondary/10`}>
        <img
          src={p.image}
          alt={p.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>
    )}
    <div className="p-6 sm:p-7 flex flex-col flex-1">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <div className="flex items-center gap-2 mb-2">
            {p.medal && <span className="text-xl">{p.medal}</span>}
            <span className="font-mono text-xs text-primary uppercase tracking-wider">{p.tag}</span>
          </div>
          <h3 className={`font-bold tracking-tight ${big ? "text-2xl" : "text-xl"}`}>{p.title}</h3>
        </div>
        <div className="p-2 rounded-full glass group-hover:bg-primary/20 transition-colors">
          <ArrowUpRight className="w-4 h-4 text-muted-foreground transition-all group-hover:text-primary group-hover:rotate-12" />
        </div>
      </div>
      <p className="text-foreground/75 mb-5 leading-relaxed text-sm">{p.desc}</p>
      <div className="mt-auto flex flex-wrap gap-2 mb-4">
        {p.tech.slice(0, 6).map((t) => (
          <span key={t} className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-secondary/15 text-secondary-glow border border-secondary/20">
            {t}
          </span>
        ))}
        {p.tech.length > 6 && (
          <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-secondary/15 text-secondary-glow border border-secondary/20">
            +{p.tech.length - 6}
          </span>
        )}
      </div>
      {(p.demo || p.architecture || p.github) && (
        <div className="mt-2 flex items-center gap-3">
          {p.demo && (
            <a
              href={getDemoUrl(p.demo)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-xs font-mono text-primary hover:text-primary/80 transition-colors"
            >
              <Play className="w-3.5 h-3.5" /> Demo
            </a>
          )}
          {p.architecture && (
            <a
              href={p.architecture}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-xs font-mono text-primary hover:text-primary/80 transition-colors"
            >
              Architecture
            </a>
          )}
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub →
            </a>
          )}
        </div>
      )}
    </div>
  </motion.article>
);

const Projects = ({ lang }: { lang: Lang }) => {
  const t = translations[lang].projects;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <Section id="projects" eyebrow="03 / work" title={t.title}>
      {/* Featured / Flagship & Hackathon Wins */}
      <div className="flex items-center gap-2 mb-6 text-sm font-mono text-muted-foreground">
        <Trophy className="w-4 h-4 text-primary" /> {t.hackathons}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
        {featured.map((p) => (
          <Card key={p.title} p={p} big onClick={() => setSelectedProject(p)} />
        ))}
      </div>

      {/* Other Projects */}
      <div className="flex items-center gap-2 mb-6 text-sm font-mono text-muted-foreground">
        <Sparkles className="w-4 h-4 text-secondary" /> {t.others}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {others.map((p) => (
          <Card key={p.title} p={p} onClick={() => setSelectedProject(p)} />
        ))}
      </div>

      {/* Modal for viewing project details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full glass rounded-3xl overflow-hidden border-gradient my-auto max-h-[90vh] flex flex-col shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-background/80 hover:bg-background border border-border flex items-center justify-center transition-colors text-foreground shadow-md hover:scale-105"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-y-auto">
                {selectedProject.image ? (
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  </div>
                ) : null}

                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        {selectedProject.medal && <span className="text-2xl">{selectedProject.medal}</span>}
                        <span className="font-mono text-xs text-primary uppercase tracking-wider">{selectedProject.tag}</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{selectedProject.title}</h2>
                    </div>
                  </div>

                  <p className="text-foreground/85 mb-6 leading-relaxed text-sm sm:text-base whitespace-pre-line">
                    {selectedProject.longDesc || selectedProject.desc}
                  </p>

                  <div className="mb-8">
                    <h4 className="font-mono text-xs text-secondary mb-3 tracking-widest uppercase">// Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-mono px-3 py-1.5 rounded-lg bg-secondary/15 text-secondary-glow border border-secondary/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-4 border-t border-border/40">
                    {selectedProject.demo && (
                      <a
                        href={getDemoUrl(selectedProject.demo)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-aurora text-primary-foreground font-medium text-sm hover:scale-105 transition-transform shadow-md"
                      >
                        <Play className="w-4 h-4" /> Watch Demo
                      </a>
                    )}
                    {selectedProject.architecture && (
                      <a
                        href={selectedProject.architecture}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass glass-hover text-primary font-medium text-sm border border-primary/30 hover:scale-105 transition-transform"
                      >
                        <Layers className="w-4 h-4" /> View Architecture Diagram
                      </a>
                    )}
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass glass-hover font-medium text-sm hover:scale-105 transition-transform"
                      >
                        <Github className="w-4 h-4" /> GitHub Repository
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Projects;

