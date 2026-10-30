import CopyButton from "../../helper/copy-button";
import Section from "../section";
import ContactForm from "./contact-form";

function ContactSection({ personalData }) {
  const { links } = personalData;
  const captcha = Boolean(
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY
  );

  const channels = [
    {
      label: "Phone / WhatsApp",
      value: personalData.phone,
      href: `https://wa.me/${personalData.phone.replace(/[^\d]/g, "")}`,
    },
    { label: "LinkedIn", value: "linkedin.com/in/ayan-naseer", href: links.linkedIn },
    { label: "GitHub", value: "github.com/Ghost-67-G", href: links.github },
    { label: "Fiverr", value: "fiverr.com/ayannaseerghost", href: links.fiverr },
    { label: "Studio", value: "codingstack.site", href: links.studio },
  ];

  return (
    <Section
      id="contact"
      title="Contact"
      description="Remote, working US and UK hours. Contracts through Deel or Payoneer."
    >
      <p className="max-w-[30ch] text-2xl font-medium leading-snug tracking-tight md:text-[1.75rem]">
        Tell me what you&apos;re building and where you need help.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
        <a href={`mailto:${personalData.email}`} className="link text-lg font-medium">
          {personalData.email}
        </a>
        <CopyButton value={personalData.email} label="Copy email" />
      </div>

      <dl className="mt-10 divide-y divide-line border-y border-line text-[15px]">
        {channels.map((channel) => (
          <div key={channel.label} className="grid gap-x-4 gap-y-0.5 py-3 sm:grid-cols-[11rem_1fr]">
            <dt className="text-ink-3">{channel.label}</dt>
            <dd className="min-w-0 break-words">
              <a href={channel.href} target="_blank" rel="noopener noreferrer" className="link">
                {channel.value}
              </a>
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-14">
        <h3 className="text-lg font-medium">Or send a message here</h3>
        <div className="mt-6">
          <ContactForm captcha={captcha} email={personalData.email} />
        </div>
      </div>
    </Section>
  );
}

export default ContactSection;
