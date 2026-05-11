import { Globe, MessageCircle, Share2, Hash, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border-2 border-brand-gold flex items-center justify-center">
                <span className="text-brand-gold font-bold text-lg leading-none">E</span>
              </div>
              <span className="text-white text-2xl font-light tracking-widest uppercase">
                Elysium<span className="font-bold">Drive</span>
              </span>
            </a>
            <p className="text-white/60 leading-relaxed font-light">
              Premium self-drive car rentals offering the ultimate driving experience. Luxury, performance, and unmatched service.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-black border border-white/10 flex items-center justify-center text-white/70 hover:text-brand-gold hover:border-brand-gold/50 transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-black border border-white/10 flex items-center justify-center text-white/70 hover:text-brand-gold hover:border-brand-gold/50 transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-black border border-white/10 flex items-center justify-center text-white/70 hover:text-brand-gold hover:border-brand-gold/50 transition-colors">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-black border border-white/10 flex items-center justify-center text-white/70 hover:text-brand-gold hover:border-brand-gold/50 transition-colors">
                <Hash className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold tracking-widest uppercase mb-6 text-sm">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/collection" className="text-white/60 hover:text-brand-gold transition-colors font-light">Our Fleet</Link></li>
              <li><Link to="/support" className="text-white/60 hover:text-brand-gold transition-colors font-light">Support Center</Link></li>
              <li><Link to="/dashboard" className="text-white/60 hover:text-brand-gold transition-colors font-light">My Account</Link></li>
              <li><Link to="/auth" className="text-white/60 hover:text-brand-gold transition-colors font-light">Sign In</Link></li>
              <li><a href="#" className="text-white/60 hover:text-brand-gold transition-colors font-light">About Us</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold tracking-widest uppercase mb-6 text-sm">Support</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/support" className="text-white/60 hover:text-brand-gold transition-colors font-light">Journey Support Center</Link></li>
              <li><a href="#" className="text-white/60 hover:text-brand-gold transition-colors font-light">FAQ</a></li>
              <li><a href="#" className="text-white/60 hover:text-brand-gold transition-colors font-light">Terms of Service</a></li>
              <li><a href="#" className="text-white/60 hover:text-brand-gold transition-colors font-light">Privacy Policy</a></li>
              <li><a href="#" className="text-white/60 hover:text-brand-gold transition-colors font-light">Insurance</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold tracking-widest uppercase mb-6 text-sm">Contact Us</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex gap-4 text-white/60 font-light">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0" />
                <span>1200 Luxury Ave, Suite 100<br/>Beverly Hills, CA 90210</span>
              </li>
              <li className="flex gap-4 text-white/60 font-light">
                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex gap-4 text-white/60 font-light">
                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                <span>concierge@elysiumdrive.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm font-light">
            &copy; {new Date().getFullYear()} ElysiumDrive. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40 font-light">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
