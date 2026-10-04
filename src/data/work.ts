export interface CaseStudy {
  id: string;
  client: string;
  /** Two display lines for the big heading. */
  heading: [string, string];
  sector: string;
  services: string[];
  summary: string;
  problem: string;
  approach: string[];
  stack: string[];
  outcomes: string[];
}

export const cases: CaseStudy[] = [
  {
    id: "luminous",
    client: "Luminous Electric",
    heading: ["Luminous", "Electric"],
    sector: "Licensed electrical contractor, New Jersey",
    services: ["Web development", "AI strategy"],
    summary:
      "A weekly content system that turns real search demand and real jobs into blog and Google Business Profile posts, with no one at a keyboard.",
    problem:
      "Luminous does good work across North Jersey, but posting about it took time the crew didn't have. The site and Google profile went quiet for weeks at a time.",
    approach: [
      "Each week the system reads 28 days of search demand from Google Analytics and the recent job history from HubSpot.",
      "It picks a topic people are searching for that matches work Luminous actually did, then writes one blog post and one to three Google Business Profile posts.",
      "Every draft is checked against the client's content rulebook before anything goes out. Banned claims, service area and tone are enforced in code.",
      "Posts publish to WordPress and Google Business Profile through a locked-down gateway with weekly caps, and the owner gets a report by email.",
    ],
    stack: ["Claude", "Google Apps Script", "WordPress", "Google Business Profile", "GA4", "HubSpot"],
    outcomes: [
      "One blog post and up to three profile posts every week",
      "Topics tied to real search demand and real completed jobs",
      "Dry-run by default, with guards that block off-brand claims",
    ],
  },
  {
    id: "handshake",
    client: "Handshake AI",
    heading: ["Training", "the models"],
    sector: "AI model training",
    services: ["AI training"],
    summary:
      "Expert work training and evaluating large language models through Handshake AI. It's where our training practice learned how models fail.",
    problem:
      "Frontier models need people who can write hard tasks, judge answers against a rubric, and explain exactly where a response goes wrong.",
    approach: [
      "Wrote task prompts designed to expose weak reasoning and shallow answers.",
      "Graded model responses against detailed rubrics and wrote the reasoning behind each score.",
      "Documented recurring failure patterns so they could be trained out.",
    ],
    stack: ["Rubric design", "Model evaluation", "Prompt writing"],
    outcomes: [
      "First-hand knowledge of where today's models are strong and where they break",
      "The same evaluation habits we now teach client teams",
    ],
  },
  {
    id: "careersuite",
    client: "CareerSuite.ai",
    heading: ["CareerSuite", ".ai"],
    sector: "Our own product",
    services: ["Web development", "AI strategy"],
    summary:
      "A full-stack AI toolkit for job seekers: a Chrome extension, a Google Apps Script backend, and AI email parsing that tracks applications on its own.",
    problem:
      "Job seekers lose hours a week logging applications by hand and rewriting resumes for every posting.",
    approach: [
      "Built a Chrome extension that captures applications as you submit them.",
      "Parsed confirmation and rejection emails with AI to keep the tracker current.",
      "Shipped seven releases on schedule as a solo founder and engineer.",
    ],
    stack: ["Next.js", "TypeScript", "Gemini API", "Google Workspace APIs"],
    outcomes: ["95% less manual data entry", "5+ hours saved per user each week"],
  },
];
