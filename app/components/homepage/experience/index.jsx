import Section from "../section";

function Experience({ experiences }) {
  return (
    <Section id="experience" title="Experience">
      <ol className="divide-y divide-line">
        {experiences.map((job) => (
          <li key={job.id} className="py-10 first:pt-0 last:pb-0">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="text-xl font-medium tracking-tight">{job.company}</h3>
              <p className="text-sm tabular-nums text-ink-3">{job.duration}</p>
            </div>
            <p className="mt-1 text-[15px] text-ink-2">
              {job.title} <span className="text-ink-3">· {job.location}</span>
            </p>
            {job.summary && <p className="mt-4 max-w-[62ch] text-ink-2">{job.summary}</p>}
            <ul className="bullets mt-4 max-w-[62ch] text-[15px] text-ink-2">
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default Experience;
