import React from "react";

const servicesDataImg = [
  {
    id: 1,
    title: "Nettoyage Industriel",
    description: "Description du service image 1.",
    type: "image",
    src: "/images/n-industi.jpg",
  },
  {
    id: 2,
    title: "Nettoyage de façade extérieures et intérieure",
    description: "Description du service image 2.",
    type: "image",
    src: "/images/n-facade.jpg",
  },
];
const servicesData = [
  {
    id: 1,
    title: "Nettoyage Résidentiel",
    src: "/videos/n-residentiel.mp4",
  },
  {
    id: 2,
    title: "Prestations Diverses",
    src: "/videos/divers.mp4",
  },
  {
    id: 3,
    title: "Désinsectisation",
    src: "/videos/desinsectisation.mp4",
  },
];

const Services = () => {
  return (
    <section className="py-12 pt-[120px] bg-white">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-8">Nos Services</h2>
        <div className="services-container grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="service-card border p-4 rounded shadow bg-gray-100"
            >
              <h3 className="text-md font-semibold mb-4">{service.title}</h3>
              <video controls className="w-full h-60 mb-2">
                <source src={service.src} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-[30px]">
          {servicesDataImg.map((service) => (
            <div
              key={service.id}
              className="border p-4 rounded shadow bg-white"
            >
              <h3 className="text-md font-semibold w-full mb-4">{service.title}</h3>
              <img
                src={service.src}
                alt={service.title}
                className="w-full h-96 object-cover rounded shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer hover:shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
