"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award } from "lucide-react"
import { Variants, easeOut, easeInOut } from "framer-motion"


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
      ease: easeOut,    },
  },
}

const dotVariants = {
  hidden: { scale: 0.8, opacity: 0.5 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: easeOut,    },
  },
  highlight: {
    scale: 1.3,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: easeOut,    },
  },
}

const education = [
  {
    id: 1,
    type: "education",
    icon: GraduationCap,
    title: "Software Engineering",
    organization: "ESPRIT (École Supérieure Privée d'Ingénierie et de Technologies)",
    period: "2023 - Present",
    description:
      "Currently pursuing a comprehensive Software Engineering degree with specialization in AI and machine learning. Actively engaged in advanced coursework covering algorithms, software architecture, and emerging technologies.",
    technologies: ["Java", "Python", "AI/ML", "Software Architecture"],
    achievements: [
      "Specialized in AI and Machine Learning",
      "Active member of DeepFlow AI Club",
      "Mentor for junior students",
      "Consistent academic excellence",
    ],
  },
  {
    id: 2,
    type: "education",
    icon: GraduationCap,
    title: "Pre-Engineering Program",
    organization: "IPEIN (Institut Préparatoire aux Études d'Ingénieurs de Nabeul)",
    period: "2021 - 2023",
    description:
      "Completed intensive preparatory program focusing on mathematics, physics, and foundational engineering principles. Built strong analytical and problem-solving skills essential for advanced engineering studies.",
    technologies: ["Mathematics", "Physics", "Programming Fundamentals"],
    achievements: [
      "Strong foundation in engineering principles",
      "Advanced mathematical proficiency",
      "Problem-solving methodology",
      "Successful transition to engineering school",
    ],
  },
  {
    id: 3,
    type: "education",
    icon: Award,
    title: "Mathematics Baccalaureate",
    organization: "High School",
    period: "2021",
    description:
      "Graduated with honors in Mathematics Baccalaureate, demonstrating exceptional analytical abilities and academic excellence.",
    technologies: ["Advanced Mathematics", "Sciences", "Critical Thinking"],
    achievements: [
      "Graduated with Honors",
      "Mathematics specialization",
      "Academic excellence",
      "University preparation",
    ],
  },
]

function TimelineItem({ item, index }: { item: (typeof education)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  const getTypeColor = (type: string) => {
    return "from-emerald-500 to-teal-500"
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
        {index < education.length - 1 && (
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-muted-foreground/30 to-transparent" />
        )}
      </div>

      {/* Content Card */}
      <Card className="glass glass-dark p-6 rounded-xl border-2 border-white/10 hover:border-white/20 transition-all duration-300 flex-1">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <Badge variant="secondary" className={`bg-gradient-to-r ${getTypeColor(item.type)} text-white mb-2`}>
              Education
            </Badge>
            <h3 className="font-heading font-bold text-xl mb-1">{item.title}</h3>
            <p className="text-gradient-from font-semibold">{item.organization}</p>
          </div>
          <Badge variant="outline" className="glass glass-dark border border-white/20 text-sm">
            {item.period}
          </Badge>
        </div>

        <p className="text-foreground/80 leading-relaxed mb-4">{item.description}</p>

        {item.technologies && (
          <div className="mb-4">
            <h4 className="font-semibold text-sm mb-2 text-muted-foreground">Focus Areas</h4>
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-stone-100 text-stone-700 dark:bg-stone-800/80 dark:text-stone-200 border border-stone-300 dark:border-stone-600 text-xs"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {item.achievements && (
          <div>
            <h4 className="font-semibold text-sm mb-2 text-muted-foreground">Key Achievements</h4>
            <div className="grid sm:grid-cols-2 gap-2">
              {item.achievements.map((achievement, idx) => (
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

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
            Academic{" "}
            <span className="bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent">
              Journey
            </span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive educational foundation in software engineering, mathematics, and technology that drives my
            passion for innovation.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Main Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gradient-from via-muted-foreground/30 to-gradient-to" />

          {/* Timeline Items */}
          <div className="space-y-0">
            {education.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
