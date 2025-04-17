import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronRight, Copy, Check, Search, Filter, Loader2, Heart, Bell, X, Menu, ArrowRight, Sun, Moon } from 'lucide-react';

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
}

const ComponentsPage: React.FC<ComponentsPageProps> = ({ isCompanionOpen, setIsCompanionOpen }) => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDark, setIsDark] = useState(false);

  const components: Record<string, Component[]> = {
    buttons: [
      {
        id: 'hover-button',
        title: 'Hover Me',
        author: 'jsdev',
        views: '2.8K',
        likes: 127,
        preview: (
          <button className="relative px-6 py-2 font-medium text-white transition duration-300 bg-black/30 hover:bg-black/50 rounded-full group">
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            Hover Me
          </button>
        ),
        code: `<button className="relative px-6 py-2 font-medium text-white transition duration-300 bg-black/30 hover:bg-black/50 rounded-full group">
  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
  Hover Me
</button>`,
      },
      {
        id: 'gradient-button',
        title: 'Gradient Button',
        author: 'uimaster',
        views: '1.5K',
        likes: 89,
        preview: (
          <button className="px-6 py-2 font-medium text-white bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105">
            Click Me
          </button>
        ),
        code: `<button className="px-6 py-2 font-medium text-white bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105">
  Click Me
</button>`,
      },
      {
        id: 'icon-button',
        title: 'Icon Button',
        author: 'designpro',
        views: '3.2K',
        likes: 156,
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
        id: 'notification-button',
        title: 'Notification Button',
        author: 'webcraft',
        views: '2.1K',
        likes: 98,
        preview: (
          <button className="relative inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg text-white transition-colors">
            <Bell className="w-4 h-4" />
            <span>Notifications</span>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center">3</span>
          </button>
        ),
        code: `<button className="relative inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg text-white transition-colors">
  <Bell className="w-4 h-4" />
  <span>Notifications</span>
  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center">3</span>
</button>`,
      },
    ],
    toggles: [
      {
        id: 'smooth-toggle',
        title: 'Smooth Toggle',
        author: 'uiexpert',
        views: '2.1K',
        likes: 143,
        preview: (
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-12 h-6 bg-gray-600 peer-checked:bg-purple-500 rounded-full transition-colors">
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
            </div>
          </label>
        ),
        code: `<label className="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" className="sr-only peer" />
  <div className="w-12 h-6 bg-gray-600 peer-checked:bg-purple-500 rounded-full transition-colors">
    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
  </div>
</label>`,
      },
      {
        id: 'theme-toggle',
        title: 'Theme Toggle',
        author: 'thememaster',
        views: '1.8K',
        likes: 112,
        preview: (
          <button
            onClick={() => setIsDark(!isDark)}
            className="relative inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-blue-400" />
            )}
          </button>
        ),
        code: `<button
  onClick={() => setIsDark(!isDark)}
  className="relative inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
>
  {isDark ? (
    <Sun className="w-5 h-5 text-yellow-400" />
  ) : (
    <Moon className="w-5 h-5 text-blue-400" />
  )}
</button>`,
      },
    ],
    navigation: [
      {
        id: 'mobile-menu',
        title: 'Mobile Menu',
        author: 'navpro',
        views: '4.2K',
        likes: 234,
        preview: (
          <div className="relative">
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg text-white transition-colors">
              <Menu className="w-5 h-5" />
              <span>Menu</span>
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white/10 backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden">
              <div className="py-1">
                <a href="#" className="block px-4 py-2 text-white hover:bg-white/10">Home</a>
                <a href="#" className="block px-4 py-2 text-white hover:bg-white/10">About</a>
                <a href="#" className="block px-4 py-2 text-white hover:bg-white/10">Services</a>
                <a href="#" className="block px-4 py-2 text-white hover:bg-white/10">Contact</a>
              </div>
            </div>
          </div>
        ),
        code: `<div className="relative">
  <button className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg text-white transition-colors">
    <Menu className="w-5 h-5" />
    <span>Menu</span>
  </button>
  <div className="absolute top-full left-0 mt-2 w-48 bg-white/10 backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden">
    <div className="py-1">
      <a href="#" className="block px-4 py-2 text-white hover:bg-white/10">Home</a>
      <a href="#" className="block px-4 py-2 text-white hover:bg-white/10">About</a>
      <a href="#" className="block px-4 py-2 text-white hover:bg-white/10">Services</a>
      <a href="#" className="block px-4 py-2 text-white hover:bg-white/10">Contact</a>
    </div>
  </div>
</div>`,
      },
      {
        id: 'breadcrumb',
        title: 'Breadcrumb',
        author: 'navmaster',
        views: '1.9K',
        likes: 87,
        preview: (
          <nav className="flex items-center space-x-2 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a>
            <ChevronRight className="w-4 h-4 text-gray-600" />
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Products</a>
            <ChevronRight className="w-4 h-4 text-gray-600" />
            <span className="text-white">Details</span>
          </nav>
        ),
        code: `<nav className="flex items-center space-x-2 text-sm">
  <a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a>
  <ChevronRight className="w-4 h-4 text-gray-600" />
  <a href="#" className="text-gray-400 hover:text-white transition-colors">Products</a>
  <ChevronRight className="w-4 h-4 text-gray-600" />
  <span className="text-white">Details</span>
</nav>`,
      },
    ],
    cards: [
      {
        id: 'glass-card',
        title: 'Glass Card',
        author: 'cardmaster',
        views: '3.4K',
        likes: 218,
        preview: (
          <div className="w-64 p-6 backdrop-blur-lg bg-white/10 rounded-xl border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-2">Glass Card</h3>
            <p className="text-gray-300">A beautiful card with glass morphism effect.</p>
          </div>
        ),
        code: `<div className="w-64 p-6 backdrop-blur-lg bg-white/10 rounded-xl border border-white/20">
  <h3 className="text-lg font-semibold text-white mb-2">Glass Card</h3>
  <p className="text-gray-300">A beautiful card with glass morphism effect.</p>
</div>`,
      },
      {
        id: 'feature-card',
        title: 'Feature Card',
        author: 'uimaster',
        views: '2.7K',
        likes: 156,
        preview: (
          <div className="w-64 p-6 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl border border-white/10">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
              <ArrowRight className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Feature Title</h3>
            <p className="text-gray-300 text-sm">Describe your amazing feature here.</p>
          </div>
        ),
        code: `<div className="w-64 p-6 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl border border-white/10">
  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
    <ArrowRight className="w-5 h-5 text-purple-400" />
  </div>
  <h3 className="text-lg font-semibold text-white mb-2">Feature Title</h3>
  <p className="text-gray-300 text-sm">Describe your amazing feature here.</p>
</div>`,
      },
    ],
  };

  const handleComponentClick = (componentId: string) => {
    navigate(`/components/${componentId}`);
  };

  const currentComponents = components[category as keyof typeof components] || components.buttons;
  const categoryTitle = category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Buttons';

  return (
    <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">{categoryTitle}</h1>
        <p className="text-gray-400 text-lg">Open-source components made with Tailwind CSS</p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-wrap gap-4 items-center mb-8">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search components..."
            className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-colors">
          <Filter className="w-5 h-5" />
          <span>Filters</span>
        </button>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-colors">
            All
          </button>
          <button className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-400 hover:bg-purple-500/30 transition-colors">
            Tailwind
          </button>
          <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-colors">
            CSS
          </button>
        </div>
      </div>

      {/* Components Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentComponents.map((component, index) => (
          <div 
            key={index} 
            className="group relative bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 cursor-pointer"
            onClick={() => handleComponentClick(component.id)}
          >
            {/* Preview */}
            <div className="aspect-video bg-[#0A0A0A] flex items-center justify-center p-8">
              {component.preview}
            </div>
            
            {/* Info */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-medium">{component.title}</h3>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">{component.author}</span>
                <div className="flex items-center gap-4">
                  <span className="text-gray-400">{component.views} views</span>
                  <span className="text-gray-400">{component.likes} likes</span>
                </div>
              </div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-lg font-medium">View Component</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComponentsPage;