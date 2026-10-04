export interface Role {
  company: string;
  role: string;
  period: string;
  note: string;
}

export const experience: Role[] = [
  {
    company: "SGLab Inc.",
    role: "USA Marketing Lead",
    period: "2025 to 2026",
    note: "Promoted three times in six months. Built two production AI systems, a five-module ERP, a Shopify migration and a HubSpot CRM from scratch.",
  },
  {
    company: "Elpis Labs",
    role: "Business Development Analyst",
    period: "2025",
    note: "Guided international startups on US market entry through a government-backed accelerator.",
  },
  {
    company: "CareerSuite.ai",
    role: "Founder and full-stack engineer",
    period: "2025",
    note: "Built and shipped an AI job application toolkit end to end.",
  },
  {
    company: "Circle of Rainbow Sisters",
    role: "Lead Grant Funding Specialist and PM",
    period: "2023 to 2025",
    note: "Managed a $2M+ grant portfolio across 30+ agencies and secured $50K+ in new funding with a 100% on-time rate.",
  },
  {
    company: "Starta VC",
    role: "Early-Stage Investment Associate",
    period: "2022",
    note: "Advised 19% of the overseas portfolio and delivered a merger recommendation for two companies.",
  },
];

export const education = {
  school: "Rutgers University, New Brunswick",
  degree: "BA, Business and Managerial Economics",
  year: "2024",
  certs: ["Google Data Analytics Professional", "Google Project Management Professional"],
};
