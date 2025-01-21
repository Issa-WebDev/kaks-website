import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-[#222] py-4 text-gray-700 dark:text-white">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Kak's Etablissement. Made by
          <a
            href="https://issa-webdev.github.io"
            target="_blank"
            className="text-teal-600 hover:text-teal-400 font-bold italic underline"
          >
            {" "}
            Issa webdev
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
