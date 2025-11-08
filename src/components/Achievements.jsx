import React from 'react';
import { Trophy, Award, Star } from 'lucide-react';

const items = [
  {
    icon: <Trophy className="h-5 w-5 text-amber-300" />,
    title: 'Design Award — Interactive',
    meta: '2023 • National UI Competition',
    desc: 'Recognized for an immersive, performance-first interface with expressive motion.'
  },
  {
    icon: <Award className="h-5 w-5 text-yellow-300" />,
    title: 'Top 1% Freelancer',
    meta: '2022–2024 • Global Platform',
    desc: 'Consistently rated 5★ for delivering complex web apps with polish and speed.'
  },
  {
    icon: <Star className="h-5 w-5 text-orange-300" />,
    title: '100k+ Users Served',
    meta: 'Multiple products',
    desc: 'Shipped and maintained apps at scale with robust UX and accessibility.'
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Achievements</h2>
        <p className="mt-2 text-white/70">Highlights that reflect impact, craft, and consistency.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {items.map((a) => (
          <div key={a.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
              {a.icon}
              <span className="text-sm text-white/80">{a.meta}</span>
            </div>
            <h3 className="text-lg font-semibold text-white">{a.title}</h3>
            <p className="mt-2 text-white/75">{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
