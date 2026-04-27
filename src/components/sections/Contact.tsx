import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Globe, Download, Send } from "lucide-react";
import { useState } from "react";
import Section from "@/components/Section";
import { translations, type Lang } from "@/lib/i18n";
import { toast } from "sonner";

const links = [
  { icon: Github, label: "GitHub", href: "https://github.com/sarrabousnina", handle: "@sarrabousnina" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sarra-bousnina/", handle: "in/sarra-bousnina" },
  { icon: Globe, label: "Portfolio", href: "https://sarrabousnina.github.io/", handle: "sarrabousnina.github.io" },
  { icon: Mail, label: "Email", href: "mailto:sarra.bousnina@esprit.tn", handle: "sarra.bousnina@esprit.tn" },
];

const Contact = ({ lang }: { lang: Lang }) => {
  const t = translations[lang].contact;
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success(lang === "en" ? "Message sent! I'll get back to you soon." : "Message envoyé ! Je vous réponds vite.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <Section id="contact" eyebrow="08 / contact" title={t.title}>
      <div className="grid lg:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">{t.desc}</p>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {links.map(({ icon: Icon, label, href, handle }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group glass glass-hover rounded-2xl p-4 flex items-center gap-3"
              >
                <div className="p-2 rounded-xl bg-gradient-aurora">
                  <Icon className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-mono text-muted-foreground">{label}</div>
                  <div className="text-sm truncate group-hover:text-primary transition-colors">{handle}</div>
                </div>
              </a>
            ))}
          </div>
          <a
            href="/CV-Sarra-Bousnina.pdf"
            download="CV-Sarra-Bousnina.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-aurora text-primary-foreground font-medium glow-cyan transition-transform hover:scale-105"
          >
            <Download className="w-4 h-4" />
            {t.resume}
          </a>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={onSubmit}
          className="glass border-gradient rounded-3xl p-7 space-y-4"
        >
          <div>
            <label className="text-xs font-mono text-primary mb-1.5 block">{t.name}</label>
            <input required className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" />
          </div>
          <div>
            <label className="text-xs font-mono text-primary mb-1.5 block">{t.email}</label>
            <input required type="email" className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" />
          </div>
          <div>
            <label className="text-xs font-mono text-primary mb-1.5 block">{t.message}</label>
            <textarea required rows={5} className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors resize-none" />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-aurora text-primary-foreground font-medium glow-purple transition-transform hover:scale-[1.02] disabled:opacity-60"
          >
            <Send className="w-4 h-4" />
            {sending ? "..." : t.send}
          </button>
        </motion.form>
      </div>
    </Section>
  );
};

export default Contact;
