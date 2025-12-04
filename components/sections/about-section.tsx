"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, Brain, Code } from "lucide-react"
import { Variants, easeOut, easeInOut } from "framer-motion"
import { useLanguageStore } from "@/stores/language-store"
import {
  enhancedContainerVariants,
  enhancedItemVariants,
  slideInFromLeft,
  slideInFromRight,
  scaleIn,
  textRevealVariants
} from "@/hooks/use-scroll-animation"

const enhancedCardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.9,
    rotateY: -10
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      delay: i * 0.15,
    },
  }),
  hover: {
    y: -8,
    scale: 1.03,
    rotateY: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
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
          variants={enhancedContainerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={textRevealVariants} className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
            {safeT('about', 'title', 'About Me')}
          </motion.h2>

          <motion.p variants={enhancedItemVariants} className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
           {safeT('about', 'subtitle', 'I am Sarra Bousnina, a final-year Software Engineering student at ESPRIT, passionate about artificial intelligence. Self-taught through projects and courses, I focus on creating smart, user-centric applications. As a mentor at the DeepFlow AI Club, I love sharing knowledge, fostering innovation, and growing within the AI community.')}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={enhancedContainerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((highlight, index) => {
            const isEven = index % 2 === 0
            return (
              <motion.div
                key={highlight.id}
                custom={index}
                variants={enhancedCardVariants}
                whileHover="hover"
                style={{
                  perspective: "1000px"
                }}
              >
                <Card className="glass glass-dark p-6 rounded-xl border-2 border-white/10 hover:border-emerald-500/50 transition-all duration-300 h-full transform-gpu">
                  <div className="text-center space-y-4">
                    <motion.div
                      variants={scaleIn}
                      className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg hover:shadow-xl transition-shadow duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <highlight.icon className="h-7 w-7 text-white" />
                    </motion.div>
                    <motion.div variants={textRevealVariants}>
                      <h3 className="font-heading font-semibold text-lg mb-2">{highlight.title}</h3>
                    </motion.div>
                    <motion.p
                      variants={enhancedItemVariants}
                      className="text-muted-foreground text-sm leading-relaxed"
                    >
                      {highlight.description}
                    </motion.p>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={enhancedContainerVariants}
          className="mt-16 text-center"
        >
          <motion.div
            variants={enhancedItemVariants}
            whileHover={{ scale: 1.05, y: -3 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Badge variant="secondary" className="glass glass-dark px-6 py-3 text-sm font-medium bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border-2 border-emerald-500/50 hover:from-emerald-500/20 hover:to-teal-500/20 transition-all duration-300 shadow-lg hover:shadow-xl">
              {safeT('about', 'seeking', 'Currently seeking internship opportunities in AI and Full-Stack Development')}
            </Badge>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
