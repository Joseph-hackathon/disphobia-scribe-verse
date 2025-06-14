
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      title: "Decentralized Storage",
      description: "Content stored on Walrus (IPFS-compatible) with on-chain metadata",
      icon: "🌐",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Secure Access Control",
      description: "Client-side encryption with NFT/token-based permissions using Seal",
      icon: "🔐",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Trust-Based Ranking",
      description: "Reputation system based on activities, votes, and content quality",
      icon: "⭐",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Content Monetization",
      description: "Verified contributors can offer subscription-based premium content",
      icon: "💎",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Web3 Integration",
      description: "Wallet-based login with automated on-chain activity logging",
      icon: "🚀",
      gradient: "from-red-500 to-pink-500"
    },
    {
      title: "Community Driven",
      description: "Comments, voting, reactions with popularity-based ranking",
      icon: "👥",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to build and manage decentralized communities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="glass-card border-0 hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
