
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Shield, Star, Zap, Award } from 'lucide-react';

interface VerificationBadgeProps {
  rank: 'Verified' | 'Expert' | 'Rising' | 'Active';
  size?: 'sm' | 'md' | 'lg';
}

const VerificationBadge = ({ rank, size = 'md' }: VerificationBadgeProps) => {
  const getRankConfig = (rank: string) => {
    switch (rank) {
      case 'Expert':
        return {
          icon: Award,
          gradient: 'from-yellow-500 to-orange-500',
          text: 'Expert',
          description: 'Can publish premium content'
        };
      case 'Verified':
        return {
          icon: Shield,
          gradient: 'from-purple-500 to-pink-500',
          text: 'Verified',
          description: 'Can publish premium content'
        };
      case 'Rising':
        return {
          icon: Zap,
          gradient: 'from-blue-500 to-cyan-500',
          text: 'Rising',
          description: 'Active contributor'
        };
      case 'Active':
        return {
          icon: Star,
          gradient: 'from-green-500 to-teal-500',
          text: 'Active',
          description: 'Regular contributor'
        };
      default:
        return {
          icon: Star,
          gradient: 'from-gray-500 to-gray-600',
          text: 'Member',
          description: 'Community member'
        };
    }
  };

  const config = getRankConfig(rank);
  const Icon = config.icon;
  const canPublishPremium = rank === 'Expert' || rank === 'Verified';

  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-2'
  };

  return (
    <div className="flex items-center gap-2">
      <Badge className={`bg-gradient-to-r ${config.gradient} text-white ${sizeClasses[size]} flex items-center gap-1`}>
        <Icon className={`${size === 'sm' ? 'w-3 h-3' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'}`} />
        {config.text}
      </Badge>
      {canPublishPremium && (
        <span className="text-xs text-yellow-400">★ Premium Publisher</span>
      )}
    </div>
  );
};

export default VerificationBadge;
