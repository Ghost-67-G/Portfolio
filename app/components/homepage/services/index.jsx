import Section from "../section";

function Services({ services }) {
  return (
    <Section
      id="services"
      title="Services"
      description="Hire me directly, through Fiverr, or through CodingStack, my studio for production SaaS builds."
    >
      <ul className="divide-y divide-line">
        {services.map((service) => (
          <li key={service.title} className="py-7 first:pt-0 last:pb-0">
            <h3 className="text-lg font-medium">{service.title}</h3>
            <p className="mt-2 max-w-[62ch] text-ink-2">{service.description}</p>
            <p className="mt-3 font-mono text-[13px] text-ink-3">{service.stack.join(" · ")}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Services;
