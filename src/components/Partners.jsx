import React from "react";
import AnimatedElement from "./AnimatedElement";

const Partners = () => {
  const partners = [
    { id: 1, name: "Chic Shop", logo: "/partners/p1.jpg" },
    { id: 2, name: "Te Cars Vip", logo: "/partners/p2.jpg" },
    { id: 3, name: "Continental Travaux", logo: "/partners/p3.jpg" },
    { id: 4, name: "Kira Motors", logo: "/partners/p4.jpg" },
    { id: 5, name: "Madina & Moyaby", logo: "/partners/p5.jpg" },
    { id: 6, name: "La Perla", logo: "/partners/p6.jpg" },
    { id: 7, name: "Instant Chocalat", logo: "/partners/p7.jpg" },
    { id: 8, name: "cis", logo: "/partners/p8.jpg" },
  ];

  return (
    <section
      id="partners"
      className="py-12 pt-[125px]  lg:pt-[280px] lg:pb-36 bg-gray-50 dark:bg-[#111]"
    >
      <div className="container text-center mx-auto px-6">
        <AnimatedElement>
          <h1 className="text-4xl font-extrabold mb-8 text-gray-800 dark:text-white border-b-4 border-green-500 inline-block">
            Nos Parténaires
          </h1>
        </AnimatedElement>
        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {partners.map((partner) => (
            <AnimatedElement key={partner.id}>
              <div className="bg-gray-100 dark:bg-[#222] shadow-md dark:shadow-none rounded-lg p-6 flex items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out border dark:border-none">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-20 object-contain"
                />
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
