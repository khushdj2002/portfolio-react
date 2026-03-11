'use client'

import { motion } from 'framer-motion'

export default function About() {
  const skills = [
    { category: 'Languages', items: ['Python', 'Java', 'SQL', 'Scala'], icon: '💻' },
    { category: 'Big Data', items: ['Apache Spark', 'EMR', 'Athena'], icon: '⚡' },
    { category: 'AWS & Cloud', items: ['S3', 'Redshift', 'Lambda', 'Glue', 'CloudWatch'], icon: '☁️' },
    { category: 'Data & Analytics', items: ['QuickSight', 'WLM', 'Step Functions'], icon: '📊' },
    { category: 'Testing & Quality', items: ['Scala Unit Testing', 'Automated Validation'], icon: '✅' },
    { category: 'Soft Skills', items: ['Ownership', 'Problem Solving', 'Collaboration'], icon: '🤝' },
  ]

  const stats = [
    { value: '1M+', label: 'Records Processed Daily' },
    { value: '30%', label: 'Defect Reduction' },
    { value: '98%', label: 'SLA Compliance' },
    { value: '60%', label: 'Faster Reporting' },
  ]

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background */}
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
          <h2 className="section-heading">About Me</h2>
          <div className="section-divider mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a results-driven Data Engineer at <strong className="text-blue-600 dark:text-blue-400">Amazon</strong> with experience designing, scaling, and 
              operating reliable data pipelines and analytics platforms on cloud infrastructure. I have a proven track 
              record of owning end-to-end data workflows and resolving complex data quality issues.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
              Strong expertise in Apache Spark, SQL, and AWS services, with a focus on performance optimization, 
              automation, and system reliability. Recognized for problem-solving ability and delivering 
              measurable improvements in data accuracy and operational stability.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 glass-card rounded-xl"
                >
                  <div className="text-3xl font-extrabold gradient-text">{stat.value}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-5 rounded-xl group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl group-hover:scale-125 transition-transform duration-300">{skill.icon}</span>
                  <h3 className="text-base font-bold text-gray-800 dark:text-gray-200">
                    {skill.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-xs font-medium border border-blue-100 dark:border-blue-800/50 hover:scale-105 transition-transform cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
