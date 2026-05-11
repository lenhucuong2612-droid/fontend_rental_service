import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Star, MessageCircle, LayoutDashboard, History, Heart,
  Ticket, FileText, User, Settings as SettingsIcon
} from 'lucide-react';

import Sidebar from '../components/dashboard/Sidebar';
import Overview from '../components/dashboard/Overview';
import RentalHistory from '../components/dashboard/RentalHistory';
import Favorites from '../components/dashboard/Favorites';
import Rewards from '../components/dashboard/Rewards';
import SavedDocuments from '../components/dashboard/SavedDocuments';
import PersonalInfo from '../components/dashboard/PersonalInfo';
import Addresses from '../components/dashboard/Addresses';
import Billing from '../components/dashboard/Billing';
import SecurityPanel from '../components/dashboard/SecurityPanel';
import Settings from '../components/dashboard/Settings';

const mobileNav = [
  { id: 'overview',  label: 'Home',    icon: <LayoutDashboard className="w-5 h-5" /> },
  { id: 'history',   label: 'Trips',   icon: <History className="w-5 h-5" /> },
  { id: 'rewards',   label: 'Rewards', icon: <Ticket className="w-5 h-5" /> },
  { id: 'documents', label: 'Docs',    icon: <FileText className="w-5 h-5" /> },
  { id: 'profile',   label: 'Profile', icon: <User className="w-5 h-5" /> },
];

const tabs = {
  overview:  <Overview />,
  history:   <RentalHistory />,
  favorites: <Favorites />,
  rewards:   <Rewards />,
  documents: <SavedDocuments />,
  profile:   <PersonalInfo />,
  addresses: <Addresses />,
  billing:   <Billing />,
  security:  <SecurityPanel />,
  settings:  <Settings />,
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-brand-black min-h-screen selection:bg-brand-gold selection:text-brand-black">
      {/* Top Nav Bar */}
      <header className="h-16 sticky top-0 z-50 bg-brand-black/80 backdrop-blur-2xl border-b border-white/5 flex items-center justify-between px-6 md:px-12">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-brand-gold flex items-center justify-center text-brand-black shadow-lg shadow-brand-gold/20">
            <Star className="w-4 h-4 fill-current" />
          </div>
          <span className="text-base font-black text-white uppercase tracking-tighter hidden md:block">
            Elysium <span className="text-brand-gold italic">Drive</span>
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/support" className="relative w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-white border border-white/5 hover:border-white/10 transition-all">
            <MessageCircle className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-brand-gold"></span>
          </Link>
          <div className="w-9 h-9 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold font-black text-xs">AH</div>
        </div>
      </header>

      <div className="flex">
        {/* Desktop Sidebar */}
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-10 pb-32 lg:pb-10 min-h-[calc(100vh-64px)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.25 }}
            >
              {tabs[activeTab]}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Mobile Bottom Nav */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-brand-black/95 backdrop-blur-2xl border-t border-white/10">
        <div className="flex items-center justify-around px-2 py-3">
          {mobileNav.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all relative ${
                activeTab === item.id ? 'text-brand-gold' : 'text-white/25'
              }`}
            >
              {item.icon}
              <span className="text-[7px] font-black uppercase tracking-widest">{item.label}</span>
              {activeTab === item.id && (
                <motion.div layoutId="mobileActivePill" className="absolute -bottom-1 w-4 h-0.5 rounded-full bg-brand-gold" />
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Floating Support Button */}
      <Link
        to="/support"
        className="fixed bottom-24 lg:bottom-8 right-6 z-40 bg-brand-charcoal border border-white/10 text-white px-5 py-3.5 rounded-2xl shadow-2xl hover:border-brand-gold/20 transition-all group flex items-center gap-3"
      >
        <MessageCircle className="w-4 h-4 text-brand-gold group-hover:scale-110 transition-transform" />
        <span className="text-[9px] font-black uppercase tracking-widest">Need Help?</span>
      </Link>
    </div>
  );
}
