import React from "react";
import TeamSection from "../Home/TeamSection.jsx";
import Footer from "../Footer/Footer";
import Contact from "../Footer/Contact";
import OurJourney from "./OurJourney.jsx";
const AboutUSPage = () => {
  return (
    <div>
        <OurJourney/>
      <TeamSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default AboutUSPage;
