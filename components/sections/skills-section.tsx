"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguageStore } from "@/stores/language-store"
import {
  useMultiLayerParallax
} from "@/hooks/use-scroll-animation"

// Skills data with categories
const skillsData = {
  'Languages': ['Python', 'JavaScript', 'TypeScript', 'Java', 'PHP', 'C', 'HTML/CSS'],
  'Frameworks': ['React', 'Angular', 'Spring Boot', 'Symfony', '.NET', 'JWT'],
  'Databases': ['MySQL', 'MongoDB', 'PostgreSQL'],
  'AI Frameworks': ['FastAPI', 'Flask', 'LangChain'],
  'Tools': ['Git', 'GitHub', 'Rest API', 'Docker', 'Power BI', 'Linux', 'FlutterFlow', 'Postman']
}

// Get logo path for skill
const getSkillLogo = (skill: string): string => {
  const logoMap: Record<string, string> = {
    'Python': '/logos/skills_logos/python.png',
    'JavaScript': '/logos/skills_logos/javascript.jpeg',
    'TypeScript': '/logos/skills_logos/typescript.png',
    'Java': '/logos/skills_logos/java.png',
    'PHP': '/logos/skills_logos/php.png',
    'C': '/logos/skills_logos/c.png',
    'HTML/CSS': '/logos/skills_logos/html.png',
    'React': '/logos/skills_logos/react.png',
    'Angular': '/logos/skills_logos/angular.jpeg',
    'Spring Boot': '/logos/skills_logos/springboot.png',
    'Symfony': '/logos/skills_logos/symphony.png',
    '.NET': '/logos/skills_logos/net.png',
    'JWT': '/logos/skills_logos/jwt.png',
    'MySQL': '/logos/skills_logos/mysql.png',
    'MongoDB': '/logos/skills_logos/mongodb.png',
    'PostgreSQL': '/logos/skills_logos/postgres.jpeg',
    'FastAPI': '/logos/skills_logos/fastapi.png',
    'Flask': '/logos/skills_logos/flask.png',
    'LangChain': '/logos/skills_logos/langchain.png',
    'Git': '/logos/skills_logos/git.png',
    'GitHub': '/logos/skills_logos/github.png',
    'Rest API': '/logos/skills_logos/rest api.png',
    'Docker': '/logos/skills_logos/docker.png',
    'Power BI': '/logos/skills_logos/bi.jpeg',
    'Linux': '/logos/skills_logos/linux.jpeg',
    'FlutterFlow': '/logos/skills_logos/flutterflow.jpeg',
    'Postman': '/logos/skills_logos/postman.png'
  }
  return logoMap[skill] || ''
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const skillCardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.85 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
}

const categoryVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
}

export function SkillsSection() {
  const { t } = useLanguageStore()

  // Background parallax effects
  const { layer1, layer2, layer3 } = useMultiLayerParallax()

  const safeT = (section: string, key: string, fallback: string) => {
    try {
      const result = t(section, key)
      return result !== undefined && result !== key ? result : fallback
    } catch (error) {
      return fallback
    }
  }

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Animated background layers */}
      <motion.div
        className="absolute inset-0 opacity-5 dark:opacity-3"
        style={{ y: layer1 }}
      >
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl" />
      </motion.div>
      <motion.div
        className="absolute inset-0 opacity-5 dark:opacity-3"
        style={{ y: layer2 }}
      >
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-teal-500 rounded-full filter blur-3xl" />
      </motion.div>
      <motion.div
        className="absolute inset-0 opacity-5 dark:opacity-3"
        style={{ y: layer3 }}
      >
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-emerald-400 rounded-full filter blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 bg-clip-text text-transparent">
            {safeT('skills', 'title', 'Technical Skills')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {safeT('skills', 'subtitle', 'A comprehensive toolkit spanning multiple programming languages, frameworks, and cutting-edge AI technologies to build innovative solutions.')}
          </p>
        </motion.div>

        {/* Skills Categories - 2 per row with beautiful separation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent"></div>
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              variants={categoryVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-gradient-to-br from-white/10 to-white/5 dark:from-stone-900/50 dark:to-stone-900/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-white/10"
            >
              {/* Compact Category Header */}
              <div className="mb-4 text-center">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                  {category}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mx-auto" />
              </div>

              {/* Compact Skills Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-2 md:grid-cols-3 gap-3"
              >
                {skills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={skillCardVariants}
                    whileHover={{
                      y: -4,
                      scale: 1.05,
                      transition: { duration: 0.2, ease: "easeOut" }
                    }}
                    whileTap={{ scale: 0.95 }}
                    style={{ transformStyle: 'preserve-3d', transformPerspective: 800 }}
                  >
                    <Card className="h-full group cursor-pointer relative overflow-hidden bg-white/60 dark:bg-stone-800/60 backdrop-blur-sm border border-white/30 dark:border-white/15 hover:border-emerald-500/40 transition-all duration-300 shadow-md hover:shadow-lg">
                      {/* Hover gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Compact Content */}
                      <CardContent className="relative p-3 flex flex-col items-center justify-center min-h-[100px]">
                        {/* Logo Container */}
                        <div className="relative mb-3">
                          {/* Logo background ring */}
                          <motion.div
                            className="absolute inset-0 w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500/10 to-teal-500/10 blur-sm group-hover:from-emerald-500/20 group-hover:to-teal-500/20 transition-all duration-300"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          />

                          {/* Skill Logo */}
                          <div className="relative w-20 h-20 rounded-full bg-white/90 dark:bg-stone-800/90 backdrop-blur-sm border border-emerald-500/20 group-hover:border-emerald-500/40 transition-all duration-300 flex items-center justify-center shadow-lg">
                            {getSkillLogo(skill) ? (
                              <img
                                src={getSkillLogo(skill)}
                                alt={skill}
                                className="w-14 h-14 object-contain transition-all duration-300 group-hover:scale-110 filter drop-shadow"
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none'
                                  const parent = e.currentTarget.parentElement
                                  if (parent) {
                                    parent.innerHTML = `
                                      <span class="text-xl font-bold text-emerald-600">${skill.charAt(0).toUpperCase()}</span>
                                    `
                                  }
                                }}
                              />
                            ) : (
                              <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                                {skill.charAt(0).toUpperCase()}
                              </span>
                            )}
                          </div>

                          {/* Smaller floating particles */}
                          <motion.div
                            className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100"
                            animate={{
                              scale: [1, 1.3, 1],
                              opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                        </div>

                        {/* Skill Name */}
                        <div className="text-center">
                          <p className="text-sm font-bold text-foreground group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                            {skill}
                          </p>
                        </div>
                      </CardContent>

                      {/* Hover glow effect */}
                      <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-md blur-sm" />
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="mb-6 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">Additional Skills</h3>
            <p className="text-sm text-muted-foreground">Professional competencies and soft skills</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {['Problem Solving', 'Team Collaboration', 'Agile Development', 'UI/UX Design', 'Code Review', 'Technical Writing', 'Project Management', 'Continuous Learning'].map((softSkill, index) => (
              <motion.div
                key={softSkill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  transition: { duration: 0.2 }
                }}
              >
                <Badge className="px-3 py-1.5 text-xs md:text-sm font-medium border-2 border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 via-white/50 to-teal-500/10 dark:from-emerald-500/20 dark:via-stone-800/50 dark:to-teal-500/20 hover:from-emerald-500/30 hover:to-teal-500/30 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 backdrop-blur-sm">
                  {softSkill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="gradient-divider mt-20"></div>
    </section>
  )
}