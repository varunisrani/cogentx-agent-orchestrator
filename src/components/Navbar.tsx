import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const redirectToCogentX = () => {
    window.location.href = 'https://cogentx.dev';
  };

  return (
    <nav className="w-full py-4 px-4 md:px-8 flex items-center justify-between backdrop-blur-xl bg-background/30 sticky top-0 z-50 border-b border-white/5">
      <div className="flex items-center">
        <a href="/" className="flex items-center group">
          <span className="font-display text-2xl font-bold text-gradient group-hover:opacity-80 transition-opacity">CogentX</span>
        </a>
      </div>

      <div className="hidden md:flex items-center space-x-8">
        <a href="#features" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors hover:underline decoration-primary/30 underline-offset-4">
          Features
        </a>
        <a href="#examples" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors hover:underline decoration-primary/30 underline-offset-4">
          Examples
        </a>
        <a href="#docs" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors hover:underline decoration-primary/30 underline-offset-4">
          Documentation
        </a>
        <a href="#about" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors hover:underline decoration-primary/30 underline-offset-4">
          About
        </a>
      </div>

      <div className="flex items-center space-x-4">
        <Button 
          size="sm" 
          variant="outline"
          className="hidden md:flex glass-card hover:bg-white/10"
          onClick={redirectToCogentX}
        >
          Sign In
        </Button>
        <Button 
          size="sm" 
          className="button-gradient"
          onClick={redirectToCogentX}
        >
          Try Demo
        </Button>
        <Button
          size="sm"
          variant="ghost"
          className="md:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
