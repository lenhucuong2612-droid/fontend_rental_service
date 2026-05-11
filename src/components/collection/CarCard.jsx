import { motion } from 'framer-motion';
import { Settings, Fuel, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CarCard({ car }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="group bg-brand-charcoal rounded-2xl overflow-hidden border border-white/5 hover:border-brand-gold/30 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
    >
      <Link to={`/car/${car.id}`}>
        {/* Image Container */}
        <div className="relative h-56 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal to-transparent opacity-60 z-10"></div>
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute top-4 left-4 z-20">
            <span className="bg-brand-gold text-brand-black text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md">
              {car.brand}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-white group-hover:text-brand-gold transition-colors">
              {car.name}
            </h3>
          </div>
          <p className="text-white/50 text-sm mb-6 line-clamp-1 font-light">
            {car.description}
          </p>

          {/* Feature Icons */}
          <div className="flex items-center gap-4 mb-6 border-y border-white/5 py-4">
            <div className="flex items-center gap-1.5 text-white/40 text-[11px] uppercase tracking-wider font-medium">
              <Settings className="w-3.5 h-3.5 text-brand-gold/60" />
              {car.transmission === 'Automatic' ? 'Auto' : 'Manual'}
            </div>
            <div className="flex items-center gap-1.5 text-white/40 text-[11px] uppercase tracking-wider font-medium border-l border-white/10 pl-4">
              <Fuel className="w-3.5 h-3.5 text-brand-gold/60" />
              {car.fuelType}
            </div>
            <div className="flex items-center gap-1.5 text-white/40 text-[11px] uppercase tracking-wider font-medium border-l border-white/10 pl-4">
              <Users className="w-3.5 h-3.5 text-brand-gold/60" />
              {car.seats} Seats
            </div>
          </div>

          {/* Price & CTA */}
          <div className="flex items-center justify-between mt-auto">
            <div>
              <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Per Day</p>
              <p className="text-2xl font-bold text-white">
                ${car.price}<span className="text-brand-gold">.</span>
              </p>
            </div>
            <div className="bg-white/5 group-hover:bg-brand-gold text-white group-hover:text-brand-black p-3.5 rounded-xl border border-white/10 group-hover:border-brand-gold transition-all duration-300 group/btn">
              <ArrowRight className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
