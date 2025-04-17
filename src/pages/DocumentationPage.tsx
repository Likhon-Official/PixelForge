import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Search, Book, Boxes, Palette, Terminal, Wrench, Laptop, Shield, Zap } from 'lucide-react';

const sections = {
  'getting-started': {
    title: 'Getting Started',
    icon: <Book className="w-5 h-5" />,
    items: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'installation', title: 'Installation' },
      { id: 'usage', title: 'Basic Usage' },
      { id: 'typescript', title: 'TypeScript Setup' },
    ],
  },
  'components': {
    title: 'Components',
    icon: <Boxes className="w-5 h-5" />,
    items: [
      { id: 'buttons', title: 'Buttons' },
      { id: 'checkboxes', title: 'Checkboxes' },
      { id: 'toggles', title: 'Toggle Switches' },
      { id: 'cards', title: 'Cards' },
      { id: 'loaders', title: 'Loaders' },
      { id: 'inputs', title: 'Inputs' },
      { id: 'radio', title: 'Radio Buttons' },
      { id: 'tooltips', title: 'Tooltips' },
    ],
  },
  'styling': {
    title: 'Styling',
    icon: <Palette className="w-5 h-5" />,
    items: [
      { id: 'theming', title: 'Theming' },
      { id: 'customization', title: 'Customization' },
      { id: 'tailwind', title: 'Tailwind Config' },
      { id: 'css-variables', title: 'CSS Variables' },
    ],
  },
  'advanced': {
    title: 'Advanced Topics',
    icon: <Terminal className="w-5 h-5" />,
    items: [
      { id: 'architecture', title: 'Architecture' },
      { id: 'performance', title: 'Performance' },
      { id: 'accessibility', title: 'Accessibility' },
      { id: 'testing', title: 'Testing' },
    ],
  },
  'tooling': {
    title: 'Tooling',
    icon: <Wrench className="w-5 h-5" />,
    items: [
      { id: 'cli', title: 'CLI Tools' },
      { id: 'vscode', title: 'VS Code' },
      { id: 'plugins', title: 'Plugins' },
    ],
  },
  'deployment': {
    title: 'Deployment',
    icon: <Laptop className="w-5 h-5" />,
    items: [
      { id: 'build', title: 'Build Process' },
      { id: 'optimization', title: 'Optimization' },
      { id: 'hosting', title: 'Hosting' },
    ],
  },
  'security': {
    title: 'Security',
    icon: <Shield className="w-5 h-5" />,
    items: [
      { id: 'best-practices', title: 'Best Practices' },
      { id: 'vulnerabilities', title: 'Common Vulnerabilities' },
      { id: 'updates', title: 'Security Updates' },
    ],
  },
  'performance': {
    title: 'Performance',
    icon: <Zap className="w-5 h-5" />,
    items: [
      { id: 'optimization', title: 'Optimization' },
      { id: 'metrics', title: 'Metrics' },
      { id: 'monitoring', title: 'Monitoring' },
    ],
  },
};

const DocumentationContent = ({ activeSection, activeItem }) => {
  const content = {
    'introduction': {
      title: 'Introduction',
      content: (
        <div className="space-y-6">
          <p className="text-gray-300 leading-relaxed">
            JSLibrary is a comprehensive collection of React components built with Tailwind CSS. Our library provides a set of beautiful, accessible, and customizable components that help you build modern web applications faster.
          </p>
          
          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            <h3 className="text-white font-medium mb-2">Key Features</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                <span>100+ ready-to-use components</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                <span>Built with TypeScript for better DX</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                <span>Fully customizable with Tailwind CSS</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                <span>Accessible and responsive by default</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-medium">Quick Start</h3>
            <pre className="bg-black/30 p-4 rounded-lg overflow-x-auto">
              <code className="text-gray-300">npm install @jslibrary/react</code>
            </pre>
          </div>
        </div>
      ),
    },
    'installation': {
      title: 'Installation',
      content: (
        <div className="space-y-6">
          <p className="text-gray-300 leading-relaxed">
            Getting started with JSLibrary is easy. You can install it using npm, yarn, or pnpm.
          </p>

          <div className="space-y-4">
            <h3 className="text-white font-medium">Using npm</h3>
            <pre className="bg-black/30 p-4 rounded-lg overflow-x-auto">
              <code className="text-gray-300">npm install @jslibrary/react</code>
            </pre>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-medium">Using yarn</h3>
            <pre className="bg-black/30 p-4 rounded-lg overflow-x-auto">
              <code className="text-gray-300">yarn add @jslibrary/react</code>
            </pre>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-medium">Using pnpm</h3>
            <pre className="bg-black/30 p-4 rounded-lg overflow-x-auto">
              <code className="text-gray-300">pnpm add @jslibrary/react</code>
            </pre>
          </div>
        </div>
      ),
    },
    // Add more content for other sections as needed
  };

  const currentContent = content[activeItem] || {
    title: 'Documentation',
    content: <p className="text-gray-300">Select a topic from the sidebar to view documentation.</p>,
  };

  return (
    <div className="min-w-0">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">{currentContent.title}</h1>
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <span>Documentation</span>
          <ChevronRight className="w-4 h-4" />
          <span>{sections[activeSection]?.title}</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">{currentContent.title}</span>
        </div>
      </div>
      <div className="prose prose-invert max-w-none">
        {currentContent.content}
      </div>
    </div>
  );
};

const DocumentationPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('getting-started');
  const [activeItem, setActiveItem] = useState('introduction');
  const location = useLocation();

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex gap-8">
        {/* Sidebar */}
        <div className="w-64 flex-shrink-0">
          <div className="sticky top-24">
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search docs..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <nav className="space-y-8">
              {Object.entries(sections).map(([key, section]) => (
                <div key={key}>
                  <div className="flex items-center gap-2 text-sm font-medium text-white mb-2">
                    {section.icon}
                    <span>{section.title}</span>
                  </div>
                  <ul className="space-y-1">
                    {section.items.map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => {
                            setActiveSection(key);
                            setActiveItem(item.id);
                          }}
                          className={`w-full text-left px-4 py-2 text-sm rounded-lg transition-colors ${
                            activeSection === key && activeItem === item.id
                              ? 'bg-purple-500/20 text-purple-400'
                              : 'text-gray-400 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          {item.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <DocumentationContent activeSection={activeSection} activeItem={activeItem} />
        </div>

        {/* Table of Contents */}
        <div className="w-64 flex-shrink-0">
          <div className="sticky top-24">
            <h3 className="font-medium text-white mb-4">On this page</h3>
            <nav className="space-y-1">
              <button className="block w-full text-left px-4 py-2 text-sm rounded-lg text-purple-400 bg-purple-500/20">
                Overview
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm rounded-lg text-gray-400 hover:text-white hover:bg-white/5">
                Key Features
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm rounded-lg text-gray-400 hover:text-white hover:bg-white/5">
                Quick Start
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;