import React from "react";
import {
  FaWhatsapp,
  FaTiktok,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-12 pt-[120px] bg-white">
      <div className="container mx-auto px-6 flex flex-col justify-center items-center text-center">
        <h2 className="text-3xl font-bold mb-8" data-aos="fade-right">
          Contactez-nous
        </h2>
        <div className="space-y-6">
          <p className="text-lg" data-aos="fade-right">
            Vous pouvez nous contacter sur nos réseaux sociaux ou directement
            par téléphone.
          </p>

          {/* Liens vers les réseaux sociaux */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://wa.me/2250708430412"
              http:target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-green-500 hover:text-green-600 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              data-aos="fade-right"
            >
              <FaWhatsapp size={25} />
            </a>
            <a
              href="https://www.tiktok.com/@kaks_etablissement?_t=ZM-8t8nq06ZhEj&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-black hover:text-gray-800 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              data-aos="fade-right"
            >
              <FaTiktok size={25} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100034992593374&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-blue-700 hover:text-blue-800 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              data-aos="fade-right"
            >
              <FaFacebookF size={25} />
            </a>
            <a
              href="https://www.instagram.com/kaks.etablissement"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-pink-500 hover:text-pink-600 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              data-aos="fade-right"
            >
              <FaInstagram size={25} />
            </a>
          </div>

          {/* Lien email avec icône */}
          <div className="mt-6">
            <p className="text-lg" data-aos="fade-right">
              Vous pouvez mous envoyer un e-mail au :
              <a
                href="mailto:infoskaksetablissement@gmail.com"
                className="text-blue-600 hover:text-blue-700 flex items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                data-aos="fade-right"
              >
                <FaEnvelope size={20} className="mr-2" />
                infoskaksetablissement@gmail.com
              </a>
            </p>
          </div>

          {/* Lien pour appel direct avec icône */}
          <div className="mt-6">
            <p className="text-lg" data-aos="fade-right">
              Pour un appel direct, cliquez sur le lien ci-dessous :
              <a
                href="tel:+2250708430412"
                className="text-green-600 hover:text-green-700 flex items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                data-aos="fade-right"
              >
                <FaPhoneAlt size={25} className="mr-2" /> Appeler maintenant
              </a>
            </p>
          </div>
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
