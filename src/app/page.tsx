'use client';

import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Palette, 
  Database,
  Smartphone,
  ChevronDown,
  Download
} from "lucide-react";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Amila Devin - Portfolio",
    "description": "Full-Stack Developer & UI/UX Designer crafting digital experiences with modern technologies.",
    "url": "https://amiladevin.me",
    "mainEntity": {
      "@type": "Person",
      "name": "Amila Devin",
      "jobTitle": "Full-Stack Developer & UI/UX Designer",
      "description": "Crafting digital experiences with modern technologies and beautiful design.",
      "url": "https://amiladevin.me",
      "knowsAbout": [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "UI/UX Design",
        "Frontend Development",
        "Backend Development"
      ]
    }
  };

  const projects = [
    {
      title: "Modern E-commerce Platform",
      description: "A full-stack e-commerce solution with Next.js, Stripe integration, and real-time inventory management.",
      tech: ["Next.js", "TypeScript", "Prisma", "Stripe"],
      image: "/project1.jpg",
      github: "https://github.com",
      live: "https://demo.com"
    },
    {
      title: "AI-Powered Task Manager",
      description: "Smart task management app with AI suggestions, natural language processing, and team collaboration features.",
      tech: ["React", "Node.js", "OpenAI", "MongoDB"],
      image: "/project2.jpg",
      github: "https://github.com",
      live: "https://demo.com"
    },
    {
      title: "Real-time Chat Application",
      description: "Modern chat app with voice/video calls, file sharing, and end-to-end encryption using WebRTC.",
      tech: ["Vue.js", "Socket.io", "WebRTC", "Firebase"],
      image: "/project3.jpg",
      github: "https://github.com",
      live: "https://demo.com"
    }
  ];

  const skills = [
    { icon: Code, name: "Frontend Development", desc: "React, Vue, Angular, Next.js" },
    { icon: Database, name: "Backend Development", desc: "Node.js, Python, PostgreSQL" },
    { icon: Palette, name: "UI/UX Design", desc: "Figma, Adobe Creative Suite" },
    { icon: Smartphone, name: "Mobile Development", desc: "React Native, Flutter" }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-8">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -inset-10 opacity-50">
              <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
              <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
              <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
            </div>
          </div>
             <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="gradient-text">Amila Devin</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Full-Stack Developer & UI/UX Designer
            </h2>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Crafting digital experiences with modern technologies and beautiful design. 
              Passionate about creating user-centered solutions that make a difference.
            </p>
          </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center mb-12"
            >
              <a 
                href="#projects" 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 glow-effect"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Get In Touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center space-x-6"
            >
              {[Github, Linkedin, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  <Icon size={24} className="text-white" />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown size={32} className="text-gray-400" />
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Skills & Expertise</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              I specialize in modern web technologies and design principles to create exceptional digital experiences.
            </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >                <div className="mb-4 p-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 w-fit">
                  <skill.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{skill.name}</h3>
                <p className="text-gray-400">{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Featured Projects</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Here are some of my recent projects that showcase my skills and passion for creating innovative solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Code size={48} className="text-white opacity-50" />
                    </div>
                  </div>
                     <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 rounded-full border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300"
                      >
                        <Github size={16} />
                        <span className="text-sm">Code</span>
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm">Live Demo</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Let&apos;s Work Together</span>
              </h2>
              <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                I&apos;m always open to discussing new opportunities and interesting projects. 
                Let&apos;s create something amazing together!
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="mailto:your-email@example.com"
                  className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 glow-effect"
                >
                  <Mail size={20} />
                  Send Email
                </a>
                
                <a
                  href="/resume.pdf"
                  className="flex items-center gap-3 px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  <Download size={20} />
                  Download Resume
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-8 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-400">
                  © 2025 Amila Devin. All rights reserved.
                </p>
              </div>
              
              <div className="flex space-x-6">
                {[Github, Linkedin, Mail].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="p-2 rounded-full hover:bg-white/10 transition-all duration-300"
                  >
                    <Icon size={20} className="text-gray-400 hover:text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
