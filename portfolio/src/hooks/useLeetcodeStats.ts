import { useEffect, useState } from 'react'

interface LCStats {
  totalSolved: number
  easySolved: number
  mediumSolved: number
  hardSolved: number
  ranking: number
}

export function useLeetcodeStats(handle: string) {
  const [stats, setStats] = useState<LCStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false
    fetch(`https://leetcode-stats-api.herokuapp.com/${handle}`)
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return
        if (data.status !== 'success') throw new Error('bad status')
        setStats({
          totalSolved: data.totalSolved,
          easySolved: data.easySolved,
          mediumSolved: data.mediumSolved,
          hardSolved: data.hardSolved,
          ranking: data.ranking,
        })
      })
      .catch(() => !cancelled && setError(true))
      .finally(() => !cancelled && setLoading(false))
    return () => {
      cancelled = true
    }
  }, [handle])

  return { stats, loading, error }
}
