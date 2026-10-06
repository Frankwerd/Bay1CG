export interface ServiceItem {
  title: string;
  note: string;
}

export interface Service {
  id: string;
  index: string;
  title: string;
  heading: [string, string];
  summary: string;
  primary: boolean;
  forWho: string;
  deliverables: string[];
  items: ServiceItem[];
}

export const services: Service[] = [
  {
    id: "web-development",
    index: "01",
    title: "Web design and development",
    heading: ["Web design and", "development"],
    summary:
      "Custom websites that look as good as your work, load fast on any phone, and turn visitors into calls and booked jobs.",
    primary: true,
    forWho: "Small businesses looking for a fast, modern website that generates real leads.",
    deliverables: [
      "Custom website design built around your business",
      "Booking and quote forms straight to your inbox or CRM",
      "Rebuilds of tired sites on modern framework",
      "Care plans for ongoing updates and fixes",
    ],
    items: [
      {
        title: "Custom website design",
        note: "Built around your business",
      },
      {
        title: "Booking and quote forms",
        note: "Straight to your inbox or CRM",
      },
      {
        title: "Rebuilds of tired sites",
        note: "Same domain, new engine",
      },
      {
        title: "Care plans",
        note: "Updates, fixes and small changes",
      },
    ],
  },
  {
    id: "ai-add-ons",
    index: "02",
    title: "AI add-ons",
    heading: ["AI add-ons for", "your workflow"],
    summary:
      "When it saves real time, we add AI tools to your site and back office, built around how your business already runs.",
    primary: false,
    forWho: "Businesses wanting to automate content, intake, or routine office tasks.",
    deliverables: [
      "Content systems for blogs and profile updates",
      "Quote and intake assistants for quick drafts",
      "Internal tools replacing spreadsheets and copy-paste",
    ],
    items: [
      {
        title: "Content systems",
        note: "Blog and Google posts on schedule",
      },
      {
        title: "Quote and intake assistants",
        note: "Drafts in seconds, you approve",
      },
      {
        title: "Internal tools",
        note: "Replace copy-paste and spreadsheets",
      },
    ],
  },
];
