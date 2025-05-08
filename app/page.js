// app/page.js
import { personalData } from "../utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

const getData = async () => {
  const url = 'https://api.jsonsilo.com/843eeaf1-64b1-49a9-be43-59c545d34bca';
  const headers = {
    'X-SILO-KEY': process.env.NEXT_PUBLIC_X_SILO_KEY,
    'Content-Type': 'application/json'
  };
  const res = await fetch(url, { headers, cache: 'no-store' });
  const data = await res.json();
  return data;
}

export default async function Home() {
  const data = await getData();
  console.log('🚀 ~ page.js:25 ~ Home ~ data:', data);


  return (
    <>
      <HeroSection personalData={data?.personal} skills={data?.skills} />
      <AboutSection personalData={data?.personal} />
      <Experience experiences={data?.experiences} />
      <Skills skillsData={data?.skills} />
      <Projects projectsData={data?.projects} />
      <Education educations={data?.educations} />
      {/* {blogs && <Blog blogs={blogs} />} */}
      <ContactSection personalData={data?.personal} />
    </>
  );
}
