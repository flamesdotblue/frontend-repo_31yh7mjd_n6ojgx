import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Scale-Up',
    metric: '+280% ROAS',
    color: 'from-red-500 to-orange-500',
  },
  {
    title: 'SaaS Product Launch',
    metric: '12k signups',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Global SEO Revamp',
    metric: 'Top 3 keywords x42',
    color: 'from-green-500 to-emerald-500',
  },
];

const testimonials = [
  {
    quote:
      'They operate like an extension of our team. The strategy, creative, and speed are unmatched.',
    name: 'Amelia R.',
    role: 'VP Marketing, Fintech',
  },
  {
    quote:
      'From 0 to PMF and beyond — they architected our growth engine with rigor and care.',
    name: 'Jonas M.',
    role: 'Founder, B2B SaaS',
  },
  {
    quote:
      'Consistently high-performing campaigns with clear reporting. True partners in growth.',
    name: 'Priya K.',
    role: 'CMO, Retail',
  },
];

const clientLogos = [
  'Acme Labs',
  'Northstar Co.',
  'Helios',
  'Nimbus',
  'BrightHub',
  'Orbitry',
  'Quanta',
  'ZenByte',
];

const HighlightsSection = () => {
  return (
    <section id="work" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Featured Projects */}
        <div className="mb-12 flex items-end justify-between">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-white sm:text-4xl"
            >
              Featured projects
            </motion.h2>
            <p className="mt-2 text-white/70">A snapshot of results were proud of.</p>
          </div>
          <Award className="hidden h-8 w-8 text-blue-300 sm:block" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 * i }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-20 transition group-hover:opacity-30`} />
              <div className="relative z-10">
                <div className="aspect-video w-full rounded-xl bg-black/30" />
                <h3 className="mt-4 text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-white/70">Outcome: {p.metric}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <div className="mb-8 flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-300" />
            <h3 className="text-2xl font-semibold text-white">What clients say</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.05 * i }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-white/90">“{t.quote}”</p>
                <footer className="mt-4 text-sm text-white/60">{t.name} • {t.role}</footer>
              </motion.blockquote>
            ))}
          </div>
        </div>

        {/* Client logo marquee */}
        <div className="mt-16">
          <h3 className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-white/60">
            Trusted by teams large and small
          </h3>
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 py-4">
            <div className="animate-marquee whitespace-nowrap">
              {clientLogos.concat(clientLogos).map((c, idx) => (
                <span
                  key={`${c}-${idx}`}
                  className="mx-8 inline-block text-white/80"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: inline-block; min-width: 200%; animation: marquee 18s linear infinite; }
      `}</style>
    </section>
  );
};

export default HighlightsSection;
