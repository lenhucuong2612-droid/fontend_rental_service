import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone, MessageCircle, ChevronDown, ChevronUp,
  AlertTriangle, CloudRain, Car, ShieldCheck, Zap, Globe
} from 'lucide-react';

const faqs = [
  'How do I extend my rental?',
  'What should I do after an accident?',
  'How do I open the fuel cap?',
  'How is the deposit refunded?',
  'Can I change the return location?',
  'What happens if I return the car late?'
];

const alerts = [
  { type: 'weather', icon: <CloudRain className="w-4 h-4" />, msg: 'Heavy rain forecast in Da Lat area. Drive slowly and maintain safe distance.', color: 'text-blue-400 border-blue-400/20 bg-blue-400/5' },
  { type: 'traffic', icon: <AlertTriangle className="w-4 h-4" />, msg: 'High traffic on Highway 1A near Hue. Allow extra travel time.', color: 'text-amber-400 border-amber-400/20 bg-amber-400/5' }
];

const channels = [
  { id: 'zalo', label: 'Continue on Zalo', color: 'text-blue-400 border-blue-400/20 bg-blue-400/5 hover:bg-blue-400/10' },
  { id: 'whatsapp', label: 'Continue on WhatsApp', color: 'text-emerald-400 border-emerald-400/20 bg-emerald-400/5 hover:bg-emerald-400/10' },
  { id: 'callback', label: 'Request a Callback', color: 'text-brand-gold border-brand-gold/20 bg-brand-gold/5 hover:bg-brand-gold/10' }
];

function Accordion({ question }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/5">
      <button onClick={() => setOpen(!open)} className="w-full text-left py-4 flex items-center justify-between gap-3 group">
        <span className="text-white/60 text-[10px] font-bold uppercase tracking-wider group-hover:text-white transition-colors">{question}</span>
        {open ? <ChevronUp className="w-3 h-3 text-brand-gold shrink-0" /> : <ChevronDown className="w-3 h-3 text-white/20 shrink-0" />}
      </button>
      {open && (
        <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-white/30 text-[10px] pb-4 leading-relaxed uppercase tracking-wider">
          Please contact our support team directly via this chat or call 1900 888 999 for immediate assistance with this issue.
        </motion.p>
      )}
    </div>
  );
}

export default function InfoSidebar({ category }) {
  return (
    <aside className="hidden xl:flex flex-col gap-6 w-80 shrink-0 overflow-y-auto p-6">
      {/* Emergency Hotline */}
      <div className="bg-rose-500/5 border border-rose-500/20 rounded-[28px] p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-500">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[9px] text-rose-400/60 uppercase font-black tracking-[0.3em] mb-0.5">24/7 Emergency Hotline</p>
            <p className="text-white font-black text-lg tracking-tight">1900 888 999</p>
          </div>
        </div>
        <a href="tel:1900888999" className="block w-full text-center bg-rose-500 text-white py-3.5 rounded-xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-rose-600 transition-all shadow-lg shadow-rose-500/20">
          Call Now
        </a>
      </div>

      {/* Current Trip Snapshot */}
      <div className="bg-brand-charcoal border border-white/5 rounded-[28px] p-6 space-y-4">
        <p className="text-[9px] text-white/30 uppercase font-black tracking-[0.3em]">Active Trip</p>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
            <Car className="w-5 h-5" />
          </div>
          <div>
            <p className="text-white text-xs font-bold uppercase">S-Class Maybach</p>
            <p className="text-white/30 text-[9px] uppercase font-bold tracking-widest">LP: 29A – 88899</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: 'Return', val: 'May 17' },
            { label: 'Case ID', val: '#SC-2094' }
          ].map(item => (
            <div key={item.label} className="bg-white/5 rounded-xl p-3">
              <p className="text-[8px] text-white/20 uppercase font-black tracking-widest mb-1">{item.label}</p>
              <p className="text-white text-[10px] font-black uppercase">{item.val}</p>
            </div>
          ))}
        </div>
      </div>

      {/* System Alerts */}
      <div className="space-y-3">
        <p className="text-[9px] text-white/30 uppercase font-black tracking-[0.3em] px-1">System Alerts</p>
        {alerts.map((alert, i) => (
          <div key={i} className={`flex gap-3 p-4 rounded-2xl border ${alert.color}`}>
            <div className={`shrink-0 mt-0.5 ${alert.color.split(' ')[0]}`}>{alert.icon}</div>
            <p className="text-[9px] font-bold uppercase tracking-wider leading-relaxed text-white/60">{alert.msg}</p>
          </div>
        ))}
      </div>

      {/* Quick FAQs */}
      <div className="bg-brand-charcoal border border-white/5 rounded-[28px] p-6">
        <p className="text-[9px] text-white/30 uppercase font-black tracking-[0.3em] mb-4">Quick Help</p>
        <div>
          {faqs.map(q => <Accordion key={q} question={q} />)}
        </div>
      </div>

      {/* Omnichannel Bridge */}
      <div className="bg-brand-charcoal border border-white/5 rounded-[28px] p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-brand-gold" />
          <p className="text-[9px] text-white/30 uppercase font-black tracking-[0.3em]">Continue Anywhere</p>
        </div>
        <p className="text-[9px] text-white/20 uppercase tracking-wider leading-relaxed">Your full chat history syncs instantly to your preferred channel.</p>
        <div className="space-y-2">
          {channels.map(ch => (
            <button key={ch.id} className={`w-full py-3 px-4 rounded-xl border text-[10px] font-black uppercase tracking-widest transition-all ${ch.color}`}>
              {ch.label}
            </button>
          ))}
        </div>
      </div>

      {/* Security Badge */}
      <div className="flex items-center justify-center gap-3 py-2 opacity-40">
        <ShieldCheck className="w-4 h-4 text-emerald-500" />
        <span className="text-[9px] text-white/30 uppercase font-black tracking-widest">End-to-end encrypted</span>
      </div>
    </aside>
  );
}
