"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Variants, easeOut, easeInOut } from "framer-motion"

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
      ease: easeOut,  // ✅ use function, not string
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
      ease: easeInOut, // ✅ same here
      delay: i * 0.2,
    },
  }),
}

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "PHP", "C", "HTML/CSS"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Frameworks",
    skills: ["Spring Boot", "Angular", "React", "Symfony", ".NET","JWT"],
    color: "from-teal-500 to-emerald-600",
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB","PostgreSQL"],
    color: "from-emerald-400 to-teal-400",
  },
  {
    title: "Generative AI",
    skills: ["Agentic AI","RAG", "LLM", "API Integrations (groq, ollama, openrouter)", "Prompt Engineering","Context Engineering","Vector Databases"],
    color: "from-teal-600 to-emerald-600",
  },
    {
    title: "AI Frameworks",
    skills: ["FastAPI","Flask", "LangChain"],
    color: "from-teal-600 to-emerald-600",
  },
  {
    title: "Tools",
    skills: ["Git","Github","Rest API", "Docker", "Power BI", "Linux", "FlutterFlow", "Postman"],
    color: "from-emerald-300 to-teal-300",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16 fade-up"
        >
          <motion.h2 variants={itemVariants} className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
            Technical{" "}
            <span className="relative">
              Skills
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
            </span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit spanning multiple programming languages, frameworks, and cutting-edge AI
            technologies to build innovative solutions.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div key={category.title} variants={itemVariants} className={`fade-up-delay-${categoryIndex + 1}`}>
              <Card className="skill-group-card h-full hover:shadow-2xl hover:scale-[1.01] hover:ring-1 hover:ring-emerald-400/20 transition-all duration-300">
                <div className="mb-6">
                  <h3 className="font-heading font-semibold text-xl mb-4 text-center text-stone-900 dark:text-stone-100">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      custom={categoryIndex * 5 + skillIndex}
                      variants={floatingVariants}
                      animate="animate"
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <Badge
                        variant="secondary"
                        className="bg-stone-100 text-stone-700 dark:bg-stone-800/60 dark:text-stone-200 px-3 py-1 text-sm font-medium border border-stone-200 dark:border-stone-700 hover:ring-2 hover:ring-emerald-400/30 transition-all duration-300"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Cloud - Alternative floating layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mt-20"
        >
         
        </motion.div>
      </div>

      <div className="gradient-divider mt-20"></div>
    </section>
  )
}
