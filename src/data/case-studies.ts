export interface CaseStudy {
  id: string;
  title: string;
  problem: string;
  solution: string;
  tools: string[];
  results: string[];
  category: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "careersuite-toolkit",
    title: "CareerSuite.Ai Full-Stack Platform",
    problem: "Inefficient job application tracking and lack of personalized resume tailoring for ATS.",
    solution: "Developed an AI-powered toolkit including a Chrome Extension and secure Google Apps Script backend.",
    tools: ["Next.js", "TypeScript", "Gemini API", "Google Workspace APIs"],
    results: ["95% reduction in manual data entry", "5+ hours saved weekly", "Integrated AI email parsing"],
    category: "AI & Full-Stack"
  },
  {
    id: "grant-funding-pm",
    title: "$2M+ Grant Portfolio Management",
    problem: "Inefficiencies in grant application processes and lack of real-time financial reporting across 30+ agencies.",
    solution: "Led cross-functional teams using Agile methodologies and built automated reporting scripts for $2M+ portfolio.",
    tools: ["Agile", "SQL", "Google Apps Script", "Tableau"],
    results: ["$50K+ in new funding secured", "100% on-time submissions", "20% error reduction in reporting"],
    category: "Project Management"
  },
  {
    id: "starta-vc-strategy",
    title: "Starta VC Market Penetration",
    problem: "International startups struggling to validate product-market fit for the US market.",
    solution: "Crafted data-driven GTM roadmaps and synthesized competitor analyses for portfolio ventures.",
    tools: ["Tableau", "Market Analysis", "Business Intelligence"],
    results: ["Advised 19% of accelerator partners", "Facilitated successful merger", "Actionable GTM roadmaps"],
    category: "Strategy"
  }
];
