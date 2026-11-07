import { motion } from 'framer-motion'
import { ArrowDown, BookOpenCheck, BrainCircuit, Code2, Trophy } from 'lucide-react'
import { TerminalAnimation } from './TerminalAnimation'
import { Button } from '../../ui/Button'
import { fadeInUp, staggerContainer } from '../../../lib/motion'

const proof = [
  { value: '7', label: 'Research works', icon: BookOpenCheck },
  { value: '8', label: 'Complete projects', icon: Code2 },
  { value: '0.984', label: 'Best research AUC', icon: BrainCircuit },
  { value: '1,500+', label: 'Problems solved', icon: Trophy },
]

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center px-6 py-28 overflow-hidden bg-bg-void">
      <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 75% 20%, rgba(59,130,246,0.17), transparent 38%), radial-gradient(circle at 15% 80%, rgba(99,102,241,0.10), transparent 40%)' }} />
      <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] items-center gap-12">
          <div>
            <motion.p variants={fadeInUp} className="font-mono text-accent-blue text-sm tracking-wide">&gt; trustworthy AI · research-minded engineering_</motion.p>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold text-text-primary mt-5 tracking-tight">Md. Mursalin</motion.h1>
            <motion.p variants={fadeInUp} className="text-text-secondary text-lg md:text-2xl mt-4">AI Engineer · Full-Stack Developer · CS Researcher</motion.p>
            <motion.p variants={fadeInUp} className="text-text-secondary leading-relaxed max-w-2xl mt-6">I build reproducible AI systems and investigate whether impressive model scores reflect real signal, hidden shortcuts, or data leakage.</motion.p>
            <motion.div variants={fadeInUp} className="mt-7"><TerminalAnimation /></motion.div>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mt-7"><Button href="#research">Explore Research</Button><Button href="/md-mursalin-academic-cv.pdf" variant="ghost">Download Academic CV</Button></motion.div>
          </div>
          <motion.div variants={fadeInUp} className="relative max-w-md mx-auto lg:mr-0">
            <div className="absolute -inset-8 bg-accent-blue/15 blur-3xl rounded-full" />
            <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/8 to-transparent p-3 shadow-2xl"><img src="/mursalin-portrait.png" alt="Portrait of Md. Mursalin" className="w-full aspect-[4/5] rounded-[1.5rem] object-cover object-[center_30%]" /><div className="absolute left-6 right-6 bottom-6 rounded-xl border border-white/10 bg-bg-void/80 backdrop-blur-md p-4"><p className="font-mono text-xs text-accent-blue">OPEN TO RESEARCH COLLABORATION</p><p className="text-sm text-text-secondary mt-1">Multimodal learning · Trustworthy medical AI</p></div></div>
          </motion.div>
        </div>
        <motion.div variants={fadeInUp} className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-14">{proof.map(({ value, label, icon: Icon }) => <div key={label} className="rounded-xl border border-white/8 bg-bg-card/60 backdrop-blur p-4 flex items-center gap-4"><Icon className="text-accent-blue shrink-0" size={20} /><div><p className="font-mono text-xl font-bold text-text-primary">{value}</p><p className="text-xs text-text-muted">{label}</p></div></div>)}</motion.div>
        <motion.a variants={fadeInUp} href="#about" aria-label="Scroll to about" className="inline-flex items-center gap-2 font-mono text-xs text-text-muted hover:text-text-primary mt-8">Scroll to explore <ArrowDown size={14} /></motion.a>
      </motion.div>
    </section>
  )
}
