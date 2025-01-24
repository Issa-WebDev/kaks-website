// App.jsx
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Product";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Partners from "./components/Partners";
import QRCodeGenerator from "./components/QRCodeGenerator";
import ThemeProvider from "./ThemesContext";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Hero />
      <About />
      <Products />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      {/* <QRCodeGenerator url={"https://kaks-gamma.vercel.app/"} /> */}
      <Partners />
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  );
}

export default App;
