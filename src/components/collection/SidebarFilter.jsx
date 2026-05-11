import { X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SidebarFilter({ 
  isOpen, 
  onClose, 
  filters, 
  setFilters,
  onClear
}) {
  const brands = ['Mercedes', 'BMW', 'Toyota', 'Audi', 'Hyundai', 'Kia', 'Lexus', 'Porsche'];
  const seatOptions = [4, 5, 7];

  const toggleBrand = (brand) => {
    const newBrands = filters.brands.includes(brand)
      ? filters.brands.filter(b => b !== brand)
      : [...filters.brands, brand];
    setFilters({ ...filters, brands: newBrands });
  };

  const toggleSeat = (seat) => {
    const newSeats = filters.seats.includes(seat)
      ? filters.seats.filter(s => s !== seat)
      : [...filters.seats, seat];
    setFilters({ ...filters, seats: newSeats });
  };

  const SidebarContent = () => (
    <div className="flex flex-col gap-10 p-2">
      {/* Brand Filter */}
      <div className="border-b border-white/5 pb-8">
        <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">Manufacturer</h4>
        <div className="grid grid-cols-2 gap-3">
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => toggleBrand(brand)}
              className={`flex items-center justify-center px-4 py-3 rounded-xl border text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${
                filters.brands.includes(brand)
                  ? 'bg-brand-gold border-brand-gold text-brand-black shadow-lg shadow-brand-gold/20'
                  : 'bg-brand-charcoal border-white/5 text-white/50 hover:border-white/20 hover:text-white'
              }`}
            >
              {brand}
            </button>
          ))}
        </div>
      </div>

      {/* Seat Capacity */}
      <div className="border-b border-white/5 pb-8">
        <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">Seat Capacity</h4>
        <div className="flex gap-3">
          {seatOptions.map((seat) => (
            <button
              key={seat}
              onClick={() => toggleSeat(seat)}
              className={`flex-1 flex flex-col items-center justify-center py-4 rounded-xl border transition-all duration-300 ${
                filters.seats.includes(seat)
                  ? 'bg-brand-gold border-brand-gold text-brand-black shadow-lg shadow-brand-gold/20'
                  : 'bg-brand-charcoal border-white/5 text-white/50 hover:border-white/20 hover:text-white'
              }`}
            >
              <span className="text-xl font-black">{seat}</span>
              <span className="text-[9px] uppercase tracking-widest font-bold opacity-70">Seats</span>
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="pb-4">
        <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">Daily Budget (Max)</h4>
        <div className="px-1">
          <input
            type="range"
            min="0"
            max="500"
            step="10"
            value={filters.priceRange[1]}
            onChange={(e) => setFilters({ ...filters, priceRange: [0, parseInt(e.target.value)] })}
            className="w-full h-1.5 bg-brand-charcoal rounded-lg appearance-none cursor-pointer accent-brand-gold border border-white/5"
          />
          <div className="flex justify-between mt-4">
            <div className="bg-brand-charcoal border border-white/5 px-4 py-2 rounded-lg">
              <span className="text-white/30 text-[10px] uppercase font-bold block mb-0.5">Min</span>
              <span className="text-white font-bold">$0</span>
            </div>
            <div className="bg-brand-charcoal border border-brand-gold/20 px-4 py-2 rounded-lg text-right">
              <span className="text-brand-gold/50 text-[10px] uppercase font-bold block mb-0.5">Max</span>
              <span className="text-brand-gold font-bold">${filters.priceRange[1]}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-4 pt-4">
        <button
          onClick={onClear}
          className="w-full py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors"
        >
          Reset All Filters
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-80 sticky top-32 h-fit bg-brand-charcoal/30 p-8 rounded-3xl border border-white/5 backdrop-blur-sm shadow-2xl">
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-lg font-bold text-white tracking-widest uppercase">Refine</h3>
          <div className="w-8 h-px bg-brand-gold/30"></div>
        </div>
        <SidebarContent />
      </aside>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="absolute inset-0 bg-brand-black/80 backdrop-blur-md"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 left-0 bottom-0 w-[85%] max-w-sm bg-brand-black border-r border-white/10 p-8 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-2xl font-bold text-white tracking-widest uppercase">Filters</h3>
                <button onClick={onClose} className="p-2 text-white/50 hover:text-white">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <SidebarContent />
              <button
                onClick={onClose}
                className="w-full mt-10 bg-brand-gold text-brand-black py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm shadow-xl shadow-brand-gold/20"
              >
                Apply Changes
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
