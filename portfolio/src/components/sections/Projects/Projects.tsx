import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '../../ui/SectionHeader'
import { ProjectFilter } from './ProjectFilter'
import { ProjectCard } from './ProjectCard'
import { projects } from '../../../data/projects'
import { staggerContainer } from '../../../lib/motion'

export function Projects() {
  const [filter, setFilter] = useState('all')

  const filtered = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  )

  return (
    <section id="projects" className="px-6 py-24 bg-bg-surface">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          index="04"
          title="Projects"
          subtitle="Eight complete systems across AI, full-stack engineering, automation, desktop software, and applied machine learning."
        />

        <ProjectFilter active={filter} onChange={setFilter} />

        <motion.div
          key={filter}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-6"
        >
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
