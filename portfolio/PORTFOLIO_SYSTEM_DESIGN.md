# 🧠 Portfolio — Complete System Design
> **Owner:** Mursalin Hawlader (Shuvo) · GitHub: DevMursLab  
> **Stack:** React 18 + Vite · TypeScript · Tailwind CSS · Framer Motion  
> **Goal:** One URL that wins Upwork clients, impresses IEEE reviewers, and speaks for itself  
> **Design:** Terminal-native · Dark · Zero-template · Code-first aesthetic  

---

## 1. IDENTITY BLOCK

```
Name        : Mursalin Hawlader (Shuvo)
Handle      : DevMursLab
University  : Netrakona University · CSE
Supervisor  : Md. Shovon
Tagline     : AI Engineer · Full-Stack Developer · CS Researcher
Freelance   : Upwork — AI Automation · Conversational AI · Full-Stack
Research    : Multimodal Depression Detection → IEEE Access (target)
Core Stack  : Python · TypeScript · React Native · Supabase · n8n · Anthropic API
```

**Hero line (terminal):**
```
> building systems that think_
```

---

## 2. SITE STRUCTURE

Single-page scroll. No routing needed.

```
[HERO] ──► [ABOUT] ──► [SKILLS] ──► [PROJECTS] ──► [RESEARCH] ──► [OJ STATS] ──► [CONTACT]
  │
  └─ Sticky navbar with smooth scroll + active section highlight
```

---

## 3. SECTION SPECS

---

### §1 HERO

**Full viewport (100vh). Background: `#0A0A0F`.**

Terminal window animation — this is the signature element of the site.

```
┌─ ~/DevMursLab  ● ● ●  ──────────────────────────────────────┐
│                                                              │
│  $ whoami                                                    │
│  ▶ Mursalin Hawlader — AI Engineer & CS Researcher           │
│                                                              │
│  $ cat current_focus.txt                                     │
│  ▶ IEEE paper: multimodal depression detection               │
│  ▶ Sia: AI-powered rental aggregation platform               │
│  ▶ Upwork: AI automation & full-stack projects               │
│                                                              │
│  $ ./hire_me.sh ▌                                            │
│                                                              │
│  ╔══════════════╗   ╔══════════════════╗                     │
│  ║ View Projects║   ║  Download CV     ║                     │
│  ╚══════════════╝   ╚══════════════════╝                     │
└──────────────────────────────────────────────────────────────┘
```

**Typing config:**
```ts
const CHAR_DELAY = 40        // ms per character
const LINE_PAUSE = 700       // ms between command and response
const SECTION_PAUSE = 1000   // ms between command blocks

const terminalScript = [
  { type: 'cmd',  text: 'whoami' },
  { type: 'out',  text: 'Mursalin Hawlader — AI Engineer & CS Researcher' },
  { type: 'cmd',  text: 'cat current_focus.txt' },
  { type: 'out',  text: 'IEEE paper: multimodal depression detection' },
  { type: 'out',  text: 'Sia: AI-powered rental aggregation platform' },
  { type: 'out',  text: 'Upwork: AI automation & full-stack projects' },
  { type: 'cmd',  text: './hire_me.sh' },
  { type: 'cursor' }
]
```

**Window chrome:** Three circles (red `#FF5F57`, yellow `#FFBD2E`, green `#28CA41`) + path text `~/DevMursLab  main`

---

### §2 ABOUT

Two column: 40% left (photo + links) | 60% right (bio + timeline)

```
┌─────────────────┬──────────────────────────────────────────┐
│  [Avatar]       │  TIMELINE                                │
│  Mursalin       │                                          │
│  Hawlader       │  2024 ──► Upwork Freelancer (AI/ML)     │
│  CSE @ NU       │  2024 ──► IEEE Research (depression det) │
│  Netrakona, BD  │  2023 ──► CSE @ Netrakona University     │
│                 │  2023 ──► First AI project (NLP)         │
│  [GitHub ↗]    │  2022 ──► Competitive programming start  │
│  [LinkedIn ↗]  │                                          │
│  [Upwork ↗]    │                                          │
│  [Kaggle ↗]    │                                          │
└─────────────────┴──────────────────────────────────────────┘
```

