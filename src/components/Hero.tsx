
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="gradient-text">Disphobia</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Decentralized Community CMS
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Built on Sui blockchain with Walrus storage and Seal encryption. 
            Create, manage, and monetize content in a truly decentralized ecosystem.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="web3-button text-lg px-8 py-6">
            Launch App
          </Button>
          <Button size="lg" variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10 text-lg px-8 py-6">
            Learn More
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="glass-card p-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <span className="text-white font-bold">🔒</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
            <p className="text-gray-400">Seal encryption ensures your content remains private and secure</p>
          </div>
          
          <div className="glass-card p-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <span className="text-white font-bold">⚡</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Decentralized</h3>
            <p className="text-gray-400">Built on Sui blockchain with Walrus decentralized storage</p>
          </div>
          
          <div className="glass-card p-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <span className="text-white font-bold">💰</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Monetizable</h3>
            <p className="text-gray-400">Earn from your expertise with subscription-based premium content</p>
          </div>
        </div>
        
        <div className="mt-16">
          <ArrowDown className="w-8 h-8 text-purple-400 animate-bounce mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
