import React from "react";
import {
  FaWhatsapp,
  FaTiktok,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import AnimatedElement from "./AnimatedElement";

const Contact = () => {
  return (
    <section id="contact" className="py-12 pt-[120px] bg-white dark:bg-[#222]">
      <div className="container mx-auto px-6 flex flex-col justify-center items-center text-center">
        <AnimatedElement>
          <h1 className="text-4xl font-extrabold mb-8 text-gray-800 dark:text-white border-b-4 border-green-500 inline-block">
            Contactez Nous
          </h1>
        </AnimatedElement>
        {/* formulaire email */}
        <AnimatedElement>
          <div className="mt-6">
            <p className="text-lg dark:text-white mb-6">
              Vous pouvez mous envoyer un e-mail au :
              <a
                href="mailto:infoskaksetablissement@gmail.com"
                className="text-blue-600 hover:text-blue-700 flex items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <FaEnvelope size={20} className="mr-2" />
                infoskaksetablissement@gmail.com
              </a>
            </p>
          </div>
        </AnimatedElement>
        {/* service_9ph8km5 */}
        <div className="space-y-6">
          <AnimatedElement>
            <p className="text-lg dark:text-white">
              Vous pouvez nous contacter sur nos réseaux sociaux ou directement
              par téléphone.
            </p>
          </AnimatedElement>

          {/* Liens vers les réseaux sociaux */}
          <AnimatedElement>
            <div className="flex justify-center space-x-6">
              <a
                href="https://wa.me/2250708430412"
                http:target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-green-500 hover:text-green-600 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <FaWhatsapp size={25} />
              </a>
              <a
                href="https://www.tiktok.com/@kaks_etablissement?_t=ZM-8t8nq06ZhEj&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-black dark:text-white hover:text-gray-800 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <FaTiktok size={25} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100034992593374&mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-blue-700 hover:text-blue-800 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <FaFacebookF size={25} />
              </a>
              <a
                href="https://www.instagram.com/kaks.etablissement"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-pink-500 hover:text-pink-600 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <FaInstagram size={25} />
              </a>
            </div>
          </AnimatedElement>

          {/* Lien pour appel direct avec icône */}
          <AnimatedElement>
            <div className="mt-6">
              <p className="text-lg dark:text-white">
                Pour un appel direct, cliquez sur le lien ci-dessous :
                <a
                  href="tel:+2250708430412"
                  className="text-green-600 hover:text-green-700 flex items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <FaPhoneAlt size={25} className="mr-2" /> Appeler maintenant
                </a>
              </p>
            </div>
          </AnimatedElement>
        </div>
        {/* <img
          src="logo/kaks-etablissementQRCode.png"
          alt="affiche"
          className="mt-10"
        /> */}
      </div>
    </section>
  );
};

export default Contact;
