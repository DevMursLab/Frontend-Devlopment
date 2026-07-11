export function Tag({ label }: { label: string }) {
  return (
    <span className="text-xs font-mono px-2 py-1 rounded-md bg-white/5 text-text-secondary border border-white/5">
      {label}
    </span>
  )
}
