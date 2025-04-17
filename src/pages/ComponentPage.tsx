import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Copy, Check, Code2, Paintbrush, Settings, ExternalLink } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface Props {
  isCompanionOpen: boolean;
  setIsCompanionOpen: (isOpen: boolean) => void;
}

const ComponentPage: React.FC<Props> = ({ isCompanionOpen, setIsCompanionOpen }) => {
  const { componentId } = useParams();
  const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'customize'>('preview');
  const [copied, setCopied] = useState(false);
  const [customization, setCustomization] = useState({
    padding: '16px',
    borderRadius: '8px',
    backgroundColor: '#1a1a1a',
    textColor: '#ffffff',
  });

  // Example component data - in a real app, this would come from a database or API
  const component = {
    id: componentId,
    title: 'Hover Button',
    description: 'A beautiful button with hover animation effect',
    author: 'jsdev',
    views: '2.8K',
    likes: 127,
    code: `<button className="relative px-6 py-2 font-medium text-white transition duration-300 bg-black/30 hover:bg-black/50 rounded-full group">
  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
  Hover Me
</button>`,
    preview: (customStyles: any) => (
      <button 
        className="relative px-6 py-2 font-medium text-white transition duration-300 bg-black/30 hover:bg-black/50 rounded-full group"
        style={customStyles}
      >
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        Hover Me
      </button>
    ),
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(component.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCustomizationChange = (key: string, value: string) => {
    setCustomization(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/components"
            className="inline-flex items-center text-gray-400 hover:text-white transition mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Components
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">{component.title}</h1>
              <p className="text-gray-400">{component.description}</p>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={handleCopy}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? 'Copied!' : 'Copy Code'}
              </button>
              <a 
                href="#"
                className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-400 hover:bg-purple-500/30 transition"
              >
                <ExternalLink className="w-4 h-4" />
                View Demo
              </a>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab('preview')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
              activeTab === 'preview' 
                ? 'bg-white/10 text-white' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Code2 className="w-4 h-4" />
            Preview
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
              activeTab === 'code' 
                ? 'bg-white/10 text-white' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Code2 className="w-4 h-4" />
            Code
          </button>
          <button
            onClick={() => setActiveTab('customize')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
              activeTab === 'customize' 
                ? 'bg-white/10 text-white' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Paintbrush className="w-4 h-4" />
            Customize
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Preview/Editor Panel */}
          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            {activeTab === 'preview' && (
              <div className="p-8 flex items-center justify-center min-h-[400px]">
                {component.preview(customization)}
              </div>
            )}
            {activeTab === 'code' && (
              <div className="p-4">
                <SyntaxHighlighter 
                  language="jsx"
                  style={atomDark}
                  customStyle={{
                    background: 'transparent',
                    padding: '1rem',
                    margin: 0,
                    borderRadius: '0.5rem',
                  }}
                >
                  {component.code}
                </SyntaxHighlighter>
              </div>
            )}
            {activeTab === 'customize' && (
              <div className="p-6 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Padding
                  </label>
                  <input
                    type="text"
                    value={customization.padding}
                    onChange={(e) => handleCustomizationChange('padding', e.target.value)}
                    className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Border Radius
                  </label>
                  <input
                    type="text"
                    value={customization.borderRadius}
                    onChange={(e) => handleCustomizationChange('borderRadius', e.target.value)}
                    className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Background Color
                  </label>
                  <input
                    type="text"
                    value={customization.backgroundColor}
                    onChange={(e) => handleCustomizationChange('backgroundColor', e.target.value)}
                    className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Text Color
                  </label>
                  <input
                    type="text"
                    value={customization.textColor}
                    onChange={(e) => handleCustomizationChange('textColor', e.target.value)}
                    className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2 text-white"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Properties Panel */}
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-medium text-white mb-4">Properties</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Class Name
                  </label>
                  <div className="bg-black/30 rounded-lg p-4">
                    <code className="text-purple-400">
                      relative px-6 py-2 font-medium text-white transition duration-300 bg-black/30 hover:bg-black/50 rounded-full group
                    </code>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Animation
                  </label>
                  <div className="bg-black/30 rounded-lg p-4">
                    <code className="text-purple-400">
                      transition-all duration-300
                    </code>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-medium text-white mb-4">Usage</h3>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-400">
                  This component uses Tailwind CSS classes for styling and includes a hover animation effect. 
                  The animation is achieved using CSS transitions and transforms.
                </p>
                <h4 className="text-white mt-4 mb-2">Features:</h4>
                <ul className="list-disc list-inside text-gray-400">
                  <li>Smooth hover animation</li>
                  <li>Customizable colors and sizes</li>
                  <li>Accessible focus states</li>
                  <li>Mobile responsive</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentPage;