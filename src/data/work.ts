export interface CaseStudy {
  id: string;
  client: string;
  title: string;
  heading: [string, string];
  sector: string;
  services: string[];
  summary: string;
  featured?: boolean;
  facts?: { label: string; text: string }[];
  note?: string;
  problem?: string;
  approach: string[];
  stack: string[];
  outcomes: string[];
}

export const cases: CaseStudy[] = [
  {
    id: "luminous",
    client: "Luminous Electric",
    title: "Luminous Electric has a website that stays fresh every week.",
    heading: ["Luminous", "Electric"],
    sector: "Licensed electrical contractor, New Jersey",
    services: ["Web design and development", "AI add-ons"],
    featured: true,
    summary:
      "A New Jersey electrician's website, kept current by an AI content system. It turns what customers search for and the jobs the crew actually finished into a blog post and Google updates every week, checked against the owner's rules before anything goes live.",
    facts: [
      { label: "1", text: "blog post written and published every week" },
      { label: "3", text: "Google Business Profile updates, at most, each week" },
      { label: "Rules", text: "banned claims and service area enforced before publishing" },
      { label: "Report", text: "a plain summary emailed to the owner after every run" },
    ],
    note: "Results figures to be added once confirmed with the client.",
    problem:
      "Luminous does good work across North Jersey, but posting about it took time the crew didn't have.",
    approach: [
      "Each week the system reads search demand from Google Analytics and recent job history.",
      "It picks a topic people search for matching real work completed, drafting blog and profile updates.",
      "Every draft is checked against content rules before anything goes out.",
      "Posts publish automatically and a summary report is emailed to the owner.",
    ],
    stack: ["Next.js", "WordPress", "Google Business Profile", "GA4", "Claude"],
    outcomes: [
      "One blog post and up to three profile posts every week",
      "Topics tied to real search demand and real completed jobs",
      "Guards that block off-brand or unverified claims",
    ],
  },
  {
    id: "careersuite",
    client: "CareerSuite.ai",
    title: "CareerSuite.ai: AI job application toolkit",
    heading: ["CareerSuite", ".ai"],
    sector: "Product development",
    services: ["Web design and development", "AI add-ons"],
    featured: false,
    summary:
      "A full-stack AI toolkit for job seekers: a Chrome extension, a Google Apps Script backend, and AI email parsing that tracks applications automatically.",
    problem:
      "Job seekers lose hours a week logging applications by hand and rewriting resumes.",
    approach: [
      "Built a browser extension capturing applications as submitted.",
      "Parsed confirmation and rejection emails with AI to maintain tracker status.",
      "Shipped seven releases on schedule.",
    ],
    stack: ["Next.js", "TypeScript", "Gemini API", "Google Workspace APIs"],
    outcomes: ["Automated tracking for applications", "Hours saved per user each week"],
  },
];
