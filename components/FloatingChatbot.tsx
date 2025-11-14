// components/FloatingChatbot.tsx
'use client';
import { useState, useEffect, useRef } from 'react';
import { marked } from 'marked'; // ✅ Import marked

// Configure marked to open links in new tab + add emoji before links
// Configure marked to open links in new tab + add emoji before links
const renderer = new marked.Renderer();
// Accept the token-style signature ({ href, title, tokens }) used by newer marked types
renderer.link = (link: { href: string | null; title?: string | null; text?: string; tokens?: any[] }): string => {
  const href = link?.href ?? null;

  // Reconstruct text: prefer explicit text, otherwise join token texts/raw
  let text = link?.text ?? '';
  if (!text && Array.isArray(link?.tokens)) {
    text = link.tokens.map((t: any) => {
      if (typeof t === 'string') return t;
      if ('text' in t && t.text) return t.text;
      if ('raw' in t && t.raw) return t.raw;
      return '';
    }).join('');
  }

  if (!href) return text; // Si pas de lien, retourne le texte brut
  const title = link.title ?? '';
  return `<a href="${href}" title="${title}" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline hover:text-blue-800 transition-colors duration-200">🔗 ${text}</a>`;
};
marked.setOptions({
  renderer,
});

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const modalRef = useRef<HTMLDivElement>(null);

  // ✅ Synchronise le thème sombre avec le site
  useEffect(() => {
    const updateTheme = () => {
      if (document.documentElement.classList.contains('dark')) {
        modalRef.current?.parentElement?.classList.add('dark');
      } else {
        modalRef.current?.parentElement?.classList.remove('dark');
      }
    };

    // Appliquer au chargement
    updateTheme();

    // Observer les changements (ex: toggle manuel sur le site)
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setIsLoading(true);
    setInput('');

    try {
      // Envoyer l'historique des messages
      const response = await fetch('https://sarra-chatbot-api.vercel.app/api/chat', { // ✅ Remplacez par votre URL API
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: input,
          userId: 'sarrabousnina',
          history: newMessages.map(m => ({ role: m.sender === 'user' ? 'user' : 'assistant', content: m.text }))
        }),
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

  // Close chat when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const chatContainer = modalRef.current;
      if (isOpen && chatContainer && !chatContainer.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Handle drag start
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!modalRef.current) return;
    
    const rect = modalRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    setIsDragging(true);
  };

  // Handle mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !modalRef.current) return;
      
      const x = e.clientX - dragOffset.x;
      const y = e.clientY - dragOffset.y;
      
      // Constrain to viewport
      const maxX = window.innerWidth - modalRef.current.offsetWidth;
      const maxY = window.innerHeight - modalRef.current.offsetHeight;
      
      setPosition({
        x: Math.max(0, Math.min(x, maxX)),
        y: Math.max(0, Math.min(y, maxY))
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  // Reset position to bottom-right corner
  const resetPosition = () => {
    if (modalRef.current) {
      const rect = modalRef.current.getBoundingClientRect();
      const x = window.innerWidth - rect.width - 24;
      const y = window.innerHeight - rect.height - 24;
      setPosition({ x, y });
    }
  };

  // Set initial position when chat is opened for the first time
  useEffect(() => {
    if (isOpen && modalRef.current) {
      // Wait for next frame to ensure DOM is ready
      requestAnimationFrame(() => {
        const rect = modalRef.current?.getBoundingClientRect();
        if (rect) {
          const x = window.innerWidth - rect.width - 24;
          const y = window.innerHeight - rect.height - 24;
          setPosition({ x, y });
        }
      });
    }
  }, [isOpen]);

  // Also update position on window resize
  useEffect(() => {
    const handleResize = () => {
      if (isOpen && modalRef.current) {
        const rect = modalRef.current.getBoundingClientRect();
        const x = window.innerWidth - rect.width - 24;
        const y = window.innerHeight - rect.height - 24;
        setPosition({ x, y });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className={`fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-95 ${
            isOpen 
              ? 'bg-red-500 text-white animate-pulse' 
              : 'bg-emerald-600 text-white hover:bg-emerald-700'
          }`}
          aria-label="Open AI assistant"
          style={{ pointerEvents: 'auto' }} // Allow button clicks
        >
          {isOpen ? '✕' : '🤖'}
        </button>
      )}

      {/* Draggable Chat Window */}
      {isOpen && (
        <div
          ref={modalRef}
          className="absolute w-96 h-[400px] bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col transition-all duration-300 ease-in-out transform"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            cursor: isDragging ? 'grabbing' : 'grab',
            pointerEvents: 'auto' // Allow chat interactions
          }}
        >
          {/* Header with draggable area */}
          <div 
            className="bg-emerald-600 text-white p-4 rounded-t-3xl flex justify-between items-center font-medium cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
          >
            <div className="flex items-center space-x-2">
              <span className="text-sm">Drag me</span>
            </div>
            <div className="flex items-center space-x-2">
              <button 
                onClick={resetPosition}
                className="text-xs bg-emerald-700 hover:bg-emerald-800 px-2 py-1 rounded transition-colors"
              >
                Reset
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors duration-200"
              >
                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                  <path d="m2 2 12 12m0-12-12 12" className="stroke-2 stroke-current" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-3 rounded-2xl max-w-[80%] leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-emerald-600 text-white ml-auto rounded-br-none'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 mr-auto rounded-bl-none'
                } transition-all duration-200 ease-in-out transform ${
                  messages.length - 1 === i ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-90'
                }`}
                // ✅ Affichage formaté via marked avec emoji 🔗
                dangerouslySetInnerHTML={{ __html: marked.parse(msg.text) }}
              />
            ))}
            
            {isLoading && (
              <div className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 mr-auto text-left p-3 rounded-2xl rounded-bl-none">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <form onSubmit={(e) => { e.preventDefault(); sendMessage(); }} className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about my projects..."
                className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="px-4 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 disabled:opacity-70 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center min-w-[40px]"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  '➤'
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}