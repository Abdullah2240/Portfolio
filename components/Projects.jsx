'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Projects() {
  const [activeTab, setActiveTab] = useState('personal')

  // ============================================
  // 👇 ADD YOUR PERSONAL PROJECTS HERE 👇
  // ============================================
  const personalProjects = [
    {
      title: 'Property Management System',
      description: 'A system for rural areas to keep record and manage properties through database integration',
      tags: ['Database', 'SQLite', 'React'],
      image: '/project1.jpg', // Add screenshot to public folder
      demoLink: '#',
      staticLink: '#',
      githubLink: 'https://github.com/yourusername/project',
    },
    {
      title: 'Heart Disease Predictor',
      description: 'A heart disease predictor that predicts your likeliness of heart disease, model trained on UCI dataset',
      tags: ['ML models', 'Data Science'],
      image: '/project2.jpg',
      demoLink: '#',
      staticLink: 'heart-disease-predicter-o7wnaff14.vercel.app',
      githubLink: 'https://github.com/Abdullah2240/heart-disease-predicter',
    },
    {
      title: 'Portfolio Website',
      description: 'This portfolio website with 3D effects',
      tags: ['Next.js', 'Framer Motion', 'Three.js'],
      image: '/project3.jpg',
      demoLink: '#',
      staticLink: '#',
      githubLink: '#',
    },
  ]

  // ============================================
  // 👇 ADD YOUR GROUP PROJECTS HERE 👇
  // ============================================
  const groupProjects = [
    {
      title: 'Galaxy Search',
      description: 'A search engine on the OpenAlex web',
      tags: ['DSA', 'Embeddings', '50k articles'],
      image: '/group1.jpg',
      demoLink: '#',
      staticLink: '#',
      githubLink: 'https://github.com/Abdullah2240/DSA-project-search-engine.git',
    },
    {
      title: 'InstaNote',
      description: 'A site that turns a yt video to concise notes and then quizzes you from it',
      tags: ['AI', 'LLM'],
      image: '/group2.jpg',
      demoLink: '#',
      staticLink: '#',
      githubLink: 'https://github.com/Abdullah2240/InstaNote',
    },
    {
      title: 'ZeroDevAI',
      description: 'A site that turns voice prompt to a live frontend and then deploys it too',
      tags: ['LLM Wrapper', 'Azure VM'],
      image: '/group3.jpg',
      demoLink: '#',
      staticLink: '#',
      githubLink: '#',
    },
  ]

  const projects = activeTab === 'personal' ? personalProjects : groupProjects

  return (
    <section id="projects" className="min-h-screen bg-primary py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my work - from personal passion projects to collaborative team efforts
          </p>
        </motion.div>

        {/* Tab Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setActiveTab('personal')}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'personal'
                ? 'bg-accent text-white shadow-lg shadow-accent/50'
                : 'bg-secondary text-gray-400 hover:text-white border border-accent/30 hover:border-accent/60'
            }`}
          >
            🚀 Personal Projects
          </button>
          <button
            onClick={() => setActiveTab('group')}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
              activeTab === 'group'
                ? 'bg-accent text-white shadow-lg shadow-accent/50'
                : 'bg-secondary text-gray-400 hover:text-white border border-accent/30 hover:border-accent/60'
            }`}
          >
            👥 Group Projects
          </button>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="bg-secondary rounded-2xl overflow-hidden border border-accent/20 hover:border-accent/60 transition-all group"
            >
              {/* Screenshot Image */}
              <div className="relative h-48 overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                {/* Fallback gradient if no image */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-accent/30 via-purple-500/20 to-pink-500/20 hidden items-center justify-center"
                >
                  <span className="text-4xl">📸</span>
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Info */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                {/* One-liner description */}
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-gray-300 text-xs"
                    >
                      {tag} {project.tags.indexOf(tag) < project.tags.length - 1 && '•'}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2.5 bg-accent text-white text-sm font-medium rounded-lg text-center hover:bg-accent/80 hover:shadow-lg hover:shadow-accent/30 transition-all"
                  >
                    🌐 Live Demo
                  </a>
                  <a
                    href={project.staticLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2.5 border border-accent/50 text-accent text-sm font-medium rounded-lg text-center hover:bg-accent/10 transition-all"
                  >
                    🖥 Static Site
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2.5 bg-gray-600 text-white text-sm font-medium rounded-lg text-center hover:bg-gray-500 hover:shadow-lg transition-all"
                  >
                    💻 GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Add More Indicator */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-500 mt-12 text-sm"
        >
          More projects coming soon...
        </motion.p>
      </div>
    </section>
  )
}
