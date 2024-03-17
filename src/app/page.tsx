
import Hero from '@/components/Hero';
import './globals.css'
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <div className="bg">
        <Hero />
        
      </div>
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}
