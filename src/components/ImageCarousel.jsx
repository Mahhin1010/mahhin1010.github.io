import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs, EffectFade, Keyboard } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";

export default function ImageCarousel({ images, title, aspectRatio = "landscape" }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  if (!images || images.length === 0) return null;

  return (
    <div className="tab-content-enter">
      <div className="relative bg-surface-container-low rounded-2xl overflow-hidden shadow-xl border border-outline-variant/10 p-3 md:p-5">
        {/* Main Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Thumbs, EffectFade, Keyboard]}
          effect="fade"
          navigation
          keyboard={{ enabled: true }}
          pagination={{ clickable: true, type: "fraction" }}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          className={`w-full bg-black/5 rounded-xl mb-4 custom-swiper ${
            aspectRatio === "portrait"
              ? "aspect-[4/5] max-w-[500px] mx-auto"
              : "aspect-[16/10] md:aspect-video"
          }`}
        >
          {images.map((img, i) => (
            <SwiperSlide key={i} className="flex items-center justify-center h-full w-full">
              <img
                src={img}
                alt={`${title || "Case Study"} - Slide ${i + 1}`}
                className="max-w-full max-h-full object-contain"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbs Swiper */}
        {images.length > 1 && (
          <Swiper
            modules={[Thumbs]}
            onSwiper={setThumbsSwiper}
            spaceBetween={12}
            slidesPerView="auto"
            watchSlidesProgress
            className="w-full thumbs-slider px-1"
          >
            {images.map((img, i) => (
              <SwiperSlide 
                key={i} 
                className="!w-20 !h-20 md:!w-24 md:!h-24 rounded-lg overflow-hidden cursor-pointer border-[3px] border-transparent hover:border-primary/50 transition-all opacity-50 [&.swiper-slide-thumb-active]:opacity-100 [&.swiper-slide-thumb-active]:border-primary hover:opacity-80"
              >
                <img
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}
