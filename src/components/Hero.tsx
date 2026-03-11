'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  const techBadges = ['Apache Spark', 'AWS', 'Python', 'Redshift', 'SQL']

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-400/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-400/15 dark:bg-pink-500/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-gray-900/90 dark:to-gray-800/90"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-32 right-20 w-4 h-4 bg-blue-500 rounded-full animate-float opacity-40 hidden lg:block"></div>
      <div className="absolute top-60 left-20 w-3 h-3 bg-purple-500 rounded-full animate-float-slow opacity-40 hidden lg:block"></div>
      <div className="absolute bottom-40 right-40 w-5 h-5 bg-pink-400 rounded-full animate-float opacity-30 hidden lg:block" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-sm font-medium"
            >
              👋 Welcome to my portfolio
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
              Hi, I'm{' '}
              <span className="gradient-text block mt-2">Kushal D J</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 mb-4 font-semibold">
              Data Engineer | AWS Solution Architect
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed max-w-xl">
              Results-driven Data Engineer at Amazon with expertise in Apache Spark, SQL, and AWS services. 
              Building scalable data pipelines and delivering measurable improvements in data accuracy.
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
              {techBadges.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="px-3 py-1 text-sm font-medium rounded-full bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 shadow-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="#contact"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
              <motion.a 
                href="/docs/KUSHAL D J Resume_1.pdf" 
                target="_blank"
                className="btn-secondary flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Spinning gradient ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 blur-lg animate-spin-slow"></div>
              
              {/* Pulse rings */}
              <div className="absolute -inset-8 rounded-full border-2 border-blue-400/20 animate-pulse-ring"></div>
              <div className="absolute -inset-16 rounded-full border border-purple-400/10 animate-pulse-ring" style={{ animationDelay: '1s' }}></div>

              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl glow-blue">
                <img
                  src="/bng_jnv.jpeg"
                  alt="Kushal D J"
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Floating stat badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-4 top-10 glass-card px-4 py-2 rounded-xl shadow-lg"
              >
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">☁️ AWS Certified</span>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -left-4 bottom-16 glass-card px-4 py-2 rounded-xl shadow-lg"
              >
                <span className="text-sm font-bold text-purple-600 dark:text-purple-400">📦 Amazon</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  )
}
