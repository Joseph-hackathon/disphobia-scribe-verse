
import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', animated = true }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-20 h-20'
  };

  const LogoSVG = () => (
    <svg
      viewBox="0 0 100 100"
      className={`${sizeClasses[size]} drop-shadow-lg`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 바다 배경 그라디언트 */}
      <defs>
        <radialGradient id="oceanGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#1e40af" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </radialGradient>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="50%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id="communityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>

      {/* 메인 원형 배경 (바다) */}
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="url(#oceanGradient)"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1"
      />

      {/* 파도 효과 */}
      <path
        d="M 10 40 Q 25 30, 40 40 T 70 40 T 90 40 L 90 90 L 10 90 Z"
        fill="url(#waveGradient)"
        opacity="0.8"
      />
      
      <path
        d="M 15 50 Q 30 42, 45 50 T 75 50 T 95 50 L 95 90 L 15 90 Z"
        fill="url(#waveGradient)"
        opacity="0.6"
      />

      {/* 커뮤니티 노드들 (연결된 점들) */}
      <circle cx="30" cy="25" r="3" fill="url(#communityGradient)" opacity="0.9" />
      <circle cx="50" cy="20" r="4" fill="url(#communityGradient)" opacity="0.9" />
      <circle cx="70" cy="25" r="3" fill="url(#communityGradient)" opacity="0.9" />
      <circle cx="40" cy="35" r="2.5" fill="url(#communityGradient)" opacity="0.7" />
      <circle cx="60" cy="35" r="2.5" fill="url(#communityGradient)" opacity="0.7" />

      {/* 커뮤니티 연결선 */}
      <line x1="30" y1="25" x2="50" y2="20" stroke="rgba(168,85,247,0.6)" strokeWidth="1.5" />
      <line x1="50" y1="20" x2="70" y2="25" stroke="rgba(168,85,247,0.6)" strokeWidth="1.5" />
      <line x1="30" y1="25" x2="40" y2="35" stroke="rgba(168,85,247,0.4)" strokeWidth="1" />
      <line x1="70" y1="25" x2="60" y2="35" stroke="rgba(168,85,247,0.4)" strokeWidth="1" />
      <line x1="40" y1="35" x2="60" y2="35" stroke="rgba(168,85,247,0.3)" strokeWidth="1" />

      {/* 중앙 D 로고 */}
      <text
        x="50"
        y="65"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="24"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial, sans-serif"
      >
        D
      </text>
    </svg>
  );

  if (!animated) {
    return <LogoSVG />;
  }

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ 
        scale: 1.1, 
        rotateY: 15,
        transition: { duration: 0.3 }
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      <LogoSVG />
    </motion.div>
  );
};

export default Logo;
