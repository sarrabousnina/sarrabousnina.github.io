"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { getAssetPath } from "@/lib/asset";
import { Variants, easeOut, easeInOut } from "framer-motion"


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,    },
  },
}

const overlayVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: easeOut,    },
  },
}

const projects = [
  {
  id: 1,
  title: "inspireAI",
  subtitle: "AI-Powered Content Studio (Personal Project)",
  description:
    "A multi-tenant SaaS platform that empowers creators and brands to generate, manage, and refine AI-driven content using intelligent agentic workflows.",
longDescription:
  "inspireAI is a SaaS content studio that lets creators manage blog posts, social captions, and ad copy through a clean, futuristic interface. It features AI-powered image analysis and a ReAct-style agent that answers natural-language queries about your content—like 'How many posts do I have?' or 'Summarize my latest draft.' Built with React and Python, it uses JWT-based authentication and is designed around the idea of AI as a helpful, conversational assistant—not an autonomous editor.",
  image: getAssetPath("/images/inspire.png"), // Make sure this image exists in your assets
  technologies: [
    "React.js",
    "TypeScript",
    "Python",
    "FastAPI / Flask",
    "JWT Authentication",
    "LLMs Groq",
    "Open Router",
    "ReAct Agent Framework",
    "PostgreSQL / MongoDB"
  ],
  category: "AI/ML",
  features: [
    "Intelligent content generation via agentic reasoning",
    "ReAct-style agent ",
    "Secure multi-tenant isolation",
    "Intelligent Image analysis",
    "RESTful API with token-based auth for third-party integrations"
  ],
  github: "https://github.com/sarrabousnina/InspireAI.git", // Update if repo exists
  demo: getAssetPath("/videos/inspire2.mp4") // Optional: add a demo video path
},
{
  id: 2,
  title: "CorrectMe AI",
  subtitle: "AI-powered Exam Corrector (Internship)",
  description:
    "Web application that automates exam correction using OCR, LLMs, and agentic reasoning. Provides per-question and overall feedback with a grade out of 20.",
  longDescription:
    "CorrectMeAI is an AI-based web application developed during my internship at Mahd.Group. It leverages OCR to extract answers from scanned exams and integrates the Qwen3 LLM to compare student responses with the teacher’s key, generating both per-question feedback and an overall grade. To enhance usability, the system includes a chatbot powered by Retrieval-Augmented Generation (RAG) and a ReAct-style agent with memory, allowing teachers to query and interact with exam data naturally. The platform combines a React.js frontend with a Python Flask backend and MongoDB for data management, showcasing how AI can make exam correction faster, fairer, and smarter.",
image: getAssetPath("/images/correctme.png"),
  technologies: [
    "React.js",
    "Python",
    "Flask",
    "MongoDB",
    "JWT Auth",
    "Google Auth",
    "OCR",
    "Qwen3 LLM",
    "RAG",
    "ReAct Agent"
  ],
  category: "AI/ML",
  features: [
    "OCR-based extraction of answers from scanned exams",
    "Automated grading with Qwen3 LLM",
    "Detailed per-question and overall feedback",
    "Grade assignment out of 20",
    "Chatbot with RAG + ReAct agent for interactive queries",
    "Data management with MongoDB"
  ],
  github: "https://github.com/sarrabousnina/CorrectMeAi",
demo: getAssetPath("/videos/CorrectMeAi-demo.mp4"),
},
{
  id: 3,
  title: "TimeForge (Award-Winning)",
  subtitle: "AI-Powered Productivity App",
  description:
    "Plan tasks, track focus & mood, and boost productivity with gamification and AI insights.",
  longDescription:
    "TimeForge helps individuals and teams manage projects and recurring tasks (daily/weekly/monthly) with reminders. It detects distractions in real time (inactivity & tab switching), analyzes mood via quiz, text (LLM), and photo (DeepFace), and computes a stress index to personalize advice. Points-based gamification unlocks rewards and Pro access; an Enterprise version adds team management and dashboards.",
image: getAssetPath("/images/timeforge.jpg"), // ✅ correct in dev + GitHub Pages
    video: getAssetPath("/videos/timeforge-demo.mp4"),         // ✅ lives in /public/videos
  technologies: [
    "Angular",
    "Spring Boot",
    "MySQL",
    "Keycloak",
    "Stripe",
    "DeepFace",
    "Ollama (LLaMA3)"
  ],
  category: "AI/ML",
  features: [
    "Projects & tasks with one-time or recurring schedules (daily/weekly/monthly) + reminders",
    "Real-time distraction detection (inactivity + tab switching) during active tasks",
    "Mood tracking: quiz, image pick, text analysis (LLM), and photo emotions (DeepFace)",
    "Stress level computed from mood + inactivity signals",
    "Gamification with points and rewards; unlocks Pro access",
    "Stripe payments (Pro) and Enterprise dashboards with batch employee import",
    "Secure auth & roles with Keycloak"
  ],
  github: "https://github.com/BHAmna/PI", 
    demo: getAssetPath("/videos/timeforge-demo.mp4")                
},
{
  id: 4,
  title: "Employee Manager",
  subtitle: "Employee Records (CRUD) System",
  description:
    "Simple full-stack CRUD app to manage employees with search by name.",
  longDescription:
    "Employee Manager is a learning project built to practice Angular + Spring Boot. It exposes a REST API for employees and a reactive Angular UI to list, create, update, and delete records. It also supports quick search by name.",
image: getAssetPath("/images/EmployeeManager.png"),
  technologies: ["Angular", "TypeScript", "Spring Boot", "Java", "MySQL", "REST API"],
  category: "Full-Stack",
  features: [
    "Create / Read / Update / Delete employees",
    "Search by name",
    "Form validation and error handling",
    "API-first design with REST endpoints"
  ],
  github: "https://github.com/sarrabousnina/EmployeeManagerApp", 
},

{
  id: 5,
  title: "University",
  subtitle: "Clubs & Campus Management (Symfony)",
  description:
    "Full-stack university platform built in a team of four. I owned the Clubs module (CRUD, join/leave, ratings, SMS).",
  longDescription:
    "University is a campus management web app developed by a team of four using Symfony + MySQL. My scope was the Clubs module: create/edit clubs, view details, member counts, join/leave with Twilio SMS notifications, search & filters, and club ratings. The app also includes events, trainings, and library management.",
image: getAssetPath("/images/university.jpg"),
  technologies: ["Symfony (PHP)", "MySQL", "Twig", "REST API", "Twilio SMS"],
  category: "Web Platform",
  features: [
    "Clubs CRUD + detail pages",
    "Join/Leave with live member count",
    "Club ratings & reviews",
    "Search & filters (by name/category)",
    "Twilio SMS on join/leave",
    "Events & trainings (team features)",
    "Library/books management (team feature)"
  ],
  github: "https://github.com/S1merbnb/ProjetSymfony", 
},
   {
  id:   6,
  title: "MyCTAMA Insurance App",
  subtitle: ".NET MAUI Mobile App (Internship)",
  description:
    "Cross-platform app to request insurance quotes and find nearby CTAMA agencies on a map.",
  longDescription:
    "Built with .NET MAUI for Android/iOS. Users can request quotes for Home, Car, Agriculture, and Health, browse a news feed on the home screen, and locate agencies on an interactive map. Some static pages were implemented with embedded HTML/CSS.",
image: getAssetPath("/images/ctama.png"),
  technologies: [
    ".NET MAUI",
    "C#",
    "XAML",
    "Maps",
    "HTML",
    "CSS"
  ],
  category: "Mobile",
  features: [
    "Quote requests: Home / Car / Agriculture / Health",
    "Agency locator with map and GPS",
    "Home screen news feed",
    "Form validation & API submission",
    "Hybrid pages using embedded HTML/CSS"
  ],
  github: "https://github.com/sarrabousnina/MyCTAMA",  
  demo: "https://github.com/user-attachments/assets/f62af4be-3fd2-490b-8661-78d6df427005"       
}
]

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={cardVariants} className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          <motion.p variants={cardVariants} className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative applications combining full-stack development and AI to solve
            real-world challenges.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={cardVariants}>
              <Card className="glass glass-dark rounded-xl border-2 border-white/10 overflow-hidden group cursor-pointer h-full">
                <div className="relative overflow-hidden" onClick={() => setSelectedProject(project)}>
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="w-full h-full"
                    >
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>

                    {/* Overlay */}
                    <motion.div
                      initial="hidden"
                      whileHover="visible"
                      variants={overlayVariants}
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6"
                    >
                      <div className="w-full">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="bg-slate-900/80 text-slate-100 border-slate-700 text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge
                              variant="secondary"
                              className="bg-slate-900/80 text-slate-100 border-slate-700 text-xs"
                            >
                              +{project.technologies.length - 3}
                            </Badge>
                          )}
                        </div>
                        <Badge className="bg-slate-900 text-slate-100 border-slate-700 text-xs">
                          {project.category}
                        </Badge>
                      </div>
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-xl mb-2 group-hover:text-gradient-from transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">{project.subtitle}</p>
                    <p className="text-foreground/80 text-sm leading-relaxed mb-4">{project.description}</p>

                    <div className="flex items-center justify-between">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gradient-from hover:text-gradient-to transition-colors p-0"
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedProject(project)
                        }}
                      >
                        Learn More →
                      </Button>

                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground hover:text-foreground"
                          onClick={(e) => {
                            e.stopPropagation()
                            window.open(project.github, "_blank")
                          }}
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground hover:text-foreground"
                          onClick={(e) => {
                            e.stopPropagation()
                            window.open(project.demo, "_blank")
                          }}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto glass glass-dark border-2 border-white/20">
                <DialogHeader>
                  <DialogTitle className="font-heading text-2xl mb-4">
                    {selectedProject.title}
                    <span className="text-muted-foreground text-lg font-normal ml-2">{selectedProject.subtitle}</span>
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Project Image */}
                  <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden">
                    <Image
                      src={selectedProject.image || "/placeholder.svg"}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-3">About This Project</h3>
                    <p className="text-foreground/80 leading-relaxed">{selectedProject.longDescription}</p>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-3">Key Features</h3>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {selectedProject.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-gradient-from to-gradient-to" />
                          <span className="text-sm text-foreground/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-slate-100 text-slate-700 dark:bg-slate-800/80 dark:text-slate-200 border border-slate-300 dark:border-slate-600"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    <Button
                      className="bg-gradient-to-r from-indigo-500 to-sky-500 hover:from-indigo-600 hover:to-sky-600 text-white"
                      onClick={() => window.open(selectedProject.demo, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Demo
                    </Button>
                    <Button
                      variant="outline"
                      className="border-slate-300 text-slate-800 hover:border-indigo-400 dark:border-slate-600 dark:text-slate-200 bg-transparent"
                      onClick={() => window.open(selectedProject.github, "_blank")}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
