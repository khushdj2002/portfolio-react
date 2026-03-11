'use client'

import { motion } from 'framer-motion'

export default function Experience() {
  const experiences = [
    {
      title: 'Data Engineer',
      company: 'Amazon',
      period: 'Feb 2025 - Present',
      location: 'Bengaluru, India',
      highlights: [
        'Owned large-scale financial reconciliation ETL pipelines processing millions of records monthly.',
        'Designed Redshift dimensional schemas, optimizing distribution/sort keys and query performance.',
        'Debugged 2,500+ lines of legacy SQL, reducing reconciliation defects by ~30%.',
        'Automated metadata management using Glue, Athena & QuickSight — cut report time by >60%.',
        'Launched independent Redshift cluster handling ~8,000 analytical queries/week.',
        'Achieved >98% SLA compliance with WLM resource controls.',
        'Built Lambda automations reducing manual operational effort by ~40%.',
        'Led critical pipeline migration with zero production incidents.',
      ],
      color: 'from-orange-400 to-orange-600',
      logo: '📦'
    },
    {
      title: 'Software Engineer',
      company: 'Asper.ai',
      period: 'Oct 2024 - Jan 2025',
      location: 'Bengaluru, India',
      highlights: [
        'Designed and optimized data pipelines for seamless cross-system integration.',
        'Contributed to 34% YOY revenue increase through data-driven solutions.',
        'Improved system efficiency by 48% through pipeline performance optimization.',
      ],
      color: 'from-green-400 to-emerald-600',
      logo: '🔧'
    },
    {
      title: 'Data Engineer Intern',
      company: 'Amazon',
      period: 'Jan 2024 - Jun 2024',
      location: 'Bengaluru, India',
      highlights: [
        'Engineered Apache Spark pipelines handling 1M+ records daily.',
        'Reduced Redshift cluster load by 20%, achieving 50% runtime reduction.',
        'Built Scala unit testing framework automating 50+ tests, cutting testing time by 40%.',
        'Developed 3 Python APIs for internal reviews, secured through cloudAuth.',
      ],
      color: 'from-orange-400 to-orange-600',
      logo: '📦'
    }
  ]

  const education = [
    {
      school: 'Vellore Institute of Technology',
      degree: 'B.Tech in Computer Science Core',
      period: 'Sep 2020 - May 2024',
      location: 'Amaravati, India',
      detail: 'CGPA: 8.44',
      icon: '🎓'
    },
    {
      school: 'Jawahar Navodaya Vidyalaya',
      degree: 'Science (PCMB)',
      period: 'Jun 2018 - May 2020',
      location: 'Chikkmagaluru, India',
      detail: '92% in Class 12th CBSE Board Exams',
      icon: '📚'
    }
  ]

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-white dark:bg-gray-900 -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Experience</h2>
          <div className="section-divider mt-4"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Glowing timeline line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden sm:block">
            <div className="absolute inset-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 blur-sm"></div>
          </div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`relative flex items-start mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="hidden sm:flex absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center text-xl shadow-lg`}>
                  {exp.logo}
                </div>
              </div>

              <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'} sm:pl-20 md:pl-0`}>
                <div className="glass-card p-6 rounded-xl group hover:border-blue-400/30 dark:hover:border-blue-500/30">
                  <div className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <span className={`px-3 py-0.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${exp.color} whitespace-nowrap`}>
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{exp.location}</p>
                  
                  <ul className={`space-y-2 text-sm text-gray-600 dark:text-gray-300 ${index % 2 === 0 ? 'md:text-left' : ''}`}>
                    {exp.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0`}></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-24 mb-12"
        >
          <h2 className="section-heading">Education</h2>
          <div className="section-divider mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl group"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl group-hover:scale-125 transition-transform duration-300">{edu.icon}</span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{edu.school}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.degree}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{edu.period} · {edu.location}</p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2 font-semibold">{edu.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certification */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-24 mb-12"
        >
          <h2 className="section-heading">Certifications</h2>
          <div className="section-divider mt-4"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          <div className="glass-card p-8 rounded-2xl text-center group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500"></div>
            <div className="relative">
              <span className="text-5xl group-hover:scale-125 transition-transform duration-300 inline-block">☁️</span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-4">
                AWS Certified Solutions Architect
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">Associate Level</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Valid till July 2026</p>
              <a
                href="/docs/Amazon Aws Certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2 rounded-full hover:scale-105 transition-transform shadow-lg shadow-blue-500/25"
              >
                View Certificate →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
