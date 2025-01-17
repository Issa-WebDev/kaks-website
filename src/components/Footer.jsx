import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4 text-gray-700">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Kak's Etablissement. Made by{" "}
          <span className="text-teal-600 font-bold italic underline">Issa webdev</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
