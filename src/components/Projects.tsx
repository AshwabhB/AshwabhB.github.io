import { useState } from 'react'
import { featuredProjects, otherProjects, type Category, type Project } from '../data/projects'
import { ExternalIcon, GitHubIcon } from './Icons'
import { Chip, Section } from './Section'

const categories: Array<'All' | Category> = ['All', 'Data Engineering', 'Backend & Cloud', 'Full-stack', 'Machine Learning', 'Desktop Apps', 'Tools']

function ProjectMedia({ project }: { project: Project }) {
  if (project.video) {
    return (
      <video
        className="block h-auto w-full"
        src={project.video}
        poster={project.poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={project.imageAlt ?? `${project.name} demo`}
      />
    )
  }
  if (project.image) {
    return <img className="h-full w-full object-cover object-top" src={project.image} alt={project.imageAlt ?? project.name} />
  }
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-surface-2 to-bg">
      <span className="font-mono text-4xl font-bold text-accent/40">{project.name.slice(0, 2)}</span>
    </div>
  )
}

function Links({ project, compact = false }: { project: Project; compact?: boolean }) {
  const base = compact
    ? 'inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-heading'
    : 'inline-flex items-center gap-2 rounded-full border border-line bg-surface-2 px-4 py-2 text-sm font-semibold text-heading transition-colors hover:border-accent/50'
  return (
    <div className={`flex flex-wrap items-center ${compact ? 'gap-4' : 'gap-3'}`}>
      {project.github ? (
        <a href={project.github} target="_blank" rel="noreferrer" className={base}>
          <GitHubIcon className="h-4 w-4" />
          Source
        </a>
      ) : null}
      {project.live ? (
        <a href={project.live} target="_blank" rel="noreferrer" className={base}>
          <ExternalIcon />
          Live site
        </a>
      ) : null}
      {!project.github && !project.live ? <span className="text-xs text-muted">Private repository</span> : null}
    </div>
  )
}

function Pipeline({ project }: { project: Project }) {
  if (!project.pipeline) return null
  return (
    <p className="mt-3 font-mono text-xs leading-relaxed text-muted">
      <span className="mr-2 font-semibold text-accent/80">{project.pipeline.label}</span>
      {project.pipeline.steps.map((step, i) => (
        <span key={step}>
          {i > 0 ? <span className="mx-1.5 text-muted/60" aria-hidden="true">&rarr;</span> : null}
          {i > 0 ? <span className="sr-only">then </span> : null}
          {step}
        </span>
      ))}
    </p>
  )
}

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1
  return (
    <article className="grid overflow-hidden rounded-3xl border border-line bg-surface lg:grid-cols-2">
      <div className={`flex items-center border-line bg-bg ${flip ? 'lg:order-2 lg:border-l' : 'lg:border-r'}`}>
        <div className={`relative w-full overflow-hidden ${project.video ? '' : 'aspect-[16/10]'}`}>
          <ProjectMedia project={project} />
        </div>
      </div>
      <div className={`flex flex-col p-6 sm:p-8 ${flip ? 'lg:order-1' : ''}`}>
        <div className="flex flex-wrap items-center gap-2">
          <Chip tone="accent">{project.category}</Chip>
          {project.role ? <Chip tone="amber">{project.role}</Chip> : null}
          {project.status ? <Chip>{project.status}</Chip> : null}
          <span className="ml-auto font-mono text-xs text-muted">{project.period}</span>
        </div>
        <h3 className="mt-4 text-2xl font-bold text-heading">{project.name}</h3>
        <p className="mt-1 text-base font-medium text-accent">{project.tagline}</p>
        <Pipeline project={project} />
        <p className="mt-4 text-sm leading-relaxed text-text sm:text-base">{project.description}</p>
        {project.highlights.length ? (
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-text">
            {project.highlights.map((h) => (
              <li key={h.slice(0, 30)} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        ) : null}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>
        <div className="mt-6 pt-2">
          <Links project={project} />
        </div>
      </div>
    </article>
  )
}

function SmallCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/40">
      <div className="flex items-center justify-between gap-3">
        <Chip tone="accent">{project.category}</Chip>
        <span className="font-mono text-xs text-muted">{project.period}</span>
      </div>
      <h3 className="mt-4 text-lg font-bold text-heading">{project.name}</h3>
      <p className="mt-1 text-sm font-medium text-accent">{project.tagline}</p>
      <Pipeline project={project} />
      <p className="mt-3 flex-1 text-sm leading-relaxed text-text">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
      </div>
      <div className="mt-5">
        <Links project={project} compact />
      </div>
    </article>
  )
}

export function Projects() {
  const [filter, setFilter] = useState<'All' | Category>('All')
  const featured = filter === 'All' ? featuredProjects : featuredProjects.filter((p) => p.category === filter)
  const others = filter === 'All' ? otherProjects : otherProjects.filter((p) => p.category === filter)

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I have built"
      intro="A mix of production-style data platforms, cloud backends, ML research, and desktop tools. Filter by area or scroll through."
    >
      <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setFilter(c)}
            aria-pressed={filter === c}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              filter === c ? 'border-accent bg-accent text-bg' : 'border-line bg-surface text-muted hover:border-accent/50 hover:text-heading'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {featured.length ? (
        <div className="space-y-8">
          {featured.map((p, i) => (
            <FeaturedCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      ) : null}

      {others.length ? (
        <>
          <h3 className="mt-16 mb-6 text-xl font-bold text-heading">More projects</h3>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {others.map((p) => (
              <SmallCard key={p.slug} project={p} />
            ))}
          </div>
        </>
      ) : null}

      {!featured.length && !others.length ? <p className="text-muted">Nothing in this category yet.</p> : null}
    </Section>
  )
}
