import { educations } from "@/utils/data/educations";
import { experiences } from "@/utils/data/experience";
import { faqs } from "@/utils/data/faq";
import { personalData } from "@/utils/data/personal-data";
import { caseStudies, openSource } from "@/utils/data/projects-data";
import { services } from "@/utils/data/services";
import { skillGroups } from "@/utils/data/skills";
import { homeJsonLd, serializeJsonLd } from "@/utils/structured-data";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import Faq from "./components/homepage/faq";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Services from "./components/homepage/services";
import Skills from "./components/homepage/skills";

export const metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(homeJsonLd()) }} />
      <HeroSection personalData={personalData} />
      <Services services={services} />
      <Projects caseStudies={caseStudies} openSource={openSource} />
      <Experience experiences={experiences} />
      <Skills skillGroups={skillGroups} />
      <Education educations={educations} />
      <Faq faqs={faqs} />
      <ContactSection personalData={personalData} />
    </>
  );
}
