import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Sparkles, Mail } from "lucide-react";
import avatar from "@/assets/sarra-avatar.jpg";
import { translations, type Lang } from "@/lib/i18n";

const Hero = ({ lang }: { lang: Lang }) => {
  const t = translations[lang].hero;
  const phrases = t.typing;
  const [text, setText] = useState("");
  const [pIdx, setPIdx] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = phrases[pIdx];
    const speed = del ? 35 : 65;
    const timer = setTimeout(() => {
      if (!del) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDel(true), 1600);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") { setDel(false); setPIdx((pIdx + 1) % phrases.length); }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [text, del, pIdx, phrases]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-muted-foreground">{translations[lang].hero.available}</span>
          </div>

          <h1 className="font-bold leading-[0.95] tracking-tight text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-6">
            <span className="block text-foreground/90">Sarra</span>
            <span className="block text-gradient">Bousnina</span>
          </h1>

          <div className="font-mono text-sm sm:text-base text-muted-foreground mb-3">
            <span className="text-primary">&gt;</span> {t.role} <span className="text-secondary">|</span> {t.sub}
          </div>

          <p className="text-xl sm:text-2xl text-foreground/80 min-h-[2.5rem] mb-10 cursor-blink">
            {text}
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium bg-gradient-aurora text-primary-foreground glow-cyan transition-all hover:scale-105 hover:shadow-[0_0_50px_hsl(var(--primary)/0.7)]">
              <Sparkles className="w-4 h-4" />
              {t.viewProjects}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium glass glass-hover">
              <Mail className="w-4 h-4 text-primary" />
              {t.contact}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[420px] lg:h-[420px]">
            <div className="absolute inset-0 rounded-full bg-gradient-aurora blur-3xl opacity-50 animate-pulse-glow" />
            <div className="absolute inset-0 rounded-full border-gradient animate-pulse-glow" />
            <div className="absolute inset-3 rounded-full overflow-hidden border border-primary/30">
              <img
                src={avatar}
                alt="Sarra Bousnina — AI Software Engineer portrait"
                width={420} height={420}
                className="w-full h-full object-cover scale-110"
              />
            </div>
            {/* orbital ring */}
            <motion.div
              className="absolute inset-[-20px] rounded-full border border-primary/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-primary glow-cyan" />
            </motion.div>
            <motion.div
              className="absolute inset-[-40px] rounded-full border border-secondary/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            >
              <span className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-secondary glow-purple" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono text-muted-foreground"
      >
        scroll ↓
      </motion.div>
    </section>
  );
};

export default Hero;
