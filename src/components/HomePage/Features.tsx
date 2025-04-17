import React from 'react';
import { Zap, Shield, Palette, Box, RefreshCcw, Code2 } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Lightning Fast',
    description: 'Optimized for performance with zero unnecessary dependencies.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Type Safe',
    description: 'Built with TypeScript for better developer experience and fewer bugs.',
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'Customizable',
    description: 'Easily customize components to match your brand and design system.',
  },
  {
    icon: <Box className="w-6 h-6" />,
    title: 'Modular',
    description: 'Import only what you need, keeping your bundle size small.',
  },
  {
    icon: <RefreshCcw className="w-6 h-6" />,
    title: 'Auto Updates',
    description: 'Regular updates with new components and improvements.',
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'Developer First',
    description: 'Built by developers, for developers, with excellent documentation.',
  },
];

const Features = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Everything you need to build modern apps
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive suite of high-quality components, ready to help you build your next project faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="backdrop-blur-xl bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg p-3 w-fit mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;