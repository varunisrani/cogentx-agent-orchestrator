
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import InfoSection from '@/components/InfoSection';
import Example from '@/components/Example';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-cogent-dark text-foreground">
      <Navbar />
      <Hero />
      <Features />
      <InfoSection />
      <Example />
      <Footer />
    </div>
  );
};

export default Index;
