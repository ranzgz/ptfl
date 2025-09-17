import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <section id="hero" className="min-h-[calc(100vh-64px)] flex items-center justify-center">
          <Hero />
        </section>
        <section id="about" className="min-h-screen flex items-center justify-center">
          <About />
        </section>
        <section id="projects" className="min-h-screen flex items-center justify-center">
          <Projects />
        </section>
        <section id="contact" className="min-h-screen flex items-center justify-center">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
