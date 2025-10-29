import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactMap = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! We\'ll get back to you shortly.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <h2 className="text-2xl font-semibold text-white">Let’s build something great</h2>
            <p className="mt-2 text-white/70">Share a few details and we’ll respond within one business day.</p>
            <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm text-white/70">Name</label>
                  <input required className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="text-sm text-white/70">Email</label>
                  <input type="email" required className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="jane@company.com" />
                </div>
              </div>
              <div>
                <label className="text-sm text-white/70">Company</label>
                <input className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Acme Inc." />
              </div>
              <div>
                <label className="text-sm text-white/70">How can we help?</label>
                <textarea rows={4} className="mt-1 w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Tell us about your goals..." />
              </div>
              <button type="submit" className="inline-flex w-fit items-center gap-2 rounded-lg bg-gradient-to-r from-red-500 via-blue-500 to-green-500 px-4 py-2 font-semibold text-white shadow-lg shadow-blue-500/20">
                Send message <Send className="h-4 w-4" />
              </button>
              {status && <p className="text-sm text-green-300">{status}</p>}
            </form>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="overflow-hidden rounded-2xl border border-white/10"
          >
            <iframe
              title="Office location"
              className="h-[380px] w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019612582519!2d-122.40136332368421!3d37.7879930106131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064a70b7d1d%3A0x9c6f4e7c5f35d5c!2sSalesforce%20Tower!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
