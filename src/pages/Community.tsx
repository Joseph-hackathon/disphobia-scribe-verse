
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Plus, Search, TrendingUp, Users, MessageSquare, Heart, Share2, Bookmark } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';

const Community = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'DeFi', 'NFTs', 'Gaming', 'Infrastructure', 'Development'];

  const posts = [
    {
      id: 1,
      title: "Complete Guide to Sui Move Programming",
      author: "Alex Chen",
      avatar: "🧑‍💻",
      category: "Development",
      content: "A comprehensive guide covering the fundamentals of Move programming on Sui blockchain...",
      votes: 156,
      comments: 24,
      views: "2.1k",
      timeAgo: "2 hours ago",
      isPremium: false,
      tags: ["Move", "Sui", "Programming"]
    },
    {
      id: 2,
      title: "DeFi Protocol Security Best Practices",
      author: "Sarah Kim",
      avatar: "👩‍🔬",
      category: "DeFi",
      content: "Learn how to secure your DeFi protocols with these essential security practices...",
      votes: 142,
      comments: 18,
      views: "1.8k",
      timeAgo: "4 hours ago",
      isPremium: true,
      tags: ["DeFi", "Security", "Auditing"]
    },
    {
      id: 3,
      title: "Building NFT Marketplaces on Sui",
      author: "Michael Johnson",
      avatar: "🎨",
      category: "NFTs",
      content: "Step-by-step tutorial for creating your own NFT marketplace using Sui's object model...",
      votes: 98,
      comments: 15,
      views: "1.3k",
      timeAgo: "6 hours ago",
      isPremium: false,
      tags: ["NFT", "Marketplace", "Sui"]
    },
    {
      id: 4,
      title: "Advanced Walrus Storage Patterns",
      author: "Emma Wilson",
      avatar: "🗃️",
      category: "Infrastructure",
      content: "Explore advanced patterns for decentralized storage with Walrus...",
      votes: 87,
      comments: 12,
      views: "950",
      timeAgo: "8 hours ago",
      isPremium: true,
      tags: ["Walrus", "Storage", "Decentralization"]
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header Section */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">
              Community Hub
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Discover, share, and monetize your expertise in the decentralized web
            </p>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/create-content">
                <Button size="lg" className="web3-button pulse-glow">
                  <Plus className="w-5 h-5 mr-2" />
                  Create Content
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Search and Filter Section */}
          <motion.div 
            className="glass-card p-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search posts, topics, or authors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/5 border-white/10 text-white"
                />
              </div>
              
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "web3-button" : "border-purple-500/30 text-purple-400 hover:bg-purple-500/10"}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              { icon: Users, label: "Active Users", value: "1,234", color: "text-blue-400" },
              { icon: MessageSquare, label: "Total Posts", value: "5,678", color: "text-green-400" },
              { icon: TrendingUp, label: "This Week", value: "+156", color: "text-purple-400" },
              { icon: Heart, label: "Total Votes", value: "23.4k", color: "text-pink-400" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 text-center"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Posts Section */}
          <div className="space-y-6">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-card border-0 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{post.avatar}</span>
                        <div>
                          <h3 className="font-semibold text-white">{post.author}</h3>
                          <p className="text-sm text-gray-400">{post.timeAgo}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="secondary">{post.category}</Badge>
                        {post.isPremium && (
                          <Badge className="bg-gradient-to-r from-purple-600 to-pink-600">
                            Premium
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h2 className="text-xl font-bold text-white mb-3">{post.title}</h2>
                    <p className="text-gray-300 mb-4">{post.content}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs border-purple-500/30 text-purple-400">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <TrendingUp className="w-4 h-4" />
                          <span>{post.votes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageSquare className="w-4 h-4" />
                          <span>{post.comments}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span>{post.views} views</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                          <Heart className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                          <Share2 className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                          <Bookmark className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
