import { ExternalLink, ShieldCheck, Trophy } from 'lucide-react'
import { ojProfiles } from '../../../data/ojProfiles'

export function CompetitiveProof() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-accent-blue/35 bg-gradient-to-br from-[#172554] via-bg-card to-bg-card p-6 md:p-8 mb-6 shadow-[0_0_48px_rgba(59,130,246,0.12)]">
      <div aria-hidden className="absolute -right-20 -top-24 w-80 h-80 rounded-full bg-accent-blue/15 blur-3xl" />
      <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-accent-blue"><ShieldCheck size={15} /> VERIFIED COMPETITIVE PROFILE</div>
          <div className="flex items-end gap-4 mt-4"><p className="text-5xl md:text-6xl font-bold text-text-primary">1303</p><div className="pb-1"><p className="font-mono text-xl font-bold text-text-code">Pupil</p><p className="font-mono text-xs text-text-muted">Codeforces rating</p></div></div>
          <p className="text-text-secondary leading-relaxed max-w-2xl mt-5">Competitive programming is the evidence behind the problem-solving mindset: decomposing complex requirements, proving correctness, and producing efficient solutions under real time pressure.</p>
          <div className="flex flex-wrap gap-2 mt-5"><span className="font-mono text-xs rounded-md border border-white/10 bg-white/5 px-3 py-2 text-text-secondary">1,500+ problems solved</span><span className="font-mono text-xs rounded-md border border-white/10 bg-white/5 px-3 py-2 text-text-secondary">IUPC team leader</span><span className="font-mono text-xs rounded-md border border-white/10 bg-white/5 px-3 py-2 text-text-secondary">Rank 51 · DUET IUPC</span></div>
          <a href={ojProfiles.codeforces.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-6 font-mono text-sm rounded-lg bg-accent-blue px-4 py-2.5 text-white hover:bg-accent-indigo transition-colors">Verify on Codeforces <ExternalLink size={15} /></a>
        </div>
        <div className="relative shrink-0 mx-auto md:mx-0">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-yellow-300 via-accent-blue to-red-400 opacity-70 blur" />
          <div className="relative rounded-2xl border border-white/20 bg-bg-void p-3 w-48"><div className="h-1.5 rounded-full bg-gradient-to-r from-yellow-300 via-accent-blue to-red-400" /><img src="/mursalin-portrait.png" alt="Md. Mursalin, Codeforces Pupil" className="w-full aspect-square object-cover object-[center_26%] rounded-xl mt-3" /><div className="flex items-center gap-2 mt-3"><Trophy size={16} className="text-yellow-300" /><div><p className="font-mono text-xs font-bold text-text-primary">itzzMursalin</p><p className="font-mono text-[10px] text-text-muted">CODEFORCES · PUPIL</p></div></div></div>
        </div>
      </div>
    </div>
  )
}
