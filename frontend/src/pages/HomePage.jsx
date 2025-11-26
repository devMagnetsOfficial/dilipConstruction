import React from 'react';
import HeroSection from '../section/Home/HeroSection';
import ServiceSection from '../section/Home/ServiceSection';
import AboutSection from '../section/Home/AboutSection';
import ContactSection from '../section/Home/ContactSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-light text-dark font-sans">
      <HeroSection />
      <ServiceSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