**Bio text:**
```
CSE student at Netrakona University, building AI systems that solve real problems.
I work at the intersection of ML research, conversational AI, and full-stack engineering.

Currently freelancing on Upwork (AI automation + full-stack), co-authoring a 
multimodal depression detection paper targeting IEEE Access, and building Sia — 
an AI-powered rental aggregation platform.
```

---

### §3 SKILLS

Animated progress bars. Trigger on scroll (Intersection Observer).

```
AI / ML                        Full-Stack                  Research
─────────────────────          ─────────────────────       ─────────────────────
Anthropic API  ████████░░      React / React Native        IEEE Paper Writing
LangGraph      ███████░░░      Node.js / TypeScript        Multimodal ML
n8n Automation ████████░░      Supabase / PostgreSQL       FER2013 / DAIC-WOZ
Python / ML    ████████░░      FastAPI / REST APIs         Signal Processing
Whisper / ASR  ██████░░░░      MongoDB / MySQL             Academic Peer Review
OpenCV         ███████░░░      Docker · Vercel · Netlify   Experimental Design
```

**Animation:**
```ts
// Framer Motion
const barVariant = {
  hidden:  { width: 0 },
  visible: { width: `${skill.level}%`, transition: { duration: 0.8, ease: 'easeOut' } }
}
// Trigger: IntersectionObserver on section entry
```

---

### §4 PROJECTS

Filter tabs: `All | AI/ML | Full-Stack | Automation | Research`

Card grid: 2 columns desktop, 1 column mobile.

---

#### PROJECT DATA

```ts
// src/data/projects.ts

export const projects: Project[] = [

  {
    id: 1,
    title: "Sia — AI Rental Aggregation Platform",
    description: "AI-powered rental platform with NLP search, automated tenant-landlord communication, and real-time listing aggregation.",
    tags: ["React Native", "Expo", "Supabase", "n8n", "Anthropic API", "TypeScript"],
    category: "fullstack",
    status: "in-progress",
    highlight: "Active Development",
    links: {
      github: "https://github.com/DevMursLab/sia"   // update when ready
    }
  },

  {
    id: 2,
    title: "Multimodal Depression Detection",
    description: "Combines facial expression analysis (FER2013 + OpenCV) and speech features (Whisper + DAIC-WOZ) for depression detection with Bengali-speaker focus.",
    tags: ["Python", "PyTorch", "FER2013", "DAIC-WOZ", "Whisper", "OpenCV"],
    category: "research",
    status: "submitted",
    highlight: "IEEE Access Target",
    links: {
      github: "https://github.com/DevMursLab/depression-detection",  // verify repo name
      paper: ""   // add after acceptance
    }
  },

  {
    id: 3,
    title: "Enterprise RAG Agent (NVIDIA NIM)",
    description: "Production-grade RAG pipeline with NVIDIA NIM free tier integration, pgvector search, and multi-document retrieval over FastAPI.",
    tags: ["Python", "FastAPI", "NVIDIA NIM", "pgvector", "LangChain"],
    category: "ai",
    status: "complete",
    highlight: "",
    links: {
      github: "https://github.com/DevMursLab/rag-nvidia-nim"  // update
    }
  },

  {
    id: 4,
    title: "Closr — AI Sales Agent",
    description: "LangGraph-based multi-tenant AI sales agent with CRM integration, lead qualification pipeline, and PostgreSQL/pgvector backend.",
    tags: ["LangGraph", "FastAPI", "PostgreSQL", "pgvector", "Multi-tenant"],
    category: "ai",
    status: "architecture",
    highlight: "Upwork Ready",
    links: {
      github: "https://github.com/DevMursLab/closr"  // update
    }
  },

  {
    id: 5,
    title: "Universal AI Business Assistant",
    description: "Channel-agnostic AI assistant supporting WhatsApp, Telegram, Slack, and web — single backend, multi-platform deployment via n8n.",
    tags: ["n8n", "WhatsApp API", "Telegram", "Slack", "Anthropic API"],
    category: "automation",
    status: "complete",
    highlight: "",
    links: {
      github: "https://github.com/DevMursLab/universal-ai-assistant"  // update
    }
  },

  {
    id: 6,
    title: "WhatsApp AI Business Assistant",
    description: "AI-powered WhatsApp assistant for SMBs — appointment booking, FAQ handling, order tracking, and Supabase-backed conversation memory.",
    tags: ["Node.js", "WhatsApp Business API", "Anthropic API", "Supabase"],
    category: "automation",
    status: "complete",
    highlight: "",
    links: {
      github: "https://github.com/DevMursLab/whatsapp-ai-assistant"  // update
    }
  },

  {
    id: 7,
    title: "T5 Text Summarization API",
    description: "Production-ready text summarization service using fine-tuned T5 transformer, FastAPI backend, and React frontend with real-time output.",
    tags: ["Python", "FastAPI", "HuggingFace T5", "React"],
    category: "ai",
    status: "complete",
    highlight: "",
    links: {
      github: "https://github.com/DevMursLab"  // find exact repo
    }
  },

  {
    id: 8,
    title: "LeetCode Solutions Archive",
    description: "Structured solutions to 100+ LeetCode problems in C++ with time/space complexity notes. Topics: DP, Graph, BFS/DFS, Binary Search.",
    tags: ["C++", "Algorithms", "Data Structures", "LeetCode"],
    category: "competitive",
    status: "ongoing",
    highlight: "",
    links: {
      github: "https://github.com/DevMursLab/Leetcode"
    }
  },

  {
    id: 9,
    title: "Competitive Programming Archive",
    description: "Solutions from Codeforces, CodeChef, HackerRank contests. C++ implementations covering DP, Graphs, Number Theory, and Greedy.",
    tags: ["C++", "Competitive Programming", "Codeforces", "CodeChef"],
    category: "competitive",
    status: "ongoing",
    highlight: "",
    links: {
      github: "https://github.com/DevMursLab/Competetive-Programming"
    }
  }
]
```

