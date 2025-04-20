import React from 'react';
import { Copy, Check, Terminal } from 'lucide-react';

const GettingStartedPage = () => {
  const [copiedCommand, setCopiedCommand] = React.useState<string | null>(null);

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedCommand(text);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-white mb-6">Getting Started</h1>
      
      {/* Installation */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">Installation</h2>
        <p className="text-gray-300 mb-6">
          Get started with JSLibrary by installing the package using your preferred package manager.
        </p>
        
        <div className="space-y-4">
          <div className="bg-white/5 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-white/5">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400">npm</span>
              </div>
              <button
                onClick={() => handleCopy('npm install @jslibrary/react')}
                className="text-gray-400 hover:text-white transition"
              >
                {copiedCommand === 'npm install @jslibrary/react' ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
            <div className="p-4 font-mono text-sm">
              <code className="text-purple-400">npm install @jslibrary/react</code>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-white/5">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400">yarn</span>
              </div>
              <button
                onClick={() => handleCopy('yarn add @jslibrary/react')}
                className="text-gray-400 hover:text-white transition"
              >
                {copiedCommand === 'yarn add @jslibrary/react' ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
            <div className="p-4 font-mono text-sm">
              <code className="text-purple-400">yarn add @jslibrary/react</code>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">Quick Start</h2>
        <p className="text-gray-300 mb-6">
          After installation, you can start using JSLibrary components in your React application.
        </p>

        <div className="bg-white/5 rounded-lg overflow-hidden mb-6">
          <div className="flex items-center justify-between px-4 py-2 bg-white/5">
            <span className="text-sm text-gray-400">Example Usage</span>
            <button
              onClick={() => handleCopy(`import { Button } from '@jslibrary/react';

function App() {
  return (
    <Button variant="gradient">
      Get Started
    </Button>
  );
}`)}
              className="text-gray-400 hover:text-white transition"
            >
              {copiedCommand === `import { Button } from '@jslibrary/react';

function App() {
  return (
    <Button variant="gradient">
      Get Started
    </Button>
  );
}` ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
          <div className="p-4 font-mono text-sm">
            <pre className="text-purple-400">{`import { Button } from '@jslibrary/react';

function App() {
  return (
    <Button variant="gradient">
      Get Started
    </Button>
  );
}`}</pre>
          </div>
        </div>
      </section>

      {/* Configuration */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">Configuration</h2>
        <p className="text-gray-300 mb-6">
          JSLibrary is built with Tailwind CSS. Make sure you have Tailwind CSS installed and configured in your project.
        </p>

        <div className="bg-white/5 rounded-lg p-6 space-y-4">
          <h3 className="text-lg font-medium text-white">Requirements</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>React 18 or higher</li>
            <li>Tailwind CSS 3.0 or higher</li>
            <li>Node.js 16 or higher</li>
          </ul>
        </div>
      </section>

      {/* Next Steps */}
      <section>
        <h2 className="text-2xl font-semibold text-white mb-4">Next Steps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="/components" className="block group">
            <div className="h-full bg-white/5 rounded-lg p-6 hover:bg-white/10 transition">
              <h3 className="text-lg font-medium text-white mb-2">Browse Components</h3>
              <p className="text-gray-400">Explore our collection of beautiful, ready-to-use components.</p>
            </div>
          </a>
          <a href="/showcase" className="block group">
            <div className="h-full bg-white/5 rounded-lg p-6 hover:bg-white/10 transition">
              <h3 className="text-lg font-medium text-white mb-2">View Showcase</h3>
              <p className="text-gray-400">See how others are using JSLibrary in production.</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default GettingStartedPage;
