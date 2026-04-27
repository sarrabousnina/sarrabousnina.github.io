import { motion } from "framer-motion";
import { GraduationCap, Brain, Users, Code2, Sparkles } from "lucide-react";
import Section from "@/components/Section";
import { translations, type Lang } from "@/lib/i18n";

const icons = [GraduationCap, Brain, Users, Code2];

const About = ({ lang }: { lang: Lang }) => {
  const t = translations[lang].about;
  return (
    <Section id="about" eyebrow="01 / about" title={t.title}>
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-lg sm:text-xl text-foreground/80 leading-relaxed"
        >
          {t.bio}
        </motion.p>

        <div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {t.badges.map((label, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="glass glass-hover rounded-2xl p-5 flex flex-col items-start gap-2"
                >
                  <div className="p-2 rounded-xl bg-gradient-aurora">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="font-medium">{label}</span>
                </motion.div>
              );
            })}
          </div>
          <div className="border-gradient p-4 rounded-2xl flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm">{t.seeking}</span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
