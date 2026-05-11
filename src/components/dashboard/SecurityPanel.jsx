import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield, Lock, Smartphone, Monitor, LogOut, Trash2,
  CheckCircle2, Eye, EyeOff, AlertTriangle, ChevronRight,
  Apple, Globe
} from 'lucide-react';

function Toggle({ defaultOn = false }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <button
      onClick={() => setOn(!on)}
      className={`relative w-12 h-6 rounded-full transition-all duration-300 shrink-0 ${on ? 'bg-brand-gold' : 'bg-white/10'}`}
    >
      <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all duration-300 ${on ? 'right-1' : 'left-1'}`} />
    </button>
  );
}

const devices = [
  { id: 1, name: 'MacBook Pro 16"', os: 'macOS 14.4', location: 'Hanoi, Vietnam', time: 'Active now', current: true },
  { id: 2, name: 'iPhone 15 Pro', os: 'iOS 17.4', location: 'Hanoi, Vietnam', time: '2 hours ago', current: false },
  { id: 3, name: 'Chrome / Windows 11', os: 'Windows 11', location: 'Ho Chi Minh City', time: '3 days ago', current: false },
];

const loginHistory = [
  { date: 'Today, 10:32 AM', device: 'MacBook Pro', location: 'Hanoi', status: 'success' },
  { date: 'Yesterday, 8:14 PM', device: 'iPhone 15 Pro', location: 'Hanoi', status: 'success' },
  { date: '3 days ago, 2:45 PM', device: 'Chrome / Windows', location: 'Ho Chi Minh City', status: 'success' },
  { date: '5 days ago, 9:01 AM', device: 'Unknown Device', location: 'Da Nang', status: 'blocked' },
];

export default function SecurityPanel() {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [devices2, setDevices2] = useState(devices);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      <div>
        <h2 className="text-3xl font-black text-white uppercase tracking-tight">
          Account <span className="text-brand-gold italic">Security</span>
        </h2>
        <p className="text-white/40 text-sm font-light mt-2">Manage your security settings and trusted devices.</p>
      </div>

      {/* Security Score */}
      <div className="bg-brand-charcoal rounded-[40px] border border-emerald-500/10 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
        <div className="relative w-24 h-24 shrink-0">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="10" />
            <motion.circle cx="50" cy="50" r="40" fill="none" stroke="#22c55e" strokeWidth="10"
              strokeDasharray="251.2" initial={{ strokeDashoffset: 251.2 }}
              animate={{ strokeDashoffset: 251.2 * (1 - 0.82) }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              strokeLinecap="round" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-white font-black text-xl leading-none">82</p>
            <p className="text-[8px] text-emerald-500 font-black uppercase tracking-widest">Score</p>
          </div>
        </div>
        <div className="flex-1 space-y-3">
          <p className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.3em]">Security Status: Good</p>
          <h3 className="text-xl font-black text-white uppercase tracking-tight">Your account is well protected</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-2">
            {[
              { label: 'Password', ok: true },
              { label: '2FA Enabled', ok: true },
              { label: 'Phone Verified', ok: true },
              { label: 'Email Verified', ok: true },
              { label: 'Social Login', ok: false },
              { label: 'Recovery Email', ok: false },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-2">
                <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${item.ok ? 'text-emerald-500' : 'text-white/15'}`} />
                <span className={`text-[9px] font-bold uppercase tracking-widest ${item.ok ? 'text-white/60' : 'text-white/20'}`}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Change Password */}
      <div className="bg-brand-charcoal rounded-[40px] border border-white/5 p-8 md:p-10 space-y-8">
        <h3 className="text-[10px] text-white/30 uppercase font-black tracking-[0.3em] flex items-center gap-4">
          Change Password <div className="h-px flex-1 bg-white/5" />
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Current Password', show: showCurrent, toggle: () => setShowCurrent(p => !p) },
            { label: 'New Password', show: showNew, toggle: () => setShowNew(p => !p) },
            { label: 'Confirm New Password', show: showConfirm, toggle: () => setShowConfirm(p => !p) },
          ].map(f => (
            <div key={f.label} className="space-y-2">
              <label className="text-[10px] text-white/40 uppercase font-black tracking-widest ml-1">{f.label}</label>
              <div className="relative group">
                <input
                  type={f.show ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-5 pr-12 text-white text-sm focus:outline-none focus:border-brand-gold/50 transition-all placeholder:text-white/10"
                />
                <button onClick={f.toggle} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-colors">
                  {f.show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-brand-gold text-brand-black px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-brand-gold-light transition-all shadow-lg shadow-brand-gold/10 flex items-center gap-2">
          <Lock className="w-4 h-4" />
          Update Password
        </button>
      </div>

      {/* 2FA & Security Settings */}
      <div className="bg-brand-charcoal rounded-[40px] border border-white/5 p-8 md:p-10 space-y-5">
        <h3 className="text-[10px] text-white/30 uppercase font-black tracking-[0.3em] flex items-center gap-4">
          Security Settings <div className="h-px flex-1 bg-white/5" />
        </h3>
        {[
          { label: 'Two-Factor Authentication (SMS)', desc: 'Receive OTP codes on your phone for each login', on: true, icon: <Smartphone className="w-5 h-5" /> },
          { label: 'Login Notifications', desc: 'Get notified by email on each new login', on: true, icon: <Shield className="w-5 h-5" /> },
          { label: 'Suspicious Activity Alerts', desc: 'Alerts for logins from new locations or devices', on: true, icon: <AlertTriangle className="w-5 h-5" /> },
        ].map(item => (
          <div key={item.label} className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all">
            <div className="flex items-center gap-4">
              <div className="text-brand-gold">{item.icon}</div>
              <div>
                <p className="text-[10px] text-white font-black uppercase tracking-tight">{item.label}</p>
                <p className="text-[9px] text-white/30 font-medium uppercase tracking-wider mt-0.5">{item.desc}</p>
              </div>
            </div>
            <Toggle defaultOn={item.on} />
          </div>
        ))}
      </div>

      {/* Social Login Connections */}
      <div className="bg-brand-charcoal rounded-[40px] border border-white/5 p-8 md:p-10 space-y-5">
        <h3 className="text-[10px] text-white/30 uppercase font-black tracking-[0.3em] flex items-center gap-4">
          Connected Accounts <div className="h-px flex-1 bg-white/5" />
        </h3>
        {[
          {
            name: 'Google', connected: true,
            icon: <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" /><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
          },
          {
            name: 'Apple', connected: false,
            icon: <Apple className="w-5 h-5 text-white" />
          },
        ].map(item => (
          <div key={item.name} className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">{item.icon}</div>
              <div>
                <p className="text-[10px] text-white font-black uppercase tracking-tight">{item.name}</p>
                <p className={`text-[9px] font-black uppercase tracking-widest mt-0.5 ${item.connected ? 'text-emerald-500' : 'text-white/20'}`}>
                  {item.connected ? 'Connected' : 'Not Connected'}
                </p>
              </div>
            </div>
            <button className={`px-5 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all border ${
              item.connected
                ? 'border-rose-500/20 text-rose-500/60 hover:text-rose-500 hover:border-rose-500/40 bg-rose-500/5'
                : 'border-brand-gold/20 text-brand-gold bg-brand-gold/5 hover:bg-brand-gold/10'
            }`}>
              {item.connected ? 'Disconnect' : 'Connect'}
            </button>
          </div>
        ))}
      </div>

      {/* Active Devices */}
      <div className="bg-brand-charcoal rounded-[40px] border border-white/5 p-8 md:p-10 space-y-5">
        <h3 className="text-[10px] text-white/30 uppercase font-black tracking-[0.3em] flex items-center gap-4">
          Active Sessions <div className="h-px flex-1 bg-white/5" />
        </h3>
        {devices2.map(device => (
          <div key={device.id} className={`flex items-center justify-between p-5 rounded-2xl border transition-all ${
            device.current ? 'bg-emerald-500/5 border-emerald-500/20' : 'bg-white/5 border-white/5'
          }`}>
            <div className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${device.current ? 'bg-emerald-500/10 text-emerald-500' : 'bg-white/5 text-white/30'}`}>
                <Monitor className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-[10px] text-white font-black uppercase tracking-tight">{device.name}</p>
                  {device.current && <span className="text-[8px] bg-emerald-500/20 text-emerald-500 px-2 py-0.5 rounded font-black uppercase tracking-widest">This Device</span>}
                </div>
                <p className="text-[9px] text-white/30 font-bold uppercase tracking-widest mt-0.5">{device.location} · {device.time}</p>
              </div>
            </div>
            {!device.current && (
              <button onClick={() => setDevices2(prev => prev.filter(d => d.id !== device.id))}
                className="text-rose-500/30 hover:text-rose-500 transition-colors">
                <LogOut className="w-4 h-4" />
              </button>
            )}
          </div>
        ))}

        {/* Login History */}
        <div className="pt-6 border-t border-white/5 space-y-3">
          <p className="text-[9px] text-white/20 uppercase font-black tracking-[0.3em]">Recent Login Activity</p>
          {loginHistory.map((entry, i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-white/5">
              <div>
                <p className="text-[10px] text-white font-bold uppercase tracking-tight">{entry.device}</p>
                <p className="text-[9px] text-white/30 font-bold uppercase tracking-widest">{entry.location} · {entry.date}</p>
              </div>
              <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-lg border ${
                entry.status === 'success'
                  ? 'text-emerald-500 border-emerald-500/20 bg-emerald-500/5'
                  : 'text-rose-500 border-rose-500/20 bg-rose-500/5'
              }`}>
                {entry.status === 'success' ? 'Verified' : 'Blocked'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-rose-500/5 rounded-[40px] border border-rose-500/10 p-8 md:p-10 space-y-5">
        <h3 className="text-[10px] text-rose-500/50 uppercase font-black tracking-[0.3em] flex items-center gap-4">
          Danger Zone <div className="h-px flex-1 bg-rose-500/10" />
        </h3>
        <p className="text-white/30 text-[10px] font-medium uppercase tracking-wider leading-relaxed">
          Deleting your account will permanently remove all personal data, rental history, loyalty points, and saved documents. This action cannot be undone.
        </p>
        <button onClick={() => setShowDeleteModal(true)}
          className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-rose-500/5 border border-rose-500/20 text-rose-500/70 hover:text-rose-500 hover:border-rose-500/40 hover:bg-rose-500/10 transition-all text-[10px] font-black uppercase tracking-widest">
          <Trash2 className="w-4 h-4" />
          Delete My Account
        </button>
      </div>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {showDeleteModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-brand-black/80 backdrop-blur-xl">
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9 }}
              className="bg-brand-charcoal rounded-[40px] border border-rose-500/20 p-10 max-w-md w-full space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-500">
                  <AlertTriangle className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-white font-black uppercase text-xl tracking-tight">Delete Account?</h4>
                  <p className="text-white/30 text-[10px] uppercase font-bold tracking-widest mt-1">This cannot be undone</p>
                </div>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">All your data including rental history, loyalty points, and saved documents will be permanently removed.</p>
              <div className="flex gap-4">
                <button onClick={() => setShowDeleteModal(false)}
                  className="flex-1 bg-white/5 border border-white/10 text-white py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                  Cancel
                </button>
                <button className="flex-1 bg-rose-500 text-white py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-rose-600 transition-all shadow-lg shadow-rose-500/20">
                  Delete Account
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
