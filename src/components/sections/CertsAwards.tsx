import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Trophy, X } from "lucide-react";
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
  org: string;
  date: string;
  image?: string;
}

const certs: Cert[] = [
  { title: "Building RAG Agents with LLMs", org: "NVIDIA", date: "Nov 2025", image: "/images/certs/nvidia-rag.png" },
  { title: "AWS Academy Graduate – Cloud Foundations", org: "AWS Academy", date: "Nov 2025", image: "/images/certs/aws-cloud.png" },
  { title: "Applications of AI for Anomaly Detection", org: "NVIDIA", date: "Nov 2025", image: "/images/certs/nvidia-anomaly.png" },
  { title: "Attendance Hashgraph Developer Course", org: "The Hashgraph Association", date: "Oct 2025", image: "/images/certs/hashgraph.png" },
  { title: "Rapid Application Development with LLMs", org: "NVIDIA", date: "Jun 2025", image: "/images/certs/nvidia-rapid.png" },
  { title: "Building AI Agents with Multimodal Models", org: "NVIDIA", date: "Jun 2025", image: "/images/certs/nvidia-multimodal.png" },
  { title: "Building LLM Applications with Prompt Engineering", org: "NVIDIA", date: "Jun 2025", image: "/images/certs/nvidia-prompt.png" },
  { title: "Building Transformer-Based NLP Applications", org: "NVIDIA", date: "Jun 2025", image: "/images/certs/nvidia-transformer.png" },
  { title: "Evaluation and Light Customization of LLMs", org: "NVIDIA", date: "Jun 2025", image: "/images/certs/nvidia-eval.png" },
  { title: "Fundamentals of Deep Learning", org: "NVIDIA", date: "Mar 2025", image: "/images/certs/nvidia-deep.png" },
  { title: "Scrum Fundamentals Certified", org: "SCRUMstudy", date: "Dec 2024", image: "/images/certs/scrum.png" },
  { title: "The Git & GitHub BootCamp", org: "Udemy", date: "Nov 2024", image: "/images/certs/udemy-git.png" },
  { title: "Supervised ML: Regression and Classification", org: "DeepLearning.AI / Coursera", date: "Mar 2024", image: "/images/certs/coursera-ml.png" },
  { title: "Introduction to Front-End Development", org: "Meta / Coursera", date: "Apr 2024", image: "/images/certs/coursera-frontend.png" },
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
    image: "/images/cyberia.jpeg",
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

export const Certifications = ({ lang }: { lang: Lang }) => {
  const [selectedCert, setSelectedCert] = useState<Cert | null>(null);

  return (
    <Section id="certifications" eyebrow="08 / credentials" title={translations[lang].certs.title}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            whileHover={{ y: -4 }}
            className="glass glass-hover rounded-2xl overflow-hidden flex flex-col cursor-pointer"
            onClick={() => c.image && setSelectedCert(c)}
          >
            {c.image && (
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center p-4">
                <img
                  src={c.image}
                  alt={c.org}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            )}
            <div className="p-5 flex gap-4 items-start flex-1">
              <div className="p-2.5 rounded-xl bg-primary/15 border border-primary/30 shrink-0">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium leading-snug">{c.title}</div>
                <div className="text-xs text-muted-foreground mt-1 font-mono">
                  {c.org} · {c.date}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for viewing certification */}
      <AnimatePresence>
        {selectedCert && selectedCert.image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full glass rounded-3xl overflow-hidden border-gradient"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 hover:bg-background border border-border flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{selectedCert.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 font-mono">
                  {selectedCert.org} · {selectedCert.date}
                </p>
                <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.org}
                    className="max-w-full max-h-[500px] object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

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
