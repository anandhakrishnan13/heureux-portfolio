import data from "@/data/index.json";

const contact = data.sections.contact;
const experience = data.experience;

export function ResumeDocument({ className = "" }: { className?: string }) {
  return (
    <article className={`resume-doc ${className}`}>
      <header className="border-b border-neutral-300 pb-4">
        <h1 className="text-3xl font-bold tracking-tight">{data.hero.name}</h1>
        <p className="mt-1 text-sm font-medium text-neutral-700">{data.hero.role}</p>
        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-neutral-600">
          <li>
            <a href={`mailto:${contact.email}`} className="hover:text-neutral-900 hover:underline">
              {contact.email}
            </a>
          </li>
          <li>
            <a href={contact.phoneHref} className="hover:text-neutral-900 hover:underline">
              {contact.phoneLabel}
            </a>
          </li>
          <li>
            <a
              href={contact.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-900 hover:underline"
            >
              {contact.linkedinLabel}
            </a>
          </li>
          <li>
            <a
              href={contact.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-900 hover:underline"
            >
              {contact.githubLabel}
            </a>
          </li>
          <li>{experience.location}</li>
        </ul>
      </header>

      <Block title="Summary">
        <p className="text-[13px] leading-relaxed text-neutral-700">{data.hero.bio}</p>
      </Block>

      <Block title="Experience">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4">
          <h3 className="text-[15px] font-semibold">
            {experience.company}
            <span className="font-normal text-neutral-600"> — {experience.role}</span>
          </h3>
          <span className="text-xs text-neutral-500">{experience.period}</span>
        </div>
        <div className="mt-3 space-y-4">
          {Object.entries(experience.projects).map(([name, project]) => (
            <div key={name} className="break-inside-avoid">
              <div className="flex flex-wrap items-baseline gap-x-2">
                <h4 className="text-[13px] font-semibold">{name}</h4>
                <span className="text-[11px] text-neutral-500">{project.stack.join(" · ")}</span>
              </div>
              <ul className="mt-1.5 space-y-1">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-1.5 text-[12.5px] leading-relaxed text-neutral-700"
                  >
                    <span aria-hidden="true" className="mt-[7px] size-1 shrink-0 bg-neutral-400" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Block>

      <Block title="Projects">
        <div className="space-y-3">
          {data.projects.map((project) => (
            <div key={project.id} className="break-inside-avoid">
              <div className="flex flex-wrap items-baseline gap-x-2">
                <h3 className="text-[13px] font-semibold">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-neutral-900 hover:underline"
                  >
                    {project.name}
                  </a>
                </h3>
                <span className="text-[11px] text-neutral-500">{project.stack.join(" · ")}</span>
              </div>
              <p className="mt-1 text-[12.5px] leading-relaxed text-neutral-700">
                {project.action}
              </p>
            </div>
          ))}
        </div>
      </Block>

      <Block title="Skills">
        <dl className="space-y-1.5">
          {Object.entries(data.stack).map(([layer, skills]) => (
            <div key={layer} className="flex gap-2 text-[12.5px] leading-relaxed">
              <dt className="w-24 shrink-0 font-medium text-neutral-500">{layer}</dt>
              <dd className="text-neutral-700">{Object.keys(skills).join(", ")}</dd>
            </div>
          ))}
        </dl>
      </Block>

      <Block title="Education">
        <div className="space-y-2">
          {data.education.map((entry) => (
            <div key={entry.school} className="break-inside-avoid">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-[13px] font-semibold">{entry.school}</h3>
                <span className="text-xs text-neutral-500">{entry.period}</span>
              </div>
              <p className="text-[12.5px] text-neutral-700">
                {entry.degree} · {entry.score} · {entry.location}
              </p>
            </div>
          ))}
        </div>
      </Block>

      <Block title="Volunteer">
        <div className="space-y-3">
          {data.volunteer.map((entry) => (
            <div key={entry.organization} className="break-inside-avoid">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-[13px] font-semibold">
                  {entry.organization}
                  <span className="font-normal text-neutral-600"> — {entry.role}</span>
                </h3>
                <span className="text-xs text-neutral-500">{entry.period}</span>
              </div>
              <ul className="mt-1.5 space-y-1">
                {entry.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-1.5 text-[12.5px] leading-relaxed text-neutral-700"
                  >
                    <span aria-hidden="true" className="mt-[7px] size-1 shrink-0 bg-neutral-400" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Block>
    </article>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-5">
      <h2 className="border-b border-neutral-200 pb-1 text-[11px] font-semibold tracking-[0.14em] text-neutral-500 uppercase">
        {title}
      </h2>
      <div className="mt-2.5">{children}</div>
    </section>
  );
}
