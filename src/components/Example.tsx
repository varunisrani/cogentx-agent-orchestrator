
import React from 'react';
import { Button } from "@/components/ui/button";

const Example = () => {
  return (
    <div className="py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Example Use Case</h2>
        <h3 className="text-xl text-center mb-12 text-foreground/80">Football Highlights Creator Agent</h3>
        
        <div className="bg-cogent-gray/30 p-8 rounded-xl border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <div className="w-full aspect-video rounded-lg bg-cogent-black/80 flex items-center justify-center overflow-hidden mb-6">
                <svg className="w-16 h-16 text-cogent-orange opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" opacity="0.2" />
                  <path d="M16 12l-6 4V8l6 4z" />
                </svg>
              </div>
              
              <h4 className="text-lg font-semibold mb-2">Input Processing</h4>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>User specifies highlight generator requirements</li>
                <li>Identifies goals, fouls, and key moments</li>
                <li>Processes match footage for relevant content</li>
              </ul>
            </div>
            
            <div>
              <div className="space-y-6">
                <div className="p-4 bg-cogent-light-gray rounded-lg border border-white/5">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cogent-orange to-red-700 flex items-center justify-center shrink-0 mt-1 mr-3">
                      <span className="text-white text-xs font-medium">01</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Planning Phase</h4>
                      <p className="text-sm text-foreground/70">The Planning Agent devises a workflow to process match footage, detect events, and compile highlights.</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-cogent-light-gray rounded-lg border border-white/5">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cogent-orange to-red-700 flex items-center justify-center shrink-0 mt-1 mr-3">
                      <span className="text-white text-xs font-medium">02</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Structuring Phase</h4>
                      <p className="text-sm text-foreground/70">The system outlines the necessary components, like video processing modules and event detection algorithms.</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-cogent-light-gray rounded-lg border border-white/5">
                  <div className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cogent-orange to-red-700 flex items-center justify-center shrink-0 mt-1 mr-3">
                      <span className="text-white text-xs font-medium">03</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Building Phase</h4>
                      <p className="text-sm text-foreground/70">The Execution Agent assembles the components, integrating with video analysis tools and exporting the final highlights.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button className="w-full bg-cogent-orange hover:bg-cogent-orange-hover">
                  See More Examples
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example;
