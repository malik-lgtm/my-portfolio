import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  // Reviews Data
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "CEO @ TechCorp",
      avatar: "👩‍💼",
      content: "Outstanding work! Transformed our website into a modern masterpiece. Delivered ahead of schedule.",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "CTO @ StartupX",
      avatar: "👨‍💻",
      content: "Exceptional React developer. Our app is incredibly smooth and user-friendly now.",
      rating: 5
    },
    {
      name: "Emily Davis",
      role: "Product Manager @ FinTech",
      avatar: "👩‍🎨",
      content: "Breathtaking UI/UX design. Our conversion rates increased by 40%!",
      rating: 5
    }
  ];

  // Projects Data
  const projects = [
    {
      title: "E-Commerce Platform",
      tech: "React • Node.js • MongoDB",
      image: "🛒"
    },
    {
      title: "Dashboard Analytics",
      tech: "Next.js • Tailwind • Chart.js",
      image: "📊"
    },
    {
      title: "Task Management App",
      tech: "React • Firebase • TypeScript",
      image: "✅"
    },
    {
      title: "Portfolio Website",
      tech: "React • Tailwind • Framer Motion",
      image: "🌐"
    }
  ];

  // Auto-rotate reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5EFEB] via-[#E8D8D1] to-[#F5EFEB] overflow-x-hidden text-[#2B1F1F]">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#C98573]/70 via-[#E8D8D1]/70 to-[#5C4A48]/70" />
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }} />
        
        {/* Floating Elements */}
        <motion.div 
          className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-to-r from-[#C98573]/30 to-[#E8D8D1]/30 rounded-full blur-xl" 
          animate={{ y: [0, -30, 0], rotate: [0, 180, 360] }} 
          transition={{ duration: 20, repeat: Infinity }} 
        />
        <motion.div 
          className="absolute bottom-1/4 right-10 w-40 h-40 bg-gradient-to-r from-[#C98573]/20 to-[#5C4A48]/20 rounded-full blur-2xl" 
          animate={{ scale: [1, 1.1, 1] }} 
          transition={{ duration: 15, repeat: Infinity }} 
        />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 100 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.2 }}
          >
            {/* Profile */}
            <motion.div 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              transition={{ duration: 0.8, delay: 0.3 }} 
              className="w-28 h-28 sm:w-36 sm:h-36 mx-auto mb-8 rounded-3xl bg-gradient-to-r from-[#3A2A29]/20 p-2 shadow-2xl"
            >
              <div className="w-full h-full bg-gradient-to-br from-[#C98573] via-[#E8D8D1] to-[#5C4A48] rounded-2xl flex items-center justify-center text-4xl font-black shadow-xl">
                👨‍💻
              </div>
            </motion.div>
            
            {/* Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.5 }} 
              className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-[#2B1F1F] via-[#3A2A29] to-[#5C4A48] bg-clip-text text-transparent">Hi, I'm</span>{' '}
              <br />
              <span className="bg-gradient-to-r from-[#3A2A29] via-[#2B1F1F] to-[#3A2A29] bg-clip-text text-transparent">Tasmia</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.8 }} 
              className="text-xl sm:text-2xl text-[#7A6863] mb-10 max-w-2xl mx-auto"
            >
              Full Stack Developer creating beautiful, performance web experiences
            </motion.p>
            
            {/* CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 1.1 }} 
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05, y: -5 }}>
                <Link 
                  to="/projects"
                  className="px-10 py-4 bg-gradient-to-r from-[#C98573] to-[#E8D8D1] text-[#2B1F1F] font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 inline-block"
                >
                  View Projects
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -5 }}>
                <Link 
                  to="/contact"
                  className="px-10 py-4 bg-[#FFF8F5] hover:bg-[#E8D8D1] text-[#2B1F1F] font-semibold rounded-2xl border border-[#DDD2CC]/50 hover:border-[#DDD2CC] transition-all duration-300 inline-block"
                >
                  Contact Me
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="text-center mb-24"
          >
            <h2 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#2B1F1F] via-[#3A2A29] to-[#C98573] bg-clip-text text-transparent mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C98573] to-[#E8D8D1] mx-auto rounded-full" />
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              className="space-y-8 order-2 lg:order-1"
            >
              <h3 className="text-4xl font-bold text-[#2B1F1F] mb-6">Passionate Developer</h3>
              <p className="text-xl text-[#7A6863] leading-relaxed mb-8">
                With 1+ years of experience, I specialize in creating stunning web applications using modern technologies. From pixel-perfect UI to robust backend systems, I deliver exceptional digital experiences.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-[#C98573] to-[#E8D8D1] rounded-full animate-pulse" />
                    <span className="font-semibold text-[#2B1F1F]">React</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-[#C98573] to-[#5C4A48] rounded-full animate-pulse" />
                    <span className="font-semibold text-[#2B1F1F]">Node.js</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-[#E8D8D1] to-[#C98573] rounded-full animate-pulse" />
                    <span className="font-semibold text-[#2B1F1F]">Tailwind</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-[#3A2A29] to-[#C98573] rounded-full animate-pulse" />
                    <span className="font-semibold text-[#2B1F1F]">Javascript</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              viewport={{ once: true }} 
              className="relative order-1 lg:order-2"
            >
              <div className="relative w-full h-80 bg-gradient-to-br from-[#C98573]/20 via-[#E8D8D1]/20 to-[#3A2A29]/20 rounded-3xl backdrop-blur-xl border border-[#DDD2CC]/50 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-6 animate-bounce">🚀</div>
                  <div className="text-4xl font-black text-[#2B1F1F]">50+</div>
                  <div className="text-[#7A6863]">Projects Delivered</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

     {/* Education & Certifications */}
