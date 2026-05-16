import { motion } from 'framer-motion';
import { Download, Star, MapPin, Calendar, RefreshCw, ChevronRight, Search } from 'lucide-react';

import { useEffect, useState } from 'react';
import { apiService } from '../../services/mockApi';

export default function RentalHistory() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const data = await apiService.getTripHistory();
        setHistory(data);
      } catch (error) {
        console.error("Failed to fetch history:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchHistory();
  }, []);
  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h2 className="text-3xl font-black text-white uppercase tracking-tight">Rental <span className="text-brand-gold italic">History</span></h2>
          <p className="text-white/40 text-sm font-light mt-2 tracking-wide uppercase tracking-[0.2em]">Track and rebook your favorite journeys</p>
        </div>

        <div className="flex gap-3">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-brand-gold transition-colors" />
            <input
              type="text"
              placeholder="Search trips..."
              className="bg-white/5 border border-white/5 rounded-xl py-3 pl-10 pr-4 text-white text-xs focus:outline-none focus:border-brand-gold/30 transition-all placeholder:text-white/10"
            />
          </div>
          <button className="bg-white/5 border border-white/10 text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">Filter</button>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-brand-charcoal rounded-[40px] border border-white/5 p-8 h-48 animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {history.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-brand-charcoal rounded-[40px] border border-white/5 p-8 flex flex-col xl:flex-row gap-8 items-center group hover:border-brand-gold/20 transition-all"
            >
              <div className="w-full xl:w-64 h-40 shrink-0 relative overflow-hidden rounded-3xl">
                <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.name} />
                <div className="absolute top-3 left-3 bg-brand-black/60 backdrop-blur-md text-emerald-500 px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest border border-emerald-500/20">
                  Completed
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h4 className="text-xl font-black text-white uppercase tracking-tight">{item.name}</h4>
                    <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mt-1">{item.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-black text-xl tracking-tighter">{item.amount}</p>
                    <p className="text-[9px] text-white/30 uppercase font-bold tracking-widest">Total Paid</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/5">
                  <div className="flex gap-3">
                    <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
                    <div>
                      <p className="text-white/40 text-[9px] uppercase font-bold tracking-widest mb-0.5">Location</p>
                      <p className="text-white text-[11px] font-bold uppercase">{item.location}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Star className="w-4 h-4 text-brand-gold shrink-0" />
                    <div>
                      <p className="text-white/40 text-[9px] uppercase font-bold tracking-widest mb-0.5">Rating</p>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-brand-gold text-brand-gold" />)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full xl:w-auto flex flex-row xl:flex-col gap-3">
                <button className="flex-1 xl:w-48 bg-brand-gold text-brand-black py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg shadow-brand-gold/10 hover:bg-brand-gold-light transition-all flex items-center justify-center gap-2 group/btn">
                  <RefreshCw className="w-4 h-4 group-hover/btn:rotate-180 transition-transform duration-700" />
                  Book Again
                </button>
                <button className="flex-1 xl:w-48 bg-white/5 border border-white/10 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Invoice
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
