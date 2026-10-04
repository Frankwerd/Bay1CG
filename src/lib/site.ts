export const site = {
  name: "Bay1 Consulting Group",
  short: "bay1cg",
  founder: "Francis John Libutti",
  email: "francis@bay1cg.com",
  location: "Bayonne, NJ",
  description:
    "Bay1 Consulting Group is the bridge between your business and AI that works: team training, AI strategy, and websites that bring in work.",
  /** The one lead offer for now. Requests go to `email`. */
  offer: {
    label: "Request a website review",
    subject: "Website review request",
  },
  // Links render only when set.
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