<section className="py-20 px-6 bg-gradient-to-b from-orange-50 to-white">
  <div className="max-w-6xl mx-auto">

    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl font-bold text-gray-800">
        Education & Certifications
      </h2>
      <div className="w-24 h-1 bg-orange-400 mx-auto mt-3 rounded-full"></div>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-8">

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white rounded-3xl shadow-lg p-8"
      >
        <h3 className="text-2xl font-semibold text-orange-500 mb-6">
          🎓 Education
        </h3>

        <div className="space-y-6 border-l-4 border-orange-300 pl-6">

          <div>
            <h4 className="font-bold text-lg">
              BS Computer Science
            </h4>
            <p className="text-gray-600">
              Superior University Sargodha
            </p>
            <span className="text-sm text-gray-500">
              2024 - Present
            </span>
          </div>

          <div>
            <h4 className="font-bold text-lg">
              Intermediate (ICS)
            </h4>
            <p className="text-gray-600">
              Aspire College Mianwali
            </p>
            <span className="text-sm text-gray-500">
              2022 - 2024
            </span>
          </div>

        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white rounded-3xl shadow-lg p-8"
      >
        <h3 className="text-2xl font-semibold text-orange-500 mb-6">
          🏆 Certifications
        </h3>

        <div className="space-y-4">

          <div className="bg-orange-50 p-4 rounded-xl">
            <h4 className="font-semibold">
              Full Stack Web Development
            </h4>
          </div>

          <div className="bg-orange-50 p-4 rounded-xl">
            <h4 className="font-semibold">
              React JS Development
            </h4>
          </div>

          <div className="bg-orange-50 p-4 rounded-xl">
            <h4 className="font-semibold">
              Database Management Systems
            </h4>
          </div>

        </div>
      </motion.div>

    </div>
  </div>
</section>

{/* Technologies Section */}
<section
  id="technologies"
  className="py-20 px-6 bg-white"
