"use client"

import { useScroll, useTransform, useSpring, motion, MotionValue, useAnimationControls } from "framer-motion"
import { useEffect, useState, useRef } from "react"

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

// Enhanced continuous scroll animations
export const useContinuousScrollAnimation = () => {
  const { scrollY, scrollYProgress } = useScroll()
  const lastScrollY = useRef(0)
  const scrollDirection = useRef<'up' | 'down' | null>(null)
  const [isScrolling, setIsScrolling] = useState(false)
  const scrollTimeoutRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = scrollY.get()
      const delta = currentScrollY - lastScrollY.current

      if (Math.abs(delta) > 1) {
        setIsScrolling(true)
        scrollDirection.current = delta > 0 ? 'down' : 'up'

        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current)
        }

        scrollTimeoutRef.current = setTimeout(() => {
          setIsScrolling(false)
          scrollDirection.current = null
        }, 150)
      }

      lastScrollY.current = currentScrollY
    }

    const unsubscribe = scrollY.on("change", handleScroll)
    return unsubscribe
  }, [scrollY])

  return { scrollY, scrollYProgress, isScrolling, scrollDirection }
}

// Bounce animation for continuous scroll
export const useBounceAnimation = (factor: number = 0.1) => {
  const { scrollY } = useScroll()

  const bounce = useTransform(scrollY, [0, 1], [0, 0], [0, 0, 1])

  // Create a sine wave effect
  const bounceEffect = useTransform(scrollY, [0, 1], [0, 0], [
    [0, 0, 1],
    [0.25, -10 * factor, 1],
    [0.5, 0, 1],
    [0.75, 10 * factor, 1],
    [1, 0, 1]
  ])

  return { bounce: bounceEffect, scrollY }
}

// Rotation animation based on scroll
export const useRotateAnimation = (maxRotation: number = 5) => {
  const { scrollY } = useScroll()

  const rotateX = useTransform(scrollY, [0, 1], [-maxRotation, maxRotation])
  const rotateY = useTransform(scrollY, [0, 1], [-maxRotation * 0.5, maxRotation * 0.5])
  const rotateZ = useTransform(scrollY, [0, 1], [-maxRotation * 0.3, maxRotation * 0.3])

  return { rotateX, rotateY, rotateZ, scrollY }
}

// Parallax with different speeds
export const useMultiLayerParallax = () => {
  const { scrollY } = useScroll()

  const layer1 = useTransform(scrollY, [0, 1], [0, -50])
  const layer2 = useTransform(scrollY, [0, 1], [0, -30])
  const layer3 = useTransform(scrollY, [0, 1], [0, -10])

  return { layer1, layer2, layer3, scrollY }
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
      type: "spring" as const,
      stiffness: 120,
      damping: 20,
      delay: i * 0.1,
    },
  }),
  hover: {
    y: -5,
    scale: 1.02,
    transition: {
      type: "spring" as const,
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

