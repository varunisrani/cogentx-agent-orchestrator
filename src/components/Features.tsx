import React from 'react';

interface FeatureCardProps {
  title: string;
  icon: React.ReactNode;
}

const FeatureCard = ({ title, icon }: FeatureCardProps) => {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-cogent-orange/20 to-purple-500/20 rounded-xl blur-xl transition-all duration-500 group-hover:blur-2xl opacity-0 group-hover:opacity-100"></div>
      <div className="relative flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 transition-all duration-300 group-hover:border-white/20 group-hover:transform group-hover:-translate-y-1">
        <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
        <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">{title}</h3>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <div id="features" className="relative py-24 px-4 md:px-8 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,77,22,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(147,51,234,0.15),transparent_50%)]"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-cogent-orange to-white">AI Agents for Every Need</h2>
        <p className="text-lg text-center text-white/70 mb-16 max-w-2xl mx-auto">Discover the power of AI agents across different domains and use cases</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Compliance Feature */}
          <FeatureCard 
            title="Compliance" 
            icon={
              <div className="relative">
                <div className="absolute inset-0 bg-cogent-orange/20 blur-lg rounded-full"></div>
                <svg className="relative w-12 h-12" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="8" fill="#FF4D16" fillOpacity="0.1" />
                  <path d="M28 14L17 25L12 20" stroke="#FF4D16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            } 
          />
          
          {/* Data Feature */}
          <FeatureCard 
            title="Data" 
            icon={
              <div className="relative">
                <div className="absolute inset-0 bg-purple-500/20 blur-lg rounded-full"></div>
                <svg className="relative w-12 h-12" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="8" fill="#FF4D16" fillOpacity="0.1" />
                  <path d="M14 28V18M20 28V12M26 28V22" stroke="#FF4D16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            } 
          />
          
          {/* Agent Feature */}
          <FeatureCard 
            title="Your Agent" 
            icon={
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 blur-lg rounded-full"></div>
                <svg className="relative w-12 h-12" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="8" fill="#FF4D16" fillOpacity="0.1" />
                  <circle cx="20" cy="16" r="4" stroke="#FF4D16" strokeWidth="2" />
                  <path d="M12 28C12 24.6863 15.5817 22 20 22C24.4183 22 28 24.6863 28 28" stroke="#FF4D16" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            } 
          />
          
          {/* Legal Feature */}
          <FeatureCard 
            title="Legal" 
            icon={
              <div className="relative">
                <div className="absolute inset-0 bg-green-500/20 blur-lg rounded-full"></div>
                <svg className="relative w-12 h-12" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="8" fill="#FF4D16" fillOpacity="0.1" />
                  <path d="M20 12V28M12 20H28" stroke="#FF4D16" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            } 
          />
          
          {/* Marketing Feature */}
          <FeatureCard 
            title="Marketing" 
            icon={
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-500/20 blur-lg rounded-full"></div>
                <svg className="relative w-12 h-12" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="8" fill="#FF4D16" fillOpacity="0.1" />
                  <path d="M20 28V12M13 15L20 12L27 15" stroke="#FF4D16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13 25L20 28L27 25" stroke="#FF4D16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            } 
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
