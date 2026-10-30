import { educations } from "./data/educations";
import { faqs } from "./data/faq";
import { personalData, siteUrl } from "./data/personal-data";
import { services } from "./data/services";

const id = (name) => `${siteUrl}/#${name}`;

const address = {
  "@type": "PostalAddress",
  addressLocality: "Faisalabad",
  addressRegion: "Punjab",
  addressCountry: "PK",
};

// Schema.org graph for the homepage: who the person is, the services they offer
// from Faisalabad, and the FAQ. Search engines and AI answer engines use this
// to connect the site, the profiles in `sameAs`, and the location.
export function homeJsonLd() {
  const person = {
    "@type": "Person",
    "@id": id("person"),
    name: personalData.name,
    alternateName: "Ayan Naseer",
    url: siteUrl,
    image: `${siteUrl}${personalData.profile}`,
    jobTitle: personalData.title,
    description: personalData.description,
    email: `mailto:${personalData.email}`,
    telephone: personalData.phone.replace(/\s/g, ""),
    address,
    homeLocation: { "@type": "City", name: "Faisalabad, Punjab, Pakistan" },
    worksFor: { "@type": "Organization", name: "Genius Mind Zone" },
    alumniOf: educations
      .filter((education) => !education.note)
      .map((education) => ({ "@type": "EducationalOrganization", name: education.institution })),
    hasOccupation: {
      "@type": "Occupation",
      name: personalData.title,
      occupationLocation: { "@type": "City", name: "Faisalabad" },
    },
    knowsAbout: [
      "Full stack development",
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "REST APIs",
      "Microservices",
      "Mastra AI",
      "OpenAI API",
      "Anthropic API",
      "Retrieval-augmented generation",
      "AI agents",
      "n8n",
      "Docker",
      "GitHub Actions",
      "Google Cloud Platform",
      "Microsoft Azure",
      "Firebase",
      "Electron",
    ],
    sameAs: Object.values(personalData.links),
  };

  const website = {
    "@type": "WebSite",
    "@id": id("website"),
    url: siteUrl,
    name: personalData.name,
    description: personalData.description,
    inLanguage: "en",
    publisher: { "@id": id("person") },
  };

  const profilePage = {
    "@type": "ProfilePage",
    "@id": id("profile"),
    url: siteUrl,
    name: `${personalData.name} · ${personalData.title} in Faisalabad, Pakistan`,
    isPartOf: { "@id": id("website") },
    mainEntity: { "@id": id("person") },
  };

  const business = {
    "@type": "ProfessionalService",
    "@id": id("services"),
    name: `${personalData.name} · Full Stack Development`,
    url: siteUrl,
    image: `${siteUrl}${personalData.profile}`,
    description:
      "Full stack web, mobile and AI development from Faisalabad, Pakistan, for B2B and SaaS clients in Pakistan, the US and the UK.",
    email: personalData.email,
    telephone: personalData.phone.replace(/\s/g, ""),
    address,
    areaServed: [
      { "@type": "City", name: "Faisalabad" },
      { "@type": "Country", name: "Pakistan" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
    ],
    founder: { "@id": id("person") },
    sameAs: [personalData.links.fiverr, personalData.links.studio],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: service.title, description: service.description },
      })),
    },
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": id("faq"),
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [person, website, profilePage, business, faqPage],
  };
}

// JSON inside a <script> tag must not contain "</script>"; escaping "<" covers it.
export function serializeJsonLd(data) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
