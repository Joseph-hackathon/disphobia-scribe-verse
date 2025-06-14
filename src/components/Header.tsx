
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const [isConnected, setIsConnected] = React.useState(false);

  const connectWallet = () => {
    // Placeholder for Sui wallet connection
    setIsConnected(true);
    console.log('Connecting to Sui wallet...');
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 glass-header mx-4 mt-4 rounded-2xl"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Logo size="md" animated={true} />
            <h1 className="text-2xl font-bold gradient-text">Disphobia</h1>
          </motion.div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {['Features', 'Community', 'Roadmap'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors relative"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {item}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </nav>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={connectWallet}
              className={`web3-button ${isConnected ? 'bg-green-600 hover:bg-green-700' : ''}`}
            >
              <User className="w-4 h-4 mr-2" />
              {isConnected ? 'Connected' : 'Connect Wallet'}
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
