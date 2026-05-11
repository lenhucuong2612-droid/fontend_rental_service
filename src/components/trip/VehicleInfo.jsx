import { Fuel, Users, Settings, Info, PhoneCall, FileText } from 'lucide-react';

export default function VehicleInfo({ car }) {
  return (
    <div className="bg-brand-charcoal rounded-[40px] border border-white/5 p-8 md:p-10 relative overflow-hidden group">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/3">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-brand-black border border-white/10">
            <img src={car.image} alt={car.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          </div>
        </div>

        <div className="flex-1 space-y-8">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-brand-gold text-[10px] uppercase tracking-[0.2em] font-black">{car.brand}</span>
              <h3 className="text-3xl font-black text-white uppercase tracking-tight">{car.name}</h3>
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mt-1">Plate: 30A - 888.66</p>
            </div>
            <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/5">
               <span className="text-white/50 text-[10px] font-bold uppercase tracking-widest">Model 2024</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-gold">
                <Fuel className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[9px] text-white/30 uppercase font-bold tracking-widest">Fuel Level</p>
                <p className="text-white font-bold text-sm tracking-tight">85% Full</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-gold">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[9px] text-white/30 uppercase font-bold tracking-widest">Seats</p>
                <p className="text-white font-bold text-sm tracking-tight">{car.seats} Adults</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-gold">
                <Settings className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[9px] text-white/30 uppercase font-bold tracking-widest">Gear</p>
                <p className="text-white font-bold text-sm tracking-tight">Automatic</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-gold">
                <Info className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[9px] text-white/30 uppercase font-bold tracking-widest">Mileage</p>
                <p className="text-white font-bold text-sm tracking-tight">12,500 km</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5">
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all text-[10px] uppercase font-bold tracking-widest">
              <FileText className="w-4 h-4 text-brand-gold" />
              Vehicle Guide
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all text-[10px] uppercase font-bold tracking-widest">
              <PhoneCall className="w-4 h-4 text-brand-gold" />
              Contact Support
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all text-[10px] uppercase font-bold tracking-widest ml-auto">
              Report Issue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
