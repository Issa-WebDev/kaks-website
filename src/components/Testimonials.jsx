import React from "react";

const Testimonials = () => {
  const testimonials = [
    { name: "Kone Issa", feedback: "ce services est incroyable🌞!" },
    { name: "Kouassi Micheal", feedback: "Ma maison est propre maintenant🤟🏻." },
    {
      name: "Sowo Massamba",
      feedback: "J'ai vraiment aimé l'exprérince merci🙏🏻🙏🏻",
    },
  ];

  return (
    <section id="testimonials" className="py-12 pt-[120px] bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Témoignages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-[20px]">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-white rounded shadow-md">
              <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
              <h4 className="text-lg font-bold mt-4">- {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
