import { ShieldCheck, Star, Clock, Heart, Verified, BadgeCheck } from 'lucide-react';

export default function TrustSection() {
  const points = [
    { icon: <ShieldCheck className="w-6 h-6" />, title: 'Fully Insured', desc: 'Comprehensive coverage included.' },
    { icon: <Clock className="w-6 h-6" />, title: '24/7 Support', desc: 'Roadside assistance anytime.' },
    { icon: <BadgeCheck className="w-6 h-6" />, title: 'Verified Quality', desc: '150-point safety inspection.' },
    { icon: <Verified className="w-6 h-6" />, title: 'No Hidden Fees', desc: 'Transparent pricing policy.' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12">
      {points.map((p, idx) => (
        <div key={idx} className="flex flex-col items-center text-center group">
          <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-gold mb-4 group-hover:bg-brand-gold group-hover:text-brand-black transition-all duration-500">
            {p.icon}
          </div>
          <h5 className="text-white text-[11px] font-black uppercase tracking-widest mb-1">{p.title}</h5>
          <p className="text-white/40 text-[10px] uppercase font-bold tracking-wider">{p.desc}</p>
        </div>
      ))}
    </div>
  );
}
