import React from 'react'
import HeroSection from '../../components/Home/HeroSection'
import HeroSection_R from './HeroSection_R'
import FAQ_R from './FAQ_R'
import Footer from '../../components/Footer/Footer'
import ReferSteps from './ReferSteps'
import ReferBenefits from './ReferBenefits'

const ReferEarnPage = () => {
  return (
    <div>
      <HeroSection_R/>
      <ReferSteps/>
      <ReferBenefits/>
      <FAQ_R/>
      <Footer/>
    </div>
  )
}

export default ReferEarnPage;