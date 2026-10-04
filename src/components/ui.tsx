import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(" ");

/** Bracketed mono label, e.g. [ 01 / AI TRAINING ]. */
export function Tag({ children, tone = "signal", className }: { children: ReactNode; tone?: "signal" | "plain"; className?: string }) {
  return (
    <span
      className={cx(
        "label inline-flex items-center gap-2 px-2 py-1",
        tone === "signal" ? "bg-signal text-carbon" : "text-muted",
        className,
      )}
    >
      <span aria-hidden>[</span>
      {children}
      <span aria-hidden>]</span>
    </span>
  );
}

const sizes = {
  xl: "text-[13vw] md:text-[8.4vw]",
  lg: "text-[11vw] md:text-[6vw]",
  md: "text-[9vw] md:text-[4.2vw]",
  sm: "text-[7vw] md:text-[2.6vw]",
} as const;

/**
 * Display heading set as explicit lines. Lines after the first are indented behind a short rule,
 * drawn in CSS so the copy never contains a dash character.
 */
export function DisplayHeading({
  lines,
  as: As = "h2",
  size = "lg",
  className,
}: {
  lines: readonly string[];
  as?: "h1" | "h2" | "h3" | "p";
  size?: keyof typeof sizes;
  className?: string;
}) {
  return (
    <As className={cx("display reveal", sizes[size], className)} aria-label={lines.join(" ")}>
      {lines.map((line, i) => (
        <span key={i} className="reveal-line" aria-hidden style={{ ["--i" as string]: i }}>
          <span className={cx(i > 0 && "flex items-center gap-[0.35em] pl-[0.6em]")}>
            {i > 0 && <span className="inline-block h-[0.08em] w-[0.9em] shrink-0 bg-current" />}
            {line}
          </span>
        </span>
      ))}
    </As>
  );
}

export function ButtonLink({
  variant = "solid",
  className,
  children,
  ...props
}: ComponentProps<typeof Link> & { variant?: "solid" | "line" }) {
  return (
    <Link
      {...props}
      className={cx(
        "label inline-flex h-12 items-center justify-center px-6 text-[12px] transition-colors duration-300",
        variant === "solid"
          ? "bg-signal text-carbon hover:bg-fg hover:text-bg"
          : "border border-current text-fg hover:border-signal hover:text-signal",
        className,
      )}
    >
      {children}
    </Link>
  );
}

/** Top-level page section. Every section declares the theme the page should ease into. */
export function Section({
  theme,
  stage,
  id,
  className,
  children,
}: {
  theme: "dark" | "light";
  stage?: number;
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} data-theme={theme} data-stage={stage} className={cx("relative", className)}>
      {children}
    </section>
  );
}

export { cx };
