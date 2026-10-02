import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Msg = { role: "user" | "bot"; text: string };

const KB = [
  {
    keys: ["who", "sarra", "about", "qui", "présente", "presente"],
    en: "Sarra Bousnina is a final-year AI Software Engineering student at ESPRIT, specialized in Agentic AI, RAG and LLM apps. She's a 5x hackathon medalist (2x 1st, 3x 2nd).",
    fr: "Sarra Bousnina est étudiante en dernière année d'ingénierie logicielle IA à ESPRIT, spécialisée en IA agentique, RAG et applications LLM. 5x médaillée en hackathon (2x 1er, 3x 2e).",
    section: "about",
  },
  {
    keys: ["skill", "stack", "tech", "compétence", "competence"],
    en: "Her stack: Python, Java, TS, React, Angular, Spring Boot, FastAPI, LangChain, Groq/Ollama, Vector DBs, Docker. Scrolling to Skills…",
    fr: "Son stack : Python, Java, TS, React, Angular, Spring Boot, FastAPI, LangChain, Groq/Ollama, Vector DBs, Docker. Direction Compétences…",
    section: "skills",
  },
  {
    keys: ["project", "projet"],
    en: "Top projects: EagleScout (🥈CyberIA), BFF Loan Hub (🥈Finnovo), AI MINDS, TimeForge (🥇1st), inspireAI. Scrolling to Projects…",
    fr: "Projets phares : EagleScout (🥈CyberIA), BFF Loan Hub (🥈Finnovo), AI MINDS, TimeForge (🥇1er), inspireAI. Direction Projets…",
    section: "projects",
  },
  {
    keys: ["eaglescope", "cyberia", "security"],
    en: "EagleScout: AI-powered security vulnerability detection system. Won 2nd place among 33 teams at CyberIA Hackathon ESPRIT. Uses VLM, ReAct, and graph traversal.",
    fr: "EagleScout : Système de détection de vulnérabilités de sécurité alimenté par l'IA. 2e place sur 33 équipes au Hackathon CyberIA ESPRIT. Utilise VLM, ReAct et parcours de graphe.",
    section: "projects",
  },
  {
    keys: ["bff", "loan", "finnovo", "fintech"],
    en: "BFF Loan Hub: AI-powered loan application system with Groq Llama-4-Scout. Won 2nd place at Finnovo 1.0 Hackathon. Features document verification, fraud detection, and compliance checking.",
    fr: "BFF Loan Hub : Système de demande de prêt alimenté par l'IA avec Groq Llama-4-Scout. 2e place au Hackathon Finnovo 1.0. Vérification de documents, détection de fraude, et conformité bancaire.",
    section: "projects",
  },
  {
    keys: ["award", "prize", "hackathon", "prix", "récompense", "recompense"],
    en: "She won 5 hackathon medals: 2nd Finnovo, 2nd CyberIA (33 teams), 2nd EY×Dauphine, 1st Bal des Projets, 1st INSAT. Scrolling to Awards…",
    fr: "Elle a gagné 5 médailles : 2e Finnovo, 2e CyberIA (33 équipes), 2e EY×Dauphine, 1er Bal des Projets, 1er INSAT. Direction Prix…",
    section: "awards",
  },
  {
    keys: ["experience", "work", "internship", "stage", "mahd", "ctama"],
    en: "AI Intern @ Mahd.Group (CorrectMeAI), Software Intern @ CTAMA (MyCTAMA mobile app). Scrolling to Experience…",
    fr: "Stage IA @ Mahd.Group (CorrectMeAI), Stage Logiciel @ CTAMA (app mobile MyCTAMA). Direction Expérience…",
    section: "experience",
  },
  {
    keys: ["cert", "certification", "nvidia", "aws"],
    en: "14 certifications: NVIDIA (RAG, LLMs, Deep Learning), AWS Cloud Foundations, Hashgraph, Scrum, Git/GitHub. Scrolling to Certifications…",
    fr: "14 certifications : NVIDIA (RAG, LLM, Deep Learning), AWS Cloud Foundations, Hashgraph, Scrum, Git/GitHub. Direction Certifications…",
    section: "certifications",
  },
  {
    keys: ["contact", "email", "hire", "reach", "stage"],
    en: "Let's connect! Open to AI/ML internships. Scrolling to Contact…",
    fr: "Restons en contact ! Ouverte aux stages IA/ML. Direction Contact…",
    section: "contact",
  },
  {
    keys: ["resume", "cv", "download"],
    en: "You can download her CV from the Contact section. Scrolling there…",
    fr: "Téléchargez son CV depuis la section Contact. Défilement…",
    section: "contact",
  },
];

const isFrench = (t: string) =>
  /[àâçéèêëîïôûùüÿœ]|bonjour|salut|merci|projet|compétence|prix|expérience/i.test(t);

const FloatingChatbot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    { role: "bot", text: "Hi! I'm Sarra's AI assistant. Ask me about her skills, projects, awards or experience. (FR/EN)" },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;
    const fr = isFrench(text);
    const lower = text.toLowerCase();
    const match = KB.find((k) => k.keys.some((kw) => lower.includes(kw)));
    const reply: Msg = match
      ? { role: "bot", text: fr ? match.fr : match.en }
      : {
          role: "bot",
          text: fr
            ? "Je peux parler de Sarra : à propos, compétences, projets, prix, expérience, certifications, contact."
            : "I can chat about Sarra: about, skills, projects, awards, experience, certifications, contact.",
        };
    setMessages((m) => [...m, { role: "user", text }, reply]);
    setInput("");
    if (match?.section) {
      setTimeout(() => {
        document.getElementById(match.section!)?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    }
  };

  return (
    <>
      <motion.button
        aria-label="Open chatbot"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-aurora flex items-center justify-center text-primary-foreground animate-pulse-glow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-6 z-50 w-[min(360px,calc(100vw-3rem))] h-[480px] glass rounded-3xl flex flex-col overflow-hidden border-gradient"
          >
            <div className="px-4 py-3 border-b border-border/60 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <div className="font-mono text-sm">
                <span className="text-gradient">Ask about Sarra</span>
              </div>
            </div>
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] text-sm rounded-2xl px-3 py-2 ${
                    m.role === "user"
                      ? "ml-auto bg-primary/20 border border-primary/40"
                      : "bg-white/5 border border-white/10"
                  }`}
                >
                  {m.text}
                </div>
              ))}
            </div>
            <div className="p-3 border-t border-border/60 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your question…"
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm outline-none focus:border-primary/60"
              />
              <button
                onClick={handleSend}
                className="w-10 h-10 rounded-xl bg-gradient-aurora flex items-center justify-center text-primary-foreground hover:scale-105 transition-transform"
                aria-label="Send"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingChatbot;
