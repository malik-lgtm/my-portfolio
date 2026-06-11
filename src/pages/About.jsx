import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const About = () => {
  const [activeTab, setActiveTab] = useState('frontend'); // Set default tab

  // Tools & Skills Data
  const tools = {
    frontend: [
      { name: 'React', icon: '⚛️', level: 95 },
      { name: 'Html', icon: '🚀', level: 90 },
      { name: 'Javascript', icon: '🔤', level: 85 },
      { name: 'Tailwind CSS', icon: '💨', level: 95 },
      { name: 'Framer Motion', icon: '🎭', level: 90 }
    ],
    backend: [
      { name: 'MY SQLI', icon: '⚡', level: 90 },
      { name: 'PHP', icon: '🚀', level: 85 },
      { name: 'LARAVEL', icon: '🐘', level: 85 },
      { name: 'NODE.JS', icon: '🐘', level: 80 },
      { name: 'Firebase', icon: '🔥', level: 85 }
    ],
    tools: [
      { name: 'Git & GitHub', icon: '📂', level: 95 },
      { name: 'Vercel', icon: '🚀', level: 90 },
      { name: 'Figma', icon: '🎨', level: 85 },
      { name: 'VS Code', icon: '💻', level: 100 },
      { name: 'Docker', icon: '🐳', level: 75 }
    ]
  };

  const experience = [
    {
      title: "Full Stack Developer",
      company: "Freelance",
      duration: "2025 - Present",
      description: "Building production-ready web applications for startups and businesses."
    },
    {
      title: "Frontend Developer",
      company: "Tech Startup",
      duration: "2025 - Present",
      description: "Developed responsive UIs using React and modern CSS frameworks."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5EFEB] via-[#E8D8D1] to-[#F5EFEB] py-24 text-[#2B1F1F]">
      {/* Background Decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-r from-[#C98573]/20 to-[#E8D8D1]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-r from-[#C98573]/10 to-[#5C4A48]/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-block w-28 h-28 sm:w-36 sm:h-36 mx-auto mb-8 rounded-3xl bg-gradient-to-r from-[#3A2A29]/20 p-2 shadow-2xl">
            <div className="w-full h-full bg-gradient-to-br from-[#C98573] via-[#E8D8D1] to-[#5C4A48] rounded-2xl flex items-center justify-center text-4xl font-black shadow-xl">
              👨‍💻
            </div>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#2B1F1F] via-[#3A2A29] to-[#C98573] bg-clip-text text-transparent mb-6">
            About Me
          </h1>
          
          <p className="text-xl sm:text-2xl text-[#7A6863] max-w-3xl mx-auto leading-relaxed">
            I'm a <span className="font-bold bg-gradient-to-r from-[#C98573] to-[#E8D8D1] bg-clip-text text-transparent">Full Stack Developer</span> 
            passionate about crafting beautiful, performant web applications. 
            I love turning complex problems into simple, elegant solutions.
          </p>
        </motion.section>

        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          
          {/* Left Column - Introduction & Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12 lg:sticky lg:top-24 lg:self-start"
          >
            {/* Personal Introduction */}
            <div className="bg-gradient-to-b from-[#3A2A29]/10 via-[#5C4A48]/5 to-[#3A2A29]/10 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-[#DDD2CC]/30 shadow-2xl">
              <h2 className="text-3xl font-bold text-[#2B1F1F] mb-6">My Journey</h2>
              <p className="text-lg text-[#7A6863] leading-relaxed mb-8">
                With over 3 years of professional experience, I've worked with startups, 
                agencies, and enterprises to deliver production-ready applications. 
                My expertise spans the entire development stack - from pixel-perfect 
                UIs to scalable backend systems.
              </p>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-black text-[#C98573]">50+</div>
                  <div className="text-[#6F5C58]">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-[#C98573]">100%</div>
                  <div className="text-[#6F5C58]">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="bg-gradient-to-b from-[#3A2A29]/10 via-[#5C4A48]/5 to-[#3A2A29]/10 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-[#DDD2CC]/30 shadow-2xl">
              <h3 className="text-2xl font-bold text-[#2B1F1F] mb-8">Experience</h3>
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <motion.div
                    key={job.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-pointer p-6 bg-[#FFF8F5]/50 hover:bg-[#E8D8D1]/70 rounded-2xl border border-[#DDD2CC]/30 hover:border-[#C98573]/50 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4 mb-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-[#C98573] to-[#E8D8D1] rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <div className="flex-1">
                        <h4 className="font-bold text-xl text-[#2B1F1F]">{job.title}</h4>
                        <p className="text-[#C98573] font-semibold">{job.company}</p>
                        <p className="text-[#6F5C58] text-sm">{job.duration}</p>
                      </div>
                    </div>
                    <p className="text-[#7A6863] ml-7">{job.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills & Tools */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Skills Tabs */}
            <div className="bg-gradient-to-b from-[#3A2A29]/10 via-[#5C4A48]/5 to-[#3A2A29]/10 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-[#DDD2CC]/30 shadow-2xl mb-12">
              <h3 className="text-2xl font-bold text-[#2B1F1F] mb-8">Skills & Tools</h3>
              
              {/* Tab Buttons */}
              <div className="flex flex-wrap gap-3 mb-10 -mx-2 px-2">
                {Object.keys(tools).map((tab) => (
                  <motion.button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 min-w-[120px] py-3 px-4 rounded-2xl font-semibold transition-all duration-300 text-sm ${
                      activeTab === tab
                        ? 'bg-gradient-to-r from-[#C98573] to-[#E8D8D1] text-[#2B1F1F] shadow-xl scale-105 border border-[#C98573]/50'
                        : 'bg-[#FFF8F5]/50 text-[#7A6863] hover:bg-[#E8D8D1]/70 hover:text-[#2B1F1F] border border-[#DDD2CC]/50 hover:border-[#C98573]/30'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </motion.button>
                ))}
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {(tools[activeTab] || []).map((skill, index) => (
                  <motion.div
                    key={`${activeTab}-${skill.name}-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center justify-between group p-4 bg-[#FFF8F5]/30 hover:bg-[#E8D8D1]/50 rounded-xl border border-[#DDD2CC]/20 hover:border-[#C98573]/30 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4 flex-1">
                      <span className="text-2xl flex-shrink-0">{skill.icon}</span>
                      <div>
                        <div className="font-semibold text-[#2B1F1F] text-lg">{skill.name}</div>
                        <div className="text-sm text-[#6F5C58]">{skill.level}% Proficiency</div>
                      </div>
                    </div>
                    <div className="w-28 bg-[#DDD2CC]/30 rounded-full h-3 overflow-hidden ml-4">
                      <motion.div 
                        className="bg-gradient-to-r from-[#C98573] to-[#E8D8D1] h-3 rounded-full shadow-md"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-r from-[#C98573] to-[#E8D8D1] hover:from-[#E8D8D1] hover:to-[#C98573] text-[#2B1F1F] font-semibold py-6 px-8 rounded-2xl shadow-xl hover:shadow-2xl border border-[#C98573]/50 transition-all duration-300 cursor-pointer"
            >
              <Link to="/Contact" className="block">
                Let's Work Together →
                <span className="ml-2 text-[#2B1F1F]">💼</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;