import React, { useEffect, useState, useRef } from 'react';
import { Send, Bot, User, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}
export function ChatAssistant() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([{
    id: '1',
    text: "Hi! I'm your AI Guardian. I'm here to support you on your journey. How are you feeling today?",
    sender: 'ai',
    timestamp: new Date()
  }]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const aiResponses = ["I'm proud of you for reaching out. That takes courage. What's on your mind?", "Remember, every moment you choose yourself is a victory. You're stronger than you think.", "It's okay to have difficult moments. Let's work through this together. What triggered these feelings?", "You've made it this far - that's amazing progress! How can I support you right now?", 'These urges are temporary, but your commitment to change is lasting. What helps you feel grounded?', "I'm here for you, no judgment. Let's focus on what you can control in this moment.", "You're building new habits, and that's hard work. Be patient with yourself. What's one small thing you can do right now that aligns with your goals?"];
  const handleSend = () => {
    if (!inputValue.trim()) return;
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };
  return <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-4 shadow-lg">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('/')} className="p-1 hover:bg-white/20 rounded-lg transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <Bot className="w-8 h-8" />
          <div>
            <h2 className="font-semibold text-lg">AI Guardian</h2>
            <p className="text-sm text-blue-100">Always here to support you</p>
          </div>
        </div>
      </div>
      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4 pb-24">
        {messages.map(message => <div key={message.id} className={`flex gap-3 ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.sender === 'ai' ? 'bg-blue-500' : 'bg-purple-500'}`}>
              {message.sender === 'ai' ? <Bot className="w-5 h-5 text-white" /> : <User className="w-5 h-5 text-white" />}
            </div>
            <div className={`max-w-[75%] rounded-2xl px-4 py-3 ${message.sender === 'ai' ? 'bg-gray-100 text-gray-800' : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'}`}>
              <p className="text-sm leading-relaxed">{message.text}</p>
              <p className={`text-xs mt-1 ${message.sender === 'ai' ? 'text-gray-500' : 'text-white/70'}`}>
                {message.timestamp.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit'
            })}
              </p>
            </div>
          </div>)}
        <div ref={messagesEndRef} />
      </div>
      {/* Input */}
      <div className="fixed bottom-16 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3">
        <div className="max-w-md mx-auto flex gap-2">
          <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleSend()} placeholder="Type your message..." className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button onClick={handleSend} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-full hover:shadow-lg transition-all active:scale-95">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>;
}