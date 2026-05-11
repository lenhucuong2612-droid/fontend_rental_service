import { motion } from 'framer-motion';

export default function SocialAuth() {
  return (
    <div className="space-y-4">
      <button className="w-full bg-white text-black py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-3 border border-white hover:bg-white/90 transition-all group">
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        Continue with Google
      </button>

      <button className="w-full bg-brand-charcoal text-white py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-3 border border-white/10 hover:border-white/20 transition-all">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-.52-.24-1.05-.36-1.58-.36-.55 0-1.12.14-1.7.42-1 .48-1.92.56-2.88-.4C3.5 16.14 3.1 9.42 6.8 6.06c1.02-.93 2.12-.97 3.22-.4.44.23.9.35 1.38.35.53 0 1.04-.15 1.52-.45 1.15-.72 2.22-.6 3.25.4 1.34 1.3 1.94 3.08 1.8 5.33-2.6.93-3.08 4.28-.47 5.99-.48 1.3-1.14 2.33-2.45 3zM12.03 5.92c-.08-2.6 1.85-4.8 4.38-4.92.25 2.72-2.3 5-4.38 4.92z"/>
        </svg>
        Continue with Apple
      </button>

      <div className="flex items-center gap-4 py-4">
        <div className="h-px flex-1 bg-white/5"></div>
        <span className="text-[10px] text-white/20 uppercase font-black tracking-widest">or continue with email</span>
        <div className="h-px flex-1 bg-white/5"></div>
      </div>
    </div>
  );
}
