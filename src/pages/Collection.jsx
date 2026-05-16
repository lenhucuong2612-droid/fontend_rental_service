import { useState, useEffect, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SidebarFilter from '../components/collection/SidebarFilter';
import TopControlBar from '../components/collection/TopControlBar';
import VehicleGrid from '../components/collection/VehicleGrid';
import { apiService } from '../services/mockApi';
import { motion } from 'framer-motion';

export default function Collection() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sortBy, setSortBy] = useState('recommended');
  const [filters, setFilters] = useState({
    brands: [],
    seats: [],
    priceRange: [0, 500]
  });

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await apiService.getCars();
        setCars(data);
      } catch (error) {
        console.error("Failed to fetch cars:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCars();
    window.scrollTo(0, 0);
  }, []);

  const clearFilters = () => {
    setFilters({
      brands: [],
      seats: [],
      priceRange: [0, 500]
    });
    setSortBy('recommended');
  };

  const filteredCars = useMemo(() => {
    let result = [...cars].filter((car) => {
      const brandMatch = filters.brands.length === 0 || filters.brands.includes(car.brand);
      const seatMatch = filters.seats.length === 0 || filters.seats.includes(car.seats);
      const priceMatch = car.price >= filters.priceRange[0] && car.price <= filters.priceRange[1];
      return brandMatch && seatMatch && priceMatch;
    });

    // Sorting
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => b.id - a.id);
        break;
      case 'popular':
        // Mock popular sorting
        result.sort((a, b) => (b.id % 3) - (a.id % 3));
        break;
      default:
        // Recommended (original order or logic)
        break;
    }

    return result;
  }, [cars, filters, sortBy]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-black min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-gold/5 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">
              The <span className="text-brand-gold italic">Collection</span>
            </h1>
            <p className="text-white/50 text-xl font-light max-w-2xl tracking-wide">
              Choose the perfect car for every journey. From iconic sports cars to executive sedans and family SUVs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="pb-32 container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Filters */}
          <SidebarFilter 
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            filters={filters}
            setFilters={setFilters}
            onClear={clearFilters}
          />

          {/* Grid Area */}
          <div className="flex-1">
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-20">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="bg-brand-charcoal h-96 rounded-[40px] animate-pulse" />
                ))}
              </div>
            ) : (
              <>
                <TopControlBar 
                  count={filteredCars.length}
                  onToggleSidebar={() => setIsSidebarOpen(true)}
                  sortBy={sortBy}
                  setSortBy={setSortBy}
                />
                
                <VehicleGrid 
                  cars={filteredCars} 
                  onReset={clearFilters}
                />
              </>
            )}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
