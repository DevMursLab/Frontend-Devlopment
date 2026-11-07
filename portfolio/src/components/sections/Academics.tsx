import { motion } from 'framer-motion'
import { Award, BookOpen, GraduationCap, Mail, Trophy } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { fadeInUp, staggerContainer } from '../../lib/motion'

const results = [
  { label: 'B.Sc. CSE', value: '3.14', note: 'CGPA / 4.00 · Netrokona University' },
  { label: 'Recent semester', value: '3.56', note: 'Strong upward academic trend' },
  { label: 'Latest semester', value: '3.60', note: 'AI-focused advanced coursework' },
  { label: 'HSC + SSC', value: '5.00', note: 'GPA 5.00 in both examinations' },
]

const courses = ['Artificial Intelligence', 'Machine Learning', 'Data Science', 'Statistics', 'Deep Learning', 'Research Methodology']

const achievements = [
  { title: '9th Place · NeU Mymensingh Regional IUPC 2025', detail: 'Team leader · national inter-university programming contest', href: 'https://www.hackerrank.com/contests/neu-mymensingh-regional-iupc-2025/leaderboard' },
  { title: 'Rank 51 · DUET IUPC 2026', detail: 'Team Robbeters · national contest standings', href: 'https://toph.co/c/duet-inter-university-2026/standings' },
  { title: 'Rank 67 · North Western University IUPC 2023', detail: 'Competitive programming achievement' },
  { title: '2nd Place · Innovation Showcasing Competition', detail: 'Digital Library System · Department of CSE' },
  { title: 'Codeforces Pupil · 1303', detail: '1,500+ problems solved across competitive programming platforms', href: 'https://codeforces.com/profile/itzzMursalin' },
]

const references = [
  { name: 'Md Shovon', role: 'Lecturer, Department of CSE · B.Sc. Thesis Supervisor', email: 'mdshovon@neu.ac.bd' },
  { name: 'Farida Siddiqi Prity', role: 'Lecturer, Department of CSE · Research Collaborator', email: 'prity@neu.ac.bd' },
]

export function Academics() {
  return (
    <section id="academics" className="px-6 py-24 bg-bg-void">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="02" title="Academic strength" subtitle="A sustained upward trajectory, research-focused coursework, and proven performance under competition pressure." />

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {results.map((result, index) => (
            <motion.div key={result.label} variants={fadeInUp} className={`relative overflow-hidden rounded-2xl border p-6 ${index === 2 ? 'border-accent-blue/50 bg-gradient-to-br from-accent-blue/20 to-bg-card shadow-[0_0_40px_rgba(59,130,246,0.12)]' : 'border-white/10 bg-bg-card'}`}>
              <p className="font-mono text-xs uppercase tracking-wider text-text-muted">{result.label}</p>
              <p className="text-4xl font-bold text-text-primary mt-3">{result.value}</p>
              <p className="text-sm text-text-secondary mt-2">{result.note}</p>
              {index === 2 && <span className="absolute right-4 top-4 font-mono text-[10px] uppercase tracking-wider text-accent-blue">Latest</span>}
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-6 mt-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp} className="rounded-2xl border border-white/10 bg-bg-card p-6 md:p-8">
            <div className="flex items-center gap-3"><GraduationCap className="text-accent-blue" /><h3 className="text-xl font-bold text-text-primary">Research-ready foundation</h3></div>
            <p className="text-sm text-text-secondary leading-relaxed mt-4">The two strongest recent semesters—<strong className="text-text-primary">3.56</strong> and <strong className="text-text-primary">3.60</strong>—concentrated on quantitative and AI-related study.</p>
            <div className="flex flex-wrap gap-2 mt-6">{courses.map((course) => <span key={course} className="font-mono text-xs rounded-lg border border-accent-blue/20 bg-accent-blue/8 px-3 py-2 text-text-secondary">{course}</span>)}</div>
            <div className="mt-7 pt-6 border-t border-white/10"><div className="flex items-center gap-2 font-mono text-xs text-accent-blue"><BookOpen size={15} /> EDUCATION</div><p className="font-semibold text-text-primary mt-3">B.Sc. in Computer Science & Engineering</p><p className="text-sm text-text-secondary">Netrokona University · 2022–2026</p><p className="text-sm text-text-secondary mt-3">HSC · Govt. Laboratory College, Dhanmondi · GPA 5.00</p><p className="text-sm text-text-secondary">SSC · Ahmed Bawany School & College · GPA 5.00</p></div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp} className="rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-400/8 to-bg-card p-6 md:p-8">
            <div className="flex items-center gap-3"><Trophy className="text-amber-300" /><h3 className="text-xl font-bold text-text-primary">Awards & distinctions</h3></div>
            <div className="mt-6 space-y-4">{achievements.map((item) => <div key={item.title} className="flex gap-3"><Award size={17} className="shrink-0 text-amber-300 mt-0.5" /><div>{item.href ? <a href={item.href} target="_blank" rel="noreferrer" className="font-bold text-text-primary hover:text-amber-200 transition-colors">{item.title} ↗</a> : <p className="font-bold text-text-primary">{item.title}</p>}<p className="text-sm text-text-secondary mt-1">{item.detail}</p></div></div>)}</div>
          </motion.div>
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeInUp} className="mt-6 rounded-2xl border border-white/10 bg-bg-card p-6 md:p-8">
          <p className="font-mono text-xs uppercase tracking-wider text-accent-blue">Academic references</p>
          <div className="grid md:grid-cols-2 gap-5 mt-5">{references.map((reference) => <div key={reference.email} className="rounded-xl border border-white/8 bg-bg-void p-5"><p className="font-bold text-text-primary">{reference.name}</p><p className="text-sm text-text-secondary mt-1">{reference.role}</p><a href={`mailto:${reference.email}`} className="inline-flex items-center gap-2 font-mono text-xs text-accent-blue mt-3"><Mail size={14} /> {reference.email}</a></div>)}</div>
        </motion.div>
      </div>
    </section>
  )
}
