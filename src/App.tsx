import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import StatsSection from './components/StatsSection';
import ServicesGrid from './components/ServicesGrid';
import WhyStarlight from './components/WhyStarlight';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <Hero />
      <TrustBar />
      <StatsSection />
      <ServicesGrid />
      <WhyStarlight />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
