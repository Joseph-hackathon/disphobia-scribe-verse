
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">D</span>
            </div>
            <span className="text-xl font-bold gradient-text">Disphobia</span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span>Built on Sui Blockchain</span>
            <span>•</span>
            <span>Powered by Walrus & Seal</span>
            <span>•</span>
            <span>© 2024 Disphobia</span>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Decentralizing community content management, one post at a time.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
