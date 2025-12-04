"use client"

import { motion } from "framer-motion"
import { ExternalLink, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { getAssetPath } from "@/lib/asset"
import { useLanguageStore } from "@/stores/language-store"
import {
  useMultiLayerParallax
} from "@/hooks/use-scroll-animation"


// 🟢 Update with actual logo image paths (e.g. in /public/logos/)
const certifications = [

          {
    title: "Building RAG Agents with LLMs",
    issuer: "NVIDIA",
    date: "11/2025",
    logo: getAssetPath("/logos/RAG.png"),
    tags: ["Generative AI", "RAG"],
    credentialUrl: "https://learn.nvidia.com/certificates?id=4AXuu_46RJOCFJ6kStXG9A#",
  },
        {
    title: " AWS Academy Graduate - Cloud Foundations - Training Badge",
    issuer: "AWS Academy",
    date: "11/2025",
    logo: getAssetPath("/logos/aws badge.png"),
    tags: ["AWS", "Cloud"],
    credentialUrl: "https://www.credly.com/badges/3f4af3e0-7d15-43b8-bb52-0f002b11ca8d/print",
  },
      {
    title: "Applications of AI for Anomaly Detection",
    issuer: "NVIDIA",
    date: "11/2025",
    logo: getAssetPath("/logos/anomaly detection.png"),
    tags: ["XgBoost", "AI", "Anomaly Detection"],
    credentialUrl: "https://learn.nvidia.com/certificates?id=uOx2JSYPRembVJns9mY88Q",
  },
    {
    title: "Attendance Hashgraph Developer Course",
    issuer: "The Hashgraph Association",
    date: "10/2025",
logo: getAssetPath("/logos/blockchain.png"),
    tags: ["Blockchain", "Hashgraph"],
    credentialUrl: "https://certs.hashgraphdev.com/de967611-56da-48f9-91b3-621e6f7ef8a4.pdf",
  },
  {
    title: "Rapid Application Development with Large Language Models (LLMs)",
    issuer: "NVIDIA",
    date: "06/2025",
logo: getAssetPath("/logos/rapidLLM.png"),
    tags: ["LLMs", "Prototyping", "RAG"],
    credentialUrl: "https://learn.nvidia.com/certificates?id=uMJ7N_LVSkubv8t3mJ6Iag",
  },
  {
    title: "Building AI Agents with Multimodal Models",
    issuer: "NVIDIA",
    date: "06/2025",
logo: getAssetPath("/logos/AIagent.png"),
    tags: ["Agents", "Multimodal", "Vision+LLM"],
    credentialUrl: "https://learn.nvidia.com/certificates?id=14xeyRKPQXi5rxi4FhLpmA",
  },
  {
    title: "Building LLM Applications with Prompt Engineering",
    issuer: "NVIDIA",
    date: "06/2025",
logo: getAssetPath("/logos/LLMprompt.png"),
    tags: ["Prompt Engineering", "LLMs"],
    credentialUrl: "https://learn.nvidia.com/certificates?id=7Sdwdy9yS3-_RazfdvF-kg",
  },
  {
    title: "Building Transformer-Based Natural Language Processing Applications",
    issuer: "NVIDIA",
    date: "06/2025",
logo: getAssetPath("/logos/transformerNLP.png"),
    tags: ["Transformers", "NLP"],
    credentialUrl: "https://learn.nvidia.com/certificates?id=tUl-7lrXT_6VYQ61bdEbWA",
  },
  {
    title: "Evaluation and Light Customization of Large Language Models",
    issuer: "NVIDIA",
    date: "06/2025",
    logo: getAssetPath("/logos/evalLLM.png"),
    tags: ["Evaluation", "Fine-tuning", "LoRA"],
    credentialUrl: "https://learn.nvidia.com/certificates?id=g2RO6yzzQ2SzOvpWb7bcag",
  },
  {
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA",
    date: "03/2025",
    logo: getAssetPath("/logos/DL.png"),
    tags: ["Deep Learning", "Neural Networks", "AI"],
    credentialUrl: "https://learn.nvidia.com/certificates?id=KBA4J8RJS-a7BrB5DLoswQ",
  },
  {
    title: "Scrum Fundamentals Certified (SFC)",
    issuer: "SCRUMstudy",
    date: "12/2024",
    logo: getAssetPath("/logos/SCRUM.png"),
    tags: ["Scrum", "Agile", "Project Management"],
    credentialUrl: "https://www.scrumstudy.com/certification/verify?type=SFC&number=1059261",
  },
  {
    title: "The Git & GitHub BootCamp",
    issuer: "Udemy",
    date: "11/2024",
    logo: getAssetPath("/logos/Git.png"),
    tags: ["Git", "GitHub", "Version Control"],
    credentialUrl: "https://www.udemy.com/certificate/UC-2b4a1591-7027-487c-8832-1e6577da90fa/",
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI (Stanford) / Coursera",
    date: "03/2024",
    logo: getAssetPath("/logos/ML.png"),
    tags: ["Machine Learning", "Python", "Algorithms"],
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/R5HUEBEZXLBV",
  },
  {
    title: "Introduction to Front-End Development",
    issuer: "Meta / Coursera",
    date: "04/2024",
    logo: getAssetPath("/logos/front.png"),
    tags: ["HTML", "CSS", "JavaScript", "React"],
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/26W5W3GA7WR4",
  },
]

export default function CertificationsSection() {
  const { t, locale } = useLanguageStore()

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
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background layers */}
      <motion.div
        className="absolute inset-0 opacity-10 dark:opacity-5"
        style={{ y: layer1 }}
      >
        <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-500 rounded-full filter blur-3xl" />
      </motion.div>
      <motion.div
        className="absolute inset-0 opacity-10 dark:opacity-5"
        style={{ y: layer2 }}
      >
        <div className="absolute top-40 right-10 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl" />
      </motion.div>
      <motion.div
        className="absolute inset-0 opacity-10 dark:opacity-5"
        style={{ y: layer3 }}
      >
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-emerald-400 rounded-full filter blur-3xl" />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-8 h-8 text-emerald-500" />
            <h2 className="text-4xl font-bold font-heading bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              {safeT('certifications', 'title', 'Certifications')}
            </h2>
          </div>
          <p className="text-xl text-stone-600 dark:text-stone-300 max-w-3xl mx-auto">
            {safeT('certifications', 'subtitle', 'Professional certifications and continuous learning achievements that enhance my technical expertise.')}
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const evenIndex = index % 2 === 0
            return (
              <motion.div
                key={cert.title}
                custom={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <Card className="glass glass-dark h-full group border-2 border-white/20 dark:border-white/10 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300">
                  <CardContent className="p-0">
                    {/* Professional Card Container */}
                    <div className="relative h-full">
                      {/* Logo Container */}
                      <div className="relative h-40 overflow-hidden bg-gradient-to-br from-white/20 to-white/5 dark:from-stone-800/50 dark:to-stone-900/30 border-b border-white/20">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="w-full h-full flex items-center justify-center p-4">
                          <img
                            src={cert.logo}
                            alt={`${cert.issuer} logo`}
                            className="max-h-full max-w-full object-contain filter drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>

                        {/* Subtle corner accent */}
                        <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Content Container */}
                      <div className="p-6">
                        <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-300">
                          {cert.title}
                        </h3>

                        <p className="text-sm text-muted-foreground mb-3">
                          {safeT('certifications', 'issuedBy', 'Issued by')}: <span className="font-medium text-foreground">{cert.issuer}</span> • {safeT('certifications', 'date', 'Date')}: {cert.date}
                        </p>

                        {/* Professional Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {cert.tags?.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300 text-xs font-medium border border-emerald-500/20 transition-all duration-200 hover:bg-emerald-500/20 hover:scale-105"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Credential Link */}
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm font-medium hover:text-emerald-700 dark:hover:text-emerald-300 transition-all duration-200 hover:translate-x-1"
                        >
                          {safeT('certifications', 'viewCredential', 'View credential')}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
