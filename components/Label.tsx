type Props = { children: React.ReactNode; className?: string };

/** The small monospace caption above each section. */
export function Label({ children, className = "" }: Props) {
  return <span className={`font-mono text-xs text-muted md:text-[13px] ${className}`}>{children}</span>;
}
