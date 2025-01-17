import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Importation des icônes React Icons

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction pour fermer le menu
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <img
          src="/logo/logo-removebg-preview.png"
          alt="my logo"
          className="h-[50px] md:h-[60px]"
        />

        {/* Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-600 text-2xl md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation Menu */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-white shadow-md md:static md:block md:shadow-none`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4 lg:space-x-6 md:justify-end">
            <li>
              <a
                href="#hero"
                onClick={closeMenu}
                className="block py-2 px-2 text-gray-600 hover:text-green-400 hover:underline transition-all duration-500"
              >
                Présentation
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={closeMenu}
                className="block py-2 px-2 text-gray-600 hover:text-green-400 hover:underline transition-all duration-500"
              >
                Àpropos
              </a>
            </li>
            <li>
              <a
                href="#products"
                onClick={closeMenu}
                className="block py-2 px-2 text-gray-600 hover:text-green-400 hover:underline transition-all duration-500"
              >
                Produits/Services
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                onClick={closeMenu}
                className="block py-2 px-2 text-gray-600 hover:text-green-400 hover:underline transition-all duration-500"
              >
                Galerie
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                onClick={closeMenu}
                className="block py-2 px-2 text-gray-600 hover:text-green-400 hover:underline transition-all duration-500"
              >
                Avis
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={closeMenu}
                className="block py-2 px-2 text-gray-600 hover:text-green-400 hover:underline transition-all duration-500"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#partners"
                onClick={closeMenu}
                className="block py-2 px-2 text-gray-600 hover:text-green-400 hover:underline transition-all duration-500"
              >
                Parténaires
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
