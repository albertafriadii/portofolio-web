import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";
import Portofolio from "./components/portofolio/Portofolio";
import Services from "./components/services/Services";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portofolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
