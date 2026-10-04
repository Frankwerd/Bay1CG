export const site = {
  name: "Bay1 Consulting Group",
  short: "Bay1",
  founder: "Francis John Libutti",
  email: "hello@bay1consulting.com",
  location: "Bayonne, NJ",
  description:
    "Bay1 Consulting Group helps small and mid-sized businesses put AI to work: team training, AI strategy, and web development.",
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
