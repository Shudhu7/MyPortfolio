
import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Download, ExternalLink, Menu, X, Code, Database, Server, Globe, Award, Calendar, MapPin, Phone, Moon, Sun, Send, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  // Contact form handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      // Replace these with your actual EmailJS credentials
      const serviceId = 'service_fe1zhgk';
      const templateId = 'template_o71wqrj';
      const publicKey = 'q2Eo0HnE0miKp5MmL';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Shuddhodan',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      alert('Message sent successfully! I\'ll get back to you soon.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsLoading(false);
    }
  };

  // ... keep existing code (toggleDarkMode, useEffect, scrollToSection functions, skills, projects, certifications arrays)

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Smooth scroll and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'resume', 'certifications', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'Java', icon: '☕', color: 'bg-orange-500' },
    { name: 'React.js', icon: '⚛️', color: 'bg-blue-500' },
    { name: 'SQL', icon: '🗄️', color: 'bg-purple-500' },
    { name: 'MongoDB', icon: '🍃', color: 'bg-green-500' },
    { name: 'MySQL', icon: '🐬', color: 'bg-blue-600' },
    { name: 'HTML/CSS', icon: '🎨', color: 'bg-red-500' },
    { name: 'GitHub', icon: '🐱', color: 'bg-gray-800' },
    { name: 'AWS', icon: '☁️', color: 'bg-yellow-500' }
  ];

  const projects = [
    {
      name: 'RutuChakra',
      description:'RutuChakra is a web-based platform designed to support women\'s health, focusing on menstrual tracking and PCOS management. It includes features like a cycle tracker, diet tips, workout plans, self-assessment tests, and a chatbot for instant help. The goal is to empower women with the right tools, knowledge, and community support to manage their health confidently.',
      techStack: ['React.js','HTML','CSS','JavaScript','MongoDB', 'AI/ML'],
      liveLink: 'https://drive.google.com/file/d/1iR8bIS_6JeVQk7OCdXt9mx4GRETj8UVa/view?usp=sharing',
      githubLink: '#',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop'
    },
    {
      name: 'Travel & Tourism Management System',
      description:'A desktop-based application designed to streamline tour planning, hotel bookings, and destination management. Features include Paytm API integration for secure payments and a centralized admin panel for efficient user and service management.',
      techStack: ['Java', 'JDBC', 'MySQL','Java Swing'],
      liveLink: '#',
      githubLink: '#',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop'
    },
    {
      name: 'CodSoft Internship Projects',
      description: 'During my virtual internship at CodSoft, I developed a series of front-end web projects, demonstrating proficiency in core web technologies. Key projects included a personal portfolio website, responsive landing pages, and an interactive calculator. These projects strengthened my skills in creating clean, responsive, and functional user interfaces.',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      liveLink: '#',
      githubLink: 'https://github.com/Shudhu7/Portfolio_website',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop'
    }
  ];

  const certifications = [
    {
      title: '1st Rank – Project Presentation',
      event: 'Oscillation 2024',
      date: '2024',
      icon: '🥇',
      color: 'bg-yellow-500'
    },
    {
      title: 'Pitch Point Winner',
      event: 'Techgyanathon 2025',
      date: '2025',
      icon: '🏆',
      color: 'bg-blue-500'
    },
    {
      title: 'NBA Project Exhibition Participant',
      event: 'National Level Exhibition',
      date: '2024',
      icon: '📢',
      color: 'bg-green-500'
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* ... keep existing code (Navigation Header, Home Section, About Section, Projects Section, Resume Section, Certifications Section) */}
      
      {/* Navigation Header */}
      <nav className={`fixed top-0 w-full ${darkMode ? 'bg-gray-800/90 text-gray-100' : 'bg-white/90 text-gray-900'} backdrop-blur-md z-50 shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold">
              Er.Shuddhodan<span className="text-blue-600">.</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Projects', 'Resume', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? darkMode 
                        ? 'text-blue-400 bg-gray-700' 
                        : 'text-blue-600 bg-blue-50'
                      : darkMode 
                        ? 'text-gray-300 hover:text-blue-400' 
                        : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className={`px-2 pt-2 pb-3 space-y-1 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-t`}>
                {['Home', 'About', 'Projects', 'Resume', 'Certifications', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`block px-3 py-2 text-base font-medium w-full text-left ${
                      darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className={`pt-20 min-h-screen flex items-center ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-blue-50 to-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className={`text-5xl lg:text-6xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Hi, I'm <span className="text-blue-600">Shuddhodan</span>
                </h1>
                <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Software Developer | Java | Full-Stack
                </p>
                <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                  A passionate software developer specializing in Java, web technologies, and full-stack projects. 
                  I love solving complex problems and creating innovative solutions.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors font-medium"
                >
                  Hire Me
                </button>
                <a 
                  href="https://drive.google.com/file/d/1Lnb9g8mZuyI0yepeVCaXSfwlNVjBWNMi/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`border ${darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-gray-300 text-gray-700 hover:bg-gray-50'} px-8 py-3 rounded-lg transition-colors font-medium flex items-center gap-2 justify-center`}
                >
                  <Download size={20} />
                  Download Resume
                </a>
              </div>

              <div className="flex gap-4">
                <a href="mailto:mr.shudhuingle@gmail.com" className={`p-3 ${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg shadow-md hover:shadow-lg transition-shadow ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>
                  <Mail size={24} />
                </a>
                <a href="https://github.com/Shudhu7" target="_blank" rel="noopener noreferrer" className={`p-3 ${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg shadow-md hover:shadow-lg transition-shadow ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/shuddhodan-ingale-3b4238215/" className={`p-3 ${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg shadow-md hover:shadow-lg transition-shadow ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>
                  <Linkedin size={24} />
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className={`w-80 h-80 ${darkMode ? 'bg-blue-600' : 'bg-gradient-to-br from-blue-400 to-purple-500'} rounded-full flex items-center justify-center`}>
                  <div className={`w-72 h-72 ${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-full flex items-center justify-center`}>
                    <Code size={120} className="text-blue-600" />
                  </div>
                </div>
                <div className={`absolute -top-4 -right-4 w-12 h-12 ${darkMode ? 'bg-yellow-500' : 'bg-yellow-400'} rounded-full flex items-center justify-center`}>
                  ⚡
                </div>
                <div className={`absolute -bottom-4 -left-4 w-12 h-12 ${darkMode ? 'bg-green-500' : 'bg-green-400'} rounded-full flex items-center justify-center`}>
                  🚀
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>About Me</h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Dedicated and hardworking IT professional with a strong passion for learning technical skills 
              and solving complex problems.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className={`prose prose-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <p>
                  I'm a passionate and detail-oriented Software Developer with a strong foundation in Java, web technologies, and full-stack development. I enjoy turning complex problems into simple, efficient, and user-friendly solutions. From building dynamic web applications to developing backend systems, I’m always eager to learn and apply new technologies to create impactful software.
 
                </p>
                <p>
                  I believe in writing clean, maintainable code and continuously improving my skills through challenging projects and collaboration. Let's build something great together!
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://drive.google.com/file/d/1Lnb9g8mZuyI0yepeVCaXSfwlNVjBWNMi/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-medium flex items-center gap-2"
                >
                  <Download size={20} />
                  Download Resume
                </a>
              </div>
            </div>

            <div>
              <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Technical Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-4 rounded-lg text-center hover:shadow-md transition-shadow`}>
                    <div className={`w-12 h-12 ${skill.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                      <span className="text-white text-xl">{skill.icon}</span>
                    </div>
                    <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Featured Projects</h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Here are some of my recent projects that showcase my skills and experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow`}>
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{project.name}</h3>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className={`px-3 py-1 ${darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'} text-sm rounded-full`}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a 
                      href={project.liveLink}
                      className={`flex items-center gap-2 font-medium ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a 
                      href={project.githubLink}
                      className={`flex items-center gap-2 font-medium ${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-800'}`}
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Resume</h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
              Download my complete resume to learn more about my experience and qualifications
            </p>
            
            <div className={`${darkMode ? 'bg-gray-700' : 'bg-gradient-to-br from-blue-50 to-purple-50'} p-8 rounded-2xl max-w-2xl mx-auto`}>
              <div className="mb-6">
                <div className={`w-20 h-24 ${darkMode ? 'bg-gray-600' : 'bg-white'} rounded-lg shadow-md mx-auto mb-4 flex items-center justify-center`}>
                  <span className="text-2xl">📄</span>
                </div>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Shuddhodan Ingale</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Software Developer Resume</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://drive.google.com/file/d/1Lnb9g8mZuyI0yepeVCaXSfwlNVjBWNMi/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors font-medium flex items-center gap-2 justify-center"
                >
                  <Download size={20} />
                  Download PDF
                </a>
                <a
                  href="https://drive.google.com/file/d/1Lnb9g8mZuyI0yepeVCaXSfwlNVjBWNMi/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`border ${darkMode ? 'border-blue-400 text-blue-400 hover:bg-gray-700' : 'border-blue-600 text-blue-600 hover:bg-blue-50'} px-8 py-3 rounded-lg transition-colors font-medium`}
                >
                  View Online
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Certifications & Achievements</h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Recognition and awards that highlight my dedication and skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className={`${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow`}>
                <div className={`w-16 h-16 ${cert.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl">{cert.icon}</span>
                </div>
                <h3 className={`text-xl font-bold mb-2 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>{cert.title}</h3>
                <p className={`text-center mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{cert.event}</p>
                <div className={`flex items-center justify-center gap-2 text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                  <Calendar size={16} />
                  {cert.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Let's Work Together</h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Have a project in mind? I'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${darkMode ? 'bg-gray-700' : 'bg-blue-100'} rounded-lg flex items-center justify-center`}>
                      <Mail className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Email</p>
                      <a href="mailto:mr.shudhuingle@gmail.com" className={`${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>
                        mr.shudhuingle@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${darkMode ? 'bg-gray-700' : 'bg-blue-100'} rounded-lg flex items-center justify-center`}>
                      <MapPin className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Location</p>
                      <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>mumbai maharashtra, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Connect with me</h4>
                <div className="flex gap-4">
                  <a href="mailto:mr.shudhuingle@gmail.com" className={`w-12 h-12 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-blue-100'} rounded-lg flex items-center justify-center hover:text-blue-600 transition-colors`}>
                    <Mail size={20} />
                  </a>
                  <a href="https://github.com/Shudhu7/" className={`w-12 h-12 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-blue-100'} rounded-lg flex items-center justify-center hover:text-blue-600 transition-colors`}>
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/shuddhodan-ingale-3b4238215/" className={`w-12 h-12 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-blue-100'} rounded-lg flex items-center justify-center hover:text-blue-600 transition-colors`}>
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-8 rounded-2xl`}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Name *
                    </label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-600 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'} focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors`}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Email *
                    </label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-600 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'} focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors`}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Subject *
                  </label>
                  <input 
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-600 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'} focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-colors`}
                    placeholder="Project discussion"
                    required
                  />
                </div>
                
                <div>
                  <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Message *
                  </label>
                  <textarea 
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${darkMode ? 'bg-gray-600 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'} focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none transition-colors`}
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 rounded-lg transition-colors font-medium flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <Loader className="animate-spin" size={20} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
              
              <div className={`mt-6 p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-blue-50'} border-l-4 border-blue-500`}>
                <div className="flex items-start gap-3">
                  <Mail className="text-blue-600 mt-1" size={20} />
                  <div>
                    <p className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                      Need to reach me directly?
                    </p>
                    <a 
                      href="mailto:mr.shudhuingle@gmail.com" 
                      className={`text-sm ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} underline`}
                    >
                      mr.shudhuingle@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">
              Shuddhodan<span className="text-blue-400">.</span>
            </div>
            <p className="text-gray-400 mb-6">
              Software Developer | Java | Full-Stack
            </p>
            <div className="flex justify-center gap-4 mb-8">
              <a href="mailto:mr.shudhuingle@gmail.com" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://github.com/Shudhu7/" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/shuddhodan-ingale-3b4238215/" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">
                © 2025 Shuddhodan Ingale. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
