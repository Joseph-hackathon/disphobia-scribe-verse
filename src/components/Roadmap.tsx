
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Roadmap = () => {
  const phases = [
    {
      period: "Weeks 1-2",
      phase: "Foundation",
      description: "Wallet login, editor setup, core CMS engine",
      status: "In Progress",
      color: "bg-blue-500"
    },
    {
      period: "Weeks 3-4",
      phase: "Storage Integration",
      description: "Walrus storage & content rendering",
      status: "Next",
      color: "bg-purple-500"
    },
    {
      period: "Weeks 5-6",
      phase: "Seal Integration",
      description: "Encryption & token-gated access",
      status: "Planned",
      color: "bg-pink-500"
    },
    {
      period: "Weeks 7-8",
      phase: "Community Features",
      description: "Comments, voting, contributor ranking system",
      status: "Planned",
      color: "bg-green-500"
    },
    {
      period: "Week 9",
      phase: "Premium Content",
      description: "Subscription-based premium content framework",
      status: "Planned",
      color: "bg-yellow-500"
    },
    {
      period: "Week 10",
      phase: "QA & Launch",
      description: "SEO, responsive design, final testing",
      status: "Planned",
      color: "bg-red-500"
    }
  ];

  return (
    <section id="roadmap" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Development Roadmap
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our 10-week journey to revolutionize Web3 community management
          </p>
        </div>
        
        <div className="space-y-6">
          {phases.map((phase, index) => (
            <Card key={index} className="glass-card border-0 hover:scale-[1.02] transition-transform duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-4 h-4 rounded-full ${phase.color}`} />
                    <div>
                      <h3 className="text-xl font-semibold text-white">{phase.phase}</h3>
                      <p className="text-sm text-gray-400">{phase.period}</p>
                    </div>
                  </div>
                  <Badge 
                    variant={phase.status === "In Progress" ? "default" : "secondary"}
                    className={phase.status === "In Progress" ? "bg-blue-600" : ""}
                  >
                    {phase.status}
                  </Badge>
                </div>
                <p className="text-gray-300 leading-relaxed ml-8">
                  {phase.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
