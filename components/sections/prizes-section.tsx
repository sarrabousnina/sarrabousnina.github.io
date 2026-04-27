"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { getAssetPath } from "@/lib/asset"
import { Variants, easeOut, easeInOut } from "framer-motion"
import { useLanguageStore } from "@/stores/language-store"


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
      ease: easeOut,
    },
  },
}

export function PrizesSection() {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const { t, locale } = useLanguageStore()

  const safeT = (section: string, key: string, fallback: string | string[]) => {
    try {
      const result = t(section, key)
      return result !== undefined ? result : fallback
    } catch (error) {
      return fallback
    }
  }

  const getPrizes = () => {
    return [
      {
        id: 1,
        title: safeT('prizes', 'autoInsuranceHack.title', '2nd Place – Hack for smart insurance by EY x Dauphine'),
        subtitle: safeT('prizes', 'autoInsuranceHack.subtitle', 'Smart claims automation & fraud detection'),
        description: safeT('prizes', 'autoInsuranceHack.description', 'Developed an end-to-end AI pipeline that automates automobile insurance claims by analyzing car damage photos, estimating repair costs in TND, and detecting fraudulent claims. Achieved 2nd place among 18 teams.'),
        longDescription: safeT('prizes', 'autoInsuranceHack.longDescription', '🥈 2𝐧𝐝 𝐏𝐥𝐚𝐜𝐞 among 18 teams! \n\nOur team built an intelligent AI system to transform automobile insurance claims in Tunisia. When an accident occurs, the insurer uploads a photo of the damaged vehicle—and our pipeline instantly:\n\n• Segments the car into parts (e.g., front door, rear glass)\n• Classifies damage type across 6 categories (dent, scratch, shattered glass, etc.)\n• Combines location + damage to pinpoint exact affected components\n• Identifies car make, model, and year range\n• Scrapes trusted Tunisian sources to fetch real-time part prices in TND\n• Generates a detailed repair cost report for expert validation\n• Flags potential fraud (e.g., claimed 1000 TND vs. AI-estimated 750 TND)\n\nAdditionally, we integrated a juridic chatbot powered by RAG that monitors official legal websites for updates in insurance or traffic laws and keeps our knowledge base current.\n\nThis solution saves insurers hours per claim, reduces fraud, and ensures compliance—all through smart, localized AI.'),
        image: getAssetPath("/images/dauph.jpeg"),
        technologies: [
          "Computer Vision (Segmentation & Classification)",
          "Web Scraping",
          "Fraud Detection",
          "RAG (Retrieval-Augmented Generation)",
          "Legal Tech / Juridic AI",
          "Python",
          "PyTorch / TensorFlow"
        ],
        category: safeT('prizes', 'autoInsuranceHack.category', 'Hackathon / AI for Insurance'),
        features: safeT('prizes', 'autoInsuranceHack.features', [
          "Automated car damage analysis from a single photo",
          "Real-time repair cost estimation in Tunisian Dinar (TND)",
          "AI-powered insurance fraud detection",
          "RAG-based legal assistant with live regulatory updates"
        ]),
        github: "https://github.com/yassine-kharrat/dauph",
        demo: getAssetPath("/videos/dauph.mp4"),
      },
      {
        id: 2,
        title: safeT('prizes', 'finnovo.title', '2nd Place – Finnovo 1.0 Hackathon'),
        subtitle: safeT('prizes', 'finnovo.subtitle', 'BFF Loan Hub - AI-Powered Loan Application System'),
        description: safeT('prizes', 'finnovo.description', 'Built BFF Loan Hub, an AI-powered loan application system with automated document verification, fraud detection, and compliance checking for Tunisian banking regulations. Achieved 2nd place at Finnovo 1.0 Hackathon.'),
        longDescription: safeT('prizes', 'finnovo.longDescription', '🥈 2nd Place at Finnovo 1.0 Hackathon!\n\nProject: BFF Loan Hub\n\nOur team built an intelligent loan application system that transforms the banking workflow in Tunisia. The platform addresses key challenges in the lending process by leveraging cutting-edge AI technology.\n\nKey Features:\n\n• AI-Powered Document Verification: Uses Groq\'s Llama-4-Scout to automatically verify applicant documents and detect inconsistencies\n• Fraud Detection: Cross-references all uploaded documents to identify potential fraud patterns and red flags\n• Regulatory Compliance: Ensures adherence to Tunisian banking regulations through automated compliance checks\n• Streamlined Processing: Real-time verification reduces loan application processing time from days to minutes\n• Secure Data Management: SQLite-based persistence with secure document handling and data privacy\n\nTechnical Implementation:\n\nThe system combines a modern React 19 frontend with Vite, Tailwind CSS, and TanStack Router for an intuitive user experience. The FastAPI backend hosts an AI agent that intelligently processes loan applications, verifies documentation, and generates compliance reports.\n\nImpact:\n\nThis solution significantly reduces manual review time for bank staff, minimizes fraud risk through AI-powered detection, and ensures regulatory compliance—making the lending process faster, safer, and more efficient for both banks and applicants.\n\nTeam Achievement:\n\nOur innovative approach and technical execution earned us 2nd place among competing teams, demonstrating strong collaboration, full-stack development skills, and AI integration capabilities in the fintech sector.'),
        image: getAssetPath("/images/finnovo1.jpeg"),
        technologies: [
          "React 19",
          "Vite",
          "FastAPI",
          "Groq SDK",
          "Llama-4-Scout",
          "SQLite",
          "Tailwind CSS",
          "TanStack Router",
          "TypeScript",
          "Python",
          "AI Agent"
        ],
        category: safeT('prizes', 'finnovo.category', 'Hackathon/Fintech'),
        features: safeT('prizes', 'finnovo.features', [
          "AI-powered document verification using Groq Llama-4-Scout",
          "Automated fraud detection by cross-referencing uploaded documents",
          "Compliance checking for Tunisian banking regulations",
          "Real-time loan application processing",
          "Secure document management with SQLite persistence"
        ]),
        github: "https://github.com/Roua-Khalfet/bff-loan-hub",
        demo: getAssetPath("/videos/demo bffb.mp4"),
      },
      {
        id: 3,
        title: safeT('prizes', 'cyberia.title', '2nd Place – CyberIA Hackathon at ESPRIT'),
        subtitle: safeT('prizes', 'cyberia.subtitle', 'EagleScout - AI-Powered Security Vulnerability Detection System'),
        description: safeT('prizes', 'cyberia.description', 'Built EagleScout, an intelligent security vulnerability detection system that analyzes infrastructure architecture using AI. Our solution combines local VLM analysis with cloud-based vulnerability scanning to provide comprehensive security assessments with reasoning traces and compliance classification. Achieved 2nd place among 33 teams at ESPRIT.'),
        longDescription: safeT('prizes', 'cyberia.longDescription', '🥈 2nd Place at CyberIA Hackathon - ESPRIT!\n\nProject: EagleScout\n\nOur team built an innovative security vulnerability detection system that transforms how organizations identify and prioritize security risks. The platform combines multiple AI approaches to deliver comprehensive security analysis.\n\nKey Features:\n\n• Architecture Analysis: Users upload infrastructure architecture images analyzed by local VLM (foundation-sec-8b-reasoning) for privacy and security\n• Intelligent Vulnerability Scanning: Cloud-based scraper agent operates in sandboxed environment to detect vulnerabilities and outputs clean JSON results\n• AI-Powered Scoring: Foundation-sec-8b-reasoning model analyzes vulnerabilities alongside architecture and tech stack to generate risk scores with detailed reasoning traces\n• Smart Dashboard: Vulnerabilities sorted by score and priority with interactive visualization\n• Advanced Reasoning: Implements graph traversal and ReAct patterns for sophisticated security analysis\n• Compliance Classification: Categorizes vulnerabilities by compliance field (healthcare, banking, etc.) for regulatory adherence\n\nTechnical Implementation:\n\nThe system addresses local LLM context limitations by combining local VLM for sensitive data analysis with cloud-based scraping for comprehensive vulnerability detection. The AI layer provides detailed reasoning traces, making security analysis transparent and actionable.\n\nTeam Achievement:\n\nOur innovative approach to security analysis, combining multiple AI techniques and practical compliance features, earned us 2nd place among 33 competing teams at the CyberIA Hackathon held at ESPRIT.'),
        image: getAssetPath("/images/cyberia.png"),
        technologies: [
          "AI/ML",
          "VLM (Vision Language Model)",
          "Foundation-sec-8b-reasoning",
          "ReAct Pattern",
          "Graph Traversal",
          "Cloud Scraping",
          "Sandboxed Security",
          "Compliance Classification",
          "Dashboard"
        ],
        category: safeT('prizes', 'cyberia.category', 'Hackathon/Cybersecurity'),
        features: safeT('prizes', 'cyberia.features', [
          "Architecture image analysis with local VLM for privacy",
          "Sandboxed cloud scraper agent for vulnerability detection",
          "AI-powered risk scoring with reasoning traces",
          "Interactive dashboard sorted by priority and score",
          "Compliance classification (healthcare, banking, etc.)",
          "Graph traversal and ReAct patterns for advanced analysis"
        ]),
        github: "https://github.com/sarrabousnina/CyberIA_Hack_EagleScout",
        demo: getAssetPath("/videos/cyber_demo.mp4"),
      },
      {
        id: 4,
        title: safeT('prizes', 'balDesProjets.title', '1st Prize, Bal des Projets 2025 12ème édition (Software Engineering)'),
        subtitle: safeT('prizes', 'balDesProjets.subtitle', 'TimeForge - AI-Powered Productivity App'),
        description: safeT('prizes', 'balDesProjets.description', 'Built a modular app with a team of five, featuring screen-time analytics, distraction detection, mood analysis with DeepFace, and NLP-driven personalized advice.'),
        longDescription: safeT('prizes', 'balDesProjets.longDescription', 'TimeForge won 1st Prize among all classes of our Software Engineering specialty at Bal des Projets 2025. Collaborating in a team of five, we developed a modular application using Spring Boot, Angular, Python, and MySQL. The platform provides advanced analytics including screen-time tracking, distraction detection, mood analysis via DeepFace, and personalized recommendations using NLP. This project highlights full-stack development skills, AI-driven analytics, and teamwork.'),
        image: getAssetPath("/images/bal.jpg"),
        technologies: [
          "Spring Boot",
          "Angular",
          "Python",
          "MySQL",
          "DeepFace",
          "NLP"
        ],
        category: safeT('prizes', 'balDesProjets.category', 'Software Engineering / AI'),
        features: safeT('prizes', 'balDesProjets.features', [
          "Screen-time analytics",
          "Distraction detection",
          "Mood analysis with DeepFace",
          "Personalized advice using NLP",
          "Modular and scalable full-stack architecture"
        ]),
        github: "https://github.com/BHAmna/PI",
        demo: getAssetPath("/videos/timeforge-demo.mp4"),
      },
      {
        id: 5,
        title: safeT('prizes', 'insatHackathon.title', '1st Prize at INSAT Hackathon'),
        subtitle: safeT('prizes', 'insatHackathon.subtitle', 'INSAT Hackathon for drug discovery'),
        description: safeT('prizes', 'insatHackathon.description', 'Participated in the Hackathon CTRL + Cure organized by IEEE EMBS ISI SBC & IEEE EMBS INSAT SB under the theme \'Hack for Drug Discovery\'. Our team was awarded 1st place for developing \'Your Lab Twin AI\', a platform integrating multiple automated solutions to accelerate drug discovery using agentic reasoning.'),
        longDescription: safeT('prizes', 'insatHackathon.longDescription', '1𝐬𝐭 𝐏𝐫𝐢𝐳𝐞 at INSAT Hackathon! 🏆 \n\nAn incredible experience taking part in Hackathon CTRL + Cure organized by IEEE EMBS ISI SBC & IEEE EMBS INSAT SB at INSAT under the theme "Hack for Drug Discovery." After an intense weekend, our team won 1st place among many brilliant minds. Grateful for the support, collaboration, and innovation shared throughout this journey. Huge thanks to my teammate Yassine Kharrat for dedication and creativity, and to the organizers, jury, and inspiring participants.\n\nOur idea, \'Your Lab Twin AI\', improves the speed of drug discovery by combining existing solutions that automate each step of the procedure into a single platform using agentic AI.'),
        image: getAssetPath("/images/hack.jpg"),
        technologies: [
          "AI/ML",
          "Agentic Reasoning",
          "Web Platform Integration",
          "Drug Discovery Automation"
        ],
        category: safeT('prizes', 'insatHackathon.category', 'Hackathon/AI'),
        features: safeT('prizes', 'insatHackathon.features', [
          "Integrates multiple drug discovery tools into one platform",
          "Accelerates experimental workflows",
          "Agentic AI system for intelligent interactions",
          "Supports collaborative research"
        ]),
        demo: getAssetPath("/videos/drug.mp4"),
      }
    ]
  }

  const prizes = getPrizes()

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
            {safeT('prizes', 'featured', 'Featured')}{" "}
            <span className="bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent">
              {safeT('prizes', 'title', 'Prizes')}
            </span>
          </motion.h2>

          <motion.p variants={cardVariants} className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {safeT('prizes', 'subtitle', 'A showcase of innovative applications combining full-stack development and AI to solve real-world challenges.')}
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
                        alt={Array.isArray(project.title) ? project.title[0] : project.title}
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
                      {Array.isArray(project.title) ? project.title[0] : project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">{Array.isArray(project.subtitle) ? project.subtitle[0] : project.subtitle}</p>
                    <p className="text-foreground/80 text-sm leading-relaxed mb-4">{Array.isArray(project.description) ? project.description[0] : project.description}</p>

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
                        {safeT('prizes', 'learnMore', 'Learn More')} →
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
                    {Array.isArray(selectedProject.title) ? selectedProject.title[0] : selectedProject.title}
                    <span className="text-muted-foreground text-lg font-normal ml-2">{Array.isArray(selectedProject.subtitle) ? selectedProject.subtitle[0] : selectedProject.subtitle}</span>
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Project Image */}
                  <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden">
                    <Image
                      src={selectedProject.image || "/placeholder.svg"}
                      alt={Array.isArray(selectedProject.title) ? selectedProject.title[0] : selectedProject.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-3">{safeT('prizes', 'aboutProject', 'About This Achievement')}</h3>
                    <p className="text-foreground/80 leading-relaxed">{Array.isArray(selectedProject.longDescription) ? selectedProject.longDescription[0] : selectedProject.longDescription}</p>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-3">{safeT('prizes', 'keyFeatures', 'Key Features')}</h3>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {(Array.isArray(selectedProject.features) ? selectedProject.features : [selectedProject.features]).filter(Boolean).map((feature: string, index: number) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-gradient-from to-gradient-to" />
                          <span className="text-sm text-foreground/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-3">{safeT('prizes', 'technologiesUsed', 'Technologies Used')}</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech: string) => (
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
                      {safeT('projects', 'liveDemo', 'View Demo')}
                    </Button>
                    <Button
                      variant="outline"
                      className="border-slate-300 text-slate-800 hover:border-indigo-400 dark:border-slate-600 dark:text-slate-200 bg-transparent"
                      onClick={() => window.open(selectedProject.github, "_blank")}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      {safeT('projects', 'viewCode', 'View Code')}
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