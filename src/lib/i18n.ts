export type Lang = "en" | "fr";

export const translations = {
  en: {
    nav: { about: "About", skills: "Skills", projects: "Projects", experience: "Experience", awards: "Awards", contact: "Contact" },
    hero: {
      role: "AI Software Engineer",
      sub: "Software Engineering Graduate · ESPRIT · Excellent Honors",
      typing: ["Building Agentic AI systems.", "Crafting RAG pipelines.", "Engineering LLM-powered apps.", "Hackathon medalist x5."],
      viewProjects: "View Projects",
      contact: "Contact Me",
      available: "Open to opportunities",
    },
    about: {
      title: "About",
      bio: "AI Software Engineer graduated from ESPRIT with excellent honors, focused on building intelligent, agentic systems with LLMs, RAG, and modern full-stack architectures. Multi-time hackathon medalist, mentor, and lifelong learner — pushing the boundaries of applied AI.",
      badges: ["ESPRIT Graduate", "Excellent Honors", "AI Enthusiast", "Full-Stack"],
      seeking: "Open to opportunities",
    },
    skills: { title: "Tech Stack" },
    projects: { title: "Projects", hackathons: "Hackathon Wins", others: "Other Projects", demo: "Demo" },
    exp: { title: "Experience" },
    edu: { title: "Education" },
    certs: { title: "Certifications" },
    awards: { title: "Prizes & Awards" },
    community: { title: "Community" },
    contact: { title: "Let's Connect", desc: "Open to AI/ML internships, collaborations and bold ideas.", resume: "Download Resume", send: "Send Message", name: "Name", email: "Email", message: "Message" },
  },
  fr: {
    nav: { about: "À propos", skills: "Compétences", projects: "Projets", experience: "Expérience", awards: "Prix", contact: "Contact" },
    hero: {
      role: "Ingénieure IA",
      sub: "Diplômée en Ingénierie Logicielle · ESPRIT · Mention excellente",
      typing: ["Conception de systèmes IA agentiques.", "Création de pipelines RAG.", "Apps propulsées par LLM.", "5x médaillée en hackathon."],
      viewProjects: "Voir les projets",
      contact: "Me contacter",
      available: "Ouverte aux opportunités",
    },
    about: {
      title: "À propos",
      bio: "Ingénieure logicielle IA diplômée d'ESPRIT avec mention excellente, passionnée par la création de systèmes intelligents et agentiques basés sur les LLM, le RAG et des architectures full-stack modernes. Médaillée plusieurs fois en hackathon, mentor et apprenante perpétuelle — repoussant les limites de l'IA appliquée.",
      badges: ["Diplômée d'ESPRIT", "Mention excellente", "Passionnée d'IA", "Full-Stack"],
      seeking: "Ouverte aux opportunités",
    },
    skills: { title: "Stack Technique" },
    projects: { title: "Projets", hackathons: "Victoires en Hackathon", others: "Autres projets", demo: "Démo" },
    exp: { title: "Expérience" },
    edu: { title: "Formation" },
    certs: { title: "Certifications" },
    awards: { title: "Prix & Récompenses" },
    community: { title: "Communauté" },
    contact: { title: "Restons en contact", desc: "Ouverte aux stages en IA/ML, collaborations et idées audacieuses.", resume: "Télécharger le CV", send: "Envoyer", name: "Nom", email: "Email", message: "Message" },
  },
} as const;