>
  <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl font-bold text-gray-800">
        Technologies I Use
      </h2>

      <div className="w-24 h-1 bg-orange-400 mx-auto mt-3 rounded-full"></div>

      <p className="text-gray-600 mt-4">
        Technologies and tools I use to build modern web applications.
      </p>
    </motion.div>

    {/* Technologies Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">

      {[
        "HTML5",
        "CSS3",
        "JavaScript",
        "React JS",
        "Tailwind CSS",
        "Bootstrap",
        "PHP",
        "MySQL",
        "C++",
        "Git",
        "GitHub",
        "VS Code",
      ].map((tech, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
          }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.08,
            y: -8,
          }}
          className="bg-orange-50 border border-orange-100 rounded-2xl p-5 text-center shadow-md hover:shadow-xl cursor-pointer"
        >
          <h3 className="font-semibold text-gray-800">
            {tech}
          </h3>
        </motion.div>
      ))}

    </div>
  </div>
</section>
      {/* 3. COMPLETED PROJECTS */}
      <section id="projects" className="py-32 bg-gradient-to-b from-[#F5EFEB]/50 to-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="text-center mb-24"
          >
            <h2 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#2B1F1F] via-[#3A2A29] to-[#C98573] bg-clip-text text-transparent mb-6">
              Completed Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C98573] to-[#E8D8D1] mx-auto rounded-full" />
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={project.title} 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: index * 0.1 }} 
                whileHover={{ y: -10, scale: 1.02 }} 
                className="group p-8 bg-gradient-to-b from-[#3A2A29] via-[#5C4A48]/50 to-[#3A2A29] backdrop-blur-xl rounded-2xl border border-[#DDD2CC]/30 hover:border-[#C98573]/50 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="text-4xl mb-6">{project.image}</div>
                <h3 className="font-bold text-xl text-[#FFF8F5] mb-3 group-hover:text-[#C98573] transition-colors">{project.title}</h3>
                <p className="text-[#DDD2CC] text-sm">{project.tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. REVIEWS SECTION */}
      <section className="py-32 bg-gradient-to-b from-[#F5EFEB]/30 via-[#E8D8D1]/20 to-[#F5EFEB]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="text-center mb-16"
          >
            <h3 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-[#2B1F1F] via-[#3A2A29] to-[#C98573] bg-clip-text text-transparent mb-4">
              What Clients Say
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-[#C98573] to-[#E8D8D1] mx-auto rounded-full" />
          </motion.div>
          
          {/* Review Slider */}
          <div className="overflow-hidden rounded-3xl">
            <motion.div 
              animate={{ x: `-${currentReviewIndex * 100}%` }} 
              transition={{ duration: 0.6 }} 
              className="flex w-full"
            >
              {reviews.map((review, index) => (
                <motion.div 
                  key={index} 
                  className="min-w-full p-10 lg:p-16 bg-gradient-to-b from-[#3A2A29] via-[#5C4A48]/50 to-[#3A2A29] backdrop-blur-xl rounded-3xl border border-[#DDD2CC]/30 shadow-2xl flex flex-col items-center text-center" 
                  whileHover={{ y: -10 }}
                >
                  {/* Stars */}
                  <div className="flex mb-8">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-2xl text-[#C98573]">⭐</span>
                    ))}
                  </div>
                  
                  {/* Content */}
                  <blockquote className="text-xl lg:text-2xl text-[#FFF8F5] font-light leading-relaxed mb-10 max-w-2xl">
                    "{review.content}"
                  </blockquote>
                  
                  {/* Reviewer */}
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#C98573] to-[#E8D8D1] rounded-2xl flex items-center justify-center text-xl shadow-lg">
                      {review.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-[#FFF8F5]">{review.name}</h4>
                      <p className="text-[#C98573] font-medium">{review.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Dots */}
          <div className="flex justify-center mt-12 space-x-3">
            {reviews.map((_, index) => (
              <motion.button 
                key={index} 
                onClick={() => setCurrentReviewIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentReviewIndex ? 'bg-gradient-to-r from-[#C98573] to-[#E8D8D1] scale-125 shadow-lg' : 'bg-[#DDD2CC]/50 hover:bg-[#DDD2CC]'}`}
                whileHover={{ scale: 1.3 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* My Approach */}
<section className="py-20 px-6 bg-orange-50">
  <div className="max-w-6xl mx-auto">

    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl font-bold text-gray-800">
        My Approach
      </h2>

      <div className="w-24 h-1 bg-orange-400 mx-auto mt-3 rounded-full"></div>
    </motion.div>

    <div className="grid md:grid-cols-4 gap-8">

      {[
        {
          icon: "💡",
          title: "Plan",
          text: "Understand requirements and define project goals."
        },
        {
          icon: "🎨",
          title: "Design",
          text: "Create clean and user-friendly interfaces."
        },
        {
          icon: "💻",
          title: "Develop",
          text: "Build responsive and scalable applications."
        },
        {
          icon: "🚀",
          title: "Deliver",
          text: "Test, optimize and deploy quality solutions."
        }
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: index * 0.2,
          }}
          viewport={{ once: true }}
          whileHover={{
            y: -10,
            scale: 1.03,
          }}
          className="bg-white p-6 rounded-2xl shadow-lg text-center cursor-pointer"
        >
          <div className="text-5xl mb-4">
            {item.icon}
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            {item.title}
          </h3>

          <p className="text-gray-600">
            {item.text}
          </p>
        </motion.div>
      ))}

    </div>
  </div>
  </section>


{/* ================= DOWNLOAD CV SECTION ================= */}
<section
  id="cv"
  className="w-full py-20"
  style={{ background: "#F4EDE4" }}
>
  <div className="max-w-5xl mx-auto px-6 text-center">

    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: -25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-bold"
      style={{ color: "#1F2937" }}
    >
      Download My CV
    </motion.h2>

    {/* Subtitle */}
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="mt-3 mb-10"
      style={{ color: "#4B5563" }}
    >
      Get a complete overview of my skills, education, certifications, and projects.
    </motion.p>

    {/* CV Card */}
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-2xl p-10 shadow-lg overflow-hidden"
      style={{ backgroundColor: "#F4EDE4", border: "1px solid #E76F51" }}
    >

      {/* Decorative accent glow */}
      <div className="absolute -top-10 -left-10 w-40 h-40 blur-3xl opacity-20 rounded-full"
        style={{ backgroundColor: "#F97316" }}
      />
      <div className="absolute -bottom-10 -right-10 w-40 h-40 blur-3xl opacity-20 rounded-full"
        style={{ backgroundColor: "#E76F51" }}
      />

      {/* Content */}
      <h3 className="text-2xl font-semibold mb-3"
        style={{ color: "#1F2937" }}
      >
        My Resume / CV
      </h3>

      <p className="mb-6"
        style={{ color: "#4B5563" }}
      >
        Download my latest updated CV in PDF format.
      </p>

      {/* Button */}
      <a
        href="/cv.pdf"
        download="My_CV.pdf"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md cursor-pointer"
        style={{
          backgroundColor: "#E76F51",
          color: "#fff"
        }}
      >
        📄 Download CV
      </a>

    </motion.div>
  </div>
</section>
    </div>
  );
};

export default Home;