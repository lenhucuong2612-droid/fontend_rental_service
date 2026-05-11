import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Home, ChevronRight, PhoneCall, MessageCircle, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-brand-black overflow-hidden flex flex-col items-center justify-center text-center px-6">
      
      {/* Immersive Background Visual */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Car at Night" 
            className="w-full h-full object-cover opacity-50 transition-opacity duration-1000"
          />
        </motion.div>
        
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/60 via-transparent to-brand-black/60"></div>
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>

        {/* Simulated Headlight Glow (Bottom Left) */}
        <motion.div 
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-brand-gold/10 blur-[120px] rounded-full pointer-events-none"
        ></motion.div>
      </div>

      {/* Floating Dust Particles (CSS Animation) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 
            }}
            animate={{ 
              y: [0, -100, 0],
              x: [0, Math.random() * 50, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{ 
              duration: 5 + Math.random() * 10, 
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            className="w-1 h-1 bg-white/20 rounded-full blur-[1px]"
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-4xl space-y-12">
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
          >
            <Compass className="w-4 h-4 text-brand-gold" />
            <span className="text-[10px] text-white/60 font-black uppercase tracking-[0.3em]">Status Code 404</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-7xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none"
          >
            Wrong <br />
            <span className="text-brand-gold italic">Turn.</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-2 max-w-xl mx-auto pt-6"
          >
            <p className="text-xl md:text-2xl text-white font-bold uppercase tracking-tight">Looks like you took a wrong turn.</p>
            <p className="text-white/40 text-sm font-light uppercase tracking-widest leading-relaxed">
              The road you’re looking for doesn’t exist anymore — but your next drive is still waiting.
            </p>
          </motion.div>
        </div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
        >
          <Link to="/" className="w-full md:w-auto bg-brand-gold text-brand-black px-12 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-2xl shadow-brand-gold/20 hover:bg-brand-gold-light transition-all flex items-center justify-center gap-3 group">
            <Home className="w-4 h-4" />
            Back to Homepage
          </Link>
          <Link to="/collection" className="w-full md:w-auto bg-white/5 backdrop-blur-xl border border-white/10 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-white/10 transition-all flex items-center justify-center gap-3 group">
            Browse Available Cars
            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Smart Search */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="max-w-md mx-auto pt-12 space-y-6"
        >
          <div className="relative group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-brand-gold transition-colors" />
            <input 
              type="text" 
              placeholder="Search for vehicles or destinations..."
              className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-14 pr-6 text-white text-xs focus:outline-none focus:border-brand-gold/30 transition-all placeholder:text-white/10 backdrop-blur-sm"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {['Luxury Collection', 'SUVs', 'Economy', 'Support'].map((link) => (
              <button key={link} className="text-[10px] text-white/20 uppercase font-black tracking-widest hover:text-brand-gold transition-colors">
                {link}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Help Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="pt-20 flex flex-col md:flex-row gap-12 justify-center items-center opacity-60 hover:opacity-100 transition-opacity"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-gold">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-[9px] text-white/30 uppercase font-black tracking-widest mb-0.5">Need help?</p>
              <p className="text-white text-xs font-bold uppercase">+84 123 456 789</p>
            </div>
          </div>
          <div className="hidden md:block w-px h-8 bg-white/10"></div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-gold">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-[9px] text-white/30 uppercase font-black tracking-widest mb-0.5">Chat Support</p>
              <p className="text-white text-xs font-bold uppercase">Open 24/7</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
