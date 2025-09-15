"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Download, Mail } from "lucide-react"
import Image from "next/image"
import { getAssetPath } from "@/lib/asset";
import { Variants, easeOut, easeInOut } from "framer-motion"


const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: easeOut,    },
  }),
}

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.8,
      duration: 0.5,
      ease: easeOut,    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: easeInOut,
    },
  },
  tap: {
    scale: 0.95,
  },
}

const avatarVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateY: -30 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      delay: 0.5,
      duration: 0.8,
      ease: easeOut,    },
  },
  hover: {
    rotateY: 5,
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: easeInOut,
    },
  },
}
const meshVariants: Variants = {
  animate: {
    backgroundPosition: ["0% 0%", "100% 100%"],
    transition: {
      duration: 20,
      ease: [0, 0, 1, 1] as [number, number, number, number], // ✅ fixed
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse" as const,
    },
  },
}

export function HeroSection() {
  const handleScrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <motion.div
        variants={meshVariants}
        animate="animate"
        className="absolute inset-0 opacity-20 dark:opacity-10"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgb(16, 185, 129) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgb(20, 184, 166) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgb(16, 185, 129) 0%, transparent 50%)
          `,
          backgroundSize: "100% 100%",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <motion.div initial="hidden" animate="visible" className="space-y-6">
              <motion.h1
                custom={0}
                variants={textVariants}
                className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight"
              >
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                  Sarra
                </span>{" "}
                <motion.span custom={1} variants={textVariants} className="block text-foreground">
                  Bousnina
                </motion.span>
              </motion.h1>

              <motion.p
                custom={2}
                variants={textVariants}
                className="text-xl sm:text-2xl font-medium text-muted-foreground"
              >
                AI Software Engineer • Final-year Student at ESPRIT
              </motion.p>

              <motion.p
                custom={3}
                variants={textVariants}
                className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                Building intelligent, user-centric software with AI and creativity. Passionate about
                full-stack development, generative AI and creating innovative solutions that make a difference.
              </motion.p>

              <motion.div
                custom={4}
                variants={textVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
              >
                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                  <button
                    onClick={handleScrollToProjects}
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600 dark:from-emerald-400 dark:to-teal-400 inline-flex items-center justify-center gap-2 h-12 px-8 py-3 font-semibold rounded-xl shadow-xl transition-all duration-200 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-emerald-500/20"
                  >
                    <span>View Projects</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </motion.div>

                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleScrollToContact}
                    className="border-stone-300 text-stone-800 hover:border-emerald-400 dark:border-stone-600 dark:text-stone-200 font-semibold px-8 py-3 rounded-xl bg-transparent"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Me
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div custom={5} variants={textVariants} className="pt-4">
                <Button
                  variant="ghost"
                  className="text-emerald-600 hover:text-teal-600 dark:text-emerald-300 dark:hover:text-teal-300 transition-colors"
                  asChild
                >
                  <a href="/Sarra-Bousnina-CV.pdf" download className="flex items-center">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Avatar Card */}
          <div className="flex justify-center lg:justify-end">
            <motion.div
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={avatarVariants}
              className="relative"
            >
              <Card className="glass glass-dark p-8 rounded-3xl shadow-2xl border-2 border-white/20 dark:border-white/10">
                <div className="relative">
                  <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden ring-2 ring-transparent bg-gradient-to-r from-emerald-500 to-teal-500 p-1 shadow-lg">
                    <div className="w-full h-full rounded-2xl overflow-hidden bg-background">
                      <Image
                        src={getAssetPath("/sarra.jpg")}
                        alt="Sarra Bousnina - AI Software Engineer"
                        width={320}
                        height={320}
                        className="w-full h-full object-cover"
                        priority
                      />

                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: easeInOut,
                    }}
                    className="absolute -top-4 -right-4 glass glass-dark rounded-xl p-3 border border-white/20"
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [0, 10, 0],
                      rotate: [0, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: easeInOut,
                      delay: 1,
                    }}
                    className="absolute -bottom-4 -left-4 glass glass-dark rounded-xl p-3 border border-white/20"
                  >
                    <div className="w-4 h-4 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full" />
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: easeInOut,
            }}
            className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: easeInOut,
              }}
              className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
