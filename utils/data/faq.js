import { personalData } from "./personal-data";

// Shown on the homepage and emitted as FAQPage structured data, so the visible
// answers and the markup always match. Keep answers factual and self-contained:
// search and AI answer engines quote them on their own.
export const faqs = [
  {
    question: "Who is M. Ayan Naseer?",
    answer:
      "I'm M. Ayan Naseer, a full stack developer based in Faisalabad, Pakistan. I have 3+ years of experience shipping web, mobile and AI-powered applications for B2B and SaaS clients, using React, Node.js, MongoDB, SQL, React Native and Mastra AI.",
  },
  {
    question: "Do you work remotely with teams in the US and UK?",
    answer:
      "Yes. I work remotely on hours that overlap with US and UK working days, and I'm used to async collaboration with distributed teams. I take contract work through Deel or Payoneer.",
  },
  {
    question: "Do you take projects from businesses in Faisalabad and the rest of Pakistan?",
    answer:
      "Yes. I'm based in Faisalabad and have built custom web apps for regional B2B clients at Genius Mind Zone, so local projects are a good fit alongside remote work for clients abroad.",
  },
  {
    question: "What do you build?",
    answer:
      "Full stack web apps and SaaS products, React Native mobile apps, AI features such as assistants, RAG and document-processing workflows, n8n automations, and backend APIs and migrations.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "React, Next.js and TypeScript on the front end; Node.js and Express on the back end; PostgreSQL, MongoDB and Redis for data; React Native with Expo for mobile; Mastra AI with OpenAI and Anthropic models for AI features; and Docker with GitHub Actions for deployment.",
  },
  {
    question: "Can you add AI features to an existing product?",
    answer:
      "Yes. I've built an AI assistant and document-processing workflow with Mastra AI, OpenAI tool calling and MongoDB, and I work with RAG over pgvector or Pinecone, MCP integrations and agent evals.",
  },
  {
    question: "Can you modernize a legacy codebase?",
    answer:
      "Yes. I led a 3-engineer migration of 2 legacy PHP systems to the MERN stack, which cut maintenance overhead by about half, and I've Dockerized production services so deploys went from hours to under 20 minutes.",
  },
  {
    question: "How do I hire you?",
    answer: `Email me at ${personalData.email} with a short description of what you're building. You can also hire me on Fiverr or through CodingStack, my studio for production SaaS builds.`,
  },
];
