import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { GitHubIcon, LinkedInIcon, MediumIcon } from './Icons'
import { ThemeToggle } from './ThemeToggle'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#writing', label: 'Writing' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open ? 'border-b border-line bg-bg/85 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6" aria-label="Primary">
        <a href="#top" className="flex items-center gap-2 font-semibold text-heading">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15 font-mono text-sm font-bold text-accent">
            AB
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-7 text-sm font-medium text-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-heading">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle className="mr-1" />
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted transition-colors hover:text-heading">
            <GitHubIcon />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted transition-colors hover:text-heading">
            <LinkedInIcon />
          </a>
          <a href={profile.medium} target="_blank" rel="noreferrer" aria-label="Medium" className="text-muted transition-colors hover:text-heading">
            <MediumIcon />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="ml-2 rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-bg transition-colors hover:bg-accent-dim"
          >
            Get in touch
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
        <ThemeToggle />
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-heading"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
        </div>
      </nav>

      {open ? (
        <div id="mobile-menu" className="border-t border-line px-4 pb-5 pt-3 md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-text hover:bg-surface"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center gap-3 px-3">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted">
              <GitHubIcon />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted">
              <LinkedInIcon />
            </a>
            <a href={profile.medium} target="_blank" rel="noreferrer" aria-label="Medium" className="text-muted">
              <MediumIcon />
            </a>
            <a href={`mailto:${profile.email}`} className="ml-auto rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-bg">
              Get in touch
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}
