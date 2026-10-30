import Section from "../section";

function Education({ educations }) {
  return (
    <Section id="education" title="Education">
      <ul className="divide-y divide-line">
        {educations.map((education) => (
          <li
            key={education.id}
            className="grid gap-x-6 gap-y-1 py-5 first:pt-0 last:pb-0 sm:grid-cols-[1fr_auto]"
          >
            <div>
              <p className="font-medium">{education.title}</p>
              <p className="text-[15px] text-ink-2">{education.institution}</p>
            </div>
            <p className="text-sm tabular-nums text-ink-3 sm:text-right">
              {education.duration}
              {education.note && <span className="block">{education.note}</span>}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Education;
