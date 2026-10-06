import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(" ");

export function Tag({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  tone?: string;
}) {
  return (
    <div className={cx("label text-steel", className)}>
      {children}
    </div>
  );
}

export function DisplayHeading({
  children,
  lines,
  as: As = "h2",
  className,
}: {
  children?: ReactNode;
  lines?: readonly string[];
  as?: "h1" | "h2" | "h3" | "h4" | "p";
  size?: string;
  className?: string;
}) {
  return (
    <As className={cx("text-[length:var(--h2)] font-semibold tracking-[-0.035em] leading-[1.02]", className)}>
      {lines ? lines.join(" ") : children}
    </As>
  );
}

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  theme?: string;
  stage?: number;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cx("py-[clamp(72px,9vw,140px)]", className)}>
      {children}
    </section>
  );
}

export function ButtonLink({
  variant = "ember",
  className,
  children,
  ...props
}: ComponentProps<typeof Link> & { variant?: "ember" | "line" | "ink" | "solid" }) {
  const base =
    "inline-flex items-center justify-center gap-2 h-12 px-5 rounded-[6px] font-semibold text-[0.95rem] transition-[transform,background,color,box-shadow] duration-200 active:scale-[96%] cursor-pointer select-none text-center";

  const resolvedVariant = variant === "solid" ? "ember" : variant;

  const styles = {
    ember: "bg-ember text-navy hover:bg-[#F0682F]",
    line: "bg-transparent text-[#F7F7F4] shadow-[inset_0_0_0_1.5px_rgba(169,182,198,0.55)] hover:shadow-[inset_0_0_0_1.5px_#F7F7F4]",
    ink: "bg-navy text-white hover:bg-navy-2",
  };

  return (
    <Link {...props} className={cx(base, styles[resolvedVariant], className)}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "ember",
  className,
  children,
  ...props
}: ComponentProps<"button"> & { variant?: "ember" | "line" | "ink" | "solid" }) {
  const base =
    "inline-flex items-center justify-center gap-2 h-12 px-5 rounded-[6px] font-semibold text-[0.95rem] transition-[transform,background,color,box-shadow] duration-200 active:scale-[96%] cursor-pointer select-none text-center border-0";

  const resolvedVariant = variant === "solid" ? "ember" : variant;

  const styles = {
    ember: "bg-ember text-navy hover:bg-[#F0682F]",
    line: "bg-transparent text-[#F7F7F4] shadow-[inset_0_0_0_1.5px_rgba(169,182,198,0.55)] hover:shadow-[inset_0_0_0_1.5px_#F7F7F4]",
    ink: "bg-navy text-white hover:bg-navy-2",
  };

  return (
    <button {...props} className={cx(base, styles[resolvedVariant], className)}>
      {children}
    </button>
  );
}

export { cx };
