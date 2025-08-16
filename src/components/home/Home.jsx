import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Github, GitBranchIcon, ExternalLink, Mail, Phone, MapPin, Star, Code, Palette, Zap, Cpu, Database, Globe, ArrowRight, ArrowDown, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);



  const toggleHidden = () => {
    setIsVisible(!isVisible);
    setMobileMenuOpen(!mobileMenuOpen)
  };

  const projects = [
    {
      title: "Rust Desktop App (with React Frontend)",
      description: "Cross-platform desktop app built with Rust and React, featuring custom image processing tools, watermarking, and a modern UI.",
      image: "img/desktop.png",
      tech: ["Rust", "React", "Tailwind", "Tauri"],
      github: "#",
      live: "https://docscanner.in",
      featured: false
    },
    {
      title: "Lumen Companion AI",
      description: "An AI-powered productivity companion that leverages machine learning and real-time analytics to assist with data insights and task automation. All using voice command, designed for the blind",
      image: "img/lumen.png",
      tech: ["Python","ML", "Openai","FastAPI", "TensorFlow", "AWS", "React", "Webhooks"],
      github: "#",
      live: "http://lumencompanionai.com",
      featured: true
    },
    {
      title: "PaysIt",
      description: "A fintech platform providing financial and VTU services such as airtime & data top-up, TV subscriptions, and electricity payments — built to scale as a secure financial service provider.",
      image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=800&h=600&fit=crop",
      tech: ["Django", "PostgreSQL", "NGINX", "AWS", "React", "React Native", "Paystack"],
      github: "#",
      live: "https://pays-it-app.vercel.app",
      featured: true
    },
    {
      title: "IntelliData",
      description: "A smart data processing and visualization platform integrating document scanning, PDF/image parsing, and AI-driven insights for businesses.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tech: ["Next.js", "Tauri", "OpenCV", "React", "Python"],
      github: "#",
      live: "https://intellidata.in/",
      featured: true
    },
    {
      title: "Document Scanner",
      description: "A Next.js document scanner with cropping, watermarking, and PDF/image export functionality — optimized for desktop via Tauri.",
      image: "img/scanner.png",
      tech: ["Next.js", "React", "OpenCV", "Tailwind", "Tauri"],
      github: "#",
      live: "#",
      featured: false
    }
  ];

  const skills = [
    { name: "Frontend Development", icon: Code, level: 65, color: "from-blue-500 to-purple-600" },
    { name: "Backend Systems", icon: Database, level: 85, color: "from-green-500 to-teal-600" },
    { name: "AI/ML Integration", icon: Cpu, level: 70, color: "from-orange-500 to-red-600" },
    { name: "Performance Optimization", icon: Zap, level: 96, color: "from-yellow-500 to-orange-600" },
    { name: "Full-Stack Architecture", icon: Globe, level: 75, color: "from-indigo-500 to-blue-600" }
  ];

  const skillssets = [
    { name: "Python", color: "from-blue-500 to-purple-600" },
    { name: "C++", color: "from-blue-500 to-purple-600" },
    { name: "ROS2", color: "from-indigo-500 to-blue-600" },
    { name: "FastAPI", color: "from-blue-500 to-purple-600" },
    { name: "Django", color: "from-blue-500 to-red-600" },
    { name: "Docker", color: "from-blue-500 to-blue-600" },
    { name: "AWS", color: "from-blue-500 to-yellow-600" },
    { name: "Pydantic", color: "from-blue-500 to-green-600" },
    { name: "SQLAlchemy", color: "from-blue-500 to-gray-600" },
    { name: "Git", color: "from-blue-500 to-violet-600" },
    { name: "ML", color: "from-blue-500 to-gray-600" },
    { name: "Javascript", color: "from-blue-500 to-red-600" },
    { name: "Xacro", color: "from-blue-500 to-orange-600" },
    { name: "URDF", color: "from-blue-500 to-green-600" },
    { name: "HTML/CSS", color: "from-blue-500 to-blue-600" },
    { name: "Pytorch", color: "from-red-500 to-violet-600" },
    { name: "Gazebo", color: "from-blue-500 to-gray-600" },
    { name: "Streamlit", color: "from-gray-500 to-red-600" },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-30 sm:opacity-50">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 sm:w-96 sm:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>
      </div>

      {/* Mouse Follower - Hidden on mobile */}
      <div 
        className="hidden sm:block fixed w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full pointer-events-none z-50 transition-transform duration-100 mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${isVisible ? 1 : 0})`
        }}
      ></div>

      {/* Navigation */}
      <nav className="relative z-10 p-4 sm:p-6 backdrop-blur-md bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            JoshCoder
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-purple-400 transition-colors duration-300 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="hover:text-purple-400 transition-colors duration-300 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#projects" className="hover:text-purple-400 transition-colors duration-300 relative group">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href='mailto:adzembehjoshua@gmail.com'>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2 rounded-full hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
                Contact
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20"
            onClick={() => toggleHidden()}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-white/10 p-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="hover:text-purple-400 transition-colors duration-300 py-2" onClick={() => setMobileMenuOpen(false)}>
                Home
              </a>
              <a href="#about" className="hover:text-purple-400 transition-colors duration-300 py-2" onClick={() => setMobileMenuOpen(false)}>
                About
              </a>
              <a href="#projects" className="hover:text-purple-400 transition-colors duration-300 py-2" onClick={() => setMobileMenuOpen(false)}>
                Projects
              </a>
              <a href='mailto:adzembehjoshua@gmail.com' >
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2 rounded-full hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 w-full">
                  Contact
                </button>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className={`relative z-10 px-4 sm:px-6 py-12 sm:py-20 ${isVisible ? 'mt-0' : 'mt-40'}`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className={`space-y-6 sm:space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-100'}`}>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-md border border-purple-500/30 rounded-full px-4 sm:px-6 py-2 sm:py-3">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
              <span className="text-xs sm:text-sm">Available for exciting projects</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold leading-tight">
              Hi! I Am
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                Josh 
              </span>
            </h1>
            
            <p className="text-base sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
              Engineering End-to-End solutions with a passion for performance, reliability, and iteration. Full-stack developer blending frontend polish with backend rigor to deliver measurable value.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="group bg-gradient-to-r from-purple-600 to-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span className="font-semibold">View My Works</span>
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" /> 
              </a>
              <a href='https://github.com/imotechs/' className="flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 sm:py-4 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-105 space-x-2">
                <span className="font-semibold">GitHub</span>
                <Github className="w-5 h-5" />
              </a>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 sm:pt-8">
              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-md rounded-full px-4 py-3 border border-white/10">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm truncate">adzembehj@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-md rounded-full px-4 py-3 border border-white/10">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm">+2349016608852</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-md rounded-full px-4 py-3 border border-white/10">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Abuja, Nigeria</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-md rounded-full px-4 py-3 border border-white/10">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm">@joshcoder</span>
              </div>
            </div>
          </div>

          
{/* Hero Image */}
<div className={`relative transform transition-all duration-1000 delay-300   
              ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-100"}`} >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-white/20 p-4 sm:p-8 hover:scale-105 transition-transform duration-500">
                <img 
                  src="img/joshcoder.jpg" 
                  alt="Josh Coder" 
                  className="w-full h-64 sm:h-96 object-cover rounded-xl sm:rounded-2xl"
                />
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-green-500 w-3 h-3 sm:w-4 sm:h-4 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl sm:rounded-2xl p-3 sm:p-4 backdrop-blur-md">
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-bold">5+</div>
                    <div className="text-xs">Years Exp</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Skills Section */}
      <section id="about" className="relative z-10 px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4 sm:mb-6">
              What I Do
            </h2>
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Delivering world-class digital solutions with cutting-edge technologies and innovative approaches
            </p>
          </div>
         
          {/* Skills Tags */}
          <section className='mb-8 sm:mb-12 flex flex-wrap gap-2 sm:gap-3 justify-center'>              
            {skillssets.map((skill, index) => {               
              return (                 
                <div key={index} className={`bg-gradient-to-r ${skill.color} bg-white/5 backdrop-blur-md rounded-full px-3 sm:px-4 py-2 border border-white/10`}>
                  <span className={`text-xs sm:text-sm text-white`}>{skill.name}</span>
                </div>                 
              )              
            })}           
          </section>

          {/* Main Skills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div 
                  key={index}
                  className={`group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl border border-white/20 p-6 sm:p-8 hover:scale-105 transition-all duration-500 hover:border-purple-500/50 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${skill.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{skill.name}</h3>
                  <div className="mb-3 sm:mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-300">Proficiency</span>
                      <span className="text-sm font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-300">
                    Expertise in creating exceptional digital experiences with modern tools and methodologies.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Slider */}
      <section id="projects" className="relative z-10 px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4 sm:mb-6">
              Featured Projects
            </h2>
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Showcasing innovative solutions that blend creativity with cutting-edge technology
            </p>
          </div>

          <div className="relative">
            {/* Project Slider */}
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentProject * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={index} className="min-w-full flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 p-6 sm:p-12">
                    <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
                      {project.featured && (
                        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-md border border-yellow-500/30 rounded-full px-4 py-2">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span className="text-sm">Featured Project</span>
                        </div>
                      )}
                      
                      <h3 className="text-2xl sm:text-4xl font-bold">{project.title}</h3>
                      <p className="text-base sm:text-xl text-gray-300 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {project.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-md border border-purple-500/30 rounded-full px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        {/* <a 
                          href={project.github}
                          className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                        >
                          <Github className="w-5 h-5" />
                          <span>Code</span>
                        </a> */}
                        <a 
                          href={project.live}
                          className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-full hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
                        >
                          <ExternalLink className="w-5 h-5" />
                          <span>Live Demo</span>
                        </a>
                      </div>
                    </div>
                    
                    <div className="relative group order-1 lg:order-2">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                      <div className="relative overflow-hidden rounded-2xl border border-white/20 group-hover:scale-105 transition-transform duration-500">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-48 sm:h-80 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevProject}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 sm:p-4 hover:bg-white/20 transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button 
              onClick={nextProject}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 sm:p-4 hover:bg-white/20 transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 sm:mt-8 space-x-3">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    currentProject === index 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-4 sm:px-6 py-8 sm:py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
            JoshCoder
          </div>
          <p className="text-gray-400 mb-6">
            Let's build something amazing together
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/imotechs/" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="mailto:adzembehjoshua@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/adzembeh-joshua-78aa011a1/" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
              <ExternalLink className="w-6 h-6" />
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-gray-500 text-sm">
            © 2025 JoshCoder. All rights reserved.
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;