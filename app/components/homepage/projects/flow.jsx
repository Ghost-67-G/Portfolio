import { Fragment } from "react";

// Stacks vertically on phones and runs left to right from `sm` up; the
// connector styles in globals.scss switch direction at the same breakpoint.
function Flow({ steps, caption }) {
  return (
    <figure>
      <div role="list" className="flow flex flex-col sm:flex-row sm:items-stretch">
        {steps.map((step, index) => (
          <Fragment key={step.title}>
            {index > 0 && (
              <div aria-hidden="true" className={`flow-link ${step.via ? "is-labelled" : ""}`}>
                {step.via && <span>{step.via}</span>}
              </div>
            )}
            <div role="listitem" className={`flow-node ${step.planned ? "is-planned" : ""}`}>
              <span className="block text-sm font-medium leading-snug">{step.title}</span>
              {step.detail && (
                <span className="mt-0.5 block font-mono text-[11.5px] leading-snug text-ink-3">{step.detail}</span>
              )}
            </div>
          </Fragment>
        ))}
      </div>
      {caption && <figcaption className="mt-3 text-[13px] text-ink-3">{caption}</figcaption>}
    </figure>
  );
}

export default Flow;
