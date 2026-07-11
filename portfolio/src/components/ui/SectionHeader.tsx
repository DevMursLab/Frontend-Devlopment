import { motion } from 'framer-motion'
import { fadeInUp } from '../../lib/motion'

export function SectionHeader({
  index,
  title,
  subtitle,
}: {
  index: string
  title: string
  subtitle?: string
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeInUp}
      className="mb-12"
    >
      <span className="font-mono text-sm text-accent-blue">{index}</span>
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-2">{title}</h2>
      {subtitle && <p className="text-text-secondary mt-3 max-w-2xl">{subtitle}</p>}
      <div className="h-px w-full bg-gradient-to-r from-accent-blue/40 via-white/5 to-transparent mt-6" />
    </motion.div>
  )
}