---

#### CARD LAYOUT

```
┌──────────────────────────────────────────┐
│  [highlight badge]            [status]   │
│                                          │
│  Project Title                           │
│  Description in 2 lines. Concise.        │
│                                          │
│  [React] [TypeScript] [Supabase] ...     │
│                                          │
│  [GitHub ↗]          [Live Demo ↗]       │
└──────────────────────────────────────────┘

Status colors:
  complete    → green badge
  in-progress → blue badge  
  submitted   → purple badge
  architecture → yellow badge
  ongoing     → gray badge
```

---

### §5 RESEARCH

Full-width featured section. Different visual treatment from project cards.

```
┌──────────────────────────────────────────────────────────────────┐
│  📄 RESEARCH                                       IEEE Access   │
│  ──────────────────────────────────────────────────────────────  │
│                                                                  │
│  Multimodal Depression Detection Using                           │
│  Facial Expression and Speech Analysis                           │
│                                                                  │
│  Mursalin Hawlader · Md. Shovon                                  │
│  Netrakona University · CSE                                      │
│  Status: Under Review → IEEE Access                              │
│                                                                  │
│  PIPELINE                                                        │
│  ┌────────────┐      ┌────────────┐      ┌──────────────────┐   │
│  │ Face Input │  +   │Audio Input │  ──► │ Fusion + Output  │   │
│  │ FER2013    │      │ DAIC-WOZ   │      │ Binary: Dep/No   │   │
│  │ OpenCV     │      │ Whisper    │      │ Bengali Focus    │   │
│  └────────────┘      └────────────┘      └──────────────────┘   │
│                                                                  │
│  [View on GitHub]    [Abstract]    [Cite (BibTeX)]               │
└──────────────────────────────────────────────────────────────────┘
```

**Stats row:**
```ts
const researchStats = [
  { label: "Modalities",     value: "2"              },
  { label: "Train Dataset",  value: "FER2013"        },
  { label: "Test Dataset",   value: "DAIC-WOZ"       },
  { label: "Target Journal", value: "IEEE Access"    },
  { label: "Focus Group",    value: "Bengali Speakers" },
]
```

---

### §6 ONLINE JUDGE STATS

