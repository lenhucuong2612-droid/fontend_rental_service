import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, EffectFade } from 'swiper/modules';
import { Play, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';

export default function VehicleGallery({ images, name }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main Gallery */}
      <div className="relative group">
        <Swiper
          style={{
            '--swiper-navigation-color': '#D4AF37',
            '--swiper-pagination-color': '#D4AF37',
          }}
          spaceBetween={10}
          effect={'fade'}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[FreeMode, Navigation, Thumbs, EffectFade]}
          onSlideChange={(swiper) => setActiveImage(swiper.activeIndex)}
          className="rounded-3xl overflow-hidden aspect-[16/10] bg-brand-charcoal border border-white/10"
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-full cursor-zoom-in" onClick={() => setIsLightboxOpen(true)}>
                <img 
                  src={img} 
                  alt={`${name} - View ${idx + 1}`} 
                  className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105" 
                />
                {/* Video Placeholder for first slide maybe? */}
                {idx === 0 && (
                  <div className="absolute inset-0 bg-brand-black/20 flex items-center justify-center">
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="w-20 h-20 bg-brand-gold/90 rounded-full flex items-center justify-center text-brand-black shadow-2xl backdrop-blur-sm"
                    >
                      <Play className="w-8 h-8 fill-brand-black ml-1" />
                    </motion.div>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Floating Controls */}
        <button 
          onClick={() => setIsLightboxOpen(true)}
          className="absolute bottom-6 right-6 z-20 bg-brand-black/60 backdrop-blur-md p-3 rounded-xl border border-white/20 text-white/80 hover:text-white transition-all opacity-0 group-hover:opacity-100"
        >
          <Maximize2 className="w-5 h-5" />
        </button>
      </div>

      {/* Thumbnails */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={15}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumbs-swiper h-24 md:h-32"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx} className="cursor-pointer">
            <div className={`relative w-full h-full rounded-2xl overflow-hidden border-2 transition-all duration-300 ${activeImage === idx ? 'border-brand-gold scale-95 shadow-lg shadow-brand-gold/10' : 'border-transparent opacity-50 grayscale hover:grayscale-0 hover:opacity-100'}`}>
              <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Lightbox Modal (Simplified) */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-brand-black/95 flex items-center justify-center p-6 md:p-12"
          >
            <button 
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            >
              <Maximize2 className="w-8 h-8 rotate-45" />
            </button>
            
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <img src={images[activeImage]} alt="Large view" className="w-full h-full object-contain bg-brand-black" />
            </motion.div>

            {/* Modal Controls */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-6">
              <span className="text-white/40 text-sm font-bold uppercase tracking-widest">{activeImage + 1} / {images.length}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{__html: `
        .swiper-button-next, .swiper-button-prev {
          width: 50px !important;
          height: 50px !important;
          background: rgba(0,0,0,0.5) !important;
          backdrop-filter: blur(8px) !important;
          border-radius: 15px !important;
          border: 1px border rgba(255,255,255,0.1) !important;
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 20px !important;
          font-weight: bold !important;
        }
      `}} />
    </div>
  );
}
