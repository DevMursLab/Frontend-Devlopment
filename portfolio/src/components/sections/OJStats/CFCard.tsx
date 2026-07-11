import { useCodeforcesStats } from '../../../hooks/useCodeforcesStats'
import { ojProfiles } from '../../../data/ojProfiles'

export function CFCard() {
  const { handle, url } = ojProfiles.codeforces
  const { stats, loading, error } = useCodeforcesStats(handle)

  return (
    <div className="glow-border rounded-xl bg-bg-card p-5">
      <a href={url} target="_blank" rel="noreferrer" className="font-mono text-sm text-text-primary hover:text-accent-blue">
        Codeforces ↗
      </a>
      <p className="font-mono text-xs text-text-muted mt-1">{handle}</p>

      {loading && <div className="h-16 mt-4 rounded bg-white/5 animate-pulse" />}

      {!loading && (error || !stats) && (
        <p className="font-mono text-xs text-text-secondary mt-4">Stats unavailable — visit profile ↗</p>
      )}

      {!loading && stats && (
        <div className="mt-4 flex flex-col gap-1 font-mono text-sm">
          <p className="text-text-primary">
            Rating: <span className="text-accent-blue">{stats.rating}</span>{' '}
            <span className="text-text-muted">(max {stats.maxRating})</span>
          </p>
          <p className="text-text-secondary capitalize">Rank: {stats.rank}</p>
        </div>
      )}
    </div>
  )
}
