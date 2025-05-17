
import React from 'react';
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-4 md:px-8 flex items-center justify-between">
      <div className="flex items-center">
        <a href="/" className="flex items-center">
          <span className="font-display text-xl font-bold">CogentX</span>
        </a>
      </div>

      <div className="hidden md:flex items-center space-x-8">
        <a href="#features" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
          Features
        </a>
        <a href="#docs" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
          Docs
        </a>
        <a href="#github" className="flex items-center text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
          <svg 
            className="mr-1.5 h-4 w-4" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          26.4k
        </a>
        <a href="#changelog" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
          Changelog
        </a>
      </div>

      <div className="flex items-center space-x-3">
        <Button variant="outline" size="sm" className="hidden md:flex items-center">
          <Plus className="h-4 w-4 mr-1" />
          Login
        </Button>
        <Button size="sm" className="bg-cogent-orange hover:bg-cogent-orange-hover">
          Try Demo
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
