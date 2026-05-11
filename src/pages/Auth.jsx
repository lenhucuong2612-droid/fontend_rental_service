import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Lock, Star, ChevronLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import SocialAuth from '../components/auth/SocialAuth';
import LoginForm from '../components/auth/LoginForm';
import SignupForm from '../components/auth/SignupForm';
import PhoneVerification from '../components/auth/PhoneVerification';

export default function Auth() {
  const [authType, setAuthType] = useState('login'); // login, signup, otp
  const navigate = useNavigate();

  return (
    <div className="bg-brand-black min-h-screen flex selection:bg-brand-gold selection:text-brand-black">
      {/* Left Column - Cinematic Brand Promise (Desktop only) */}
      <div className="hidden lg:block w-1/2 relative overflow-hidden bg-brand-charcoal">
        {/* Luxury Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Car" 
            className="w-full h-full object-cover opacity-60 transition-transform duration-[20s] hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent"></div>
        </div>

        <div className="relative z-10 h-full p-20 flex flex-col justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-brand-gold flex items-center justify-center text-brand-black shadow-lg shadow-brand-gold/20">
              <Star className="w-6 h-6 fill-current" />
            </div>
            <span className="text-xl font-black text-white uppercase tracking-tighter">Elysium <span className="text-brand-gold italic">Drive</span></span>
          </Link>

          <div className="max-w-md space-y-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl font-black text-white uppercase leading-[0.9] tracking-tighter"
            >
              Premium cars. <br />
              <span className="text-brand-gold">Verified</span> drivers. <br />
              Seamless journeys.
            </motion.h2>
            <p className="text-white/40 text-lg font-light tracking-wide leading-relaxed">
              Experience the world's most exclusive vehicle fleet with the security and trust of a premier membership.
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <p className="text-3xl font-black text-white leading-none">10k+</p>
              <p className="text-[10px] text-white/30 uppercase font-black tracking-widest mt-2">Verified Members</p>
            </div>
            <div>
              <p className="text-3xl font-black text-white leading-none">500+</p>
              <p className="text-[10px] text-white/30 uppercase font-black tracking-widest mt-2">Luxury Vehicles</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Auth Card */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 relative overflow-hidden">
        {/* Background Decorative Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-md relative z-10"
        >
          {/* Mobile Logo Only */}
          <Link to="/" className="lg:hidden flex items-center gap-2 mb-12 justify-center">
            <div className="w-10 h-10 rounded-xl bg-brand-gold flex items-center justify-center text-brand-black">
              <Star className="w-6 h-6 fill-current" />
            </div>
            <span className="text-xl font-black text-white uppercase tracking-tighter">Elysium <span className="text-brand-gold italic">Drive</span></span>
          </Link>

          <AnimatePresence mode="wait">
            {authType === 'otp' ? (
              <motion.div 
                key="otp"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <PhoneVerification 
                  onBack={() => setAuthType('signup')} 
                  onSuccess={() => navigate('/')} 
                />
              </motion.div>
            ) : (
              <motion.div 
                key="auth"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-brand-charcoal/50 backdrop-blur-xl rounded-[40px] border border-white/5 p-8 md:p-10 shadow-2xl overflow-hidden"
              >
                {/* Header */}
                <div className="mb-10 text-center">
                  <h1 className="text-3xl font-black text-white uppercase tracking-tight mb-2">
                    {authType === 'login' ? 'Welcome Back' : 'Create Access'}
                  </h1>
                  <p className="text-white/40 text-sm font-light">Securely manage your premium rentals.</p>
                </div>

                {/* Tabs */}
                <div className="flex p-1.5 bg-white/5 rounded-2xl mb-10 relative">
                  <div 
                    className="absolute inset-y-1.5 transition-all duration-500 bg-brand-gold rounded-xl shadow-lg"
                    style={{ 
                      width: 'calc(50% - 6px)', 
                      left: authType === 'login' ? '6px' : 'calc(50% + 0px)' 
                    }}
                  ></div>
                  <button 
                    onClick={() => setAuthType('login')}
                    className={`flex-1 py-3 text-[10px] font-black uppercase tracking-[0.2em] relative z-10 transition-colors duration-300 ${authType === 'login' ? 'text-brand-black' : 'text-white/40'}`}
                  >
                    Login
                  </button>
                  <button 
                    onClick={() => setAuthType('signup')}
                    className={`flex-1 py-3 text-[10px] font-black uppercase tracking-[0.2em] relative z-10 transition-colors duration-300 ${authType === 'signup' ? 'text-brand-black' : 'text-white/40'}`}
                  >
                    Sign Up
                  </button>
                </div>

                <SocialAuth />

                <div className="mt-8">
                  {authType === 'login' ? (
                    <LoginForm />
                  ) : (
                    <SignupForm onContinue={() => setAuthType('otp')} />
                  )}
                </div>

                <div className="mt-10 flex items-center justify-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span className="text-[9px] text-white/30 uppercase font-bold tracking-widest">Fintech-grade data security</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Footer Back Button */}
          {authType !== 'otp' && (
            <div className="mt-12 text-center">
              <Link to="/" className="inline-flex items-center gap-2 text-white/20 hover:text-white transition-colors text-[10px] uppercase font-black tracking-widest">
                <ChevronLeft className="w-4 h-4" />
                Back to Showroom
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
