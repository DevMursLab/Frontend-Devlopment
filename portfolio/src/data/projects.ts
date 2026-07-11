import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 1,
    title: 'Sia — AI Rental Aggregation Platform',
    description:
      'AI-powered rental platform with NLP search, automated tenant-landlord communication, and real-time listing aggregation.',
    tags: ['React Native', 'Expo', 'Supabase', 'n8n', 'Anthropic API', 'TypeScript'],
    category: 'fullstack',
    status: 'in-progress',
    highlight: 'Active Development',
    links: { github: 'https://github.com/DevMursLab/sia' },
  },
  {
    id: 2,
    title: 'Multimodal Depression Detection',
    description:
      'Combines facial expression analysis (FER2013 + OpenCV) and speech features (Whisper + DAIC-WOZ) for depression detection with Bengali-speaker focus.',
    tags: ['Python', 'PyTorch', 'FER2013', 'DAIC-WOZ', 'Whisper', 'OpenCV'],
    category: 'research',
    status: 'submitted',
    highlight: 'IEEE Access Target',
    links: { github: 'https://github.com/DevMursLab/depression-detection' },
  },
  {
    id: 3,
    title: 'Enterprise RAG Agent (NVIDIA NIM)',
    description:
      'Production-grade RAG pipeline with NVIDIA NIM free tier integration, pgvector search, and multi-document retrieval over FastAPI.',
    tags: ['Python', 'FastAPI', 'NVIDIA NIM', 'pgvector', 'LangChain'],
    category: 'ai',
    status: 'complete',
    links: { github: 'https://github.com/DevMursLab/rag-nvidia-nim' },
  },
  {
    id: 4,
    title: 'Closr — AI Sales Agent',
    description:
      'LangGraph-based multi-tenant AI sales agent with CRM integration, lead qualification pipeline, and PostgreSQL/pgvector backend.',
    tags: ['LangGraph', 'FastAPI', 'PostgreSQL', 'pgvector', 'Multi-tenant'],
    category: 'ai',
    status: 'architecture',
    highlight: 'Upwork Ready',
    links: { github: 'https://github.com/DevMursLab/closr' },
  },
  {
    id: 5,
    title: 'Universal AI Business Assistant',
    description:
      'Channel-agnostic AI assistant supporting WhatsApp, Telegram, Slack, and web — single backend, multi-platform deployment via n8n.',
    tags: ['n8n', 'WhatsApp API', 'Telegram', 'Slack', 'Anthropic API'],
    category: 'automation',
    status: 'complete',
    links: { github: 'https://github.com/DevMursLab/universal-ai-assistant' },
  },
  {
    id: 6,
    title: 'WhatsApp AI Business Assistant',
    description:
      'AI-powered WhatsApp assistant for SMBs — appointment booking, FAQ handling, order tracking, and Supabase-backed conversation memory.',
    tags: ['Node.js', 'WhatsApp Business API', 'Anthropic API', 'Supabase'],
    category: 'automation',
    status: 'complete',
    links: { github: 'https://github.com/DevMursLab/whatsapp-ai-assistant' },
  },
  {
    id: 7,
    title: 'T5 Text Summarization API',
    description:
      'Production-ready text summarization service using fine-tuned T5 transformer, FastAPI backend, and React frontend with real-time output.',
    tags: ['Python', 'FastAPI', 'HuggingFace T5', 'React'],
    category: 'ai',
    status: 'complete',
    links: { github: 'https://github.com/DevMursLab' },
  },
  {
    id: 8,
    title: 'LeetCode Solutions Archive',
    description:
      'Structured solutions to 100+ LeetCode problems in C++ with time/space complexity notes. Topics: DP, Graph, BFS/DFS, Binary Search.',
    tags: ['C++', 'Algorithms', 'Data Structures', 'LeetCode'],
    category: 'competitive',
    status: 'ongoing',
    links: { github: 'https://github.com/DevMursLab/Leetcode' },
  },
  {
    id: 9,
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
  { label: 'Full-Stack', value: 'fullstack' },
  { label: 'Automation', value: 'automation' },
  { label: 'Research', value: 'research' },
  { label: 'Competitive', value: 'competitive' },
] as const
