import React from 'react';
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Hero = () => {
  const redirectToCogentX = () => {
    window.location.href = 'https://cogentx.dev';
  };

  return (
    <div className="relative w-full py-24 md:py-36 px-4 md:px-8 flex flex-col items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-cogent-dark to-black">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-cogent-orange/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-2 animate-fade-in opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
          <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-white/10 text-white/90 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-colors">
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
        
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight animate-fade-in opacity-0 bg-clip-text text-transparent bg-gradient-to-r from-white via-cogent-orange to-white" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
          CogentX AI Agent
        </h1>
        
        <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cogent-orange via-purple-500 to-blue-500 animate-gradient animate-fade-in opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
          Model Context Protocol
        </div>
        
        <p className="text-xl md:text-2xl text-foreground/90 mb-10 animate-fade-in opacity-0 leading-relaxed" style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
          An open-source platform for building intelligent agents with MCP integration.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in opacity-0" style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}>
          <Button 
            size="lg" 
            variant="outline" 
            className="w-full sm:w-auto flex items-center justify-center group transition-all duration-300 hover:bg-white/10 backdrop-blur-sm border-white/20 hover:border-white/40"
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
            className="w-full sm:w-auto bg-gradient-to-r from-cogent-orange to-purple-500 hover:from-cogent-orange-hover hover:to-purple-600 transition-all duration-300 hover:shadow-lg hover:shadow-cogent-orange/20 border-0"
            onClick={redirectToCogentX}
          >
            Try Demo
          </Button>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-cogent-orange rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-500 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-blue-500 rounded-full animate-float animation-delay-3000"></div>
      </div>
    </div>
  );
};

export default Hero;
