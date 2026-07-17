import { useTypingEffect, type ScriptLine } from '../../../hooks/useTypingEffect'

const terminalScript: ScriptLine[] = [
  { type: 'cmd', text: 'whoami' },
  { type: 'out', text: 'Mursalin Hawlader — AI Engineer & CS Researcher' },
  { type: 'cmd', text: 'cat current_focus.txt' },
  { type: 'out', text: 'DocMind AI: Enterprise RAG platform' },
  { type: 'out', text: 'Systematic review: Agentic AI & MCP standardization' },
  { type: 'out', text: 'Thesis: multimodal biometric fusion (0.984 AUC)' },
  { type: 'cmd', text: './hire_me.sh' },
  { type: 'cursor' },
]

export function TerminalAnimation() {
  const { lines, showCursor } = useTypingEffect(terminalScript)

  return (
    <div className="w-full max-w-2xl rounded-xl overflow-hidden border border-white/10 bg-bg-terminal shadow-[0_0_60px_rgba(59,130,246,0.08)]">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
        <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
        <span className="w-3 h-3 rounded-full bg-[#28CA41]" />
        <span className="ml-3 font-mono text-xs text-text-muted">~/DevMursLab main</span>
      </div>

      <div className="p-5 font-mono text-sm min-h-[260px]">
        {lines.map((line, i) => (
          <div key={i} className="mb-2 leading-relaxed">
            {line.type === 'cmd' ? (
              <span>
                <span className="text-text-cmd">$</span>{' '}
                <span className="text-text-cmd">{line.text}</span>
              </span>
            ) : (
              <span className="text-text-code">▶ {line.text}</span>
            )}
          </div>
        ))}
        {showCursor && (
          <span className="inline-block w-2 h-4 bg-accent-blue animate-pulse align-middle" />
        )}
      </div>
    </div>
  )
}
