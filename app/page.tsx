
'use client';

import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';

import ProjectsSection from '../components/ProjectsSection';
import MiniGallery from '../components/MiniGallery';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#05060f] overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
    
        <ProjectsSection />
        <MiniGallery />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
