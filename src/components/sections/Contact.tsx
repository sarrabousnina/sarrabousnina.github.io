import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Download, Send, Check } from "lucide-react";
import { useState } from "react";
import Section from "@/components/Section";
import { translations, type Lang } from "@/lib/i18n";
import { toast } from "sonner";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xovnzwoy";

const links = [
  { icon: Mail, label: "Email", href: "mailto:sarra.bousnina@esprit.tn", handle: "sarra.bousnina@esprit.tn" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sarra-bousnina/", handle: "in/sarra-bousnina" },
  { icon: Github, label: "GitHub", href: "https://github.com/sarrabousnina", handle: "@sarrabousnina" },
  { icon: MapPin, label: "Location", href: "https://maps.google.com/?q=Tunis,Tunisia", handle: "Tunis, Tunisia" },
];

const Contact = ({ lang }: { lang: Lang }) => {
  const t = translations[lang].contact;
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setSent(false);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSent(true);
        setFormData({ name: "", email: "", message: "" });
        toast.success(
          lang === "en"
            ? "Message sent successfully! I'll get back to you soon."
            : "Message envoyé avec succès ! Je vous répondrai rapidement."
        );
      } else {
        const data = await response.json().catch(() => null);
        throw new Error(data?.errors?.[0]?.message || "Failed to send message");
      }
    } catch (err: any) {
      toast.error(
        lang === "en"
          ? (err.message || "Failed to send. Please email me directly at sarra.bousnina@esprit.tn")
          : "Échec de l'envoi. Veuillez m'écrire directement à sarra.bousnina@esprit.tn"
      );
    } finally {
      setSending(false);
    }
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
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
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

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/sarra_bousnina_en.pdf"
              download="sarra_bousnina_en.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-aurora text-primary-foreground font-medium text-sm glow-cyan transition-transform hover:scale-105"
            >
              <Download className="w-4 h-4" />
              {lang === "fr" ? "CV en anglais (EN)" : "Download Resume (EN)"}
            </a>
            <a
              href="/sarra_bousnina_fr.pdf"
              download="sarra_bousnina_fr.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full glass glass-hover font-medium text-sm border border-primary/20 transition-transform hover:scale-105"
            >
              <Download className="w-4 h-4 text-primary" />
              {lang === "fr" ? "CV en français (FR)" : "Download Resume (FR)"}
            </a>
          </div>
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
            <input
              required
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label className="text-xs font-mono text-primary mb-1.5 block">{t.email}</label>
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label className="text-xs font-mono text-primary mb-1.5 block">{t.message}</label>
            <textarea
              required
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-aurora text-primary-foreground font-medium glow-purple transition-transform hover:scale-[1.02] disabled:opacity-60"
          >
            {sending ? (
              <span className="inline-flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                {lang === "fr" ? "Envoi en cours..." : "Sending..."}
              </span>
            ) : sent ? (
              <span className="inline-flex items-center gap-2">
                <Check className="w-4 h-4" />
                {lang === "fr" ? "Message envoyé !" : "Message Sent!"}
              </span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                {t.send}
              </>
            )}
          </button>
        </motion.form>
      </div>
    </Section>
  );
};

export default Contact;
