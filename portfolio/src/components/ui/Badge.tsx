import type { ProjectStatus } from '../../types'

const statusStyles: Record<ProjectStatus, string> = {
  complete: 'bg-status-complete/15 text-status-complete border-status-complete/30',
  'in-progress': 'bg-status-in-progress/15 text-status-in-progress border-status-in-progress/30',
  submitted: 'bg-status-submitted/15 text-status-submitted border-status-submitted/30',
  architecture: 'bg-status-architecture/15 text-status-architecture border-status-architecture/30',
  ongoing: 'bg-status-ongoing/15 text-status-ongoing border-status-ongoing/30',
}

const statusLabels: Record<ProjectStatus, string> = {
  complete: 'Complete',
  'in-progress': 'In Progress',
  submitted: 'Submitted',
  architecture: 'Architecture',
  ongoing: 'Ongoing',
}

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span className={`text-xs font-mono px-2 py-1 rounded-full border ${statusStyles[status]}`}>
      {statusLabels[status]}
    </span>
  )
}

export function HighlightBadge({ text }: { text: string }) {
  return (
    <span className="text-xs font-mono px-2 py-1 rounded-full border border-accent-blue/40 bg-accent-blue/10 text-accent-blue">
      {text}
    </span>
  )
}
