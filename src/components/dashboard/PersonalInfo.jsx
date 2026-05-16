import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User, Phone, Mail, Calendar, Globe, Heart, Camera,
  CheckCircle2, AlertTriangle, Clock, ChevronRight, Save, X
} from 'lucide-react';
import { apiService } from '../../services/mockApi';

function FormField({ label, type = 'text', placeholder, value, onChange, note, verify, required }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between ml-1">
        <label className="text-[10px] text-white/40 uppercase font-black tracking-widest">
          {label}{required && <span className="text-brand-gold ml-1">*</span>}
        </label>
        {verify && (
          <div className={`flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest ${
            verify === 'verified' ? 'text-emerald-500' : verify === 'pending' ? 'text-amber-500' : 'text-white/30'
          }`}>
            {verify === 'verified' ? <CheckCircle2 className="w-3 h-3" /> : verify === 'pending' ? <Clock className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
            {verify}
          </div>
        )}
      </div>
      <input
        type={type}
        value={value || ''}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 px-5 text-white text-sm focus:outline-none focus:border-brand-gold/50 transition-all placeholder:text-white/10"
      />
      {note && <p className="text-[9px] text-white/20 uppercase font-bold tracking-widest ml-1">{note}</p>}
    </div>
  );
}

function FormSelect({ label, options, value, onChange }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] text-white/40 uppercase font-black tracking-widest ml-1">{label}</label>
      <select
        value={value || options[0]}
        onChange={e => onChange(e.target.value)}
        className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 px-5 text-white text-sm focus:outline-none focus:border-brand-gold/50 transition-all appearance-none cursor-pointer"
      >
        {options.map(o => <option key={o} value={o} className="bg-brand-charcoal">{o}</option>)}
      </select>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="bg-brand-charcoal rounded-[40px] border border-white/5 p-8 md:p-10 space-y-8">
      <h3 className="text-[10px] text-white/30 uppercase font-black tracking-[0.3em] flex items-center gap-4">
        {title}
        <div className="h-px flex-1 bg-white/5"></div>
      </h3>
      {children}
    </div>
  );
}

