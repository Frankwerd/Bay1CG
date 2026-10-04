import Link from "next/link";
import { nav, site } from "@/lib/site";
import { Mark } from "./Logo";

const socialLabels: Record<keyof typeof site.social, string> = {
  linkedin: "LinkedIn",
  facebook: "Facebook",
  instagram: "Instagram",
  github: "GitHub",
};

export default function Footer() {
  const socials = (Object.keys(site.social) as (keyof typeof site.social)[]).filter((k) => site.social[k]);

  return (
    <footer data-theme="dark" className="relative z-10 bg-carbon text-bone">
      <div className="wrap grid gap-12 border-t border-line pt-16 pb-10 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="label text-stone">Start a project</p>
          <a
            href={`mailto:${site.email}`}
            className="display mt-4 block text-[7vw] break-all transition-colors hover:text-signal md:text-[3vw]"
          >
            {site.email}
          </a>
          <p className="mt-6 max-w-sm text-stone">{site.location}. Working with teams across the US.</p>
        </div>

        <div className="md:col-span-3">
          <p className="label text-stone">Pages</p>
          <ul className="mt-4 space-y-2">
            {[...nav, { href: "/contact", label: "Contact" }].map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-signal">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="label text-stone">Elsewhere</p>
          <ul className="mt-4 space-y-2">
            {socials.map((k) => (
              <li key={k}>
                <a href={site.social[k]} target="_blank" rel="noreferrer" className="transition-colors hover:text-signal">
                  {socialLabels[k]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="wrap overflow-hidden">
        <p className="display flex items-end gap-[0.15em] text-[24vw] leading-[0.8] text-bone/95 select-none" aria-hidden>
          <Mark className="mb-[0.06em] h-[0.7em] w-auto" />
          Bay1
        </p>
      </div>

      <div className="wrap flex flex-col gap-3 border-t border-line py-6 text-sm text-stone md:flex-row md:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-bone">
            Privacy policy
          </Link>
          <Link href="/terms" className="hover:text-bone">
            Terms of service
          </Link>
        </div>
      </div>
    </footer>
  );
}
