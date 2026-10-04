import { motion } from "framer-motion";
import { Award, Trophy, ExternalLink } from "lucide-react";
import Section from "@/components/Section";
import { translations, type Lang } from "@/lib/i18n";

interface Award {
  medal: string;
  title: string;
  project: string;
  desc: string;
  tech: string[];
  tag: string;
  image?: string;
}

interface Cert {
  title: string;
  issuer: string;
  date: string;
  logo: string;
  tags: string[];
  credentialUrl: string;
}

const certs: Cert[] = [
  {
    title: "Building RAG Agents with LLMs",
    issuer: "NVIDIA",
    date: "11/2025",
    logo: "/logos/RAG.png",
    tags: ["Generative AI", "RAG", "LLMs"],
    credentialUrl: "https://learn.nvidia.com/certificates?id=4AXuu_46RJOCFJ6kStXG9A#",
  },
  {
    title: "AWS Academy Graduate – Cloud Foundations",
    issuer: "AWS Academy",
    date: "11/2025",
    logo: "/logos/aws badge.png",
    tags: ["AWS", "Cloud"],
    credentialUrl: "https://www.credly.com/badges/3f4af3e0-7d15-43b8-bb52-0f002b11ca8d/print",
  },
  {
    title: "Applications of AI for Anomaly Detection",
    issuer: "NVIDIA",
    date: "11/2025",
    logo: "/logos/anomaly detection.png",
    tags: ["XGBoost", "AI", "Anomaly Detection"],
    credentialUrl: "https://learn.nvidia.com/certificates?id=uOx2JSYPRembVJns9mY88Q",
  },
  {
    title: "Attendance Hashgraph Developer Course",
    issuer: "The Hashgraph Association",
    date: "10/2025",
    logo: "/logos/blockchain.png",
    tags: ["Blockchain", "Hashgraph"],
    credentialUrl: "https://certs.hashgraphdev.com/de967611-56da-48f9-91b3-621e6f7ef8a4.pdf",
  },
  {
    title: "Rapid Application Development with Large Language Models (LLMs)",
    issuer: "NVIDIA",
    date: "06/2025",
    logo: "/logos/rapidLLM.png",
    tags: ["LLMs", "Prototyping", "RAG"],
    credentialUrl: "https://learn.nvidia.com/certificates?id=uMJ7N_LVSkubv8t3mJ6Iag",
  },
  {
    title: "Building AI Agents with Multimodal Models",
    issuer: "NVIDIA",
    date: "06/2025",
    logo: "/logos/AIagent.png",
    tags: ["Agents", "Multimodal", "Vision+LLM"],
    credentialUrl: "https://learn.nvidia.com/certificates?id=14xeyRKPQXi5rxi4FhLpmA",
  },
  {
    title: "Building LLM Applications with Prompt Engineering",
    issuer: "NVIDIA",
    date: "06/2025",
    logo: "/logos/LLMprompt.png",
    tags: ["Prompt Engineering", "LLMs"],
    credentialUrl: "https://learn.nvidia.com/certificates?id=7Sdwdy9yS3-_RazfdvF-kg",
  },
  {
    title: "Building Transformer-Based Natural Language Processing Applications",
    issuer: "NVIDIA",
    date: "06/2025",
    logo: "/logos/transformerNLP.png",
    tags: ["Transformers", "NLP"],
    credentialUrl: "https://learn.nvidia.com/certificates?id=tUl-7lrXT_6VYQ61bdEbWA",
  },
  {
    title: "Evaluation and Light Customization of Large Language Models",
    issuer: "NVIDIA",
    date: "06/2025",
    logo: "/logos/evalLLM.png",
    tags: ["Evaluation", "Fine-tuning", "LoRA"],
    credentialUrl: "https://learn.nvidia.com/certificates?id=g2RO6yzzQ2SzOvpWb7bcag",
  },
  {
    title: "Fundamentals of Deep Learning",
    issuer: "NVIDIA",
    date: "03/2025",
    logo: "/logos/DL.png",
    tags: ["Deep Learning", "Neural Networks", "AI"],
    credentialUrl: "https://learn.nvidia.com/certificates?id=KBA4J8RJS-a7BrB5DLoswQ",
  },
  {
    title: "Scrum Fundamentals Certified (SFC)",
    issuer: "SCRUMstudy",
    date: "12/2024",
    logo: "/logos/SCRUM.png",
    tags: ["Scrum", "Agile", "Project Management"],
    credentialUrl: "https://www.scrumstudy.com/certification/verify?type=SFC&number=1059261",
  },
  {
    title: "The Git & GitHub BootCamp",
    issuer: "Udemy",
    date: "11/2024",
    logo: "/logos/Git.png",
    tags: ["Git", "GitHub", "Version Control"],
    credentialUrl: "https://www.udemy.com/certificate/UC-2b4a1591-7027-487c-8832-1e6577da90fa/",
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI (Stanford) / Coursera",
    date: "03/2024",
    logo: "/logos/ML.png",
    tags: ["Machine Learning", "Python", "Algorithms"],
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/R5HUEBEZXLBV",
  },
  {
    title: "Introduction to Front-End Development",
    issuer: "Meta / Coursera",
    date: "04/2024",
    logo: "/logos/front.png",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/26W5W3GA7WR4",
  },
];

