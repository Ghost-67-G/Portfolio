// `flow` drives the small system diagram on each case study. `via` labels the
// connector leading into a step, and `planned` draws the step dashed.
export const caseStudies = [
  {
    id: "pharmacy-pos",
    name: "Pharmacy point of sale",
    kind: "In development",
    active: true,
    summary:
      "An offline-first POS for pharmacies. Everything runs on the shop's own network, so a dropped internet connection doesn't stop sales. The cloud is an add-on, not a dependency.",
    flow: [
      { title: "Counter PCs", detail: "Electron thin clients" },
      { title: "Shop server", detail: "Node.js + PostgreSQL", via: "LAN" },
      { title: "Owner dashboard", detail: "Cloud", via: "Phase 2", planned: true },
    ],
    points: [
      "A single installer sets up Node.js and PostgreSQL on the shop's server",
      "Counter machines run Electron thin clients over the local network",
      "Phase 2 adds a cloud dashboard so the owner can follow the shop remotely",
    ],
    stack: ["Node.js", "PostgreSQL", "Electron"],
  },
  {
    id: "ai-assistant",
    name: "AI assistant and document processing",
    kind: "At Genius Mind Zone",
    summary:
      "An AI assistant and a document-processing workflow. Mastra runs the agent and its workflow steps, OpenAI handles the language work through tool calling, and MongoDB stores the data.",
    flow: [
      { title: "Documents", detail: "Input" },
      { title: "Mastra workflow", detail: "Agent + steps" },
      { title: "OpenAI", detail: "Tool calling" },
      { title: "MongoDB", detail: "Storage" },
    ],
    stack: ["Mastra AI", "OpenAI", "MongoDB", "Node.js"],
  },
  {
    id: "lead-scoring",
    name: "Lead scoring pipeline",
    kind: "Automation",
    summary:
      "An n8n pipeline that finds businesses with Google Places, audits their websites with PageSpeed Insights, and scores each one as a sales opportunity. The ranked list comes out as a CSV.",
    flow: [
      { title: "Google Places", detail: "Find businesses" },
      { title: "PageSpeed", detail: "Audit each site" },
      { title: "Scoring", detail: "Rank by opportunity" },
      { title: "CSV", detail: "Export" },
    ],
    caption: "Runs in n8n, self-hosted on Dokploy with PostgreSQL.",
    stack: ["n8n", "Google Places API", "PageSpeed Insights API", "PostgreSQL", "Dokploy"],
  },
  {
    id: "equities-alerts",
    name: "US equities alert platform",
    kind: "Pre-sales scoping",
    summary:
      "Scope and architecture for a mobile-first platform that sends alerts on US stocks, done before the build. I broke the product into its moving parts and planned how they fit together.",
    flow: [
      { title: "Ingestion", detail: "Market data" },
      { title: "AI classification", detail: "Classify events" },
      { title: "Entitlements", detail: "Who gets what" },
      { title: "Mobile app", detail: "Alerts" },
    ],
    caption: "An admin console sits alongside the pipeline.",
    stack: ["Architecture", "Estimation", "Technical diagrams"],
  },
];

export const openSource = [
  {
    name: "React Boilerplate",
    description: "Starting point for React apps with Clerk auth, Redux Toolkit, Tailwind and Flowbite.",
    code: "https://github.com/Ghost-67-G/React-Boilerplate",
  },
  {
    name: "Node Express Boilerplate",
    description:
      "Express API starter with branches for MongoDB + Firebase and PostgreSQL + Prisma, set up with Docker, Passport and Joi.",
    code: "https://github.com/Ghost-67-G/node-express-boilerplate",
  },
  {
    name: "Firebase Chat",
    description: "Real-time chat with React, Tailwind and Firebase auth and database.",
    code: "https://github.com/Ghost-67-G/firebase-chat",
  },
  {
    name: "Password Generator",
    description: "A small React app for generating strong passwords.",
    code: "https://github.com/Ghost-67-G/Password-Generater",
    demo: "https://pas-gen.netlify.app/",
  },
];
