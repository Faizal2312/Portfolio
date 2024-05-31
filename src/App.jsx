import React from "react";
import "./app.scss";
import Navbar from "./Components/navbar/Navbar";
import Parallex from "./Components/parallex/Parallex";
import Hero from "./Components/hero/Hero";
import Portfolio from "./Components/portfolio/Portfolio";
import Contact from "./Components/contact/Contact";

const App = () => {
  return (
    <div>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>

      <section id="Skills">
        <Parallex type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
      {/* <Test /> */}
    </div>
  );
};

export default App;
