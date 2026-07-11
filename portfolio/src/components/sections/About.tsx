import { motion } from 'framer-motion'
import { Code2, Link2, Briefcase, BarChart3 } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { fadeInUp } from '../../lib/motion'
import { contactLinks } from '../../data/ojProfiles'

const timeline = [
  { year: '2024', text: 'Upwork Freelancer (AI/ML)' },
  { year: '2024', text: 'IEEE Research (depression detection)' },
  { year: '2023', text: 'CSE @ Netrakona University' },
  { year: '2023', text: 'First AI project (NLP)' },
  { year: '2022', text: 'Competitive programming start' },
]

const links = [
  { label: 'GitHub', href: contactLinks.github, icon: Code2 },
  { label: 'LinkedIn', href: contactLinks.linkedin, icon: Link2 },
  { label: 'Upwork', href: contactLinks.upwork || '#contact', icon: Briefcase },
  { label: 'Kaggle', href: contactLinks.kaggle, icon: BarChart3 },
]

export function About() {
  return (
    <section id="about" className="px-6 py-24 bg-bg-surface">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="01" title="About" />

        <div className="grid md:grid-cols-[2fr_3fr] gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="flex flex-col gap-4"
          >
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-accent-blue to-accent-indigo flex items-center justify-center font-mono text-2xl font-bold text-white">
              MH
            </div>
            <div>
              <h3 className="text-xl font-bold text-text-primary">Mursalin Hawlader</h3>
              <p className="text-text-secondary text-sm mt-1">CSE @ Netrakona University</p>
              <p className="text-text-muted text-sm">Netrakona, Bangladesh</p>
            </div>
            <div className="flex flex-col gap-2 mt-2">
              {links.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 font-mono text-sm text-text-secondary hover:text-accent-blue transition-colors"
                >
                  <Icon size={16} />
                  {label} ↗
                </a>
              ))}
            </div>

            <p className="text-text-secondary text-sm leading-relaxed mt-4">
              CSE student at Netrakona University, building AI systems that solve real problems.
              I work at the intersection of ML research, conversational AI, and full-stack
              engineering. Currently freelancing on Upwork (AI automation + full-stack),
              co-authoring a multimodal depression detection paper targeting IEEE Access, and
              building Sia — an AI-powered rental aggregation platform.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="relative pl-6"
          >
            <div className="absolute left-0 top-1 bottom-1 w-px bg-white/10" />
            <ul className="flex flex-col gap-6">
              {timeline.map((item) => (
                <li key={item.text} className="relative">
                  <span className="absolute -left-[27px] top-1 w-2.5 h-2.5 rounded-full bg-accent-blue" />
                  <span className="font-mono text-accent-blue text-sm">{item.year}</span>
                  <p className="text-text-primary">{item.text}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
