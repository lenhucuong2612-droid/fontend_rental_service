import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MessageCircle, Menu, X } from 'lucide-react';
import ConversationList from '../components/support/ConversationList';
import PreChatSurvey from '../components/support/PreChatSurvey';
import ChatWindow from '../components/support/ChatWindow';
import InfoSidebar from '../components/support/InfoSidebar';

export default function Support() {
  const [activeChatId, setActiveChatId] = useState(null);
  const [category, setCategory] = useState(null);
  const [chatStarted, setChatStarted] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleNewChat = () => {
    setActiveChatId(null);
    setCategory(null);
    setChatStarted(false);
  };

  const handleSelectConversation = (id) => {
    setActiveChatId(id);
    setChatStarted(true);
    setShowHistory(false);
  };

  return (
    <div className="bg-brand-black h-screen flex flex-col overflow-hidden selection:bg-brand-gold selection:text-brand-black">
      {/* Top Nav */}
      <header className="h-16 shrink-0 bg-brand-black/90 backdrop-blur-2xl border-b border-white/5 flex items-center justify-between px-6 md:px-10 z-50">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-brand-gold flex items-center justify-center text-brand-black shadow-lg shadow-brand-gold/20">
            <Star className="w-4 h-4 fill-current" />
          </div>
          <span className="text-base font-black text-white uppercase tracking-tighter hidden md:block">
            Elysium <span className="text-brand-gold italic">Drive</span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[10px] text-emerald-500 font-black uppercase tracking-widest hidden md:block">Support Online</span>
          </div>
          {/* Mobile: Toggle History */}
          <button
            className="lg:hidden w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-white border border-white/5"
            onClick={() => setShowHistory(!showHistory)}
          >
            {showHistory ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* LEFT: Conversation History (Desktop) */}
        <div className="hidden lg:block w-72 xl:w-80 shrink-0 overflow-hidden">
          <ConversationList
            activeChatId={activeChatId}
            onSelectConversation={handleSelectConversation}
            onNewChat={handleNewChat}
          />
        </div>

        {/* LEFT: Conversation History (Mobile Drawer) */}
        <AnimatePresence>
          {showHistory && (
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="lg:hidden absolute inset-y-0 left-0 w-72 z-40 shadow-2xl"
            >
              <ConversationList
                activeChatId={activeChatId}
                onSelectConversation={handleSelectConversation}
                onNewChat={handleNewChat}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* CENTER: Chat Area */}
        <div className="flex-1 flex flex-col overflow-hidden border-x border-white/5">
          <AnimatePresence mode="wait">
            {chatStarted ? (
              <motion.div
                key="chat"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                className="flex-1 overflow-hidden flex flex-col"
              >
                <ChatWindow category={category} />
              </motion.div>
            ) : (
              <motion.div
                key="survey"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex-1 overflow-y-auto"
              >
                <PreChatSurvey
                  selected={category}
                  onSelect={setCategory}
                  onContinue={() => setChatStarted(true)}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* RIGHT: Info Sidebar */}
        <InfoSidebar category={category} />
      </div>

      {/* Mobile Floating SOS */}
      <a
        href="tel:1900888999"
        className="lg:hidden fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-rose-600 flex flex-col items-center justify-center text-white shadow-2xl shadow-rose-500/30"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-rose-500/40"
        />
        <MessageCircle className="w-6 h-6 relative z-10" />
        <span className="text-[7px] font-black uppercase tracking-widest relative z-10 mt-0.5">SOS</span>
      </a>
    </div>
  );
}
