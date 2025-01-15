import React from "react";
import { FaChevronDown } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/banner2.avif')",
        backgroundSize: "cover",
      }}
    >
      <div className="flex w-full flex-col items-center text-center text-white px-4 md:px-10">
        <h1 className="text-3xl md:text-5xl font-bold">
          Bienvenue Chez Kak's Etablissement
        </h1>
        <p className="text w-full mt-[50px] rounded-lg text-gray-900 p-[30px] font-bold text-sm md:text-lg max-w-4xl">
          Votre partenaire de nettoyage professionnel et dynamique.{" "}
          <span className="text-green-600 font-bold">KAK'S ETABLISSEMENT</span>{" "}
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
