import React from 'react';
import { ExternalLink, Star, Users } from 'lucide-react';

const ShowcasePage = () => {
  const showcaseProjects = [
    {
      title: 'Dashboard Pro',
      description: 'A modern admin dashboard with dark mode and real-time analytics.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: 'https://example.com/dashboard-pro',
      stars: '2.4k',
      users: '12k+',
      tags: ['Dashboard', 'Analytics', 'Dark Mode'],
    },
    {
      title: 'E-commerce Store',
      description: 'Full-featured online store with cart and checkout functionality.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: 'https://example.com/ecommerce',
      stars: '1.8k',
      users: '8k+',
      tags: ['E-commerce', 'Shopping Cart', 'Payments'],
    },
    {
      title: 'Social Platform',
      description: 'Modern social media platform with real-time messaging.',
      image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      link: 'https://example.com/social',
      stars: '3.2k',
      users: '25k+',
      tags: ['Social', 'Messaging', 'Real-time'],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Showcase</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Discover amazing projects built with JSLibrary components
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {showcaseProjects.map((project, index) => (
          <div key={index} className="group relative bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300">
            <div className="aspect-video">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-2 py-1 bg-white/5 rounded-full text-sm text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-gray-400">
                    <Star className="w-4 h-4" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400">
                    <Users className="w-4 h-4" />
                    <span>{project.users}</span>
                  </div>
                </div>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-purple-400 hover:text-purple-300 transition"
                >
                  <span>Visit</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Submit Project CTA */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Built something with JSLibrary?
        </h2>
        <p className="text-gray-400 mb-6">
          Share your project with the community and get featured in our showcase.
        </p>
        <a
          href="https://github.com/your-repo/submit"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
        >
          <span>Submit Your Project</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default ShowcasePage;
