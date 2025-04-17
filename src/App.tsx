import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { Github, Menu, X, Box, ToggleLeft, Layout, FileInput as Input, FileInput, PenTool, HelpCircle, Heart, MoreVertical } from 'lucide-react';
import ComponentsPage from './pages/ComponentsPage';
import ComponentPage from './pages/ComponentPage';
import DocumentationPage from './pages/DocumentationPage';
import Hero from './components/HomePage/Hero';
import Features from './components/HomePage/Features';
import Stats from './components/HomePage/Stats';
import Testimonials from './components/HomePage/Testimonials';
import CTA from './components/HomePage/CTA';
import Footer from './components/Footer';

function Navigation({ isMobileMenuOpen, setIsMobileMenuOpen, isCompanionOpen, setIsCompanionOpen }) {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { icon: <Box className="w-5 h-5" />, label: 'All', count: '2247', path: '/components/all' },
    { icon: <ToggleLeft className="w-5 h-5" />, label: 'Buttons', count: '285', path: '/components/buttons' },
    { icon: <Layout className="w-5 h-5" />, label: 'Cards', count: '1169', path: '/components/cards' },
    { icon: <Input className="w-5 h-5" />, label: 'Inputs', count: '343', path: '/components/inputs' },
    { icon: <FileInput className="w-5 h-5" />, label: 'Forms', count: '237', path: '/components/forms' },
    { icon: <PenTool className="w-5 h-5" />, label: 'Patterns', count: '189', path: '/components/patterns' },
    { icon: <HelpCircle className="w-5 h-5" />, label: 'Tooltips', count: '118', path: '/components/tooltips' },
    { icon: <Heart className="w-5 h-5" />, label: 'My favorites', count: null, path: '/components/favorites' },
  ];

  const handleMenuItemClick = (path: string) => {
    navigate(path);
    if (window.innerWidth < 768) {
      setIsMobileMenuOpen(false);
    }
    setIsCompanionOpen(false);
  };

  return (
    <nav className="sticky top-0 backdrop-blur-xl bg-black/20 border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white text-xl font-semibold">JSLibrary</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              <Link to="/components" className={`text-gray-300 hover:text-white transition ${location.pathname.includes('/components') ? 'text-white' : ''}`}>Components</Link>
              <Link to="/documentation" className={`text-gray-300 hover:text-white transition ${location.pathname === '/documentation' ? 'text-white' : ''}`}>Documentation</Link>
              <Link to="/examples" className={`text-gray-300 hover:text-white transition ${location.pathname === '/examples' ? 'text-white' : ''}`}>Examples</Link>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsCompanionOpen(!isCompanionOpen)}
                className="text-gray-300 hover:text-white transition p-2 rounded-lg hover:bg-white/5"
              >
                <MoreVertical className="w-5 h-5" />
              </button>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-300 hover:text-white transition">
                <Github className="w-6 h-6" />
              </a>
              <Link to="/get-started" 
                 className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-md text-white px-4 py-2 font-medium hover:bg-white/20 transition">
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 backdrop-blur-xl bg-black/20">
          <Link to="/components" className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-white/5">
            Components
          </Link>
          <Link to="/documentation" className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-white/5">
            Documentation
          </Link>
          <Link to="/examples" className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-white/5">
            Examples
          </Link>
          <div className="border-t border-white/10 my-2"></div>
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleMenuItemClick(item.path)}
              className="w-full flex items-center justify-between px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-white/5"
            >
              <div className="flex items-center space-x-3">
                {item.icon}
                <span>{item.label}</span>
              </div>
              {item.count && (
                <span className="text-gray-500">{item.count}</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <CTA />
    </main>
  );
}

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCompanionOpen, setIsCompanionOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-[#0A0A0A] relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[40rem] left-1/2 -translate-x-1/2 w-[120rem] h-[120rem] opacity-25">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-cyan-500/30 blur-3xl transform-gpu"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/20 to-purple-900/40 mix-blend-multiply"></div>
          </div>
        </div>
        <Navigation 
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          isCompanionOpen={isCompanionOpen}
          setIsCompanionOpen={setIsCompanionOpen}
        />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/components" element={
            <ComponentsPage 
              isCompanionOpen={isCompanionOpen}
              setIsCompanionOpen={setIsCompanionOpen}
            />
          } />
          <Route path="/components/:componentId" element={
            <ComponentPage 
              isCompanionOpen={isCompanionOpen}
              setIsCompanionOpen={setIsCompanionOpen}
            />
          } />
          <Route path="/documentation/*" element={<DocumentationPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;