import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Fuel, Utensils, Coffee, Wrench, Zap, Maximize2, Navigation } from 'lucide-react';

export default function ConciergeMap() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedPoint, setSelectedPoint] = useState(null);

  const points = [
    { id: 1, type: 'food', name: 'Luxury Pho 10', lat: '20%', lng: '30%', desc: 'Best traditional breakfast nearby.' },
    { id: 2, type: 'fuel', name: 'Petrolimex 18', lat: '45%', lng: '60%', desc: 'Premium RON 95 available.' },
    { id: 3, type: 'coffee', name: 'Skyline Coffee', lat: '70%', lng: '25%', desc: 'Panoramic view of the city.' },
    { id: 4, type: 'support', name: 'Service Center', lat: '15%', lng: '80%', desc: '24/7 technical assistance.' },
    { id: 5, type: 'ev', name: 'Tesla Supercharger', lat: '80%', lng: '70%', desc: 'Fast charging (Level 3).' }
  ];

  const filters = [
    { id: 'all', label: 'All', icon: <MapPin className="w-3 h-3" /> },
    { id: 'fuel', label: 'Fuel', icon: <Fuel className="w-3 h-3" /> },
    { id: 'food', label: 'Food', icon: <Utensils className="w-3 h-3" /> },
    { id: 'coffee', label: 'Coffee', icon: <Coffee className="w-3 h-3" /> },
    { id: 'support', label: 'Support', icon: <Wrench className="w-3 h-3" /> }
  ];

  const filteredPoints = activeFilter === 'all' ? points : points.filter(p => p.type === activeFilter);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-white uppercase tracking-tight flex items-center gap-3">
          Concierge <span className="text-brand-gold italic">Map</span>
          <div className="h-px w-24 bg-brand-gold/30"></div>
        </h3>
        <button className="text-white/40 hover:text-white transition-colors">
          <Maximize2 className="w-5 h-5" />
        </button>
      </div>

      <div className="relative aspect-video md:aspect-[21/9] bg-brand-charcoal rounded-[40px] border border-white/5 overflow-hidden group">
        {/* Mock Map Background */}
        <div className="absolute inset-0 bg-[#0a0a0a] opacity-50">
           {/* Grid lines */}
           <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        {/* Filters Overlay */}
        <div className="absolute top-6 left-6 z-20 flex flex-wrap gap-2">
          {filters.map(f => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border ${
                activeFilter === f.id ? 'bg-brand-gold border-brand-gold text-brand-black' : 'bg-brand-black/60 backdrop-blur-md border-white/10 text-white/40 hover:text-white'
              }`}
            >
              {f.icon}
              {f.label}
            </button>
          ))}
        </div>

        {/* Current Location Marker */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-brand-gold/20 animate-ping absolute -inset-0"></div>
            <div className="w-8 h-8 rounded-full bg-brand-gold border-4 border-brand-black shadow-2xl flex items-center justify-center relative z-20">
              <div className="w-2 h-2 rounded-full bg-brand-black"></div>
            </div>
          </div>
        </div>

        {/* POI Markers */}
        {filteredPoints.map(p => (
          <button
            key={p.id}
            onClick={() => setSelectedPoint(p)}
            className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2 hover:scale-125 transition-transform"
            style={{ top: p.lat, left: p.lng }}
          >
            <div className={`w-8 h-8 rounded-xl flex items-center justify-center shadow-lg border border-white/20 ${
              p.type === 'food' ? 'bg-orange-500' : 
              p.type === 'fuel' ? 'bg-blue-500' : 
              p.type === 'coffee' ? 'bg-amber-600' : 
              p.type === 'support' ? 'bg-emerald-500' : 'bg-brand-gold'
            }`}>
              {p.type === 'food' && <Utensils className="w-4 h-4 text-white" />}
              {p.type === 'fuel' && <Fuel className="w-4 h-4 text-white" />}
              {p.type === 'coffee' && <Coffee className="w-4 h-4 text-white" />}
              {p.type === 'support' && <Wrench className="w-4 h-4 text-white" />}
              {p.type === 'ev' && <Zap className="w-4 h-4 text-white" />}
            </div>
          </button>
        ))}

        {/* Info Card Overlay */}
        <AnimatePresence>
          {selectedPoint && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-6 left-6 right-6 md:right-auto md:w-80 z-30 bg-brand-black/80 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-2xl"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-[9px] text-brand-gold font-bold uppercase tracking-widest">{selectedPoint.type}</span>
                  <h4 className="text-white font-bold uppercase tracking-tight">{selectedPoint.name}</h4>
                </div>
                <button onClick={() => setSelectedPoint(null)} className="text-white/20 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-white/40 text-xs mb-6 leading-relaxed">{selectedPoint.desc}</p>
              <button className="w-full bg-brand-gold text-brand-black py-3 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2">
                <Navigation className="w-4 h-4" />
                Navigate Now
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white/5 p-6 rounded-3xl border border-white/5 flex items-center justify-between group cursor-pointer hover:bg-white/10 transition-all">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
               <Zap className="w-6 h-6" />
             </div>
             <div>
               <p className="text-white text-xs font-bold uppercase tracking-tight">Recommended for You</p>
               <p className="text-white/40 text-[10px] font-medium uppercase tracking-widest">Scenic Route to West Lake</p>
             </div>
          </div>
          <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-brand-gold transition-colors" />
        </div>
        <div className="bg-white/5 p-6 rounded-3xl border border-white/5 flex items-center justify-between group cursor-pointer hover:bg-white/10 transition-all">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
               <Coffee className="w-6 h-6" />
             </div>
             <div>
               <p className="text-white text-xs font-bold uppercase tracking-tight">Concierge Pick</p>
               <p className="text-white/40 text-[10px] font-medium uppercase tracking-widest">Skyline Rooftop Bar (1.2 km)</p>
             </div>
          </div>
          <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-brand-gold transition-colors" />
        </div>
      </div>
    </div>
  );
}

function X({ className, onClick }) {
  return (
    <svg onClick={onClick} className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  );
}
function ChevronRight({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
  );
}
