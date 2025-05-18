import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Plus, Github, Star, Users, ArrowRight } from "lucide-react";

const Hero = () => {
  const [stats, setStats] = useState({
    stars: '2.5k',
    users: '10k+',
    agents: '500+'
  });

  const redirectToCogentX = () => {
    window.location.href = 'https://cogentx.dev';
  };

  return (
    <div className="relative w-full min-h-screen py-24 md:py-36 px-4 md:px-8 flex flex-col items-center justify-center overflow-hidden">
      {/* Dynamic background with gradient and animated shapes */}
      <div className="absolute inset-0 hero-gradient bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cogent-orange/30 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/30 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="mb-4 animate-fade-in opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
          <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-white/10 text-white/90 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors duration-300 cursor-pointer">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Now in Beta
            </span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </span>
        </div>
        
        {/* Main heading with gradient text */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight animate-fade-in opacity-0 bg-clip-text text-transparent bg-gradient-to-r from-white via-cogent-orange to-white" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
          CogentX AI Agent
        </h1>
        
        <div className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white/90 animate-fade-in opacity-0 tracking-tight" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
          Model Context Protocol
        </div>
        
        <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto animate-fade-in opacity-0 leading-relaxed" style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
          Build powerful AI agents with our open-source platform. Seamlessly integrate MCP for enhanced context understanding and superior performance.
        </p>
        
        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-8 mb-12 animate-fade-in opacity-0" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
          <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300">
            <Github className="h-6 w-6 mb-2 text-cogent-orange" />
            <span className="text-2xl font-bold">{stats.stars}</span>
            <span className="text-sm text-white/60">GitHub Stars</span>
          </div>
          <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300">
            <Users className="h-6 w-6 mb-2 text-cogent-orange" />
            <span className="text-2xl font-bold">{stats.users}</span>
            <span className="text-sm text-white/60">Active Users</span>
          </div>
          <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300">
            <Star className="h-6 w-6 mb-2 text-cogent-orange" />
            <span className="text-2xl font-bold">{stats.agents}</span>
            <span className="text-sm text-white/60">Agents Created</span>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in opacity-0" style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}>
          <Button 
            size="lg" 
            variant="outline" 
            className="w-full sm:w-auto flex items-center justify-center group transition-all duration-300 hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-6 h-auto"
            onClick={redirectToCogentX}
          >
            <Plus className="mr-2 h-5 w-5 transition-transform group-hover:rotate-90 duration-300" />
            <span className="relative overflow-hidden">
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Build Your Agent</span>
              <span className="absolute top-0 left-0 -translate-y-full transition-transform duration-300 group-hover:translate-y-full">Get Started →</span>
            </span>
          </Button>
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-cogent-orange hover:bg-cogent-orange-hover transition-all duration-300 hover:shadow-lg hover:shadow-cogent-orange/20 text-lg px-8 py-6 h-auto relative overflow-hidden group"
            onClick={redirectToCogentX}
          >
            <span className="relative z-10 flex items-center">
              Try Demo
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cogent-orange-hover to-cogent-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
