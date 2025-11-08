import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-5xl px-6 py-24">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">About Me</h2>
          <p className="mt-4 text-white/80">
            I’m a creative developer focused on blending high-performance engineering with expressive visuals. My
            toolkit spans React, TypeScript, and WebGL, and I love crafting cohesive experiences that feel alive.
          </p>
          <p className="mt-3 text-white/70">
            When I’m not building interfaces, you’ll find me experimenting with motion design, sound, and procedural
            visuals.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-tr from-cyan-400/20 via-fuchsia-400/20 to-yellow-300/20 blur-2xl" />
          <ul className="relative space-y-3">
            <li className="flex items-center justify-between text-white/80">
              <span>Years of Experience</span>
              <span className="font-semibold text-white">5+</span>
            </li>
            <li className="flex items-center justify-between text-white/80">
              <span>Projects Delivered</span>
              <span className="font-semibold text-white">40+</span>
            </li>
            <li className="flex items-center justify-between text-white/80">
              <span>Core Focus</span>
              <span className="font-semibold text-white">3D, Motion, UX</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
