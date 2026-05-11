import { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { motion, AnimatePresence } from 'framer-motion';
import { QrCode, CreditCard, Banknote, Timer, Copy, CheckCircle2, ChevronDown, Lock } from 'lucide-react';

export default function PaymentMethods({ depositAmount }) {
  const [method, setMethod] = useState('qr');
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatCurrency = (val) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val);

  return (
    <section className="space-y-12 py-12 border-t border-white/5">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
          <CreditCard className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-2xl font-black text-white uppercase tracking-tight">Payment Method</h3>
          <p className="text-white/40 text-sm font-light">Secure transaction via premium gateways.</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Method Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button 
            onClick={() => setMethod('qr')}
            className={`flex items-center gap-4 p-6 rounded-3xl border transition-all duration-300 ${
              method === 'qr' ? 'bg-brand-gold/10 border-brand-gold text-white shadow-xl shadow-brand-gold/5' : 'bg-white/5 border-white/5 text-white/40 hover:border-white/10'
            }`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${method === 'qr' ? 'bg-brand-gold text-brand-black' : 'bg-white/5'}`}>
              <QrCode className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold uppercase tracking-widest">VietQR Transfer</p>
              <p className="text-[10px] opacity-60">Instant confirmation</p>
            </div>
          </button>

          <button 
            onClick={() => setMethod('delivery')}
            className={`flex items-center gap-4 p-6 rounded-3xl border transition-all duration-300 ${
              method === 'delivery' ? 'bg-brand-gold/10 border-brand-gold text-white shadow-xl shadow-brand-gold/5' : 'bg-white/5 border-white/5 text-white/40 hover:border-white/10'
            }`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${method === 'delivery' ? 'bg-brand-gold text-brand-black' : 'bg-white/5'}`}>
              <Banknote className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold uppercase tracking-widest">Pay on Delivery</p>
              <p className="text-[10px] opacity-60">Deposit only now</p>
            </div>
          </button>
        </div>

        {/* QR Payment Content */}
        <AnimatePresence mode="wait">
          {method === 'qr' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white/5 rounded-[40px] p-8 md:p-12 border border-white/5 flex flex-col md:flex-row gap-12 items-center"
            >
              <div className="bg-white p-6 rounded-3xl shadow-2xl relative">
                <QRCodeSVG value={`vietqr://payment?amount=${depositAmount}&info=RESERVATION`} size={200} />
                <div className="absolute inset-0 bg-brand-gold/5 pointer-events-none rounded-3xl"></div>
              </div>

              <div className="flex-1 space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-black">Scan to Deposit</h4>
                  <div className="flex items-center gap-2 text-brand-gold">
                    <Timer className="w-4 h-4" />
                    <span className="text-sm font-mono font-bold">{formatTime(timeLeft)}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-white/20 text-[9px] uppercase tracking-widest font-bold">Deposit Amount</span>
                    <p className="text-3xl font-black text-white">{formatCurrency(depositAmount)}</p>
                  </div>

                  <div className="grid grid-cols-1 gap-2 pt-4">
                    <div className="bg-white/5 p-4 rounded-2xl flex items-center justify-between group border border-white/5">
                      <div>
                        <p className="text-white/20 text-[8px] uppercase tracking-widest font-bold mb-1">Bank Account</p>
                        <p className="text-white text-sm font-bold">8888 6666 9999</p>
                        <p className="text-white/40 text-[10px] uppercase font-medium">ELYSYUM DRIVE - MB BANK</p>
                      </div>
                      <button 
                        onClick={() => copyToClipboard('888866669999')}
                        className="p-3 rounded-xl bg-white/5 text-white/50 hover:bg-brand-gold hover:text-brand-black transition-all"
                      >
                        {copied ? <CheckCircle2 className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4">
                  <Lock className="w-4 h-4 text-emerald-500" />
                  <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Secure Fintech-Grade Payment</p>
                </div>
              </div>
            </motion.div>
          )}

          {method === 'delivery' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-emerald-500/5 rounded-[40px] p-8 md:p-12 border border-emerald-500/20"
            >
              <div className="flex gap-6 items-start">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-white uppercase tracking-tight">Pay Remaining Balance Later</h4>
                  <p className="text-white/60 text-sm leading-relaxed max-w-xl">
                    You only need to complete the required security deposit of <span className="text-white font-bold">{formatCurrency(depositAmount)}</span> to hold your vehicle. The remaining balance can be completed via bank transfer or credit card when our delivery agent hands over the keys.
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                    {['Zero upfront full payment', 'Flexible cancellation', 'Verified vehicle check', 'Doorstep balance settlement'].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-[10px] text-white/40 uppercase tracking-widest font-bold">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
