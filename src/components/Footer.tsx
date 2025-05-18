import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 px-4 md:px-8 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_70%)] pointer-events-none opacity-20"></div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <span className="font-display text-2xl font-bold text-gradient">CogentX</span>
            </div>
            <p className="text-foreground/70 mb-8 max-w-md leading-relaxed">
              An open-source platform to build, ship and monitor agentic systems using the Model Context Protocol framework.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-lg">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors hover:underline decoration-primary/30 underline-offset-4">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors hover:underline decoration-primary/30 underline-offset-4">API References</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors hover:underline decoration-primary/30 underline-offset-4">Tutorials</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors hover:underline decoration-primary/30 underline-offset-4">Blog</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors hover:underline decoration-primary/30 underline-offset-4">About</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors hover:underline decoration-primary/30 underline-offset-4">Careers</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors hover:underline decoration-primary/30 underline-offset-4">Contact</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors hover:underline decoration-primary/30 underline-offset-4">Legal</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground/60">
              © 2024 CogentX. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
