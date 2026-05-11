import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Info, AlertTriangle, CloudRain, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function SmartNotifications() {
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'weather', icon: <CloudRain className="w-4 h-4" />, title: 'Weather Alert', message: 'Heavy rain expected in 2 hours. Drive safely.' },
    { id: 2, type: 'fuel', icon: <Info className="w-4 h-4 text-brand-gold" />, title: 'Fuel Reminder', message: 'Fuel level at 85%. Nearest station 2km ahead.' }
  ]);

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="fixed top-24 right-6 md:right-12 z-[150] pointer-events-none space-y-4 max-w-sm w-full">
      <AnimatePresence>
        {notifications.map((n) => (
          <motion.div
            key={n.id}
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className="pointer-events-auto bg-brand-charcoal/90 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl shadow-black/50 relative group"
          >
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                {n.icon}
              </div>
              <div className="flex-1 pr-6">
                <h5 className="text-white text-[11px] font-black uppercase tracking-widest mb-1">{n.title}</h5>
                <p className="text-white/50 text-[10px] font-medium leading-relaxed uppercase tracking-wider">{n.message}</p>
              </div>
              <button 
                onClick={() => removeNotification(n.id)}
                className="absolute top-4 right-4 text-white/20 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="absolute bottom-0 left-0 h-1 bg-brand-gold/30 rounded-full w-full">
              <motion.div 
                initial={{ width: '100%' }}
                animate={{ width: 0 }}
                transition={{ duration: 10 }}
                onAnimationComplete={() => removeNotification(n.id)}
                className="h-full bg-brand-gold rounded-full"
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
