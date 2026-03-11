'use client'

import { motion } from 'framer-motion'

export default function Projects() {
  const projects = [
    {
      title: 'DOLCE - E-Commerce Website',
      description: 'User-friendly e-commerce platform with secure payment integration, authentication, and real-time inventory management. Improved engagement through responsive design.',
      image: '/icecream-1.png',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Sanity'],
      link: 'https://github.com/vamshidhar644/Dolce_Web',
      gradient: 'from-orange-400 to-pink-500'
    },
    {
      title: 'Automatic Dustbin',
      description: 'Arduino-based automatic dustbin with waste segregation into dry and wet categories. Uses ultrasonic sensors for motion detection and servo motors for lid operation.',
      image: '/notes.png',
      tags: ['Arduino', 'Ultrasonic Sensors', 'Servo Motors', 'IoT'],
      link: '#',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      title: 'Crypto Tracker',
      description: 'Real-time cryptocurrency tracking application displaying live prices and market data for top cryptocurrencies with dynamic charts.',
      image: '/crypto.png',
      tags: ['JavaScript', 'API', 'Real-time'],
      link: 'https://crypto-exchange-weld.vercel.app/',
      gradient: 'from-blue-400 to-indigo-500'
    }
  ]

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-800/50 -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Featured Projects</h2>
          <div className="section-divider mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Gradient border effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}></div>
              
              <div className="relative glass-card rounded-2xl overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* Project number badge */}
                  <div className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white text-sm font-bold shadow-lg`}>
                    {index + 1}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 bg-white text-gray-900 px-5 py-2 rounded-full font-semibold text-sm hover:bg-gray-100 shadow-xl"
                  >
                    View Project →
                  </a>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-xs font-medium border border-blue-100 dark:border-blue-800/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
