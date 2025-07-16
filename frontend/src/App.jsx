// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";

// import Navbar from "./components/Home/Navbar";
// import HomePage from "./components/Home/HomePage";
// import PridePage from "./components/Pride/PridePage";
// import AuthModal from "./components/Auth/AuthModal";
// import { useEffect, useState } from "react";
// import CoursePage from "./components/CoursesLayout/CoursePage";

// function App() {
//   const [isSignupOpen, setIsSignupOpen] = useState(false);

//   useEffect(() => {
//     const hasShown = localStorage.getItem("signupModalShown");
//     if (!hasShown) {
//       const timer = setTimeout(() => {
//         setIsSignupOpen(true);
//         localStorage.setItem("signupModalShown", "true");
//       }, 5 * 60 * 1000);
//       return () => clearTimeout(timer);
//     }
//   }, []);

//   return (
//     <Router>
//       <div>
//         <Navbar onSignUpClick={() => setIsSignupOpen(true)} />
//         <AuthModal
//           isOpen={isSignupOpen}
//           onClose={() => setIsSignupOpen(false)}
//         />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/pride" element={<PridePage />} />
//           <Route path="/DataScience" element={<CoursePage/>}/>
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;













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


function App() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);

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

  return (
    <Router>
        <ScrollToTop />
      <div>
        <Routes>
          <Route path="/DataAnalysis" element={<DataAnalysisPage />} />
          <Route path="/DataScience" element={<DataSciencePage />} />
          <Route path="*" element={
            <>
              <Navbar onSignUpClick={() => setIsSignupOpen(true)} />
              <AuthModal isOpen={isSignupOpen} onClose={() => setIsSignupOpen(false)} />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/pride" element={<PridePage />} />
                <Route path="/pride2" element={<ContactForm/>} />
              </Routes>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;