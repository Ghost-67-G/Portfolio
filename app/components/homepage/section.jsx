// Shared frame for homepage sections: heading in the left four columns (sticky
// on desktop so it stays in view through long sections), content in the right eight.
function Section({ id, title, description, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line py-16 md:py-24">
      <div className="wrap grid gap-y-8 md:grid-cols-12 md:gap-x-8">
        <header className="md:col-span-4">
          <div className="md:sticky md:top-24">
            <h2 id={`${id}-title`} className="text-[1.375rem] font-medium tracking-tight">
              {title}
            </h2>
            {description && (
              <p className="mt-2 max-w-[30ch] text-[15px] leading-relaxed text-ink-2">{description}</p>
            )}
          </div>
        </header>
        <div className="md:col-span-8">{children}</div>
      </div>
    </section>
  );
}

export default Section;
