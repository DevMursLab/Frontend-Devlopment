import { motion } from 'framer-motion'
import { TerminalAnimation } from './TerminalAnimation'
import { Button } from '../../ui/Button'
import { fadeInUp, staggerContainer } from '../../../lib/motion'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden bg-bg-void"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 0%, rgba(59,130,246,0.12), transparent 60%)',
        }}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 flex flex-col items-center text-center gap-6 max-w-3xl"
      >
        <motion.p variants={fadeInUp} className="font-mono text-accent-blue text-sm tracking-wide">
          &gt; building systems that think_
        </motion.p>

        <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-text-primary">
          Mursalin Hawlader
        </motion.h1>

        <motion.p variants={fadeInUp} className="text-text-secondary text-lg md:text-xl">
          AI Engineer · Full-Stack Developer · CS Researcher
        </motion.p>

        <motion.div variants={fadeInUp}>
          <TerminalAnimation />
        </motion.div>

        <motion.div variants={fadeInUp} className="flex gap-4 mt-2">
          <Button href="#projects">View Projects</Button>
          <Button href="/cv-mursalin.pdf" variant="ghost">
            Download CV
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
