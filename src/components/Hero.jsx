import React from "react";
import { FaChevronDown } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/equipe2.jpg')",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto px-6 flex w-full flex-col items-center text-center text-white">
        <h1
          className="text-3xl md:text-5xl font-bold text-white"
          data-aos="fade-right"
        >
          Bienvenue Chez Kak's Etablissement
        </h1>
        <p
          className="text w-full mt-[50px] rounded-lg text-gray-900 p-[30px] font-bold text-sm md:text-lg max-w-4xl transition duration-700 ease-in-out hover:scale-110 cursor-pointer"
          data-aos="fade-right"
        >
          Votre partenaire de nettoyage professionnel et dynamique.
          <span className="text-green-800 font-medium">
            KAK'S ETABLISSEMENT{" "}
          </span>
          est une entreprise de nettoyage professionnelle et dynamique basée à
          Abidjan, en Côte d'Ivoire. Nous offrons une large gamme de services de
          nettoyage, y compris le nettoyage industriel, le nettoyage
          résidentiel, le nettoyage de façades en hauteur extérieure et
          intérieure, le ponçage et le lustrage du marbre, la dératisation, la
          désinsectisation, la désinfection, la location et la vente
          d'équipements de nettoyage, l'aménagement d'espaces verts et des
          prestations diverses.
        </p>

        <a
          href="#about"
          className="flex items-center justify-center mt-10 animate-bounce"
        >
          <FaChevronDown size={40} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
