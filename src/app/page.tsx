import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Instagram, Calendar, Users, Code, Award, ExternalLink } from "lucide-react"
import Typewriter from "@/components/Typewriter"
import MatrixPattern from "@/components/MatrixPattern"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Matrix Background */}
      <div className="fixed inset-0 z-0 opacity-15 pointer-events-none">
        <MatrixPattern />
      </div>
      
      {/* Hero Section */}
      <section id="about" className="relative min-h-screen flex items-center justify-center px-4 py-20 z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-10 text-center lg:text-left">
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-8xl font-black text-black dark:text-white leading-none">
                  Davaadalai
                </h1>
                <div className="text-2xl lg:text-3xl h-12 lg:h-14 flex items-center justify-center lg:justify-start">
                  <Typewriter />
                </div>
              </div>
              
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                I am a passionate Full-Stack Developer who successfully completed an 8-month intensive program at Pinecone Academy. My expertise covers both frontend and backend, and I love building modern, scalable web applications.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto lg:mx-0">
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl text-center border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <Calendar className="w-8 h-8 mx-auto mb-3 text-black dark:text-white" />
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">8+ months</div>
                  <div className="font-bold text-black dark:text-white text-lg">Training</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl text-center border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <Code className="w-8 h-8 mx-auto mb-3 text-black dark:text-white" />
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">15+</div>
                  <div className="font-bold text-black dark:text-white text-lg">Projects</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl text-center border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <Users className="w-8 h-8 mx-auto mb-3 text-black dark:text-white" />
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">5+</div>
                  <div className="font-bold text-black dark:text-white text-lg">Teams</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl text-center border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <Award className="w-8 h-8 mx-auto mb-3 text-black dark:text-white" />
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Hackathon</div>
                  <div className="font-bold text-black dark:text-white text-lg">Hacker</div>
                </div>
              </div>

              {/* PineQuest Info */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="text-lg font-bold text-black dark:text-white mb-2">
                  PineQuest Season 1 Hackathon Participant
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  PineQuest is a practical, challenge-based hackathon for Pinecone Academy students to collaborate in teams and develop real-world digital solutions.
                </p>
                <a 
                  href="https://pinebaatar.pinecone.mn/pinequest" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-black dark:text-white hover:underline font-medium"
                >
                  Learn more <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-6 justify-center lg:justify-start">
                <a href="https://github.com/Davaadalai7" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="w-14 h-14 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-110">
                    <Github className="w-6 h-6" />
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/davaadalai7/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="w-14 h-14 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-110">
                    <Linkedin className="w-6 h-6" />
                  </Button>
                </a>
                <a href="mailto:skiple7@gmail.com">
                  <Button variant="outline" size="icon" className="w-14 h-14 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-110">
                    <Mail className="w-6 h-6" />
                  </Button>
                </a>
                <a href="https://www.instagram.com/glitchystar7/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="w-14 h-14 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-110">
                    <Instagram className="w-6 h-6" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Image with Rotating Text */}
            <div className="flex justify-center lg:justify-end -mt-40 lg:-mt-60 relative z-20">
              <div className="relative w-96 h-96 lg:w-[500px] lg:h-[500px]">
                {/* Outer text circle */}
                <div className="absolute inset-0 animate-spin-slow z-10">
                  <svg className="w-full h-full" viewBox="0 0 200 200">
                    <defs>
                      <path id="outer-circle" d="M 100 100 m -85 0 a 85 85 0 1 1 170 0 a 85 85 0 1 1 -170 0" />
                    </defs>
                    <text className="text-sm font-medium fill-gray-600 dark:fill-gray-400">
                      <textPath href="#outer-circle" startOffset="0%">
                        SOFTWARE ENGINEER • SOFTWARE ENGINEER • SOFTWARE ENGINEER • SOFTWARE ENGINEER
                      </textPath>
                    </text>
                  </svg>
                </div>
                
                {/* Middle text circle */}
                <div className="absolute inset-8 animate-spin-slow-reverse z-10">
                  <svg className="w-full h-full" viewBox="0 0 200 200">
                    <defs>
                      <path id="middle-circle" d="M 100 100 m -65 0 a 65 65 0 1 1 130 0 a 65 65 0 1 1 -130 0" />
                    </defs>
                    <text className="text-xs font-medium fill-gray-500 dark:fill-gray-500">
                      <textPath href="#middle-circle" startOffset="0%">
                        FULL-STACK DEVELOPER • FULL-STACK DEVELOPER • FULL-STACK DEVELOPER • FULL-STACK DEVELOPER
                      </textPath>
                    </text>
                  </svg>
                </div>
                
                {/* Image in center */}
                <a href="https://dvk7.carrd.co" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="absolute inset-16 rounded-full overflow-hidden shadow-2xl z-20">
                    <Image
                      src="/profile.jpeg"
                      alt="Davaadalai profile photo"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      priority
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6">Skills & Technologies</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I work with modern technologies to build scalable and maintainable applications
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              "HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", 
              "Next.js", "Tailwind CSS", "ShadCN UI", "Node.js", "Express.js", 
              "MongoDB", "PostgreSQL", "GraphQL", "Git", "Vercel"
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white dark:bg-black p-6 rounded-xl border border-gray-200 dark:border-gray-800 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-3 group"
              >
                <Badge variant="outline" className="text-base font-semibold group-hover:bg-gray-100 dark:group-hover:bg-gray-800 transition-colors">
                  {skill}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6">Experience</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">My journey in software development</p>
          </div>
          
          <div className="space-y-10">
            <Card className="border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-black">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-black dark:text-white">Pinecone Internship</CardTitle>
                <CardDescription className="text-lg text-gray-600 dark:text-gray-400">
                  8-month intensive full-stack development program
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  Completed comprehensive training in modern web development technologies including React, Node.js, and database management. Developed strong foundation in both frontend and backend development with hands-on project experience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-black">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-black dark:text-white">PineQuest Hackathon</CardTitle>
                <CardDescription className="text-lg text-gray-600 dark:text-gray-400">
                  Season 1 Participant - Team collaboration challenge
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                  Participated in PineQuest, a practical, challenge-based hackathon for Pinecone Academy students to collaborate in teams and develop real-world digital solutions. This experience enhanced my teamwork and problem-solving skills.
                </p>
                <a 
                  href="https://pinebaatar.pinecone.mn/pinequest" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-black dark:text-white hover:underline font-semibold text-lg"
                >
                  Learn more about PineQuest <ExternalLink className="w-5 h-5" />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6">Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Coming soon...</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-3 bg-white dark:bg-black">
              <CardHeader>
                <CardTitle className="text-xl text-black dark:text-white">Project 1</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">Description coming soon</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">Details will be added soon...</p>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-3 bg-white dark:bg-black">
              <CardHeader>
                <CardTitle className="text-xl text-black dark:text-white">Project 2</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">Description coming soon</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">Details will be added soon...</p>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-3 bg-white dark:bg-black">
              <CardHeader>
                <CardTitle className="text-xl text-black dark:text-white">Project 3</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">Description coming soon</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">Details will be added soon...</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4">
        <div className="container mx-auto max-w-5xl text-center">

          
          <h2 className="text-4xl lg:text-5xl font-bold text-black dark:text-white mb-8">Get In Touch</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Feel free to reach out for collaboration opportunities or if you have any questions about my work. I'm always open to discussing new projects and opportunities.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-16 px-4">
        <div className="container mx-auto">
          <nav className="flex items-center justify-between px-6 py-5">
            {/* Left Side - Logo/Name */}
            <div className="text-left">
              <p className="font-black text-2xl lg:text-3xl text-black dark:text-white">
                Davaadalai
              </p>
              <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">
                Copyright © 2025
              </p>
              <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">
                Version 1.0
              </p>
            </div>
            
            {/* Center - Contact Info */}
            <ul className="hidden md:flex gap-6 text-gray-400 dark:text-gray-500">
              <li className="text-base italic group cursor-pointer">
                <span className="text-gray-400 dark:text-gray-500">УТАС: </span>
                <span className="group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                  (+976) 85 556 582
                </span>
              </li>
              <li className="text-base italic group cursor-pointer">
                <span className="text-gray-400 dark:text-gray-500">МЭЙЛ: </span>
                <span className="group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                  skiple7@gmail.com
                </span>
              </li>
            </ul>
            
            {/* Right Side - Social Links */}
            <div className="flex flex-col items-end gap-2">
              <div className="flex gap-2">
                <a href="https://github.com/Davaadalai7" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="w-10 h-10 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white transition-all duration-200 hover:scale-110">
                    <Github className="w-5 h-5" />
                  </Button>
                </a>
                <a href="https://www.instagram.com/glitchystar7/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="w-10 h-10 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white transition-all duration-200 hover:scale-110">
                    <Instagram className="w-5 h-5" />
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/davaadalai7/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="w-10 h-10 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white transition-all duration-200 hover:scale-110">
                    <Linkedin className="w-5 h-5" />
                  </Button>
                </a>
              </div>
              <p className="text-gray-400 dark:text-gray-500 text-xs">
                Mongolia
              </p>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  )
} 