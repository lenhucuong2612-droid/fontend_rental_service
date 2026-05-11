import { SlidersHorizontal, ChevronDown } from 'lucide-react';

export default function TopControlBar({ count, onToggleSidebar, sortBy, setSortBy }) {
  const sortOptions = [
    { label: 'Recommended', value: 'recommended' },
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
    { label: 'Newest Vehicles', value: 'newest' },
    { label: 'Most Popular', value: 'popular' },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10 bg-brand-charcoal/30 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
      <div className="flex items-center gap-4 order-2 md:order-1">
        <span className="text-white/40 text-sm font-medium uppercase tracking-widest">
          Available Results:
        </span>
        <span className="bg-brand-gold/10 text-brand-gold px-3 py-1 rounded-full text-sm font-bold border border-brand-gold/20">
          {count} {count === 1 ? 'Vehicle' : 'Vehicles'}
        </span>
      </div>

      <div className="flex items-center gap-4 w-full md:w-auto order-1 md:order-2">
        {/* Mobile Filter Toggle */}
        <button
          onClick={onToggleSidebar}
          className="lg:hidden flex items-center justify-center gap-2 bg-brand-charcoal border border-white/10 text-white px-5 py-3 rounded-xl hover:bg-brand-gold hover:text-brand-black hover:border-brand-gold transition-all duration-300 flex-1 md:flex-none"
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span className="text-sm font-bold uppercase tracking-wider">Filters</span>
        </button>

        {/* Sort Dropdown */}
        <div className="relative flex-1 md:flex-none">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full appearance-none bg-brand-charcoal border border-white/10 text-white px-5 py-3 pr-12 rounded-xl text-sm font-bold uppercase tracking-wider focus:outline-none focus:border-brand-gold transition-all cursor-pointer hover:border-white/20"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value} className="bg-brand-charcoal">
                Sort: {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
