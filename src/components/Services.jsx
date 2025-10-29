import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Search, Sparkles, Megaphone } from 'lucide-react';

const services = [
  {
    title: 'Performance Marketing',
    desc: 'Full-funnel acquisition across paid search, social, and programmatic with rigorous experimentation.',
    icon: BarChart3,
    href: '#service-performance',
    color: 'from-blue-500 to-green-500',
  },
  {
    title: 'SEO & Content',
    desc: 'Technical SEO, content strategy, and on-site optimization to unlock compounding organic growth.',
    icon: Search,
    href: '#service-seo',
    color: 'from-green-500 to-blue-500',
  },
  {
    title: 'Brand & Creative',
    desc: 'Audience insights, positioning, and creative production designed for attention and conversion.',
    icon: Sparkles,
    href: '#service-brand',
    color: 'from-red-500 to-blue-500',
  },
  {
    title: 'Lifecycle & CRM',
    desc: 'Email, SMS, and retention journeys that build loyalty and maximize LTV with personalization.',
    icon: Megaphone,
    href: '#service-crm',
    color: 'from-red-500 to-green-500',
  },
];

const Services = () => {
  return (
    <section id="services" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-white sm:text-4xl"
          >
            What we do
          </motion.h2>
          <p className="mt-3 text-white/70">
            A snapshot of core capabilities. Explore details by selecting any service.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={s.title}
                href={s.href}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.05 * i }}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10`}
                aria-label={s.title}
              >
                <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${s.color} opacity-30 blur-2xl transition group-hover:opacity-50`} />
                <div className="relative z-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-300">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M13.5 4.5a.75.75 0 0 0 0 1.5h5.19l-8.47 8.47a.75.75 0 1 0 1.06 1.06l8.47-8.47V15a.75.75 0 0 0 1.5 0v-9a1.5 1.5 0 0 0-1.5-1.5h-9z"/></svg>
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
