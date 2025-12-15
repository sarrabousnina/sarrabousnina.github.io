import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Locale = 'en' | 'fr'

interface LanguageStore {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (section: string, key: string) => string
}

const translations = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      certifications: "Certifications",
      prizes: "Prizes",
      community: "Community",
      contact: "Contact"
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Sarra Bousnina",
      title: "AI Software Engineer",
      studentInfo: "Final-year Student at ESPRIT",
      subtitle: "Building intelligent, user-centric software with AI and creativity. Passionate about full-stack development, generative AI and creating innovative solutions that make a difference.",
      ctaButton: "View My Work",
      downloadCV: "Download CV",
      contactMe: "Contact Me",
      scrollIndicator: "Scroll to explore"
    },
    about: {
      title: "About Me",
      subtitle: "I'm Sarra Bousnina, a final-year Software Engineering student at ESPRIT, passionate about artificial intelligence. Self-taught through projects and courses, I focus on creating smart, user-centric applications. As a mentor at the DeepFlow AI Club, I love sharing knowledge, fostering innovation, and growing within the AI community.",
      badges: {
        espritStudent: {
          title: "ESPRIT Student",
          description: "Final-year Software Engineering"
        },
        aiEnthusiast: {
          title: "AI Enthusiast",
          description: "Generative AI"
        },
        mentor: {
          title: "Mentor",
          description: "DeepFlow AI Club"
        },
        fullstack: {
          title: "Full-Stack",
          description: "End-to-end Development"
        }
      },
      seeking: "Currently seeking internship opportunities in AI and Full-Stack Development"
    },
    skills: {
      title: "Technical Skills",
      subtitle: "A comprehensive toolkit spanning multiple programming languages, frameworks, and cutting-edge AI technologies to build innovative solutions.",
      categories: {
        languages: "Languages",
        frameworks: "Frameworks",
        databases: "Databases",
        generativeAI: "Generative AI",
        aiFrameworks: "AI Frameworks",
        tools: "Tools"
      },
      items: {
        languages: ["Python", "Java", "JavaScript", "TypeScript", "PHP", "C", "HTML/CSS"],
        frameworks: ["Spring Boot", "Angular", "React", "Symfony", ".NET", "JWT"],
        databases: ["MySQL", "MongoDB", "PostgreSQL"],
        generativeAI: ["Agentic AI", "RAG", "LLM", "API Integrations (groq, ollama, openrouter)", "Prompt Engineering", "Context Engineering", "Vector Databases"],
        aiFrameworks: ["FastAPI", "Flask", "LangChain"],
        tools: ["Git", "Github", "Rest API", "Docker", "Power BI", "Linux", "FlutterFlow", "Postman"]
      }
    },
    projects: {
      title: "Featured Projects",
      subtitle: "A showcase of my recent work spanning AI applications, web development, and innovative software solutions.",
      viewProject: "View Project",
      viewCode: "View Code",
      liveDemo: "Live Demo",
      aboutProject: "About This Project",
      keyFeatures: "Key Features",
      technologiesUsed: "Technologies Used",
      inspireAI: {
        title: "inspireAI",
        subtitle: "AI-Powered Content Studio (Personal Project)",
        description: "A platform that helps creators generate, organize, and refine social media content and blog posts using AI and a ReAct-style AI agent for conversational interaction.",
        longDescription: "inspireAI is my personal AI content assistant built with React and FastAPI that helps creators write blog posts and social media captions without losing control. You tell it your audience, tone, and platform; upload an image if you want context; and it crafts tailored content using Groq's LLMs, enhanced by image analysis via OpenRouter.\n\nAll your posts are saved in a history panel, pin, delete, or revisit them anytime. The real magic? A ReAct-style chat agent that answers natural questions like \"How many posts do I have?\" or \"Summarize my latest draft.\" It doesn't edit for you, it helps you think.\n\nSecure, scalable, and built with JWT auth and PostgreSQL, it's designed to grow with creators, not replace them.",
        features: [
          "AI-powered content generation for social media and blog posts",
          "Conversational ReAct-style agent for natural interaction",
          "Content history with pin, delete, and revisit functionality",
          "Image analysis integration for context-aware content",
          "Secure authentication and scalable database design"
        ]
      },
      correctMeAI: {
        title: "CorrectMeAI",
        subtitle: "Automated Exam Correction System",
        description: "An AI-powered web application for automated exam correction, leveraging OCR, LLMs, and intelligent agents.",
        longDescription: "CorrectMeAI is an advanced automated exam correction system that leverages cutting-edge AI technologies including OCR for text extraction from scanned exams, Large Language Models for intelligent grading and feedback generation, and ReAct agents for handling complex correction workflows. The platform provides educators with efficient tools to grade assignments while maintaining accuracy and consistency.",
        features: [
          "OCR technology for extracting text from scanned exams",
          "LLM-powered grading and feedback generation",
          "ReAct agents for handling complex correction workflows",
          "Consistent and accurate correction automation",
          "Time-saving tools for educators"
        ]
      },
      timeForge: {
        title: "TimeForge",
        subtitle: "AI-Powered Productivity Application",
        description: "A modular productivity app featuring screen-time analytics, distraction detection, mood analysis with DeepFace, and NLP-driven personalized advice.",
        longDescription: "TimeForge is a comprehensive productivity application that combines multiple AI-driven features to help users optimize their digital workflows. The app includes detailed screen-time analytics to track usage patterns, AI-powered distraction detection to minimize interruptions, mood analysis using DeepFace for emotional insights, and personalized recommendations generated through Natural Language Processing. Built with a modular architecture using Spring Boot, Angular, Python, and MySQL.",
        features: [
          "Screen-time analytics and usage pattern tracking",
          "AI-powered distraction detection and minimization",
          "Mood analysis using DeepFace for emotional insights",
          "Personalized recommendations via NLP",
          "Modular architecture for scalability"
        ]
      },
      findYourWay: {
        title: "FindYourWay",
        subtitle: "Indoor Navigation System",
        description: "An intelligent indoor navigation system that helps users navigate complex buildings using Bluetooth beacons and mobile applications.",
        longDescription: "FindYourWay is an innovative indoor navigation solution designed to help people navigate complex buildings like malls, hospitals, and universities. The system uses Bluetooth Low Energy (BLE) beacons strategically placed throughout buildings to provide accurate indoor positioning. Users can input their destination and receive turn-by-turn directions through a mobile app. The system includes admin dashboards for beacon management and analytics on user navigation patterns.",
        features: [
          "Real-time indoor positioning using Bluetooth beacons",
          "Turn-by-turn navigation for complex buildings",
          "Admin dashboard for beacon management",
          "Analytics on navigation patterns and usage",
          "Cross-platform mobile application"
        ]
      },
      eventHub: {
        title: "EventHub",
        subtitle: "Event Management Platform",
        description: "A comprehensive event management platform for organizing, promoting, and managing events with ticketing and attendee engagement features.",
        longDescription: "EventHub is a full-featured event management platform that streamlines the entire event lifecycle from creation to execution. Event organizers can create detailed event pages, manage ticket sales, track attendance, and engage with attendees through built-in messaging and Q&A features. The platform includes QR code-based check-in, real-time analytics, and integration with popular payment gateways. Perfect for conferences, workshops, meetups, and social gatherings.",
        features: [
          "Custom event page creation with branding",
          "Integrated ticketing and payment processing",
          "QR code-based attendee check-in system",
          "Real-time analytics and dashboard",
          "Attendee engagement tools (Q&A, polls)"
        ]
      },
      employeeManager: {
        title: "Employee Manager",
        subtitle: "Employee Records (CRUD) System (Personal Project)",
        description: "Simple full-stack CRUD app to manage employees with search by name.",
        longDescription: "Employee Manager is a learning project built to practice Angular + Spring Boot. It exposes a REST API for employees and a reactive Angular UI to list, create, update, and delete records. It also supports quick search by name.",
        features: [
          "Create / Read / Update / Delete employees",
          "Search by name",
          "Form validation and error handling",
          "API-first design with REST endpoints"
        ]
      },
      university: {
        title: "University",
        subtitle: "Clubs & Campus Management (Symfony)",
        description: "Full-stack university platform built in a team of four. I owned the Clubs module (CRUD, join/leave, ratings, SMS).",
        longDescription: "University is a campus management web app developed by a team of four using Symfony + MySQL. My scope was the Clubs module: create/edit clubs, view details, member counts, join/leave with Twilio SMS notifications, search & filters, and club ratings. The app also includes events, trainings, and library management.",
        features: [
          "Clubs CRUD + detail pages",
          "Join/Leave with live member count",
          "Club ratings & reviews",
          "Search & filters (by name/category)",
          "Twilio SMS on join/leave",
          "Events & trainings (team features)",
          "Library/books management (team feature)"
        ]
      },
      myCTAMA: {
        title: "MyCTAMA Insurance App",
        subtitle: ".NET MAUI Mobile App (Internship)",
        description: "Cross-platform app to request insurance quotes and find nearby CTAMA agencies on a map.",
        longDescription: "Built with .NET MAUI for Android/iOS. Users can request quotes for Home, Car, Agriculture, and Health, browse a news feed on the home screen, and locate agencies on an interactive map. Some static pages were implemented with embedded HTML/CSS.",
        features: [
          "Quote requests: Home / Car / Agriculture / Health",
          "Agency locator with map and GPS",
          "Home screen news feed",
          "Form validation & API submission",
          "Hybrid pages using embedded HTML/CSS"
        ]
      }
    },
    experience: {
      title: "Professional Experience",
      subtitle: "My journey through various roles and opportunities in software development and AI engineering.",
      currentPosition: "Current Position",
      previousPosition: "Previous Position",
      keyAchievements: "Key Achievements",
      technologies: "Technologies",
      mahdGroup: {
        title: "AI Software Development Intern",
        organization: "Mahd.Group",
        period: "July 2025 – August 2025",
        description: "Developed CorrectMeAI, an AI-powered web application for automated exam correction, leveraging OCR, LLMs, and intelligent agents.",
        achievements: [
          "Built a full-stack AI exam correction platform from scratch",
          "Integrated OCR to extract answers from scanned exams",
          "Implemented automated grading and per-question feedback using Qwen3 LLM",
          "Developed RAG-powered chatbot with ReAct agent for interactive queries",
          "Designed a seamless React.js frontend connected to Flask backend"
        ]
      },
      ctama: {
        title: "Software Development Intern",
        organization: "CTAMA Insurance",
        period: "July 2024 - August 2024",
        description: "Developed a comprehensive mobile insurance application MyCTAMA using .NET MAUI, implementing features for claims processing, quote generation, and agency location services. Collaborated with cross-functional teams to deliver a user-friendly solution that streamlined customer interactions.",
        achievements: [
          "Built complete mobile app from scratch",
          "Implemented GPS-based agency locator",
          "Designed intuitive claims submission flow",
          "Integrated real-time quote generation"
        ]
      }
    },
    education: {
      title: "Education",
      subtitle: "Academic background and continuous learning in computer science and artificial intelligence.",
      degree: "Degree",
      institution: "Institution",
      duration: "Duration",
      academicJourney: "Academic",
      journey: "Journey",
      focusAreas: "Focus Areas",
      esprit: {
        title: "Software Engineering",
        organization: "ESPRIT (École Supérieure Privée d'Ingénierie et de Technologies)",
        period: "2023 - Present",
        description: "Currently pursuing a comprehensive Software Engineering degree with specialization in AI and machine learning. Actively engaged in advanced coursework covering algorithms, software architecture, and emerging technologies.",
        achievements: [
          "Specialized in AI and Machine Learning",
          "Active member of DeepFlow AI Club",
          "Mentor for junior students",
          "Consistent academic excellence"
        ]
      },
      ipein: {
        title: "Pre-Engineering Program",
        organization: "IPEIN (Institut Préparatoire aux Études d'Ingénieurs de Nabeul)",
        period: "2021 - 2023",
        description: "Completed intensive preparatory program focusing on mathematics, physics, and foundational engineering principles. Built strong analytical and problem-solving skills essential for advanced engineering studies.",
        achievements: [
          "Strong foundation in engineering principles",
          "Advanced mathematical proficiency",
          "Problem-solving methodology",
          "Successful transition to engineering school"
        ]
      },
      baccalaureate: {
        title: "Mathematics Baccalaureate",
        organization: "Pioneer High School of Hammam Lif",
        period: "2017-2021",
        description: "Graduated with honors in Mathematics Baccalaureate, demonstrating exceptional analytical abilities and academic excellence.",
        achievements: [
          "Graduated with Honors",
          "Mathematics specialization",
          "Academic excellence",
          "University preparation"
        ]
      }
    },
    certifications: {
      title: "Certifications",
      subtitle: "Professional certifications and continuous learning achievements in software development and AI.",
      issuedBy: "Issued by",
      date: "Date",
      viewCredential: "View credential"
    },
    prizes: {
      title: "Achievements & Awards",
      subtitle: "Recognition for excellence in academics, competitions, and professional contributions.",
      awardedBy: "Awarded by",
      year: "Year",
      featured: "Featured",
      learnMore: "Learn More",
      aboutProject: "About This Achievement",
      keyFeatures: "Key Features",
      technologiesUsed: "Technologies Used",
      insatHackathon: {
        title: "1st Prize at INSAT Hackathon",
        subtitle: "INSAT Hackathon for drug discovery",
        description: "Participated in the Hackathon CTRL + Cure organized by IEEE EMBS ISI SBC & IEEE EMBS INSAT SB under the theme 'Hack for Drug Discovery'. Our team was awarded 1st place for developing 'Your Lab Twin AI', a platform integrating multiple automated solutions to accelerate drug discovery using agentic reasoning.",
        longDescription: "1𝐬𝐭 𝐏𝐫𝐢𝐳𝐞 at INSAT Hackathon! 🏆 \n\nAn incredible experience taking part in Hackathon CTRL + Cure organized by IEEE EMBS ISI SBC & IEEE EMBS INSAT SB at INSAT under the theme \"Hack for Drug Discovery.\" After an intense weekend, our team won 1st place among many brilliant minds. Grateful for the support, collaboration, and innovation shared throughout this journey. Huge thanks to my teammate Yassine Kharrat for dedication and creativity, and to the organizers, jury, and inspiring participants.\n\nOur idea, 'Your Lab Twin AI', improves the speed of drug discovery by combining existing solutions that automate each step of the procedure into a single platform using agentic AI.",
        category: "Hackathon/AI",
        features: [
          "Integrates multiple drug discovery tools into one platform",
          "Accelerates experimental workflows",
          "Agentic AI system for intelligent interactions",
          "Supports collaborative research"
        ]
      },
      balDesProjets: {
        title: "1st Prize, Bal des Projets 2025 12ème édition (Software Engineering)",
        subtitle: "TimeForge - AI-Powered Productivity App",
        description: "Built a modular app with a team of five, featuring screen-time analytics, distraction detection, mood analysis with DeepFace, and NLP-driven personalized advice.",
        longDescription: "TimeForge won 1st Prize among all classes of our Software Engineering specialty at Bal des Projets 2025. Collaborating in a team of five, we developed a modular application using Spring Boot, Angular, Python, and MySQL. The platform provides advanced analytics including screen-time tracking, distraction detection, mood analysis via DeepFace, and personalized recommendations using NLP. This project highlights full-stack development skills, AI-driven analytics, and teamwork.",
        category: "Software Engineering / AI",
        features: [
          "Screen-time analytics",
          "Distraction detection",
          "Mood analysis with DeepFace",
          "Personalized advice using NLP",
          "Modular and scalable full-stack architecture"
        ]
      }
    },
      contact: {
      title: "Get In",
      subtitle: "Let's connect and discuss opportunities for collaboration, mentorship, or just a friendly tech conversation.",
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
      subject: "Subject",
      sendButton: "Send Message",
      directContact: "Or reach out directly:",
      phone: "Phone",
      location: "Location",
      touch: "Touch",
      letsConnect: "Let's Connect",
      available: "Available for freelance projects and full-time opportunities"
    },
    community: {
      title: "Community",
      subtitle: "Contributing to the tech community through mentorship, collaboration, and volunteer work",
      volunteering: "Volunteering",
      organization: "Organization",
      learnMore: "Learn more",
      deepflowMentor: {
        role: "Mentor",
        impact: [
          "Coached ML/AI projects for club members",
          "Provided technical guidance through hands-on workshops",
          "Helped organize hackathon events"
        ]
      },
      deepflowMember: {
        role: "Member",
        impact: [
          "Attended technical AI/ML workshops",
          "Contributed to student community initiatives"
        ]
      },
      ieeeMember: {
        role: "Member",
        impact: [
          "Participated in 24-hour coding event Xtreme",
          "Attended technical workshops"
        ]
      },
      hackflowVolunteer: {
        role: "Volunteer",
        impact: [
          "Planning & logistics support for the hackathon event",
          "Coordinated with multiple stakeholders",
          "Ensured smooth execution of integration activities"
        ]
      },
      engineeringRoadVolunteer: {
        role: "Volunteer",
        impact: [
          "Planning & logistics support for biggest event of the year in IPEIN",
          "Coordinated with multiple stakeholders",
          "Ensured smooth execution of integration activities"
        ]
      },
      robopeinMember: {
        role: "Member",
        impact: [
          "Collaborated on technical robot workshops",
          "Contributed to student community initiatives"
        ]
      },
      integrationDayVolunteer: {
        role: "Volunteer",
        impact: [
          "Planning & logistics support for engineering event",
          "Ensured smooth execution of integration activities"
        ]
      }
    },
    footer: {
      bio: "AI Software Engineer passionate about building intelligent, user-centric applications that make a difference in the world.",
      downloadResume: "Download Resume",
      available: "Available for new opportunities",
      builtWith: "Built with using Next.js, Tailwind CSS, and Framer Motion."
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      projects: "Projets",
      skills: "Compétences",
      experience: "Expérience",
      education: "Éducation",
      certifications: "Certifications",
      prizes: "Prix",
      community: "Communauté",
      contact: "Contact"
    },
    hero: {
      greeting: "Bonjour, je suis",
      name: "Sarra Bousnina",
      title: "Ingénieure Logiciel IA",
      studentInfo: "Étudiante de dernière année à ESPRIT",
      subtitle: "Création de logiciels intelligents et centrés sur l'utilisateur avec l'IA et la créativité. Passionnée par le développement full-stack, l'IA générative et la création de solutions innovantes qui font la différence.",
      ctaButton: "Voir Mes Projets",
      downloadCV: "Télécharger CV",
      contactMe: "Me Contacter",
      scrollIndicator: "Défiler pour explorer"
    },
    about: {
      title: "À Propos de Moi",
      subtitle: "Je suis Sarra Bousnina, étudiante de dernière année en Ingénierie Logicielle à l'ESPRIT, passionnée par l'intelligence artificielle. Autodidacte à travers des projets et des cours, je me concentre sur la création d'applications intelligentes et centrées sur l'utilisateur. En tant que mentor au club DeepFlow IA, j'aime partager mes connaissances, favoriser l'innovation et grandir au sein de la communauté IA.",
      badges: {
        espritStudent: {
          title: "Étudiante à l'ESPRIT",
          description: "Ingénierie logicielle en dernière année"
        },
        aiEnthusiast: {
          title: "Passionnée d'IA",
          description: "IA générative"
        },
        mentor: {
          title: "Mentor",
          description: "Club DeepFlow IA"
        },
        fullstack: {
          title: "Full-Stack",
          description: "Développement de bout en bout"
        }
      },
      seeking: "À la recherche d'un stage en IA et développement Full-Stack"
    },
    skills: {
      title: "Compétences Techniques",
      subtitle: "Une boîte à outils complète couvrant plusieurs langages de programmation, frameworks et technologies de pointe en IA pour construire des solutions innovantes.",
      categories: {
        languages: "Langages",
        frameworks: "Frameworks",
        databases: "Bases de Données",
        generativeAI: "IA Générative",
        aiFrameworks: "Frameworks IA",
        tools: "Outils"
      },
      items: {
        languages: ["Python", "Java", "JavaScript", "TypeScript", "PHP", "C", "HTML/CSS"],
        frameworks: ["Spring Boot", "Angular", "React", "Symfony", ".NET", "JWT"],
        databases: ["MySQL", "MongoDB", "PostgreSQL"],
        generativeAI: ["IA Agentique", "RAG", "LLM", "Intégrations API (groq, ollama, openrouter)", "Ingénierie de Prompt", "Ingénierie de Contexte", "Bases de Données Vectorielles"],
        aiFrameworks: ["FastAPI", "Flask", "LangChain"],
        tools: ["Git", "Github", "API Rest", "Docker", "Power BI", "Linux", "FlutterFlow", "Postman"]
      }
    },
    projects: {
      title: "Projets Vedettes",
      subtitle: "Une sélection de mes travaux récents couvrant les applications IA, le développement web et les solutions logicielles innovantes.",
      viewProject: "Voir le Projet",
      viewCode: "Voir le Code",
      liveDemo: "Démo en Direct",
      aboutProject: "À Propos du Projet",
      keyFeatures: "Fonctionnalités Clés",
      technologiesUsed: "Technologies Utilisées",
      inspireAI: {
        title: "inspireAI",
        subtitle: "Studio de Contenu IA (Projet Personnel)",
        description: "Une plateforme qui aide les créateurs à générer, organiser et affiner le contenu des réseaux sociaux et les articles de blog en utilisant l'IA et un agent conversationnel de style ReAct.",
        longDescription: "inspireAI est mon assistant de contenu personnel IA construit avec React et FastAPI qui aide les créateurs à rédiger des articles de blog et des légendes pour les réseaux sociaux sans perdre le contrôle. Vous lui indiquez votre audience, votre ton et votre plateforme ; téléchargez une image si vous voulez du contexte ; et il crée du contenu personnalisé en utilisant les LLM de Groq, amélioré par l'analyse d'image via OpenRouter.\n\nTous vos articles sont sauvegardés dans un panneau d'historique, épinglez, supprimez ou revisitez-les à tout moment. La magie opère ? Un agent de chat de style ReAct qui répond aux questions naturelles comme \"Combien d'articles ai-je ?\" ou \"Résume mon dernier brouillon\". Il n'édite pas pour vous, il vous aide à réfléchir.\n\nSécurisé, évolutif et construit avec authentification JWT et PostgreSQL, il est conçu pour grandir avec les créateurs, pas pour les remplacer.",
        features: [
          "Génération de contenu alimentée par l'IA pour les réseaux sociaux et les articles de blog",
          "Agent conversationnel de style ReAct pour une interaction naturelle",
          "Historique de contenu avec fonctions d'épinglage, suppression et révision",
          "Intégration d'analyse d'image pour du contenu contextuel",
          "Authentification sécurisée et base de données évolutive"
        ]
      },
      correctMeAI: {
        title: "CorrectMeAI",
        subtitle: "Système de Correction d'Examens Automatisé",
        description: "Une application web alimentée par l'IA pour la correction automatisée d'examens, exploitant l'OCR, les LLM et des agents intelligents.",
        longDescription: "CorrectMeAI est un système avancé de correction d'examens automatisé qui exploite des technologies IA de pointe incluant l'OCR pour l'extraction de texte à partir d'examens numérisés, les Grands Modèles de Langage pour une notation intelligente et la génération de feedback, et les agents ReAct pour gérer des flux de correction complexes. La plateforme fournit aux éducateurs des outils efficaces pour noter les devoirs tout en maintenant la précision et la cohérence.",
        features: [
          "Technologie OCR pour extraire le texte des examens numérisés",
          "Notation alimentée par LLM et génération de feedback",
          "Agents ReAct pour gérer les flux de correction complexes",
          "Automatisation de correction cohérente et précise",
          "Outils économiseurs de temps pour les éducateurs"
        ]
      },
      timeForge: {
        title: "TimeForge",
        subtitle: "Application de Productivité Alimentée par l'IA",
        description: "Une application de productivité modulaire avec analyse du temps d'écran, détection des distractions, analyse de l'humeur avec DeepFace et conseils personnalisés basés sur le NLP.",
        longDescription: "TimeForge est une application de productivité complète qui combine plusieurs fonctionnalités alimentées par l'IA pour aider les utilisateurs à optimiser leurs flux de travail numériques. L'application comprend des analyses détaillées du temps d'écran pour suivre les schémas d'utilisation, une détection des distractions alimentée par l'IA pour minimiser les interruptions, une analyse de l'humeur utilisant DeepFace pour des insights émotionnels, et des recommandations personnalisées générées par Traitement du Langage Naturel. Construite avec une architecture modulaire utilisant Spring Boot, Angular, Python et MySQL.",
        features: [
          "Analyses du temps d'écran et suivi des schémas d'utilisation",
          "Détection des distractions alimentée par l'IA pour minimiser les interruptions",
          "Analyse de l'humeur utilisant DeepFace pour des insights émotionnels",
          "Recommandations personnalisées via NLP",
          "Architecture modulaire pour l'évolutivité"
        ]
      },
      findYourWay: {
        title: "FindYourWay",
        subtitle: "Système de Navigation Intérieure",
        description: "Un système intelligent de navigation intérieure qui aide les utilisateurs à naviguer dans des bâtiments complexes en utilisant des balises Bluetooth et des applications mobiles.",
        longDescription: "FindYourWay est une solution innovante de navigation intérieure conçue pour aider les gens à naviguer dans des bâtiments complexes comme les centres commerciaux, les hôpitaux et les universités. Le système utilise des balises Bluetooth Low Energy (BLE) stratégiquement placées dans les bâtiments pour fournir un positionnement intérieur précis. Les utilisateurs peuvent saisir leur destination et recevoir des instructions étape par étape via une application mobile. Le système comprend des tableaux de bord d'administration pour la gestion des balises et des analyses sur les schémas de navigation des utilisateurs.",
        features: [
          "Positionnement intérieur en temps réel utilisant des balises Bluetooth",
          "Navigation étape par étape pour les bâtiments complexes",
          "Tableau de bord d'administration pour la gestion des balises",
          "Analyses sur les schémas et l'utilisation de la navigation",
          "Application mobile multiplateforme"
        ]
      },
      eventHub: {
        title: "EventHub",
        subtitle: "Plateforme de Gestion d'Événements",
        description: "Une plateforme complète de gestion d'événements pour organiser, promouvoir et gérer des événements avec des fonctionnalités de billetterie et d'engagement des participants.",
        longDescription: "EventHub est une plateforme complète de gestion d'événements qui rationalise tout le cycle de vie de l'événement de la création à l'exécution. Les organisateurs d'événements peuvent créer des pages d'événements détaillées, gérer les ventes de billets, suivre la présence et interagir avec les participants via des fonctionnalités de messagerie et de Q&R intégrées. La plateforme comprend un contrôle d'entrée basé sur des codes QR, des analyses en temps réel et une intégration avec des passerelles de paiement populaires. Parfait pour les conférences, ateliers, rencontres et rassemblements sociaux.",
        features: [
          "Création de pages d'événements personnalisées avec branding",
          "Billetterie intégrée et traitement des paiements",
          "Système de contrôle d'entrée des participants basé sur QR code",
          "Analyses en temps réel et tableau de bord",
          "Outils d'engagement des participants (Q&R, sondages)"
        ]
      },
      employeeManager: {
        title: "Employee Manager",
        subtitle: "Système de Gestion d'Employés (CRUD) (Projet Personnel)",
        description: "Application CRUD full-stack simple pour gérer les employés avec recherche par nom.",
        longDescription: "Employee Manager est un projet d'apprentissage construit pour pratiquer Angular + Spring Boot. Il expose une API REST pour les employés et une interface utilisateur réactive Angular pour lister, créer, mettre à jour et supprimer des enregistrements. Il prend également en charge la recherche rapide par nom.",
        features: [
          "Créer / Lire / Mettre à jour / Supprimer des employés",
          "Recherche par nom",
          "Validation de formulaire et gestion des erreurs",
          "Conception API-first avec endpoints REST"
        ]
      },
      university: {
        title: "University",
        subtitle: "Gestion de Clubs et Campus (Symfony)",
        description: "Plateforme universitaire full-stack développée en équipe de quatre. J'ai géré le module Clubs (CRUD, rejoindre/quitter, évaluations, SMS).",
        longDescription: "University est une application web de gestion de campus développée par une équipe de quatre utilisant Symfony + MySQL. Mon périmètre était le module Clubs : créer/éditer des clubs, voir les détails, les comptes de membres, rejoindre/quitter avec notifications SMS Twilio, recherche et filtres, et évaluations de clubs. L'application inclut également des événements, des formations et une gestion de bibliothèque.",
        features: [
          "CRUD de clubs + pages de détails",
          "Rejoindre/Quitter avec compteur de membres en direct",
          "Évaluations et avis de clubs",
          "Recherche et filtres (par nom/catégorie)",
          "SMS Twilio pour rejoindre/quitter",
          "Événements et formations (fonctionnalités d'équipe)",
          "Gestion de bibliothèque/livres (fonctionnalité d'équipe)"
        ]
      },
      myCTAMA: {
        title: "MyCTAMA Insurance App",
        subtitle: "Application Mobile .NET MAUI (Stage)",
        description: "Application multiplateforme pour demander des devis d'assurance et trouver les agences CTAMA à proximité sur une carte.",
        longDescription: "Construite avec .NET MAUI pour Android/iOS. Les utilisateurs peuvent demander des devis pour Maison, Voiture, Agriculture et Santé, parcourir un fil d'actualités sur l'écran d'accueil, et localiser des agences sur une carte interactive. Certaines pages statiques ont été implémentées avec HTML/CSS intégré.",
        features: [
          "Demandes de devis : Maison / Voiture / Agriculture / Santé",
          "Localisateur d'agences avec carte et GPS",
          "Fil d'actualités sur l'écran d'accueil",
          "Validation de formulaire et soumission API",
          "Pages hybrides utilisant HTML/CSS intégré"
        ]
      }
    },
    experience: {
      title: "Expérience Professionnelle",
      subtitle: "Mon parcours à travers différents rôles et opportunités en développement logiciel et ingénierie IA.",
      currentPosition: "Poste Actuel",
      previousPosition: "Poste Précédent",
      keyAchievements: "Réalisations Clés",
      technologies: "Technologies",
      mahdGroup: {
        title: "Stagiaire en Développement Logiciel IA",
        organization: "Mahd.Group",
        period: "Juillet 2025 – Août 2025",
        description: "Développement de CorrectMeAI, une application web alimentée par l'IA pour la correction automatisée d'examens, exploitant l'OCR, les LLM et des agents intelligents.",
        achievements: [
          "Création d'une plateforme IA complète de correction d'examens à partir de zéro",
          "Intégration de l'OCR pour extraire les réponses des examens numérisés",
          "Implémentation de la notation automatisée et du feedback par question avec Qwen3 LLM",
          "Développement d'un chatbot alimenté par RAG avec agent ReAct pour les requêtes interactives",
          "Conception d'un frontend React.js fluide connecté au backend Flask"
        ]
      },
      ctama: {
        title: "Stagiaire en Développement Logiciel",
        organization: "CTAMA Assurance",
        period: "Juillet 2024 - Août 2024",
        description: "Développement d'une application mobile d'assurance complète MyCTAMA utilisant .NET MAUI, implémentant des fonctionnalités de traitement des sinistres, génération de devis et services de localisation d'agences. Collaboration avec des équipes interfonctionnelles pour fournir une solution conviviale qui a rationalisé les interactions clients.",
        achievements: [
          "Création d'une application mobile complète à partir de zéro",
          "Implémentation d'un localisateur d'agences basé sur GPS",
          "Conception d'un flux de soumission de sinistres intuitif",
          "Intégration de la génération de devis en temps réel"
        ]
      }
    },
    education: {
      title: "Éducation",
      subtitle: "Parcours académique et apprentissage continu en informatique et intelligence artificielle.",
      degree: "Diplôme",
      institution: "Établissement",
      duration: "Durée",
      academicJourney: "Parcours Académique",
      journey: "Parcours",
      focusAreas: "Domaines d'Expertise",
      esprit: {
        title: "Ingénierie Logicielle",
        organization: "ESPRIT (École Supérieure Privée d'Ingénierie et de Technologies)",
        period: "2023 - Présent",
        description: "Poursuite actuelle d'un diplôme complet en Ingénierie Logicielle avec spécialisation en IA et apprentissage automatique. Engagement actif dans des cours avancés couvrant les algorithmes, l'architecture logicielle et les technologies émergentes.",
        achievements: [
          "Spécialisée en IA et Apprentissage Automatique",
          "Membre active du club DeepFlow IA",
          "Mentor pour les étudiants juniors",
          "Excellence académique constante"
        ]
      },
      ipein: {
        title: "Programme Préparatoire en Ingénierie",
        organization: "IPEIN (Institut Préparatoire aux Études d'Ingénieurs de Nabeul)",
        period: "2021 - 2023",
        description: "Programme préparatoire intensif terminé axé sur les mathématiques, la physique et les principes fondamentaux d'ingénierie. Développement de solides compétences analytiques et de résolution de problèmes essentielles pour les études d'ingénierie avancées.",
        achievements: [
          "Fondements solides en principes d'ingénierie",
          "Maîtrise avancée des mathématiques",
          "Méthodologie de résolution de problèmes",
          "Transition réussie vers l'école d'ingénieurs"
        ]
      },
      baccalaureate: {
        title: "Baccalauréat Mathématiques",
        organization: "Lycée Pilote de Hammam Lif",
        period: "2017-2021",
        description: "Diplômée avec mention en Baccalauréat Mathématiques, démontrant des capacités analytiques exceptionnelles et une excellence académique.",
        achievements: [
          "Diplômée avec Mention",
          "Spécialisation Mathématiques",
          "Excellence académique",
          "Préparation universitaire"
        ]
      }
    },
    certifications: {
      title: "Certifications",
      subtitle: "Certifications professionnelles et réalisations d'apprentissage continu en développement logiciel et IA.",
      issuedBy: "Délivré par",
      date: "Date",
      viewCredential: "Voir la certification"
    },
    prizes: {
      title: "Réalisations & Prix",
      subtitle: "Reconnaissance pour l'excellence académique, les compétitions et les contributions professionnelles.",
      awardedBy: "Délivré par",
      year: "Année",
      featured: "Projets",
      learnMore: "En Savoir Plus",
      aboutProject: "À Propos de Cette Réalisation",
      keyFeatures: "Points Clés",
      technologiesUsed: "Technologies Utilisées",
      insatHackathon: {
        title: "1er Prix au Hackathon INSAT",
        subtitle: "Hackathon INSAT pour la découverte de médicaments",
        description: "Participation au Hackathon CTRL + Cure organisé par IEEE EMBS ISI SBC & IEEE EMBS INSAT SB sous le thème 'Hack for Drug Discovery'. Notre équipe a obtenu la 1ère place pour développer 'Your Lab Twin AI', une plateforme intégrant plusieurs solutions automatisées pour accélérer la découverte de médicaments en utilisant le raisonnement d'agent.",
        longDescription: "1ᵉʳ Prix au Hackathon INSAT ! 🏆 \n\nUne expérience incroyable en participant au Hackathon CTRL + Cure organisé par IEEE EMBS ISI SBC & IEEE EMBS INSAT SB à l'INSAT sous le thème « Hack for Drug Discovery ». Après un week-end intense, notre équipe a remporté la 1ère place parmi beaucoup d'esprits brillants. Reconnaissante pour le soutien, la collaboration et l'innovation partagés tout au long de ce parcours. Immense merci à mon coéquipier Yassine Kharrat pour son dévouement et sa créativité, et aux organisateurs, jury et participants inspirants.\n\nNotre idée, 'Your Lab Twin AI', améliore la vitesse de découverte de médicaments en combinant des solutions existantes qui automatisent chaque étape de la procédure en une seule plateforme utilisant l'IA agente.",
        category: "Hackathon/IA",
        features: [
          "Intègre plusieurs outils de découverte de médicaments en une seule plateforme",
          "Accélère les flux de travail expérimentaux",
          "Système d'IA agente pour les interactions intelligentes",
          "Soutient la recherche collaborative"
        ]
      },
      balDesProjets: {
        title: "1er Prix, Bal des Projets 2025 12ème édition (Ingénierie Logicielle)",
        subtitle: "TimeForge - Application de Productivité Alimentée par l'IA",
        description: "Application modulaire construite avec une équipe de cinq, avec analyse du temps d'écran, détection des distractions, analyse de l'humeur avec DeepFace, et conseils personnalisés basés sur le NLP.",
        longDescription: "TimeForge a remporté le 1er Prix parmi toutes les classes de notre spécialité Ingénierie Logicielle au Bal des Projets 2025. En collaboration dans une équipe de cinq, nous avons développé une application modulaire utilisant Spring Boot, Angular, Python et MySQL. La plateforme fournit des analyses avancées incluant le suivi du temps d'écran, la détection des distractions, l'analyse de l'humeur via DeepFace, et des recommandations personnalisées utilisant le NLP. Ce projet met en valeur les compétences de développement full-stack, les analyses basées sur l'IA et le travail d'équipe.",
        category: "Ingénierie Logicielle / IA",
        features: [
          "Analyse du temps d'écran",
          "Détection des distractions",
          "Analyse de l'humeur avec DeepFace",
          "Conseils personnalisés utilisant le NLP",
          "Architecture modulaire et évolutive full-stack"
        ]
      }
    },
    community: {
      title: "Implication Communautaire",
      subtitle: "Contribuer à la communauté technologique grâce au mentorat, à la collaboration et au bénévolat",
      volunteering: "Bénévolat",
      organization: "Organisation",
      learnMore: "En savoir plus",
      deepflowMentor: {
        role: "Mentor",
        impact: [
          "Encadrement de projets ML/AI pour les membres du club",
          "Orientation technique à travers des ateliers pratiques",
          "Aide à l'organisation d'événements hackathon"
        ]
      },
      deepflowMember: {
        role: "Membre",
        impact: [
          "Participation à des ateliers techniques IA/ML",
          "Contribution aux initiatives communautaires étudiantes"
        ]
      },
      ieeeMember: {
        role: "Membre",
        impact: [
          "Participation à l'événement de codage de 24 heures Xtreme",
          "Participation à des ateliers techniques"
        ]
      },
      hackflowVolunteer: {
        role: "Bénévole",
        impact: [
          "Support planification et logistique pour l'événement hackathon",
          "Coordination avec plusieurs parties prenantes",
          "Assurance d'une exécution fluide des activités d'intégration"
        ]
      },
      engineeringRoadVolunteer: {
        role: "Bénévole",
        impact: [
          "Support planification et logistique pour le plus grand événement de l'année à l'IPEIN",
          "Coordination avec plusieurs parties prenantes",
          "Assurance d'une exécution fluide des activités d'intégration"
        ]
      },
      robopeinMember: {
        role: "Membre",
        impact: [
          "Collaboration sur des ateliers techniques de robotique",
          "Contribution aux initiatives communautaires étudiantes"
        ]
      },
      integrationDayVolunteer: {
        role: "Bénévole",
        impact: [
          "Support planification et logistique pour l'événement d'ingénierie",
          "Assurance d'une exécution fluide des activités d'intégration"
        ]
      }
    },
    contact: {
      title: "Contactez",
      subtitle: "Connectons-nous et discutons d'opportunités de collaboration, de mentorat ou simplement d'une conversation technique amicale.",
      name: "Votre Nom",
      email: "Votre Email",
      message: "Votre Message",
      subject: "Sujet",
      sendButton: "Envoyer le Message",
      directContact: "Ou contactez-moi directement :",
      phone: "Téléphone",
      location: "Localisation",
      touch: "Contact",
      letsConnect: "Connectons-nous",
      available: "Disponible pour projets freelance et opportunités à temps plein"
    },
    footer: {
      bio: "Ingénieure Logiciel IA passionnée par la création d'applications intelligentes et centrées sur l'utilisateur qui font une différence dans le monde.",
      downloadResume: "Télécharger CV",
      available: "Disponible pour de nouvelles opportunités",
      builtWith: "Construit avec Next.js, Tailwind CSS et Framer Motion."
    }
  }
}

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set, get) => ({
      locale: 'en',
      setLocale: (locale) => set({ locale }),
      t: (section: string, key: string) => {
        const { locale } = get()

        try {
          // Get the section for current locale
          const sectionData = translations[locale]?.[section as keyof typeof translations[typeof locale]]
          const fallbackSectionData = translations.en?.[section as keyof typeof translations.en]

          if (!sectionData && !fallbackSectionData) {
            return key // Return key if no section data found
          }

          // Navigate through nested translation object
          const keys = key.split('.')
          let value: any = sectionData
          let fallbackValue: any = fallbackSectionData

          for (const k of keys) {
            value = value?.[k]
            fallbackValue = fallbackValue?.[k]
            if (value === undefined && fallbackValue === undefined) {
              break // Stop if both are undefined
            }
          }

          // Return translated value, fallback, or key itself
          const result = value !== undefined ? value : (fallbackValue !== undefined ? fallbackValue : key)
          return result
        } catch (error) {
          console.warn(`Translation error for ${section}.${key}:`, error)
          return key // Return key as fallback
        }
      }
    }),
    {
      name: 'language-storage',
      storage: typeof window !== 'undefined' ? {
        getItem: (name) => {
          const item = localStorage.getItem(name)
          if (item === null) {
            return null
          }
          try {
            const parsed = JSON.parse(item)
            // Always default to 'en' if no valid state exists
            return parsed && parsed.locale ? parsed : { locale: 'en' }
          } catch {
            return { locale: 'en' }
          }
        },
        setItem: (name, value) => {
          localStorage.setItem(name, JSON.stringify(value))
        },
        removeItem: (name) => {
          localStorage.removeItem(name)
        },
      } : undefined,
    }
  )
)