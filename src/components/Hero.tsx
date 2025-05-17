
import React from 'react';
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative w-full py-20 md:py-32 px-4 md:px-8 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 hero-gradient"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-2 animate-fade-in">
          <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-white/10 text-white/80">
            Introducing the Model Context Protocol
            <svg 
              className="ml-1.5 h-4 w-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight animate-fade-in">
          CogentX AI Agents
        </h1>
        
        <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 dot-pattern-text animate-fade-in" style={{ animationDelay: "0.2s" }}>
          model agnostic
        </div>
        
        <p className="text-xl md:text-2xl text-foreground/80 mb-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          An open-source platform to build, ship and monitor agentic systems.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <Button size="lg" variant="outline" className="w-full sm:w-auto flex items-center justify-center">
            <Plus className="mr-2 h-5 w-5" />
            Build Your Agent
          </Button>
          <Button size="lg" className="w-full sm:w-auto bg-cogent-orange hover:bg-cogent-orange-hover">
            Try Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
