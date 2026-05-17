export interface Service {
  id: string;
  title: string;
  description: string;
  tools: string[];
  outcomes: string[];
  icon: string;
}

export const services: Service[] = [
  {
    id: "ai-architecture",
    title: "AI & System Architecture",
    description: "Designing end-to-end serverless solutions leveraging LLMs (GPT-4, Gemini, Groq) and Human-in-the-Loop workflows to automate complex business problems.",
    tools: ["GPT-4", "Gemini", "Vercel AI SDK", "Multi-LLM HITL"],
    outcomes: ["95% Manual Effort Reduction", "Modular Architecture", "System Resilience"],
    icon: "psychology"
  },
  {
    id: "full-stack-dev",
    title: "Full-Stack Development",
    description: "Engineering scalable web applications and Chrome extensions with robust backends using Google Apps Script and modern frontend frameworks.",
    tools: ["Next.js", "React", "Chrome Extension APIs", "Docker"],
    outcomes: ["Custom ERP Solutions", "Automated OMS Workflows", "Dynamic UI/UX"],
    icon: "code"
  },
  {
    id: "data-analytics",
    title: "Data Analysis & BI",
    description: "Translating complex data into actionable insights through SQL-based forecasting, Tableau dashboards, and advanced modeling.",
    tools: ["Tableau", "SQL", "Python", "JSON-LD"],
    outcomes: ["KPI Reporting", "Financial Forecasting", "AEO/GEO Optimization"],
    icon: "monitoring"
  },
  {
    id: "project-mgmt",
    title: "Project & Product Management",
    description: "Leading cross-functional teams using Agile methodologies (Scrum, Kanban) to deliver high-stakes projects on time and on budget.",
    tools: ["JIRA", "Asana", "Agile", "Roadmapping"],
    outcomes: ["$2M+ Grant Portfolios", "100% On-time Submission", "Workflow Optimization"],
    icon: "account_tree"
  },
  {
    id: "biz-strategy",
    title: "Business Strategy & Ops",
    description: "Validating product-market fit, conducting market analysis, and architecting operational frameworks for early-stage startups.",
    tools: ["Shopify Liquid", "HubSpot CRM", "Zapier", "Market Analysis"],
    outcomes: ["Market Penetration", "Scalability Assessment", "Operational Efficiency"],
    icon: "strategy"
  },
  {
    id: "leadership",
    title: "Leadership & Communication",
    description: "Managing cross-functional teams, directing philanthropic strategy, and facilitating executive-level stakeholder reporting.",
    tools: ["Public Speaking", "Grant Writing", "Team Leadership"],
    outcomes: ["$2M+ Managed Portfolio", "Strategic Partnerships", "Team Mentorship"],
    icon: "groups"
  }
];
