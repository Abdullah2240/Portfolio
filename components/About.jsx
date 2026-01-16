'use client'

import { motion } from 'framer-motion'

export default function About() {
  const skills = ['Machine Learning', 'React', 'Flask', 'Fast API', 'Crow C++', 'Data Science', 'AI']

  return (
    <section className="min-h-screen bg-secondary py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
        >
          About <span className="text-accent">Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* About text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a creative developer with a passion for building beautiful, functional web experiences. With expertise in modern web technologies and a keen eye for design, I create digital solutions that stand out.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I specialize in front-end development using cutting-edge tools and frameworks. I love combining creativity with technical excellence to deliver exceptional results.
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-primary rounded-lg p-4 border border-accent/30 hover:border-accent/80 hover:bg-accent/5 transition-all"
                >
                  <p className="text-accent font-semibold">{skill}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
