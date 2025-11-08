import React, { useState } from 'react';
import { Send } from 'lucide-react';

const initial = { name: '', email: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      // In a full app, this would POST to a backend endpoint.
      await new Promise((res) => setTimeout(res, 900));
      setStatus('success');
      setForm(initial);
    } catch (e) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative z-10 mx-auto max-w-4xl px-6 py-24">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Let’s build something stunning</h2>
        <p className="mt-2 text-white/70">Share a few details and I’ll get back within 24–48 hours.</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm text-white/70">Name</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="mt-1 rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white/30"
              placeholder="Jane Doe"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm text-white/70">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white/30"
              placeholder="jane@studio.com"
              required
            />
          </div>
        </div>
        <div className="mt-4 flex flex-col">
          <label htmlFor="message" className="text-sm text-white/70">Project details</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="mt-1 rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white/30"
            placeholder="Timeline, budget, goals..."
            required
          />
        </div>
        <div className="mt-6 flex items-center gap-3">
          <button
            type="submit"
            disabled={status === 'loading'}
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            <Send className="h-4 w-4" />
            {status === 'loading' ? 'Sending…' : 'Send Message'}
          </button>
          {status === 'success' && (
            <span className="text-sm text-emerald-300">Thanks! I’ll be in touch shortly.</span>
          )}
          {status === 'error' && (
            <span className="text-sm text-red-300">Something went wrong. Please try again.</span>
          )}
        </div>
      </form>
    </section>
  );
};

export default Contact;
