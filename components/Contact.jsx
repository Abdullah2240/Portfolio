'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-gradient-to-b from-primary to-secondary py-20 px-4 flex items-center">
      <div className="max-w-3xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="text-accent">Connect</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Have a project in mind? Let's work together to bring your ideas to life.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-secondary border border-accent/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-all"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-secondary border border-accent/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-all"
            />
          </div>

          <input
            type="text"
            placeholder="Project Title"
            className="w-full bg-secondary border border-accent/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-all"
          />

          <textarea
            placeholder="Tell me about your project..."
            rows={5}
            className="w-full bg-secondary border border-accent/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-all resize-none"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-accent text-white font-semibold py-3 rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex justify-center gap-6 mt-12"
        >
          {['GitHub', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
            <motion.a
              key={social}
              href="#"
              whileHover={{ y: -5 }}
              className="text-accent hover:text-white transition-colors"
            >
              {social}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
