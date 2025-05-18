import React from 'react';
import { Shield, Database, Bot, Scale, Megaphone } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative glass-card p-8 rounded-xl flex flex-col items-start gap-4 group-hover:bg-card/50 transition duration-200">
        <div className="p-3 rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-foreground/70">{description}</p>
      </div>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      title: "Compliance",
      description: "Built-in compliance checks and audit trails for enterprise security requirements.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Data Management",
      description: "Secure data handling with advanced encryption and access controls.",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Agent Creation",
      description: "Intuitive tools for building and customizing AI agents with MCP integration.",
      icon: <Bot className="w-6 h-6" />
    },
    {
      title: "Legal Framework",
      description: "Comprehensive legal templates and governance frameworks.",
      icon: <Scale className="w-6 h-6" />
    },
    {
      title: "Marketing Tools",
      description: "Built-in analytics and promotion tools for agent deployment.",
      icon: <Megaphone className="w-6 h-6" />
    }
  ];

  return (
    <div id="features" className="py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_70%)] pointer-events-none opacity-50"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">AI Agents for Every Need</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Powerful tools and features to help you build, deploy, and scale your AI agents with confidence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
