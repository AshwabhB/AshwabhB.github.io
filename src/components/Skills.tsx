import { education, skillGroups } from '../data/profile'
import { Chip, Section } from './Section'

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills & Education" title="Tools I reach for">
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((g) => (
          <div key={g.name} className="rounded-2xl border border-line bg-surface p-6">
            <h3 className="text-base font-bold text-heading">{g.name}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>
          </div>
        ))}

        <div className="rounded-2xl border border-accent/30 bg-surface p-6 md:col-span-2">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-base font-bold text-heading">{education.school}</h3>
            <p className="font-mono text-xs text-muted">{education.period}</p>
          </div>
          <p className="mt-1 text-accent">
            {education.degree} <span className="text-muted">|</span> {education.gpa}
          </p>
          <p className="mt-4 text-sm text-muted">Relevant coursework</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {education.coursework.map((c) => (
              <Chip key={c}>{c}</Chip>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
