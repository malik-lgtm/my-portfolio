import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.footer
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="relative overflow-hidden bg-[#2D1F1B]"
>
  {/* Background Layer */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#2D1F1B] via-[#4A342E] to-[#5C4038]" />

  {/* Soft Luxury Glow Effects */}
  <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#D9B8A8]/20 rounded-full blur-3xl animate-pulse" />
  <div className="absolute -bottom-40 left-10 w-64 h-64 bg-[#C98F77]/20 rounded-full blur-3xl animate-pulse delay-1000" />
  <div className="absolute top-1/2 left-10 w-48 h-48 bg-[#F3DDD2]/10 rounded-full blur-2xl animate-pulse delay-2000" />

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">

    {/* Main Footer Content */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

      {/* Logo & Description */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-1"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-3xl font-black text-[#FFF7F2] mb-4"
        >
          Portfolio
        </motion.div>

        <p className="text-[#E7D9CF] leading-relaxed mb-6 max-w-md">
          Crafting elegant digital experiences with creativity, modern design,
          and premium user interaction.
        </p>
      </motion.div>

      {/* Quick Links */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="text-xl font-bold text-[#FFF7F2] mb-6">
          Quick Links
        </h3>

        <ul className="space-y-3">
          {quickLinks.map((link, index) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.05 }}
            >
              <a
                href={link.path}
                className="text-[#E7D9CF] hover:text-[#D98F74] transition-all duration-300 group flex items-center"
              >
                <span className="w-2 h-2 bg-[#D98F74] rounded-full mr-3 group-hover:scale-110 transition-transform duration-300" />
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className="text-xl font-bold text-[#FFF7F2] mb-6">
          Contact Info
        </h3>

        <div className="space-y-4 text-[#E7D9CF]">
          <div className="hover:text-[#D98F74] transition-colors duration-300">
            <span>Sargodha, Pakistan</span>
          </div>

          <div className="hover:text-[#D98F74] transition-colors duration-300">
            <span>+92 3281189078</span>
          </div>

          <div className="hover:text-[#D98F74] transition-colors duration-300">
            <span>tasmiazameer407@gmail.com</span>
          </div>
        </div>
      </motion.div>
    </div>

    {/* Bottom Bar */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="border-t border-[#ffffff1a] pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center space-x-2 text-sm text-[#CBB8AE] cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
      </motion.div>
    </motion.div>

  </div>
</motion.footer>
  );
};

export default Footer;