**Handles (real — from GitHub profile):**
```ts
export const ojProfiles = {
  codeforces: {
    handle: "itzzmursalin",
    url: "https://codeforces.com/profile/itzzmursalin",
    apiUrl: "https://codeforces.com/api/user.info?handles=itzzmursalin"
    // Returns: rating, maxRating, rank, maxRank, solvedCount
  },
  leetcode: {
    handle: "mdmursalin",
    url: "https://leetcode.com/mdmursalin/",
    // LeetCode GraphQL (unofficial): https://leetcode-stats-api.herokuapp.com/mdmursalin
  },
  codechef: {
    handle: "shuoverflow202",
    url: "https://www.codechef.com/users/shuoverflow202"
  },
  hackerrank: {
    handle: "programmer_murs1",
    url: "https://www.hackerrank.com/programmer_murs1"
  },
  hackerearth: {
    handle: "mursalin-hawlader",
    url: "https://www.hackerearth.com/@mursalin-hawlader"
  },
  geeksforgeeks: {
    handle: "mursalin_hawlader",
    url: "https://auth.geeksforgeeks.org/user/mursalin_hawlader/"
  },
  topcoder: {
    handle: "itzzmursalin",
    url: "https://www.topcoder.com/members/itzzmursalin"
  }
}
```

**Live API fetch (Codeforces):**
```ts
// src/hooks/useCodeforcesStats.ts
const res = await fetch(
  'https://codeforces.com/api/user.info?handles=itzzmursalin'
)
const { result } = await res.json()
// result[0]: { rating, maxRating, rank, maxRank, solvedCount }
```

**LeetCode API:**
```ts
// Free unofficial API — no auth needed
const res = await fetch(
  'https://leetcode-stats-api.herokuapp.com/mdmursalin'
)
// Returns: totalSolved, easySolved, mediumSolved, hardSolved, ranking
```

**UI layout:**
```
┌────────────────────────────────────────────────────────────────┐
│  ⚡ COMPETITIVE PROGRAMMING                                    │
│                                                                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐        │
│  │  Codeforces  │  │   LeetCode   │  │   CodeChef   │        │
│  │ itzzmursalin │  │  mdmursalin  │  │shuoverflow202│        │
│  │              │  │              │  │              │        │
│  │ Rating: ████ │  │ Solved: ███  │  │ Stars: ████  │        │
│  │ Rank: ██████ │  │ Easy:   ██   │  │              │        │
│  │              │  │ Med:    ███  │  │              │        │
│  └──────────────┘  └──────────────┘  └──────────────┘        │
│                                                                │
│  Other Platforms:                                              │
│  [HackerRank ↗] [HackerEarth ↗] [GFG ↗] [TopCoder ↗]        │
│                                                                │
│  Topics: [DP] [Graph] [BFS/DFS] [Binary Search] [Greedy]     │
│          [Two Pointers] [Number Theory] [Segment Tree]         │
└────────────────────────────────────────────────────────────────┘
```

---

### §7 CONTACT

```
┌──────────────────────────┬──────────────────────────────────┐
│  Let's build             │                                  │
│  something together.     │  Name ________________________   │
│                          │                                  │
│  📧 [your email]         │  Email _______________________   │
│  💼 Upwork ↗             │                                  │
│  🐙 DevMursLab ↗         │  Message ______________________  │
│  💼 LinkedIn ↗           │          ______________________  │
│  📊 Kaggle ↗             │          ______________________  │
│                          │                                  │
│  Available for           │  [Send Message →]                │
│  freelance work.         │                                  │
│  Reply < 24h.            │                                  │
└──────────────────────────┴──────────────────────────────────┘
```

**Contact links:**
```ts
export const contactLinks = {
  email: "YOUR_EMAIL@gmail.com",                            // ← add
  github: "https://github.com/DevMursLab",
  linkedin: "https://www.linkedin.com/in/mursalin-shuvo/",
  upwork: "YOUR_UPWORK_PROFILE_URL",                        // ← add
  kaggle: "https://www.kaggle.com/mursalinshuvo",
  youtube: "https://www.youtube.com/@codewithmursalin",
}
```

---

## 4. COMPLETE FILE STRUCTURE

