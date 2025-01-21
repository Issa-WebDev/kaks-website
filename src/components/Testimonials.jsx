import React from "react";
import AnimatedElement from "./AnimatedElement";

const Testimonials = () => {
  const testimonials = [
    {
      name: "- Soualio Cissé",
      feedback: "Ma maison est irréprochables , Merci Kak´s",
    },
    {
      name: "- Marie Ange Kouassi",
      feedback:
        "Mes bureaux sont  Neufs grâce à la minutie de kak´s Établissement!",
    },
    {
      name: "- Sowo Maïmouna",
      feedback: "Vraiment ya rien à dire c´est Zô",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-12 pt-[120px] dark:bg-[#222] text-center bg-white"
    >
      <AnimatedElement>
        <h1 class="text-4xl  font-extrabold mb-8 text-gray-800 dark:text-white border-b-4 border-green-500 inline-block">
          Avis Clients
        </h1>
      </AnimatedElement>
      <div className="container mx-auto text-center px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <AnimatedElement>
            <div
              key={index}
              data-aos="fade-right"
              className="relative bg-white dark:bg-[#111] rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg group border dark:border-none"
            >
              {/* Card Image */}
              <div className="h-40 bg-gray-100 dark:bg-[#333] flex items-center justify-center">
                <p className="text-md p-10 font-md italic text-gray-600 dark:text-white group-hover:scale-110 transition-transform duration-300 group-hover:text-sm">
                  "{testimonial.feedback}"
                </p>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <p className="text-gray-700 dark:text-white font-bold">
                  {testimonial.name}
                </p>
              </div>

              {/* Optional Overlay */}
              <div className="absolute inset-0 bg-green-400 dark:bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            </div>
          </AnimatedElement>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