export default function PersonalInfo() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState(false);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await apiService.getUserProfile();
        setProfile(data);
        if (data.avatar) setPhoto(data.avatar);
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const updateProfile = (field, value) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const updateNestedProfile = (parent, field, value) => {
    setProfile(prev => ({
      ...prev,
      [parent]: { ...prev[parent], [field]: value }
    }));
  };

  if (loading) {
    return (
      <div className="space-y-10 animate-pulse">
        <div className="h-20 bg-white/5 rounded-3xl" />
        <div className="h-40 bg-white/5 rounded-[40px]" />
        <div className="h-64 bg-white/5 rounded-[40px]" />
      </div>
    );
  }

  const completionItems = [
    { label: 'Profile photo', done: !!photo || !!profile.avatar },
    { label: 'Phone verified', done: true },
    { label: "Driver's license uploaded", done: true },
    { label: 'Emergency contact added', done: !!profile.emergencyContact?.name },
    { label: 'Default delivery address', done: true },
  ];
  const pct = Math.round((completionItems.filter(x => x.done).length / completionItems.length) * 100);

  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-black text-white uppercase tracking-tight">
            Personal <span className="text-brand-gold italic">Information</span>
          </h2>
          <p className="text-white/40 text-sm font-light mt-2 tracking-wide">
            Keeping your profile updated helps us prepare your rental contract faster.
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button className="bg-white/5 border border-white/10 text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
            Cancel
          </button>
          <button onClick={handleSave} className="bg-brand-gold text-brand-black px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-brand-gold-light transition-all flex items-center gap-2 shadow-lg shadow-brand-gold/20">
            <Save className="w-4 h-4" />
            Save Changes
          </button>
        </div>
      </div>

      {/* Save Success Toast */}
      <AnimatePresence>
        {saved && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl px-6 py-4 flex items-center gap-3 text-emerald-500 text-[10px] font-black uppercase tracking-widest">
            <CheckCircle2 className="w-4 h-4" />
            Profile updated successfully.
          </motion.div>
        )}
      </AnimatePresence>

      {/* Profile Completion Banner */}
      <div className="bg-brand-charcoal rounded-[40px] border border-brand-gold/10 p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-brand-gold/5 blur-[80px] rounded-full -mr-24 -mt-24 pointer-events-none"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-3">
              <p className="text-brand-gold text-[10px] font-black uppercase tracking-[0.3em]">Profile Completion</p>
              <span className="text-white font-black text-2xl">{pct}%</span>
            </div>
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ duration: 1.2, ease: 'easeOut' }}
                className="h-full bg-brand-gold rounded-full" />
            </div>
            <p className="text-white/30 text-[10px] uppercase font-bold tracking-widest mt-3">Complete your profile to book faster and get verified status</p>
          </div>
          <div className="space-y-2 min-w-[220px]">
            {completionItems.map(item => (
              <div key={item.label} className="flex items-center gap-3">
                <CheckCircle2 className={`w-4 h-4 shrink-0 ${item.done ? 'text-emerald-500' : 'text-white/10'}`} />
                <span className={`text-[10px] uppercase font-bold tracking-widest ${item.done ? 'text-white/60 line-through' : 'text-white/30'}`}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 1. Profile Photo */}
      <Section title="Profile Photo">
        <div className="flex items-center gap-8">
          <div className="relative shrink-0">
            <div className="w-24 h-24 rounded-3xl bg-brand-gold/10 border-2 border-brand-gold/20 flex items-center justify-center text-brand-gold text-3xl font-black overflow-hidden">
              {photo ? <img src={photo} alt="avatar" className="w-full h-full object-cover" /> : (profile.firstName[0] + profile.lastName[0])}
            </div>
            <label className="absolute -bottom-2 -right-2 w-8 h-8 rounded-xl bg-brand-gold flex items-center justify-center text-brand-black cursor-pointer hover:bg-brand-gold-light transition-all shadow-lg">
              <Camera className="w-4 h-4" />
              <input type="file" accept="image/*" className="hidden" onChange={e => {
                const f = e.target.files[0];
                if (f) setPhoto(URL.createObjectURL(f));
              }} />
            </label>
          </div>
          <div className="space-y-3">
            <p className="text-white font-bold text-sm uppercase tracking-tight">{profile.fullName}</p>
            <p className="text-white/30 text-[10px] uppercase font-bold tracking-widest">{profile.membership} Member · Verified</p>
            <div className="flex gap-3">
              <label className="cursor-pointer bg-white/5 border border-white/10 text-white px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                Change Photo
                <input type="file" accept="image/*" className="hidden" onChange={e => {
                  const f = e.target.files[0];
                  if (f) setPhoto(URL.createObjectURL(f));
                }} />
              </label>
              {photo && (
                <button onClick={() => setPhoto(null)} className="text-rose-500/60 hover:text-rose-500 text-[10px] font-black uppercase tracking-widest transition-colors">Remove</button>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* 2. Basic Information */}
      <Section title="Basic Information">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField label="Full Name" value={profile.fullName} onChange={v => updateProfile('fullName', v)} required />
          <FormField label="Date of Birth" type="date" value={profile.dob} onChange={v => updateProfile('dob', v)} required />
          <FormSelect label="Gender" options={['Male', 'Female', 'Prefer not to say']} value={profile.gender} onChange={v => updateProfile('gender', v)} />
          <FormSelect label="Nationality" options={['Vietnamese', 'American', 'British', 'French', 'Other']} value={profile.nationality} onChange={v => updateProfile('nationality', v)} />
          <FormSelect label="Preferred Language" options={['English', 'Vietnamese', 'French', 'Japanese']} value={profile.language} onChange={v => updateProfile('language', v)} />
        </div>
      </Section>

      {/* 3. Contact Information */}
      <Section title="Contact Information">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField label="Phone Number" value={profile.phone} onChange={v => updateProfile('phone', v)} verify="verified" required />
          <FormField label="Email Address" value={profile.email} onChange={v => updateProfile('email', v)} type="email" verify="verified" required />
          <FormField label="Zalo Number" value={profile.zalo} onChange={v => updateProfile('zalo', v)} note="Used for booking support via Zalo" />
          <FormField label="WhatsApp Number" value={profile.whatsapp} onChange={v => updateProfile('whatsapp', v)} placeholder="+1 555 000 0000" />
          <FormField label="Emergency Contact Name" value={profile.emergencyContact.name} onChange={v => updateNestedProfile('emergencyContact', 'name', v)} placeholder="Full name of emergency contact" />
          <FormField label="Emergency Contact Phone" value={profile.emergencyContact.phone} onChange={v => updateNestedProfile('emergencyContact', 'phone', v)} placeholder="+84 000 000 000" type="tel" />
        </div>
      </Section>

      {/* 4. Driver Information */}
      <Section title="Driver Information">
        {profile.driverInfo.verified && (
          <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-2xl px-6 py-4 flex items-center gap-3 mb-4">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <p className="text-emerald-500 text-[10px] font-black uppercase tracking-widest">Driver information verified</p>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField label="Driver's License Number" value={profile.driverInfo.licenseNumber} onChange={v => updateNestedProfile('driverInfo', 'licenseNumber', v)} required />
          <FormSelect label="License Class" options={['Class B1', 'Class B2', 'Class C', 'Class D', 'Class E']} value={profile.driverInfo.licenseClass} onChange={v => updateNestedProfile('driverInfo', 'licenseClass', v)} />
          <FormField label="License Issue Date" type="date" value={profile.driverInfo.issueDate} onChange={v => updateNestedProfile('driverInfo', 'issueDate', v)} />
          <FormField label="License Expiry Date" type="date" value={profile.driverInfo.expiryDate} onChange={v => updateNestedProfile('driverInfo', 'expiryDate', v)} />
          <FormSelect label="Years of Driving Experience" options={['1–2 years', '3–5 years', '6–10 years', '10+ years']} value={profile.driverInfo.experience} onChange={v => updateNestedProfile('driverInfo', 'experience', v)} />
        </div>
      </Section>

      {/* 5. Travel Preferences */}
      <Section title="Travel Preferences">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormSelect label="Preferred Car Type" options={['Luxury Sedan', 'Family SUV', 'Sports Car', 'Electric Vehicle', 'Economy Car']} value={profile.preferences.carType} onChange={v => updateNestedProfile('preferences', 'carType', v)} />
          <FormSelect label="Preferred Fuel Type" options={['Petrol', 'Diesel', 'Electric', 'Hybrid', 'No Preference']} value={profile.preferences.fuelType} onChange={v => updateNestedProfile('preferences', 'fuelType', v)} />
          <FormSelect label="Preferred Pickup Area" options={['Hanoi', 'Ho Chi Minh City', 'Da Nang', 'Phu Quoc', 'Any']} value={profile.preferences.pickupArea} onChange={v => updateNestedProfile('preferences', 'pickupArea', v)} />
          <FormSelect label="Preferred Payment Method" options={['Credit Card', 'Bank Transfer', 'Momo', 'ZaloPay', 'Cash']} value={profile.preferences.paymentMethod} onChange={v => updateNestedProfile('preferences', 'paymentMethod', v)} />
          <FormSelect label="Insurance Preference" options={['Full Coverage (Recommended)', 'Basic Coverage', 'No Insurance']} value={profile.preferences.insurance} onChange={v => updateNestedProfile('preferences', 'insurance', v)} />
          <FormField label="Favorite Destinations" value={profile.preferences.destinations} onChange={v => updateNestedProfile('preferences', 'destinations', v)} placeholder="e.g. Da Lat, Hoi An, Phu Quoc" note="Separate multiple destinations with commas" />
        </div>
      </Section>

      {/* Bottom Save Bar */}
      <div className="sticky bottom-6 z-30 flex justify-end">
        <button onClick={handleSave}
          className="bg-brand-gold text-brand-black px-12 py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl shadow-brand-gold/30 hover:bg-brand-gold-light transition-all flex items-center gap-3">
          <Save className="w-4 h-4" />
          Save All Changes
        </button>
      </div>
    </div>
  );
}
