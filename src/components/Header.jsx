import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-brand-charcoal/95 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full border-2 border-brand-gold flex items-center justify-center group-hover:bg-brand-gold transition-colors duration-300">
            <span className="text-brand-gold group-hover:text-brand-black font-bold text-lg leading-none">E</span>
          </div>
          <span className="text-white text-2xl font-light tracking-widest uppercase group-hover:text-brand-gold transition-colors duration-300">
            Elysium<span className="font-bold">Drive</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/collection" className="text-white/80 hover:text-brand-gold text-sm uppercase tracking-wider font-medium transition-colors">
            Fleet
          </Link>
          <Link to="/trip" className="flex items-center gap-2 text-white/80 hover:text-brand-gold text-sm uppercase tracking-wider font-medium transition-colors">
            My Trip
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          </Link>
          <Link to="/support" className="flex items-center gap-2 text-white/80 hover:text-brand-gold text-sm uppercase tracking-wider font-medium transition-colors">
            Support
          </Link>
          <Link to="/dashboard" className="text-white/80 hover:text-brand-gold text-sm uppercase tracking-wider font-medium transition-colors">
            My Account
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/auth" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
            <User className="w-5 h-5" />
            <span className="text-sm font-medium">Log In</span>
          </Link>
          <Link to="/collection" className="bg-brand-gold text-brand-black px-6 py-2.5 rounded-full font-semibold uppercase text-sm tracking-wide hover:bg-brand-gold-light hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300 transform hover:-translate-y-0.5">
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={mobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto", display: "block" },
          closed: { opacity: 0, height: 0, transitionEnd: { display: "none" } }
        }}
        className="md:hidden bg-brand-charcoal overflow-hidden"
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          <Link to="/collection" className="text-white/80 hover:text-brand-gold text-lg uppercase tracking-wider font-medium transition-colors border-b border-white/10 pb-4" onClick={() => setMobileMenuOpen(false)}>
            Fleet
          </Link>
          <Link to="/trip" className="flex items-center justify-between text-white/80 hover:text-brand-gold text-lg uppercase tracking-wider font-medium transition-colors border-b border-white/10 pb-4" onClick={() => setMobileMenuOpen(false)}>
            My Trip
            <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-black tracking-widest border border-emerald-500/20">ACTIVE</span>
          </Link>
          <Link to="/support" className="text-white/80 hover:text-brand-gold text-lg uppercase tracking-wider font-medium transition-colors border-b border-white/10 pb-4" onClick={() => setMobileMenuOpen(false)}>
            Support
          </Link>
          <Link to="/dashboard" className="text-white/80 hover:text-brand-gold text-lg uppercase tracking-wider font-medium transition-colors border-b border-white/10 pb-4" onClick={() => setMobileMenuOpen(false)}>
            My Account
          </Link>
          <Link to="/auth" className="flex items-center gap-2 text-white/80 hover:text-brand-gold transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
            <User className="w-5 h-5" />
            <span className="text-lg font-medium">Log In</span>
          </Link>
          <Link to="/collection" className="bg-brand-gold text-brand-black px-6 py-4 rounded-lg font-semibold uppercase tracking-wide w-full mt-4 text-center" onClick={() => setMobileMenuOpen(false)}>
            Book Now
          </Link>
        </div>
      </motion.div>
    </header>
  );
}
