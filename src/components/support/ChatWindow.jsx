import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send, Paperclip, Image, MapPin, Mic, Phone,
  ChevronDown, CheckCheck, Clock, Star, X, Smile
} from 'lucide-react';
import { apiService } from '../../services/mockApi';

function TypingIndicator() {
  return (
    <div className="flex items-end gap-3 max-w-xs">
      <img
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
        className="w-8 h-8 rounded-full object-cover ring-1 ring-white/10 shrink-0"
        alt="Agent"
      />
      <div className="bg-brand-charcoal border border-white/5 px-5 py-4 rounded-2xl rounded-bl-none flex items-center gap-1.5">
        {[0, 0.2, 0.4].map((d, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, delay: d }}
            className="w-2 h-2 rounded-full bg-white/30"
          />
        ))}
      </div>
    </div>
  );
}

function RatingModal({ onClose }) {
  const [stars, setStars] = useState(0);
  const [hovered, setHovered] = useState(0);
  const tags = ['Fast Response', 'Helpful', 'Professional', 'Clear Instructions', 'Friendly'];
  const [selected, setSelected] = useState([]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="absolute inset-0 bg-brand-black/80 backdrop-blur-xl flex items-center justify-center z-30 p-8"
    >
      <div className="bg-brand-charcoal rounded-[40px] border border-white/5 p-10 max-w-sm w-full space-y-8 relative">
        <button onClick={onClose} className="absolute top-6 right-6 text-white/20 hover:text-white transition-colors">
          <X className="w-5 h-5" />
        </button>
        <div className="text-center space-y-2">
          <p className="text-brand-gold text-[10px] font-black uppercase tracking-[0.3em]">Session Ended</p>
          <h3 className="text-2xl font-black text-white uppercase tracking-tight">How was your<br /><span className="text-brand-gold italic">experience?</span></h3>
        </div>
        <div className="flex justify-center gap-3">
          {[1,2,3,4,5].map(s => (
            <button key={s} onMouseEnter={() => setHovered(s)} onMouseLeave={() => setHovered(0)} onClick={() => setStars(s)}>
              <Star className={`w-8 h-8 transition-all ${(hovered || stars) >= s ? 'fill-brand-gold text-brand-gold scale-110' : 'text-white/20'}`} />
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {tags.map(t => (
            <button key={t} onClick={() => setSelected(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t])}
              className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest border transition-all ${
                selected.includes(t) ? 'bg-brand-gold border-brand-gold text-brand-black' : 'border-white/10 text-white/40 hover:border-white/20'
              }`}
            >{t}</button>
          ))}
        </div>
        <button className="w-full bg-brand-gold text-brand-black py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-brand-gold-light transition-all">
          Submit Feedback
        </button>
      </div>
    </motion.div>
  );
}

export default function ChatWindow({ category, activeChatId }) {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showRating, setShowRating] = useState(false);
  const [locationShared, setLocationShared] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    const fetchMessages = async () => {
      if (!activeChatId) {
        setMessages([
          {
            id: 'welcome', from: 'agent', time: 'Just now',
            text: `Hello! I'm Minh, your support specialist for ${category || 'general inquiries'}. How can I help you?`
          }
        ]);
        return;
      }
      
      setLoading(true);
      try {
        const data = await apiService.getMessagesByChatId(activeChatId);
        setMessages(data);
      } catch (error) {
        console.error("Failed to fetch messages:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMessages();
  }, [activeChatId, category]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const sendMessage = () => {
    if (!input.trim()) return;
    const msg = { id: Date.now(), from: 'user', time: 'Just now', text: input, status: 'sent' };
    setMessages(prev => [...prev, msg]);
    setInput('');
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: Date.now() + 1, from: 'agent', time: 'Just now',
        text: "Thank you for your message. I'm looking into this right now and will update you shortly."
      }]);
    }, 2200);
  };

  const shareLocation = () => {
    setLocationShared(true);
    const loc = {
      id: Date.now(), from: 'user', time: 'Just now',
      isLocation: true,
      address: 'Ba Dinh District, Hanoi, Vietnam',
      coords: '21.0285° N, 105.8542° E'
    };
    setMessages(prev => [...prev, loc]);
  };

  return (
    <div className="flex flex-col h-full relative">
      {/* Chat Header */}
      <div className="px-8 py-5 border-b border-white/5 flex items-center justify-between bg-brand-charcoal/50 backdrop-blur-sm shrink-0">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
              className="w-10 h-10 rounded-full object-cover ring-2 ring-brand-gold/20"
              alt="Minh Nguyen"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-brand-black"></span>
          </div>
          <div>
            <p className="text-white text-xs font-black uppercase tracking-widest">Minh Nguyen</p>
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] text-emerald-500 font-bold uppercase tracking-widest">Online</span>
              <span className="text-white/20">·</span>
              <span className="text-[9px] text-white/30 font-bold uppercase tracking-widest">Journey Support</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowRating(true)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/5 text-white/40 hover:text-white text-[10px] font-black uppercase tracking-widest transition-all"
          >
            <Star className="w-3 h-3" />
            End & Rate
          </button>
          <a href="tel:1900888999" className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[10px] font-black uppercase tracking-widest hover:bg-rose-500/20 transition-all">
            <Phone className="w-3 h-3" />
            Call Now
          </a>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-8 space-y-6">
        {loading ? (
          <div className="flex flex-col gap-6">
            {[1, 2].map(i => (
              <div key={i} className={`flex gap-3 ${i % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="w-8 h-8 rounded-full bg-white/5 animate-pulse shrink-0" />
                <div className="w-64 h-12 bg-white/5 rounded-2xl animate-pulse" />
              </div>
            ))}
          </div>
        ) : (
          <AnimatePresence initial={false}>
            {messages.map(msg => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-end gap-3 ${msg.from === 'user' ? 'flex-row-reverse' : ''}`}
              >
                {msg.from === 'agent' && (
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
                    className="w-8 h-8 rounded-full object-cover ring-1 ring-white/10 shrink-0"
                    alt="Agent"
                  />
                )}
                <div className={`flex flex-col ${msg.from === 'user' ? 'items-end' : 'items-start'} max-w-sm md:max-w-md`}>
                  {msg.isLocation ? (
                    <div className="bg-brand-charcoal border border-white/10 rounded-2xl rounded-br-none overflow-hidden w-72">
                      <div className="h-32 bg-brand-gold/5 flex items-center justify-center border-b border-white/5">
                        <div className="flex flex-col items-center gap-2 text-brand-gold">
                          <MapPin className="w-8 h-8" />
                          <span className="text-[10px] font-bold uppercase tracking-widest">Location Shared</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="text-white text-xs font-bold">{msg.address}</p>
                        <p className="text-white/30 text-[9px] uppercase font-bold mt-1">{msg.coords}</p>
                      </div>
                    </div>
                  ) : (
                    <div className={`px-5 py-4 rounded-2xl text-sm leading-relaxed ${
                      msg.from === 'user'
                        ? 'bg-brand-gold text-brand-black rounded-br-none font-medium'
                        : 'bg-brand-charcoal border border-white/5 text-white rounded-bl-none'
                    }`}>
                      {msg.text}
                    </div>
                  )}
                  <div className="flex items-center gap-1.5 mt-1.5 px-1">
                    <span className="text-[9px] text-white/20 font-bold">{msg.time}</span>
                    {msg.from === 'user' && msg.status === 'seen' && (
                      <div className="flex items-center gap-1 text-brand-gold text-[9px] font-bold">
                        <CheckCheck className="w-3 h-3" />
                        Seen
                      </div>
                    )}
                    {msg.from === 'user' && msg.status === 'sent' && (
                      <CheckCheck className="w-3 h-3 text-white/20" />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        )}

        <AnimatePresence>
          {isTyping && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <TypingIndicator />
              <p className="text-[9px] text-white/20 font-bold uppercase tracking-widest mt-2 ml-11">Minh is typing…</p>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={bottomRef} />
      </div>

      {/* Input Bar */}
      <div className="px-6 py-5 border-t border-white/5 bg-brand-charcoal/50 shrink-0">
        <div className="flex items-end gap-4 bg-white/5 border border-white/5 rounded-2xl px-5 py-3 focus-within:border-brand-gold/30 transition-all">
          {/* Attachment Tools */}
          <div className="flex items-center gap-2 shrink-0 pb-1">
            <button onClick={shareLocation} title="Share Location"
              className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${locationShared ? 'bg-brand-gold text-brand-black' : 'text-white/30 hover:text-white hover:bg-white/10'}`}>
              <MapPin className="w-4 h-4" />
            </button>
            <button title="Send Photo" className="w-8 h-8 rounded-lg flex items-center justify-center text-white/30 hover:text-white hover:bg-white/10 transition-all">
              <Image className="w-4 h-4" />
            </button>
            <button title="Attach File" className="w-8 h-8 rounded-lg flex items-center justify-center text-white/30 hover:text-white hover:bg-white/10 transition-all">
              <Paperclip className="w-4 h-4" />
            </button>
            <button title="Voice Message" className="w-8 h-8 rounded-lg flex items-center justify-center text-white/30 hover:text-white hover:bg-white/10 transition-all">
              <Mic className="w-4 h-4" />
            </button>
          </div>

          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
            placeholder="Type a message…"
            rows={1}
            className="flex-1 bg-transparent text-white text-sm placeholder:text-white/20 resize-none focus:outline-none leading-relaxed py-1"
          />

          <button
            onClick={sendMessage}
            disabled={!input.trim()}
            className="w-10 h-10 shrink-0 rounded-xl bg-brand-gold flex items-center justify-center text-brand-black hover:bg-brand-gold-light transition-all shadow-md shadow-brand-gold/20 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        <p className="text-center text-[9px] text-white/15 uppercase tracking-widest mt-3 font-bold">End-to-end encrypted · Elysium Journey Support</p>
      </div>

      {/* Rating Modal */}
      <AnimatePresence>
        {showRating && <RatingModal onClose={() => setShowRating(false)} />}
      </AnimatePresence>
    </div>
  );
}
