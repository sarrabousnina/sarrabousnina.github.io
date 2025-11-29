"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, Brain, Code } from "lucide-react"
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
const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easeOut,  // ✅ use function, not string
    },
  },
}
export function AboutSection() {
  const { t } = useLanguageStore()

  const safeT = (section: string, key: string, fallback: string) => {
    try {
      const result = t(section, key)
      return result !== undefined && result !== key ? result : fallback
    } catch (error) {
      return fallback
    }
  }

  const getHighlights = () => {
    const badges = [
      {
        id: 'esprit-student',
        icon: GraduationCap,
        titleKey: 'badges.espritStudent.title',
        descriptionKey: 'badges.espritStudent.description',
        fallbackTitle: 'ESPRIT Student',
        fallbackDescription: 'Final-year Software Engineering',
      },
      {
        id: 'ai-enthusiast',
        icon: Brain,
        titleKey: 'badges.aiEnthusiast.title',
        descriptionKey: 'badges.aiEnthusiast.description',
        fallbackTitle: 'AI Enthusiast',
        fallbackDescription: 'Generative AI',
      },
      {
        id: 'mentor',
        icon: Users,
        titleKey: 'badges.mentor.title',
        descriptionKey: 'badges.mentor.description',
        fallbackTitle: 'Mentor',
        fallbackDescription: 'DeepFlow AI Club',
      },
      {
        id: 'fullstack',
        icon: Code,
        titleKey: 'badges.fullstack.title',
        descriptionKey: 'badges.fullstack.description',
        fallbackTitle: 'Full-Stack',
        fallbackDescription: 'End-to-end Development',
      },
    ]

    return badges.map(badge => ({
      id: badge.id,
      icon: badge.icon,
      title: safeT('about', badge.titleKey, badge.fallbackTitle),
      description: safeT('about', badge.descriptionKey, badge.fallbackDescription),
    }))
  }

  const highlights = getHighlights()
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
            {safeT('about', 'title', 'About Me')}
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
           {safeT('about', 'subtitle', 'I am Sarra Bousnina, a final-year Software Engineering student at ESPRIT, passionate about artificial intelligence. Self-taught through projects and courses, I focus on creating smart, user-centric applications. As a mentor at the DeepFlow AI Club, I love sharing knowledge, fostering innovation, and growing within the AI community.')}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((highlight, index) => (
            <motion.div key={highlight.id} variants={itemVariants}>
              <Card className="glass glass-dark p-6 rounded-xl border-2 border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-gradient-from to-gradient-to mb-4">
                    <highlight.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground text-sm">{highlight.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mt-16 text-center"
        >
          <motion.div variants={itemVariants}>
            <Badge variant="secondary" className="glass glass-dark px-4 py-2 text-sm font-medium" style={{ borderColor: "red" }}>
              {safeT('about', 'seeking', 'Currently seeking internship opportunities in AI and Full-Stack Development')}
            </Badge>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
