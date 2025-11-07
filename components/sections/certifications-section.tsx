"use client"

import { motion } from "framer-motion"
import { ExternalLink, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { getAssetPath } from "@/lib/asset";


// 🟢 Update with actual logo image paths (e.g. in /public/logos/)
const certifications = [

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
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-8 h-8 text-emerald-500" />
            <h2 className="text-4xl font-bold font-heading bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Certifications
            </h2>
          </div>
          <p className="text-xl text-stone-600 dark:text-stone-300 max-w-3xl mx-auto">
            Professional certifications and continuous learning achievements that enhance my technical expertise.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/90 border border-stone-200 backdrop-blur-sm dark:bg-stone-900/70 dark:border-stone-700 h-full group hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                 <div className="flex flex-col mb-4">
  {/* Big Logo on Top */}
  <div className="w-full h-32 flex items-center justify-center bg-white dark:bg-stone-800 border-b border-stone-200 dark:border-stone-700 rounded-t-md overflow-hidden">
    <img
      src={cert.logo}
      alt={`${cert.issuer} logo`}
      className="max-h-full max-w-full object-contain"
    />
  </div>

  {/* Text Content */}
  <div className="flex-1 p-4">
    <h3 className="font-semibold text-stone-900 dark:text-stone-100 mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
      {cert.title}
    </h3>
    <p className="text-stone-600 dark:text-stone-400 text-sm mb-2">
      {cert.issuer} • {cert.date}
    </p>

    {/* Tags */}
    <div className="flex flex-wrap gap-2 mb-2">
      {cert.tags?.map((tag, idx) => (
        <span
          key={idx}
          className="px-2 py-1 rounded-md bg-stone-100 dark:bg-stone-700 text-xs text-stone-600 dark:text-stone-300"
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
      className="text-emerald-600 text-sm font-medium hover:underline"
    >
      View credential
    </a>
  </div>
</div>

                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
