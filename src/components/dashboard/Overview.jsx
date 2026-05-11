import { motion } from 'framer-motion';
import { Star, ShieldCheck, MapPin, Calendar, ArrowRight, Zap, Trophy, Car } from 'lucide-react';

export default function Overview() {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      {/* Welcome & Stats Header */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-brand-charcoal rounded-[40px] border border-white/5 p-10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 blur-[100px] rounded-full -mr-32 -mt-32"></div>
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-2">Welcome Back, <span className="text-brand-gold italic">Alex</span></h2>
              <p className="text-white/40 text-sm font-light tracking-wide">You have <span className="text-brand-gold font-bold">12,500 points</span> available. 1,500 points until next tier.</p>
            </div>
            <div className="flex gap-4">
              <button className="bg-brand-gold text-brand-black px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg shadow-brand-gold/20 hover:bg-brand-gold-light transition-all flex items-center gap-2 group/btn">
                Book a Car
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
             {[
               { icon: <Car className="w-5 h-5" />, label: 'Total Trips', val: '24' },
               { icon: <Calendar className="w-5 h-5" />, label: 'Rental Days', val: '86' },
               { icon: <Zap className="w-5 h-5" />, label: 'Tier', val: 'Platinum' },
               { icon: <Trophy className="w-5 h-5" />, label: 'Rewards', val: '8 Active' }
             ].map((stat, i) => (
               <div key={i}>
                 <div className="flex items-center gap-2 text-brand-gold mb-1">
                   {stat.icon}
                   <span className="text-white font-black text-xl tracking-tighter">{stat.val}</span>
                 </div>
                 <p className="text-[9px] text-white/30 uppercase font-black tracking-widest">{stat.label}</p>
               </div>
             ))}
          </div>
        </div>

        {/* Tier Card */}
        <div className="bg-gradient-to-br from-brand-gold to-brand-gold-light rounded-[40px] p-10 flex flex-col justify-between relative overflow-hidden shadow-2xl shadow-brand-gold/20">
           <div className="absolute top-0 right-0 p-8 text-brand-black/10">
             <Star className="w-32 h-32 fill-current rotate-12" />
           </div>
           <div className="relative z-10">
             <p className="text-brand-black/40 text-[10px] uppercase font-black tracking-[0.3em] mb-2">Member Status</p>
             <h3 className="text-4xl font-black text-brand-black uppercase tracking-tighter">Platinum</h3>
           </div>
           <div className="relative z-10">
             <div className="flex justify-between items-end mb-2">
                <span className="text-brand-black font-bold text-xs uppercase tracking-widest">Yearly Goal</span>
                <span className="text-brand-black/60 text-[10px] font-bold">85% Complete</span>
             </div>
             <div className="h-2 w-full bg-brand-black/10 rounded-full overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: '85%' }}
                 transition={{ duration: 1.5, ease: "easeOut" }}
                 className="h-full bg-brand-black"
               ></motion.div>
             </div>
           </div>
        </div>
      </div>

      {/* Upcoming Trip Section */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-white uppercase tracking-tight flex items-center gap-3">
          Upcoming <span className="text-brand-gold italic">Reservation</span>
          <div className="h-px w-24 bg-brand-gold/30"></div>
        </h3>

        <div className="bg-brand-charcoal rounded-[40px] border border-white/5 p-8 md:p-12 group hover:border-brand-gold/20 transition-all">
          <div className="flex flex-col xl:flex-row gap-12 items-center">
            <div className="w-full xl:w-1/2 relative">
               <img 
                 src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1200" 
                 className="w-full aspect-video object-cover rounded-3xl shadow-2xl transition-transform duration-700 group-hover:scale-105" 
                 alt="Next Rental" 
               />
               <div className="absolute top-4 left-4 bg-emerald-500 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl">Confirmed</div>
            </div>
            <div className="w-full xl:w-1/2 space-y-8">
              <div>
                <span className="text-brand-gold text-[10px] uppercase font-black tracking-[0.3em]">May 15 – May 18</span>
                <h4 className="text-3xl font-black text-white uppercase tracking-tight mt-2">Mercedes-Benz S-Class Maybach</h4>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-brand-gold shrink-0" />
                  <div>
                    <p className="text-white/40 text-[9px] uppercase font-bold tracking-widest mb-1">Pickup Location</p>
                    <p className="text-white text-xs font-bold uppercase">Noi Bai Int'l Airport (Terminal 2)</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Calendar className="w-5 h-5 text-brand-gold shrink-0" />
                  <div>
                    <p className="text-white/40 text-[9px] uppercase font-bold tracking-widest mb-1">Duration</p>
                    <p className="text-white text-xs font-bold uppercase">3 Full Days (Weekend)</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5 flex flex-wrap gap-4">
                 <button className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all flex items-center gap-3">
                   View Details
                 </button>
                 <button className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all flex items-center gap-3">
                   Modify Trip
                 </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
