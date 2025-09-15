"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Github, Linkedin, MapPin, Send, Check } from "lucide-react"
import { easeOut } from "framer-motion"

// 🔗 Your Formspree endpoint
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xovnzwoy"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
}

const successVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 200, damping: 15 },
  },
}

const contactInfo = [
  { icon: Mail, label: "Email", value: "sarra.bousnina@esprit.tn", href: "mailto:sarra.bousnina@esprit.tn" },
  { icon: Github, label: "GitHub", value: "github.com/sarrabousnina", href: "https://github.com/sarrabousnina" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/sarrabousnina", href: "https://www.linkedin.com/in/sarra-bousnina/" },
  { icon: MapPin, label: "Location", value: "Tunis, Tunisia", href: null },
]

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setIsSubmitted(false)
    setErrorMsg(null)

    try {
      const formEl = e.currentTarget
      const body = new FormData(formEl) // includes name, email, subject, message, and honeypot

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body,
      })

      if (!res.ok) {
        let msg = "Something went wrong, please try again."
        try {
          const data = await res.json()
          if (data?.errors?.[0]?.message) msg = data.errors[0].message
        } catch {}
        throw new Error(msg)
      }

      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
      formEl.reset()
      setTimeout(() => setIsSubmitted(false), 3000)
    } catch (err: any) {
      setErrorMsg(err?.message || "Failed to send your message.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-6">
            Get In{" "}
            <span className="bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent">
              Touch
            </span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on innovative AI projects or discuss opportunities in software engineering? I'd love to
            hear from you!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.h3 variants={itemVariants} className="font-heading font-bold text-2xl mb-8">
              Let's Connect
            </motion.h3>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <motion.div key={info.label} variants={itemVariants}>
                  <Card className="glass glass-dark p-4 rounded-xl border-2 border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-gradient-from to-gradient-to flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-sm text-muted-foreground">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith("http") ? "_blank" : undefined}
                            rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-foreground hover:text-gradient-from transition-colors font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="mt-8">
              <Badge variant="secondary" className="glass glass-dark px-4 py-2 text-sm font-medium">
                Available for freelance projects and full-time opportunities
              </Badge>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <Card className="glass glass-dark p-8 rounded-xl border-2 border-white/10">
              <motion.h3 variants={itemVariants} className="font-heading font-bold text-2xl mb-6">
                Send a Message
              </motion.h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot to reduce spam */}
                <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

                <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`glass glass-dark border-2 transition-all duration-300 ${
                        focusedField === "name"
                          ? "border-gradient-from shadow-lg shadow-gradient-from/20"
                          : "border-white/20 hover:border-white/30"
                      }`}
                    />
                  </div>
                  <div className="relative">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`glass glass-dark border-2 transition-all duration-300 ${
                        focusedField === "email"
                          ? "border-gradient-from shadow-lg shadow-gradient-from/20"
                          : "border-white/20 hover:border-white/30"
                      }`}
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("subject")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`glass glass-dark border-2 transition-all duration-300 ${
                      focusedField === "subject"
                        ? "border-gradient-from shadow-lg shadow-gradient-from/20"
                        : "border-white/20 hover:border-white/30"
                    }`}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={5}
                    className={`glass glass-dark border-2 transition-all duration-300 resize-none ${
                      focusedField === "message"
                        ? "border-gradient-from shadow-lg shadow-gradient-from/20"
                        : "border-white/20 hover:border-white/30"
                    }`}
                  />
                </motion.div>

                {errorMsg && (
                  <p className="text-red-500 text-sm">{errorMsg}</p>
                )}

                <motion.div variants={itemVariants}>
                  <Button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="w-full bg-gradient-to-r from-gradient-from to-gradient-to hover:from-gradient-to hover:to-gradient-from text-white font-semibold py-3 rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : isSubmitted ? (
                      <motion.div
                        variants={successVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex items-center gap-2"
                      >
                        <Check className="h-5 w-5" />
                        Message Sent!
                      </motion.div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-5 w-5" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}