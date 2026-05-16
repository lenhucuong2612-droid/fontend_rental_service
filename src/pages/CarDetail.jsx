import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ShieldCheck, Calendar, Info } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VehicleGallery from '../components/detail/VehicleGallery';
import TechnicalSpecs from '../components/detail/TechnicalSpecs';
import BookingWidget from '../components/detail/BookingWidget';
import SupportGuide from '../components/detail/SupportGuide';
import TrustSection from '../components/detail/TrustSection';
import RelatedVehicles from '../components/detail/RelatedVehicles';
import { apiService } from '../services/mockApi';

export default function CarDetail() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCar = async () => {
      setLoading(true);
      try {
        const data = await apiService.getCarById(id);
        setCar(data);
      } catch (error) {
        console.error("Failed to fetch car detail:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCar();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="bg-brand-black min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-brand-gold border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!car) {
    return (
      <div className="bg-brand-black min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Vehicle Not Found</h2>
          <Link to="/collection" className="text-brand-gold hover:underline uppercase tracking-widest font-bold">Return to Collection</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-black min-h-screen selection:bg-brand-gold selection:text-brand-black">
      <Header />

      <main className="pt-32 pb-20 container mx-auto px-6 md:px-12">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-4 mb-12">
          <Link to="/collection" className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
            <ChevronLeft className="w-4 h-4" />
            Back to Collection
          </Link>
          <span className="w-1.5 h-1.5 rounded-full bg-white/10"></span>
          <span className="text-brand-gold text-xs font-bold uppercase tracking-widest">{car.brand}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column (65%) */}
          <div className="w-full lg:w-[65%] space-y-16">
            
            {/* Header Identity */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap items-center gap-4">
                <span className="px-4 py-1.5 rounded-full bg-brand-gold text-brand-black text-[10px] font-black uppercase tracking-[0.2em]">
                  {car.available ? 'Available Today' : 'Booked'}
                </span>
                <span className="px-4 py-1.5 rounded-full border border-white/10 text-white/50 text-[10px] font-black uppercase tracking-[0.2em]">
                  {car.year} Model
                </span>
                <div className="flex items-center gap-2 ml-auto">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-brand-gold fill-brand-gold" />
                    <span className="text-white font-bold text-sm">{car.rating}</span>
                  </div>
                  <span className="text-white/20 text-xs">({car.rentals} rentals)</span>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
                {car.brand} <span className="text-brand-gold italic">{car.name}</span>
              </h1>
              
              <p className="text-white/60 text-xl font-light leading-relaxed max-w-3xl">
                {car.description}
              </p>
            </motion.div>

            {/* Gallery */}
            <VehicleGallery images={car.gallery} name={car.name} />

            {/* Specifications */}
            <TechnicalSpecs car={car} />

            {/* Support Guide */}
            <SupportGuide />

            {/* Confidence / Trust */}
            <div className="bg-brand-charcoal/30 rounded-3xl p-10 border border-white/5">
              <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-widest">Trust & Transparency</h3>
              <p className="text-white/40 text-sm mb-8 font-light tracking-wide italic">Every vehicle in our fleet is maintained to the highest manufacturer standards.</p>
              <TrustSection />
            </div>

          </div>

          {/* Right Column (35%) - Sticky Booking Sidebar */}
          <div className="w-full lg:w-[35%]">
            <BookingWidget carPrice={car.price} carId={car.id} />
            
            {/* Secondary Trust Badges */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 p-5 rounded-2xl border border-white/5 bg-brand-charcoal/20">
                <ShieldCheck className="w-6 h-6 text-brand-gold shrink-0" />
                <div>
                  <p className="text-white text-xs font-bold uppercase tracking-wider">Premium Protection</p>
                  <p className="text-[10px] text-white/40 uppercase font-medium">Included in every luxury rental</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5 rounded-2xl border border-white/5 bg-brand-charcoal/20">
                <Calendar className="w-6 h-6 text-brand-gold shrink-0" />
                <div>
                  <p className="text-white text-xs font-bold uppercase tracking-wider">Flexible Booking</p>
                  <p className="text-[10px] text-white/40 uppercase font-medium">Free modifications up to 24h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Vehicles */}
        <RelatedVehicles currentId={car.id} brand={car.brand} />
      </main>

      <Footer />

      {/* Mobile Sticky CTA Placeholder (Visible only on mobile) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[100] bg-brand-black/80 backdrop-blur-xl border-t border-white/10 p-4 px-6 flex items-center justify-between">
        <div>
          <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Starting from</p>
          <p className="text-xl font-black text-white">${car.price}<span className="text-brand-gold">/day</span></p>
        </div>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-brand-gold text-brand-black px-8 py-3.5 rounded-xl font-black uppercase tracking-[0.1em] text-xs shadow-lg shadow-brand-gold/20"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
