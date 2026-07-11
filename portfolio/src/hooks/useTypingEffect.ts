import { useEffect, useState } from 'react'

export interface ScriptLine {
  type: 'cmd' | 'out' | 'cursor'
  text?: string
}

interface RenderedLine {
  type: 'cmd' | 'out'
  text: string
  done: boolean
}

const CHAR_DELAY = 40
const LINE_PAUSE = 700

export function useTypingEffect(script: ScriptLine[]) {
  const [lines, setLines] = useState<RenderedLine[]>([])
  const [showCursor, setShowCursor] = useState(false)

  useEffect(() => {
    let cancelled = false
    const timeouts: ReturnType<typeof setTimeout>[] = []

    async function run() {
      for (const entry of script) {
        if (cancelled) return

        if (entry.type === 'cursor') {
          setShowCursor(true)
          return
        }

        if (entry.type !== 'cmd' && entry.type !== 'out') continue
        const lineType = entry.type
        const fullText = entry.text ?? ''
        setLines((prev) => [...prev, { type: lineType, text: '', done: false }])

        for (let i = 1; i <= fullText.length; i++) {
          await new Promise<void>((resolve) => {
            const t = setTimeout(() => {
              if (!cancelled) {
                setLines((prev) => {
                  const next = [...prev]
                  next[next.length - 1] = { type: lineType, text: fullText.slice(0, i), done: i === fullText.length }
                  return next
                })
              }
              resolve()
            }, CHAR_DELAY)
            timeouts.push(t)
          })
        }

        await new Promise<void>((resolve) => {
          const t = setTimeout(resolve, LINE_PAUSE)
          timeouts.push(t)
        })
      }
    }

    run()

    return () => {
      cancelled = true
      timeouts.forEach(clearTimeout)
    }
  }, [script])

  return { lines, showCursor }
}
