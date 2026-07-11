import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'
import { SectionHeader } from '../../ui/SectionHeader'
import { CFCard } from './CFCard'
import { LCCard } from './LCCard'
import { ojProfiles, cpTopics } from '../../../data/ojProfiles'
import { fadeInUp, staggerContainer } from '../../../lib/motion'

const otherPlatforms = [
  { label: 'HackerRank', ...ojProfiles.hackerrank },
  { label: 'HackerEarth', ...ojProfiles.hackerearth },
  { label: 'GFG', ...ojProfiles.geeksforgeeks },
  { label: 'TopCoder', ...ojProfiles.topcoder },
]

export function OJStats() {
  return (
    <section id="oj" className="px-6 py-24 bg-bg-surface">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="05" title="Online Judge Stats" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.p variants={fadeInUp} className="flex items-center gap-2 font-mono text-sm text-text-secondary mb-6">
            <Zap size={16} className="text-accent-blue" /> Competitive Programming
          </motion.p>

          <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <CFCard />
            <LCCard />
            <div className="glow-border rounded-xl bg-bg-card p-5">
              <a
                href={ojProfiles.codechef.url}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-sm text-text-primary hover:text-accent-blue"
              >
                CodeChef ↗
              </a>
              <p className="font-mono text-xs text-text-muted mt-1">{ojProfiles.codechef.handle}</p>
              <p className="font-mono text-xs text-text-secondary mt-4">Visit profile for stats ↗</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-10">
            <p className="font-mono text-xs text-text-muted mb-3">Other Platforms:</p>
            <div className="flex flex-wrap gap-3">
              {otherPlatforms.map((p) => (
                <a
                  key={p.label}
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs px-3 py-1.5 rounded-lg border border-white/10 text-text-secondary hover:border-accent-blue/40 hover:text-text-primary transition-colors"
                >
                  {p.label} ↗
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-8">
            <p className="font-mono text-xs text-text-muted mb-3">Topics:</p>
            <div className="flex flex-wrap gap-2">
              {cpTopics.map((topic) => (
                <span
                  key={topic}
                  className="font-mono text-xs px-2.5 py-1 rounded-md bg-white/5 text-text-secondary border border-white/5"
                >
                  {topic}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
