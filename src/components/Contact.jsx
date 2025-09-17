import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.3 } },
  };

  return (
    <motion.div
      className="max-w-2xl text-center px-4"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-8 text-blue-400"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        Kontak Saya
      </motion.h2>
      <motion.p variants={itemVariants} className="text-lg md:text-xl leading-relaxed text-gray-300 mb-8">
        Tertarik untuk berkolaborasi atau hanya ingin menyapa? Jangan ragu untuk menghubungi saya melalui cara di bawah ini:
      </motion.p>
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-6 justify-center">
        <motion.a
          variants={itemVariants}
          href="mailto:nama.email@example.com"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          Email Saya
        </motion.a>
        <motion.a
          variants={itemVariants}
          href="https://linkedin.com/in/namaanda"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          LinkedIn
        </motion.a>
        <motion.a
          variants={itemVariants}
          href="https://github.com/namaanda"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
        >
          GitHub
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Contact;
