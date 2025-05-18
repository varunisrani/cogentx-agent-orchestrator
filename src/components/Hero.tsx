import React from 'react';
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Hero = () => {
  const redirectToCogentX = () => {
    window.location.href = 'https://cogentx.dev';
  };

  return (
    <div className="relative w-full min-h-[90vh] py-24 md:py-36 px-4 md:px-8 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)] pointer-events-none"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
          <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium glass-card text-white/90 backdrop-blur-sm border border-white/10">
            <span className="relative flex h-3 w-3 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/80 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            Introducing MCP
            <svg 
              className="ml-2 h-4 w-4 text-primary" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </span>
        </div>
        
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight animate-fade-in opacity-0 text-gradient" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
          CogentX AI Agent
        </h1>
        
        <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white/90 animate-fade-in opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
          Model Context Protocol
        </div>
        
        <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto animate-fade-in opacity-0 leading-relaxed" style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
          An open-source platform for building intelligent agents with MCP integration. Create, deploy, and monitor your AI agents with enterprise-grade reliability.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in opacity-0" style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}>
          <Button 
            size="lg" 
            variant="outline" 
            className="w-full sm:w-auto flex items-center justify-center group transition-all duration-300 glass-card hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg"
            onClick={redirectToCogentX}
          >
            <Plus className="mr-2 h-5 w-5 transition-transform group-hover:rotate-90 duration-300" />
            <span className="relative overflow-hidden">
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Build Your Agent</span>
              <span className="absolute top-0 left-0 -translate-y-full transition-transform duration-300 group-hover:translate-y-full">Get Started</span>
            </span>
          </Button>
          <Button 
            size="lg" 
            className="w-full sm:w-auto button-gradient px-8 py-6 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
            onClick={redirectToCogentX}
          >
            Try Demo
          </Button>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 animate-fade-in opacity-0" style={{ animationDelay: "1.1s", animationFillMode: "forwards" }}>
          <div className="flex items-center space-x-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50"></div>
            <span className="text-sm font-medium text-foreground/60">Enterprise Ready</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50"></div>
            <span className="text-sm font-medium text-foreground/60">Open Source</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50"></div>
            <span className="text-sm font-medium text-foreground/60">24/7 Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
