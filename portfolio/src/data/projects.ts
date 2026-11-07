import type { Project } from '../types'

export const projects: Project[] = [
  { id: 1, title: 'AEGIS-SIM · Logistics Simulation Platform', description: 'Desktop logistics simulator with multi-vehicle priority dispatch, road routing, scenario editing, saved-run replay, and PDF/CSV reporting.', tags: ['C#', '.NET 10', 'WPF', 'MVVM', 'EF Core', 'SQLite'], category: 'fullstack', status: 'complete', highlight: 'Desktop Engineering', links: { github: 'https://github.com/DevMursLab/aegis-sim-desktop' } },
  { id: 2, title: 'DocMind AI · Enterprise RAG Platform', description: 'End-to-end document intelligence: PDF ingestion, semantic chunking, embeddings, persistent vector storage, retrieval, and grounded answers.', tags: ['Python', 'FastAPI', 'ChromaDB', 'Embeddings', 'RAG'], category: 'ai', status: 'complete', highlight: 'Live Demo', links: { github: 'https://github.com/DevMursLab/RAG-Retrieval-Augmented-Generation-/tree/main/DocMindAI', live: 'https://rag-retrieval-augmented-generation.vercel.app/' } },
  { id: 3, title: 'AI Business OS · Multi-Agent Receptionist', description: 'AI receptionist platform combining voice, booking, CRM workflows, customer operations, and an integrated multi-agent automation stack.', tags: ['Next.js', 'TypeScript', 'n8n', 'Supabase', 'Vapi', 'Twilio'], category: 'automation', status: 'complete', highlight: 'Agentic AI', links: { github: 'https://github.com/DevMursLab/-Agentic-AI/tree/main/AI_receptionist' } },
  { id: 4, title: 'Book Recommendation System', description: 'Recommendation engine built from user-item ratings with collaborative and content-based filtering plus offline evaluation.', tags: ['Python', 'Pandas', 'scikit-learn', 'Recommender Systems'], category: 'ai', status: 'complete', links: { github: 'https://github.com/DevMursLab/Machine_Learning_Project/tree/main/book_recommendation_system' } },
  { id: 5, title: 'Digital Library System', description: 'Full-stack academic resource platform with authentication, role-based panels, search, filtering, and resource management.', tags: ['MongoDB', 'Express', 'React', 'Node.js'], category: 'fullstack', status: 'complete', highlight: '2nd Place · Innovation Show', links: { github: 'https://github.com/DevMursLab' } },
  { id: 6, title: 'Office Management System', description: 'Role-based office platform supporting secure login, employee and record CRUD, structured search, and operational reports.', tags: ['Java', 'JDBC', 'MySQL', 'OOP'], category: 'fullstack', status: 'complete', links: { github: 'https://github.com/DevMursLab' } },
  { id: 7, title: 'WhatsApp AI Agent', description: 'Context-aware customer-reply agent for multi-turn task handling inside a broader suite spanning finance, memory, and video analysis.', tags: ['JavaScript', 'Node.js', 'WhatsApp API', 'Agentic AI'], category: 'automation', status: 'complete', links: { github: 'https://github.com/DevMursLab/-Agentic-AI/tree/main/Whatsapp_with_ai_integration_project' } },
  { id: 8, title: 'Text Summarizer · Transformer NLP App', description: 'Web application that condenses long documents through a transformer model exposed behind a clean FastAPI service.', tags: ['Python', 'FastAPI', 'Hugging Face', 'Transformers'], category: 'ai', status: 'complete', links: { github: 'https://github.com/DevMursLab' } },
]

export const projectFilters = [
  { label: 'All', value: 'all' },
  { label: 'AI/ML', value: 'ai' },
  { label: 'Full-Stack', value: 'fullstack' },
  { label: 'Automation', value: 'automation' },
] as const
