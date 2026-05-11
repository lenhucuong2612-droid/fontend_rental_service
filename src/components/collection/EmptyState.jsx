import { SearchX, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EmptyState({ onReset }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-20 px-6 text-center bg-brand-charcoal/30 rounded-3xl border border-dashed border-white/10"
    >
      <div className="w-20 h-20 rounded-full bg-brand-charcoal border border-white/5 flex items-center justify-center mb-6 shadow-2xl">
        <SearchX className="w-10 h-10 text-brand-gold/40" />
      </div>
      <h3 className="text-3xl font-bold text-white mb-3">No vehicles found</h3>
      <p className="text-white/50 max-w-md mx-auto mb-10 font-light text-lg">
        Try adjusting your filters or search terms to discover more of our premium fleet.
      </p>
      <button
        onClick={onReset}
        className="flex items-center gap-2 bg-brand-gold text-brand-black px-8 py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-brand-gold-light transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-brand-gold/10"
      >
        <RotateCcw className="w-5 h-5" />
        Reset Filters
      </button>
    </motion.div>
  );
}
