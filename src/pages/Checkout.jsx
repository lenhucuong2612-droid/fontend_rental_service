import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ShieldCheck, Lock, Info, CheckCircle2 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BookingSummary, RentalAgreement } from '../components/checkout/BookingSummary';
import IdentityVerification from '../components/checkout/IdentityVerification';
import PaymentMethods from '../components/checkout/PaymentMethods';
import CheckoutSidebar from '../components/checkout/CheckoutSidebar';
import { carsData } from '../data/cars';

export default function Checkout() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const duration = 3; // Mock duration for this flow

  useEffect(() => {
    const foundCar = carsData.find(c => c.id === parseInt(id));
    setCar(foundCar);
    window.scrollTo(0, 0);
  }, [id]);

  if (!car) return null;

  return (
    <div className="bg-brand-black min-h-screen selection:bg-brand-gold selection:text-brand-black">
      <Header />

      <main className="pt-32 pb-32 container mx-auto px-6 md:px-12">
        {/* Progress Navigation */}
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-4">
            <Link to={`/car/${car.id}`} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-3xl font-black text-white uppercase tracking-tighter">Checkout <span className="text-brand-gold italic">& Trust</span></h1>
              <p className="text-white/30 text-[10px] uppercase font-bold tracking-[0.3em]">Step 1 of 3: Verification & Payment</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-12">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold text-[10px] font-black">01</div>
              <span className="text-[10px] text-white uppercase font-black tracking-widest">Verification</span>
            </div>
            <div className="w-12 h-px bg-white/10"></div>
            <div className="flex items-center gap-3 opacity-30">
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white text-[10px] font-black">02</div>
              <span className="text-[10px] text-white uppercase font-black tracking-widest">Confirmation</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column - Main Flow */}
          <div className="w-full lg:w-[65%] space-y-24">
            
            {/* 1. Reservation Summary */}
            <BookingSummary car={car} duration={duration} />

            {/* 2. Identity Verification */}
            <IdentityVerification />

            {/* 3. Payment Methods */}
            <PaymentMethods depositAmount={5000000} />

            {/* 4. Rental Agreement */}
            <RentalAgreement />

            {/* Bottom Trust Note */}
            <div className="flex flex-col md:flex-row gap-12 items-center justify-between p-10 rounded-[40px] bg-brand-charcoal border border-white/5">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-3xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-white text-lg font-bold uppercase tracking-tight">Luxury Guarantee</h4>
                  <p className="text-white/40 text-xs font-light max-w-xs">Verified vehicles, transparent pricing, and 24/7 concierge support.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-emerald-500" />
                  <span className="text-[10px] text-white/60 font-bold uppercase tracking-widest">SSL Encrypted</span>
                </div>
                <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                  <span className="text-[10px] text-white/60 font-bold uppercase tracking-widest">PCI Compliant</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - Sticky Sidebar */}
          <div className="w-full lg:w-[35%]">
            <CheckoutSidebar car={car} duration={duration} />
            
            {/* Additional micro-copy */}
            <div className="mt-8 p-6 space-y-4">
              <div className="flex gap-4">
                <Info className="w-5 h-5 text-brand-gold shrink-0" />
                <p className="text-[11px] text-white/40 leading-relaxed uppercase tracking-wider font-medium">
                  Approval usually takes less than 15 minutes during business hours (08:00 - 22:00).
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Mobile Sticky Bottom CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[100] bg-brand-black/90 backdrop-blur-2xl border-t border-white/10 p-5 px-8 flex items-center justify-between">
        <div>
          <p className="text-[10px] text-white/30 uppercase font-black tracking-widest mb-1">Total to Pay</p>
          <p className="text-xl font-black text-white">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(car.price * duration * 25000 + 900000)}</p>
        </div>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-brand-gold text-brand-black px-10 py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-xl shadow-brand-gold/20 active:scale-95 transition-transform"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
