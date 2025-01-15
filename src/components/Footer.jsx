import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-500 py-4 text-white">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Kak's Etablissement. Made by Issa webdev.</p>
      </div>
    </footer>
  );
};

export default Footer;
