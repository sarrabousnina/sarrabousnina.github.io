import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Msg = { role: "user" | "bot"; text: string; source?: string };
type ApiResponse = {
  response: string;
  suggestions: string[];
  action: string | null;
  source: string | null;
};

const API_URL = "https://sarra-chatbot-api.vercel.app/api/chat";

const FloatingChatbot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    { role: "bot", text: "Hi! I'm Sarra's AI assistant powered by Groq. Ask me about her skills, projects, awards or experience. (FR/EN)" },
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const handleSend = async () => {
    const text = input.trim();
    if (!text || loading) return;

    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, userId: "sarrabousnina" }),
      });

      if (!res.ok) throw new Error("API error");

      const data: ApiResponse = await res.json();
      const botMsg: Msg = { role: "bot", text: data.response };
      if (data.source) botMsg.source = data.source;

      setMessages((m) => [...m, botMsg]);

      // Handle scroll actions
      if (data.action) {
        const sectionMap: Record<string, string> = {
          scrollToProjects: "projects",
          scrollToSkills: "skills",
          scrollToCertifications: "certifications",
          scrollToExperience: "experience",
          scrollToContact: "contact",
          scrollToAwards: "awards",
          scrollToCommunity: "community",
        };
        const sectionId = sectionMap[data.action];
        if (sectionId) {
          setTimeout(() => {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
          }, 400);
        }
      }
    } catch (err) {
      setMessages((m) => [
        ...m,
        { role: "bot", text: "Sorry, I'm having trouble connecting. Please try again." },
      ]);
    } finally {
      setLoading(false);
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
                <div key={i} className={`flex flex-col ${m.role === "user" ? "items-end" : "items-start"}`}>
                  <div
                    className={`max-w-[85%] text-sm rounded-2xl px-3 py-2 ${
                      m.role === "user"
                        ? "bg-primary/20 border border-primary/40"
                        : "bg-white/5 border border-white/10"
                    }`}
                  >
                    {m.text}
                  </div>
                  {m.source && (
                    <span className="text-[10px] text-muted-foreground mt-1 ml-1">{m.source}</span>
                  )}
                </div>
              ))}
              {loading && (
                <div className="bg-white/5 border border-white/10 rounded-2xl px-3 py-2 text-sm text-muted-foreground">
                  Thinking...
                </div>
              )}
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
                disabled={loading}
                className="w-10 h-10 rounded-xl bg-gradient-aurora flex items-center justify-center text-primary-foreground hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
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
