import { motion } from 'framer-motion';
import { ShoppingCart, Car, CreditCard, MessageSquare, AlertTriangle, ChevronRight } from 'lucide-react';

const categories = [
  {
    id: 'booking',
    icon: <ShoppingCart className="w-7 h-7" />,
    label: 'New Car Booking',
    desc: 'Connect with our sales team for vehicle availability and pricing.',
    color: 'text-brand-gold bg-brand-gold/10 border-brand-gold/20',
    activeColor: 'border-brand-gold bg-brand-gold/10'
  },
  {
    id: 'trip',
    icon: <Car className="w-7 h-7" />,
    label: 'Support During Trip',
    desc: 'Connect with technical support or roadside assistance.',
    color: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
    activeColor: 'border-blue-400 bg-blue-400/10'
  },
  {
    id: 'billing',
    icon: <CreditCard className="w-7 h-7" />,
    label: 'Procedure & Payment',
    desc: 'Get help with contracts, deposits, invoices, and verification.',
    color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    activeColor: 'border-emerald-400 bg-emerald-400/10'
  },
  {
    id: 'feedback',
    icon: <MessageSquare className="w-7 h-7" />,
    label: 'Feedback / Complaint',
    desc: 'Connect directly with a support manager.',
    color: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
    activeColor: 'border-purple-400 bg-purple-400/10'
  }
];

export default function PreChatSurvey({ selected, onSelect, onContinue }) {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 md:p-16 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-3 max-w-md"
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
            className="w-14 h-14 rounded-full object-cover ring-2 ring-brand-gold/30"
            alt="Support Agent"
          />
          <div className="text-left">
            <p className="text-white font-bold text-sm uppercase tracking-tight">Minh Nguyen</p>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Online · Replies in &lt; 1 min</span>
            </div>
          </div>
        </div>
        <h2 className="text-3xl font-black text-white uppercase tracking-tight">How can we <span className="text-brand-gold italic">help you?</span></h2>
        <p className="text-white/40 text-sm font-light">Select a topic and we'll connect you with the right specialist instantly.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-2xl">
        {categories.map((cat, idx) => (
          <motion.button
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08 }}
            onClick={() => onSelect(cat.id)}
            className={`group text-left p-8 rounded-[28px] border-2 transition-all duration-300 space-y-4 ${
              selected === cat.id
                ? cat.activeColor + ' shadow-xl'
                : 'border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10'
            }`}
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all ${cat.color} ${selected === cat.id ? 'scale-110' : 'group-hover:scale-105'}`}>
              {cat.icon}
            </div>
            <div>
              <p className="text-white font-black text-sm uppercase tracking-tight mb-1">{cat.label}</p>
              <p className="text-white/40 text-[10px] font-medium leading-relaxed uppercase tracking-wider">{cat.desc}</p>
            </div>
          </motion.button>
        ))}
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: selected ? 1 : 0.3 }}
        disabled={!selected}
        onClick={onContinue}
        className="flex items-center gap-3 bg-brand-gold text-brand-black px-12 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-xl shadow-brand-gold/20 hover:bg-brand-gold-light transition-all disabled:cursor-not-allowed group"
      >
        Start Conversation
        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </motion.button>
    </div>
  );
}
