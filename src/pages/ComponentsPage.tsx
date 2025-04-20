import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Copy, Check, Search, Filter, Loader2, Heart, Bell, X, Menu, ArrowRight, Sun, Moon, Sparkles, Laptop, Palette, Box, LayoutGrid, MessageSquare, Inbox, ShieldCheck, Zap, Gauge, Code } from 'lucide-react';

interface ComponentsPageProps {
  isCompanionOpen: boolean;
  setIsCompanionOpen: (isOpen: boolean) => void;
}

interface Component {
  id: string;
  title: string;
  author: string;
  views: string;
  likes: number;
  preview: React.ReactNode;
  code: string;
  category: string;
  tags: string[];
}

const ComponentsPage: React.FC<ComponentsPageProps> = ({ isCompanionOpen, setIsCompanionOpen }) => {
  const { category } = useParams();
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(category || 'all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [expandedComponent, setExpandedComponent] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Components', icon: <LayoutGrid className="w-5 h-5" />, count: 12 },
    { id: 'buttons', name: 'Buttons', icon: <Box className="w-5 h-5" />, count: 3 },
    { id: 'cards', name: 'Cards', icon: <Laptop className="w-5 h-5" />, count: 2 },
    { id: 'forms', name: 'Forms', icon: <MessageSquare className="w-5 h-5" />, count: 2 },
    { id: 'alerts', name: 'Alerts', icon: <Bell className="w-5 h-5" />, count: 2 },
    { id: 'loaders', name: 'Loaders', icon: <Loader2 className="w-5 h-5" />, count: 3 },
  ];

  const components: Component[] = [
    // Buttons
    {
      id: 'gradient-button',
      title: 'Gradient Button',
      author: 'uimaster',
      views: '3.2K',
      likes: 156,
      category: 'buttons',
      tags: ['interactive', 'gradient', 'animation'],
      preview: (
        <button className="px-6 py-2 font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
          Get Started
        </button>
      ),
      code: `<button className="px-6 py-2 font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
  Get Started
</button>`,
    },
    {
      id: 'icon-button',
      title: 'Icon Button',
      author: 'designpro',
      views: '2.8K',
      likes: 134,
      category: 'buttons',
      tags: ['interactive', 'icon'],
      preview: (
        <button className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg text-white transition-colors">
          <Heart className="w-4 h-4" />
          <span>Like</span>
        </button>
      ),
      code: `<button className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg text-white transition-colors">
  <Heart className="w-4 h-4" />
  <span>Like</span>
</button>`,
    },
    {
      id: 'loading-button',
      title: 'Loading Button',
      author: 'webcraft',
      views: '1.9K',
      likes: 98,
      category: 'buttons',
      tags: ['interactive', 'loading', 'animation'],
      preview: (
        <button className="inline-flex items-center gap-2 px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
          <Loader2 className="w-4 h-4 animate-spin" />
          <span>Loading...</span>
        </button>
      ),
      code: `<button className="inline-flex items-center gap-2 px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
  <Loader2 className="w-4 h-4 animate-spin" />
  <span>Loading...</span>
</button>`,
    },

    // Cards
    {
      id: 'glass-card',
      title: 'Glass Card',
      author: 'cardmaster',
      views: '4.1K',
      likes: 218,
      category: 'cards',
      tags: ['layout', 'glassmorphism'],
      preview: (
        <div className="w-64 p-6 backdrop-blur-xl bg-white/10 rounded-xl border border-white/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium">Premium Feature</h3>
              <p className="text-gray-400 text-sm">Unlock now</p>
            </div>
          </div>
          <p className="text-gray-300 text-sm">Access exclusive features and premium content with our Pro plan.</p>
        </div>
      ),
      code: `<div className="w-64 p-6 backdrop-blur-xl bg-white/10 rounded-xl border border-white/20">
  <div className="flex items-center gap-3 mb-4">
    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
      <Sparkles className="w-5 h-5 text-white" />
    </div>
    <div>
      <h3 className="text-white font-medium">Premium Feature</h3>
      <p className="text-gray-400 text-sm">Unlock now</p>
    </div>
  </div>
  <p className="text-gray-300 text-sm">Access exclusive features and premium content with our Pro plan.</p>
</div>`,
    },
    {
      id: 'stats-card',
      title: 'Stats Card',
      author: 'uimaster',
      views: '2.7K',
      likes: 156,
      category: 'cards',
      tags: ['layout', 'dashboard'],
      preview: (
        <div className="w-64 p-6 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-medium">Performance</h3>
            <Gauge className="w-5 h-5 text-purple-400" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">CPU Usage</span>
              <span className="text-white">45%</span>
            </div>
            <div className="w-full bg-black/30 rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full" style={{ width: '45%' }}></div>
            </div>
          </div>
        </div>
      ),
      code: `<div className="w-64 p-6 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl border border-white/10">
  <div className="flex items-center justify-between mb-4">
    <h3 className="text-white font-medium">Performance</h3>
    <Gauge className="w-5 h-5 text-purple-400" />
  </div>
  <div className="space-y-2">
    <div className="flex items-center justify-between">
      <span className="text-gray-400">CPU Usage</span>
      <span className="text-white">45%</span>
    </div>
    <div className="w-full bg-black/30 rounded-full h-2">
      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '45%' }}></div>
    </div>
  </div>
</div>`,
    },

    // Forms
    {
      id: 'search-input',
      title: 'Search Input',
      author: 'formmaster',
      views: '3.5K',
      likes: 167,
      category: 'forms',
      tags: ['input', 'search'],
      preview: (
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
          />
        </div>
      ),
      code: `<div className="relative w-64">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
  <input
    type="text"
    placeholder="Search..."
    className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
  />
</div>`,
    },
    {
      id: 'floating-label',
      title: 'Floating Label',
      author: 'inputpro',
      views: '2.9K',
      likes: 145,
      category: 'forms',
      tags: ['input', 'animation'],
      preview: (
        <div className="relative w-64">
          <input
            type="text"
            id="floating-label"
            className="peer w-full bg-white/5 border border-white/10 rounded-lg px-4 pt-6 pb-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            placeholder=" "
          />
          <label
            htmlFor="floating-label"
            className="absolute text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
          >
            Email
          </label>
        </div>
      ),
      code: `<div className="relative w-64">
  <input
    type="text"
    id="floating-label"
    className="peer w-full bg-white/5 border border-white/10 rounded-lg px-4 pt-6 pb-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
    placeholder=" "
  />
  <label
    htmlFor="floating-label"
    className="absolute text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
  >
    Email
  </label>
</div>`,
    },

    // Alerts
    {
      id: 'toast-alert',
      title: 'Toast Alert',
      author: 'alertmaster',
      views: '2.4K',
      likes: 132,
      category: 'alerts',
      tags: ['notification', 'animation'],
      preview: (
        <div className="fixed bottom-4 right-4 flex items-center gap-3 bg-green-500/20 border border-green-500/30 text-green-400 px-4 py-3 rounded-lg">
          <ShieldCheck className="w-5 h-5" />
          <span>Successfully saved!</span>
          <button className="ml-2 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>
      ),
      code: `<div className="fixed bottom-4 right-4 flex items-center gap-3 bg-green-500/20 border border-green-500/30 text-green-400 px-4 py-3 rounded-lg">
  <ShieldCheck className="w-5 h-5" />
  <span>Successfully saved!</span>
  <button className="ml-2 hover:text-white">
    <X className="w-4 h-4" />
  </button>
</div>`,
    },
    {
      id: 'notification-badge',
      title: 'Notification Badge',
      author: 'badgemaster',
      views: '2.1K',
      likes: 98,
      category: 'alerts',
      tags: ['notification', 'badge'],
      preview: (
        <button className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
          <Inbox className="w-5 h-5 text-white" />
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center text-white">3</span>
        </button>
      ),
      code: `<button className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
  <Inbox className="w-5 h-5 text-white" />
  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center text-white">3</span>
</button>`,
    },

    // Loaders
    {
      id: 'spinner-loader',
      title: 'Spinner',
      author: 'loadmaster',
      views: '3.1K',
      likes: 178,
      category: 'loaders',
      tags: ['loading', 'animation'],
      preview: (
        <div className="flex items-center gap-2 text-white">
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Loading...</span>
        </div>
      ),
      code: `<div className="flex items-center gap-2 text-white">
  <Loader2 className="w-5 h-5 animate-spin" />
  <span>Loading...</span>
</div>`,
    },
    {
      id: 'pulse-loader',
      title: 'Pulse Loader',
      author: 'animaster',
      views: '2.3K',
      likes: 134,
      category: 'loaders',
      tags: ['loading', 'animation'],
      preview: (
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-75"></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-150"></div>
        </div>
      ),
      code: `<div className="flex items-center gap-1">
  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-75"></div>
  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-150"></div>
</div>`,
    },
    {
      id: 'progress-loader',
      title: 'Progress Bar',
      author: 'progresspro',
      views: '1.8K',
      likes: 92,
      category: 'loaders',
      tags: ['loading', 'progress'],
      preview: (
        <div className="w-64">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-white">Loading...</span>
            <span className="text-sm text-gray-400">75%</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2">
            <div className="bg-purple-500 h-2 rounded-full animate-[progress_2s_ease-in-out_infinite]" style={{ width: '75%' }}></div>
          </div>
        </div>
      ),
      code: `<div className="w-64">
  <div className="flex items-center justify-between mb-2">
    <span className="text-sm text-white">Loading...</span>
    <span className="text-sm text-gray-400">75%</span>
  </div>
  <div className="w-full bg-white/10 rounded-full h-2">
    <div className="bg-purple-500 h-2 rounded-full animate-[progress_2s_ease-in-out_infinite]" style={{ width: '75%' }}></div>
  </div>
</div>`,
    },
  ];

  const handleCopy = async (code: string, id: string) => {
    await navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleExpand = (id: string) => {
    setExpandedComponent(expandedComponent === id ? null : id);
  };

  const filteredComponents = components
    .filter(component => 
      (selectedCategory === 'all' || component.category === selectedCategory) &&
      (searchQuery === '' || 
        component.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        component.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    );

  return (
    <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">Components</h1>
        <p className="text-gray-400 text-lg">Beautiful, responsive components built with Tailwind CSS</p>
      </div>

      {/* Search and Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-[250px,1fr] gap-8">
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search components..."
              className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-medium mb-3">Categories</h3>
            <div className="space-y-1">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition ${
                    selectedCategory === cat.id
                      ? 'bg-purple-500/20 text-purple-400'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {cat.icon}
                    <span>{cat.name}</span>
                  </div>
                  <span className="text-sm">{cat.count}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Popular Tags */}
          <div>
            <h3 className="text-white font-medium mb-3">Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              {['interactive', 'animation', 'layout', 'gradient', 'glassmorphism'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSearchQuery(tag)}
                  className="px-3 py-1 rounded-full text-sm bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white transition"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredComponents.map((component) => (
            <div
              key={component.id}
              className={`group relative bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 ${
                expandedComponent === component.id ? 'col-span-full' : ''
              }`}
            >
              {/* Preview */}
              <div 
                className={`bg-[#0A0A0A] flex items-center justify-center p-8 ${
                  expandedComponent === component.id ? 'min-h-[200px]' : 'aspect-video'
                }`}
              >
                {component.preview}
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-medium">{component.title}</h3>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleExpand(component.id)}
                      className="text-gray-400 hover:text-white transition"
                    >
                      <Code className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleCopy(component.code, component.id)}
                      className="text-gray-400 hover:text-white transition"
                    >
                      {copiedId === component.id ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <Copy className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">{component.author}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-400">{component.views} views</span>
                    <span className="text-gray-400">{component.likes} likes</span>
                  </div>
                </div>

                {/* Expanded Code View */}
                {expandedComponent === component.id && (
                  <div className="mt-4 bg-black/30 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-gray-300">
                      <code>{component.code}</code>
                    </pre>
                  </div>
                )}
              </div>

              {/* Tags */}
              <div className="px-4 pb-4 flex flex-wrap gap-2">
                {component.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-full text-xs bg-white/5 text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComponentsPage;
