import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import StatsSection from './components/StatsSection';
import ServicesGrid from './components/ServicesGrid';
import CaseStudies from './components/CaseStudies';
import WhyStarlight from './components/WhyStarlight';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Cursor from './components/cursor';

function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <Hero />
      <TrustBar />
      <StatsSection />
      <ServicesGrid />
      <CaseStudies />
      <WhyStarlight />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
