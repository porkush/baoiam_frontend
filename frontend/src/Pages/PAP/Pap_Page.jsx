import React from 'react'
import CourseCard from './CourseCard';
import PlacementSection from './PlacementSection';
import Footer from '../../components/Footer/Footer'
import CertificateSection from './CertificateSection ';
import FAQ_Pap from './FAQ_Pap';
import PlacementSupport from './PlacementSupport';


const Pap_Page = () => {
  return (
    <div>
        <CourseCard/>
        <PlacementSection/>
        <CertificateSection/>
        <PlacementSupport/>
        <FAQ_Pap/>
        <Footer/>
    </div>
  )
}

export default Pap_Page;