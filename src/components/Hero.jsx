import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-[80vh] min-h-[560px] w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900 text-white">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Color overlay for brand palette accents (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_10%,rgba(59,130,246,0.25),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_80%_20%,rgba(34,197,94,0.25),transparent)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur"
        >
          <Rocket className="h-4 w-4 text-red-400" />
          <span className="text-xs font-medium tracking-wide text-white/90">Digital marketing, engineered for growth</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl"
        >
          We craft measurable impact
          <span className="bg-gradient-to-r from-red-400 via-blue-400 to-green-400 bg-clip-text text-transparent"> for ambitious brands</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl text-base text-white/80 sm:text-lg"
        >
          Our mission is to combine creativity, data, and technology to unlock sustainable growth. We partner closely with teams to build memorable experiences and performance-driven campaigns.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:brightness-110"
          >
            Explore Services <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Start a Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
