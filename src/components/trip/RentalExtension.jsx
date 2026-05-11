import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Calendar, CheckCircle2, AlertCircle, ChevronRight } from 'lucide-react';

export default function RentalExtension({ carPrice }) {
  const [extensionDays, setExtensionDays] = useState(1);
  const [status, setStatus] = useState('idle'); // idle, pending, approved

  const handleRequest = () => {
    setStatus('pending');
    setTimeout(() => setStatus('approved'), 3000);
  };

  const extraCost = carPrice * extensionDays * 25000;
  const formatCurrency = (val) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val);

  return (
    <div className="bg-brand-charcoal rounded-[40px] border border-white/5 p-8 md:p-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-gold to-transparent"></div>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">Need <span className="text-brand-gold italic">More Time?</span></h3>
          <p className="text-white/40 text-sm font-light">Extend your rental instantly without paperwork.</p>
        </div>

        <AnimatePresence mode="wait">
          {status === 'idle' ? (
            <motion.div 
              key="idle"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex items-center gap-6"
            >
              <div className="flex items-center gap-4 bg-white/5 rounded-2xl p-2 border border-white/10">
                <button 
                  onClick={() => setExtensionDays(Math.max(1, extensionDays - 1))}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-black transition-all"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <div className="px-4 text-center">
                  <p className="text-white font-black text-xl leading-none">{extensionDays}</p>
                  <p className="text-[9px] text-white/40 uppercase font-bold tracking-widest mt-1">Days</p>
                </div>
                <button 
                  onClick={() => setExtensionDays(extensionDays + 1)}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white hover:bg-brand-gold hover:text-brand-black transition-all"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <div className="text-right min-w-[120px]">
                <p className="text-brand-gold font-black text-xl leading-none">{formatCurrency(extraCost)}</p>
                <p className="text-[9px] text-white/40 uppercase font-bold tracking-widest mt-1">Extra Cost</p>
              </div>

              <button 
                onClick={handleRequest}
                className="bg-brand-gold text-brand-black px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg shadow-brand-gold/20 hover:bg-brand-gold-light transition-all flex items-center gap-2 group"
              >
                Request Extension
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ) : status === 'pending' ? (
            <motion.div 
              key="pending"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex items-center gap-6 bg-white/5 px-8 py-4 rounded-2xl border border-white/10"
            >
              <div className="w-8 h-8 border-2 border-brand-gold border-t-transparent rounded-full animate-spin"></div>
              <div>
                <p className="text-white text-xs font-bold uppercase tracking-widest">Awaiting Approval</p>
                <p className="text-[10px] text-white/40 uppercase font-medium">Checking vehicle availability...</p>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="approved"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-6 bg-emerald-500/10 px-8 py-4 rounded-2xl border border-emerald-500/20"
            >
              <CheckCircle2 className="w-8 h-8 text-emerald-500" />
              <div>
                <p className="text-emerald-500 text-xs font-bold uppercase tracking-widest">Extension Approved</p>
                <p className="text-[10px] text-emerald-500/60 uppercase font-medium">Return date updated in your dashboard.</p>
              </div>
              <button 
                onClick={() => setStatus('idle')}
                className="text-white/20 hover:text-white transition-colors ml-4"
              >
                <Minus className="w-4 h-4 rotate-45" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex gap-4">
          <Calendar className="w-5 h-5 text-brand-gold shrink-0" />
          <div>
             <p className="text-white/40 text-[9px] uppercase font-bold tracking-widest mb-1">New Return Date</p>
             <p className="text-white text-xs font-bold uppercase">Friday, 17 May 2024</p>
          </div>
        </div>
        <div className="flex gap-4">
          <AlertCircle className="w-5 h-5 text-brand-gold shrink-0" />
          <div>
             <p className="text-white/40 text-[9px] uppercase font-bold tracking-widest mb-1">Availability</p>
             <p className="text-emerald-500 text-xs font-bold uppercase">Vehicle Available</p>
          </div>
        </div>
        <div className="flex gap-4">
          <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0" />
          <div>
             <p className="text-white/40 text-[9px] uppercase font-bold tracking-widest mb-1">Confirmation</p>
             <p className="text-white text-xs font-bold uppercase">Instant Approval</p>
          </div>
        </div>
      </div>
    </div>
  );
}
