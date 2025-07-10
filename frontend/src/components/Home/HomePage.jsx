import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import FeaturedCourses from './FeaturedCourses';
import InsightsSection from './InsightsSection';
import StandOut from './StandOut';
import Testimonial from './Testimonial';
import FAQSection from './FAQSection';
import Prestige from './Prestige';
import Contact from '../Footer/Contact';
import Partner from './Partner';
import TeamSection from './TeamSection';
import OurProgram from './OurProgram';
import DataScienceBanner from './DataScienceBanner';
import Footer from '../Footer/Footer';

export default function HomePage() {
  return (
    <div>
      <HeroSection/>
      <StatsSection/>
      <OurProgram/>
      <FeaturedCourses/>
      <DataScienceBanner/>
      <InsightsSection/>
      <StandOut/>
      <Partner/>
      <TeamSection/>
      <Prestige/>
      <Testimonial/>
      <FAQSection/>
      <Contact/>
      <Footer/>
    </div>
  );
}
