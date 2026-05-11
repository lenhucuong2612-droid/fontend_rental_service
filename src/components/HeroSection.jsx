import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("/images/hero_car_bg.png")',
          backgroundAttachment: 'fixed' 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-brand-black/50 to-brand-black z-10"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20 flex flex-col items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-block px-4 py-1.5 rounded-full border border-brand-gold/50 bg-brand-gold/10 backdrop-blur-sm mb-6"
          >
            <span className="text-brand-gold text-sm font-semibold tracking-widest uppercase">The Ultimate Driving Experience</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
            Drive Freedom in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold-light to-brand-gold">Luxury</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-white/80 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Premium self-drive car rentals with instant booking, doorstep delivery, and full protection.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/collection" className="bg-brand-gold text-brand-black px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-brand-gold-light hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 transform hover:-translate-y-1 text-center">
              Book Your Car
            </Link>
            <Link to="/collection" className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-white/10 hover:border-white transition-all duration-300 transform hover:-translate-y-1 text-center">
              Explore Fleet
            </Link>
          </div>
        </motion.div>

        {/* Booking Form Card (Glassmorphism) */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-5xl glass-card rounded-2xl p-6 md:p-8 relative"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50 rounded-t-2xl"></div>
          
          <form className="flex flex-col md:flex-row gap-6 items-end">
            <div className="w-full md:w-1/3 flex flex-col gap-2">
              <label className="text-white/70 text-sm font-medium uppercase tracking-wider ml-1">Pickup Location</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-brand-gold w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Enter city or airport" 
                  className="w-full glass-input rounded-xl py-4 pl-12 pr-4 text-lg"
                />
              </div>
            </div>

            <div className="w-full md:w-1/3 flex flex-col gap-2">
              <label className="text-white/70 text-sm font-medium uppercase tracking-wider ml-1">Pickup Date & Time</label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gold w-4 h-4" />
                  <input type="text" placeholder="Date" className="w-full glass-input rounded-xl py-4 pl-10 pr-2" />
                </div>
                <div className="relative w-28">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gold w-4 h-4" />
                  <input type="text" placeholder="10:00" className="w-full glass-input rounded-xl py-4 pl-10 pr-2" />
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 flex flex-col gap-2">
              <label className="text-white/70 text-sm font-medium uppercase tracking-wider ml-1">Return Date & Time</label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gold w-4 h-4" />
                  <input type="text" placeholder="Date" className="w-full glass-input rounded-xl py-4 pl-10 pr-2" />
                </div>
                <div className="relative w-28">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gold w-4 h-4" />
                  <input type="text" placeholder="10:00" className="w-full glass-input rounded-xl py-4 pl-10 pr-2" />
                </div>
              </div>
            </div>

            <button type="button" className="w-full md:w-auto bg-brand-gold text-brand-black p-4 rounded-xl hover:bg-brand-gold-light transition-colors flex justify-center items-center group">
              <Search className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
