"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, Brain, Code } from "lucide-react"
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
const highlights = [
  {
    icon: GraduationCap,
    title: "ESPRIT Student",
    description: "Final-year Software Engineering",
  },
  {
    icon: Brain,
    title: "AI Enthusiast",
    description: "Machine Learning & Deep Learning",
  },
  {
    icon: Users,
    title: "Mentor",
    description: "DeepFlow AI Club",
  },
  {
    icon: Code,
    title: "Full-Stack",
    description: "End-to-end Development",
  },
]

export function AboutSection() {
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
            About{" "}
            <span className="bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent">Me</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
           I'm Sarra Bousnina, a final-year Software Engineering student at ESPRIT, passionate about artificial intelligence. Self-taught through projects and courses, I focus on creating smart, user-centric applications. As a mentor at the DeepFlow AI Club, I love sharing knowledge, fostering innovation, and growing within the AI community.
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
            <motion.div key={highlight.title} variants={itemVariants}>
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
            <Badge variant="secondary" className="glass glass-dark px-4 py-2 text-sm font-medium">
              Currently seeking opportunities in AI and Full-Stack Development
            </Badge>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
