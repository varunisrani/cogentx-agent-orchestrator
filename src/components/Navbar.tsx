import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const redirectToCogentX = () => {
    window.location.href = 'https://cogentx.dev';
  };

  return (
    <nav className="w-full py-4 px-4 md:px-8 flex items-center justify-between backdrop-blur-md bg-background/30 sticky top-0 z-50 border-b border-white/10">
      <div className="flex items-center">
        <a href="/" className="flex items-center group">
          <span className="font-display text-2xl font-bold bg-gradient-to-r from-white via-cogent-orange to-white bg-clip-text text-transparent transition-all duration-300 group-hover:from-cogent-orange group-hover:via-white group-hover:to-cogent-orange">CogentX</span>
        </a>
      </div>

      <div className="hidden md:flex items-center space-x-8">
        <a href="#features" className="relative text-sm font-medium text-foreground/80 hover:text-foreground transition-colors group">
          Features
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cogent-orange to-purple-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>

      <div className="flex items-center space-x-3">
        <Button 
          size="sm" 
          className="relative overflow-hidden bg-gradient-to-r from-cogent-orange to-purple-500 hover:from-cogent-orange-hover hover:to-purple-600 transition-all duration-300"
          onClick={redirectToCogentX}
        >
          <span className="relative z-10">Try Demo</span>
          <div className="absolute inset-0 bg-white/20 transform translate-y-full transition-transform duration-300 hover:translate-y-0"></div>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
