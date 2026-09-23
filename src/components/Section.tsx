import type { ReactNode } from 'react'

type Props = {
  id: string
  eyebrow: string
  title: string
  intro?: string
  children: ReactNode
  className?: string
}

export function Section({ id, eyebrow, title, intro, children, className = '' }: Props) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-accent">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-heading sm:text-4xl">{title}</h2>
          {intro ? <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{intro}</p> : null}
        </div>
        {children}
      </div>
    </section>
  )
}

export function Chip({ children, tone = 'default' }: { children: ReactNode; tone?: 'default' | 'accent' | 'amber' }) {
  const tones = {
    default: 'border-line bg-surface-2 text-text',
    accent: 'border-accent/30 bg-accent/10 text-accent',
    amber: 'border-amber/30 bg-amber/10 text-amber',
  }
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${tones[tone]}`}>
      {children}
    </span>
  )
}
