import { useLeetcodeStats } from '../../../hooks/useLeetcodeStats'
import { ojProfiles } from '../../../data/ojProfiles'

export function LCCard() {
  const { handle, url } = ojProfiles.leetcode
  const { stats, loading, error } = useLeetcodeStats(handle)

  return (
    <div className="glow-border rounded-xl bg-bg-card p-5">
      <a href={url} target="_blank" rel="noreferrer" className="font-mono text-sm text-text-primary hover:text-accent-blue">
        LeetCode ↗
      </a>
      <p className="font-mono text-xs text-text-muted mt-1">{handle}</p>

      {loading && <div className="h-16 mt-4 rounded bg-white/5 animate-pulse" />}

      {!loading && (error || !stats) && (
        <p className="font-mono text-xs text-text-secondary mt-4">Stats unavailable — visit profile ↗</p>
      )}

      {!loading && stats && (
        <div className="mt-4 flex flex-col gap-1 font-mono text-sm">
          <p className="text-text-primary">
            Solved: <span className="text-accent-blue">{stats.totalSolved}</span>
          </p>
          <p className="text-text-secondary text-xs">
            Easy {stats.easySolved} · Med {stats.mediumSolved} · Hard {stats.hardSolved}
          </p>
        </div>
      )}
    </div>
  )
}
