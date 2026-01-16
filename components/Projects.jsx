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
      image: '/project1.jpg', // Add image to public folder
      link: 'https://github.com/yourusername/project',
    },
    {
      title: 'Heart Disease Predictor',
      description: 'A heart disease predictor that predicts your likeliness of heart disease, model trained on UCI dataset',
      tags: ['ML models', 'Data Science'],
      image: '/project2.jpg',
      link: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'This portfolio website with 3D effects',
      tags: ['Next.js', 'Framer Motion', 'Three.js'],
      image: '/project3.jpg',
      link: '#',
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
      link: '#',
      team: ['You', 'Saniya', 'Bilal'],
    },
    {
      title: 'InstaNote',
      description: 'A site that turns a yt video to concise notes and then quizzes you from it',
      tags: ['AI', 'LLM'],
      image: '/group2.jpg',
      link: '#',
      team: ['You', 'Huzaifa', 'Asim'],
    },{
      title: 'ZeroDevAI',
      description: 'A site that turns voice prompt to a live frontend and then deploys it too',
      tags: ['LLM Wrapper', 'Azure VM'],
      image: '/group2.jpg',
      link: '#',
      team: ['You', 'Huzaifa', 'Asim'],
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
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-secondary rounded-2xl overflow-hidden border border-accent/20 hover:border-accent/60 transition-all cursor-pointer group block"
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-accent/30 via-purple-500/20 to-pink-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent z-10" />
                <motion.div
                  className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-accent/30 rounded-full blur-2xl" />
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-purple-500/30 rounded-full blur-xl" />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Team members for group projects */}
                {project.team && (
                  <div className="mb-4 flex items-center gap-2">
                    <span className="text-xs text-gray-500">Team:</span>
                    <div className="flex -space-x-2">
                      {project.team.map((member, i) => (
                        <div
                          key={member}
                          className="w-6 h-6 rounded-full bg-accent/50 border-2 border-secondary flex items-center justify-center text-xs text-white"
                          title={member}
                        >
                          {member[0]}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
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
