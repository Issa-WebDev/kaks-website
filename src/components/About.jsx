import React from "react";

const About = () => {
  return (
    <section id="about" className="py-12 pt-[120px] bg-white">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-8">À Propos</h2>
        <div className="grid gap-8 grid-cols-1 xl:grid-cols-2">
          <img
            className="rounded  transform transition-transform duration-300 hover:scale-105"
            src="/images/equipe1.jpg"
            alt="notre equipe"
          />
          {/* Notre Histoire */}
          <div className="bg-gray-100 rounded shadow-md p-6 flex flex-col items-center justify-center text-center  transform transition-transform duration-300 hover:scale-105">
            <h1 className="text-2xl font-bold pb-4">Notre Histoire</h1>
            <p className="text-gray-700 leading-relaxed">
              Une aventure depuis 2017. En 2017, animés par une vision claire et
              une volonté de faire la différence dans le secteur du nettoyage,
              la structure KAK’S ETS a été fondée. Dès le départ, notre objectif
              était simple : offrir des services de nettoyage professionnels,
              fiables et adaptés aux besoins spécifiques de chaque client. Nos
              premiers projets étaient modestes, mais notre engagement envers
              l'excellence et la satisfaction de nos clients a rapidement fait
              notre réputation. Grâce à un travail rigoureux et une écoute
              attentive, nous avons gagné la confiance de nos premiers
              partenaires, qu'il s'agisse de particuliers ou d'entreprises.
              <br />
              Au fil des ans, notre entreprise a évolué. Nous avons investi dans
              des équipements modernes et écologiques, et formé notre équipe à
              des techniques innovantes pour garantir des prestations à la
              hauteur des attentes les plus élevées.
            </p>
          </div>

          {/* Notre Équipe */}
          <div className="bg-gray-100 rounded shadow-md p-6 flex flex-col items-center justify-center text-center  transform transition-transform duration-300 hover:scale-105">
            <h1 className="text-2xl font-bold pb-4">Notre Équipe</h1>
            <p className="text-gray-700 leading-relaxed">
              En plaçant la satisfaction de nos clients au cœur de notre
              démarche, nous avons construit des relations solides et durables.
              Chaque projet est pour nous une nouvelle opportunité de démontrer
              notre professionnalisme et notre souci du détail. Aujourd'hui,
              forts de plusieurs années d'expérience, nous sommes fiers de voir
              notre entreprise continuer à grandir, portée par une équipe
              dévouée et des valeurs fortes : qualité, fiabilité et respect de
              l'environnement.
              <br />
              Nous regardons vers l'avenir avec confiance, prêts à relever de
              nouveaux défis et à continuer de servir nos clients avec passion
              et expertise.
            </p>
          </div>

          <img
            className="rounded  transform transition-transform duration-300 hover:scale-105"
            src="/images/equipe2.jpg"
            alt="notre equipe"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
