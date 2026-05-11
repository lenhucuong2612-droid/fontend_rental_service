import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, ShieldCheck, ChevronLeft, CheckCircle2, MessageCircle } from 'lucide-react';

export default function PhoneVerification({ onBack, onSuccess }) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [method, setMethod] = useState('sms');
  const [timer, setTimer] = useState(60);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const inputs = useRef([]);

  useEffect(() => {
    if (timer > 0) {
      const t = setInterval(() => setTimer(prev => prev - 1), 1000);
      return () => clearInterval(t);
    }
  }, [timer]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.nextSibling && element.value !== '') {
      element.nextSibling.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const verifyCode = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setIsSuccess(true);
      setTimeout(() => {
        onSuccess();
      }, 2000);
    }, 2000);
  };

  return (
    <div className="space-y-10">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-[10px] uppercase font-black tracking-widest"
      >
        <ChevronLeft className="w-4 h-4" />
        Back to Registration
      </button>

      <div className="space-y-2">
        <h3 className="text-2xl font-black text-white uppercase tracking-tight">Verify Your Phone</h3>
        <p className="text-white/40 text-sm font-light">We sent a 6-digit code to <span className="text-white font-bold">+84 123 456 789</span></p>
      </div>

      <div className="flex justify-between gap-3">
        {otp.map((data, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            ref={el => inputs.current[index] = el}
            value={data}
            onChange={e => handleChange(e.target, index)}
            onKeyDown={e => handleKeyDown(e, index)}
            className="w-full aspect-square bg-white/5 border border-white/5 rounded-2xl text-center text-2xl font-black text-brand-gold focus:outline-none focus:border-brand-gold/50 transition-all shadow-lg"
          />
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
           <button 
             onClick={() => setMethod('sms')}
             className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest border transition-all ${
               method === 'sms' ? 'bg-brand-gold border-brand-gold text-brand-black' : 'bg-white/5 border-white/5 text-white/40 hover:border-white/10'
             }`}
           >
             <MessageSquare className="w-3 h-3" />
             SMS OTP
           </button>
           <button 
             onClick={() => setMethod('zalo')}
             className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest border transition-all ${
               method === 'zalo' ? 'bg-brand-gold border-brand-gold text-brand-black' : 'bg-white/5 border-white/5 text-white/40 hover:border-white/10'
             }`}
           >
             <MessageCircle className="w-3 h-3" />
             Zalo OTP
           </button>
        </div>
        
        <div className="text-right">
          {timer > 0 ? (
            <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Resend in <span className="text-brand-gold">{timer}s</span></p>
          ) : (
            <button className="text-[10px] text-brand-gold font-black uppercase tracking-widest hover:text-brand-gold-light transition-colors">Resend Code</button>
          )}
        </div>
      </div>

      <button 
        disabled={otp.some(d => d === '') || isVerifying || isSuccess}
        onClick={verifyCode}
        className={`w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all duration-300 transform flex items-center justify-center gap-2 ${
          isSuccess ? 'bg-emerald-500 text-white' : 'bg-brand-gold text-brand-black hover:bg-brand-gold-light shadow-xl shadow-brand-gold/10 hover:shadow-brand-gold/20'
        }`}
      >
        {isVerifying ? (
          <div className="w-5 h-5 border-2 border-brand-black border-t-transparent rounded-full animate-spin"></div>
        ) : isSuccess ? (
          <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            Verified Successfully
          </motion.div>
        ) : (
          <>
            Verify Number
            <ShieldCheck className="w-5 h-5" />
          </>
        )}
      </button>

      <div className="pt-6 border-t border-white/5">
        <p className="text-[9px] text-white/20 text-center uppercase tracking-widest leading-relaxed">
          We verify phone numbers to protect customers, vehicles, and rental partners. <br />
          Your data is encrypted and securely stored.
        </p>
      </div>
    </div>
  );
}
