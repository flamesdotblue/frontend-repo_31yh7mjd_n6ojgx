import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import HighlightsSection from './components/HighlightsSection';
import ContactMap from './components/ContactMap';
import Team from './components/Team';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

function App() {
  const onNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="bg-gradient-to-r from-red-400 via-blue-400 to-green-400 bg-clip-text text-xl font-extrabold text-transparent">Flare Digital</a>
          <nav className="hidden gap-6 md:flex">
            {navItems.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={(e) => onNavClick(e, n.href)}
                className="text-sm text-white/80 transition hover:text-white"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a href="#contact" onClick={(e) => onNavClick(e, '#contact')} className="ml-4 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/15 md:ml-0">Let’s talk</a>
        </div>
      </header>

      {/* Hero with Spline cover */}
      <main className="mx-auto max-w-7xl px-6 py-8">
        <Hero />

        {/* About Overview */}
        <section id="about" className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold">About us</h2>
          <p className="mt-2 max-w-3xl text-white/70">
            We’re a senior collective of strategists, creatives, and technologists who merge brand storytelling with performance discipline. Our approach is collaborative, transparent, and relentlessly iterative — so every campaign ladders up to measurable business outcomes.
          </p>
        </section>

        {/* Team */}
        <Team />

        {/* Services Snapshot */}
        <Services />

        {/* Featured Projects + Testimonials + Client Showcase */}
        <HighlightsSection />

        {/* Contact Form + Map */}
        <ContactMap />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <div className="bg-gradient-to-r from-red-400 via-blue-400 to-green-400 bg-clip-text text-lg font-bold text-transparent">Flare Digital</div>
            <p className="mt-2 text-sm text-white/70">Creative growth studio for modern brands.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Explore</h4>
            <ul className="mt-2 space-y-2 text-sm text-white/70">
              <li><a href="#team" onClick={(e)=>onNavClick(e,'#team')} className="hover:text-white">Team</a></li>
              <li><a href="#services" onClick={(e)=>onNavClick(e,'#services')} className="hover:text-white">Services</a></li>
              <li><a href="#work" onClick={(e)=>onNavClick(e,'#work')} className="hover:text-white">Work</a></li>
              <li><a href="#about" onClick={(e)=>onNavClick(e,'#about')} className="hover:text-white">About</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Connect</h4>
            <ul className="mt-2 space-y-2 text-sm text-white/70">
              <li><a href="mailto:hello@flaredigital.co" className="hover:text-white">hello@flaredigital.co</a></li>
              <li><a href="tel:+10000000000" className="hover:text-white">+1 (000) 000-0000</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Social</h4>
            <div className="mt-2 flex gap-3 text-sm text-white/70">
              <a href="#" className="hover:text-white">LinkedIn</a>
              <a href="#" className="hover:text-white">Twitter</a>
              <a href="#" className="hover:text-white">Instagram</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">© {new Date().getFullYear()} Flare Digital. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;
