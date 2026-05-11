import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import CarCard from '../collection/CarCard';
import { carsData } from '../../data/cars';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';

export default function RelatedVehicles({ currentId, brand }) {
  const related = carsData
    .filter(c => c.id !== currentId && (c.brand === brand || c.id < 5))
    .slice(0, 6);

  return (
    <section className="py-24 border-t border-white/5">
      <div className="flex items-center justify-between mb-12">
        <h3 className="text-3xl font-bold text-white uppercase tracking-tighter">
          You May Also <span className="text-brand-gold italic">Like</span>
        </h3>
        
        <div className="flex gap-3">
          <button className="related-prev w-12 h-12 rounded-xl bg-brand-charcoal border border-white/10 flex items-center justify-center text-white/50 hover:text-brand-gold hover:border-brand-gold transition-all">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="related-next w-12 h-12 rounded-xl bg-brand-charcoal border border-white/10 flex items-center justify-center text-white/50 hover:text-brand-gold hover:border-brand-gold transition-all">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          prevEl: '.related-prev',
          nextEl: '.related-next',
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 }
        }}
      >
        {related.map(car => (
          <SwiperSlide key={car.id}>
            <CarCard car={car} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
