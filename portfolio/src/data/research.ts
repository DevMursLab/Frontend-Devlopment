export type ResearchStatus = 'Editor assigned' | 'Under peer review' | 'With editor' | 'Major revision submitted' | 'B.Sc. thesis'

export interface ResearchWork {
  title: string
  status: ResearchStatus
  venue: string
  contribution: string
  evidence: string
  github?: string
}

export const researchStats = [
  { label: 'Research works', value: '7' },
  { label: 'Best AUC', value: '0.984' },
  { label: 'Training runs', value: '35' },
  { label: 'Verified references', value: '230' },
]

export const researchWorks: ResearchWork[] = [
  { title: 'Feature-Level Confidence-Gated Fusion of Face and Fingerprint for Attendance Verification', status: 'Editor assigned', venue: 'SN Computer Science · SNCS-D-26-06174', contribution: 'Reproducible biometric-fusion benchmark under systematic degradation.', evidence: '0.984 AUC across LFW, SOCOFing and FVC2002/2004; compared with 0.758 face-only and 0.962 fingerprint-only baselines.', github: 'https://github.com/DevMursLab/Deep-Learning_thesis_Multimodal-Attendance-System' },
  { title: 'Explainable Artificial Intelligence in Healthcare: A Comprehensive Review', status: 'Editor assigned', venue: 'SN Computer Science · SNCS-D-26-06324', contribution: 'Comprehensive review of methods, clinical applications, challenges and future directions in healthcare XAI.', evidence: 'Synthesizes explainability practices for reliable, interpretable medical AI.' },
  { title: 'Standardizing Agentic AI: A PRISMA-Based Systematic Review through the Lens of MCP', status: 'Major revision submitted', venue: 'Systematic review manuscript', contribution: 'Maps interoperability, memory and multi-agent coordination in agentic AI systems.', evidence: 'PRISMA workflow: 472 records screened and 230 references verified.' },
  { title: 'CLEAR-Papaya: Leakage-Audited, Calibration-Aware Papaya Leaf Disease Recognition', status: 'With editor', venue: 'Research manuscript', contribution: 'Edge-deployable disease-recognition framework designed for field-realistic distribution shift.', evidence: 'Centers leakage auditing and calibrated predictions rather than headline accuracy alone.' },
  { title: 'A Systematic Validity Audit of Tri-Modal Depression Detection on DAIC-WOZ', status: 'Under peer review', venue: 'B.Sc. thesis manuscript', contribution: 'Audits facial, audio and text fusion for sentinel artifacts, interviewer shortcuts and cross-corpus transfer.', evidence: '9 research phases, 35 training runs, modality ablations, fairness audit and explainability analysis.' },
  { title: 'The Geographic Generalisation Gap in Retinal Foundation Models Is an Imaging-Acquisition Gap', status: 'Under peer review', venue: 'Research manuscript', contribution: 'Separates imaging-device effects from population effects in retinal-model geographic generalisation.', evidence: 'Device-versus-population decomposition evaluated across five countries.' },
  { title: 'Tight Information Hierarchies for Reference-Label Model Selection', status: 'Under peer review', venue: 'Research manuscript · Co-author (2nd of 5)', contribution: 'Studies how released model-comparison tables expose reference-label sensitivity.', evidence: 'Exact worst-case bound validated through 1,080 synthetic and 10 OpenML audits.' },
]
