import React from 'react';
import { Code2, Cpu, Network, Lock } from 'lucide-react';

const InfoCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="glass-card p-6 rounded-xl border border-white/5 hover:border-primary/20 transition-all duration-300">
    <div className="flex items-start gap-4">
      <div className="p-2 rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
        <p className="text-foreground/70 leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

const InfoSection = () => {
  const features = [
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "Advanced API Integration",
      description: "Seamlessly integrate with existing systems through our comprehensive API suite."
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "Intelligent Processing",
      description: "Leverage cutting-edge AI models for enhanced decision-making and automation."
    },
    {
      icon: <Network className="w-5 h-5" />,
      title: "Scalable Architecture",
      description: "Built for enterprise-grade performance with distributed computing capabilities."
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: "Enterprise Security",
      description: "Bank-grade encryption and security measures to protect sensitive data."
    }
  ];

  return (
    <div className="py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_70%)] pointer-events-none opacity-30"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient">Technical Foundations</span>
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Model Context Protocol (MCP)</h3>
                <p className="text-foreground/80 leading-relaxed">
                  MCP serves as a standardized protocol facilitating communication between AI agents and external tools or services, 
                  enabling agents to interact with various tools through a unified interface, handle complex workflows, and 
                  pause for human input when necessary.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Integration with Development</h3>
                <p className="text-foreground/80 leading-relaxed">
                  The CogentX Agent MCP is designed to integrate seamlessly with development environments like Cursor and 
                  Claude Desktop, allowing developers to leverage existing tools and services, utilize MCP servers for 
                  tasks like data retrieval, and maintain a cohesive experience.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <InfoCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
