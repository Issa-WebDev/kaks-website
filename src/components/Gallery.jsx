import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import AnimatedElement from "./AnimatedElement";

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
    <section id="gallery" className="py-12 pt-[120px] bg-white dark:bg-[#222]">
      <div className="container mx-auto text-center px-6">
        <AnimatedElement>
          <h1 className="text-4xl font-extrabold mb-8 text-gray-800 dark:text-white border-b-4 border-green-500 inline-block">
            Gallerie D'Images
          </h1>
        </AnimatedElement>

        <AnimatedElement>
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
                <SwiperSlide key={index}>
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
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black dark:bg-white text-white dark:text-black p-4 rounded-full shadow-md hover:bg-gray-700 z-10"
              onClick={goToPrevSlide}
            >
              &lt;
            </button>

            {/* Bouton "Suivant" */}
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black  dark:bg-white dark:text-black text-white p-4 rounded-full shadow-md hover:bg-gray-700 z-10"
              onClick={goToNextSlide}
            >
              &gt;
            </button>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Gallery;
