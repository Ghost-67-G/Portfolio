import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

async function getBlogData() {
  if (personalData.devUsername) {

    const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    const data = await res.json();

    const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);

    return filtered;
  } else {
    return
  }
};

const getData = async () => {
  const url = 'https://api.jsonsilo.com/843eeaf1-64b1-49a9-be43-59c545d34bca';
  const headers = {
    'X-SILO-KEY': process.env.NEXT_PUBLIC_X_SILO_KEY,
    'Content-Type': 'application/json'
  };
  const res = await fetch(url, { headers })
  const data = await res.json()
  return data
}

export default async function Home() {
  const data = await getData()
  const blogs = await getBlogData();

  return (
    <>
      <HeroSection personalData={data?.personal} />
      <AboutSection personalData={data?.personal} />
      <Experience experiences={data?.experiences} />
      <Skills skillsData={data?.skills} />
      <Projects projectsData={data?.projects} />
      <Education educations={data?.educations} />
      {blogs &&
        <Blog blogs={blogs} />
      }
      <ContactSection />
    </>
  )
};
