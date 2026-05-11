import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bluetooth, Fuel, DoorClosed, Key, PhoneCall, ChevronRight } from 'lucide-react';

export default function SupportGuide() {
  const [activeTab, setActiveTab] = useState('bluetooth');

  const guides = [
    {
      id: 'bluetooth',
      label: 'Bluetooth',
      icon: <Bluetooth className="w-5 h-5" />,
      steps: [
        'Turn on the vehicle screen.',
        'Open Bluetooth settings on your phone.',
        'Select the vehicle name (Elysium_Drive_XXXX).',
        'Confirm the pairing code displayed on both screens.'
      ],
      note: 'Music and calls will automatically sync after pairing.'
    },
    {
      id: 'fuel',
      label: 'Fuel Cap',
      icon: <Fuel className="w-5 h-5" />,
      steps: [
        'Make sure the vehicle is unlocked.',
        'Press the fuel cap cover gently to release.',
        'Open and refuel with the recommended premium fuel.',
        'Close until you hear a click.'
      ],
      note: 'Recommended fuel: Gasoline RON 95 or higher.'
    },
    {
      id: 'trunk',
      label: 'Trunk',
      icon: <DoorClosed className="w-5 h-5" />,
      steps: [
        'Press the trunk button on the key fob for 2 seconds.',
        'Or use the release button inside the driver door panel.',
        'Kick sensor is available under the rear bumper for hands-free opening.'
      ],
      note: 'Ensure there is clear space behind the vehicle.'
    },
    {
      id: 'engine',
      label: 'Engine',
      icon: <Key className="w-5 h-5" />,
      steps: [
        'Depress the brake pedal fully.',
        'Press the Start/Stop button located near the gear shifter.',
        'Wait for the digital instrument cluster to initialize.'
      ],
      note: 'Keep the key fob inside the vehicle at all times.'
    }
  ];

  const currentGuide = guides.find(g => g.id === activeTab);

  return (
    <div className="bg-brand-charcoal rounded-3xl border border-white/5 p-10 shadow-xl overflow-hidden">
      <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-4">
        Quick Guide for This Vehicle
        <div className="h-px flex-1 bg-gradient-to-r from-brand-gold/30 to-transparent"></div>
      </h3>

      <div className="flex flex-wrap gap-4 mb-10">
        {guides.map((guide) => (
          <button
            key={guide.id}
            onClick={() => setActiveTab(guide.id)}
            className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold uppercase tracking-widest text-[10px] transition-all duration-300 border ${
              activeTab === guide.id 
                ? 'bg-brand-gold border-brand-gold text-brand-black shadow-lg shadow-brand-gold/20' 
                : 'bg-white/5 border-white/5 text-white/40 hover:border-white/10 hover:text-white'
            }`}
          >
            {guide.icon}
            {guide.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">How to {currentGuide.label}</h4>
            <div className="space-y-4">
              {currentGuide.steps.map((step, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold text-[10px] font-bold shrink-0 mt-0.5 group-hover:bg-brand-gold group-hover:text-brand-black transition-all">
                    {idx + 1}
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
            <div className="bg-white/5 border-l-4 border-brand-gold p-5 rounded-r-2xl">
              <p className="text-xs text-white/60 italic leading-relaxed">
                <strong className="text-white not-italic uppercase tracking-widest text-[9px] mr-2">Pro Tip:</strong>
                {currentGuide.note}
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="aspect-video bg-brand-black rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center group-hover:border-brand-gold/30 transition-all">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <p className="text-white/20 text-[10px] uppercase tracking-[0.3em] font-black">Instructional Video</p>
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:text-brand-gold group-hover:bg-brand-gold/10 transition-all">
                <ChevronRight className="w-8 h-8 ml-1" />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
        <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest">Need more help?</p>
        <button className="flex items-center gap-2 text-brand-gold hover:text-brand-gold-light transition-colors text-sm font-bold uppercase tracking-wider">
          <PhoneCall className="w-4 h-4" />
          Contact 24/7 Support
        </button>
      </div>
    </div>
  );
}