```
portfolio/
├── public/
│   ├── cv-mursalin.pdf                 ← export your CV here
│   ├── og-image.png                    ← 1200×630 social banner
│   └── favicon.ico
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx              ← sticky, scroll-aware, mobile hamburger
│   │   │   └── Footer.tsx
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero/
│   │   │   │   ├── Hero.tsx
│   │   │   │   └── TerminalAnimation.tsx   ← signature element
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects/
│   │   │   │   ├── Projects.tsx
│   │   │   │   ├── ProjectCard.tsx
│   │   │   │   └── ProjectFilter.tsx
│   │   │   ├── Research.tsx
│   │   │   ├── OJStats/
│   │   │   │   ├── OJStats.tsx
│   │   │   │   ├── CFCard.tsx          ← Codeforces live fetch
│   │   │   │   └── LCCard.tsx          ← LeetCode live fetch
│   │   │   └── Contact.tsx
│   │   │
│   │   └── ui/
│   │       ├── Badge.tsx
│   │       ├── Button.tsx
│   │       ├── SectionHeader.tsx
│   │       └── Tag.tsx                 ← tech stack pill
│   │
│   ├── data/
│   │   ├── projects.ts                 ← all 9 projects (see §4 above)
│   │   ├── skills.ts
│   │   ├── research.ts
│   │   └── ojProfiles.ts              ← all 7 OJ handles
│   │
│   ├── hooks/
│   │   ├── useTypingEffect.ts          ← terminal animation logic
│   │   ├── useScrollAnimation.ts       ← IntersectionObserver wrapper
│   │   ├── useCodeforcesStats.ts       ← live CF API fetch
│   │   └── useLeetcodeStats.ts         ← live LC API fetch
│   │
│   ├── types/
│   │   └── index.ts                    ← Project, Skill, OJProfile interfaces
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── index.html
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

---

## 5. COLOR SYSTEM

```css
/* src/index.css */
:root {
  --bg-void:       #0A0A0F;   /* hero + main bg */
  --bg-surface:    #111118;   /* section alternates */
  --bg-card:       #1A1A24;   /* project cards */
  --bg-card-hover: #1F1F2E;   /* card on hover */
  --bg-terminal:   #0D1117;   /* terminal window */

  --text-primary:  #E8F4FD;   /* main text */
  --text-secondary:#94A3B8;   /* muted */
  --text-muted:    #475569;   /* very muted */
  --text-code:     #7DD3FC;   /* terminal output */
  --text-cmd:      #86EFAC;   /* terminal command (green) */

  --accent-blue:   #3B82F6;   /* primary accent */
  --accent-indigo: #6366F1;   /* secondary */
  --accent-glow:   rgba(59,130,246,0.12);

  --border:        rgba(255,255,255,0.06);
  --border-hover:  rgba(59,130,246,0.4);

  --font-mono: 'JetBrains Mono', monospace;
  --font-sans: 'Inter', sans-serif;

  /* Status badge colors */
  --status-complete:     #10B981;   /* green */
  --status-in-progress:  #3B82F6;   /* blue */
  --status-submitted:    #8B5CF6;   /* purple */
  --status-architecture: #F59E0B;   /* yellow */
  --status-ongoing:      #6B7280;   /* gray */
}
```

---

## 6. NAVBAR SPEC

```ts
const navItems = [
  { label: "About",       href: "#about"    },
  { label: "Skills",      href: "#skills"   },
  { label: "Projects",    href: "#projects" },
  { label: "Research",    href: "#research" },
  { label: "OJ Stats",    href: "#oj"       },
  { label: "Contact",     href: "#contact"  },
]

// Right CTA: "Hire Me →" → links to #contact or Upwork profile
// Behavior: transparent on hero, solid (#111118 + blur) on scroll
// Mobile: hamburger → slide-down menu
```

---

## 7. ANIMATION SYSTEM

```ts
// Framer Motion reusable variants

export const fadeInUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export const staggerContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } }
}

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
}

// Skill bars
export const barGrow = (level: number) => ({
  hidden:  { width: 0 },
  visible: { width: `${level}%`, transition: { duration: 0.8, ease: 'easeOut' } }
})
```

---

## 8. TYPES

```ts
// src/types/index.ts

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
  level: number   // 0-100
  category: 'ai' | 'fullstack' | 'research'
}

