"use client"

import { useScroll, useTransform, useSpring, motion, MotionValue } from "framer-motion"
import { useEffect, useState } from "react"

interface ScrollAnimationOptions {
  offset?: number[]
  stiffness?: number
  damping?: number
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const { offset = [0, 1], stiffness = 100, damping = 30 } = options
  const { scrollYProgress } = useScroll()

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness,
    damping,
  })

  const scale = useTransform(smoothProgress, offset, [0.8, 1])
  const opacity = useTransform(smoothProgress, offset, [0, 1])
  const y = useTransform(smoothProgress, offset, [50, 0])

  return { scale, opacity, y, scrollYProgress: smoothProgress }
}

export const useParallax = (offset: number[] = [0, 1], speed: number = 0.5) => {
  const { scrollYProgress } = useScroll()

  return useTransform(scrollYProgress, offset, [0, speed * 100])
}

export const useStaggeredAnimation = (itemCount: number, baseDelay: number = 0.1) => {
  const [inView, setInView] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest > 0.1 && !inView) {
        setInView(true)
      }
    })

    return unsubscribe
  }, [scrollYProgress, inView])

  const getDelay = (index: number) => baseDelay * index

  return { inView, getDelay }
}

// Enhanced variants for smooth scroll animations
export const enhancedContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      ease: [0.25, 0.1, 0.25, 1],
      duration: 0.6,
    },
  },
}

export const enhancedItemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      mass: 1,
    },
  },
}

export const slideInFromLeft = {
  hidden: {
    opacity: 0,
    x: -50,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
    },
  },
}

export const slideInFromRight = {
  hidden: {
    opacity: 0,
    x: 50,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
    },
  },
}

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotateX: -10
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 25,
      delay: 0.1,
    },
  },
}

export const floatingCardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.9
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
      delay: i * 0.1,
    },
  }),
  hover: {
    y: -5,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  },
}

export const progressAnimation = {
  hidden: { width: "0%" },
  visible: (width: string) => ({
    width,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
      duration: 1.5,
    },
  }),
}

export const textRevealVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    rotateY: 90
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateY: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      duration: 0.8,
    },
  },
}

