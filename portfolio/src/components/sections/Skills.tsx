import { motion } from 'framer-motion'
import { SectionHeader } from '../ui/SectionHeader'
import { skills, skillGroups } from '../../data/skills'
import { barGrow, fadeInUp, staggerContainer } from '../../lib/motion'

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24 bg-bg-void">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="02" title="Skills" />

        <div className="grid md:grid-cols-3 gap-10">
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <h3 className="font-mono text-sm text-text-secondary uppercase tracking-wider mb-4">
                {group.label}
              </h3>
              <div className="flex flex-col gap-4">
                {skills
                  .filter((s) => s.category === group.category)
                  .map((skill) => (
                    <motion.div key={skill.name} variants={fadeInUp}>
                      <div className="flex justify-between font-mono text-xs text-text-secondary mb-1.5">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                        <motion.div
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={barGrow(skill.level)}
                          className="h-full rounded-full bg-gradient-to-r from-accent-blue to-accent-indigo"
                        />
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
