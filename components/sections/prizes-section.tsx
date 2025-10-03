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

const prizes = [
  {
    id: 1,
    title: "1st Prize at INSAT Hackathon",
    subtitle: "INSAT Hackathon for drug discovery",
    description:
      "Participated in the Hackathon CTRL + Cure organized by IEEE EMBS ISI SBC & IEEE EMBS INSAT SB under the theme 'Hack for Drug Discovery'. Our team was awarded 1st place for developing 'Your Lab Twin AI', a platform integrating multiple automated solutions to accelerate drug discovery using agentic reasoning.",
    longDescription:
      "1𝐬𝐭 𝐏𝐫𝐢𝐳𝐞 at INSAT Hackathon! 🏆 \n\n" +
      "An incredible experience taking part in Hackathon CTRL + Cure organized by IEEE EMBS ISI SBC & IEEE EMBS INSAT SB at INSAT under the theme “Hack for Drug Discovery.” After an intense weekend, our team won 1st place among many brilliant minds. Grateful for the support, collaboration, and innovation shared throughout this journey. Huge thanks to my teammate Yassine Kharrat for dedication and creativity, and to the organizers, jury, and inspiring participants.\n\n" +
      "Our idea, 'Your Lab Twin AI', improves the speed of drug discovery by combining existing solutions that automate each step of the procedure into a single platform using agentic AI.",
    image: getAssetPath("/images/hack.jpg"), // add your actual image
    technologies: [
      "AI/ML",
      "Agentic Reasoning",
      "Web Platform Integration",
      "Drug Discovery Automation"
    ],
    category: "Hackathon/AI",
    features: [
      "Integrates multiple drug discovery tools into one platform",
      "Accelerates experimental workflows",
      "Agentic AI system for intelligent interactions",
      "Supports collaborative research"
    ],
  },
  {
    id: 2,
    title: "1st Prize, Bal des Projets 2025 12ème édition (Software Engineering)",
    subtitle: "TimeForge - AI-Powered Productivity App",
    description:
      "Built a modular app with a team of five, featuring screen-time analytics, distraction detection, mood analysis with DeepFace, and NLP-driven personalized advice.",
    longDescription:
      "TimeForge won 1st Prize among all classes of our Software Engineering specialty at Bal des Projets 2025. Collaborating in a team of five, we developed a modular application using Spring Boot, Angular, Python, and MySQL. The platform provides advanced analytics including screen-time tracking, distraction detection, mood analysis via DeepFace, and personalized recommendations using NLP. This project highlights full-stack development skills, AI-driven analytics, and teamwork.",
    image: getAssetPath("/images/bal.jpg"), // add your actual image
    technologies: [
      "Spring Boot",
      "Angular",
      "Python",
      "MySQL",
      "DeepFace",
      "NLP"
    ],
    category: "Software Engineering / AI",
    features: [
      "Screen-time analytics",
      "Distraction detection",
      "Mood analysis with DeepFace",
      "Personalized advice using NLP",
      "Modular and scalable full-stack architecture"
    ],
    github: "https://github.com/BHAmna/PI",
    demo: getAssetPath("/videos/timeforge-demo.mp4"), // optional
  }
];


export function PrizesSection() {
  const [selectedProject, setSelectedProject] = useState<(typeof prizes)[0] | null>(null)

  return (
    <section id="prizes" className="py-20 bg-muted/30">
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
              Prizes
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
          {prizes.map((project) => (
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
