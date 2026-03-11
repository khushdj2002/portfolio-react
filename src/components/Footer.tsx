'use client'

export default function Footer() {
  return (
    <footer className="relative bg-gray-50 dark:bg-gray-800/50">
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xl font-extrabold gradient-text">{'<'}Kushal DJ{' />'}</span>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            &copy; 2025 Kushal D J. Built with Next.js & Tailwind CSS.
          </p>
          <a
            href="#home"
            className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
