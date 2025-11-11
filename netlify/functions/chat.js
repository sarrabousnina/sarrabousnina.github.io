export async function handler(event, context) {
  const { message } = JSON.parse(event.body);

  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
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
          content: `You are Sarra Bousnina, an AI Software Engineer and final-year Software Engineering student at ESPRIT... [your full prompt here]`
        },
        { role: 'user', content: message }
      ],
      max_tokens: 512
    })
  });

  const data = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify({ response: data.choices[0].message.content })
  };
}