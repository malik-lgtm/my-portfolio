import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'tasmiazameer407@gmail.com',
      link: 'mailto:tasmiazameer407@gmail.com'
    },
   
    {
      icon: '📍',
      title: 'Location',
      value: 'Sargodha, Pakistan',
      link: '#'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'www.linkedin.com/in/tasmia-zameer',
      link: 'https://www.linkedin.com/in/tasmia-zameer'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5EFEB] via-[#E8D8D1] to-[#F5EFEB] py-24 relative overflow-hidden text-[#2B1F1F]">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-10 w-72 h-72 bg-gradient-to-r from-[#C98573]/20 to-[#E8D8D1]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-gradient-to-r from-[#C98573]/10 to-[#5C4A48]/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 -left-20 w-48 h-48 bg-gradient-to-r from-[#3A2A29]/10 to-[#C98573]/10 rounded-full blur-2xl animate-pulse delay-2000" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#2B1F1F] via-[#3A2A29] to-[#C98573] bg-clip-text text-transparent mb-6">
            Get In Touch
          </h1>
          <p className="text-xl sm:text-2xl text-[#7A6863] max-w-2xl mx-auto leading-relaxed mb-8">
            Ready to bring your next project to life? Let's discuss your ideas!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C98573] to-[#E8D8D1] mx-auto rounded-full" />
        </motion.section>

        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 lg:sticky lg:top-24 lg:self-start"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 25px 50px -12px rgba(74, 42, 41, 0.3)"
                  }}
                  className="group block p-8 bg-gradient-to-b from-[#3A2A29]/10 via-[#5C4A48]/5 to-[#3A2A29]/10 backdrop-blur-xl rounded-3xl border border-[#DDD2CC]/20 hover:border-[#C98573]/40 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="text-3xl p-3 bg-gradient-to-br from-[#C98573]/20 to-[#E8D8D1]/20 rounded-2xl backdrop-blur-sm border border-[#DDD2CC]/30 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-[#2B1F1F] mb-1">{info.title}</h3>
                      <p className="text-[#7A6863] group-hover:text-[#2B1F1F] transition-colors">{info.value}</p>
                    </div>
                  </div>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-[#DDD2CC]/40 to-transparent group-hover:via-[#C98573]/60 transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-gradient-to-b from-[#3A2A29]/10 via-[#5C4A48]/5 to-[#3A2A29]/10 backdrop-blur-xl rounded-3xl border border-[#DDD2CC]/20 shadow-xl"
            >
              <h3 className="text-xl font-bold text-[#2B1F1F] mb-6 text-center">Connect With Me</h3>
              <div className="flex gap-4 justify-center">
                <motion.a href="https://github.com/malik-lgtm" target="_blank" className="w-12 h-12 bg-gradient-to-br from-[#3A2A29] to-[#5C4A48] hover:from-[#5C4A48] hover:to-[#3A2A29] rounded-2xl flex items-center justify-center text-[#FFF8F5] shadow-lg hover:shadow-xl transition-all duration-300" whileHover={{ scale: 1.1, rotate: 5 }}>
                  📂
                </motion.a>
                <motion.a href="https://www.linkedin.com/in/tasmia-zameer" target="_blank" className="w-12 h-12 bg-gradient-to-br from-[#C98573] to-[#E8D8D1] hover:from-[#E8D8D1] hover:to-[#C98573] rounded-2xl flex items-center justify-center text-[#2B1F1F] shadow-lg hover:shadow-xl transition-all duration-300" whileHover={{ scale: 1.1, rotate: 5 }}>
                  💼
                </motion.a>
               
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-b from-[#3A2A29]/10 via-[#5C4A48]/5 to-[#3A2A29]/10 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-[#DDD2CC]/20 shadow-2xl">
              <h3 className="text-3xl font-bold text-[#2B1F1F] mb-8">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#7A6863] mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-[#FFF8F5]/70 backdrop-blur-sm border border-[#DDD2CC]/40 rounded-2xl text-[#2B1F1F] placeholder-[#6F5C58] focus:border-[#C98573]/60 focus:outline-none focus:ring-2 focus:ring-[#C98573]/30 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#7A6863] mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-[#FFF8F5]/70 backdrop-blur-sm border border-[#DDD2CC]/40 rounded-2xl text-[#2B1F1F] placeholder-[#6F5C58] focus:border-[#C98573]/60 focus:outline-none focus:ring-2 focus:ring-[#C98573]/30 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#7A6863] mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-[#FFF8F5]/70 backdrop-blur-sm border border-[#DDD2CC]/40 rounded-2xl text-[#2B1F1F] placeholder-[#6F5C58] focus:border-[#C98573]/60 focus:outline-none focus:ring-2 focus:ring-[#C98573]/30 transition-all duration-300"
                    placeholder="Project brief or question"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#7A6863] mb-2">Message</label>
                  <textarea
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-[#FFF8F5]/70 backdrop-blur-sm border border-[#DDD2CC]/40 rounded-2xl text-[#2B1F1F] placeholder-[#6F5C58] resize-vertical focus:border-[#C98573]/60 focus:outline-none focus:ring-2 focus:ring-[#C98573]/30 transition-all duration-300"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Status Message */}
                <AnimatePresence mode="wait">
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="p-4 bg-gradient-to-r from-[#C98573]/20 to-[#E8D8D1]/20 border border-[#C98573]/40 rounded-2xl backdrop-blur-sm text-[#C98573] text-center font-semibold"
                    >
                      🎉 Message sent successfully! I'll get back to you within 24 hours.
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-[#C98573] to-[#E8D8D1] hover:from-[#E8D8D1] hover:to-[#C98573] disabled:from-[#DDD2CC] disabled:to-[#7A6863] text-[#2B1F1F] font-bold py-6 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-lg disabled:cursor-not-allowed disabled:opacity-50 border border-[#C98573]/30"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center space-x-2">
                      <div className="w-6 h-6 border-2 border-[#2B1F1F]/30 border-t-[#2B1F1F] rounded-full animate-spin" />
                      <span>Sending...</span>
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;