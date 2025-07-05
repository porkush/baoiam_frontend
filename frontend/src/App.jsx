import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Home/Navbar';
import Footer from './components/Footer/Footer';
import HeroSection from './components/Home/HeroSection';
import StatsSection from './components/Home/StatsSection';


function App() {
   return (
    <div>
      <Navbar/>
      <HeroSection/>
      <StatsSection/>
      {/* <Footer/> */}
    </div>
  );
}

export default App
