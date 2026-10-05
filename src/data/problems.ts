export interface ProblemSolution {
  key: string;
  buttonLabel: string;
  italicWord?: string;
  tag: string;
  headline: string;
  paragraph: string;
  points: string[];
  note: string;
}

export const problemsData: Record<string, ProblemSolution> = {
  old: {
    key: "old",
    buttonLabel: "It looks like it was made in 2012",
    tag: "Web design",
    headline: "A fresh design that looks as good as your work.",
    paragraph:
      "We redesign your site around your business, not a template. Same domain, new everything.",
    points: [
      "Custom design built around your brand",
      "Fast on every phone",
      "Your services, photos and reviews front and center",
    ],
    note: "goodbye, 2009",
  },
  calls: {
    key: "calls",
    buttonLabel: "It isn't bringing in calls or quotes",
    tag: "Web design",
    headline: "A site built to make the phone ring.",
    paragraph:
      "Most sites hide the one thing visitors want: a way to reach you. We put it everywhere it should be.",
    points: [
      "Call and quote buttons always in reach",
      "Booking and quote forms that land in your inbox",
      "Pages written for what your customers search",
    ],
    note: "ring ring",
  },
  stuck: {
    key: "stuck",
    buttonLabel: "I can't update anything without breaking it",
    tag: "Care plan",
    headline: "Updates without the headache.",
    paragraph:
      "Change hours, add a job, swap a photo. Do it yourself in minutes, or send it to us and it is done.",
    points: [
      "Simple editing you can actually use",
      "Monthly care plan for updates and fixes",
      "Backups, security and speed handled",
    ],
    note: "one text away",
  },
  none: {
    key: "none",
    buttonLabel: "I don't have a website yet",
    tag: "Web design",
    headline: "Your first website, done right.",
    paragraph:
      "From domain to launch: a clean, fast site that makes a great first impression and brings in work.",
    points: [
      "Domain, email and hosting set up",
      "A homepage, services and contact that convert",
      "Google Business Profile connected",
    ],
    note: "welcome online",
  },
  time: {
    key: "time",
    buttonLabel: "I waste hours answering the same questions",
    tag: "AI add-on",
    headline: "Let the busywork run itself.",
    paragraph:
      "Once your site is working, we can add AI tools that draft quotes, answer common questions and keep your Google profile posting.",
    points: [
      "Quote and follow-up drafts in seconds",
      "Content that posts on schedule",
      "You approve everything before it goes out",
    ],
    note: "Fridays back",
  },
};

export const problemsList = [
  problemsData.old,
  problemsData.calls,
  problemsData.stuck,
  problemsData.none,
  problemsData.time,
];
