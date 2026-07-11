import type { ReactNode } from 'react'

export function Button({
  href,
  children,
  variant = 'primary',
}: {
  href: string
  children: ReactNode
  variant?: 'primary' | 'ghost'
}) {
  const base =
    'inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-mono text-sm transition-all duration-200'
  const styles =
    variant === 'primary'
      ? 'bg-accent-blue text-white hover:bg-accent-indigo hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]'
      : 'border border-white/10 text-text-primary hover:border-accent-blue/50 hover:bg-white/5'

  return (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className={`${base} ${styles}`}>
      {children}
    </a>
  )
}
