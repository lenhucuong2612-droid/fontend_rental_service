import { motion } from 'framer-motion';
import { Heart, ArrowRight, Bell } from 'lucide-react';
import { carsData } from '../../data/cars';
import { Link } from 'react-router-dom';

export default function Favorites() {
  const favorites = carsData.slice(0, 3);

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div>
        <h2 className="text-3xl font-black text-white uppercase tracking-tight">Favorite <span className="text-brand-gold italic">Vehicles</span></h2>
        <p className="text-white/40 text-sm font-light mt-2 tracking-wide uppercase tracking-[0.2em]">Your saved showroom collection</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {favorites.map((car, idx) => (
          <motion.div
            key={car.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-brand-charcoal rounded-[40px] border border-white/5 overflow-hidden group hover:border-brand-gold/20 transition-all"
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent"></div>
              <button className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-brand-black/60 backdrop-blur-md flex items-center justify-center text-rose-500 border border-rose-500/20 hover:bg-rose-500/10 transition-all">
                <Heart className="w-4 h-4 fill-current" />
              </button>
              {car.available ? (
                <div className="absolute top-4 left-4 bg-emerald-500/80 backdrop-blur-md text-white px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest">Available</div>
              ) : (
                <div className="absolute top-4 left-4 bg-brand-black/60 backdrop-blur-md text-white/50 px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest">Unavailable</div>
              )}
            </div>

            <div className="p-8 space-y-6">
              <div>
                <p className="text-brand-gold text-[9px] font-black uppercase tracking-[0.3em] mb-1">{car.brand}</p>
                <h4 className="text-white font-black text-lg uppercase tracking-tight leading-tight">{car.name}</h4>
                <p className="text-brand-gold font-black text-xl tracking-tighter mt-2">${car.price}<span className="text-white/30 text-xs font-light">/day</span></p>
              </div>

              <div className="flex gap-3">
                <Link to={`/car/${car.id}`} className="flex-1 bg-brand-gold text-brand-black py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:bg-brand-gold-light transition-all group/btn">
                  Book Now
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
                <button className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-white/40 hover:text-white hover:border-white/10 transition-all">
                  <Bell className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
