import { profile } from '../data/profile'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons'

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="glow pointer-events-none absolute inset-0" aria-hidden="true" />
          <p className="relative font-mono text-xs font-medium uppercase tracking-[0.25em] text-accent">Contact</p>
          <h2 className="relative mt-3 text-3xl font-bold tracking-tight text-heading sm:text-4xl">Let&apos;s build something.</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-muted sm:text-lg">
            I am looking for software engineering and data engineering roles. If you are hiring, or just want to talk about pipelines, detectors, or desktop apps, my inbox is open.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg transition-colors hover:bg-accent-dim"
            >
              <MailIcon className="h-4 w-4" />
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-2 px-6 py-3 text-sm font-semibold text-heading transition-colors hover:border-accent/50"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface-2 px-6 py-3 text-sm font-semibold text-heading transition-colors hover:border-accent/50"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
