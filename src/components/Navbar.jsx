import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
  exit: { y: 20, opacity: 0, transition: { duration: 0.2 } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.a 
          href="#hero" 
          className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition duration-300"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {'<'}<span className="text-white">Owner</span>{'/>'}
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-lg text-white hover:text-blue-400 transition duration-300"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + navLinks.indexOf(link) * 0.1 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Hamburger Menu Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none z-50 relative p-2"
          aria-label="Toggle navigation"
        >
          <motion.div
            className="w-6 h-0.5 bg-white mb-1"
            variants={{
              open: { rotate: 45, y: 8 },
              closed: { rotate: 0, y: 0 },
            }}
            animate={isOpen ? 'open' : 'closed'}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="w-6 h-0.5 bg-white mb-1"
            variants={{
              open: { opacity: 0 },
              closed: { opacity: 1 },
            }}
            animate={isOpen ? 'open' : 'closed'}
            transition={{ duration: 0.2 }}
          />
          <motion.div
            className="w-6 h-0.5 bg-white"
            variants={{
              open: { rotate: -45, y: -8 },
              closed: { rotate: 0, y: 0 },
            }}
            animate={isOpen ? 'open' : 'closed'}
            transition={{ duration: 0.3 }}
          />
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-gray-900 bg-opacity-95 backdrop-blur-lg flex flex-col items-center justify-center md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.nav
                className="flex flex-col space-y-8 text-3xl font-semibold"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="text-white hover:text-blue-400 transition duration-300"
                    variants={itemVariants}
                    onClick={toggleMenu} // Close menu on click
                  >
                    {link.name}
                  </motion.a>
                ))}
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
