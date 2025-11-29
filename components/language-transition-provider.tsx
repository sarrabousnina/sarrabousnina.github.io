"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface LanguageTransitionContextType {
  isTransitioning: boolean
  triggerTransition: () => void
}

const LanguageTransitionContext = createContext<LanguageTransitionContextType | undefined>(undefined)

export function useLanguageTransition() {
  const context = useContext(LanguageTransitionContext)
  if (!context) {
    // Fallback for when context is not available
    return {
      isTransitioning: false,
      triggerTransition: () => {}
    }
  }
  return context
}

const transitionVariants = {
  hidden: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    filter: "blur(4px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0], // Cubic bezier for smooth easing
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 1.02,
    filter: "blur(4px)",
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, delay: 0.1 }
  }
}

interface LanguageTransitionProviderProps {
  children: ReactNode
}

export function LanguageTransitionProvider({ children }: LanguageTransitionProviderProps) {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [currentChildren, setCurrentChildren] = useState<ReactNode>(children)

  const triggerTransition = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentChildren(children)
      setIsTransitioning(false)
    }, 100) // Small delay for smooth transition
  }

  useEffect(() => {
    if (!isTransitioning) {
      setCurrentChildren(children)
    }
  }, [children, isTransitioning])

  return (
    <LanguageTransitionContext.Provider value={{ isTransitioning, triggerTransition }}>
      <div className="relative">
        {/* Beautiful overlay during transition */}
        <AnimatePresence>
          {isTransitioning && (
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm"
            >
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="w-16 h-16 border-4 border-gradient-to-r from-indigo-500 to-purple-500 border-t-transparent rounded-full"
              />
              <motion.div
                animate={{
                  rotate: -360,
                  scale: [1.2, 1, 1.2]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute w-20 h-20 border-2 border-gradient-to-r from-purple-500 to-pink-500 border-t-transparent rounded-full"
              />
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 0.8, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute w-12 h-12 border-2 border-gradient-to-r from-pink-500 to-indigo-500 border-b-transparent rounded-full"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content with transition animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={isTransitioning ? 'transitioning' : 'content'}
            variants={transitionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full"
          >
            {currentChildren}
          </motion.div>
        </AnimatePresence>
      </div>
    </LanguageTransitionContext.Provider>
  )
}