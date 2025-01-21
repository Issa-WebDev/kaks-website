import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "../ThemesContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero"); // Section active
  const { theme, toggleTheme } = useTheme();

  // Fonction pour fermer le menu
  const closeMenu = () => setIsMenuOpen(false);

  // Détecte la section visible
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "hero";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // Ajustez la valeur au besoin
        const sectionHeight = section.offsetHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="top" className="bg-white dark:bg-[#111] shadow-md sticky top-0 z-50">
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
          } absolute top-full left-0 w-full bg-white dark:bg-[#111] shadow-md lg:static lg:block lg:shadow-none`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-6 lg:justify-end pr-[40px]">
            {[
              { id: "hero", label: "Accueil" },
              { id: "about", label: "À propos" },
              { id: "products", label: "Matériels" },
              { id: "services", label: "Services" },
              { id: "gallery", label: "Galerie" },
              { id: "testimonials", label: "Avis" },
              { id: "contact", label: "Contact" },
              { id: "partners", label: "Partenaires" },
            ].map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={closeMenu}
                  className={`block py-2 px-2 text-gray-600 dark:text-white hover:text-green-500  dark:hover:text-green-500 transition-all duration-500 ${
                    activeSection === item.id
                      ? "border-b-4 border-green-500"
                      : ""
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
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
