import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled
      ? 'bg-[#F7F1EC]/95 backdrop-blur-md shadow-md border-b border-[#E7D9CF]'
      : 'bg-[#F7F1EC] border-b border-[#E7D9CF]'
  }`}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center py-4 md:py-3">
      
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="text-2xl font-bold text-[#2D1F1B]"
      >
        Portfolio
      </motion.div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              to={item.path}
              className={`relative group py-2 px-3 text-lg font-medium transition-all duration-300 ${
                location.pathname === item.path
                  ? 'text-[#B05C47]'
                  : 'text-[#6F5C56] hover:text-[#B05C47]'
              }`}
            >
              {item.name}

              {/* Underline */}
              <span
                className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#D98F74] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                  location.pathname === item.path ? 'scale-x-100' : ''
                }`}
              />

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-[#EBCFC3] rounded-full blur opacity-0 group-hover:opacity-40 transition-opacity duration-300 -z-10" />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg bg-[#EFE3DB] hover:bg-[#E7D1C6] transition-all duration-300"
        >
          {isOpen ? (
            <X size={24} className="text-[#2D1F1B]" />
          ) : (
            <Menu size={24} className="text-[#2D1F1B]" />
          )}
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden pb-8 space-y-4"
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 text-xl font-medium transition-all duration-300 border-l-4 ${
                  location.pathname === item.path
                    ? 'bg-[#EFE3DB] border-[#D98F74] text-[#B05C47]'
                    : 'border-transparent text-[#6F5C56] hover:border-[#D98F74] hover:text-[#B05C47]'
                }`}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
</motion.nav>
  );
};

export default Navbar;