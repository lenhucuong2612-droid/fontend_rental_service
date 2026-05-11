import { motion } from 'framer-motion';
import { ShieldCheck, CarFront, MapPin } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: CarFront,
    title: 'Latest 2024+ Vehicles',
    description: 'Modern, clean, and fully maintained fleet. Drive the newest models with premium specifications.'
  },
  {
    id: 2,
    icon: MapPin,
    title: 'Doorstep Delivery',
    description: 'We deliver your vehicle anywhere, anytime. Your convenience is our absolute priority.'
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: 'Full Journey Insurance',
    description: 'Drive with complete peace of mind. Comprehensive coverage included with every premium rental.'
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-brand-charcoal relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm text-brand-gold font-bold tracking-widest uppercase mb-4">Why Drivers Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">The Elysium <span className="font-light italic text-white/80">Standard</span></h3>
            <p className="text-white/60 text-lg">We redefine self-drive rentals with an uncompromising focus on quality, transparency, and luxury service.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-brand-black p-10 rounded-2xl border border-white/5 hover:border-brand-gold/40 transition-colors duration-500 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-charcoal border border-white/10 flex items-center justify-center mb-8 group-hover:bg-brand-gold/10 group-hover:border-brand-gold/30 transition-colors">
                <feature.icon className="w-8 h-8 text-brand-gold" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-gold transition-colors">{feature.title}</h4>
              <p className="text-white/60 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
