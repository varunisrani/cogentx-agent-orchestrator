
import React from 'react';

interface FeatureCardProps {
  title: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, icon }) => {
  return (
    <div className="feature-card flex flex-col items-center p-8 rounded-xl border border-white/10">
      <div className="feature-icon w-24 h-24 rounded-xl flex items-center justify-center mb-6 border border-white/10">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
    </div>
  );
};

const Features = () => {
  return (
    <div id="features" className="py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">AI Agents for Every Need</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Compliance Feature */}
          <FeatureCard 
            title="Compliance" 
            icon={
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="8" fill="#FF4D16" fillOpacity="0.1" />
                <path d="M28 14L17 25L12 20" stroke="#FF4D16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            } 
          />
          
          {/* Data Feature */}
          <FeatureCard 
            title="Data" 
            icon={
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="8" fill="#FF4D16" fillOpacity="0.1" />
                <path d="M14 28V18M20 28V12M26 28V22" stroke="#FF4D16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            } 
          />
          
          {/* Agent Feature */}
          <FeatureCard 
            title="Your Agent" 
            icon={
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="8" fill="#FF4D16" fillOpacity="0.1" />
                <circle cx="20" cy="16" r="4" stroke="#FF4D16" strokeWidth="2" />
                <path d="M12 28C12 24.6863 15.5817 22 20 22C24.4183 22 28 24.6863 28 28" stroke="#FF4D16" strokeWidth="2" strokeLinecap="round" />
              </svg>
            } 
          />
          
          {/* Legal Feature */}
          <FeatureCard 
            title="Legal" 
            icon={
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="8" fill="#FF4D16" fillOpacity="0.1" />
                <path d="M20 12V28M12 20H28" stroke="#FF4D16" strokeWidth="2" strokeLinecap="round" />
              </svg>
            } 
          />
          
          {/* Marketing Feature */}
          <FeatureCard 
            title="Marketing" 
            icon={
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="8" fill="#FF4D16" fillOpacity="0.1" />
                <path d="M20 28V12M13 15L20 12L27 15" stroke="#FF4D16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13 25L20 28L27 25" stroke="#FF4D16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            } 
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
