import Image from "next/image";
import Link from "next/link";
import LocalTime from "../../helper/local-time";

function HeroSection({ personalData }) {
  const { links } = personalData;

  return (
    <section className="wrap grid gap-y-12 pb-16 pt-12 md:grid-cols-12 md:gap-x-8 md:pb-24 md:pt-20">
      <div className="md:col-span-8">
        {/* One h1 holding both lines, so the page's main heading names the role
            and location ("full stack developer in Faisalabad, Pakistan"). */}
        <h1>
          <span className="rise block text-[15px] text-ink-2" style={{ "--i": 0 }}>
            {personalData.name}, full stack developer in Faisalabad, Pakistan
          </span>{" "}
          <span
            className="rise mt-5 block max-w-[19ch] text-[2.375rem] font-medium leading-[1.08] tracking-[-0.025em] sm:text-5xl md:text-[3.5rem]"
            style={{ "--i": 1 }}
          >
            {personalData.headline}
          </span>
        </h1>
        <p className="rise mt-6 max-w-[54ch] text-lg leading-relaxed text-ink-2" style={{ "--i": 2 }}>
          {personalData.intro}
        </p>
        <div className="rise mt-9 flex flex-wrap items-center gap-3" style={{ "--i": 3 }}>
          <a href={`mailto:${personalData.email}`} className="btn btn-primary">
            Email me
          </a>
          <Link href="#work" className="btn btn-secondary">
            See selected work
          </Link>
          <a
            href={personalData.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="link ml-1 text-sm text-ink-2 hover:text-ink"
          >
            Resume ↗
          </a>
        </div>
      </div>

      <aside className="rise flex items-start gap-5 md:col-span-4 md:block" style={{ "--i": 4 }}>
        <Image
          src={personalData.profile}
          alt={`${personalData.name}, full stack developer in Faisalabad, Pakistan`}
          width={760}
          height={1024}
          priority
          sizes="(min-width: 768px) 17rem, 7rem"
          className="aspect-[4/5] w-28 shrink-0 rounded-md bg-line object-cover sm:w-36 md:w-full md:max-w-[17rem]"
        />
        <dl className="grid flex-1 grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-sm md:mt-6 md:max-w-[17rem]">
          {[
            ...personalData.availability,
            { label: "Local time", value: <LocalTime timeZone={personalData.timeZone} /> },
            {
              label: "Studio",
              value: (
                <a href={links.studio} target="_blank" rel="noopener noreferrer" className="link">
                  CodingStack
                </a>
              ),
            },
          ].map((item) => (
            <div key={item.label} className="contents">
              <dt className="text-ink-3">{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </aside>
    </section>
  );
}

export default HeroSection;
