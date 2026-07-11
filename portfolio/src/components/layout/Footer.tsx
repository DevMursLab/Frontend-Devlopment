import { contactLinks } from '../../data/ojProfiles'

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-bg-void px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-sm text-text-muted">
        <span>© {new Date().getFullYear()} Mursalin Hawlader · DevMursLab</span>
        <div className="flex gap-5">
          <a href={contactLinks.github} target="_blank" rel="noreferrer" className="hover:text-text-secondary">
            GitHub
          </a>
          <a href={contactLinks.linkedin} target="_blank" rel="noreferrer" className="hover:text-text-secondary">
            LinkedIn
          </a>
          <a href={contactLinks.kaggle} target="_blank" rel="noreferrer" className="hover:text-text-secondary">
            Kaggle
          </a>
        </div>
      </div>
    </footer>
  )
}
