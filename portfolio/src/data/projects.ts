import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 1,
    title: 'DocMind AI — Enterprise RAG Platform',
    description:
      'Retrieval-Augmented Generation system for document intelligence — PDF upload, semantic chunking, vector search, and citation-aware Q&A over private knowledge bases with workspace authentication.',
    tags: ['FastAPI', 'Python', 'ChromaDB', 'Sentence Transformers', 'PyPDF', 'RAG'],
    category: 'ai',
    status: 'complete',
    highlight: 'Live Demo',
    links: {
      github: 'https://github.com/DevMursLab/RAG-Retrieval-Augmented-Generation-/tree/main/DocMindAI',
      live: 'https://rag-retrieval-augmented-generation.vercel.app/',
    },
  },
  {
    id: 2,
    title: 'WhatsApp AI Agent',
    description:
      'Agentic AI assistant integrated with WhatsApp for automated, context-aware conversations — part of a broader multi-agent suite spanning finance, memory, and video-analysis agents.',
    tags: ['JavaScript', 'Node.js', 'WhatsApp API', 'Agentic AI'],
    category: 'automation',
    status: 'complete',
    links: {
      github: 'https://github.com/DevMursLab/-Agentic-AI/tree/main/Whatsapp_with_ai_integration_project',
    },
  },
  {
    id: 3,
    title: 'Standardizing Agentic AI — Systematic Review',
    description:
      'PRISMA 2020 systematic review examining standardization across agentic AI systems — memory, planning, tool use, multi-agent coordination, and the Model Context Protocol. 230 references verified from 472 screened.',
    tags: ['PRISMA', 'Model Context Protocol', 'Systematic Review', 'LaTeX'],
    category: 'research',
    status: 'in-progress',
    highlight: 'Targeting Elsevier',
    links: { github: 'https://github.com/DevMursLab/Review_paper' },
  },
  {
    id: 4,
    title: 'Multimodal Biometric Attendance System',
    description:
      'Deep learning thesis fusing facial and fingerprint biometrics via confidence-gated transformer fusion — achieving 0.984 AUC, outperforming unimodal face (0.758) and fingerprint (0.962) baselines.',
    tags: ['PyTorch', 'Transformers', 'LFW', 'SOCOFing', 'FVC2002/2004'],
    category: 'research',
    status: 'complete',
    highlight: 'Thesis',
    links: {
      github: 'https://github.com/DevMursLab/Deep-Learning_thesis_Multimodal-Attendance-System',
    },
  },
  {
    id: 5,
    title: 'LeetCode Solutions Archive',
    description:
      'Structured solutions to 100+ LeetCode problems in C++ with time/space complexity notes. Topics: DP, Graph, BFS/DFS, Binary Search.',
    tags: ['C++', 'Algorithms', 'Data Structures', 'LeetCode'],
    category: 'competitive',
    status: 'ongoing',
    links: { github: 'https://github.com/DevMursLab/Leetcode' },
  },
  {
    id: 6,
    title: 'Competitive Programming Archive',
    description:
      'Solutions from Codeforces, CodeChef, HackerRank contests. C++ implementations covering DP, Graphs, Number Theory, and Greedy.',
    tags: ['C++', 'Competitive Programming', 'Codeforces', 'CodeChef'],
    category: 'competitive',
    status: 'ongoing',
    links: { github: 'https://github.com/DevMursLab/Competetive-Programming' },
  },
]

export const projectFilters = [
  { label: 'All', value: 'all' },
  { label: 'AI/ML', value: 'ai' },
  { label: 'Automation', value: 'automation' },
  { label: 'Research', value: 'research' },
  { label: 'Competitive', value: 'competitive' },
] as const
