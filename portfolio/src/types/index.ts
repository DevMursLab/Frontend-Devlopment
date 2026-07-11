export type ProjectCategory = 'ai' | 'fullstack' | 'automation' | 'research' | 'competitive'
export type ProjectStatus = 'complete' | 'in-progress' | 'submitted' | 'architecture' | 'ongoing'

export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  category: ProjectCategory
  status: ProjectStatus
  highlight?: string
  links: {
    github?: string
    live?: string
    paper?: string
    demo?: string
  }
}

export interface Skill {
  name: string
  level: number
  category: 'ai' | 'fullstack' | 'research'
}

export interface OJProfile {
  platform: string
  handle: string
  url: string
  stats?: Record<string, string | number>
}
