import React from 'react';
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Hero = () => {
  const redirectToCogentX = () => {
    window.location.href = 'https://cogentx.dev';
  };

  return (
    <div className="relative w-full py-24 md:py-36 px-4 md:px-8 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 hero-gradient"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-2 animate-fade-in opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
          <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-cogent-red/10 text-white/90 backdrop-blur-sm border border-cogent-red/20">
            Introducing MCP
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
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight animate-fade-in opacity-0 orange-red-text" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
          CogentX AI Agent
        </h1>
        
        <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-cogent-orange to-cogent-red bg-clip-text text-transparent animate-fade-in opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
          Model Context Protocol
        </div>
        
        <p className="text-xl md:text-2xl text-foreground/80 mb-10 animate-fade-in opacity-0" style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
          An open-source platform for building intelligent agents with MCP integration.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in opacity-0" style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}>
          <Button 
            size="lg" 
            variant="outline" 
            className="w-full sm:w-auto flex items-center justify-center group transition-all duration-300 hover:bg-gradient-to-r hover:from-cogent-orange/10 hover:to-cogent-red/10 backdrop-blur-sm border-cogent-orange/30"
            onClick={redirectToCogentX}
          >
            <Plus className="mr-2 h-5 w-5 transition-transform group-hover:rotate-90 duration-300 text-cogent-orange" />
            <span className="relative overflow-hidden">
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Build Your Agent</span>
              <span className="absolute top-0 left-0 -translate-y-full transition-transform duration-300 group-hover:translate-y-full">Get Started</span>
            </span>
          </Button>
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-gradient-to-r from-cogent-orange to-cogent-red hover:from-cogent-orange-hover hover:to-cogent-red-hover transition-all duration-300 hover:shadow-lg hover:shadow-cogent-red/20"
            onClick={redirectToCogentX}
          >
            Try Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
