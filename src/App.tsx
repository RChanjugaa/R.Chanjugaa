/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ExternalLink, 
  Code2, 
  Briefcase, 
  User, 
  Cpu, 
  GraduationCap,
  Menu,
  X,
  MapPin,
  Phone,
  Sun,
  Moon,
  Award,
  Palette,
  Layout,
  Layers,
  Terminal,
  ChevronRight
} from 'lucide-react';

const assetPath = (fileName: string) => `${import.meta.env.BASE_URL}${fileName}`;

const PROJECTS = [
  {
    title: "Ambiance",
    subtitle: "Photography Studio Management System",
    description: "Full-stack studio booking and management web app built with TypeScript. Demonstrates end-to-end development with 76+ commits reflecting a consistent and disciplined workflow.",
    tech: ["TypeScript", "JavaScript", "Node.js", "MySQL"],
    type: "Web Application",
    category: "University",
    image: assetPath("project-ambiance.svg"),
    liveLink: "",
    github: "https://github.com/RChanjugaa/Photography_studio_management_system"
  },
  {
    title: "MEDILIFE",
    subtitle: "Patient Management System",
    description: "Responsive patient management hospital website with full backend integration, designed to handle patient records and appointments efficiently.",
    tech: ["Bootstrap", "jQuery", "MongoDB", "Node.js", "Express.js"],
    type: "Web Application",
    category: "Personal",
    image: assetPath("project-medilife.svg"),
    liveLink: "",
    github: "https://github.com/RChanjugaa/MEDILIFE"
  },
  {
    title: "SaveLKR",
    subtitle: "Smart Budgeting Web App",
    description: "A smart budgeting web app that allows users to track daily expenses, scan bills using OCR, and categorize spending automatically. Includes multilingual voice summaries in English, Sinhala, and Tamil.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase", "Tesseract.js"],
    type: "Web Application",
    category: "Personal",
    image: assetPath("project-savelkr.svg"),
    liveLink: "",
    github: ""
  },
  {
    title: "Expense Tracker",
    subtitle: "Group Expense Management App",
    description: "A full-stack Django web app for tracking and splitting expenses across groups, with email-OTP authentication, Google login, and PostgreSQL persistence. Deployed live on Render.",
    tech: ["Python", "Django", "PostgreSQL", "Bootstrap"],
    type: "Web Application",
    category: "Personal",
    image: assetPath("project-expensetracker.png"),
    liveLink: "https://expense-tracker-iyjt.onrender.com/",
    github: "https://github.com/RChanjugaa/EXPENSE_TRACKER"
  },
  {
    title: "READZY",
    subtitle: "Book Lending Platform",
    description: "Responsive web application with user-focused UI, interactive components, and basic backend integration for managing book loans and inventory.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
    type: "Web Application",
    category: "University",
    image: assetPath("project-readzy.png"),
    liveLink: "https://rchanjugaa.github.io/READZY/",
    github: "https://github.com/RChanjugaa/READZY"
  },
  {
    title: "Portfolio",
    subtitle: "Personal Portfolio Website",
    description: "Personal portfolio website built with React and TypeScript, showcasing projects, skills, and experience with a modern UI and dark mode support.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    type: "Web Application",
    category: "Personal",
    image: assetPath("project-ambiance.svg"),
    liveLink: "https://rchanjugaa.github.io/R.Chanjugaa/",
    github: "https://github.com/RChanjugaa/R.Chanjugaa"
  }
];

const SKILLS_LIST = [
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "JavaScript (ES6+)", category: "Frontend" },
  { name: "HTML & CSS", category: "Frontend" },
  { name: "Bootstrap", category: "Frontend" },
  { name: "Python", category: "Programming" },
  { name: "Java", category: "Programming" },
  { name: "C / C++", category: "Programming" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "PHP", category: "Backend" },
  { name: "MongoDB", category: "Backend" },
  { name: "MySQL / MSSQL", category: "Backend" },
  { name: "Firebase", category: "Backend" },
  { name: "Figma", category: "Design" },
  { name: "UI/UX Design", category: "Design" },
  { name: "Android Studio", category: "Tools" },
  { name: "Git & GitHub", category: "Tools" },
  { name: "R Studio", category: "Tools" },
  { name: "Agile Methodology", category: "Management" }
];

