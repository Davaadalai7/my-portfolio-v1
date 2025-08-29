import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'
import ThemeToggle from '@/components/ThemeToggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Davaadalai - Full-Stack Developer Portfolio',
  description: 'Full-Stack Developer portfolio showcasing modern web development skills, projects, and experience from Pinecone Academy',
  keywords: 'Full-Stack Developer, React, Next.js, TypeScript, MongoDB, PostgreSQL, Pinecone Academy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider>
        <header className="sticky top-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm">
          <nav className="container mx-auto flex items-center justify-between px-6 py-5">
            <a href="#about" className="group select-none">
              <div className="flex items-center gap-2">
                <span className="text-2xl transition-opacity duration-300 group-hover:opacity-0">©</span>
                <div className="relative flex items-center overflow-hidden">
                  <span className="inline-block transition-opacity duration-300 group-hover:opacity-0">
                    Code by&nbsp;
                  </span>
                  <span className="relative">
                    <span className="text-2xl absolute -left-5 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:-translate-y-1.5 group-hover:rotate-12 transform -translate-x-full">©</span>
                    <span className="font-black text-2xl lg:text-3xl text-black dark:text-white whitespace-nowrap transition-all duration-300 ml-0">
                      Davka
                    </span>
                  </span>
                  <span className="inline-block transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    &nbsp;Hero
                  </span>
                </div>
              </div>
            </a>
            <ul className="hidden md:flex gap-6 font-semibold text-gray-700 dark:text-gray-200">
              <li><a href="#about" className="hover:text-black dark:hover:text-white transition-colors duration-300 text-base">About</a></li>
              <li><a href="#experience" className="hover:text-black dark:hover:text-white transition-colors duration-300 text-base">Experience</a></li>
              <li><a href="#projects" className="hover:text-black dark:hover:text-white transition-colors duration-300 text-base">Projects</a></li>
              <li><a href="#contact" className="hover:text-black dark:hover:text-white transition-colors duration-300 text-base">Contact</a></li>
              <li><a href="/test.pdf" target="_blank" className="hover:text-black dark:hover:text-white transition-colors duration-300 text-base">Resume/CV</a></li>
            </ul>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              {/* Mobile menu button - placeholder for future mobile menu */}
              <button className="md:hidden p-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </nav>
        </header>
        {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 