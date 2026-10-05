import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "404 Not Found",
  description: "Page not found.",
};

export default function NotFound() {
  return (
    <main id="top" className="pt-0 min-h-[70vh] flex flex-col justify-center">
      <section className="bg-navy text-[#F7F7F4] py-24">
        <div className="wrap max-w-xl">
          <div className="label text-steel-lt">404 Error</div>
          <h1 className="text-[length:var(--h1)] mt-4 font-semibold leading-[1.02] tracking-[-0.035em]">
            Page not found.
          </h1>
          <p className="mt-6 text-[length:var(--lead)] text-steel-lt">
            The page you are looking for does not exist or has moved.
          </p>
          <div className="mt-10">
            <ButtonLink href="/" variant="ember">
              Return home
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
