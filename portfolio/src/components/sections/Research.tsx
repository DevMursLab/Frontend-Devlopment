import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { research, researchStats } from '../../data/research'
import { fadeInUp } from '../../lib/motion'

const pipeline = [
  { title: 'Face Input', lines: ['FER2013', 'OpenCV'] },
  { title: 'Audio Input', lines: ['DAIC-WOZ', 'Whisper'] },
  { title: 'Fusion + Output', lines: ['Binary: Dep/No', 'Bengali Focus'] },
]

export function Research() {
  return (
    <section id="research" className="px-6 py-24 bg-bg-void">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="04" title="Research" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="glow-border rounded-xl bg-bg-card p-8"
        >
          <div className="flex items-center justify-between flex-wrap gap-2 mb-6">
            <span className="flex items-center gap-2 font-mono text-sm text-text-secondary">
              <FileText size={16} /> RESEARCH
            </span>
            <span className="font-mono text-xs px-3 py-1 rounded-full border border-accent-blue/40 bg-accent-blue/10 text-accent-blue">
              IEEE Access
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-text-primary leading-snug">
            {research.title}
          </h3>
          <p className="text-text-secondary text-sm mt-3">{research.authors}</p>
          <p className="text-text-muted text-sm">{research.affiliation}</p>
          <p className="font-mono text-xs text-accent-blue mt-2">{research.status}</p>

          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            {pipeline.map((step, i) => (
              <div key={step.title} className="rounded-lg border border-white/10 bg-bg-void p-4">
                <p className="font-mono text-xs text-text-muted mb-2">
                  {i < pipeline.length - 1 ? `Stage ${i + 1}` : 'Output'}
                </p>
                <p className="font-mono text-sm text-text-primary">{step.title}</p>
                {step.lines.map((l) => (
                  <p key={l} className="font-mono text-xs text-text-secondary mt-1">
                    {l}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-8">
            {researchStats.map((stat) => (
              <div key={stat.label}>
                <p className="font-mono text-xs text-text-muted">{stat.label}</p>
                <p className="font-mono text-sm text-text-primary mt-1">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-4 mt-8 font-mono text-sm">
            <a
              href={research.github}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-accent-blue text-white hover:bg-accent-indigo transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
