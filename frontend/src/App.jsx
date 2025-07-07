import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Home/Navbar';
import Footer from './components/Footer/Footer';
import HeroSection from './components/Home/HeroSection';
import StatsSection from './components/Home/StatsSection';
import FeaturedCourses from './components/Home/FeaturedCourses';
import InsightsSection from './components/Home/InsightsSection';
import StandOut from './components/Home/StandOut';
import Testimonial from './components/Home/Testimonial';
import FAQSection from './components/Home/FAQSection';


function App() {
   return (
    <div>
      <Navbar/>
      <HeroSection/>
      <StatsSection/>
      <FeaturedCourses/>
      <InsightsSection/>
      <StandOut/>
      <Testimonial/>
      <FAQSection/>
      
      
      {/* <Footer/> */}
    </div>
  );
}

export default App
