import { motion } from 'framer-motion'
import { Mail, Code2, Link2, Briefcase, BarChart3 } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { contactLinks } from '../../data/ojProfiles'
import { fadeInUp } from '../../lib/motion'

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24 bg-bg-void">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="06" title="Contact" />

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary leading-snug">
              Let's build
              <br />
              something together.
            </h3>

            <div className="flex flex-col gap-3 mt-8 font-mono text-sm">
              <a href={`mailto:${contactLinks.email}`} className="flex items-center gap-2 text-text-secondary hover:text-accent-blue transition-colors">
                <Mail size={16} /> {contactLinks.email}
              </a>
              {contactLinks.upwork && (
                <a href={contactLinks.upwork} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-text-secondary hover:text-accent-blue transition-colors">
                  <Briefcase size={16} /> Upwork ↗
                </a>
              )}
              <a href={contactLinks.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-text-secondary hover:text-accent-blue transition-colors">
                <Code2 size={16} /> DevMursLab ↗
              </a>
              <a href={contactLinks.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-text-secondary hover:text-accent-blue transition-colors">
                <Link2 size={16} /> LinkedIn ↗
              </a>
              <a href={contactLinks.kaggle} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-text-secondary hover:text-accent-blue transition-colors">
                <BarChart3 size={16} /> Kaggle ↗
              </a>
            </div>

            <p className="text-text-muted text-sm mt-8">
              Available for freelance work.
              <br />
              Reply &lt; 24h.
            </p>
          </motion.div>

          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            action={`mailto:${contactLinks.email}`}
            method="post"
            encType="text/plain"
            className="flex flex-col gap-4"
          >
            <input
              name="Name"
              placeholder="Name"
              required
              className="bg-bg-card border border-white/10 rounded-lg px-4 py-3 font-mono text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-blue/50"
            />
            <input
              name="Email"
              type="email"
              placeholder="Email"
              required
              className="bg-bg-card border border-white/10 rounded-lg px-4 py-3 font-mono text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-blue/50"
            />
            <textarea
              name="Message"
              placeholder="Message"
              required
              rows={5}
              className="bg-bg-card border border-white/10 rounded-lg px-4 py-3 font-mono text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-blue/50 resize-none"
            />
            <button
              type="submit"
              className="font-mono text-sm px-5 py-3 rounded-lg bg-accent-blue text-white hover:bg-accent-indigo transition-colors"
            >
              Send Message →
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
