import React from "react";
import AnimatedElement from "./AnimatedElement";

const About = () => {
  return (
    <section id="about" className="py-12 pt-[120px] bg-white dark:bg-[#222] ">
      <div className="container mx-auto text-center px-6">
        <AnimatedElement>
          <h1 class="text-4xl font-extrabold mb-8 text-gray-800 dark:text-white border-b-4 border-green-500 inline-block">
            A Propos
          </h1>
        </AnimatedElement>
        <div className="grid gap-8 grid-cols-1 xl:grid-cols-2">
          <AnimatedElement>
            <img
              className="rounded  transform transition-transform duration-300 hover:scale-105 border h-full dark:border-none"
              src="/images/equipe1.jpg"
              alt="notre equipe"
            />
          </AnimatedElement>
          {/* Notre Histoire */}
          <AnimatedElement>
            <div className="bg-gray-100 dark:bg-[#333] rounded shadow-md p-6 flex flex-col items-center justify-center text-center  transform transition-transform duration-300 hover:scale-105 border h-full dark:border-none">
              <h1 className="text-2xl font-bold pb-4 dark:text-white">
                Notre Histoire
              </h1>
              <p className="text-gray-700 leading-relaxed italic dark:border-none dark:text-white ">
                Une aventure depuis 2017. En 2017, animés par une vision claire
                et une volonté de faire la différence dans le secteur du
                nettoyage, la structure KAK’S ETS a été fondée. Dès le départ,
                notre objectif était simple : offrir des services de nettoyage
                professionnels, fiables et adaptés aux besoins spécifiques de
                chaque client. Nos premiers projets étaient modestes, mais notre
                engagement envers l'excellence et la satisfaction de nos clients
                a rapidement fait notre réputation. Grâce à un travail rigoureux
                et une écoute attentive, nous avons gagné la confiance de nos
                premiers partenaires, qu'il s'agisse de particuliers ou
                d'entreprises.
                <br />
                Au fil des ans, notre entreprise a évolué. Nous avons investi
                dans des équipements modernes et écologiques, et formé notre
                équipe à des techniques innovantes pour garantir des prestations
                à la hauteur des attentes les plus élevées.
              </p>
            </div>
          </AnimatedElement>

          {/* Notre Équipe */}
          <AnimatedElement>
            <div className="bg-gray-100 dark:bg-[#333]  rounded shadow-md p-6 flex flex-col items-center justify-center text-center  transform transition-transform duration-300 hover:scale-105 border h-full dark:border-none">
              <h1 className="text-2xl font-bold pb-4 dark:text-white">
                Notre Équipe
              </h1>
              <p className="text-gray-700 leading-relaxed italic dark:text-white ">
                En plaçant la satisfaction de nos clients au cœur de notre
                démarche, nous avons construit des relations solides et
                durables. Chaque projet est pour nous une nouvelle opportunité
                de démontrer notre professionnalisme et notre souci du détail.
                Aujourd'hui, forts de plusieurs années d'expérience, nous sommes
                fiers de voir notre entreprise continuer à grandir, portée par
                une équipe dévouée et des valeurs fortes : qualité, fiabilité et
                respect de l'environnement.
                <br />
                Nous regardons vers l'avenir avec confiance, prêts à relever de
                nouveaux défis et à continuer de servir nos clients avec passion
                et expertise.
              </p>
            </div>
          </AnimatedElement>

          <AnimatedElement>
            <img
              className="rounded  transform transition-transform duration-300 hover:scale-105 border h-full dark:border-none"
              src="/images/equipe2.jpg"
              alt="notre equipe"
            />
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default About;
