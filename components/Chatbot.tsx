// components/Chatbot.tsx (or FloatingChatbot.tsx)
'use client';
import { useState } from 'react';

export default function Chatbot() { // Or FloatingChatbot
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setInput('');

    try {
      const response = await fetch('https://sarra-chatbot-api.netlify.app/.netlify/functions/chat', { // <--- REPLACE WITH YOUR ACTUAL NETLIFY URL
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input, userId: 'sarrabousnina' }), // You can add context like userId
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setMessages(prev => [...prev, { text: data.response, sender: 'bot' }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { text: 'Sorry, I failed to respond.', sender: 'bot' }]);
    }

    setIsLoading(false);
  };

  // ... Rest of your UI code (same as before)
  return (
    <div className="chatbot-container p-4 border rounded-lg bg-white shadow-md">
      <h3 className="text-lg font-bold mb-4">Ask Me Anything!</h3>

      <div className="messages space-y-2 mb-4 h-64 overflow-y-auto">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg max-w-[80%] ${
              msg.sender === 'user'
                ? 'bg-blue-100 ml-auto text-right'
                : 'bg-gray-100 mr-auto text-left'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Ask about my projects, skills, or GitHub..."
          className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isLoading}
        />
        <button
          onClick={sendMessage}
          className={`px-4 py-2 rounded-lg transition ${
            isLoading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
}