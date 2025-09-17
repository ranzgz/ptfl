import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 0.3 } },
  };

  return (
    <motion.div
      className="max-w-4xl text-center px-4"
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
        Tentang Saya
      </motion.h2>
      <motion.p variants={textVariants} className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
        Halo! Saya seorang pengembang web dengan pengalaman dalam membangun aplikasi yang responsif dan berkinerja tinggi.
        Saya bersemangat tentang teknologi baru dan selalu mencari cara untuk meningkatkan keterampilan saya.
      </motion.p>
      <motion.p variants={textVariants} className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
        Keahlian saya meliputi <span className="font-semibold text-blue-300">JavaScript, React, Node.js, Express, MongoDB, dan Tailwind CSS</span>.
        Saya suka bekerja dalam tim dan memecahkan masalah yang kompleks.
      </motion.p>
      <motion.p variants={textVariants} className="text-lg md:text-xl leading-relaxed text-gray-300">
        Di luar coding, saya menikmati membaca buku, bermain game, dan belajar hal baru.
      </motion.p>
    </motion.div>
  );
};

export default About;
