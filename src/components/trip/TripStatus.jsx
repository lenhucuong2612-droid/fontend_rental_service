import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Car, MapPin, Navigation } from 'lucide-react';

export default function TripStatus({ status = 'in-progress' }) {
  const stages = [
    { id: 'preparing', label: 'Preparing', icon: <Clock className="w-4 h-4" /> },
    { id: 'on-the-way', label: 'On the Way', icon: <Navigation className="w-4 h-4" /> },
    { id: 'delivered', label: 'Delivered', icon: <CheckCircle2 className="w-4 h-4" /> },
    { id: 'in-progress', label: 'In Progress', icon: <Car className="w-4 h-4" /> }
  ];

  const currentStageIndex = stages.findIndex(s => s.id === status);

  return (
    <div className="bg-brand-charcoal rounded-[40px] border border-white/5 p-8 md:p-10 overflow-hidden relative group">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-emerald-500/10 transition-all duration-700"></div>

      <div className="relative z-10 space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h3 className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-black mb-2 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              Current Trip Status
            </h3>
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter">
              Enjoy Your <span className="text-brand-gold italic">Journey</span>
            </h2>
          </div>
          <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] text-white/40 uppercase font-black tracking-widest">Destination</p>
              <p className="text-white text-xs font-bold uppercase tracking-tight">Hanoi Old Quarter</p>
            </div>
          </div>
        </div>

        {/* Progress Timeline */}
        <div className="relative pt-8 pb-4 px-4">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2"></div>
          <div 
            className="absolute top-1/2 left-0 h-0.5 bg-brand-gold -translate-y-1/2 transition-all duration-1000"
            style={{ width: `${(currentStageIndex / (stages.length - 1)) * 100}%` }}
          ></div>

          <div className="flex justify-between relative z-10">
            {stages.map((stage, idx) => {
              const isActive = idx <= currentStageIndex;
              const isCurrent = idx === currentStageIndex;

              return (
                <div key={stage.id} className="flex flex-col items-center">
                  <motion.div 
                    initial={false}
                    animate={{ 
                      scale: isCurrent ? 1.2 : 1,
                      backgroundColor: isActive ? '#D4AF37' : '#1A1A1A',
                      borderColor: isActive ? '#D4AF37' : 'rgba(255,255,255,0.1)'
                    }}
                    className={`w-10 h-10 rounded-xl border-2 flex items-center justify-center transition-all duration-500 shadow-xl ${isActive ? 'text-brand-black shadow-brand-gold/20' : 'text-white/20'}`}
                  >
                    {stage.icon}
                  </motion.div>
                  <span className={`mt-4 text-[9px] uppercase font-black tracking-[0.2em] transition-colors duration-500 ${isActive ? 'text-white' : 'text-white/20'}`}>
                    {stage.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="p-6 rounded-3xl bg-white/5 border border-white/5 flex flex-col gap-3">
            <span className="text-[9px] text-white/30 uppercase font-black tracking-widest">Start Time</span>
            <p className="text-white font-bold uppercase tracking-tight text-sm">Today, 09:00 AM</p>
          </div>
          <div className="p-6 rounded-3xl bg-white/5 border border-white/5 flex flex-col gap-3">
            <span className="text-[9px] text-white/30 uppercase font-black tracking-widest">Returning In</span>
            <p className="text-brand-gold font-bold uppercase tracking-tight text-sm">2 Days 14 Hours</p>
          </div>
          <div className="p-6 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col gap-3">
            <span className="text-[9px] text-emerald-500 uppercase font-black tracking-widest">Protection Status</span>
            <p className="text-emerald-500 font-bold uppercase tracking-tight text-sm">Fully Covered</p>
          </div>
        </div>
      </div>
    </div>
  );
}
