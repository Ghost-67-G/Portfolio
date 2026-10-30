import { Fragment } from "react";
import Section from "../section";

function Skills({ skillGroups }) {
  return (
    <Section id="skills" title="Skills">
      <dl className="divide-y divide-line">
        {skillGroups.map((group) => (
          <div key={group.name} className="grid gap-x-6 gap-y-2 py-5 first:pt-0 last:pb-0 sm:grid-cols-[11rem_1fr]">
            <dt className="text-[15px] font-medium">{group.name}</dt>
            <dd className="text-[15px] leading-relaxed text-ink-2">
              <ul className="dotted">
                {group.items.map((item) => (
                  <Fragment key={item}>
                    <li>{item}</li>{" "}
                  </Fragment>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

export default Skills;
