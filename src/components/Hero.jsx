import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120 } },
  };

  return (
    <motion.div
      className="text-center max-w-2xl px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold mb-4 text-white leading-tight">
        Halo, saya <span className="text-blue-400">[Nama Anda]</span>
      </motion.h1>
      <motion.p variants={itemVariants} className="text-lg md:text-2xl mb-8 text-gray-300">
        Seorang <span className="font-semibold text-blue-300">Full-Stack Developer</span> yang bersemangat dalam membangun solusi web inovatif.
      </motion.p>
      <motion.a
        variants={itemVariants}
        href="#contact"
        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
      >
        Hubungi Saya
      </motion.a>
    </motion.div>
  );
};

export default Hero;
