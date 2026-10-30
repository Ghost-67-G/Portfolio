import Section from "../section";

function Faq({ faqs }) {
  return (
    <Section id="faq" title="FAQ" description="Quick answers to what clients usually ask first.">
      <dl className="divide-y divide-line">
        {faqs.map((item) => (
          <div key={item.question} className="py-6 first:pt-0 last:pb-0">
            <dt className="text-lg font-medium">{item.question}</dt>
            <dd className="mt-2 max-w-[62ch] text-ink-2">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

export default Faq;
