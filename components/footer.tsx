"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Download, Heart } from "lucide-react"
import { Variants, easeOut, easeInOut } from "framer-motion"
import { useLanguageStore } from "@/stores/language-store"


const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/sarrabousnina",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/sarra-bousnina/",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:sarra.bousnina@esprit.tn",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,    },
  },
}

export function Footer() {
  const { t } = useLanguageStore()

  const safeT = (section: string, key: string, fallback: string) => {
    try {
      const result = t(section, key)
      return result !== undefined && result !== key ? result : fallback
    } catch (error) {
      return fallback
    }
  }

  return (
    <footer className="py-16 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center"
        >
          {/* Main Footer Content */}
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="font-heading font-bold text-2xl mb-4">
              <span className="bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent">
                Sarra Bousnina
              </span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {safeT('footer', 'bio', 'AI Software Engineer passionate about building intelligent, user-centric applications that make a difference in the world.')}
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center gap-4 mb-8">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                size="icon"
                className="glass glass-dark rounded-xl hover:scale-110 transition-all duration-300"
                asChild
              >
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </motion.div>

          {/* Resume Download */}
          <motion.div variants={itemVariants} className="mb-8">
            <Button
              variant="outline"
              className="glass glass-dark border-2 bg-transparent hover:bg-gradient-to-r hover:from-gradient-from hover:to-gradient-to hover:text-white hover:border-transparent transition-all duration-300"
              asChild
            >
              <a href="/CV-Sarra-Bousnina.pdf" download className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                {safeT('footer', 'downloadResume', 'Download Resume')}
              </a>
            </Button>
          </motion.div>

          {/* Status Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <Badge variant="secondary" className="glass glass-dark px-4 py-2 text-sm font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              {safeT('footer', 'available', 'Available for new opportunities')}
            </Badge>
          </motion.div>

          {/* Copyright */}
          <motion.div variants={itemVariants} className="pt-8 border-t border-border/50">
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
              © 2025 Sarra Bousnina. {safeT('footer', 'builtWith', 'Built with')}
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              Next.js, Tailwind CSS, and Framer Motion.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