const awards = [
  {
    medal: "🥈",
    title: "2nd Place — Finnovo 1.0 Hackathon",
    project: "BFF Loan Hub",
    desc: "AI-Powered Loan Application System",
    tech: ["React 19", "FastAPI", "Groq SDK", "Llama-4-Scout"],
    tag: "Fintech · Document Verification · Fraud Detection",
    image: "/images/finnovo1.jpeg",
  },
  {
    medal: "🥈",
    title: "2nd Place — CyberIA Hackathon · ESPRIT (33 teams)",
    project: "EagleScout",
    desc: "AI-Powered Security Vulnerability Detection",
    tech: ["VLM", "Foundation-sec-8b-reasoning", "ReAct Pattern"],
    tag: "Cybersecurity · AI Vulnerability Scanning",
    image: "/images/cyberia.png",
  },
  {
    medal: "🥈",
    title: "2nd Place — EY × Dauphine Hackathon",
    project: "Smart Claims Automation",
    desc: "Fraud Detection & Auto Insurance",
    tech: ["Computer Vision", "RAG", "Fraud Detection"],
    tag: "Insurance AI · Cost Estimation (TND)",
    image: "/images/dauph.jpeg",
  },
  {
    medal: "🥇",
    title: "1st Prize — Bal des Projets 2025 · Software Engineering",
    project: "TimeForge",
    desc: "AI-Powered Productivity App",
    tech: ["Spring Boot", "Angular", "Python", "DeepFace", "NLP"],
    tag: "Productivity · Mood Analysis · Screen-time",
    image: "/images/bal.jpg",
  },
  {
    medal: "🥇",
    title: "1st Prize — INSAT Hackathon",
    project: "Your Lab Twin AI",
    desc: "Drug Discovery Automation",
    tech: ["Agentic AI", "Drug Discovery"],
    tag: "Pharmaceutical AI",
    image: "/images/hack.jpg",
  },
] as const;

const community = [
  { role: "Mentor", org: "DeepFlow AI Club" },
  { role: "Member", org: "IEEE Student Branch" },
  { role: "Volunteer", org: "HackFlow · Engineering Road · Integration Day" },
];

export const Awards = ({ lang }: { lang: Lang }) => (
  <Section id="awards" eyebrow="01 / wins" title={translations[lang].awards.title}>
    <div className="grid md:grid-cols-2 gap-6">
      {awards.map((a, i) => (
        <motion.div
          key={a.title}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.06 }}
          whileHover={{ y: -6 }}
          className="border-gradient rounded-3xl overflow-hidden group"
        >
          {a.image && (
            <div className="relative h-48 overflow-hidden">
              <img
                src={a.image}
                alt={a.project}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
            </div>
          )}
          <div className="p-7">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-4xl">{a.medal}</span>
              <Trophy className="w-5 h-5 text-primary" />
            </div>
            <div className="font-bold text-lg leading-snug mb-1">{a.title}</div>
            <div className="text-gradient font-semibold text-base mb-1">{a.project}</div>
            <div className="text-sm text-muted-foreground mb-3">{a.desc}</div>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {a.tech.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-mono px-2 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="text-xs text-muted-foreground/80 italic">{a.tag}</div>
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
);

export const Certifications = ({ lang }: { lang: Lang }) => (
  <Section id="certifications" eyebrow="08 / credentials" title={translations[lang].certs.title}>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {certs.map((c, i) => (
        <motion.div
          key={c.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.04 }}
          whileHover={{ y: -6 }}
          className="border-gradient rounded-3xl overflow-hidden glass group flex flex-col h-full"
        >
          {/* Logo container */}
          <div className="relative h-36 w-full flex items-center justify-center bg-card/60 border-b border-border/40 p-4 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <img
              src={c.logo}
              alt={`${c.issuer} logo`}
              className="max-h-full max-w-full object-contain filter drop-shadow-md transition-transform duration-300 group-hover:scale-105 relative z-10"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-1 justify-between">
            <div>
              <div className="font-semibold text-foreground group-hover:text-primary transition-colors text-base leading-snug mb-1">
                {c.title}
              </div>
              <div className="text-xs text-muted-foreground font-mono mb-3">
                {c.issuer} · {c.date}
              </div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {c.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={c.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-secondary transition-colors mt-auto pt-3 border-t border-border/30 group/link"
            >
              <span>{lang === "fr" ? "Vérifier le certificat" : "Verify Credential"}</span>
              <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
);

export const Community = ({ lang }: { lang: Lang }) => (
  <Section id="community" eyebrow="09 / impact" title={translations[lang].community.title}>
    <div className="grid sm:grid-cols-3 gap-5">
      {community.map((c, i) => (
        <motion.div
          key={c.org}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="glass glass-hover rounded-2xl p-6"
        >
          <div className="font-mono text-xs text-primary mb-2">{c.role}</div>
          <div className="font-semibold">{c.org}</div>
        </motion.div>
      ))}
    </div>
  </Section>
);

const CertsAwards = ({ lang }: { lang: Lang }) => (
  <>
    <Awards lang={lang} />
    <Certifications lang={lang} />
    <Community lang={lang} />
  </>
);

export default CertsAwards;
