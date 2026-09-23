import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-sm text-muted sm:flex-row sm:px-6">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs">Built with React, TypeScript, and Tailwind CSS</p>
      </div>
    </footer>
  )
}
