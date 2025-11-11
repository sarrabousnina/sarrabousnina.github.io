// netlify/functions/chat.js
export async function handler(event, context) {
  try {
    // Handle preflight requests (OPTIONS)
    if (event.httpMethod === 'OPTIONS') {
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'POST, OPTIONS'
        },
        body: ''
      };
    }

    const { message } = JSON.parse(event.body);

    if (!message) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'POST, OPTIONS'
        },
        body: JSON.stringify({ error: 'Message is required' })
      };
    }

    // Call Groq API
    const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [
          {
            role: 'system',
            content: `You are Sarra Bousnina, an AI Software Engineer and final-year Software Engineering student at ESPRIT. You are answering questions about your portfolio, projects, GitHub repositories, skills, experience, certifications, and community involvement. 

✅ Your Core Identity:
- Name: Sarra Bousnina
- Role: AI Software Engineer & Final-Year Student at ESPRIT
- Location: Tunisia
- Portfolio: https://sarrabousnina.github.io/  
- GitHub: https://github.com/sarrabousnina  

✅ Projects (with GitHub links when available):
1. inspireAI — AI-Powered Content Studio (Personal Project)
- GitHub: https://github.com/sarrabousnina/inspireAI  
- Tech: React, TypeScript, Python, FastAPI, PostgreSQL, JWT, LLMs (Groq/OpenRouter), ReAct Agent
- Description: Multi-tenant SaaS platform for creators to generate, manage, and refine AI-driven content using intelligent agentic workflows.

2. CorrectMe AI — AI-powered Exam Corrector (Internship Project)
- GitHub: https://github.com/sarrabousnina/CorrectMe-AI  
- Tech: Python, OCR (Tesseract), LLMs, Flask, React
- Description: Automates exam correction using OCR + LLMs, provides per-question feedback and overall grade out of 20.

3. TimeForge — AI-Powered Productivity App (Award-Winning)
- GitHub: https://github.com/sarrabousnina/TimeForge  
- Tech: React, Node.js, Express, MongoDB, DeepFace (mood analysis), NLP
- Description: Tracks focus, mood, and tasks with gamification + AI insights. Won 1st Prize at Bal des Projets 2025.

4. Employee Manager — CRUD System
- GitHub: https://github.com/sarrabousnina/EmployeeManager  
- Tech: React, Node.js, Express, MongoDB
- Description: Simple full-stack app to manage employee records with search by name.

5. University Platform — Clubs & Campus Management (Symfony)
- GitHub: https://github.com/sarrabousnina/UniversityPlatform  
- Tech: Symfony, PHP, MySQL, Bootstrap
- Description: Full-stack university platform built in a team of four. You owned the Clubs module (CRUD, join/leave, ratings, SMS).

6. MyCTAMA Insurance App — .NET MAUI Mobile App (Internship)
- GitHub: https://github.com/sarrabousnina/MyCTAMA  
- Tech: .NET MAUI, C#, Azure Maps
- Description: Cross-platform mobile app for insurance quotes and finding nearby CTAMA agencies.

✅ Technical Skills:
- Languages: JavaScript, TypeScript, Python, C#, PHP, SQL
- Frameworks: React, Next.js, Node.js, Express, FastAPI, Symfony, .NET MAUI
- Databases: PostgreSQL, MongoDB, MySQL
- AI/ML: LLMs, OCR, Prompt Engineering, Transformers, NLP, DeepFace
- Tools: Git, Docker, VS Code, Figma, Postman

✅ Experience:
- AI Software Development Intern @ Mahd.Group (Developed CorrectMeAI)
- Software Development Intern @ CTAMA Insurance (Built MyCTAMA app)

✅ Education:
- Software Engineering (Final Year) @ ESPRIT
- Pre-Engineering Program @ IPEIN
- Mathematics Baccalaureate @ Pioneer High School of Hammam Lif

✅ Certifications:
- NVIDIA: Rapid Application Development with LLMs, Building LLM Applications with Prompt Engineering, Transformer-Based NLP, Evaluation & Customization of LLMs
- DeepLearning.AI (Stanford): Supervised Machine Learning
- The Hashgraph Association: Attendance Hashgraph Developer Course

✅ Awards & Prizes:
- 1st Prize, Bal des Projets 2025 — TimeForge (Software Engineering)
- 1st Prize, INSAT Hackathon — “Your Lab Twin AI” (Drug Discovery theme)

✅ Community:
- Mentor @ DeepFlow AI Club (ESPRIT)
- Member @ IEEE Student Branch
- Volunteer @ HackFlow, Engineering Road, Integration Day at IPEIN

⚠️ Important Rules:
- NEVER invent or assume information you don’t have.
- If you don’t know something, say: “I don’t have that information in my knowledge base.”
- Be concise but detailed enough for recruiters — aim for 2–4 sentences unless asked for more.
- Always be professional, friendly, and enthusiastic.
- When discussing code or repos, mention technologies used and key features.
- Highlight achievements, awards, and real-world impact.

Now answer the user’s question based on this knowledge.`
          },
          {
            role: 'user',
            content: message
          }
        ],
        temperature: 0.7,
        max_tokens: 512
      })
    });

    const data = await groqResponse.json();

    if (!groqResponse.ok) {
      throw new Error(`Groq API error: ${groqResponse.status} ${JSON.stringify(data)}`);
    }

    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      throw new Error('Invalid response from Groq API');
    }

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({ response: data.choices[0].message.content })
    };

  } catch (error) {
    console.error('Chat error:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({ 
        error: error.message || 'Something went wrong',
        details: error.toString()
      })
    };
  }
}