export interface OJProfile {
  platform: string
  handle: string
  url: string
  stats?: Record<string, string | number>
}
```

---

## 9. SETUP & DEPLOY

```bash
# 1. Create project
npm create vite@latest portfolio -- --template react-ts
cd portfolio

# 2. Install dependencies
npm install framer-motion lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 3. Google Fonts (add to index.html <head>)
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">

# 4. tailwind.config.ts — add font family
extend: {
  fontFamily: {
    mono: ['JetBrains Mono', 'monospace'],
    sans: ['Inter', 'sans-serif'],
  }
}

# 5. Deploy
git init && git add . && git commit -m "init portfolio"
# → Push to GitHub (repo: portfolio or shuvo.dev)
# → Vercel: import repo → auto-detect Vite → Deploy
# → Every `git push` = auto redeploy
```

---

## 10. WHAT TO TELL CLAUDE IN VS CODE

When building each component, paste the section spec + this prompt:

**Hero Terminal:**
```
Build TerminalAnimation.tsx. Dark bg #0D1117. JetBrains Mono font.
macOS window chrome (3 colored dots + path text ~/DevMursLab main).
Typewriter effect 40ms/char. Commands in green (#86EFAC), 
output in light blue (#7DD3FC). Blinking cursor after last line.
Script array defined in terminalScript. TypeScript + Framer Motion.
```

**Project Cards:**
```
Build ProjectCard.tsx using the Project interface from types/index.ts.
Dark card bg #1A1A24. Hover: border glow rgba(59,130,246,0.4).
Top row: highlight badge (left) + status badge (right).
Tech stack pills below description. GitHub/Live links with lucide icons.
Framer Motion scaleIn animation on scroll entry.
```

**OJ Stats:**
```
Build OJStats.tsx. Fetch Codeforces data from:
https://codeforces.com/api/user.info?handles=itzzmursalin
Fetch LeetCode data from:
https://leetcode-stats-api.herokuapp.com/mdmursalin
Show rating, rank, solved count. Loading skeleton while fetching.
Error fallback to static placeholder. Dark card theme.
```

**Skills:**
```
Build Skills.tsx. Three column grid: AI/ML, Full-Stack, Research.
Animated progress bars with Framer Motion (width 0 → level%).
Trigger animation on scroll with IntersectionObserver.
Skill data imported from src/data/skills.ts.
```

---

## 11. SEO

```html
<!-- index.html <head> -->
<title>Mursalin Hawlader — AI Engineer & Full-Stack Developer</title>
<meta name="description" content="AI Engineer and CS researcher from Bangladesh. 
  Specializing in conversational AI, ML systems, and full-stack development. 
  Freelancing on Upwork · IEEE research · Competitive programmer.">
<meta property="og:title" content="Mursalin Hawlader — AI Engineer">
<meta property="og:description" content="Building AI systems that think.">
<meta property="og:image" content="/og-image.png">
<meta property="og:url" content="https://YOUR_DOMAIN.vercel.app">
<meta name="twitter:card" content="summary_large_image">
```

---

## 12. TODO BEFORE GO-LIVE

- [ ] Add email in `contactLinks.email`
- [ ] Add Upwork profile URL in `contactLinks.upwork`
- [ ] Upload CV as `public/cv-mursalin.pdf`
- [ ] Verify/create GitHub repos for all projects and update links in `projects.ts`
- [ ] Create OG image 1200×630px (use Figma or Canva)
- [ ] Test mobile (Chrome DevTools → iPhone 12 Pro)
- [ ] Check all external links open correctly
- [ ] Verify Codeforces + LeetCode API responses with console.log
- [ ] Git push → Vercel → confirm live URL

---

## 13. LATER ADDITIONS (don't build now)

```
→ Blog (MDX + Vercel — add when you have content)
→ GitHub contribution graph (use github-readme-stats API)
→ Upwork reviews embed (add after first 5★ reviews)
→ Project demo videos (Loom embed)
→ Light/dark mode toggle
→ Certificate section (when you earn relevant certs)
```

---

*Single source of truth. Build section by section.*  
*Start: Hero → Navbar → About → Projects → OJ Stats → Research → Contact*  
*All handles and real data already filled in — just build.*
