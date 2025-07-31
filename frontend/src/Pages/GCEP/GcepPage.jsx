import React from "react";
import Header from "./Header.jsx";
import Contact from "../../components/Footer/Contact.jsx";
import Partner from "../../components/Home/Partner"
import WhyJoinGCEP from "./WhyJoinGCEP.jsx";
import JoinGCEP from "./JoinGCEP.jsx";
import Contact_Gcep from "./Contact_Gcep.jsx";

const GcepPage = () => {
  return (
    <div>
        <Header/>
        <JoinGCEP/>
        <Partner/>
       <WhyJoinGCEP/>
       <Contact_Gcep/>
       <Contact/>
       <Footer/>
    </div>
  );
};

export default GcepPage;