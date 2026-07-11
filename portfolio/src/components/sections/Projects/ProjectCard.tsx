import { motion } from 'framer-motion'
import { Code2, ExternalLink } from 'lucide-react'
import type { Project } from '../../../types'
import { StatusBadge, HighlightBadge } from '../../ui/Badge'
import { Tag } from '../../ui/Tag'
import { scaleIn } from '../../../lib/motion'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={scaleIn}
      className="glow-border rounded-xl bg-bg-card p-6 flex flex-col gap-4 hover:bg-bg-card-hover transition-colors"
    >
      <div className="flex items-center justify-between">
        {project.highlight ? <HighlightBadge text={project.highlight} /> : <span />}
        <StatusBadge status={project.status} />
      </div>

      <div>
        <h3 className="text-lg font-bold text-text-primary">{project.title}</h3>
        <p className="text-text-secondary text-sm mt-2 leading-relaxed">{project.description}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>

      <div className="flex gap-4 mt-auto pt-2 font-mono text-sm">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-text-secondary hover:text-accent-blue transition-colors"
          >
            <Code2 size={16} /> GitHub
          </a>
        )}
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-text-secondary hover:text-accent-blue transition-colors"
          >
            <ExternalLink size={16} /> Live Demo
          </a>
        )}
      </div>
    </motion.div>
  )
}
