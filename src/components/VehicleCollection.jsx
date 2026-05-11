import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ArrowRight, Users, Briefcase, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  // ... (keep categories data)
];

export default function VehicleCollection() {
  return (
    <section id="fleet" className="py-24 bg-brand-black overflow-hidden relative">
      {/* ... (keep top divider) */}
      
      <div className="container mx-auto px-6 md:px-12 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          {/* ... (keep title) */}
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/collection" className="flex items-center gap-2 text-white/70 hover:text-brand-gold transition-colors text-sm uppercase tracking-wider font-semibold">
              View All Vehicles <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <Swiper
          // ... (keep Swiper props)
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <div className="group rounded-2xl overflow-hidden bg-brand-charcoal border border-white/5 hover:border-brand-gold/30 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                {/* ... (keep image) */}

                {/* Content */}
                <div className="p-8 relative z-20 -mt-8">
                  {/* ... (keep text) */}

                  {/* CTA */}
                  <Link to="/collection" className="block w-full py-3.5 rounded-xl border border-white/10 text-white font-semibold uppercase tracking-wider text-sm hover:bg-brand-gold hover:text-brand-black hover:border-brand-gold transition-all duration-300 text-center">
                    Select Category
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* ... (keep styles) */}
    </section>
  );
}
