import { projectFilters } from '../../../data/projects'

export function ProjectFilter({
  active,
  onChange,
}: {
  active: string
  onChange: (value: string) => void
}) {
  return (
    <div className="flex flex-wrap gap-2 mb-10">
      {projectFilters.map((f) => (
        <button
          key={f.value}
          onClick={() => onChange(f.value)}
          className={`font-mono text-sm px-4 py-2 rounded-lg border transition-colors ${
            active === f.value
              ? 'bg-accent-blue text-white border-accent-blue'
              : 'border-white/10 text-text-secondary hover:border-accent-blue/40 hover:text-text-primary'
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}
