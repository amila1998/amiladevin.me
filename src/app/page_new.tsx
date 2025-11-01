'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Code2, 
  Server, 
  Database,
  Cloud,
  ChevronDown,
  Download,
  Briefcase,
  GraduationCap,
  Award,
  MapPin,
  Phone,
  Calendar,
  Building2,
  Rocket
} from "lucide-react";

export default function Home() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Confidential",
      period: "2024 – Present",
      location: "Remote",
      responsibilities: [
        "Lead end-to-end product revamps, system migrations, and automation projects",
        "Manage team deliverables and mentor junior developers",
        "Architect and implement scalable solutions with Next.js, Node.js, Spring Boot",
        "Optimize system performance using Kafka, Redis, MySQL, Firebase"
      ],
      technologies: ["Next.js", "Node.js", "Fastify", "Spring Boot", "Kafka", "Redis", "MySQL", "Docker", "Jenkins"]
    },
    {
      title: "Software Engineer",
      company: "Ceylon Business Appliances (Pvt) Ltd",
      period: "2023 – 2024",
      location: "Sri Lanka",
      responsibilities: [
        "Developed new features and enhanced existing products as Full Stack Engineer",
        "Built dynamic reports and data visualizations",
        "Collaborated with cross-functional teams for high-quality solutions"
      ],
      technologies: ["React", "Node.js", "TypeScript", "Spring Boot", "MySQL", "WebSockets", "Chart.js"]
    },
    {
      title: "Associate Software Engineer",
      company: "Ceylon Business Appliances (Pvt) Ltd",
      period: "2022 – 2023",
      location: "Sri Lanka",
      responsibilities: [
        "Delivered new features and fixed live issues for PlatformOne products",
        "Partnered with NLP team for intelligent solutions",
        "Utilized GitLab and Jira for version control and project management"
      ],
      technologies: ["C# .NET", "Vue.js", "SQL Server", "GitLab", "Jira"]
    }
  ];

  const skills = [
    { 
      icon: Code2, 
      name: "Frontend Development", 
      desc: "React, Next.js, Vue.js, TypeScript, JavaScript"
    },
    { 
      icon: Server, 
      name: "Backend Development", 
      desc: "Node.js, Spring Boot, ASP.NET Core, Fastify"
    },
    { 
      icon: Database, 
      name: "Databases", 
      desc: "MySQL, MongoDB, SQL Server, Firebase, Redis"
    },
    { 
      icon: Cloud, 
      name: "DevOps & Tools", 
      desc: "AWS, Docker, Jenkins, Git, Bitbucket, Jira, Kafka"
    }
  ];

  const competencies = [
    "Clear Communication",
    "Creative Problem Solving",
    "Detail-Oriented Execution",
    "Reliability & Accountability",
    "Team Collaboration",
    "System Architecture",
    "Mentorship & Leadership"
  ];

  const education = [
    {
      degree: "B.Sc. (Hons.) in Information Technology",
      specialization: "Specializing in Software Engineering",
      institution: "Sri Lanka Institute of Information Technology",
      period: "2020 – Present",
      icon: GraduationCap
    },
    {
      degree: "Information Technology Technician (NVQ 4)",
      institution: "National Apprentice and Industrial Training Authority",
      period: "2018 – 2019",
      icon: Award
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navigation Bar */}
        <motion.nav 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="fixed top-0 w-full z-50 backdrop-blur-lg bg-slate-900/70 border-b border-white/10"
        >
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <motion.div 
                className="text-2xl font-bold gradient-text"
                whileHover={{ scale: 1.05 }}
              >
                AD
              </motion.div>
              <div className="hidden md:flex space-x-8">
                {['About', 'Experience', 'Skills', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                ))}
              </div>
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                <Download size={16} />
                <span className="hidden sm:inline">Resume</span>
              </a>
            </div>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section id="about" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -inset-10 opacity-50">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
              <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
              <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
            </div>
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-4"
                >
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                    Software Engineer
                  </span>
                </motion.div>
                
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                  <span className="text-white">Amila Devin</span>
                  <br />
                  <span className="gradient-text">Senarathne</span>
                </h1>
                
                <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-semibold">
                  Full Stack Developer
                </h2>
                
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  Passionate Software Engineer with <span className="text-purple-400 font-semibold">3+ years</span> of experience designing, 
                  developing, and deploying scalable web applications and robust backend systems. 
                  Proven ability to lead teams, manage deliverables, and deliver end-to-end solutions.
                </p>

                <div className="flex flex-col gap-3 text-gray-300 mb-8">
                  <div className="flex items-center gap-3">
                    <MapPin size={20} className="text-purple-400" />
                    <span>Panadura, Sri Lanka</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={20} className="text-purple-400" />
                    <a href="tel:+94776659628" className="hover:text-white transition-colors">
                      +94 77 6 659 628
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={20} className="text-purple-400" />
                    <a href="mailto:amiladevin@gmail.com" className="hover:text-white transition-colors">
                      amiladevin@gmail.com
                    </a>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-4 mb-8"
                >
                  <a 
                    href="#experience" 
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 glow-effect"
                  >
                    View Experience
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
                  transition={{ delay: 0.8 }}
                  className="flex gap-4"
                >
                  <a
                    href="https://github.com/amiladevin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                    aria-label="GitHub Profile"
                  >
                    <Github size={24} className="text-white" />
                  </a>
                  <a
                    href="https://linkedin.com/in/amiladevin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={24} className="text-white" />
                  </a>
                  <a
                    href="mailto:amiladevin@gmail.com"
                    className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                    aria-label="Email Contact"
                  >
                    <Mail size={24} className="text-white" />
                  </a>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="relative w-full max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-50"></div>
                  <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-white/20 backdrop-blur-sm">
                    <Image
                      src="/profile_pic.jpg"
                      alt="Amila Devin Senarathne - Software Engineer"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown size={32} className="text-gray-400" />
          </motion.div>
        </section>

        {/* Core Competencies */}
        <section className="py-20 px-6 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Core Competencies</span>
              </h2>
            </motion.div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {competencies.map((competency, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-blue-200 hover:border-blue-400/50 transition-all duration-300"
                >
                  {competency}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Technical Skills</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Expertise in modern technologies and frameworks for building scalable, high-performance applications.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  <div className="mb-4 p-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 w-fit group-hover:scale-110 transition-transform duration-300">
                    <skill.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{skill.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-6 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Professional Experience</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                3+ years of hands-on experience delivering enterprise-level solutions and leading development teams.
              </p>
            </motion.div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex items-start gap-4 mb-4 md:mb-0">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 mt-1">
                        <Briefcase size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-purple-400 mb-2">
                          <Building2 size={16} />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start gap-3 text-gray-300">
                        <Rocket size={16} className="text-purple-400 mt-1 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 rounded-full border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Education & Certifications</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600">
                      <edu.icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                      {edu.specialization && (
                        <p className="text-purple-400 mb-2 font-semibold">{edu.specialization}</p>
                      )}
                      <p className="text-gray-300 mb-2">{edu.institution}</p>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-black/20">
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
              <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                I&apos;m always open to discussing new opportunities, innovative projects, 
                and ways to contribute to impactful solutions. Let&apos;s create something amazing together!
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <a
                  href="mailto:amiladevin@gmail.com"
                  className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 glow-effect"
                >
                  <Mail size={20} />
                  Send Email
                </a>
                
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-3 px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  <Download size={20} />
                  Download Resume
                </a>
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <MapPin className="text-purple-400 mx-auto mb-3" size={32} />
                  <h3 className="text-white font-semibold mb-2">Location</h3>
                  <p className="text-gray-400">Panadura, Sri Lanka</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <Phone className="text-purple-400 mx-auto mb-3" size={32} />
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <a href="tel:+94776659628" className="text-gray-400 hover:text-white transition-colors">
                    +94 77 6 659 628
                  </a>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <Mail className="text-purple-400 mx-auto mb-3" size={32} />
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <a href="mailto:amiladevin@gmail.com" className="text-gray-400 hover:text-white transition-colors break-all">
                    amiladevin@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold gradient-text mb-2">Amila Devin Senarathne</h3>
                <p className="text-gray-400">
                  Software Engineer • Full Stack Developer
                </p>
              </div>
              
              <div className="flex gap-4">
                <a
                  href="https://github.com/amiladevin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} className="text-gray-400 hover:text-white transition-colors" />
                </a>
                <a
                  href="https://linkedin.com/in/amiladevin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} className="text-gray-400 hover:text-white transition-colors" />
                </a>
                <a
                  href="mailto:amiladevin@gmail.com"
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  aria-label="Email Contact"
                >
                  <Mail size={20} className="text-gray-400 hover:text-white transition-colors" />
                </a>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <p className="text-gray-400">
                © {new Date().getFullYear()} Amila Devin Senarathne. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
