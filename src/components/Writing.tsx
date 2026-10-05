import { articles } from '../data/articles'
import { profile } from '../data/profile'
import { ExternalIcon, MediumIcon } from './Icons'
import { Section } from './Section'

export function Writing() {
  return (
    <Section
      id="writing"
      eyebrow="Writing"
      title="Articles on Medium"
      intro="Notes on data pipelines, security, and applied AI."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((a) => (
          <article key={a.url} className="flex flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/40">
            <span className="font-mono text-xs text-muted">{a.date}</span>
            <h3 className="mt-3 text-lg font-bold leading-snug text-heading">{a.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-text">{a.summary}</p>
            <a
              href={a.url}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-accent transition-colors hover:text-accent-dim"
            >
              Read on Medium
              <ExternalIcon />
            </a>
          </article>
        ))}
      </div>
      <a
        href={profile.medium}
        target="_blank"
        rel="noreferrer"
        className="mt-10 inline-flex items-center gap-2 rounded-full border border-line bg-surface-2 px-5 py-2.5 text-sm font-semibold text-heading transition-colors hover:border-accent/50"
      >
        <MediumIcon className="h-4 w-4" />
        More on Medium
      </a>
    </Section>
  )
}
