
import React from 'react';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';

const Header = () => {
  const [isConnected, setIsConnected] = React.useState(false);

  const connectWallet = () => {
    // Placeholder for Sui wallet connection
    setIsConnected(true);
    console.log('Connecting to Sui wallet...');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card mx-4 mt-4 rounded-2xl">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <h1 className="text-2xl font-bold gradient-text">Disphobia</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#community" className="text-gray-300 hover:text-white transition-colors">Community</a>
            <a href="#roadmap" className="text-gray-300 hover:text-white transition-colors">Roadmap</a>
          </nav>
          
          <Button 
            onClick={connectWallet}
            className={`web3-button ${isConnected ? 'bg-green-600 hover:bg-green-700' : ''}`}
          >
            <User className="w-4 h-4 mr-2" />
            {isConnected ? 'Connected' : 'Connect Wallet'}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
