import { motion } from 'framer-motion';
import { Trophy, Ticket, Star, ArrowUpRight, Copy, CheckCircle2, ChevronRight, Gift } from 'lucide-react';
import { useState } from 'react';

const vouchers = [
  { id: 1, title: '15% Off Weekend', desc: 'Valid for any SUV in the collection', code: 'WEEKEND15', expiry: 'Exp. 30 May 2024' },
  { id: 2, title: 'Free Delivery', desc: 'Complimentary home/hotel delivery', code: 'VIPFREE', expiry: 'Exp. 15 June 2024' },
  { id: 3, title: 'Insurance Upgrade', desc: 'Free Gold Insurance upgrade', code: 'SECUREMAX', expiry: 'Exp. 10 July 2024' }
];

export default function Rewards() {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (id, code) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h2 className="text-3xl font-black text-white uppercase tracking-tight">Rewards & <span className="text-brand-gold italic">Wallet</span></h2>
          <p className="text-white/40 text-sm font-light mt-2 tracking-wide uppercase tracking-[0.2em]">Your exclusive member benefits</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Points & Progress Card */}
        <div className="bg-brand-charcoal rounded-[40px] border border-white/5 p-10 relative overflow-hidden group h-full">
          <div className="absolute top-0 right-0 p-12 text-brand-gold/5 pointer-events-none">
            <Trophy className="w-48 h-48 rotate-12" />
          </div>
          
          <div className="relative z-10 space-y-12">
            <div className="flex items-center gap-6">
               <div className="w-16 h-16 rounded-3xl bg-brand-gold/10 flex items-center justify-center text-brand-gold border border-brand-gold/20">
                 <Star className="w-8 h-8 fill-current" />
               </div>
               <div>
                 <p className="text-white/40 text-[10px] uppercase font-black tracking-[0.3em] mb-1">Total Points</p>
                 <h4 className="text-5xl font-black text-white tracking-tighter">12,500</h4>
               </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div>
                   <p className="text-white text-xs font-bold uppercase tracking-widest">Next Tier: <span className="text-brand-gold italic font-black">Titanium</span></p>
                   <p className="text-white/30 text-[9px] font-medium uppercase mt-1">1,500 points until next upgrade</p>
                </div>
                <span className="text-brand-gold text-[10px] font-black uppercase">85%</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                 <motion.div 
                   initial={{ width: 0 }}
                   animate={{ width: '85%' }}
                   transition={{ duration: 1.5, ease: "easeOut" }}
                   className="h-full bg-brand-gold"
                 ></motion.div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <button className="bg-brand-gold text-brand-black py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg shadow-brand-gold/20 hover:bg-brand-gold-light transition-all flex items-center justify-center gap-2">
                 Redeem Points
                 <ArrowUpRight className="w-4 h-4" />
               </button>
               <button className="bg-white/5 border border-white/10 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all">
                 Tier Benefits
               </button>
            </div>
          </div>
        </div>

        {/* Member Gift Card */}
        <div className="bg-gradient-to-br from-brand-charcoal to-brand-black rounded-[40px] border border-brand-gold/10 p-10 relative overflow-hidden group flex flex-col justify-between">
           <div className="absolute -top-12 -right-12 w-48 h-48 bg-brand-gold/5 blur-[80px] rounded-full"></div>
           
           <div className="relative z-10">
              <div className="flex items-center gap-3 text-brand-gold mb-6">
                <Gift className="w-6 h-6" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Special Member Gift</span>
              </div>
              <h4 className="text-3xl font-black text-white uppercase tracking-tight leading-tight">Your Anniversary <br /><span className="text-brand-gold">Surprise</span> is Ready.</h4>
              <p className="text-white/40 text-xs font-light mt-4 leading-relaxed max-w-xs">Enjoy a complimentary upgrade to any vehicle for your next reservation in June.</p>
           </div>

           <button className="relative z-10 w-fit mt-10 bg-white/5 border border-white/10 text-brand-gold px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all flex items-center gap-3">
             Claim Gift
             <ChevronRight className="w-4 h-4" />
           </button>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-bold text-white uppercase tracking-tight flex items-center gap-3">
          Active <span className="text-brand-gold italic">Vouchers</span>
          <div className="h-px w-24 bg-brand-gold/30"></div>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {vouchers.map((v, idx) => (
            <motion.div 
              key={v.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-brand-charcoal rounded-[32px] border border-white/5 p-8 relative overflow-hidden group hover:border-brand-gold/30 transition-all"
            >
              <div className="relative z-10 space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-black transition-all">
                  <Ticket className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-white font-bold uppercase tracking-tight mb-1">{v.title}</h5>
                  <p className="text-white/30 text-[10px] font-medium uppercase tracking-wider leading-relaxed">{v.desc}</p>
                </div>
                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[9px] text-white/20 uppercase font-black tracking-widest">{v.expiry}</span>
                  <button 
                    onClick={() => handleCopy(v.id, v.code)}
                    className="flex items-center gap-2 text-brand-gold hover:text-white transition-colors"
                  >
                    {copiedId === v.id ? (
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-black uppercase tracking-widest">Copied</span>
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-black uppercase tracking-widest">Copy</span>
                        <Copy className="w-4 h-4" />
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
