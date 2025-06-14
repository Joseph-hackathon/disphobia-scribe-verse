
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Save, 
  Eye, 
  Upload, 
  Image, 
  Video, 
  FileText, 
  Lock, 
  Globe, 
  Tag,
  X,
  ArrowLeft,
  Shield,
  Star,
  DollarSign,
  AlertTriangle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import VerificationBadge from '@/components/VerificationBadge';

const CreateContent = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState('');
  const [isPremium, setIsPremium] = useState(false);
  const [oneTimePrice, setOneTimePrice] = useState(0);
  const [isPreview, setIsPreview] = useState(false);

  // Mock user data - in real app, this would come from authentication
  const currentUser = {
    name: "Alex Chen",
    rank: "Expert" as const, // Change this to test different user levels
    subscriberCount: 1250,
    monthlyPrice: 15,
    canPublishPremium: true // Expert and Verified can publish premium
  };

  const categories = ['DeFi', 'NFTs', 'Gaming', 'Infrastructure', 'Development', 'Tutorial'];

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = () => {
    console.log({
      title,
      content,
      category,
      tags,
      isPremium,
      oneTimePrice: isPremium ? oneTimePrice : 0,
      author: currentUser
    });
    // Here you would typically save to blockchain/storage
  };

  const canPublishPremium = currentUser.rank === 'Expert' || currentUser.rank === 'Verified';

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <motion.div 
            className="flex items-center justify-between mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-4">
              <Link to="/community">
                <Button variant="outline" size="sm" className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Community
                </Button>
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold gradient-text">
                Create Content
              </h1>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                onClick={() => setIsPreview(!isPreview)}
                className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10"
              >
                <Eye className="w-4 h-4 mr-2" />
                {isPreview ? 'Edit' : 'Preview'}
              </Button>
              <Button onClick={handleSubmit} className="web3-button">
                <Save className="w-4 h-4 mr-2" />
                Publish
              </Button>
            </div>
          </motion.div>

          {/* User Status */}
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="glass-card border-0">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{currentUser.name[0]}</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{currentUser.name}</h3>
                      <VerificationBadge rank={currentUser.rank} size="sm" />
                    </div>
                  </div>
                  {canPublishPremium && (
                    <div className="text-right">
                      <p className="text-sm text-green-400">✅ Premium Publishing Enabled</p>
                      <p className="text-xs text-gray-400">{currentUser.subscriberCount} subscribers</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <motion.div 
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {!isPreview ? (
                <>
                  {/* Title Input */}
                  <Card className="glass-card border-0">
                    <CardHeader>
                      <CardTitle className="text-white">Title</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Input
                        placeholder="Enter your content title..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="bg-white/5 border-white/10 text-white text-lg"
                      />
                    </CardContent>
                  </Card>

                  {/* Content Editor */}
                  <Card className="glass-card border-0">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-white">Content</CardTitle>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                            <Image className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                            <Video className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                            <FileText className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                            <Upload className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Textarea
                        placeholder={isPremium 
                          ? "Write your premium content here... (Markdown supported) - Remember: Premium content should be comprehensive, professional, and provide significant value to subscribers."
                          : "Write your content here... (Markdown supported)"
                        }
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className={`min-h-[400px] bg-white/5 border-white/10 text-white resize-none ${
                          isPremium ? 'border-yellow-500/30' : ''
                        }`}
                      />
                      {isPremium && (
                        <div className="mt-2 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                          <p className="text-yellow-400 text-sm">
                            💡 <strong>Premium Content Guidelines:</strong> Ensure your content is comprehensive, 
                            well-researched, and provides exceptional value. Poor quality content may result in 
                            subscription cancellation and penalties.
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </>
              ) : (
                /* Preview Mode */
                <Card className="glass-card border-0">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white text-2xl">{title || 'Untitled Post'}</CardTitle>
                      <div className="flex items-center gap-2">
                        {category && <Badge variant="secondary">{category}</Badge>}
                        {isPremium && (
                          <Badge className="bg-gradient-to-r from-purple-600 to-pink-600">
                            Premium • {oneTimePrice} SUI
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 pt-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{currentUser.name[0]}</span>
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">{currentUser.name}</p>
                        <VerificationBadge rank={currentUser.rank} size="sm" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-gray-300 whitespace-pre-wrap">
                      {content || 'No content yet...'}
                    </div>
                    {tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-6">
                        {tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="border-purple-500/30 text-purple-400">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Visibility Settings */}
              <Card className="glass-card border-0">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    {isPremium ? <Lock className="w-5 h-5 mr-2" /> : <Globe className="w-5 h-5 mr-2" />}
                    Visibility
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="public"
                      name="visibility"
                      checked={!isPremium}
                      onChange={() => setIsPremium(false)}
                      className="accent-purple-500"
                    />
                    <Label htmlFor="public" className="text-white">Public (Free)</Label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="premium"
                        name="visibility"
                        checked={isPremium}
                        onChange={() => setIsPremium(canPublishPremium)}
                        disabled={!canPublishPremium}
                        className="accent-purple-500"
                      />
                      <Label htmlFor="premium" className={`${canPublishPremium ? 'text-white' : 'text-gray-500'}`}>
                        Premium (Subscribers Only)
                      </Label>
                    </div>
                    {canPublishPremium && (
                      <Shield className="w-4 h-4 text-green-400" />
                    )}
                  </div>
                  
                  {!canPublishPremium && (
                    <Alert className="border-red-500/30 bg-red-500/10">
                      <AlertTriangle className="h-4 w-4 text-red-400" />
                      <AlertDescription className="text-red-300">
                        Only Verified and Expert contributors can publish premium content. 
                        Build your reputation to unlock this feature!
                      </AlertDescription>
                    </Alert>
                  )}

                  {isPremium && canPublishPremium && (
                    <div className="space-y-3">
                      <div>
                        <Label className="text-white text-sm">One-time Access Price (SUI)</Label>
                        <Input
                          type="number"
                          min="0"
                          step="0.1"
                          value={oneTimePrice}
                          onChange={(e) => setOneTimePrice(parseFloat(e.target.value) || 0)}
                          placeholder="0.0"
                          className="bg-white/5 border-white/10 text-white mt-1"
                        />
                      </div>
                      <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                        <p className="text-purple-300 text-sm">
                          <DollarSign className="w-4 h-4 inline mr-1" />
                          Platform fee: 5% • Your share: {(oneTimePrice * 0.95).toFixed(2)} SUI
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Category */}
              <Card className="glass-card border-0">
                <CardHeader>
                  <CardTitle className="text-white">Category</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {categories.map((cat) => (
                      <Button
                        key={cat}
                        variant={category === cat ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCategory(category === cat ? '' : cat)}
                        className={category === cat ? "web3-button" : "border-purple-500/30 text-purple-400 hover:bg-purple-500/10"}
                      >
                        {cat}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tags */}
              <Card className="glass-card border-0">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Tag className="w-5 h-5 mr-2" />
                    Tags
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Add tag..."
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addTag()}
                      className="bg-white/5 border-white/10 text-white"
                    />
                    <Button onClick={addTag} size="sm" className="web3-button">
                      Add
                    </Button>
                  </div>
                  
                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <Badge 
                          key={tag} 
                          variant="outline" 
                          className="border-purple-500/30 text-purple-400 flex items-center"
                        >
                          #{tag}
                          <button
                            onClick={() => removeTag(tag)}
                            className="ml-1 text-gray-400 hover:text-white"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Publishing Options */}
              <Card className="glass-card border-0">
                <CardHeader>
                  <CardTitle className="text-white">Publishing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm text-gray-400 space-y-1">
                    <p>✅ Content will be stored on Walrus</p>
                    <p>✅ Metadata saved on Sui blockchain</p>
                    {isPremium && <p>✅ Encrypted with Seal</p>}
                    {isPremium && <p>✅ 5% platform fee applies</p>}
                  </div>
                  
                  {isPremium && (
                    <Alert className="border-yellow-500/30 bg-yellow-500/10">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <AlertDescription className="text-yellow-300">
                        <strong>Premium Content Policy:</strong> Maintain high quality standards. 
                        Inactive authors may face subscription cancellation and refund requirements.
                      </AlertDescription>
                    </Alert>
                  )}
                  
                  <Button onClick={handleSubmit} className="w-full web3-button pulse-glow">
                    <Save className="w-4 h-4 mr-2" />
                    Publish to Blockchain
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateContent;
