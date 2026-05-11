import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import VehicleCollection from '../components/VehicleCollection';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-brand-black min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <VehicleCollection />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
