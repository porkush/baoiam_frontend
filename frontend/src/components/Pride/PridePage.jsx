import React from "react";
import HeroSection_P from "./Herosection_P";
import StatsSection from "../Home/StatsSection";
import Footer from "../Footer/Footer";
import Contact from "../Footer/Contact";

const PridePage = () => {
  return (
    <div>
      <HeroSection_P />
      <StatsSection />
      <Contact/>
      <Footer/>
    </div>
  );
};

export default PridePage;
