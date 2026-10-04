/** Flat version of the 3D mark: three slanted slats, the last one lit. */
export function Mark({ className = "h-5 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 22" className={className} aria-hidden>
      <path d="M5 0h5L5 22H0z" fill="currentColor" />
      <path d="M15 0h5l-5 22h-5z" fill="currentColor" />
      <path d="M25 0h5l-5 22h-5z" className="fill-signal" />
    </svg>
  );
}

export function Wordmark() {
  return (
    <span className="flex items-center gap-3">
      <Mark />
      <span className="display text-[15px] tracking-[0.06em]">Bay1</span>
    </span>
  );
}
