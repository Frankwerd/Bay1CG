export interface Service {
  id: string;
  index: string;
  title: string;
  /** Two display lines for the big heading. */
  heading: [string, string];
  summary: string;
  forWho: string;
  deliverables: string[];
}

export const services: Service[] = [
  {
    id: "ai-training",
    index: "01",
    title: "AI training",
    heading: ["AI training", "for your team"],
    summary:
      "Hands-on sessions built around the work your team already does. People leave with prompts, workflows and habits they use the next morning.",
    forWho:
      "Teams that pay for ChatGPT, Claude or Copilot seats and still do most of the work by hand.",
    deliverables: [
      "Workshops run on your team's real tasks and documents",
      "Role-specific playbooks for sales, operations and admin",
      "A shared prompt library your team can keep adding to",
      "Follow-up office hours for the questions that come up after",
    ],
  },
  {
    id: "ai-strategy",
    index: "02",
    title: "AI strategy",
    heading: ["AI strategy", "that ships"],
    summary:
      "We map how work moves through your business, find where AI saves real hours, and say plainly where it doesn't belong.",
    forWho:
      "Owners and operators who know AI matters and want a plan they can act on this quarter.",
    deliverables: [
      "A workflow audit with time spent per task",
      "An opportunity map ranked by hours saved and risk",
      "Tool picks, data rules and privacy guardrails",
      "A 90-day rollout plan with owners and checkpoints",
    ],
  },
  {
    id: "web-development",
    index: "03",
    title: "Web development",
    heading: ["Websites", "that do work"],
    summary:
      "Fast sites built to be found in search and in AI answers, wired into the tools you run on so they keep working after launch.",
    forWho:
      "Local and growing businesses whose site looks fine and brings in nothing.",
    deliverables: [
      "Marketing sites built for search and AI answer engines",
      "Automated content systems for blogs and Google Business Profile",
      "Integrations with HubSpot, Slack and Google Workspace",
      "Internal tools that replace spreadsheets and copy-paste",
    ],
  },
];
