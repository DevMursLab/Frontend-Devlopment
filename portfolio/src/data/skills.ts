import type { Skill } from '../types'

export const skills: Skill[] = [
  { name: 'Anthropic API', level: 90, category: 'ai' },
  { name: 'LangGraph', level: 80, category: 'ai' },
  { name: 'n8n Automation', level: 88, category: 'ai' },
  { name: 'Python / ML', level: 88, category: 'ai' },
  { name: 'Whisper / ASR', level: 68, category: 'ai' },
  { name: 'OpenCV', level: 75, category: 'ai' },

  { name: 'React / React Native', level: 90, category: 'fullstack' },
  { name: 'Node.js / TypeScript', level: 88, category: 'fullstack' },
  { name: 'Supabase / PostgreSQL', level: 85, category: 'fullstack' },
  { name: 'FastAPI / REST APIs', level: 85, category: 'fullstack' },
  { name: 'MongoDB / MySQL', level: 78, category: 'fullstack' },
  { name: 'Docker · Vercel · Netlify', level: 75, category: 'fullstack' },

  { name: 'IEEE Paper Writing', level: 75, category: 'research' },
  { name: 'Multimodal ML', level: 82, category: 'research' },
  { name: 'FER2013 / DAIC-WOZ', level: 80, category: 'research' },
  { name: 'Signal Processing', level: 65, category: 'research' },
  { name: 'Academic Peer Review', level: 60, category: 'research' },
  { name: 'Experimental Design', level: 78, category: 'research' },
]

export const skillGroups = [
  { label: 'AI / ML', category: 'ai' as const },
  { label: 'Full-Stack', category: 'fullstack' as const },
  { label: 'Research', category: 'research' as const },
]
