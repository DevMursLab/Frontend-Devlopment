import type { Skill } from '../types'

export const skills: Skill[] = [
  { name: 'Python / PyTorch', level: 90, category: 'ai' },
  { name: 'Multimodal Learning', level: 86, category: 'ai' },
  { name: 'Hugging Face / Transformers', level: 84, category: 'ai' },
  { name: 'RAG / Embeddings / ChromaDB', level: 88, category: 'ai' },
  { name: 'Explainable & Fair AI', level: 82, category: 'ai' },
  { name: 'Data Science / Statistics', level: 80, category: 'ai' },

  { name: 'React / Next.js / TypeScript', level: 86, category: 'fullstack' },
  { name: 'Node.js / Express', level: 84, category: 'fullstack' },
  { name: 'FastAPI / REST APIs', level: 88, category: 'fullstack' },
  { name: 'C# / .NET / WPF / MVVM', level: 82, category: 'fullstack' },
  { name: 'MongoDB / MySQL / SQLite', level: 82, category: 'fullstack' },
  { name: 'Git / Linux / Vercel', level: 84, category: 'fullstack' },

  { name: 'PRISMA Systematic Reviews', level: 88, category: 'research' },
  { name: 'Experimental Design', level: 86, category: 'research' },
  { name: 'Ablation & Validity Audits', level: 86, category: 'research' },
  { name: 'Fairness / Explainability', level: 82, category: 'research' },
  { name: 'Multi-Seed Evaluation', level: 84, category: 'research' },
  { name: 'LaTeX / Academic Writing', level: 84, category: 'research' },
]

export const skillGroups = [
  { label: 'AI / ML', category: 'ai' as const },
  { label: 'Engineering', category: 'fullstack' as const },
  { label: 'Research Practice', category: 'research' as const },
]
