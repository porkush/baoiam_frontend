// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";

// import Navbar from "./components/Home/Navbar";
// import HomePage from "./components/Home/HomePage";
// // import Signup from "./components/Auth/Signup";
// import AuthModal from "./components/Auth/AuthModal";

// import PridePage from "./components/Pride/PridePage";
// import { useEffect, useState } from "react";

// function App() {
//   const [isSignupOpen, setIsSignupOpen] = useState(false);

//   // Auto-popup after 5 minutes ONCE
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
//         {/* <Signup
//           isOpen={isSignupOpen}
//           onClose={() => setIsSignupOpen(false)}
//         /> */}
//         <AuthModal
//           isOpen={isSignupOpen}
//           onClose={() => setIsSignupOpen(false)}
//         />

//         {/* other page content here */}
//         <Routes>
//           <Route path="/" element={<HomePage />} />

//           <Route path="/pride" element={<PridePage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;








import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Home/Navbar";
import HomePage from "./components/Home/HomePage";
import PridePage from "./components/Pride/PridePage";
import AuthModal from "./components/Auth/AuthModal";
import { useEffect, useState } from "react";
import CoursePage from "./components/CoursesLayout/CoursePage";

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
      <div>
        <Navbar onSignUpClick={() => setIsSignupOpen(true)} />
        <AuthModal
          isOpen={isSignupOpen}
          onClose={() => setIsSignupOpen(false)}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pride" element={<PridePage />} />
          <Route path="/coursesLayout" element={<CoursePage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

