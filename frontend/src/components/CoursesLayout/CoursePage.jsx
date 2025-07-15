import React from 'react'
import HeroSection_C from './HeroSection_C'
import Footer from "../Footer/Footer"
import FAQ_C from './FAQ_C'
import DiscountBanner from './DiscountBanner'
import BoughtTogether from './BoughtTogether'

const CoursePage = () => {
  return (
    <div>
      <HeroSection_C/>
      <BoughtTogether/>
      <FAQ_C/>
      <DiscountBanner/>
      <Footer/>
    </div>
  )
}

export default CoursePage;