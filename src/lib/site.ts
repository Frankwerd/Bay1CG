export const site = {
  name: "Bay1 Consulting Group",
  short: "bay1cg",
  founder: "Francis John Libutti",
  email: "francis@bay1cg.com",
  location: "Bayonne, NJ",
  description:
    "Bay1 Consulting Group designs and builds fast, good-looking websites for small businesses, and adds practical AI tools when they save real time.",
  /** The primary lead offer. Requests go to `email`. */
  offer: {
    label: "Start a project",
    subject: "New project",
  },
  social: {
    linkedin: "",
    facebook: "",
    instagram: "",
    github: "https://github.com/Frankwerd",
  },
} as const;

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
] as const;
