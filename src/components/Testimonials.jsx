import React from "react";

const Testimonials = () => {
  const testimonials = [
    { name: "- Kone Issa", feedback: "Ce services est incroyable🌞!" },
    { name: "- Soualio Cissé", feedback: "Ma maison est propre maintenant🤟🏻." },
    {
      name: "- Sowo Maïmouna",
      feedback: "J'ai vraiment aimé l'exprérince merci🙏🏻🙏🏻",
    },
  ];

  return (
    <section id="testimonials" className="py-12 pt-[120px] bg-white">
      <h2 className="text-3xl font-bold mb-8 text-center">Avis Clients</h2>
      <div className="container mx-auto text-center px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg group"
          >
            {/* Card Image */}
            <div className="h-40 bg-gray-100 flex items-center justify-center">
              <p className="text-md font-bold text-gray-600 group-hover:scale-110 transition-transform duration-300">
                "{testimonial.feedback}"
              </p>
            </div>

            {/* Card Content */}
            <div className="p-6">
              <p className="text-gray-700">{testimonial.name}</p>
            </div>

            {/* Optional Overlay */}
            <div className="absolute inset-0 bg-green-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
