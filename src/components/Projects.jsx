import React from 'react';
import { motion } from 'framer-motion';

const projectData = [
  {
    id: 1,
    title: 'Project Manajemen Tugas',
    description: 'Aplikasi web untuk mengelola tugas dengan fitur CRUD, autentikasi pengguna, dan notifikasi.',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    link: '#',
  },
  {
    id: 2,
    title: 'Situs E-commerce Mini',
    description: 'Platform belanja online sederhana dengan katalog produk, keranjang belanja, dan proses checkout.',
    tech: ['Next.js', 'Strapi', 'PostgreSQL'],
    link: '#',
  },
  {
    id: 3,
    title: 'Blog Pribadi',
    description: 'Situs blog yang responsif dengan editor kaya teks dan sistem komentar.',
    tech: ['Gatsby', 'GraphQL', 'Markdown'],
    link: '#',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Projects = () => {
  return (
    <div className="max-w-6xl text-center px-4">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12 text-blue-400"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        Proyek Saya
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-gray-800 rounded-lg shadow-xl p-6 transform hover:scale-105 transition duration-300 ease-in-out border border-gray-700"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-2xl font-semibold mb-3 text-white">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-5 rounded-full transition duration-300 ease-in-out"
            >
              Lihat Proyek
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
