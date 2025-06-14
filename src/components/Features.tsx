
import React from 'react';
import { motion } from 'framer-motion';
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
    <section id="features" className="py-20 px-4 relative overflow-hidden">
      {/* 배경 애니메이션 요소 */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to build and manage decentralized communities
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.6,
                ease: "easeOut"
              }}
            >
              <Card className="glass-card border-0 card-3d h-full">
                <CardContent className="p-6">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 rotate-3d-slow`}
                    whileHover={{ 
                      scale: 1.1,
                      rotateY: 180,
                      transition: { duration: 0.4 }
                    }}
                  >
                    <span className="text-2xl">{feature.icon}</span>
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
