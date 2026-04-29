import { motion } from "framer-motion";
import Section from "@/components/Section";
import { translations, type Lang } from "@/lib/i18n";

// Use simpleicons CDN — slug + hex color (no '#'). Fallback for items without an icon: text badge.
type Item = { name: string; slug?: string; color?: string; local?: boolean };

const groups: { title: string; items: Item[] }[] = [
  {
    title: "Languages",
    items: [
      { name: "Python", slug: "python", color: "3776AB" },
      { name: "Java", slug: "openjdk", color: "ED8B00" },
      { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
      { name: "TypeScript", slug: "typescript", color: "3178C6" },
      { name: "PHP", slug: "php", color: "777BB4" },
      { name: "C", slug: "c", color: "A8B9CC" },
      { name: "HTML5", slug: "html5", color: "E34F26" },
      { name: "CSS3", slug: "css3", color: "1572B6" },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "Spring Boot", slug: "springboot", color: "6DB33F" },
      { name: "Angular", slug: "angular", color: "DD0031" },
      { name: "React", slug: "react", color: "61DAFB" },
      { name: "Symfony", slug: "symfony", color: "000000" },
      { name: ".NET", slug: "dotnet", color: "512BD4" },
      { name: "JWT", slug: "jsonwebtokens", color: "000000" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MySQL", slug: "mysql", color: "4479A1" },
      { name: "MongoDB", slug: "mongodb", color: "47A248" },
      { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
    ],
  },
  {
    title: "Generative AI",
    items: [
      { name: "Agentic AI" },
      { name: "RAG" },
      { name: "LLM" },
      { name: "Groq" },
      { name: "Ollama", slug: "ollama", color: "FFFFFF" },
      { name: "OpenRouter" },
      { name: "Prompt Engineering" },
      { name: "Vector DBs" },
    ],
  },
  {
    title: "AI Frameworks",
    items: [
      { name: "FastAPI", slug: "fastapi", color: "009688" },
      { name: "Flask", slug: "flask", color: "FFFFFF" },
      { name: "LangChain", slug: "langchain", color: "1C3C3C" },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      { name: "GCP", slug: "googlecloud", color: "4285F4" },
      { name: "Vertex AI", slug: "vertex", color: "4285F4", local: true },
      { name: "Terraform", slug: "terraform", color: "7B42BC" },
      { name: "Docker", slug: "docker", color: "2496ED" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", slug: "git", color: "F05032" },
      { name: "GitHub", slug: "github", color: "FFFFFF" },
      { name: "REST API", slug: "openapiinitiative", color: "6BA539" },
      { name: "Power BI" },
      { name: "Linux", slug: "linux", color: "FCC624" },
      { name: "FlutterFlow", slug: "flutter", color: "02569B" },
      { name: "Postman", slug: "postman", color: "FF6C37" },
    ],
  },
];

const iconUrl = (slug: string, color: string) =>
  `https://cdn.simpleicons.org/${slug}/${color}`;

const Skills = ({ lang }: { lang: Lang }) => {
  return (
    <Section id="skills" eyebrow="03 / stack" title={translations[lang].skills.title}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="glass glass-hover rounded-3xl p-6 group"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-mono text-sm text-primary tracking-wider">{g.title}</h3>
              <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {g.items.map((it) =>
                it.slug && it.color ? (
                  <div
                    key={it.name}
                    title={it.name}
                    className="group/chip flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 transition-all hover:border-primary/60 hover:bg-primary/10 hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
                  >
                    <img
                      src={it.local ? `/images/${it.slug}.png` : iconUrl(it.slug, it.color)}
                      alt={`${it.name} logo`}
                      loading="lazy"
                      className="w-7 h-7 transition-transform group-hover/chip:scale-110"
                    />
                    <span className="text-xs text-foreground/85">{it.name}</span>
                  </div>
                ) : (
                  <span
                    key={it.name}
                    className="text-xs px-3 py-2 rounded-xl bg-gradient-to-r from-primary/15 to-secondary/15 border border-primary/30 text-foreground/90 transition-all hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
                  >
                    {it.name}
                  </span>
                )
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
