import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const redirectToCogentX = () => {
    window.location.href = 'https://cogentx.dev';
  };

  return (
    <nav className="w-full py-4 px-4 md:px-8 flex items-center justify-between backdrop-blur-sm bg-background/50 sticky top-0 z-50 border-b border-cogent-red/10">
      <div className="flex items-center">
        <a href="/" className="flex items-center">
          <span className="font-display text-xl font-bold bg-gradient-to-r from-cogent-orange to-cogent-red bg-clip-text text-transparent">CogentX</span>
        </a>
      </div>

      <div className="hidden md:flex items-center space-x-8">
        <a href="#features" className="text-sm font-medium text-foreground/80 hover:text-cogent-orange transition-colors">
          Features
        </a>
      </div>

      <div className="flex items-center space-x-3">
        <Button 
          size="sm" 
          className="bg-gradient-to-r from-cogent-orange to-cogent-red hover:from-cogent-orange-light hover:to-cogent-red-hover"
          onClick={redirectToCogentX}
        >
          Try Demo
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
