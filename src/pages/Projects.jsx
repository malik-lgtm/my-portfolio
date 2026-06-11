import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Projects Data
  const projects = [
    {
      id: 1,
      title: "Hospital Management System",
      description: "Comprehensive hospital management platform with patient records, appointment scheduling, doctor management, and real-time analytics dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind", "Chart.js"],
      image: "🏥",
      category: "fullstack",
      live: "https://hospital-demo.com",
      github: "https://github.com/hospital-management",
      featured: true
    },
    {
      id: 2,
      title: "Cosmetics E-Commerce Website",
      description: "Modern cosmetics e-commerce platform with product catalog, shopping cart, payment integration, and responsive design.",
      technologies: ["Next.js", "Tailwind CSS", "Stripe", "Framer Motion"],
      image: "💄",
      category: "frontend",
      live: "https://cosmetics-demo.com",
      github: "https://github.com/cosmetics-ecommerce",
      featured: true
    },
    {
      id: 3,
      title: "Task Management Dashboard",
      description: "Collaborative task management app with drag & drop, real-time updates, user roles, and analytics.",
      technologies: ["React", "Firebase", "TypeScript", "Tailwind"],
      image: "📋",
      category: "fullstack",
      live: "https://task-demo.com",
      github: "https://github.com/task-manager",
      featured: false
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Personal portfolio with smooth animations, glassmorphism design, and modern gradients using React & Tailwind.",
      technologies: ["React", "Tailwind", "Framer Motion"],
      image: "🌐",
      category: "frontend",
      live: "https://portfolio-demo.com",
      github: "https://github.com/portfolio",
      featured: true
    },
    {
      id: 5,
      title: "Weather Dashboard",
      description: "Real-time weather app with location-based forecasts, interactive maps, and beautiful UI animations.",
      technologies: ["React", "OpenWeather API", "Leaflet Maps"],
      image: "🌤️",
      category: "frontend",
      live: "https://weather-demo.com",
      github: "https://github.com/weather-app",
      featured: false
    },
    {
      id: 6,
      title: "Blog Platform",
      description: "Full-featured blogging platform with rich text editor, categories, search, and admin dashboard.",
      technologies: ["Next.js", "Prisma", "PostgreSQL"],
      image: "📝",
      category: "fullstack",
      live: "https://blog-demo.com",
      github: "https://github.com/blog-platform",
      featured: false
    }
  ];

  // Filter projects
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'frontend', name: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'fullstack', name: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5EFEB] via-[#E8D8D1] to-[#F5EFEB] py-24 overflow-hidden text-[#2B1F1F]">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-[#C98573]/20 to-[#E8D8D1]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-[#C98573]/10 to-[#5C4A48]/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#2B1F1F] via-[#3A2A29] to-[#C98573] bg-clip-text text-transparent mb-6">
            My Projects
          </h1>
          <p className="text-xl text-[#7A6863] max-w-2xl mx-auto leading-relaxed">
            A showcase of my best work. From full-stack applications to beautiful frontend experiences.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C98573] to-[#E8D8D1] mx-auto rounded-full mt-8" />
        </motion.section>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mb-20 -mx-2 px-4"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 text-sm flex items-center space-x-2 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-[#C98573] to-[#E8D8D1] text-[#2B1F1F] shadow-xl scale-105 border border-[#C98573]/50'
                  : 'bg-[#FFF8F5]/70 text-[#7A6863] hover:bg-[#E8D8D1]/80 hover:text-[#2B1F1F] border border-[#DDD2CC]/40 hover:border-[#C98573]/40 hover:scale-105'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{category.name}</span>
              <span className="text-xs bg-[#DDD2CC]/30 px-2 py-1 rounded-full min-w-[24px] h-6 flex items-center justify-center">
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Projects */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold text-[#2B1F1F] text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-gradient-to-b from-[#3A2A29]/10 via-[#5C4A48]/5 to-[#3A2A29]/10 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-[#DDD2CC]/20 hover:border-[#C98573]/40 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden"
              >
                {/* Project Image/Emoji */}
                <div className="text-6xl mb-6 mx-auto">{project.image}</div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#2B1F1F] group-hover:text-[#C98573] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#7A6863] leading-relaxed text-lg">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-[#FFF8F5]/50 backdrop-blur-sm rounded-xl text-sm font-medium text-[#2B1F1F] hover:bg-[#E8D8D1]/70 transition-all border border-[#DDD2CC]/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-8 pt-8 border-t border-[#DDD2CC]/20">
                  <motion.a
                    href={project.live}
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    className="flex-1 bg-gradient-to-r from-[#C98573] to-[#E8D8D1] hover:from-[#E8D8D1] hover:to-[#C98573] text-[#2B1F1F] font-semibold py-3 px-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-[#C98573]/30"
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                    className="flex-1 bg-[#FFF8F5]/70 hover:bg-[#E8D8D1]/80 backdrop-blur-sm text-[#2B1F1F] font-semibold py-3 px-6 rounded-xl text-center border border-[#DDD2CC]/40 hover:border-[#C98573]/40 transition-all duration-300"
                  >
                    GitHub
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* All Projects Grid */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#2B1F1F] text-center mb-12">All Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-gradient-to-b from-[#3A2A29]/5 via-[#5C4A48]/2 to-[#3A2A29]/5 backdrop-blur-xl rounded-2xl p-8 border border-[#DDD2CC]/10 hover:border-[#C98573]/30 shadow-xl hover:shadow-2xl transition-all duration-400 cursor-pointer overflow-hidden h-64 flex flex-col justify-between"
              >
                {/* Header */}
                <div>
                  <div className="text-4xl mb-4">{project.image}</div>
                  <h3 className="font-bold text-xl text-[#2B1F1F] mb-2 group-hover:text-[#C98573] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#6F5C58] text-sm line-clamp-3">{project.description}</p>
                </div>
                
                {/* Tech & Links */}
                <div className="mt-6 pt-6 border-t border-[#DDD2CC]/20 space-y-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-[#FFF8F5]/40 rounded-lg text-xs font-medium text-[#2B1F1F]">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a href={project.live} target="_blank" className="flex-1 text-xs bg-gradient-to-r from-[#C98573]/20 to-[#E8D8D1]/20 text-[#C98573] px-3 py-2 rounded-lg text-center hover:bg-[#C98573]/40 transition-all border border-[#C98573]/30">
                      Live →
                    </a>
                    <a href={project.github} target="_blank" className="flex-1 text-xs bg-[#DDD2CC]/20 text-[#6F5C58] px-3 py-2 rounded-lg text-center hover:bg-[#DDD2CC]/40 transition-all border border-[#DDD2CC]/30">
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="col-span-full text-center py-24"
            >
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-[#2B1F1F] mb-4">No projects found</h3>
              <p className="text-[#7A6863] max-w-md mx-auto">Try selecting a different category above.</p>
            </motion.div>
          )}
        </motion.section>
      </div>
    </div>
  );
};

export default Projects;