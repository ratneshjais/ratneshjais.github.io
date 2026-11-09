import { caseStudies, education, experience, profile, skills, stats } from "@/content/profile";

function SectionTitle({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-24 font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
      {children}
    </h2>
  );
}

const pill =
  "rounded-full border border-line px-5 py-2.5 text-sm font-medium transition hover:border-ink-faint";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-line bg-bg/80 backdrop-blur">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#top" className="font-semibold tracking-tight">
            {profile.name}
          </a>
          <div className="flex items-center gap-4 text-sm text-ink-muted sm:gap-6">
            <a href="#work" className="hidden hover:text-ink sm:inline">Work</a>
            <a href="#skills" className="hidden hover:text-ink sm:inline">Skills</a>
            <a href="#experience" className="hidden hover:text-ink sm:inline">Experience</a>
            <a
              href={profile.resume}
              className="rounded-full bg-ink px-4 py-1.5 font-medium text-bg transition hover:opacity-85"
            >
              Resume
            </a>
          </div>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-4xl px-4 sm:px-6">
        <section className="py-16 sm:py-24">
          <p className="font-mono text-sm text-accent">{profile.role}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            I build web platforms and the automation that keeps them running.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted text-pretty">{profile.intro}</p>
          <p className="mt-4 text-sm text-ink-faint">{profile.location}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg transition hover:opacity-90"
            >
              Get in touch
            </a>
            <a href={profile.resume} className={pill}>Download resume (PDF)</a>
            <a href={profile.github} className={pill}>GitHub</a>
            <a href={profile.linkedin} className={pill}>LinkedIn</a>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse bg-surface p-5">
                <dt className="mt-1 text-xs leading-snug text-ink-muted">{s.label}</dt>
                <dd className="text-2xl font-semibold tracking-tight">{s.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="border-t border-line py-16">
          <SectionTitle id="work">Selected work</SectionTitle>
          <p className="mt-3 max-w-2xl text-sm text-ink-muted">
            Client and product names are left out on purpose. Happy to go deeper in conversation.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {caseStudies.map((c) => (
              <article key={c.title} className="flex flex-col rounded-2xl border border-line bg-surface p-6">
                <h3 className="text-lg font-semibold tracking-tight">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{c.summary}</p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed">
                  {c.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <ul className="mt-auto flex flex-wrap gap-1.5 pt-5" aria-label="Stack">
                  {c.stack.map((t) => (
                    <li key={t} className="rounded-full bg-accent-soft px-2.5 py-1 font-mono text-[11px] text-accent">
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-line py-16">
          <SectionTitle id="skills">Skills</SectionTitle>
          <dl className="mt-8 divide-y divide-line">
            {skills.map((g) => (
              <div key={g.group} className="grid gap-2 py-4 sm:grid-cols-[200px_1fr]">
                <dt className="text-sm font-medium">{g.group}</dt>
                <dd className="flex flex-wrap gap-1.5">
                  {g.items.map((i) => (
                    <span key={i} className="rounded-md border border-line px-2 py-0.5 text-sm text-ink-muted">
                      {i}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="border-t border-line py-16">
          <SectionTitle id="experience">Experience</SectionTitle>
          <ol className="mt-8 space-y-6">
            {experience.map((e) => (
              <li key={e.company} className="grid gap-1 sm:grid-cols-[200px_1fr]">
                <span className="font-mono text-sm text-ink-faint">{e.period}</span>
                <div>
                  <p className="font-medium">
                    {e.role} · <span className="text-ink-muted">{e.company}</span>
                  </p>
                  <p className="text-sm text-ink-faint">{e.place}</p>
                </div>
              </li>
            ))}
          </ol>

          <h3 className="mt-12 font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">Education</h3>
          <ul className="mt-6 space-y-4">
            {education.map((e) => (
              <li key={e.degree} className="grid gap-1 sm:grid-cols-[200px_1fr]">
                <span className="font-mono text-sm text-ink-faint">{e.period}</span>
                <div>
                  <p className="font-medium">{e.degree}</p>
                  <p className="text-sm text-ink-muted">{e.school}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-line py-20 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Let&apos;s talk.</h2>
          <p className="mx-auto mt-4 max-w-md text-ink-muted">
            Want to work together? The quickest way to reach me is email.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-block rounded-full bg-accent px-6 py-3 font-medium text-bg transition hover:opacity-90"
          >
            {profile.email}
          </a>
        </section>
      </main>

      <footer className="border-t border-line py-8 text-center text-xs text-ink-faint">
        © {profile.name}
      </footer>
    </>
  );
}
