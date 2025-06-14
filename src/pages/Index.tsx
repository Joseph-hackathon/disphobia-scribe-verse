
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Dashboard from '@/components/Dashboard';
import Roadmap from '@/components/Roadmap';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Dashboard />
      <Roadmap />
      <Footer />
    </div>
  );
};

export default Index;
