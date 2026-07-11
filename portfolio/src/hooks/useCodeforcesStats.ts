import { useEffect, useState } from 'react'

interface CFStats {
  rating: number
  maxRating: number
  rank: string
  maxRank: string
}

export function useCodeforcesStats(handle: string) {
  const [stats, setStats] = useState<CFStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false
    fetch(`https://codeforces.com/api/user.info?handles=${handle}`)
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return
        if (data.status !== 'OK') throw new Error('bad status')
        const r = data.result[0]
        setStats({ rating: r.rating, maxRating: r.maxRating, rank: r.rank, maxRank: r.maxRank })
      })
      .catch(() => !cancelled && setError(true))
      .finally(() => !cancelled && setLoading(false))
    return () => {
      cancelled = true
    }
  }, [handle])

  return { stats, loading, error }
}
