import React from "react";
import HeroSection_P from "./Herosection_P";
import StatsSection from "../Home/StatsSection";
import Footer from "../Footer/Footer";
import Contact from "../Footer/Contact";
import BlogSection from "./BlogSection";
import AmbassadorAdvice from "./AmbassadorAdvice";
import OurEvents from "./OurEvents";

const PridePage = () => {
  return (
    <div>
      <HeroSection_P />
      <StatsSection />
      <OurEvents/>
      <AmbassadorAdvice/>
      <BlogSection/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default PridePage;
