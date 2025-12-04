"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Variants, easeOut, easeInOut } from "framer-motion"
import { useLanguageStore } from "@/stores/language-store"
import {
  enhancedContainerVariants,
  enhancedItemVariants,
  progressAnimation,
  textRevealVariants,
  useScrollAnimation
} from "@/hooks/use-scroll-animation"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
      ease: easeOut,
    },
  },
}

const floatingVariants: Variants = {
  animate: (i: number) => ({
    y: [0, -10, 0],
    rotate: [0, 2, 0],
    transition: {
      duration: 3 + i * 0.5,
      repeat: Number.POSITIVE_INFINITY,
      ease: easeInOut,
      delay: i * 0.2,
    },
  }),
}

export function SkillsSection() {
  const { t } = useLanguageStore()

  const safeT = (section: string, key: string, fallback: string | string[]) => {
    try {
      const result = t(section, key)
      return result !== undefined && result !== key ? result : fallback
    } catch (error) {
      return fallback
    }
  }

  const getSkillCategories = () => {
    const skillItems = safeT('skills', 'items.languages', ["Python", "Java", "JavaScript", "TypeScript", "PHP", "C", "HTML/CSS"])
    return [
      {
        title: safeT('skills', 'categories.languages', 'Languages'),
        skills: skillItems,
        color: "from-emerald-500 to-teal-500",
      },
      {
        title: safeT('skills', 'categories.frameworks', 'Frameworks'),
        skills: safeT('skills', 'items.frameworks', ["Spring Boot", "Angular", "React", "Symfony", ".NET", "JWT"]),
        color: "from-teal-500 to-emerald-600",
      },
      {
        title: safeT('skills', 'categories.databases', 'Databases'),
        skills: safeT('skills', 'items.databases', ["MySQL", "MongoDB", "PostgreSQL"]),
        color: "from-emerald-400 to-teal-400",
      },
      {
        title: safeT('skills', 'categories.generativeAI', 'Generative AI'),
        skills: safeT('skills', 'items.generativeAI', ["Agentic AI", "RAG", "LLM", "API Integrations (groq, ollama, openrouter)", "Prompt Engineering", "Context Engineering", "Vector Databases"]),
        color: "from-teal-600 to-emerald-600",
      },
      {
        title: safeT('skills', 'categories.aiFrameworks', 'AI Frameworks'),
        skills: safeT('skills', 'items.aiFrameworks', ["FastAPI", "Flask", "LangChain"]),
        color: "from-teal-600 to-emerald-600",
      },
      {
        title: safeT('skills', 'categories.tools', 'Tools'),
        skills: safeT('skills', 'items.tools', ["Git", "Github", "Rest API", "Docker", "Power BI", "Linux", "FlutterFlow", "Postman"]),
        color: "from-emerald-300 to-teal-300",
      },
    ]
  }

  const skillCategories = getSkillCategories()

  // Skill level mapping for progress bars (you can customize these values)
  const getSkillLevel = (skill: string, category: string): number => {
    const levels: Record<string, number> = {
      'Python': 90, 'JavaScript': 85, 'TypeScript': 80, 'Java': 75, 'React': 85,
      'Angular': 80, 'Spring Boot': 75, 'FastAPI': 80, 'MySQL': 75, 'MongoDB': 70,
      'Generative AI': 85, 'RAG': 80, 'LLM': 85, 'Git': 90, 'Docker': 70,
      'Flask': 75, 'LangChain': 80, 'PostgreSQL': 75
    }
    return levels[skill] || Math.floor(Math.random() * 30) + 70 // 70-100% default
  }

  const getProgressColor = (category: string): string => {
    switch (category) {
      case 'Languages':
        return 'from-emerald-500 to-emerald-600'
      case 'Frameworks':
        return 'from-teal-500 to-teal-600'
      case 'Databases':
        return 'from-blue-500 to-blue-600'
      case 'Generative AI':
        return 'from-purple-500 to-purple-600'
      case 'AI Frameworks':
        return 'from-pink-500 to-pink-600'
      default:
        return 'from-stone-500 to-stone-600'
    }
  }

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={enhancedContainerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={textRevealVariants} className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
            {safeT('skills', 'title', 'Technical Skills')}
          </motion.h2>

          <motion.p variants={enhancedItemVariants} className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {safeT('skills', 'subtitle', 'A comprehensive toolkit spanning multiple programming languages, frameworks, and cutting-edge AI technologies to build innovative solutions.')}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={enhancedContainerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={`skill-category-${categoryIndex}`}
              custom={categoryIndex}
              variants={enhancedItemVariants}
              whileHover={{
                y: -5,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <Card className="skill-group-card h-full hover:shadow-2xl hover:scale-[1.02] hover:ring-2 hover:ring-emerald-400/20 transition-all duration-300 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border-2 border-white/20">
                <div className="p-6">
                  <motion.div
                    variants={textRevealVariants}
                    className="mb-6"
                  >
                    <h3 className="font-heading font-semibold text-xl mb-4 text-center text-foreground">
                      {category.title}
                    </h3>
                  </motion.div>

                  <div className="space-y-4">
                    {Array.isArray(category.skills)
                      ? category.skills.slice(0, 5).map((skill, skillIndex) => {
                        const skillLevel = getSkillLevel(String(skill), category.title)
                        const progressColor = getProgressColor(category.title)

                        return (
                          <motion.div
                            key={`${String(skill)}-${skillIndex}`}
                            custom={categoryIndex * 5 + skillIndex}
                            variants={enhancedItemVariants}
                            className="space-y-2"
                            whileHover={{ scale: 1.02, x: 5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <div className="flex justify-between items-center">
                              <motion.span
                                className="text-sm font-medium text-foreground"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 600 }}
                              >
                                {String(skill)}
                              </motion.span>
                              <motion.span
                                className="text-xs text-muted-foreground font-mono"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 + skillIndex * 0.1 }}
                              >
                                {skillLevel}%
                              </motion.span>
                            </div>
                            <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
                              <motion.div
                                className={`h-full bg-gradient-to-r ${progressColor} rounded-full shadow-lg`}
                                custom={`${skillLevel}%`}
                                variants={progressAnimation}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                style={{
                                  boxShadow: '0 0 10px rgba(16, 185, 129, 0.3)'
                                }}
                              />
                            </div>
                          </motion.div>
                        )
                      })
                      : null
                    }

                    {/* Show remaining skills as badges */}
                    {Array.isArray(category.skills) && category.skills.length > 5 && (
                      <motion.div
                        variants={enhancedItemVariants}
                        className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border/50"
                      >
                        {category.skills.slice(5).map((skill, skillIndex) => (
                          <motion.div
                            key={`${String(skill)}-${skillIndex}`}
                            variants={floatingVariants}
                            custom={categoryIndex * 5 + skillIndex + 5}
                            animate="animate"
                            whileHover={{
                              scale: 1.1,
                              y: -2,
                              transition: { type: "spring", stiffness: 500 },
                            }}
                          >
                            <Badge
                              variant="secondary"
                              className="bg-muted/50 text-foreground/80 px-2 py-1 text-xs font-medium border border-border/50 hover:shadow-md transition-all duration-300"
                            >
                              {String(skill)}
                            </Badge>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating skill indicators */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={enhancedContainerVariants}
          className="mt-16 flex justify-center gap-4 flex-wrap"
        >
          {['Problem Solving', 'Team Collaboration', 'Agile Development', 'UI/UX Design'].map((softSkill, index) => (
            <motion.div
              key={softSkill}
              custom={index}
              variants={enhancedItemVariants}
              whileHover={{ scale: 1.05, y: -3 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Badge
                variant="outline"
                className="px-4 py-2 text-sm font-medium border-emerald-500/50 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 hover:from-emerald-500/20 hover:to-teal-500/20 transition-all duration-300"
              >
                {softSkill}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="gradient-divider mt-20"></div>
    </section>
  )
}