
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { User, Plus, ArrowUp } from 'lucide-react';

const Dashboard = () => {
  const contributors = [
    { name: "Alex Chen", rank: "Expert", posts: 24, votes: 156, badge: "🏆" },
    { name: "Sarah Kim", rank: "Verified", posts: 18, votes: 142, badge: "✅" },
    { name: "Michael Johnson", rank: "Rising", posts: 12, votes: 89, badge: "🌟" },
    { name: "Emma Wilson", rank: "Active", posts: 8, votes: 67, badge: "⚡" },
  ];

  const recentPosts = [
    { title: "DeFi Protocol Security Analysis", author: "Alex Chen", premium: true, votes: 45 },
    { title: "Sui Blockchain Deep Dive", author: "Sarah Kim", premium: false, votes: 32 },
    { title: "Web3 UX Best Practices", author: "Michael Johnson", premium: true, votes: 28 },
    { title: "Decentralized Storage Solutions", author: "Emma Wilson", premium: false, votes: 24 },
  ];

  return (
    <section id="community" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Community Dashboard
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover top contributors and trending content in the ecosystem
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="glass-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <User className="w-5 h-5" />
                Top Contributors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contributors.map((contributor, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{contributor.badge}</span>
                      <div>
                        <h4 className="font-semibold text-white">{contributor.name}</h4>
                        <Badge variant="secondary" className="text-xs">
                          {contributor.rank}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-400">{contributor.posts} posts</p>
                      <p className="text-sm text-purple-400">{contributor.votes} votes</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <ArrowUp className="w-5 h-5" />
                Trending Posts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentPosts.map((post, index) => (
                  <div key={index} className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-white text-sm leading-tight">
                        {post.title}
                      </h4>
                      {post.premium && (
                        <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-xs">
                          Premium
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-gray-400">by {post.author}</p>
                      <p className="text-xs text-purple-400">{post.votes} votes</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <Button size="lg" className="web3-button">
            <Plus className="w-5 h-5 mr-2" />
            Create Content
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
