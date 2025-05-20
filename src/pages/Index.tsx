
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import InfoSection from '@/components/InfoSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-cogent-dark to-cogent-green-dark text-foreground">
      <Navbar />
      <Hero />
      <Features />
      <InfoSection />
      <Footer />
    </div>
  );
};

export default Index;
