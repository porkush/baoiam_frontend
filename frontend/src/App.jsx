import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Home/Navbar";
import HomePage from "./components/Home/HomePage";
import PridePage from "./components/Pride/PridePage";
import AuthModal from "./components/Auth/AuthModal";
import { useEffect, useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
import DataAnalysisPage from "./components/DataAnalysis/DataAnalysisPage";
import DataSciencePage from "./components/DataScience/DataSciencePage";
import Contact from "./components/Footer/Contact";
import ContactForm from "./Pages/ContactForm";
import TermsAndConditions from "./Pages/TermsAndConditions";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import DM_Page from "./components/DigitalMarketing/DM_Page";
import SD_Page from "./components/SoftwareDevelopment/SD_Page";
import RefundPolicy from "./Pages/RefundPolicy";
import BlogSectionPage from "./components/Blogs/BlogSectionPage";
import AboutUSPage from "./Pages/AboutUs/AboutUSPage";
import { ContactRoundIcon } from "lucide-react";
import ContactUs from "./Pages/ContactUs";
import ReferEarnPage from "./Pages/Refer&Earn/ReferEarnPage";
import GcepPage from "./Pages/GCEP/GcepPage";
import Instructor from "./Pages/Instructor/Instructor";
import Pap_Page from "./Pages/PAP/Pap_Page";


function App() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const hasShown = localStorage.getItem("signupModalShown");
    if (!hasShown) {
      const timer = setTimeout(() => {
        setIsSignupOpen(true);
        localStorage.setItem("signupModalShown", "true");
      }, 5 * 60 * 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  //success callback for signup
  const handleAuthSuccess = () => {
    setIsLoggedIn(true);
    setIsSignupOpen(false);
  };

  //logout function
  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsSignupOpen(true); 
  };

  return (
    <Router>
        <ScrollToTop />
      <div>
        <Routes>
          <Route path="/PAP" element={<Pap_Page/>} />
          <Route path="/GCEP" element={<GcepPage/>} />
          <Route path="/instructor" element={<Instructor/>} />
          <Route path="/blogs" element={<BlogSectionPage/>} />
          <Route path="/aboutUs" element={<AboutUSPage/>} />
          <Route path="/DataAnalysis" element={<DataAnalysisPage />} />
          <Route path="/DigitalMarketing" element={<DM_Page />} />
          <Route path="/SoftwareDevelopment" element={<SD_Page />} />
          <Route path="/DataScience" element={<DataSciencePage />} />
          <Route path="*" element={
            <>
              <Navbar onSignUpClick={() => setIsSignupOpen(true)} />
              <AuthModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/pride" element={<PridePage />} />
                <Route path="/terms&conditions" element={<TermsAndConditions/>} />
                <Route path="/Privacy&Policy" element={<PrivacyPolicy/>} />
                <Route path="/refundPolicy" element={<RefundPolicy/>} />
                <Route path="/contact_us" element={<ContactUs/>} />
                <Route path="/refer&earn" element={<ReferEarnPage/>} />
                
           
                
              </Routes>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;