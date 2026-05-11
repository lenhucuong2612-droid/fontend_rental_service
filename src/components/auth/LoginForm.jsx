import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ChevronRight } from 'lucide-react';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      <div className="space-y-2">
        <label className="text-[10px] text-white/40 uppercase font-black tracking-widest ml-1">Email Address</label>
        <div className="relative group">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-brand-gold transition-colors" />
          <input 
            type="email" 
            placeholder="name@company.com"
            className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-white text-sm focus:outline-none focus:border-brand-gold/50 transition-all placeholder:text-white/10" 
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-end ml-1">
          <label className="text-[10px] text-white/40 uppercase font-black tracking-widest">Password</label>
          <button className="text-[9px] text-brand-gold uppercase font-black tracking-widest hover:text-brand-gold-light transition-colors">Forgot Password?</button>
        </div>
        <div className="relative group">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-brand-gold transition-colors" />
          <input 
            type={showPassword ? "text" : "password"} 
            placeholder="••••••••"
            className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-12 text-white text-sm focus:outline-none focus:border-brand-gold/50 transition-all placeholder:text-white/10" 
          />
          <button 
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-colors"
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>

      <div className="flex items-center gap-3 ml-1">
        <div className="w-5 h-5 rounded border border-white/10 flex items-center justify-center cursor-pointer hover:border-brand-gold group">
          <div className="w-2.5 h-2.5 bg-brand-gold rounded-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Remember this device</span>
      </div>

      <button className="w-full bg-brand-gold text-brand-black py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-xl shadow-brand-gold/10 hover:bg-brand-gold-light hover:shadow-brand-gold/20 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 group/btn">
        Login Securely
        <ChevronRight className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </form>
  );
}
