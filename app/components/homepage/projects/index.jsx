import Section from "../section";
import Flow from "./flow";

function Projects({ caseStudies, openSource }) {
  return (
    <Section id="work" title="Selected work" description="Recent builds, internal tools and scoping work.">
      <div className="divide-y divide-line">
        {caseStudies.map((study) => (
          <article key={study.id} aria-labelledby={`${study.id}-title`} className="py-12 first:pt-0">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 id={`${study.id}-title`} className="text-xl font-medium tracking-tight">
                {study.name}
              </h3>
              <p className="flex items-center gap-2 text-sm text-ink-3">
                {study.active && <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />}
                {study.kind}
              </p>
            </div>
            <p className="mt-3 max-w-[62ch] text-ink-2">{study.summary}</p>

            <div className="mt-7">
              <Flow steps={study.flow} caption={study.caption} />
            </div>

            {study.points && (
              <ul className="bullets mt-7 max-w-[62ch] text-[15px] text-ink-2">
                {study.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
            <p className="mt-6 font-mono text-[13px] text-ink-3">{study.stack.join(" · ")}</p>
          </article>
        ))}

        <div className="pt-12">
          <h3 className="text-lg font-medium">Open source</h3>
          <p className="mt-1 text-[15px] text-ink-2">Starters and small apps on GitHub.</p>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {openSource.map((project) => (
              <li key={project.name} className="grid gap-x-6 gap-y-1 py-4 sm:grid-cols-[13rem_1fr_auto]">
                <p className="font-medium">{project.name}</p>
                <p className="text-[15px] text-ink-2">{project.description}</p>
                <p className="flex gap-4 text-sm">
                  <a href={project.code} target="_blank" rel="noopener noreferrer" className="link">
                    Code
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="link">
                      Demo
                    </a>
                  )}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export default Projects;
