import { motion } from 'framer-motion';
import { Star, ShieldCheck } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Eleanor Vance',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    review: 'The booking was effortless and the vehicle quality exceeded expectations. The Mercedes S-Class was immaculate upon delivery.',
    type: 'Luxury Collection'
  },
  {
    id: 2,
    name: 'Marcus Chen',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    review: 'Rented an SUV for a family trip. The doorstep delivery saved us so much time, and the car was in perfect condition.',
    type: 'Family SUVs'
  },
  {
    id: 3,
    name: 'Sarah Jenkins',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
    review: 'Affordable, clean, and reliable. The customer service was exceptional when I needed to extend my rental by a day.',
    type: 'Economy Cars'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-black relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-5"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/3"
          >
            <h2 className="text-sm text-brand-gold font-bold tracking-widest uppercase mb-4">Social Proof</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Trusted by <span className="font-light italic text-white/80">Drivers</span></h3>
            
            <div className="flex flex-col gap-8 mt-12">
              <div>
                <p className="text-5xl font-bold text-brand-gold mb-2">15k+</p>
                <p className="text-white/60 font-medium">Completed Trips</p>
              </div>
              <div className="w-full h-px bg-white/10"></div>
              <div>
                <p className="text-5xl font-bold text-brand-gold mb-2">4.9/5</p>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-brand-gold fill-brand-gold" />
                  ))}
                </div>
                <p className="text-white/60 font-medium">Average Rating</p>
              </div>
            </div>
          </motion.div>

          {/* Testimonial Cards */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`bg-brand-charcoal p-8 rounded-2xl border border-white/5 shadow-2xl relative ${index === 1 ? 'md:mt-12' : ''}`}
              >
                <div className="absolute top-8 right-8 text-brand-gold/20">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand-gold fill-brand-gold" />
                  ))}
                </div>
                
                <p className="text-white/80 leading-relaxed mb-8 relative z-10 font-light text-lg italic">
                  "{item.review}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover border-2 border-brand-gold/30" />
                  <div>
                    <h5 className="text-white font-bold flex items-center gap-2">
                      {item.name} <ShieldCheck className="w-4 h-4 text-green-500" />
                    </h5>
                    <p className="text-brand-gold text-sm font-medium">{item.type}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
