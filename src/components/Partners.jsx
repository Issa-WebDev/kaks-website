import React from "react";

const Partners = () => {
  const partners = [
    { id: 1, name: "Chic Shop", logo: "/partners/p1.jpg" },
    { id: 2, name: "Te Cars Vip", logo: "/partners/p2.jpg" },
    { id: 3, name: "Continental Travaux", logo: "/partners/p3.jpg" },
    { id: 4, name: "Kira Motors", logo: "/partners/p4.jpg" },
  ];

  return (
    <section id="partners" className="py-12 pt-[120px] bg-gray-50">
      <div className="container text-center mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Nos Partenaires</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-gray-100 shadow-md rounded-lg p-6 flex items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
