
import React from 'react';

interface FeatureCardProps {
  title: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, icon }) => {
  return (
    <div className="feature-card flex flex-col items-center p-8 rounded-xl border border-cogent-red/10">
      <div className="feature-icon w-24 h-24 rounded-xl flex items-center justify-center mb-6 border border-white/10">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-cogent-orange to-cogent-red bg-clip-text text-transparent">{title}</h3>
    </div>
  );
};

const Features = () => {
  return (
    <div id="features" className="py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-cogent-orange to-cogent-red bg-clip-text text-transparent">AI Agents for Every Need</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Compliance Feature */}
          <FeatureCard 
            title="Compliance" 
            icon={
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="8" fill="url(#paint0_linear_compliance)" />
                <path d="M28 14L17 25L12 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                  <linearGradient id="paint0_linear_compliance" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF4D16" />
                    <stop offset="1" stopColor="#FF0000" />
                  </linearGradient>
                </defs>
              </svg>
            } 
          />
          
          {/* Data Feature */}
          <FeatureCard 
            title="Data" 
            icon={
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="8" fill="url(#paint0_linear_data)" />
                <path d="M14 28V18M20 28V12M26 28V22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                  <linearGradient id="paint0_linear_data" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFA500" />
                    <stop offset="1" stopColor="#FF4500" />
                  </linearGradient>
                </defs>
              </svg>
            } 
          />
          
          {/* Agent Feature */}
          <FeatureCard 
            title="Your Agent" 
            icon={
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="8" fill="url(#paint0_linear_agent)" />
                <circle cx="20" cy="16" r="4" stroke="white" strokeWidth="2" />
                <path d="M12 28C12 24.6863 15.5817 22 20 22C24.4183 22 28 24.6863 28 28" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <defs>
                  <linearGradient id="paint0_linear_agent" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF0000" />
                    <stop offset="1" stopColor="#FF4D16" />
                  </linearGradient>
                </defs>
              </svg>
            } 
          />
          
          {/* Legal Feature */}
          <FeatureCard 
            title="Legal" 
            icon={
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="8" fill="url(#paint0_linear_legal)" />
                <path d="M20 12V28M12 20H28" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <defs>
                  <linearGradient id="paint0_linear_legal" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF6A3C" />
                    <stop offset="1" stopColor="#FF3333" />
                  </linearGradient>
                </defs>
              </svg>
            } 
          />
          
          {/* Marketing Feature */}
          <FeatureCard 
            title="Marketing" 
            icon={
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="8" fill="url(#paint0_linear_marketing)" />
                <path d="M20 28V12M13 15L20 12L27 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13 25L20 28L27 25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                  <linearGradient id="paint0_linear_marketing" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFA500" />
                    <stop offset="1" stopColor="#FF0000" />
                  </linearGradient>
                </defs>
              </svg>
            } 
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
