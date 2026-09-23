import { profile } from '../data/profile'
import { Section } from './Section'

const stats = [
  { value: '3+', label: 'years building pipelines, software, and automation in production' },
  { value: '20+', label: 'projects across data, ML, cloud, and desktop' },
  { value: 'MS CS', label: 'San Jose State University, 2026' },
]

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Software and data engineer. Builder by habit.">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-base leading-relaxed text-text sm:text-lg">
          {profile.about.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {stats.map((s) => (
            <li key={s.label} className="rounded-2xl border border-line bg-surface p-5">
              <p className="text-3xl font-extrabold text-accent">{s.value}</p>
              <p className="mt-1 text-sm text-muted">{s.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
