import React from "react";
import {
  FaWhatsapp,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa"; 

const Contact = () => {
  return (
    <section id="contact" className="py-12 pt-[120px] bg-white">
      <div className="container flex flex-col justify-center items-center mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contactez-nous</h2>
        <div className="space-y-6">
          <p className="text-lg">
            Vous pouvez nous contacter sur nos réseaux sociaux ou directement par
            téléphone.
          </p>

          {/* Liens vers les réseaux sociaux */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://wa.me/1234567890" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-green-500 hover:text-green-600"
            >
              <FaWhatsapp size={25} />
            </a>
            <a
              href="https://twitter.com/toncompte" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-blue-500 hover:text-blue-600"
            >
              <FaTwitter size={25} />
            </a>
            <a
              href="https://facebook.com/toncompte" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-blue-700 hover:text-blue-800"
            >
              <FaFacebookF size={25} />
            </a>
            <a
              href="https://instagram.com/toncompte" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-pink-500 hover:text-pink-600"
            >
              <FaInstagram size={25} />
            </a>
          </div>

          {/* Lien email avec icône */}
          <div className="mt-6">
            <p className="text-lg">
              Vous pouvez mous envoyer un e-mail au :{" "}
              <a
                href="mailto:tonemail@example.com"
                className="text-blue-600 hover:text-blue-700 flex items-center justify-center"
              >
                <FaEnvelope size={20} className="mr-2" /> tonemail@example.com
              </a>
            </p>
          </div>

          {/* Lien pour appel direct avec icône */}
          <div className="mt-6">
            <p className="text-lg">
              Pour un appel direct, cliquez sur le lien ci-dessous :{" "}
              <a
                href="tel:+1234567890" 
                className="text-green-600 hover:text-green-700 flex items-center justify-center"
              >
                <FaPhoneAlt size={25} className="mr-2" /> Appeler maintenant
              </a>
            </p>
          </div>
        </div>
        <img
          src="images/affiche.jpg"
          alt="affiche"
          className="h-[300px] w-[250px] mt-10"
        />
      </div>
    </section>
  );
};

export default Contact;
