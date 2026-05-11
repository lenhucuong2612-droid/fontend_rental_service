import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ShieldAlert, MapPin, Wrench, AlertTriangle, MessageSquare, X } from 'lucide-react';

export default function EmergencySOS() {
  const [isOpen, setIsOpen] = useState(false);

  const emergencyOptions = [
    { icon: <Phone className="w-6 h-6" />, title: 'Call Technical Hotline', desc: 'Instant support for vehicle issues.' },
    { icon: <MapPin className="w-6 h-6" />, title: 'Share Location', desc: 'Send GPS coordinates to support.' },
    { icon: <ShieldAlert className="w-6 h-6" />, title: 'Roadside Assistance', desc: 'Towing or fuel support.' },
    { icon: <AlertTriangle className="w-6 h-6" />, title: 'Report Accident', desc: 'Full insurance claim support.' },
    { icon: <MessageSquare className="w-6 h-6" />, title: 'Emergency Chat', desc: 'Speak with an agent now.' }
  ];

  return (
    <>
      {/* Floating SOS Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-24 right-6 md:bottom-12 md:right-12 z-[100] w-20 h-20 rounded-full bg-rose-600 flex flex-col items-center justify-center text-white shadow-[0_0_40px_rgba(225,29,72,0.4)] group"
      >
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute inset-0 rounded-full bg-rose-600/40"
        ></motion.div>
        <AlertTriangle className="w-8 h-8 relative z-10 mb-0.5" />
        <span className="text-[10px] font-black uppercase tracking-[0.2em] relative z-10">SOS</span>
      </motion.button>

      {/* Emergency Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-brand-black/95 backdrop-blur-xl"
            ></motion.div>
            
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="relative w-full max-w-2xl bg-brand-charcoal rounded-[40px] border border-rose-500/20 shadow-2xl p-8 md:p-12 overflow-hidden"
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 blur-[100px] rounded-full -mr-32 -mt-32"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-10">
                  <div>
                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-2">Emergency <span className="text-rose-500 italic">Support</span></h3>
                    <p className="text-white/40 text-sm font-light">Our support team is available 24/7 for urgent assistance.</p>
                  </div>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="p-3 rounded-full bg-white/5 text-white/50 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {emergencyOptions.map((opt, idx) => (
                    <button 
                      key={idx}
                      className="group flex items-center gap-6 p-6 rounded-3xl bg-white/2 border border-white/5 hover:border-rose-500/30 transition-all duration-300 text-left"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-all">
                        {opt.icon}
                      </div>
                      <div>
                        <h4 className="text-white text-sm font-bold uppercase tracking-tight">{opt.title}</h4>
                        <p className="text-[10px] text-white/40 font-medium uppercase tracking-wider">{opt.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-10 p-6 rounded-3xl bg-rose-500/5 border border-rose-500/10 flex items-center gap-6">
                  <div className="flex items-center gap-4 text-rose-500">
                    <MapPin className="w-6 h-6" />
                    <span className="text-xs font-black uppercase tracking-widest">Active GPS Tracking</span>
                  </div>
                  <p className="text-[10px] text-white/30 uppercase font-bold flex-1 text-right">
                    Current Location: Hanoi, Vietnam (21.0285° N, 105.8542° E)
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
