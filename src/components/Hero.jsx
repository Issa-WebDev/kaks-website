import React from "react";
import { FaChevronDown } from "react-icons/fa";
import AnimatedElement from "./AnimatedElement";

const Hero = () => {
  return (
    <AnimatedElement>
      <section
        id="hero"
        className="relative bg-cover bg-center bg-no-repeat flex items-center justify-center w-full h-screen "
        style={{
          backgroundImage: "url('/images/equipe2.jpg')",
          backgroundSize: "cover",
        }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-6 flex w-full flex-col items-center text-center text-white">
          <AnimatedElement>
            <h1 className="text-3xl lg:text-5xl font-extrabold dark:text-white border-b-4 border-green-500 inline-block">
              Bienvenue Chez <span className="text-green-500">Kak's</span>{" "}
              Etablissement
            </h1>
          </AnimatedElement>
          <AnimatedElement>
            <p className="text w-full mt-[50px] rounded-lg dark:bg-[#111] text-gray-900 dark:text-gray-200 p-[30px] font-bold text-sm md:text-lg max-w-4xl transition duration-700 ease-in-out hover:scale-110 cursor-pointer">
              Votre partenaire de nettoyage professionnel et industriel.
              <span className="text-green-800 dark:text-green-400 font-bold">
                {" "}
                KAK'S ETABLISSEMENT{" "}
              </span>
              est une entreprise de nettoyage professionnelle et dynamique basée
              à Abidjan, en Côte d'Ivoire. Nous offrons une large gamme de
              services de nettoyage, y compris le nettoyage industriel, le
              nettoyage particulier, le nettoyage de façades en hauteur
              extérieure et intérieure, le ponçage et le lustrage du marbre, la
              dératisation, la désinsectisation, la désinfection, la location et
              la vente d'équipements de nettoyage, l'aménagement d'espaces verts
              et de prestations diverses.
            </p>
          </AnimatedElement>

          <AnimatedElement>
            <a
              href="#about"
              className="flex items-center justify-center mt-10 animate-bounce"
            >
              <FaChevronDown size={40} />
            </a>
          </AnimatedElement>
        </div>
      </section>
    </AnimatedElement>
  );
};

export default Hero;
