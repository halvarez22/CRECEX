
import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { HowItWorks } from './components/HowItWorks';
import { Benefits } from './components/Benefits';
import { InvestmentSectors } from './components/InvestmentSectors';
import { PerformanceSection } from './components/PerformanceSection';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { VideoGenerator } from './components/VideoGenerator';

const App: React.FC = () => {
  return (
    <div className="bg-cresex-blue text-cresex-white font-sans antialiased">
      <Header />
      <main>
        <HeroSection />
        <HowItWorks />
        <Benefits />
        <InvestmentSectors />
        <VideoGenerator />
        <PerformanceSection />
        <Testimonials />
        <CTA />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;