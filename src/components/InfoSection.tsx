
import React from 'react';

const InfoSection = () => {
  return (
    <div className="py-24 px-4 md:px-8 bg-gradient-to-b from-cogent-green-dark/10 to-cogent-dark/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cogent-orange to-cogent-green bg-clip-text text-transparent">Technical Foundations</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-cogent-green">Model Context Protocol (MCP)</h3>
                <p className="text-foreground/80 leading-relaxed">
                  MCP serves as a standardized protocol facilitating communication between AI agents and external tools or services, 
                  enabling agents to interact with various tools through a unified interface, handle complex workflows, and 
                  pause for human input when necessary.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-cogent-orange">Integration with Development</h3>
                <p className="text-foreground/80 leading-relaxed">
                  The CogentX Agent MCP is designed to integrate seamlessly with development environments like Cursor and 
                  Claude Desktop, allowing developers to leverage existing tools and services, utilize MCP servers for 
                  tasks like data retrieval, and maintain a cohesive experience.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cogent-green to-cogent-orange bg-clip-text text-transparent">Multi-Agent Collaboration</h2>
            <p className="text-foreground/80 leading-relaxed mb-8">
              The CogentX Agent MCP supports the coordination of multiple specialized agents, each handling specific aspects 
              of a project. This modular approach enhances scalability and allows for parallel processing of complex tasks.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-cogent-green/20 flex items-center justify-center shrink-0 mt-1 mr-4">
                  <span className="text-cogent-green font-semibold">01</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Research Agent</h4>
                  <p className="text-foreground/70">Gathers relevant information and resources</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-cogent-orange/20 flex items-center justify-center shrink-0 mt-1 mr-4">
                  <span className="text-cogent-orange font-semibold">02</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Planning Agent</h4>
                  <p className="text-foreground/70">Develops a strategic plan based on the research</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-cogent-green/20 flex items-center justify-center shrink-0 mt-1 mr-4">
                  <span className="text-cogent-green font-semibold">03</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Execution Agent</h4>
                  <p className="text-foreground/70">Carries out the tasks as per the plan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
