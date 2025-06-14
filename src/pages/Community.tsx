
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Filter, 
  Heart, 
  MessageCircle, 
  Share, 
  Plus, 
  TrendingUp,
  Clock,
  Eye,
  Lock,
  Wallet,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import VerificationBadge from '@/components/VerificationBadge';
import SubscriptionModal from '@/components/SubscriptionModal';

const Community = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('trending');
  const [subscriptionModal, setSubscriptionModal] = useState<{
    isOpen: boolean;
    author?: any;
    post?: any;
  }>({ isOpen: false });

  const categories = ['All', 'DeFi', 'NFTs', 'Gaming', 'Infrastructure', 'Development', 'Tutorial'];

  const posts = [
    {
      id: 1,
      title: "Advanced DeFi Yield Farming Strategies for 2024",
      author: { 
        name: "Alex Chen", 
        rank: "Expert" as const, 
        subscriberCount: 1250,
        monthlyPrice: 15
      },
      category: "DeFi",
      isPremium: true,
      excerpt: "Deep dive into advanced yield farming techniques, risk management, and portfolio optimization strategies...",
      votes: 156,
      comments: 23,
      views: 2840,
      timeAgo: "2 hours ago",
      tags: ["yield-farming", "defi", "strategy"],
      oneTimePrice: 5
    },
    {
      id: 2,
      title: "Building Scalable dApps on Sui: Complete Developer Guide",
      author: { 
        name: "Sarah Kim", 
        rank: "Verified" as const, 
        subscriberCount: 890,
        monthlyPrice: 12
      },
      category: "Development",
      isPremium: true,
      excerpt: "Comprehensive guide covering Move programming, object model, and best practices for Sui development...",
      votes: 142,
      comments: 34,
      views: 1950,
      timeAgo: "4 hours ago",
      tags: ["sui", "development", "move"],
      oneTimePrice: 8
    },
    {
      id: 3,
      title: "NFT Market Analysis: Trends and Opportunities",
      author: { 
        name: "Michael Johnson", 
        rank: "Rising" as const, 
        subscriberCount: 0,
        monthlyPrice: 0
      },
      category: "NFTs",
      isPremium: false,
      excerpt: "Current market trends, upcoming projects, and investment opportunities in the NFT space...",
      votes: 89,
      comments: 12,
      views: 1420,
      timeAgo: "6 hours ago",
      tags: ["nft", "market-analysis", "trends"]
    },
    {
      id: 4,
      title: "Walrus Storage: The Future of Decentralized Data",
      author: { 
        name: "Emma Wilson", 
        rank: "Active" as const, 
        subscriberCount: 0,
        monthlyPrice: 0
      },
      category: "Infrastructure",
      isPremium: false,
      excerpt: "Understanding Walrus storage protocol, its benefits, and integration possibilities...",
      votes: 67,
      comments: 8,
      views: 980,
      timeAgo: "1 day ago",
      tags: ["walrus", "storage", "infrastructure"]
    }
  ];

  const handleSubscribe = (author: any, post?: any) => {
    setSubscriptionModal({
      isOpen: true,
      author,
      post
    });
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.author.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Community Hub
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Discover expert insights, premium content, and engage with verified contributors
            </p>
            
            <Link to="/create-content">
              <Button size="lg" className="web3-button pulse-glow">
                <Plus className="w-5 h-5 mr-2" />
                Create Content
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <motion.div 
              className="lg:col-span-1 space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Search */}
              <Card className="glass-card border-0">
                <CardContent className="p-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Search posts..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 bg-white/5 border-white/10 text-white"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card className="glass-card border-0">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Filter className="w-5 h-5 mr-2" />
                    Categories
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full justify-start ${
                        selectedCategory === category 
                        ? "web3-button" 
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {category}
                    </Button>
                  ))}
                </CardContent>
              </Card>

              {/* Sort Options */}
              <Card className="glass-card border-0">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Sort By
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {['trending', 'latest', 'most-voted'].map((option) => (
                    <Button
                      key={option}
                      variant={sortBy === option ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setSortBy(option)}
                      className={`w-full justify-start capitalize ${
                        sortBy === option 
                        ? "web3-button" 
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {option.replace('-', ' ')}
                    </Button>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Main Content */}
            <motion.div 
              className="lg:col-span-3 space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="glass-card border-0 hover:bg-white/5 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          {/* Header */}
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                              <span className="text-white font-bold">{post.author.name[0]}</span>
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="text-white font-semibold">{post.author.name}</h4>
                                <VerificationBadge rank={post.author.rank} size="sm" />
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-400">
                                <Clock className="w-3 h-3" />
                                <span>{post.timeAgo}</span>
                                <Badge variant="outline" className="text-xs">
                                  {post.category}
                                </Badge>
                              </div>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="mb-4">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold text-white line-clamp-2">
                                {post.title}
                              </h3>
                              {post.isPremium && (
                                <div className="flex items-center gap-1">
                                  <Lock className="w-4 h-4 text-yellow-400" />
                                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600">
                                    Premium
                                  </Badge>
                                </div>
                              )}
                            </div>
                            <p className="text-gray-300 line-clamp-2">{post.excerpt}</p>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag) => (
                              <Badge 
                                key={tag} 
                                variant="outline" 
                                className="border-purple-500/30 text-purple-400 text-xs"
                              >
                                #{tag}
                              </Badge>
                            ))}
                          </div>

                          {/* Actions */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                                <Heart className="w-4 h-4 mr-1" />
                                {post.votes}
                              </Button>
                              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                                <MessageCircle className="w-4 h-4 mr-1" />
                                {post.comments}
                              </Button>
                              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                                <Eye className="w-4 h-4 mr-1" />
                                {post.views}
                              </Button>
                              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                                <Share className="w-4 h-4" />
                              </Button>
                            </div>

                            {post.isPremium && (
                              <div className="flex items-center gap-2">
                                {post.oneTimePrice && (
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => handleSubscribe(post.author, post)}
                                    className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10"
                                  >
                                    <Wallet className="w-4 h-4 mr-1" />
                                    {post.oneTimePrice} SUI
                                  </Button>
                                )}
                                {(post.author.rank === 'Expert' || post.author.rank === 'Verified') && (
                                  <Button
                                    size="sm"
                                    onClick={() => handleSubscribe(post.author)}
                                    className="web3-button"
                                  >
                                    <Star className="w-4 h-4 mr-1" />
                                    Subscribe
                                  </Button>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-400">No posts found matching your criteria.</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      <SubscriptionModal
        isOpen={subscriptionModal.isOpen}
        onClose={() => setSubscriptionModal({ isOpen: false })}
        author={subscriptionModal.author}
        post={subscriptionModal.post}
      />
    </div>
  );
};

export default Community;
