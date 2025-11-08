import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Z9BMpz-LA54Dlbrj/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays (won't block pointer events) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-4 py-2 backdrop-blur">
          <Star className="h-4 w-4 text-yellow-300" />
          <span className="text-sm text-white/80">Available for freelance projects</span>
        </div>

        <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Crafting immersive digital experiences
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">
          I blend motion, 3D, and modern web technologies to build fast, delightful, and visually striking interfaces.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-black transition hover:bg-white/90"
          >
            <Rocket className="h-5 w-5" /> View Work
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-white/20 bg-white/10 px-5 py-3 font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
