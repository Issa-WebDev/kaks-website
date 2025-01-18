import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4 text-gray-700">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Kak's Etablissement. Made by
          <a
            href="https://github.com/Issa-WebDev/Issa-WebDev.github.io"
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
