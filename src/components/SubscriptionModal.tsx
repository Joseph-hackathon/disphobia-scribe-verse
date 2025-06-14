
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { CreditCard, Wallet, Star, Shield, Calendar } from 'lucide-react';

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  author?: {
    name: string;
    rank: string;
    avatar: string;
    subscriberCount: number;
    monthlyPrice: number;
  };
  post?: {
    title: string;
    oneTimePrice: number;
  };
}

const SubscriptionModal = ({ isOpen, onClose, author, post }: SubscriptionModalProps) => {
  const [paymentMethod, setPaymentMethod] = useState<'monthly' | 'onetime'>('monthly');
  const [isProcessing, setIsProcessing] = useState(false);

  // Don't render if no author is provided
  if (!author) {
    return null;
  }

  const handlePayment = async () => {
    setIsProcessing(true);
    // Here would be the actual crypto payment integration
    setTimeout(() => {
      setIsProcessing(false);
      onClose();
      // Show success toast
    }, 2000);
  };

  const platformFee = paymentMethod === 'monthly' 
    ? (author.monthlyPrice * 0.05).toFixed(2)
    : post 
    ? (post.oneTimePrice * 0.05).toFixed(2)
    : '0';

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-card border-0 max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-white text-2xl flex items-center gap-2">
            <Shield className="w-6 h-6 text-purple-400" />
            Premium Content Access
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Author Info */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">{author.name[0]}</span>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg">{author.name}</h3>
              <div className="flex items-center gap-2">
                <Badge className="bg-gradient-to-r from-purple-600 to-pink-600">
                  {author.rank}
                </Badge>
                <span className="text-gray-400 text-sm">{author.subscriberCount} subscribers</span>
              </div>
            </div>
          </div>

          {/* Payment Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Monthly Subscription */}
            <Card 
              className={`cursor-pointer transition-all duration-300 ${
                paymentMethod === 'monthly' 
                ? 'ring-2 ring-purple-500 bg-purple-500/10' 
                : 'glass-card border-white/10 hover:bg-white/5'
              }`}
              onClick={() => setPaymentMethod('monthly')}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-semibold">Monthly Access</span>
                  </div>
                  <Badge variant="outline" className="border-purple-500/30 text-purple-400">
                    Popular
                  </Badge>
                </div>
                <p className="text-gray-300 text-sm mb-3">
                  Full access to all premium content by {author.name}
                </p>
                <div className="text-2xl font-bold text-white">
                  {author.monthlyPrice} SUI
                  <span className="text-sm text-gray-400 font-normal">/month</span>
                </div>
              </CardContent>
            </Card>

            {/* One-time Purchase */}
            {post && (
              <Card 
                className={`cursor-pointer transition-all duration-300 ${
                  paymentMethod === 'onetime' 
                  ? 'ring-2 ring-blue-500 bg-blue-500/10' 
                  : 'glass-card border-white/10 hover:bg-white/5'
                }`}
                onClick={() => setPaymentMethod('onetime')}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <CreditCard className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-semibold">Single Post</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                    Access to: "{post.title}"
                  </p>
                  <div className="text-2xl font-bold text-white">
                    {post.oneTimePrice} SUI
                    <span className="text-sm text-gray-400 font-normal">/once</span>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Payment Summary */}
          <div className="p-4 rounded-xl bg-white/5 space-y-2">
            <div className="flex justify-between text-white">
              <span>Amount</span>
              <span>
                {paymentMethod === 'monthly' ? author.monthlyPrice : post?.oneTimePrice || 0} SUI
              </span>
            </div>
            <div className="flex justify-between text-gray-400 text-sm">
              <span>Platform Fee (5%)</span>
              <span>{platformFee} SUI</span>
            </div>
            <div className="border-t border-white/10 pt-2 flex justify-between text-white font-semibold">
              <span>Total</span>
              <span>
                {paymentMethod === 'monthly' ? author.monthlyPrice : post?.oneTimePrice || 0} SUI
              </span>
            </div>
          </div>

          {/* Security Note */}
          <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-semibold">Secured by Seal Encryption</span>
            </div>
            <p className="text-green-300 text-sm">
              Content is encrypted and only accessible to verified subscribers. 
              Your wallet address will be whitelisted for decryption.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1 border-gray-500/30 text-gray-400 hover:bg-gray-500/10"
            >
              Cancel
            </Button>
            <Button
              onClick={handlePayment}
              disabled={isProcessing}
              className="flex-1 web3-button pulse-glow"
            >
              <Wallet className="w-4 h-4 mr-2" />
              {isProcessing ? 'Processing...' : `Pay ${paymentMethod === 'monthly' ? author.monthlyPrice : post?.oneTimePrice || 0} SUI`}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SubscriptionModal;
