import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, Zap, Info } from 'lucide-react';

export default function CheckoutSidebar({ car, duration }) {
  const formatCurrency = (val) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val);
  
  const rentalCost = car.price * duration * 25000;
  const insurance = 500000;
  const delivery = 300000;
  const deposit = 5000000;
  const total = rentalCost + insurance + delivery + 100000; // Plus service fee

  return (
    <div className="bg-brand-charcoal rounded-[40px] border border-white/10 p-8 md:p-10 sticky top-32 shadow-2xl overflow-hidden group">
      {/* Premium Gradient Glow */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-brand-gold/10 blur-[120px] rounded-full pointer-events-none group-hover:bg-brand-gold/20 transition-all duration-700"></div>

      <div className="relative z-10 space-y-10">
        <div>
          <h4 className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-black mb-4 flex items-center gap-2">
            Final Summary
            <div className="h-px flex-1 bg-gradient-to-r from-brand-gold/30 to-transparent"></div>
          </h4>
          
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 mb-8">
            <div className="w-16 h-12 rounded-lg overflow-hidden bg-brand-black shrink-0">
              <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-white text-xs font-bold uppercase tracking-tight">{car.name}</p>
              <p className="text-white/40 text-[10px] uppercase font-medium">{duration} Days Rental</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between text-[11px] uppercase tracking-widest font-bold">
              <span className="text-white/30">Rental Cost</span>
              <span className="text-white">{formatCurrency(rentalCost)}</span>
            </div>
            <div className="flex justify-between text-[11px] uppercase tracking-widest font-bold">
              <span className="text-white/30">Gold Insurance</span>
              <span className="text-white">{formatCurrency(insurance)}</span>
            </div>
            <div className="flex justify-between text-[11px] uppercase tracking-widest font-bold">
              <span className="text-white/30">Delivery Fee</span>
              <span className="text-white">{formatCurrency(delivery)}</span>
            </div>
            <div className="flex justify-between text-[11px] uppercase tracking-widest font-bold">
              <span className="text-white/30">Service Fee</span>
              <span className="text-white">{formatCurrency(100000)}</span>
            </div>
            <div className="pt-6 border-t border-white/5 space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-brand-gold text-[10px] uppercase tracking-[0.2em] font-black">Security Deposit</span>
                <span className="text-brand-gold font-black">{formatCurrency(deposit)}</span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-white text-sm uppercase tracking-[0.2em] font-black">Final Total</span>
                <div className="text-right">
                  <p className="text-3xl font-black text-white leading-none tracking-tighter">{formatCurrency(total)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <button className="w-full bg-brand-gold text-brand-black py-6 rounded-3xl font-black uppercase tracking-[0.2em] text-xs shadow-2xl shadow-brand-gold/20 hover:bg-brand-gold-light hover:shadow-brand-gold/40 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 group/btn">
            Confirm Reservation
            <ChevronRight className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" />
          </button>
          
          <div className="flex flex-col gap-3 pt-2">
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/2 border border-white/5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <p className="text-[9px] text-white/40 uppercase font-bold tracking-widest">Instant Approval in minutes</p>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/2 border border-white/5">
              <Zap className="w-4 h-4 text-brand-gold" />
              <p className="text-[9px] text-white/40 uppercase font-bold tracking-widest">Verified Premium Vehicle</p>
            </div>
          </div>
        </div>

        <p className="text-center text-[10px] text-white/20 uppercase tracking-[0.3em] font-black flex items-center justify-center gap-2">
          <Info className="w-3 h-3" />
          Encrypted & Secure
        </p>
      </div>
    </div>
  );
}
