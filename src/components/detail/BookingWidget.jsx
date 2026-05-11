import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, MapPin, CheckCircle2, ChevronRight, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BookingWidget({ carPrice, carId }) {
  const [pickupDate, setPickupDate] = useState('2024-05-15');
  const [returnDate, setReturnDate] = useState('2024-05-18');
  const [addOns, setAddOns] = useState({
    childSeat: false,
    insurance: false,
    doorstep: false,
    extraDriver: false
  });

  const addOnPrices = {
    childSeat: 200000,
    insurance: 500000,
    doorstep: 300000,
    extraDriver: 250000
  };

  const days = useMemo(() => {
    const start = new Date(pickupDate);
    const end = new Date(returnDate);
    const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 1;
  }, [pickupDate, returnDate]);

  const total = useMemo(() => {
    let base = carPrice * days * 25000; // Mock conversion from $ to VND for this widget
    let addOnTotal = 0;
    if (addOns.childSeat) addOnTotal += addOnPrices.childSeat;
    if (addOns.insurance) addOnTotal += addOnPrices.insurance;
    if (addOns.doorstep) addOnTotal += addOnPrices.doorstep;
    if (addOns.extraDriver) addOnTotal += addOnPrices.extraDriver;
    
    return base + addOnTotal + 100000; // Plus 100k service fee
  }, [carPrice, days, addOns]);

  const toggleAddOn = (key) => {
    setAddOns(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const formatPrice = (p) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(p);

  return (
    <div className="bg-brand-charcoal rounded-3xl border border-white/10 p-8 sticky top-32 shadow-2xl overflow-hidden group">
      {/* Glow Effect */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-gold/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-brand-gold/20 transition-all duration-700"></div>

      <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
        Book This Vehicle
        <div className="h-px flex-1 bg-gradient-to-r from-brand-gold/50 to-transparent"></div>
      </h3>

      {/* Date Selectors */}
      <div className="space-y-4 mb-8">
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <label className="text-white/40 text-[10px] uppercase tracking-widest font-bold ml-1">Pickup Information</label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold" />
              <input 
                type="date" 
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white text-sm focus:outline-none focus:border-brand-gold transition-colors appearance-none" 
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-white/40 text-[10px] uppercase tracking-widest font-bold ml-1">Return Information</label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold" />
              <input 
                type="date" 
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white text-sm focus:outline-none focus:border-brand-gold transition-colors appearance-none" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Add-ons */}
      <div className="space-y-3 mb-8">
        <h4 className="text-white/40 text-[10px] uppercase tracking-widest font-bold ml-1 mb-4">Enhance Your Journey</h4>
        
        {[
          { key: 'childSeat', label: 'Child Seat', price: 200000, icon: '👶' },
          { key: 'insurance', label: 'Gold Insurance', price: 500000, icon: '🛡️' },
          { key: 'doorstep', label: 'Doorstep Delivery', price: 300000, icon: '🏠' },
          { key: 'extraDriver', label: 'Extra Driver', price: 250000, icon: '👤' }
        ].map((item) => (
          <button
            key={item.key}
            onClick={() => toggleAddOn(item.key)}
            className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 ${
              addOns[item.key] 
                ? 'bg-brand-gold/10 border-brand-gold text-white shadow-lg shadow-brand-gold/5' 
                : 'bg-white/5 border-white/5 text-white/60 hover:border-white/20'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-lg ${addOns[item.key] ? 'bg-brand-gold text-brand-black' : 'bg-white/5'}`}>
                {addOns[item.key] ? <CheckCircle2 className="w-5 h-5" /> : item.icon}
              </div>
              <div className="text-left">
                <p className="text-xs font-bold uppercase tracking-wide">{item.label}</p>
                <p className="text-[10px] opacity-60">+{formatPrice(item.price)}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Price Summary */}
      <div className="bg-white/5 rounded-2xl p-6 mb-8 space-y-3 border border-white/5">
        <div className="flex justify-between text-xs">
          <span className="text-white/40">Base Rental ({days} days)</span>
          <span className="text-white font-medium">{formatPrice(carPrice * days * 25000)}</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-white/40">Add-ons Total</span>
          <span className="text-white font-medium">{formatPrice(Object.keys(addOns).reduce((acc, k) => acc + (addOns[k] ? addOnPrices[k] : 0), 0))}</span>
        </div>
        <div className="flex justify-between text-xs pb-3 border-b border-white/10">
          <span className="text-white/40">Service Fee</span>
          <span className="text-white font-medium">{formatPrice(100000)}</span>
        </div>
        <div className="flex justify-between items-end pt-1">
          <span className="text-sm font-bold text-white uppercase tracking-wider">Estimated Total</span>
          <div className="text-right">
            <motion.p 
              key={total}
              initial={{ scale: 1.1, color: '#D4AF37' }}
              animate={{ scale: 1, color: '#FFFFFF' }}
              className="text-2xl font-black text-brand-gold"
            >
              {formatPrice(total)}
            </motion.p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <Link 
        to={`/checkout/${carId}`}
        className="w-full bg-brand-gold text-brand-black py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm shadow-xl shadow-brand-gold/20 hover:bg-brand-gold-light hover:shadow-brand-gold/40 transition-all duration-300 transform hover:-translate-y-1 mb-4 flex items-center justify-center gap-2 group/btn"
      >
        Reserve Now
        <ChevronRight className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" />
      </Link>
      
      <p className="text-center text-[10px] text-white/30 uppercase tracking-widest font-bold flex items-center justify-center gap-2">
        <Info className="w-3 h-3" />
        No hidden fees. Free cancellation.
      </p>
    </div>
  );
}
