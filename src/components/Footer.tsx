import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-navy text-steel-lt text-[0.85rem] border-t border-white/10">
      <div className="wrap flex flex-wrap justify-between items-center gap-3 py-[22px]">
        <span>
          &copy; {new Date().getFullYear()} {site.name}, {site.location}
        </span>
        <nav className="flex gap-5" aria-label="Footer">
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy policy
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms of service
          </Link>
        </nav>
      </div>
    </footer>
  );
}
