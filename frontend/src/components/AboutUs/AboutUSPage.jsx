import React from "react";
import TeamSection from "../Home/TeamSection.jsx";
import Footer from "../Footer/Footer";
import Contact from "../Footer/Contact";
import OurJourney from "./OurJourney.jsx";
import Header from "./Header.jsx";
import JourneySection from "./Journey.jsx";
import WhyUsSection from "./Section.jsx";
import ServicesSection from "./Service.jsx";
import EventsSection from "./Events.jsx";
const AboutUSPage = () => {
  return (
    <div>
        {/* <OurJourney/> */}
        <Header/>
        <JourneySection/>
        <WhyUsSection/>
        <ServicesSection/>
        <EventsSection/>
      <TeamSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default AboutUSPage;
