import { motion } from 'framer-motion';
import {
  LayoutDashboard, History, Heart, Ticket, FileText,
  Settings, HelpCircle, LogOut, Star, User, MapPin,
  CreditCard, Shield, Link as LinkIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';

const sections = [
  {
    group: 'Dashboard',
    items: [
      { id: 'overview',   label: 'Overview',       icon: <LayoutDashboard className="w-4 h-4" /> },
      { id: 'history',    label: 'Rental History',  icon: <History className="w-4 h-4" /> },
      { id: 'favorites',  label: 'Favorites',        icon: <Heart className="w-4 h-4" /> },
      { id: 'rewards',    label: 'Rewards',          icon: <Ticket className="w-4 h-4" /> },
      { id: 'documents',  label: 'Saved Documents',  icon: <FileText className="w-4 h-4" /> },
    ]
  },
  {
    group: 'Profile',
    items: [
      { id: 'profile',    label: 'Personal Info',    icon: <User className="w-4 h-4" /> },
      { id: 'addresses',  label: 'Addresses',         icon: <MapPin className="w-4 h-4" /> },
      { id: 'billing',    label: 'Billing',           icon: <CreditCard className="w-4 h-4" /> },
      { id: 'security',   label: 'Security',          icon: <Shield className="w-4 h-4" /> },
    ]
  },
  {
    group: 'Preferences',
    items: [
      { id: 'settings',   label: 'Settings',          icon: <Settings className="w-4 h-4" /> },
    ]
  }
];

export default function Sidebar({ activeTab, onTabChange }) {
  return (
    <aside className="w-72 hidden lg:flex flex-col bg-brand-charcoal border-r border-white/5 h-[calc(100vh-64px)] sticky top-16 overflow-y-auto">
      {/* User Quick Info */}
      <div className="p-8 pb-6">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold font-black text-sm">
            AH
          </div>
          <div>
            <p className="text-white font-bold text-sm tracking-tight">Alex Harrison</p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
              <span className="text-[9px] text-brand-gold uppercase font-black tracking-widest">Platinum Member</span>
            </div>
          </div>
        </div>

        {/* Mini completion bar */}
        <div className="mt-5 space-y-1.5">
          <div className="flex justify-between items-center">
            <span className="text-[9px] text-white/20 uppercase font-black tracking-widest">Profile</span>
            <span className="text-[9px] text-brand-gold font-black">60%</span>
          </div>
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '60%' }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="h-full bg-brand-gold rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Navigation Sections */}
      <nav className="flex-1 px-4 pb-6 space-y-6">
        {sections.map(section => (
          <div key={section.group}>
            <p className="text-[8px] text-white/15 uppercase font-black tracking-[0.3em] px-4 mb-2">{section.group}</p>
            <div className="space-y-1">
              {section.items.map(item => (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  className={`w-full flex items-center gap-3.5 px-5 py-3.5 rounded-2xl transition-all duration-300 group ${
                    activeTab === item.id
                      ? 'bg-brand-gold text-brand-black shadow-lg shadow-brand-gold/10'
                      : 'text-white/40 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className={`transition-transform duration-300 shrink-0 ${activeTab === item.id ? 'scale-110' : 'group-hover:scale-105'}`}>
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
                  {activeTab === item.id && (
                    <motion.div layoutId="sidebarPill" className="ml-auto w-1.5 h-1.5 rounded-full bg-brand-black shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-white/5 space-y-1">
        <Link to="/support"
          className="w-full flex items-center gap-3.5 px-5 py-3.5 rounded-2xl text-white/30 hover:text-white hover:bg-white/5 transition-all group">
          <HelpCircle className="w-4 h-4 group-hover:scale-105 transition-transform shrink-0" />
          <span className="text-[10px] font-black uppercase tracking-widest">Support Center</span>
        </Link>
        <button className="w-full flex items-center gap-3.5 px-5 py-3.5 rounded-2xl text-rose-500/50 hover:text-rose-500 hover:bg-rose-500/5 transition-all group">
          <LogOut className="w-4 h-4 group-hover:scale-105 transition-transform shrink-0" />
          <span className="text-[10px] font-black uppercase tracking-widest">Log Out</span>
        </button>
      </div>
    </aside>
  );
}

