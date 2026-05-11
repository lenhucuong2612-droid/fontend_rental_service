import { useState } from 'react';
import { User, Phone, Mail, Bell, Shield, Globe, Trash2, ChevronRight, CheckCircle2 } from 'lucide-react';

function Toggle({ defaultOn = true }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <button 
      onClick={() => setOn(!on)}
      className={`relative w-12 h-6 rounded-full transition-all duration-300 ${on ? 'bg-brand-gold' : 'bg-white/10'}`}
    >
      <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-all duration-300 ${on ? 'right-1' : 'left-1'}`}></div>
    </button>
  );
}

function SettingRow({ icon, label, value, children }) {
  return (
    <div className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all">
      <div className="flex items-center gap-4">
        <div className="text-brand-gold">{icon}</div>
        <div>
          <p className="text-[10px] text-white/40 uppercase font-black tracking-widest">{label}</p>
          {value && <p className="text-white text-xs font-bold uppercase tracking-tight mt-0.5">{value}</p>}
        </div>
      </div>
      {children}
    </div>
  );
}

export default function Settings() {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div>
        <h2 className="text-3xl font-black text-white uppercase tracking-tight">Account <span className="text-brand-gold italic">Settings</span></h2>
        <p className="text-white/40 text-sm font-light mt-2 tracking-wide uppercase tracking-[0.2em]">Manage your personal preferences & security</p>
      </div>

      {/* Personal Information */}
      <div className="bg-brand-charcoal rounded-[40px] border border-white/5 p-10 space-y-6">
        <h3 className="text-[10px] text-white/30 uppercase font-black tracking-[0.3em]">Personal Information</h3>
        
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 pb-8 border-b border-white/5">
          <div className="w-20 h-20 rounded-3xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold text-2xl font-black uppercase">
            AH
          </div>
          <div>
            <p className="text-white font-black text-xl uppercase tracking-tight">Alex Harrison</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
              <span className="text-[10px] text-brand-gold uppercase font-black tracking-widest">Platinum Member</span>
            </div>
          </div>
          <button className="md:ml-auto bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">Edit Profile</button>
        </div>

        <div className="space-y-4">
          <SettingRow icon={<User className="w-5 h-5" />} label="Full Name" value="Alex Harrison">
            <button className="text-white/20 hover:text-brand-gold transition-colors"><ChevronRight className="w-5 h-5" /></button>
          </SettingRow>
          <SettingRow icon={<Mail className="w-5 h-5" />} label="Email Address" value="alex.harrison@gmail.com">
            <button className="text-white/20 hover:text-brand-gold transition-colors"><ChevronRight className="w-5 h-5" /></button>
          </SettingRow>
          <SettingRow icon={<Phone className="w-5 h-5" />} label="Phone Number" value="+84 098 765 4321">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-emerald-500 text-[9px] font-black uppercase tracking-widest">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Verified
              </div>
              <button className="text-white/20 hover:text-brand-gold transition-colors"><ChevronRight className="w-5 h-5" /></button>
            </div>
          </SettingRow>
          <SettingRow icon={<Globe className="w-5 h-5" />} label="Language" value="English (US)">
            <button className="text-white/20 hover:text-brand-gold transition-colors"><ChevronRight className="w-5 h-5" /></button>
          </SettingRow>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-brand-charcoal rounded-[40px] border border-white/5 p-10 space-y-6">
        <h3 className="text-[10px] text-white/30 uppercase font-black tracking-[0.3em]">Notification Preferences</h3>
        <div className="space-y-4">
          {[
            { label: 'Booking Confirmations', on: true },
            { label: 'Return Reminders', on: true },
            { label: 'Promotional Offers', on: false },
            { label: 'Loyalty Points Updates', on: true },
            { label: 'Vehicle Availability Alerts', on: false }
          ].map((item) => (
            <SettingRow key={item.label} icon={<Bell className="w-5 h-5" />} label={item.label}>
              <Toggle defaultOn={item.on} />
            </SettingRow>
          ))}
        </div>
      </div>

      {/* Security */}
      <div className="bg-brand-charcoal rounded-[40px] border border-white/5 p-10 space-y-6">
        <h3 className="text-[10px] text-white/30 uppercase font-black tracking-[0.3em]">Security</h3>
        <div className="space-y-4">
          <SettingRow icon={<Shield className="w-5 h-5" />} label="Password" value="Last updated 3 months ago">
            <button className="bg-white/5 border border-white/10 text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">Change</button>
          </SettingRow>
          <SettingRow icon={<Shield className="w-5 h-5" />} label="Two-Factor Authentication" value="Enabled via SMS">
            <Toggle defaultOn={true} />
          </SettingRow>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-rose-500/5 rounded-[40px] border border-rose-500/10 p-10 space-y-6">
        <h3 className="text-[10px] text-rose-500/60 uppercase font-black tracking-[0.3em]">Danger Zone</h3>
        <button className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-rose-500/5 border border-rose-500/10 text-rose-500/60 hover:text-rose-500 hover:border-rose-500/30 hover:bg-rose-500/10 transition-all">
          <Trash2 className="w-5 h-5" />
          <span className="text-[10px] font-black uppercase tracking-widest">Delete Account</span>
        </button>
      </div>
    </div>
  );
}
