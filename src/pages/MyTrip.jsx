import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Map, Phone, Clock, ShieldAlert, ChevronRight, HelpCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TripStatus from '../components/trip/TripStatus';
import VehicleInfo from '../components/trip/VehicleInfo';
import EmergencySOS from '../components/trip/EmergencySOS';
import ConciergeMap from '../components/trip/ConciergeMap';
import RentalExtension from '../components/trip/RentalExtension';
import SmartNotifications from '../components/trip/SmartNotifications';
import { apiService } from '../services/mockApi';

export default function MyTrip() {
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const data = await apiService.getActiveTrip();
        setTrip(data);
      } catch (error) {
        console.error("Failed to fetch trip:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrip();
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return (
      <div className="bg-brand-black min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-brand-gold border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!trip) return null;

  const { car } = trip;

  return (
    <div className="bg-brand-black min-h-screen selection:bg-brand-gold selection:text-brand-black">
      <Header />
      <SmartNotifications />

      <main className="pt-32 pb-32 container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content (Left) */}
          <div className="w-full lg:w-[70%] space-y-12">
            
            {/* Header Identity */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
              <div>
                <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
                  My <span className="text-brand-gold italic">Trip</span>
                </h1>
                <p className="text-white/40 text-sm font-light tracking-[0.2em] uppercase mt-2">Active Rental Dashboard</p>
              </div>
              <div className="flex gap-4">
                 <div className="bg-brand-charcoal px-6 py-4 rounded-3xl border border-white/5 flex flex-col items-center">
                    <span className="text-[9px] text-white/30 uppercase font-bold tracking-widest mb-1">Reservation ID</span>
                    <span className="text-white font-bold tracking-widest">#ED-2024-889</span>
                 </div>
              </div>
            </div>

            {/* 1. Trip Status Timeline */}
            <TripStatus status="in-progress" />

            {/* 2. Vehicle Summary */}
            <VehicleInfo car={car} />

            {/* 3. Interactive Concierge Map */}
            <ConciergeMap />

            {/* 4. Rental Extension */}
            <RentalExtension carPrice={car.price} />

          </div>

          {/* Sidebar (Right) */}
          <div className="w-full lg:w-[30%] space-y-8">
            <div className="sticky top-32 space-y-8">
              
              {/* Quick Support Card */}
              <div className="bg-brand-charcoal rounded-[40px] border border-white/10 p-8 shadow-2xl relative overflow-hidden group">
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-gold/5 blur-[80px] rounded-full pointer-events-none"></div>
                
                <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                  Support Center
                  <div className="h-px flex-1 bg-gradient-to-r from-brand-gold/30 to-transparent"></div>
                </h3>

                <div className="space-y-4">
                  {[
                    { icon: <ShieldAlert className="w-5 h-5" />, label: 'Insurance Policy', detail: 'Comprehensive Premium' },
                    { icon: <Clock className="w-5 h-5" />, label: 'Return Policy', detail: '30 mins grace period' },
                    { icon: <HelpCircle className="w-5 h-5" />, label: 'FAQs', detail: '24/7 common questions' },
                    { icon: <Phone className="w-5 h-5" />, label: 'VIP Hotline', detail: '+84 123 456 789' }
                  ].map((item, idx) => (
                    <button key={idx} className="w-full flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-gold/20 transition-all group/btn">
                      <div className="flex items-center gap-4">
                        <div className="text-brand-gold group-hover/btn:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <div className="text-left">
                          <p className="text-[10px] text-white/40 uppercase font-black tracking-widest">{item.label}</p>
                          <p className="text-white text-xs font-bold tracking-tight">{item.detail}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-white/20 group-hover/btn:text-brand-gold group-hover/btn:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>

                <button className="w-full mt-8 bg-brand-gold text-brand-black py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] shadow-xl shadow-brand-gold/20 hover:bg-brand-gold-light transition-all">
                  Open Support Chat
                </button>
              </div>

              {/* Trip Summary Card */}
              <div className="bg-brand-charcoal/50 rounded-[40px] border border-white/5 p-8">
                <h4 className="text-[10px] text-white/30 uppercase font-black tracking-[0.3em] mb-6">Trip Summary</h4>
                <div className="space-y-6">
                  <div className="flex justify-between">
                    <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Base Rate</span>
                    <span className="text-white text-xs font-bold uppercase">$1,350.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Add-ons</span>
                    <span className="text-white text-xs font-bold uppercase">$120.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Taxes & Fees</span>
                    <span className="text-white text-xs font-bold uppercase">$45.00</span>
                  </div>
                  <div className="pt-6 border-t border-white/5 flex justify-between items-end">
                    <span className="text-brand-gold text-[10px] uppercase font-black tracking-widest">Paid Total</span>
                    <span className="text-white text-xl font-black tracking-tighter">$1,515.00</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>

      <EmergencySOS />
      <Footer />

      {/* Mobile Sticky Bottom Action Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[100] bg-brand-black/80 backdrop-blur-2xl border-t border-white/10 p-4 px-8 flex items-center justify-between">
        {[
          { icon: <HelpCircle className="w-6 h-6" />, label: 'Support' },
          { icon: <Map className="w-6 h-6" />, label: 'Map' },
          { icon: <Clock className="w-6 h-6" />, label: 'Extend' }
        ].map((item, idx) => (
          <button key={idx} className="flex flex-col items-center gap-1 text-white/40 hover:text-brand-gold transition-colors">
            {item.icon}
            <span className="text-[8px] uppercase font-black tracking-widest">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
