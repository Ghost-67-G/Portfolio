export const siteUrl = "https://ayan.is-a.dev";

export const personalData = {
  name: "M. Ayan Naseer",
  title: "Full Stack Developer",
  location: "Faisalabad, Punjab, Pakistan",
  timeZone: "Asia/Karachi",
  email: "ayannaseerg67@gmail.com",
  phone: "+92 339 1850803",
  profile: "/profile.jpeg",
  resume: "https://canva.link/89sjbdcbpnci0s8",
  headline: "I build web, mobile and AI products for B2B and SaaS teams.",
  intro:
    "3+ years shipping production apps with React, Node.js, MongoDB, SQL, React Native and Mastra AI. I work async with distributed teams in the US and UK.",
  description:
    "Full stack developer with 3+ years shipping web, mobile and AI-powered applications for B2B and SaaS clients (React, Node.js, MongoDB, SQL, React Native, Mastra AI). Works async with distributed US/UK teams.",
  availability: [
    { label: "Work", value: "Remote, contract" },
    { label: "Hours", value: "Overlaps US and UK" },
    { label: "Payment", value: "Deel or Payoneer" },
  ],
  links: {
    github: "https://github.com/Ghost-67-G",
    linkedIn: "https://www.linkedin.com/in/ayan-naseer/",
    fiverr: "https://www.fiverr.com/ayannaseerghost",
    studio: "https://codingstack.site",
  },
  // Not shown on the page; listed in structured data so search engines can tie
  // these profiles to the same person.
  otherProfiles: [
    "https://stackoverflow.com/users/25735457/ayan-naseer-ghost-67",
    "https://leetcode.com/Ghost-67-G/",
  ],
};

// Opens a WhatsApp chat with the first message already typed, which also tells
// you a chat came from the website rather than from an ad.
export const whatsappLink = `https://wa.me/${personalData.phone.replace(/\D/g, "")}?text=${encodeURIComponent(
  "Hi Ayan, I found you through your website and I'd like to talk about a project."
)}`;
