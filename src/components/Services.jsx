import React from "react";
import AnimatedElement from "./AnimatedElement";

const servicesDataImg = [
  {
    id: 1,
    title: "Nettoyage Industriel",
    src: "/images/industriel.jpg",
  },
  {
    id: 2,
    title: "Nettoyage de façade extérieure et intérieure",
    src: "/images/facade.jpg",
  },
  {
    id: 3,
    title: "Nettoyage Particulier",
    src: "/images/residentiel.jpg",
  },
  {
    id: 4,
    title: "Désinfection - Désinsectisation",
    src: "/images/dd.jpg",
  },
  {
    id: 5,
    title: "Ponçage et lustrage du Mabre",
    src: "/images/ponçage.jpg",
  },
  {
    id: 6,
    title: "Prestation Diverses",
    src: "/images/p-divers.jpg",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-12 pt-[120px] bg-white dark:bg-[#222]">
      <div className="container mx-auto text-center px-6">
        <AnimatedElement>
          <h1 className="text-4xl font-extrabold mb-8 text-gray-800 dark:text-white border-b-4 border-green-500 inline-block">
            Nos Services
          </h1>
        </AnimatedElement>
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3  gap-6 pt-[30px]">
          {servicesDataImg.map((service) => (
            <AnimatedElement key={service.id}>
              <div className="border dark:border-none p-4 rounded shadow bg-white dark:bg-[#333] transform transition-transform duration-300 hover:scale-105 cursor-pointer group-hover:shadow-lg">
                <img
                  src={service.src}
                  alt={service.title}
                  className="w-full h-64 object-cover rounded shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer hover:shadow-lg"
                />
                <h3 className="text-lg dark:text-white font-semibold pt-5 w-full mb-4">
                  {service.title}
                </h3>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
