"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Prizes", href: "#prizes" },
  { name: "Community", href: "#community" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass glass-dark shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="font-heading font-bold text-2xl bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent" // Changed text-xl to text-2xl
  >
    Sarra Bousnina
  </motion.div>

  {/* Desktop Navigation */}
  <div className="hidden md:flex items-center space-x-4">
    {navItems.map((item, index) => (
      <motion.a
        key={item.name}
        href={item.href}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="relative text-emerald-600 hover:text-teal-600 dark:text-emerald-300 dark:hover:text-teal-300 transition-colors font-medium text-sm group"
      >
        {item.name}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 group-hover:w-full" />
      </motion.a>
    ))}
    <ThemeToggle />
  </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="glass glass-dark rounded-xl"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass glass-dark rounded-xl mt-2 p-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-1.5 text-emerald-600 hover:text-teal-600 dark:text-emerald-300 dark:hover:text-teal-300 transition-colors font-medium text-sm" // Added text-sm and reduced py from 2 to 1.5
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}