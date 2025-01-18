import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "- Kone Issa",
      feedback:
        "Je suis vraiment impressionné par la qualité du service ! L'équipe a été très professionnelle et rapide, et ma maison n'a jamais été aussi propre. Leur attention aux détails est incroyable. Je recommande vivement à tous ceux qui recherchent un service de nettoyage fiable et efficace !",
    },
    {
      name: "- Soualio Cissé",
      feedback:
        "Un service impeccable du début à la fin. Les agents de nettoyage étaient ponctuels, courtois et très bien équipés. Ils ont réussi à éliminer des taches que je pensais impossibles à enlever. Merci pour ce travail exceptionnel, je ferai de nouveau appel à vous sans hésiter.",
    },
    {
      name: "- Sowo Maïmouna",
      feedback:
        "J'ai fait appel à leurs services pour nettoyer mon bureau et je suis extrêmement satisfait ! L'endroit est devenu éclatant, et même l'air semble plus frais. Le personnel est professionnel et respectueux. C'est clairement le meilleur service de nettoyage de la région.",
    },
  ];

  return (
    <section id="testimonials" className="py-12 pt-[120px] bg-white">
      <h2 className="text-3xl font-bold mb-8 text-center" data-aos="fade-right">
        Avis Clients
      </h2>
      <div className="container mx-auto text-center px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            data-aos="fade-right"
            className="relative bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg group"
          >
            {/* Card Image */}
            <div className="h-40 bg-gray-100 flex items-center justify-center">
              <p className="text-md p-10 font-md italic text-gray-600 group-hover:scale-110 transition-transform duration-300 group-hover:text-sm">
                "{testimonial.feedback}"
              </p>
            </div>

            {/* Card Content */}
            <div className="p-6">
              <p className="text-gray-700 font-bold">{testimonial.name}</p>
            </div>

            {/* Optional Overlay */}
            <div className="absolute inset-0 bg-green-400 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
