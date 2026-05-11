import { CheckCircle2, Zap, Cog, Fuel, Users, Shield, Radio, Wind, Camera, Map, Luggage } from 'lucide-react';

export default function TechnicalSpecs({ car }) {
  const specs = [
    { label: 'Model Year', value: car.year || 2024, icon: <CheckCircle2 className="w-4 h-4" /> },
    { label: 'Odometer', value: car.odometer || '10,000 km', icon: <Zap className="w-4 h-4" /> },
    { label: 'Transmission', value: car.transmission, icon: <Cog className="w-4 h-4" /> },
    { label: 'Fuel Type', value: car.fuelType, icon: <Fuel className="w-4 h-4" /> },
    { label: 'Seats', value: car.seats, icon: <Users className="w-4 h-4" /> },
    { label: 'Engine', value: car.engine || 'V6 Engine', icon: <Shield className="w-4 h-4" /> },
    { label: 'Interior Color', value: car.colorInterior || 'Black', icon: <Radio className="w-4 h-4" /> },
    { label: 'Sunroof', value: 'Panoramic', icon: <Wind className="w-4 h-4" /> },
    { label: 'Sound System', value: 'Burmester 4D', icon: <Radio className="w-4 h-4" /> },
    { label: 'Safety Features', value: 'Level 2 ADAS', icon: <Camera className="w-4 h-4" /> },
    { label: 'Navigation', value: 'GPS Live', icon: <Map className="w-4 h-4" /> },
    { label: 'Luggage', value: car.luggage || '2 Bags', icon: <Luggage className="w-4 h-4" /> }
  ];

  return (
    <div className="bg-brand-charcoal rounded-3xl border border-white/5 p-10 shadow-xl overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 blur-[80px] rounded-full -mr-32 -mt-32"></div>
      
      <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-4">
        Vehicle Specifications
        <div className="h-px flex-1 bg-gradient-to-r from-brand-gold/30 to-transparent"></div>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        {specs.map((spec, idx) => (
          <div key={idx} className="flex items-center justify-between py-3 border-b border-white/5 hover:border-brand-gold/20 transition-all group">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-black transition-all">
                {spec.icon}
              </div>
              <span className="text-white/40 text-sm font-medium uppercase tracking-widest">{spec.label}</span>
            </div>
            <span className="text-white font-bold text-sm tracking-wide">{spec.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
