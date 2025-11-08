import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black font-inter text-white">
      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 mx-auto w-full max-w-6xl px-6 py-4">
        <nav className="flex items-center justify-between rounded-xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur">
          <a href="#" className="text-sm font-semibold tracking-wide text-white">FLAMES • BLUE</a>
          <div className="hidden gap-6 text-sm text-white/80 sm:flex">
            <a href="#projects" className="hover:text-white">Work</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <a
            href="#contact"
            className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Hire Me
          </a>
        </nav>
      </header>

      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-black/60 py-8 text-center text-white/60">
        <p>
          © {new Date().getFullYear()} Flames Blue — Built with love, motion, and modern web.
        </p>
      </footer>
    </div>
  );
};

export default App;
