import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "../ThemesContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Fonction pour fermer le menu
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white dark:bg-[#111]  shadow-md sticky top-0 z-50">
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
          className="text-gray-600 dark:text-white text-2xl lg:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation Menu */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-white dark:bg-[#111]  shadow-md lg:static lg:block lg:shadow-none`}
        >
          <ul className="flex flex-col  lg:flex-row  lg:space-x-6 lg:justify-end pr-[40px]">
            <li>
              <a
                href="#hero"
                onClick={closeMenu}
                className="block py-2 px-2 text-gray-600 dark:text-white  hover:text-green-400 hover:underline transition-all duration-500"
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={closeMenu}
                className="block py-2 px-2 text-gray-600 dark:text-white  hover:text-green-400 hover:underline transition-all duration-500"
              >
                Àpropos
              </a>
            </li>
            <li>
              <a
                href="#products"
                onClick={closeMenu}
                className="block py-2 px-2 text-gray-600 dark:text-white  hover:text-green-400 hover:underline transition-all duration-500"
              >
                Matériels
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={closeMenu}
                className="block py-2 px-2 text-gray-600 dark:text-white  hover:text-green-400 hover:underline transition-all duration-500"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                onClick={closeMenu}
                className="block py-2 px-2 text-gray-600 dark:text-white  hover:text-green-400 hover:underline transition-all duration-500"
              >
                Galerie
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                onClick={closeMenu}
                className="block py-2 px-2 text-gray-600 dark:text-white  hover:text-green-400 hover:underline transition-all duration-500"
              >
                Avis
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={closeMenu}
                className="block py-2 px-2 text-gray-600 dark:text-white  hover:text-green-400 hover:underline transition-all duration-500"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#partners"
                onClick={closeMenu}
                className="block py-2 px-2 text-gray-600 dark:text-white  hover:text-green-400 hover:underline transition-all duration-500"
              >
                Parténaires
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <button
        onClick={toggleTheme}
        className="absolute right-20 top-[1.8rem] lg:top-[2.2rem] lg:right-6 text-gray-600 dark:text-white"
      >
        {theme ? (
          <MdOutlineLightMode size={25} />
        ) : (
          <MdOutlineDarkMode size={25} />
        )}
      </button>
    </header>
  );
};

export default Header;
