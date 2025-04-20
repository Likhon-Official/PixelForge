import React from 'react';
import { Calendar, Tag } from 'lucide-react';

const ChangelogPage = () => {
  const versions = [
    {
      version: '1.2.0',
      date: '2025-03-15',
      type: 'Feature',
      changes: [
        'Added new Card components with various styles',
        'Introduced gradient variants for all components',
        'New animation utilities for enhanced interactivity',
        'Added TypeScript support for all components',
      ],
    },
    {
      version: '1.1.2',
      date: '2025-03-01',
      type: 'Fix',
      changes: [
        'Fixed button hover states in dark mode',
        'Improved accessibility for form components',
        'Updated documentation with new examples',
      ],
    },
    {
      version: '1.1.1',
      date: '2025-02-15',
      type: 'Enhancement',
      changes: [
        'Optimized bundle size for better performance',
        'Enhanced mobile responsiveness',
        'Added new color variants for buttons',
      ],
    },
    {
      version: '1.1.0',
      date: '2025-02-01',
      type: 'Feature',
      changes: [
        'Introduced new Form components',
        'Added customizable themes',
        'New documentation website',
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-white mb-6">Changelog</h1>
      <p className="text-gray-400 mb-12">
        Track the latest updates, improvements, and fixes to JSLibrary.
      </p>

      <div className="space-y-12">
        {versions.map((version, index) => (
          <div key={index} className="relative">
            {/* Version marker */}
            <div className="absolute left-0 top-0 w-4 h-4 bg-purple-500 rounded-full transform -translate-x-1/2"></div>
            
            {/* Version content */}
            <div className="ml-8 pb-12 border-l border-white/10 pl-8">
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-2xl font-semibold text-white">v{version.version}</h2>
                <span className={`px-2 py-1 rounded-full text-sm ${
                  version.type === 'Feature' ? 'bg-purple-500/20 text-purple-400' :
                  version.type === 'Fix' ? 'bg-red-500/20 text-red-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {version.type}
                </span>
              </div>

              <div className="flex items-center gap-4 text-gray-400 text-sm mb-6">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{version.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Tag className="w-4 h-4" />
                  <a href={`https://github.com/your-repo/releases/tag/v${version.version}`} 
                     className="hover:text-white transition">
                    Release Notes
                  </a>
                </div>
              </div>

              <ul className="space-y-3">
                {version.changes.map((change, changeIndex) => (
                  <li key={changeIndex} className="flex items-start gap-2 text-gray-300">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2"></span>
                    <span>{change}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Subscribe section */}
      <div className="mt-16 bg-white/5 rounded-xl p-8">
        <h3 className="text-xl font-semibold text-white mb-2">Stay Updated</h3>
        <p className="text-gray-400 mb-6">
          Subscribe to our newsletter to get notified about new releases and updates.
        </p>
        <form className="flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-black/30 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangelogPage;
