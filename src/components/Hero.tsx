import { profile } from '../data/profile'
import { ArrowDownIcon, GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon } from './Icons'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="glow pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl text-center lg:text-left">
          <p className="fade-up inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {profile.availability}
          </p>

          <h1 className="fade-up fade-up-1 mt-6 text-4xl font-extrabold tracking-tight text-heading sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="fade-up fade-up-1 mt-3 text-xl font-semibold text-accent sm:text-2xl">{profile.title}</p>

          <p className="fade-up fade-up-2 mt-6 text-base leading-relaxed text-muted sm:text-lg">{profile.intro}</p>

          <p className="fade-up fade-up-2 mt-4 inline-flex items-center gap-1.5 text-sm text-muted">
            <MapPinIcon />
            {profile.location}
          </p>

          <div className="fade-up fade-up-3 mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-colors hover:bg-accent-dim"
            >
              View projects
              <ArrowDownIcon />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-heading transition-colors hover:border-accent/50"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-heading transition-colors hover:border-accent/50"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-heading transition-colors hover:border-accent/50"
            >
              <MailIcon className="h-4 w-4" />
              Email
            </a>
          </div>
        </div>

        <div className="fade-up relative shrink-0">
          <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-accent/40 via-transparent to-amber/40 blur-2xl" aria-hidden="true" />
          <img
            src={profile.avatar}
            alt={`Portrait of ${profile.name}`}
            width={288}
            height={288}
            className="relative h-48 w-48 rounded-full border-4 border-surface object-cover shadow-2xl sm:h-64 sm:w-64 lg:h-72 lg:w-72"
          />
        </div>
      </div>
    </section>
  )
}
