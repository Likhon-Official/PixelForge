import React from 'react';
import { Link } from 'react-router-dom';
import { Github } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative z-10 py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl opacity-30"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          <span className="block mb-2">Beautifully designed</span>
          <span className="block mb-2">components,{' '}
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] text-transparent bg-clip-text">ready for</span>
          </span>
          <span className="bg-gradient-to-r from-[#60A5FA] to-[#67E8F9] text-transparent bg-clip-text">production</span>
        </h2>
        
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
          A collection of fully accessible, customizable JavaScript components that integrate seamlessly with React and Tailwind CSS.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/get-started"
             className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md text-white px-8 py-3 font-medium hover:bg-white/20 transition w-full sm:w-auto">
            Get Started
          </Link>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
             className="bg-black/40 backdrop-blur-sm border border-white/10 text-white px-8 py-3 rounded-md font-medium hover:bg-black/60 transition w-full sm:w-auto">
            <div className="flex items-center justify-center gap-2">
              <Github className="w-5 h-5" />
              <span>View on GitHub</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;