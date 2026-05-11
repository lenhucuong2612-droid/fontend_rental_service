import { useState } from 'react';
import { User, Mail, Phone, Lock, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function SignupForm({ onContinue }) {
  const [passStrength, setPassStrength] = useState(0);

  const checkPassword = (val) => {
    let strength = 0;
    if (val.length > 8) strength += 25;
    if (/[A-Z]/.test(val)) strength += 25;
    if (/[0-9]/.test(val)) strength += 25;
    if (/[^A-Za-z0-9]/.test(val)) strength += 25;
    setPassStrength(strength);
  };

  return (
    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onContinue(); }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] text-white/40 uppercase font-black tracking-widest ml-1">Full Name</label>
          <div className="relative group">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-brand-gold transition-colors" />
            <input 
              type="text" 
              placeholder="Full Name"
              className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white text-sm focus:outline-none focus:border-brand-gold/50 transition-all placeholder:text-white/10" 
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-[10px] text-white/40 uppercase font-black tracking-widest ml-1">Phone Number</label>
          <div className="relative group">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-brand-gold transition-colors" />
            <input 
              type="tel" 
              placeholder="+84 000 000 000"
              className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white text-sm focus:outline-none focus:border-brand-gold/50 transition-all placeholder:text-white/10" 
              required
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] text-white/40 uppercase font-black tracking-widest ml-1">Email Address</label>
        <div className="relative group">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-brand-gold transition-colors" />
          <input 
            type="email" 
            placeholder="name@company.com"
            className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white text-sm focus:outline-none focus:border-brand-gold/50 transition-all placeholder:text-white/10" 
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] text-white/40 uppercase font-black tracking-widest ml-1">Password</label>
        <div className="relative group">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-brand-gold transition-colors" />
          <input 
            type="password" 
            placeholder="••••••••"
            onChange={(e) => checkPassword(e.target.value)}
            className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white text-sm focus:outline-none focus:border-brand-gold/50 transition-all placeholder:text-white/10" 
            required
          />
        </div>
        {/* Strength Indicator */}
        <div className="flex gap-1 h-1 w-full bg-white/5 rounded-full overflow-hidden mt-3">
          <div 
            className={`h-full transition-all duration-500 ${
              passStrength <= 25 ? 'bg-rose-500' : 
              passStrength <= 50 ? 'bg-amber-500' : 
              passStrength <= 75 ? 'bg-blue-500' : 'bg-emerald-500'
            }`} 
            style={{ width: `${passStrength}%` }}
          ></div>
        </div>
        <p className="text-[9px] text-white/20 uppercase font-bold tracking-widest mt-1">Use 8+ characters with mixed case and symbols</p>
      </div>

      <div className="flex items-start gap-3 ml-1">
        <div className="w-5 h-5 mt-0.5 rounded border border-white/10 flex items-center justify-center cursor-pointer hover:border-brand-gold group shrink-0">
          <div className="w-2.5 h-2.5 bg-brand-gold rounded-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <span className="text-[10px] text-white/40 font-medium leading-relaxed">
          I AGREE TO THE <span className="text-brand-gold cursor-pointer hover:underline">TERMS OF SERVICE</span> AND <span className="text-brand-gold cursor-pointer hover:underline">PRIVACY POLICY</span>.
        </span>
      </div>

      <button className="w-full bg-brand-gold text-brand-black py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-xl shadow-brand-gold/10 hover:bg-brand-gold-light transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 group/btn">
        Create Account
        <ChevronRight className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" />
      </button>

      <div className="bg-emerald-500/5 p-4 rounded-2xl border border-emerald-500/10 flex gap-3 items-center">
        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
        <p className="text-[9px] text-white/40 uppercase tracking-widest font-bold">Risk-controlled secure registration</p>
      </div>
    </form>
  );
}
