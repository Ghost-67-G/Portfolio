import { educations } from "@/utils/data/educations";
import { experiences } from "@/utils/data/experience";
import { faqs } from "@/utils/data/faq";
import { personalData, siteUrl } from "@/utils/data/personal-data";
import { caseStudies } from "@/utils/data/projects-data";
import { services } from "@/utils/data/services";
import { skillGroups } from "@/utils/data/skills";

export const dynamic = "force-static";

// Plain-text profile for AI assistants and answer engines (llmstxt.org format),
// built from the same data as the homepage so the two never disagree.
export function GET() {
  const { links } = personalData;
  const lines = [
    `# ${personalData.name}`,
    "",
    `> ${personalData.name} is a full stack developer in Faisalabad, Pakistan with 3+ years of experience shipping web, mobile and AI-powered applications for B2B and SaaS clients, working remotely and async with teams in the US and UK.`,
    "",
    `- Role: ${personalData.title}`,
    `- Location: ${personalData.location}`,
    "- Availability: remote contract work, hours overlapping US and UK; contracts via Deel or Payoneer",
    `- Email: ${personalData.email}`,
    `- Phone / WhatsApp: ${personalData.phone}`,
    `- Website: ${siteUrl}`,
    "",
    "## Services",
    ...services.map((service) => `- ${service.title}: ${service.description}`),
    "",
    "## Selected work",
    ...caseStudies.map((study) => `- ${study.name} (${study.kind}): ${study.summary} Stack: ${study.stack.join(", ")}.`),
    "",
    "## Experience",
    ...experiences.flatMap((job) => [
      `- ${job.title}, ${job.company} (${job.location}), ${job.duration}`,
      ...job.points.map((point) => `  - ${point}`),
    ]),
    "",
    "## Skills",
    ...skillGroups.map((group) => `- ${group.name}: ${group.items.join(", ")}`),
    "",
    "## Education",
    ...educations.map(
      (education) => `- ${education.title}, ${education.institution} (${education.duration}${education.note ? `, ${education.note.toLowerCase()}` : ""})`
    ),
    "",
    "## FAQ",
    ...faqs.flatMap((item) => [`### ${item.question}`, item.answer, ""]),
    "## Links",
    `- [Portfolio](${siteUrl})`,
    `- [LinkedIn](${links.linkedIn})`,
    `- [GitHub](${links.github})`,
    `- [Fiverr](${links.fiverr})`,
    `- [CodingStack](${links.studio})`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
