import { MapPin, Calendar, Clock, Package, ExternalLink, ShieldCheck } from 'lucide-react';

export function BookingSummary({ car, duration }) {
  const formatCurrency = (val) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val);
  
  return (
    <section className="space-y-8">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
          <Package className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-2xl font-black text-white uppercase tracking-tight">Your Reservation</h3>
          <p className="text-white/40 text-sm font-light">Confirm your travel details.</p>
        </div>
      </div>

      <div className="bg-brand-charcoal rounded-[40px] border border-white/5 overflow-hidden">
        <div className="p-8 md:p-10 flex flex-col md:flex-row gap-10">
          {/* Vehicle Info */}
          <div className="w-full md:w-1/3">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-brand-black border border-white/10 group">
              <img src={car.image} alt={car.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
          </div>

          {/* Details Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="space-y-1">
              <span className="text-white/20 text-[9px] uppercase tracking-widest font-bold">Vehicle</span>
              <p className="text-white font-bold uppercase tracking-tight">{car.brand} {car.name}</p>
              <p className="text-brand-gold text-[10px] uppercase tracking-wider font-medium">{car.year} Premium Edition</p>
            </div>
            
            <div className="space-y-1">
              <span className="text-white/20 text-[9px] uppercase tracking-widest font-bold">Rental Duration</span>
              <p className="text-white font-bold uppercase tracking-tight">{duration} Days</p>
              <p className="text-white/40 text-[10px] uppercase tracking-wider font-medium">Self-Drive Experience</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-brand-gold" />
                <div className="space-y-0.5">
                  <p className="text-white/20 text-[8px] uppercase tracking-widest font-bold">Pickup Location</p>
                  <p className="text-white text-xs font-bold uppercase">Hanoi Old Quarter</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-brand-gold" />
                <div className="space-y-0.5">
                  <p className="text-white/20 text-[8px] uppercase tracking-widest font-bold">Pickup Date</p>
                  <p className="text-white text-xs font-bold uppercase">15 May 2024 - 09:00 AM</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-brand-gold" />
                <div className="space-y-0.5">
                  <p className="text-white/20 text-[8px] uppercase tracking-widest font-bold">Return Location</p>
                  <p className="text-white text-xs font-bold uppercase">Noi Bai Airport</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-brand-gold" />
                <div className="space-y-0.5">
                  <p className="text-white/20 text-[8px] uppercase tracking-widest font-bold">Return Date</p>
                  <p className="text-white text-xs font-bold uppercase">18 May 2024 - 06:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function RentalAgreement() {
  return (
    <section className="py-12 border-t border-white/5 space-y-8">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
          <ExternalLink className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-2xl font-black text-white uppercase tracking-tight">Rental Agreement</h3>
          <p className="text-white/40 text-sm font-light">Transparency and clear terms.</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-start gap-4 p-8 rounded-[30px] border border-white/5 bg-white/2 group hover:border-brand-gold/20 transition-all cursor-pointer">
          <div className="w-6 h-6 rounded border-2 border-white/10 mt-1 flex items-center justify-center group-hover:border-brand-gold transition-colors">
            <div className="w-3 h-3 bg-brand-gold rounded-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div className="flex-1 space-y-2">
            <p className="text-sm text-white font-medium leading-relaxed">
              I have read and agree to the <span className="text-brand-gold underline underline-offset-4 hover:text-brand-gold-light">Electronic Rental Agreement</span>, <span className="text-brand-gold underline underline-offset-4 hover:text-brand-gold-light">Privacy Policy</span>, and <span className="text-brand-gold underline underline-offset-4 hover:text-brand-gold-light">Terms of Service</span>.
            </p>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Digitally Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-brand-gold" />
                <span className="text-[10px] text-brand-gold uppercase tracking-widest font-bold">View Contract Details</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
