import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  // Skills Data - Updated colors to match your palette
  const skillsData = {
    frontend: {
      title: "Frontend Development",
      icon: "🎨",
      description: "Crafting pixel-perfect, responsive user interfaces with modern frameworks and animations.",
      skills: [
        { name: "React", icon: "⚛️", level: 95, color: "from-[#C98573] to-[#E8D8D1]" },
        { name: "Next.js", icon: "🚀", level: 92, color: "from-[#C98573] to-[#3A2A29]" },
        { name: "TypeScript", icon: "🔤", level: 88, color: "from-[#E8D8D1] to-[#C98573]" },
        { name: "Tailwind CSS", icon: "💨", level: 96, color: "from-[#3A2A29] to-[#5C4A48]" },
        { name: "Framer Motion", icon: "🎭", level: 90, color: "from-[#C98573] via-[#E8D8D1] to-[#5C4A48]" },
        { name: "HTML5", icon: "🔖", level: 98, color: "from-[#5C4A48] to-[#C98573]" },
        { name: "CSS3", icon: "🎨", level: 97, color: "from-[#E8D8D1] to-[#3A2A29]" }
      ]
    },
    backend: {
      title: "Backend Development",
      icon: "⚙️",
      description: "Building scalable APIs, databases, and server-side logic with modern technologies.",
      skills: [
        { name: "Node.js", icon: "⚡", level: 92, color: "from-[#3A2A29] to-[#C98573]" },
        { name: "Express.js", icon: "🚀", level: 88, color: "from-[#C98573] to-[#E8D8D1]" },
        { name: "MongoDB", icon: "🐘", level: 87, color: "from-[#5C4A48] to-[#3A2A29]" },
        { name: "PostgreSQL", icon: "🐘", level: 85, color: "from-[#E8D8D1] to-[#C98573]" },
        { name: "Prisma ORM", icon: "🔗", level: 82, color: "from-[#3A2A29] to-[#5C4A48]" },
        { name: "JWT Auth", icon: "🔐", level: 90, color: "from-[#C98573] to-[#E8D8D1]" }
      ]
    },
    tools: {
      title: "Development Tools",
      icon: "🛠️",
      description: "Essential tools and workflows that power my development process.",
      skills: [
        { name: "Git & GitHub", icon: "📂", level: 97, color: "from-[#DDD2CC] to-[#7A6863]" },
        { name: "Vercel", icon: "🚀", level: 95, color: "from-[#3A2A29] to-[#2B1F1F]" },
        { name: "VS Code", icon: "💻", level: 100, color: "from-[#C98573] to-[#E8D8D1]" },
        { name: "Figma", icon: "🎨", level: 88, color: "from-[#5C4A48] to-[#C98573]" },
        { name: "Docker", icon: "🐳", level: 78, color: "from-[#E8D8D1] to-[#3A2A29]" },
        { name: "npm/yarn", icon: "📦", level: 96, color: "from-[#C98573] to-[#5C4A48]" }
      ]
    },
    design: {
      title: "Design & UX",
      icon: "✨",
      description: "Creating intuitive user experiences with modern design principles.",
      skills: [
        { name: "Responsive Design", icon: "📱", level: 96, color: "from-[#C98573] to-[#E8D8D1]" },
        { name: "UI/UX Principles", icon: "🎯", level: 92, color: "from-[#3A2A29] to-[#C98573]" },
        { name: "Accessibility", icon: "♿", level: 90, color: "from-[#E8D8D1] to-[#5C4A48]" },
        { name: "Animations", icon: "✨", level: 93, color: "from-[#C98573] via-[#E8D8D1] to-[#3A2A29]" },
        { name: "Prototyping", icon: "📐", level: 87, color: "from-[#5C4A48] to-[#C98573]" }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5EFEB] via-[#E8D8D1] to-[#F5EFEB] py-24 relative overflow-hidden text-[#2B1F1F]">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-[#C98573]/20 to-[#E8D8D1]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-[#C98573]/10 to-[#5C4A48]/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-20 w-48 h-48 bg-gradient-to-r from-[#3A2A29]/10 to-[#C98573]/10 rounded-full blur-2xl animate-pulse delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-block w-24 h-24 mx-auto mb-8 p-4 bg-gradient-to-br from-[#3A2A29]/20 rounded-3xl shadow-2xl">
            <div className="w-full h-full bg-gradient-to-br from-[#C98573] via-[#E8D8D1] to-[#5C4A48] rounded-2xl flex items-center justify-center text-3xl font-black shadow-xl">
              💻
            </div>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black bg-gradient-to-r from-[#2B1F1F] via-[#3A2A29] to-[#C98573] bg-clip-text text-transparent mb-6">
            My Skills
          </h1>
          <p className="text-xl sm:text-2xl text-[#7A6863] max-w-3xl mx-auto leading-relaxed">
            Full Stack Web Developer with expertise in modern frameworks, tools, and best practices.
          </p>
        </motion.section>

        {/* Skills Categories Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center mb-20 -mx-2 px-4"
        >
          {Object.keys(skillsData).map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 flex items-center space-x-3 group ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-[#C98573] to-[#E8D8D1] text-[#2B1F1F] shadow-2xl scale-105 -rotate-2 border border-[#C98573]/50'
                  : 'bg-[#FFF8F5]/70 text-[#7A6863] hover:bg-[#E8D8D1]/80 hover:text-[#2B1F1F] border border-[#DDD2CC]/50 hover:border-[#C98573]/40 hover:scale-105 hover:rotate-1'
              }`}
              whileHover={{ scale: 1.05, rotate: activeCategory === category ? 0 : 1 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-2xl">{skillsData[category].icon}</span>
              <span>{skillsData[category].title.split(' ')[0]}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Active Category Content */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Category Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="text-6xl mb-6 mx-auto w-24 h-24 p-6 bg-gradient-to-br from-[#3A2A29]/20 rounded-3xl shadow-2xl flex items-center justify-center mx-auto">
              {skillsData[activeCategory].icon}
            </div>
            <h2 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-[#2B1F1F] via-[#3A2A29] to-[#C98573] bg-clip-text text-transparent mb-6">
              {skillsData[activeCategory].title}
            </h2>
            <p className="text-xl text-[#7A6863] max-w-2xl mx-auto leading-relaxed">
              {skillsData[activeCategory].description}
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(74, 42, 41, 0.3)"
                }}
                className="group bg-gradient-to-b from-[#3A2A29]/10 via-[#5C4A48]/5 to-[#3A2A29]/10 backdrop-blur-xl rounded-3xl p-8 border border-[#DDD2CC]/20 hover:border-[#C98573]/40 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
              >
                {/* Skill Icon & Name */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${skill.color} shadow-lg group-hover:scale-110 transition-all duration-300`}>
                    <span className="text-2xl">{skill.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-[#2B1F1F]">{skill.name}</h3>
                    <div className="w-full bg-gradient-to-r from-[#DDD2CC]/30 to-transparent h-1 rounded-full mt-2 group-hover:from-[#C98573]/50 transition-all" />
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="flex justify-between text-sm text-[#6F5C58] mb-2">
                    <span>Proficiency</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-[#DDD2CC]/20 rounded-full h-4 overflow-hidden">
                    <motion.div 
                      className={`h-4 rounded-full shadow-lg ${skill.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.8, ease: "easeOut" }}
                    />
                  </div>
                </div>

                {/* Details */}
                <p className="text-[#7A6863] text-sm mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-relaxed">
                  Expert level mastery with real-world project experience
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 mt-32 mb-24"
        >
          {[
            { number: "50+", label: "Projects", icon: "🚀" },
            { number: "3+", label: "Years Exp", icon: "⏳" },
            { number: "100%", label: "Client Satisfaction", icon: "⭐" },
            { number: "24h", label: "Response Time", icon: "⚡" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.1, y: -10 }}
              className="group text-center p-8 bg-gradient-to-b from-[#3A2A29]/10 via-[#5C4A48]/5 to-[#3A2A29]/10 backdrop-blur-xl rounded-3xl border border-[#DDD2CC]/20 hover:border-[#C98573]/40 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-[#C98573] to-[#E8D8D1] bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <p className="text-[#6F5C58] group-hover:text-[#2B1F1F] transition-colors">{stat.label}</p>
            </motion.div>
          ))}
        </motion.section>
      </div>
    </div>
  );
};

export default Skills;