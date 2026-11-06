import data from "@/data/index.json";

const contact = data.sections.contact;
const experience = data.experience;

const contactLinks = [
  { label: contact.email, href: `mailto:${contact.email}` },
  { label: contact.phoneLabel, href: contact.phoneHref },
  { label: contact.linkedinLabel, href: contact.linkedinUrl, external: true },
  { label: contact.githubLabel, href: contact.githubUrl, external: true },
  { label: experience.location, href: null },
];

export function ResumeDocument({ className = "" }: { className?: string }) {
  return (
    <article className={`resume-doc text-[13px] leading-[1.65] text-neutral-700 ${className}`}>
      <header>
        <h1 className="text-[27px] leading-tight font-bold tracking-tight text-neutral-900">
          {data.hero.name}
        </h1>
        <p className="mt-1 text-[13px] font-medium text-neutral-600">{data.hero.role}</p>
        <ul className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11.5px] text-neutral-500">
          {contactLinks.map((item) => (
            <li key={item.label}>
              {item.href ? (
                <a
                  href={item.href}
                  {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="transition-colors hover:text-neutral-900 hover:underline"
                >
                  {item.label}
                </a>
              ) : (
                <span>{item.label}</span>
              )}
            </li>
          ))}
        </ul>
      </header>

      <Block title="Summary">
        <p className="text-[12.5px] leading-[1.7] text-neutral-700">{data.hero.bio}</p>
      </Block>

      <Block title="Experience">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-[14px] font-semibold text-neutral-900">
            {experience.company}
            <span className="font-normal text-neutral-600"> — {experience.role}</span>
          </h3>
          <span className="ml-auto text-[11.5px] whitespace-nowrap text-neutral-500">
            {experience.period}
          </span>
        </div>

        <div className="mt-4 space-y-5">
          {Object.entries(experience.projects).map(([name, project]) => (
            <div key={name} className="break-inside-avoid">
              <h4 className="text-[12.5px] font-semibold text-neutral-900">{name}</h4>
              <p className="mt-0.5 text-[11px] text-neutral-500">{project.stack.join(" · ")}</p>
              <ul className="mt-2 list-disc space-y-1.5 pl-4 marker:text-neutral-300">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="text-[12.5px] leading-[1.65]">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Block>

      <Block title="Projects">
        <div className="space-y-4">
          {data.projects.map((project) => (
            <div key={project.id} className="break-inside-avoid">
              <h3 className="text-[12.5px] font-semibold text-neutral-900">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:underline"
                >
                  {project.name}
                </a>
              </h3>
              <p className="mt-0.5 text-[11px] text-neutral-500">{project.stack.join(" · ")}</p>
              <p className="mt-1.5 text-[12.5px] leading-[1.65]">{project.action}</p>
            </div>
          ))}
        </div>
      </Block>

      <Block title="Skills">
        <dl className="grid grid-cols-[5.5rem_1fr] gap-x-4 gap-y-2 text-[12.5px] leading-[1.6]">
          {Object.entries(data.stack).map(([layer, skills]) => (
            <div key={layer} className="col-span-2 grid grid-cols-subgrid">
              <dt className="font-medium text-neutral-500">{layer}</dt>
              <dd>{Object.keys(skills).join(", ")}</dd>
            </div>
          ))}
        </dl>
      </Block>

      <Block title="Education">
        <div className="space-y-3.5">
          {data.education.map((entry) => (
            <div key={entry.school} className="break-inside-avoid">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-[12.5px] font-semibold text-neutral-900">{entry.school}</h3>
                <span className="ml-auto text-[11.5px] whitespace-nowrap text-neutral-500">
                  {entry.period}
                </span>
              </div>
              <p className="mt-0.5 text-[12px] text-neutral-600">
                {entry.degree} · {entry.score} · {entry.location}
              </p>
            </div>
          ))}
        </div>
      </Block>

      <Block title="Volunteer">
        <div className="space-y-4">
          {data.volunteer.map((entry) => (
            <div key={entry.organization} className="break-inside-avoid">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-[12.5px] font-semibold text-neutral-900">
                  {entry.organization}
                  <span className="font-normal text-neutral-600"> — {entry.role}</span>
                </h3>
                <span className="ml-auto text-[11.5px] whitespace-nowrap text-neutral-500">
                  {entry.period}
                </span>
              </div>
              <ul className="mt-2 list-disc space-y-1.5 pl-4 marker:text-neutral-300">
                {entry.highlights.map((highlight) => (
                  <li key={highlight} className="text-[12.5px] leading-[1.65]">
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
    <section className="mt-7 first:mt-6">
      <h2 className="mb-3 border-b border-neutral-200 pb-1.5 text-[10px] font-semibold tracking-[0.16em] text-neutral-400 uppercase">
        {title}
      </h2>
      {children}
    </section>
  );
}
