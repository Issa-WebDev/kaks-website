import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 

// Génération dynamique de 30 images
const images = Array.from(
  { length: 30 },
  (_, i) => `/images/gallery${i + 1}.jpg`
);

const Gallery = () => {
  const swiperRef = useRef(null); 

  const goToPrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section id="gallery" className="py-12 pt-[120px] bg-white">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-8" data-aos="fade-right">
          Gallerie d'images
        </h2>

        <div className="relative">
          <Swiper
            ref={swiperRef}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {images.map((src, index) => (
              <SwiperSlide key={index} data-aos="fade-right">
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-64 object-cover rounded shadow-md transform transition-transform duration-300 hover:scale-95 cursor-pointer hover:shadow-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Bouton "Précédent" */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-4 rounded-full shadow-md hover:bg-gray-700 z-10"
            onClick={goToPrevSlide}
          >
            &lt;
          </button>

          {/* Bouton "Suivant" */}
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-4 rounded-full shadow-md hover:bg-gray-700 z-10"
            onClick={goToNextSlide}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
