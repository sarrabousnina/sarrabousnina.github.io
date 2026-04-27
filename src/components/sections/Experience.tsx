import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import Section from "@/components/Section";
import { translations, type Lang } from "@/lib/i18n";

const exp = [
  {
    role: "AI Software Development Intern",
    org: "Mahd.Group",
    date: "Jul – Aug 2025",
    desc: "Developed CorrectMeAI, an AI-powered web application for automated exam correction. Integrated OCR for text extraction, LLMs for intelligent grading, and RAG-powered chatbot with ReAct agent. Built full-stack platform from scratch with React.js and Flask backend."
  },
  {
    role: "Software Development Intern",
    org: "CTAMA Insurance",
    date: "Jul – Aug 2024",
    desc: "Built MyCTAMA, a comprehensive mobile insurance application using .NET MAUI. Implemented features for claims processing, quote generation, and agency location services. Delivered user-friendly solution that streamlined customer interactions."
  },
];

const edu = [
  {
    role: "Software Engineering",
    org: "ESPRIT (École Supérieure Privée d'Ingénierie et de Technologies)",
    date: "2023 – Present",
    desc: "Final-year student pursuing comprehensive Software Engineering degree with specialization in AI and Machine Learning. Active member of DeepFlow AI Club and mentor for junior students."
  },
  {
    role: "Pre-Engineering Program (MP)",
    org: "IPEIN (Institut Préparatoire aux Études d'Ingénieurs de Nabeul)",
    date: "2021 – 2023",
    desc: "Completed intensive preparatory program focusing on mathematics, physics, and foundational engineering principles. Built strong analytical and problem-solving skills."
  },
  {
    role: "Mathematics Baccalaureate",
    org: "Pioneer High School of Hammam Lif",
    date: "2017 – 2021",
    desc: "Graduated with honors in Mathematics Baccalaureate, demonstrating exceptional analytical abilities and academic excellence."
  },
];

const Timeline = ({ items, icon: Icon }: { items: { role: string; org: string; date: string; desc?: string }[]; icon: typeof Briefcase }) => (
  <div className="relative pl-8">
    <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />
    <div className="space-y-8">
      {items.map((it, i) => (
        <motion.div
          key={it.role + it.org}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="relative"
        >
          <span className="absolute -left-[27px] top-1.5 h-3.5 w-3.5 rounded-full bg-gradient-aurora glow-cyan ring-4 ring-background" />
          <div className="glass rounded-2xl p-5 glass-hover">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
              <h4 className="font-semibold text-lg">{it.role}</h4>
              <span className="font-mono text-xs text-primary">{it.date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Icon className="w-3.5 h-3.5" /> {it.org}
            </div>
            {it.desc && <p className="text-sm text-foreground/75 leading-relaxed">{it.desc}</p>}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const Experience = ({ lang }: { lang: Lang }) => (
  <Section id="experience" eyebrow="04 / journey" title={translations[lang].exp.title}>
    <div className="grid lg:grid-cols-2 gap-12">
      <div>
        <h3 className="font-mono text-sm text-secondary mb-6 tracking-widest uppercase">// {translations[lang].exp.title}</h3>
        <Timeline items={exp} icon={Briefcase} />
      </div>
      <div>
        <h3 className="font-mono text-sm text-secondary mb-6 tracking-widest uppercase">// {translations[lang].edu.title}</h3>
        <Timeline items={edu} icon={GraduationCap} />
      </div>
    </div>
  </Section>
);

export default Experience;
