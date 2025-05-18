import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Plus, Github, Star, Users, ArrowRight } from "lucide-react";

interface Stats {
  stars: string;
  users: string;
  agents: string;
  loading: boolean;
  error: string | null;
}

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  loading: boolean;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, loading }) => (
  <div 
    className="flex flex-col items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300"
    role="status"
    aria-busy={loading}
  >
    <div className="text-cogent-orange" aria-hidden="true">
      {icon}
    </div>
    <span className="text-2xl font-bold">
      {loading ? (
        <span className="block w-16 h-8 bg-white/10 animate-pulse rounded"></span>
      ) : (
        value
      )}
    </span>
    <span className="text-sm text-white/60">{label}</span>
  </div>
);

const Hero: React.FC = () => {
  const [stats, setStats] = useState<Stats>({
    stars: '0',
    users: '0',
    agents: '0',
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch GitHub stats
        const githubResponse = await fetch('https://api.github.com/repos/cogentx/mcp');
        const githubData = await githubResponse.json();
        
        // Fetch platform stats from your API
        const platformResponse = await fetch('/api/platform-stats');
        const platformData = await platformResponse.json();

        setStats({
          stars: new Intl.NumberFormat().format(githubData.stargazers_count),
          users: platformData.activeUsers,
          agents: platformData.totalAgents,
          loading: false,
          error: null
        });
      } catch (error) {
        setStats(prev => ({
          ...prev,
          loading: false,
          error: 'Failed to load statistics'
        }));
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
  }, []);

  const redirectToCogentX = () => {
    window.location.href = 'https://cogentx.dev';
  };

  return (
    <div 
      className="relative w-full min-h-screen py-24 md:py-36 px-4 md:px-8 flex flex-col items-center justify-center overflow-hidden"
      role="banner"
    >
      {/* Dynamic background with gradient and animated shapes */}
      <div 
        className="absolute inset-0 hero-gradient bg-gradient-to-br from-black via-gray-900 to-black"
        aria-hidden="true"
      >
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-cogent-orange/30 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDuration: '3s' }}
            aria-hidden="true"
          ></div>
          <div 
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/30 rounded-full filter blur-3xl animate-pulse delay-1000"
            style={{ animationDuration: '3s' }}
            aria-hidden="true"
          ></div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div 
          className="mb-4 animate-fade-in opacity-0" 
          style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          role="status"
        >
          <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-white/10 text-white/90 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors duration-300 cursor-pointer">
            <span className="flex items-center gap-1">
              <span 
                className="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                aria-hidden="true"
              ></span>
              <span>Now in Beta</span>
            </span>
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </span>
        </div>
        
        {/* Main heading with gradient text */}
        <h1 
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight animate-fade-in opacity-0 bg-clip-text text-transparent bg-gradient-to-r from-white via-cogent-orange to-white" 
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          CogentX AI Agent
        </h1>
        
        <div 
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white/90 animate-fade-in opacity-0 tracking-tight" 
          style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
        >
          Model Context Protocol
        </div>
        
        <p 
          className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto animate-fade-in opacity-0 leading-relaxed" 
          style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
        >
          Build powerful AI agents with our open-source platform. Seamlessly integrate MCP for enhanced context understanding and superior performance.
        </p>
        
        {/* Stats Section */}
        <div 
          className="grid grid-cols-3 gap-8 mb-12 animate-fade-in opacity-0" 
          style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
        >
          <StatCard
            icon={<Github className="h-6 w-6 mb-2" />}
            value={stats.stars}
            label="GitHub Stars"
            loading={stats.loading}
          />
          <StatCard
            icon={<Users className="h-6 w-6 mb-2" />}
            value={stats.users}
            label="Active Users"
            loading={stats.loading}
          />
          <StatCard
            icon={<Star className="h-6 w-6 mb-2" />}
            value={stats.agents}
            label="Agents Created"
            loading={stats.loading}
          />
        </div>
        
        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in opacity-0" 
          style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
        >
          <Button 
            size="lg" 
            variant="outline" 
            className="w-full sm:w-auto flex items-center justify-center group transition-all duration-300 hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-6 h-auto"
            onClick={redirectToCogentX}
            aria-label="Build your agent"
          >
            <Plus 
              className="mr-2 h-5 w-5 transition-transform group-hover:rotate-90 duration-300" 
              aria-hidden="true"
            />
            <span className="relative overflow-hidden">
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
                Build Your Agent
              </span>
              <span 
                className="absolute top-0 left-0 -translate-y-full transition-transform duration-300 group-hover:translate-y-full"
                aria-hidden="true"
              >
                Get Started →
              </span>
            </span>
          </Button>
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-cogent-orange hover:bg-cogent-orange-hover transition-all duration-300 hover:shadow-lg hover:shadow-cogent-orange/20 text-lg px-8 py-6 h-auto relative overflow-hidden group"
            onClick={redirectToCogentX}
            aria-label="Try demo"
          >
            <span className="relative z-10 flex items-center">
              Try Demo
              <ArrowRight 
                className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" 
                aria-hidden="true"
              />
            </span>
            <div 
              className="absolute inset-0 bg-gradient-to-r from-cogent-orange-hover to-cogent-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-hidden="true"
            ></div>
          </Button>
        </div>

        {/* Error Message */}
        {stats.error && (
          <div 
            className="mt-4 text-red-400 text-sm"
            role="alert"
            aria-live="polite"
          >
            {stats.error}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
