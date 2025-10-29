import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const team = [
  {
    name: 'Alex Rivera',
    role: 'Founder & Growth Lead',
    bio: 'Performance strategist blending creative, data, and experimentation to unlock efficient scale.',
    color: 'from-red-500 to-orange-500',
    initials: 'AR',
  },
  {
    name: 'Mina Patel',
    role: 'Head of Strategy',
    bio: 'Architects full-funnel roadmaps grounded in research, positioning, and measurable outcomes.',
    color: 'from-blue-500 to-cyan-500',
    initials: 'MP',
  },
  {
    name: 'Leo Wang',
    role: 'Creative Director',
    bio: 'Leads brand, motion, and content systems that connect with audiences and convert.',
    color: 'from-green-500 to-emerald-500',
    initials: 'LW',
  },
  {
    name: 'Sara Kim',
    role: 'Lifecycle & CRM',
    bio: 'Designs retention programs across email/SMS with personalization and rigorous testing.',
    color: 'from-purple-500 to-pink-500',
    initials: 'SK',
  },
];

const Team = () => {
  return (
    <section id="team" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex items-center gap-3">
          <Users className="h-6 w-6 text-blue-300" />
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Meet the team</h2>
        </div>
        <p className="max-w-2xl text-white/70">
          A multidisciplinary group of marketers, creatives, and technologists who operate as an embedded partner to your team.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 * i }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className={`mx-auto h-24 w-24 rounded-2xl bg-gradient-to-br ${m.color} p-[2px]`}>
                <div className="flex h-full w-full items-center justify-center rounded-2xl bg-slate-950/90 text-xl font-semibold text-white">
                  {m.initials}
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{m.name}</h3>
              <p className="text-sm text-white/60">{m.role}</p>
              <p className="mt-3 text-sm text-white/70">{m.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
