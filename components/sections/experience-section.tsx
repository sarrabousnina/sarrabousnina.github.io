"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"
import { GraduationCap, Users, Brain, Code, Award } from "lucide-react"
import { Variants, easeOut, easeInOut } from "framer-motion"
import { useLanguageStore } from "@/stores/language-store"

type TimelineItemData = {
  id: number
  type: string
  icon: React.ElementType
  title: string | string[]
  organization?: string | string[]
  period?: string | string[]
  description: string | string[]
  technologies?: string[]
  achievements?: string[] | string | undefined
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
}

const dotVariants = {
  hidden: { scale: 0.8, opacity: 0.5 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: easeOut,
    },
  },
  highlight: {
    scale: 1.3,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: easeOut,
    },
  },
}

export function ExperienceSection() {
  const { t } = useLanguageStore()

  const safeT = (section: string, key: string, fallback: string | string[]) => {
    try {
      const result = t(section, key)
      return result !== undefined ? result : fallback
    } catch (error) {
      return fallback
    }
  }

  const getExperiences = () => {
    return [
      {
        id: 1,
        type: "experience",
        icon: Briefcase,
        title: safeT('experience', 'mahdGroup.title', 'AI Software Development Intern'),
        organization: safeT('experience', 'mahdGroup.organization', 'Mahd.Group'),
        period: safeT('experience', 'mahdGroup.period', 'July 2025 – August 2025'),
        description: safeT('experience', 'mahdGroup.description', 'Developed CorrectMeAI, an AI-powered web application for automated exam correction, leveraging OCR, LLMs, and intelligent agents.'),
        technologies: [
          "React.js",
          "Python",
          "Flask",
          "MongoDB",
          "OCR",
          "Qwen3 LLM",
          "RAG",
          "ReAct Agent"
        ],
        achievements: safeT('experience', 'mahdGroup.achievements', [
          "Built a full-stack AI exam correction platform from scratch",
          "Integrated OCR to extract answers from scanned exams",
          "Implemented automated grading and per-question feedback using Qwen3 LLM",
          "Developed RAG-powered chatbot with ReAct agent for interactive queries",
          "Designed a seamless React.js frontend connected to Flask backend"
        ]),
      },
      {
        id: 2,
        type: "experience",
        icon: Briefcase,
        title: safeT('experience', 'ctama.title', 'Software Development Intern'),
        organization: safeT('experience', 'ctama.organization', 'CTAMA Insurance'),
        period: safeT('experience', 'ctama.period', 'July 2024 - August 2024'),
        description: safeT('experience', 'ctama.description', 'Developed a comprehensive mobile insurance application MyCTAMA using .NET MAUI, implementing features for claims processing, quote generation, and agency location services. Collaborated with cross-functional teams to deliver a user-friendly solution that streamlined customer interactions.'),
        technologies: [".NET MAUI", "C#", "XAML"],
        achievements: safeT('experience', 'ctama.achievements', [
          "Built complete mobile app from scratch",
          "Implemented GPS-based agency locator",
          "Designed intuitive claims submission flow",
          "Integrated real-time quote generation",
        ]),
      }
    ]
  }

  const getEducation = () => {
    return [
      {
        id: 3,
        type: "education",
        icon: GraduationCap,
        title: safeT('education', 'esprit.title', 'Software Engineering'),
        organization: safeT('education', 'esprit.organization', 'ESPRIT (École Supérieure Privée d\'Ingénierie et de Technologies)'),
        period: safeT('education', 'esprit.period', '2023 - Present'),
        description: safeT('education', 'esprit.description', 'Currently pursuing a comprehensive Software Engineering degree with specialization in AI and machine learning. Actively engaged in advanced coursework covering algorithms, software architecture, and emerging technologies.'),
        technologies: ["Java", "Python", "AI/ML", "Software Architecture"],
        achievements: safeT('education', 'esprit.achievements', [
          "Specialized in AI and Machine Learning",
          "Active member of DeepFlow AI Club",
          "Mentor for junior students",
          "Consistent academic excellence",
        ]),
      },
      {
        id: 4,
        type: "education",
        icon: GraduationCap,
        title: safeT('education', 'ipein.title', 'Pre-Engineering Program'),
        organization: safeT('education', 'ipein.organization', 'IPEIN (Institut Préparatoire aux Études d\'Ingénieurs de Nabeul)'),
        period: safeT('education', 'ipein.period', '2021 - 2023'),
        description: safeT('education', 'ipein.description', 'Completed intensive preparatory program focusing on mathematics, physics, and foundational engineering principles. Built strong analytical and problem-solving skills essential for advanced engineering studies.'),
        technologies: ["Mathematics", "Physics", "Programming Fundamentals"],
        achievements: safeT('education', 'ipein.achievements', [
          "Strong foundation in engineering principles",
          "Advanced mathematical proficiency",
          "Problem-solving methodology",
          "Successful transition to engineering school",
        ]),
      },
      {
        id: 5,
        type: "education",
        icon: Award,
        title: safeT('education', 'baccalaureate.title', 'Mathematics Baccalaureate'),
        organization: safeT('education', 'baccalaureate.organization', 'Pioneer High School of Hammam Lif'),
        period: safeT('education', 'baccalaureate.period', '2017-2021'),
        description: safeT('education', 'baccalaureate.description', 'Graduated with honors in Mathematics Baccalaureate, demonstrating exceptional analytical abilities and academic excellence.'),
        technologies: ["Advanced Mathematics", "Sciences", "Critical Thinking"],
        achievements: safeT('education', 'baccalaureate.achievements', [
          "Graduated with Honors",
          "Mathematics specialization",
          "Academic excellence",
          "University preparation",
        ]),
      },
    ]
  }

  const experiences = getExperiences()
  const education = getEducation()
  const allItems = [...experiences, ...education].sort((a, b) => {
    const periodA = Array.isArray(a.period) ? a.period[0] : a.period
    const periodB = Array.isArray(b.period) ? b.period[0] : b.period
    const yearA = Number.parseInt(periodA?.toString().split(" - ")[0] || periodA?.toString() || "0")
    const yearB = Number.parseInt(periodB?.toString().split(" - ")[0] || periodB?.toString() || "0")
    return yearB - yearA // Sort by most recent first
  })

  function TimelineItem({ item, index }: { item: TimelineItemData; index: number }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, margin: "-100px" })

    const getTypeColor = (type: string) => {
      switch (type) {
        case "experience":
          return "from-blue-500 to-cyan-500"
        case "education":
          return "from-purple-500 to-pink-500"
        case "certification":
          return "from-orange-500 to-red-500"
        case "organization":
          return "from-green-500 to-emerald-500"
        default:
          return "from-gray-500 to-gray-600"
      }
    }

    const getTypeLabel = (type: string) => {
      switch (type) {
        case "experience":
          return safeT('experience', 'currentPosition', 'Experience')
        case "education":
          return safeT('education', 'title', 'Education')
        case "certification":
          return safeT('certifications', 'title', 'Certification')
        case "organization":
          return safeT('community', 'title', 'Organization')
        default:
          return safeT('projects', 'other', 'Other')
      }
    }

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={itemVariants}
        className="relative flex items-start gap-6 pb-12"
      >
        {/* Timeline Dot */}
        <div className="relative flex-shrink-0">
          <motion.div
            variants={dotVariants}
            animate={isInView ? "highlight" : "visible"}
            className={`w-12 h-12 rounded-full bg-gradient-to-r ${getTypeColor(
              item.type,
            )} flex items-center justify-center shadow-lg`}
          >
            <item.icon className="h-6 w-6 text-white" />
          </motion.div>

          {/* Connecting Line */}
          {index < allItems.length - 1 && (
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-muted-foreground/30 to-transparent" />
          )}
        </div>

        {/* Content Card */}
        <Card className="glass glass-dark p-6 rounded-xl border-2 border-white/10 hover:border-white/20 transition-all duration-300 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <Badge variant="secondary" className={`bg-gradient-to-r ${getTypeColor(item.type)} text-white mb-2`}>
                {getTypeLabel(item.type)}
              </Badge>
              <h3 className="font-heading font-bold text-xl mb-1">{Array.isArray(item.title) ? item.title[0] : item.title}</h3>
              <p className="text-gradient-from font-semibold">{Array.isArray(item.organization) ? item.organization[0] : item.organization}</p>
            </div>
            <Badge variant="outline" className="glass glass-dark border border-white/20 text-sm">
              {Array.isArray(item.period) ? item.period[0] : item.period}
            </Badge>
          </div>

          <p className="text-foreground/80 leading-relaxed mb-4">{Array.isArray(item.description) ? item.description[0] : item.description}</p>

          {item.technologies && (
            <div className="mb-4">
              <h4 className="font-semibold text-sm mb-2 text-muted-foreground">{safeT('experience', 'technologies', 'Technologies')}</h4>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-slate-100 text-slate-700 dark:bg-slate-800/80 dark:text-slate-200 border border-slate-300 dark:border-slate-600 text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {item.achievements && (
            <div>
              <h4 className="font-semibold text-sm mb-2 text-muted-foreground">{safeT('experience', 'keyAchievements', 'Key Achievements')}</h4>
              <div className="grid sm:grid-cols-2 gap-2">
                {(Array.isArray(item.achievements) ? item.achievements : [item.achievements]).filter(Boolean).map((achievement, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getTypeColor(item.type)}`} />
                    <span className="text-sm text-foreground/80">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Card>
      </motion.div>
    )
  }

  return (
    <section id="experience" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
            {safeT('experience', 'currentPosition', 'Experience')} &{" "}
            <span className="bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent">
              {safeT('education', 'title', 'Education')}
            </span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {safeT('experience', 'subtitle', 'A comprehensive journey through professional experience, academic achievements, certifications, and community involvement in the field of software engineering and AI.')}
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Main Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gradient-from via-muted-foreground/30 to-gradient-to" />

          {/* Timeline Items */}
          <div className="space-y-0">
            {allItems.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}