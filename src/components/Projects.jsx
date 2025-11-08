import React from 'react';
import { Code2, Monitor, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Dashboard',
    description: 'Interactive analytics with live data and fluid micro-interactions.',
    icon: <Monitor className="h-5 w-5 text-cyan-300" />,
    tags: ['React', 'WebSockets', 'Framer Motion'],
  },
  {
    title: '3D Product Showcase',
    description: 'Immersive product viewer with 3D scenes and smooth camera motion.',
    icon: <Sparkles className="h-5 w-5 text-pink-300" />,
    tags: ['Spline', 'Three.js', 'UX'],
  },
  {
    title: 'Design System',
    description: 'Scalable component library with tokens and dark mode.',
    icon: <Code2 className="h-5 w-5 text-violet-300" />,
    tags: ['TypeScript', 'Accessibility', 'Theming'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Selected Projects</h2>
        <p className="mt-2 text-white/70">A snapshot of recent work across web, motion, and product design.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
              {p.icon}
              <span className="text-sm text-white/80">{p.title}</span>
            </div>
            <p className="text-white/80">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-white/10 bg-black/30 px-2 py-1 text-xs text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
