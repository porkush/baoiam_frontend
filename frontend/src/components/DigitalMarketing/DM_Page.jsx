import React from 'react'
import HeroSection_C from './HeroSection_C'
import Footer from "../Footer/Footer"
import DiscountBanner from '../DataAnalysis/DiscountBanner'
import BoughtTogether from '../DataScience/BoughtTogether'
import Experts from '../DataScience/Experts'
import CertificateSection from '../DataScience/CertificateSection'
import FlexibleCourses from '../DataScience/FlexibleCourses'

import FAQ from './FAQ'
import LearningJourney from './LearningJourney'
import Navbar_C from '../DataAnalysis/Navbar_C'

const DM_Page = () => {
  return (
    <div>
      <Navbar_C/>
      <HeroSection_C/>
      <LearningJourney/>
      <BoughtTogether/>
      <Experts/>
      <CertificateSection/>
      <FlexibleCourses/>
      <FAQ/>
      <DiscountBanner/>
      <Footer/>
    </div>
  )
}

export default DM_Page;