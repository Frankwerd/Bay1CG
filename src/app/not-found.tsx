import type { Metadata } from "next";
import { ButtonLink, DisplayHeading, Section, Tag } from "@/components/ui";

export const metadata: Metadata = {
  title: "404 Not Found",
  description: "Page not found.",
};

export default function NotFound() {
  return (
    <Section theme="dark" className="flex min-h-screen items-center py-32">
      <div className="wrap max-w-xl">
        <Tag>404 Error</Tag>
        <DisplayHeading lines={["Page not", "found"]} className="mt-6" />
        <p className="fade-up mt-6 text-lg text-stone">
          The page you are looking for does not exist or has moved.
        </p>
        <div className="fade-up mt-10">
          <ButtonLink href="/" variant="solid">
            Return home
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
