// App.jsx
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Product";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Partners from "./components/Partners";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Products />
      <Gallery />
      <Testimonials />
      <Contact />
      <Partners />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