const EXPERIENCE = [
  {
    role: "Front-End Developer Intern",
    company: "Codveda Technologies",
    period: "1 Month",
    description: "Developed responsive user interfaces using HTML, CSS, and JavaScript. Focused on optimizing user experience and implementing modern design patterns.",
    certificate: {
      title: "Internship Completion Certificate",
      issuer: "Codveda Technologies",
      link: assetPath("CODEVEDA Completion letter.pdf")
    }
  },
  {
    role: "Program Team Member",
    company: "Lead Spring 2025 (IEEE IAS & PES SLIIT)",
    period: "2025",
    description: "Spearheaded event coordination and Agile planning. Facilitated collaborative problem-solving and bridged technical requirements with event objectives.",
    certificate: {
      title: "Program Team Appreciation Certificate",
      issuer: "IEEE IAS & PES SLIIT",
      link: "https://drive.google.com/file/d/1oHPhTPLI7ioJpti4fZGpWSCtuo4gvEQw/view?usp=drive_link"
    }
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('light');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return PROJECTS;
    return PROJECTS.filter(p => p.tech.includes(filter) || p.type === filter || p.category === filter);
  }, [filter]);

  const filterOptions = ['All', 'Personal', 'University', 'Web Application'];

  return (
    <div className="min-h-screen transition-colors duration-500 dark:bg-dark-bg dark:text-slate-200">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 dark:bg-obsidian-surface/90 backdrop-blur-lg py-4 shadow-sm' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <motion.a href="#" className="text-2xl font-display font-bold tracking-tighter dark:text-white">
            CHANJUGAA<span className="text-pastel-pink-dark">.</span>
          </motion.a>

          <div className="hidden md:flex items-center space-x-10">
            {['About', 'Experience', 'Projects', 'Skills', 'Memberships', 'Contact'].map((name) => (
              <a key={name} href={`#${name.toLowerCase()}`} className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                {name}
              </a>
            ))}
            <button onClick={toggleTheme} className="p-2.5 rounded-full bg-slate-50 dark:bg-obsidian-border text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all">
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Atmospheric background elements for dark mode */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 dark:opacity-100 transition-opacity duration-1000">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-pastel-mint/50 dark:bg-obsidian-surface text-emerald-700 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-8 border dark:border-obsidian-border">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Software Engineering Student</span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-display font-bold text-slate-900 dark:text-white leading-[1.1] mb-8">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-pastel-pink-dark to-purple-500 dark:from-pink-400 dark:to-purple-400">Chanjugaa</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed font-light">
              A <span className="font-semibold text-slate-900 dark:text-white">Full Stack Developer</span> specializing in <span className="font-semibold text-slate-900 dark:text-white">UI/UX Design</span> and <span className="font-semibold text-slate-900 dark:text-white">Frontend Development</span>. Bridging the gap between design and engineering.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <motion.a
                href={assetPath("Chanjugaa_Rasamohan_CV.pdf")}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm tracking-widest uppercase shadow-2xl hover:shadow-pastel-pink/20 transition-all flex items-center space-x-3"
              >
                <span>View My CV</span>
                <Download size={18} />
              </motion.a>
              <div className="flex items-center space-x-6">
                <a href="https://github.com/RChanjugaa" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/chanjugaa-rasamohan-1444b0372" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-slate-200 dark:border-obsidian-border animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-pastel-mint via-pastel-lavender to-pastel-pink dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 p-1.5 shadow-2xl">
                <div className="w-full h-full rounded-full bg-white dark:bg-slate-950 overflow-hidden">
                  <img 
                   src={assetPath("profile.jpg")}
                   alt="Chanjugaa Rasamohan"
                   className="w-full h-full object-cover grayscale-[20%]"
                  />
                </div>
              </div>
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-6 -right-6 glass-card px-5 py-3 rounded-2xl flex items-center space-x-3 shadow-xl"
              >
                <div className="w-10 h-10 rounded-xl bg-pastel-mint dark:bg-obsidian-border flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Layout size={20} />
                </div>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Frontend Expert</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white dark:bg-obsidian-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xs font-bold text-pastel-pink-dark uppercase tracking-[0.3em] mb-4">Professional Profile</h2>
              <h3 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-8">Bridging Design & Engineering</h3>
              <div className="space-y-6 about-text font-medium">
                <p>
                  I am a Software Engineering student at SLIIT City Uni with a specialized focus on <span className="font-bold text-slate-900 dark:text-white">UI/UX Design</span> and <span className="font-bold text-slate-900 dark:text-white">Frontend Development</span>. My passion lies in creating high-conversion, user-centric digital products that combine aesthetic elegance with technical robustness.
                </p>
                <p>
                  As a <span className="font-bold text-slate-900 dark:text-white">Program Team Member for Lead Spring 2025 (IEEE IAS & PES SLIIT)</span>, I have honed my skills in event coordination, Agile planning, and collaborative problem-solving. I thrive in high-performance environments where technical requirements meet creative user needs.
                </p>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Palette className="text-pastel-pink-dark" />, title: "UI/UX Design", desc: "User-centric interfaces with a focus on usability." },
                { icon: <Layout className="text-emerald-500" />, title: "Frontend Dev", desc: "Building responsive and interactive web apps." },
                { icon: <Terminal className="text-purple-500" />, title: "Full Stack", desc: "End-to-end development with modern stacks." },
                { icon: <Layers className="text-blue-500" />, title: "Agile", desc: "Efficient project management and delivery." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6 rounded-3xl"
                >
                  <div className="mb-4">{item.icon}</div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-light">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding bg-slate-50 dark:bg-transparent relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-xs font-bold text-pastel-pink-dark uppercase tracking-[0.3em] mb-4">Career Path</h2>
            <h3 className="text-4xl font-display font-bold text-slate-900 dark:text-white">Experience & Recognition</h3>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-10">
              {EXPERIENCE.map((exp, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-10 rounded-[3rem] relative overflow-hidden group"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <div className="inline-block px-4 py-1 rounded-full bg-pastel-lavender/50 dark:bg-slate-800/50 text-purple-700 dark:text-purple-400 text-[10px] font-bold uppercase tracking-widest mb-4 border dark:border-white/5">
                        {exp.period}
                      </div>
                      <h4 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-2">{exp.role}</h4>
                      <p className="text-pastel-pink-dark font-bold text-sm uppercase tracking-widest mb-6">{exp.company}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-light mb-8">{exp.description}</p>
                  
                  {/* Integrated Certificate */}
                  <div className="p-6 rounded-2xl bg-white/50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-xl bg-pastel-pink/20 dark:bg-pink-500/10 text-pastel-pink-dark">
                        <Award size={24} />
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-900 dark:text-white text-sm">{exp.certificate.title}</h5>
                        <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest">{exp.certificate.issuer}</p>
                      </div>
                    </div>
                    {exp.certificate.link ? (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={exp.certificate.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] font-bold uppercase tracking-widest transition-all shadow-lg"
                      >
                        <span>View certificate</span>
                        <ExternalLink size={14} />
                      </motion.a>
                    ) : (
                      <span className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/50 text-slate-400 dark:text-slate-600 text-[10px] font-bold uppercase tracking-widest cursor-not-allowed">
                        <span>Coming Soon</span>
                        <ExternalLink size={14} />
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 lg:sticky lg:top-32"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative group">
                <img src={assetPath("whatsapp.jpg")} alt="Chanjugaa Rasamohan" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute bottom-10 left-10 right-10">
                  <p className="text-white text-lg font-display font-bold mb-2">Dedicated to Excellence</p>
                  <p className="text-white/70 text-sm font-light">Building the future through clean code and intuitive design.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-white dark:bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold text-pastel-pink-dark uppercase tracking-[0.3em] mb-4">Portfolio</h2>
            <h3 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-10">Selected Works</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {filterOptions.map(opt => (
                <button 
                  key={opt} 
                  onClick={() => setFilter(opt)} 
                  className={`px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all border ${filter === opt ? 'bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-900 dark:border-white' : 'bg-transparent text-slate-400 border-slate-100 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/30'}`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((p) => (
                <motion.div
                  key={p.title + p.subtitle}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="group flex flex-col bg-slate-50 dark:bg-slate-900/40 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-white/5 hover:shadow-2xl transition-all duration-500"
                >
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-slate-900/30 dark:bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-1">{p.title}</h4>
                        <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{p.subtitle}</p>
                      </div>
                      <span className={`text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest border ${p.category === 'Personal' ? 'bg-pastel-pink/20 text-pastel-pink-dark border-pastel-pink/30' : 'bg-pastel-lavender/30 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-900'}`}>
                        {p.category}
                      </span>
                    </div>

                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-5 line-clamp-3 font-light flex-1">{p.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.tech.map(t => (
                        <span key={t} className="text-[9px] font-bold px-3 py-1 bg-white dark:bg-slate-900/60 text-slate-500 dark:text-slate-300 rounded-lg border border-slate-100 dark:border-white/10">{t}</span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-auto">
                      {/* View Live */}
                      {p.liveLink ? (
                        <a
                          href={p.liveLink}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[10px] font-bold uppercase tracking-widest hover:scale-[1.03] transition-all shadow-md"
                        >
                          <ExternalLink size={13} />
                          View Live
                        </a>
                      ) : (
                        <span className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800/50 text-slate-400 dark:text-slate-600 text-[10px] font-bold uppercase tracking-widest cursor-not-allowed border border-slate-200 dark:border-white/5">
                          <ExternalLink size={13} />
                          Coming Soon
                        </span>
                      )}

                      {/* GitHub Repo */}
                      {p.github ? (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white text-[10px] font-bold uppercase tracking-widest hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all"
                        >
                          <Github size={13} />
                          GitHub Repo
                        </a>
                      ) : (
                        <span className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl border-2 border-slate-200 dark:border-white/10 text-slate-400 dark:text-slate-600 text-[10px] font-bold uppercase tracking-widest cursor-not-allowed">
                          <Github size={13} />
                          Private
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-slate-50 dark:bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-xs font-bold text-pastel-pink-dark uppercase tracking-[0.3em] mb-4">Expertise</h2>
            <h3 className="text-4xl font-display font-bold text-slate-900 dark:text-white">Technical Toolkit</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {SKILLS_LIST.map((skill, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -5, scale: 1.05 }} 
                className="glass-card p-8 rounded-3xl text-center flex flex-col items-center justify-center hover:shadow-xl transition-all"
              >
                <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">{skill.category}</div>
                <div className="text-lg font-display font-bold text-slate-900 dark:text-white">{skill.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Memberships Section */}
      <section id="memberships" className="section-padding bg-white dark:bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold text-pastel-pink-dark uppercase tracking-[0.3em] mb-4">Professional</h2>
            <h3 className="text-4xl font-display font-bold text-slate-900 dark:text-white">Memberships</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { org: "IEEE", detail: "Member since December 2025", sub: "Member No: 101501753", status: "Active" },
              { org: "IEEE Computer Society", detail: "Active Member", sub: "1 Year", status: "Active" },
              { org: "IEEE IAS", detail: "Industry Applications Society", sub: "Active Member · 1 Year", status: "Active" },
              { org: "IEEE SIGHT", detail: "Special Interest Group on Humanitarian Technology", sub: "Active Member · 1 Year", status: "Active" },
            ].map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 rounded-3xl flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 uppercase tracking-widest border border-emerald-200 dark:border-emerald-800">
                    {m.status}
                  </span>
                  <Award size={18} className="text-pastel-pink-dark" />
                </div>
                <h4 className="font-display font-bold text-slate-900 dark:text-white text-lg leading-tight">{m.org}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">{m.detail}</p>
                <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{m.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white dark:bg-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-12 md:p-16 rounded-[3rem] flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xs font-bold text-pastel-pink-dark uppercase tracking-[0.3em] mb-6">Get In Touch</h2>
                <h3 className="text-5xl font-display font-bold text-slate-900 dark:text-white mb-8 leading-tight">Let's Create Something <span className="text-pastel-pink-dark">Exceptional</span></h3>
                <p className="text-slate-500 dark:text-slate-400 text-lg mb-12 font-light">
                  I am currently open to internship opportunities and collaborative projects. Reach out directly via email or connect on social platforms.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 rounded-2xl bg-pastel-pink/50 dark:bg-slate-800/50 flex items-center justify-center text-pastel-pink-dark border dark:border-white/5">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email Me</p>
                    <a href="mailto:chanju1231@gmail.com" className="text-lg font-medium text-slate-900 dark:text-white hover:text-pastel-pink-dark transition-colors">chanju1231@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 rounded-2xl bg-pastel-mint/50 dark:bg-slate-800/50 flex items-center justify-center text-emerald-600 border dark:border-white/5">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">LinkedIn</p>
                    <a href="https://linkedin.com/in/chanjugaa-rasamohan-1444b0372" target="_blank" rel="noreferrer" className="text-lg font-medium text-slate-900 dark:text-white hover:text-emerald-600 transition-colors">Chanjugaa Rasamohan</a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-12 md:p-16 rounded-[3rem]"
            >
              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const body = `Name: ${formData.get('name')}\nMessage: ${formData.get('message')}`;
                window.location.href = `mailto:chanju1231@gmail.com?subject=Portfolio Inquiry&body=${encodeURIComponent(body)}`;
              }}>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Full Name</label>
                  <input name="name" required className="w-full px-8 py-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-transparent focus:border-pastel-pink-dark dark:focus:border-white/20 outline-none text-slate-900 dark:text-white transition-all" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Your Message</label>
                  <textarea name="message" required rows={5} className="w-full px-8 py-5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-transparent focus:border-pastel-pink-dark dark:focus:border-white/20 outline-none text-slate-900 dark:text-white transition-all resize-none" placeholder="How can I help you?" />
                </div>
                <button type="submit" className="w-full py-6 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm uppercase tracking-widest shadow-2xl hover:scale-[1.02] transition-all">
                  Send Direct Email
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center border-t border-slate-100 dark:border-obsidian-border bg-white dark:bg-obsidian-bg">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            © 2026 Chanjugaa Rasamohan
          </p>
          <div className="flex items-center space-x-8">
            <a href="https://github.com/RChanjugaa" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"><Github size={20} /></a>
            <a href="https://linkedin.com/in/chanjugaa-rasamohan-1444b0372" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="mailto:chanju1231@gmail.com" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </footer>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[60] bg-white dark:bg-obsidian-bg p-10 flex flex-col justify-center items-center space-y-10 md:hidden"
          >
            <button className="absolute top-10 right-10" onClick={() => setIsMenuOpen(false)}>
              <X size={32} />
            </button>
            {['About', 'Experience', 'Projects', 'Skills', 'Memberships', 'Contact'].map((name) => (
              <a 
                key={name} 
                href={`#${name.toLowerCase()}`} 
                className="text-3xl font-display font-bold text-slate-900 dark:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
