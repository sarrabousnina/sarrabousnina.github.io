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
import { useLanguageStore } from "@/stores/language-store"
import {
  enhancedContainerVariants,
  enhancedItemVariants,
  floatingCardVariants,
  slideInFromLeft,
  slideInFromRight,
  textRevealVariants
} from "@/hooks/use-scroll-animation"

const enhancedCardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
    rotateX: 15
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      delay: i * 0.15,
      duration: 0.8,
    },
  }),
  hover: {
    y: -8,
    scale: 1.02,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
}

const overlayVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    backdropFilter: "blur(0px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    backdropFilter: "blur(8px)",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 25,
      duration: 0.4,
    },
  },
}

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: {
      duration: 0.2,
    },
  },
}

export function ProjectsSection() {
  const { t } = useLanguageStore()
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const safeT = (section: string, key: string, fallback: string) => {
    try {
      return t(section, key) || fallback
    } catch (error) {
      return fallback
    }
  }

  const getTranslatedFeatures = (projectKey: string, fallback: string[]) => {
    try {
      const features = t('projects', `${projectKey}.features`)
      return Array.isArray(features) ? features : fallback
    } catch (error) {
      return fallback
    }
  }

  const getProjects = () => {
    return [{
      id: 1,
      title: safeT('projects', 'inspireAI.title', 'inspireAI'),
      subtitle: safeT('projects', 'inspireAI.subtitle', 'AI-Powered Content Studio (Personal Project)'),
      description: safeT('projects', 'inspireAI.description', 'A platform that helps creators generate, organize, and refine social media content and blog posts using AI and a ReAct-style AI agent for conversational interaction.'),
      longDescription: safeT('projects', 'inspireAI.longDescription', 'inspireAI is my personal AI content studio built with React and FastAPI that helps creators write blog posts and social media captions without losing control.'),
      image: getAssetPath("/images/inspire.png"),
      technologies: [
        "React.js",
        "TypeScript",
        "Python",
        "FastAPI",
        "JWT Authentication",
        "Groq API",
        "OpenRouter",
        "ReAct Agent",
        "PostgreSQL"
      ],
      category: "AI/ML",
      features: getTranslatedFeatures('inspireAI', [
        "AI-generated blog & social media posts tailored to audience and platform",
        "Image understanding via Llama models (OpenRouter) for contextual content generation",
        "Conversational ReAct agent for querying content history and summaries",
        "Secure multi-tenant architecture with JWT authentication",
        "Content history with pinning, deletion, and quick preview options",
        "RESTful API for future third-party integrations"
      ]),
      github: "https://github.com/sarrabousnina/InspireAI.git",
      demo: getAssetPath("/videos/inspire2.mp4")
    },
    {
      id: 2,
      title: safeT('projects', 'correctMeAI.title', 'CorrectMe AI'),
      subtitle: safeT('projects', 'correctMeAI.subtitle', 'AI-powered Exam Corrector (Internship)'),
      description: safeT('projects', 'correctMeAI.description', 'Web application that automates exam correction using computer vision, LLMs, and a ReAct agent with RAG. Provides feedback per question and generates new exams from course material.'),
      longDescription: safeT('projects', 'correctMeAI.longDescription', 'CorrectMeAI is an AI-based web application developed during my internship at Mahd.Group. It leverages OCR to extract answers from scanned exams and integrates the Qwen3 LLM to compare student responses with the teacher\'s key, generating both per-question feedback and an overall grade. To enhance usability, the system includes a chatbot powered by Retrieval-Augmented Generation (RAG) and a ReAct-style agent with memory, allowing teachers to query and interact with exam data naturally. The platform combines a React.js frontend with a Python Flask backend and MongoDB for data management, showcasing how AI can make exam correction faster, fairer, and smarter.'),
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
        "Groq API",
        "RAG",
        "ReAct Agent"
      ],
      category: "AI/ML",
      features: getTranslatedFeatures('correctMeAI', [
        "OCR-based extraction of answers from scanned exams",
        "Automated grading with Qwen3 LLM",
        "Detailed per-question and overall feedback",
        "Grade assignment out of 20",
        "Chatbot with RAG + ReAct agent for queries and exam generation",
        "Exam and student result management",
        "Data management with MongoDB"
      ]),
      github: "https://github.com/sarrabousnina/CorrectMeAi",
      demo: getAssetPath("/videos/CorrectMeAi-demo.mp4"),
    },
    {
      id: 3,
      title: safeT('projects', 'timeForge.title', 'TimeForge (Award-Winning)🥇​'),
      subtitle: safeT('projects', 'timeForge.subtitle', 'AI-Powered Productivity App'),
      description: safeT('projects', 'timeForge.description', 'Plan tasks, track focus & mood, and boost productivity with gamification and AI insights.'),
      longDescription: safeT('projects', 'timeForge.longDescription', 'TimeForge helps individuals and teams manage projects and recurring tasks (daily/weekly/monthly) with reminders. It detects distractions in real time (inactivity & tab switching), analyzes mood via quiz, text (LLM), and photo (DeepFace), and computes a stress index to personalize advice. Points-based gamification unlocks rewards and Pro access; an Enterprise version adds team management and dashboards.'),
      image: getAssetPath("/images/timeforge.jpg"),
      video: getAssetPath("/videos/timeforge-demo.mp4"),
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
      features: getTranslatedFeatures('timeForge', [
        "Projects & tasks with one-time or recurring schedules (daily/weekly/monthly) + reminders",
        "Real-time distraction detection (inactivity + tab switching) during active tasks",
        "Mood tracking: quiz, image pick, text analysis (LLM), and photo emotions (DeepFace)",
        "Stress level computed from mood + inactivity signals",
        "Gamification with points and rewards; unlocks Pro access",
        "Stripe payments (Pro) and Enterprise dashboards with batch employee import",
        "Secure auth & roles with Keycloak"
      ]),
      github: "https://github.com/BHAmna/PI",
      demo: getAssetPath("/videos/timeforge-demo.mp4")
    },
    {
      id: 4,
      title: safeT('projects', 'employeeManager.title', 'Employee Manager'),
      subtitle: safeT('projects', 'employeeManager.subtitle', 'Employee Records (CRUD) System (Personal Project)'),
      description: safeT('projects', 'employeeManager.description', 'Simple full-stack CRUD app to manage employees with search by name.'),
      longDescription: safeT('projects', 'employeeManager.longDescription', 'Employee Manager is a learning project built to practice Angular + Spring Boot. It exposes a REST API for employees and a reactive Angular UI to list, create, update, and delete records. It also supports quick search by name.'),
      image: getAssetPath("/images/EmployeeManager.png"),
      technologies: ["Angular", "TypeScript", "Spring Boot", "Java", "MySQL", "REST API"],
      category: "Full-Stack",
      features: getTranslatedFeatures('employeeManager', [
        "Create / Read / Update / Delete employees",
        "Search by name",
        "Form validation and error handling",
        "API-first design with REST endpoints"
      ]),
      github: "https://github.com/sarrabousnina/EmployeeManagerApp",
    },
    {
      id: 5,
      title: safeT('projects', 'university.title', 'University'),
      subtitle: safeT('projects', 'university.subtitle', 'Clubs & Campus Management (Symfony)'),
      description: safeT('projects', 'university.description', 'Full-stack university platform built in a team of four. I owned the Clubs module (CRUD, join/leave, ratings, SMS).'),
      longDescription: safeT('projects', 'university.longDescription', 'University is a campus management web app developed by a team of four using Symfony + MySQL. My scope was the Clubs module: create/edit clubs, view details, member counts, join/leave with Twilio SMS notifications, search & filters, and club ratings. The app also includes events, trainings, and library management.'),
      image: getAssetPath("/images/university.jpg"),
      technologies: ["Symfony (PHP)", "MySQL", "Twig", "REST API", "Twilio SMS"],
      category: "Web Platform",
      features: getTranslatedFeatures('university', [
        "Clubs CRUD + detail pages",
        "Join/Leave with live member count",
        "Club ratings & reviews",
        "Search & filters (by name/category)",
        "Twilio SMS on join/leave",
        "Events & trainings (team features)",
        "Library/books management (team feature)"
      ]),
      github: "https://github.com/S1merbnb/ProjetSymfony",
    },
    {
      id: 6,
      title: safeT('projects', 'myCTAMA.title', 'MyCTAMA Insurance App'),
      subtitle: safeT('projects', 'myCTAMA.subtitle', '.NET MAUI Mobile App (Internship)'),
      description: safeT('projects', 'myCTAMA.description', 'Cross-platform app to request insurance quotes and find nearby CTAMA agencies on a map.'),
      longDescription: safeT('projects', 'myCTAMA.longDescription', 'Built with .NET MAUI for Android/iOS. Users can request quotes for Home, Car, Agriculture, and Health, browse a news feed on the home screen, and locate agencies on an interactive map. Some static pages were implemented with embedded HTML/CSS.'),
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
      features: getTranslatedFeatures('myCTAMA', [
        "Quote requests: Home / Car / Agriculture / Health",
        "Agency locator with map and GPS",
        "Home screen news feed",
        "Form validation & API submission",
        "Hybrid pages using embedded HTML/CSS"
      ]),
      github: "https://github.com/sarrabousnina/MyCTAMA",
      demo: "https://github.com/user-attachments/assets/f62af4be-3fd2-490b-8661-78d6df427005"
    }]
  }

  const projects = getProjects()

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={enhancedContainerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={textRevealVariants} className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
            {safeT('projects', 'title', 'Featured')}{" "}
            <motion.span
              variants={textRevealVariants}
              className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent inline-block"
            >
              {safeT('projects', 'projects', 'Projects')}
            </motion.span>
          </motion.h2>

          <motion.p variants={enhancedItemVariants} className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {safeT('projects', 'subtitle', 'A showcase of innovative applications combining full-stack development and AI to solve real-world challenges.')}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={enhancedContainerVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              variants={enhancedCardVariants}
              whileHover="hover"
            >
              <Card className="glass glass-dark rounded-xl border-2 border-white/10 overflow-hidden group cursor-pointer h-full transform-gpu">
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

                    {/* Enhanced Overlay with blur effect */}
                    <motion.div
                      initial="hidden"
                      whileHover="visible"
                      variants={overlayVariants}
                      className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-6"
                    >
                      <div className="w-full space-y-3">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 4).map((tech, techIndex) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileHover={{ scale: 1.05 }}
                              transition={{
                                delay: techIndex * 0.05,
                                type: "spring",
                                stiffness: 400,
                              }}
                            >
                              <Badge
                                variant="secondary"
                                className="bg-slate-900/80 backdrop-blur-sm text-slate-100 border-slate-700 text-xs shadow-lg"
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                          {project.technologies.length > 4 && (
                            <Badge
                              variant="secondary"
                              className="bg-slate-900/80 backdrop-blur-sm text-slate-100 border-slate-700 text-xs"
                            >
                              +{project.technologies.length - 4}
                            </Badge>
                          )}
                        </div>
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 text-xs shadow-lg">
                            {project.category}
                          </Badge>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <motion.div
                    className="p-6"
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.h3
                      className="font-heading font-bold text-xl mb-2 bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-muted-foreground text-sm mb-3">{project.subtitle}</p>
                    <p className="text-foreground/80 text-sm leading-relaxed mb-4">{project.description}</p>

                    <motion.div
                      className="flex items-center justify-between"
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-emerald-600 hover:text-teal-600 transition-all duration-300 p-0 hover:pl-2"
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedProject(project)
                        }}
                      >
                        {safeT('projects', 'learnMore', 'Learn More')}
                        <motion.span
                          className="inline-block ml-1"
                          whileHover={{ x: 3 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          →
                        </motion.span>
                      </Button>

                      <div className="flex gap-2">
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-foreground transition-colors"
                            onClick={(e) => {
                              e.stopPropagation()
                              window.open(project.github, "_blank")
                            }}
                          >
                            <Github className="h-4 w-4" />
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-foreground transition-colors"
                            onClick={(e) => {
                              e.stopPropagation()
                              window.open(project.demo, "_blank")
                            }}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Project Modal */}
        <AnimatePresence mode="wait">
          {selectedProject && (
            <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto glass glass-dark border-2 border-white/20">
                  <motion.div variants={enhancedItemVariants}>
                    <DialogHeader>
                      <motion.div variants={textRevealVariants}>
                        <DialogTitle className="font-heading text-2xl mb-4">
                          {selectedProject.title}
                          <span className="text-muted-foreground text-lg font-normal ml-2">{selectedProject.subtitle}</span>
                        </DialogTitle>
                      </motion.div>
                    </DialogHeader>
                  </motion.div>

                  <motion.div
                    variants={enhancedContainerVariants}
                    className="space-y-6"
                  >
                    {/* Project Image */}
                    <motion.div
                      variants={enhancedItemVariants}
                      className="relative h-64 sm:h-80 rounded-xl overflow-hidden shadow-2xl"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Image
                        src={selectedProject.image || "/placeholder.svg"}
                        alt={selectedProject.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>

                    {/* Description */}
                    <motion.div variants={enhancedItemVariants}>
                      <motion.h3 variants={textRevealVariants} className="font-heading font-semibold text-lg mb-3">
                        {safeT('projects', 'aboutProject', 'About This Project')}
                      </motion.h3>
                      <motion.p
                        variants={enhancedItemVariants}
                        className="text-foreground/80 leading-relaxed"
                      >
                        {selectedProject.longDescription}
                      </motion.p>
                    </motion.div>

                    {/* Features */}
                    <motion.div variants={enhancedItemVariants}>
                      <motion.h3 variants={textRevealVariants} className="font-heading font-semibold text-lg mb-3">
                        {safeT('projects', 'keyFeatures', 'Key Features')}
                      </motion.h3>
                      <motion.div
                        variants={enhancedContainerVariants}
                        className="grid sm:grid-cols-2 gap-3"
                      >
                        {selectedProject.features.map((feature: string, index: number) => (
                          <motion.div
                            key={index}
                            variants={enhancedItemVariants}
                            custom={index}
                            className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                            whileHover={{ scale: 1.02, x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <motion.div
                              className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex-shrink-0"
                              whileHover={{ scale: 1.5 }}
                              transition={{ type: "spring", stiffness: 500 }}
                            />
                            <span className="text-sm text-foreground/80">{feature}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>

                    {/* Technologies */}
                    <motion.div variants={enhancedItemVariants}>
                      <motion.h3 variants={textRevealVariants} className="font-heading font-semibold text-lg mb-3">
                        {safeT('projects', 'technologiesUsed', 'Technologies Used')}
                      </motion.h3>
                      <motion.div
                        variants={enhancedContainerVariants}
                        className="flex flex-wrap gap-2"
                      >
                        {selectedProject.technologies.map((tech: string, techIndex: number) => (
                          <motion.div
                            key={tech}
                            variants={enhancedItemVariants}
                            custom={techIndex}
                            whileHover={{ scale: 1.1, y: -2 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <Badge
                              variant="secondary"
                              className="bg-slate-100 text-slate-700 dark:bg-slate-800/80 dark:text-slate-200 border border-slate-300 dark:border-slate-600 hover:shadow-lg"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>

                    {/* Enhanced Links */}
                    <motion.div
                      variants={enhancedItemVariants}
                      className="flex gap-4 pt-4"
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Button
                          className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg hover:shadow-xl"
                          onClick={() => window.open(selectedProject.demo, "_blank")}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          {safeT('projects', 'viewDemo', 'View Demo')}
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Button
                          variant="outline"
                          className="border-slate-300 text-slate-800 hover:border-emerald-400 dark:border-slate-600 dark:text-slate-200 bg-transparent hover:shadow-lg"
                          onClick={() => window.open(selectedProject.github, "_blank")}
                        >
                          <Github className="mr-2 h-4 w-4" />
                          {safeT('projects', 'viewCode', 'View Code')}
                        </Button>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </DialogContent>
              </motion.div>
            </Dialog>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}