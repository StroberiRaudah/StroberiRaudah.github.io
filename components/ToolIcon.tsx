import type { ToolIcon as Icon } from "@/data/tools";

type Props = { icon: Icon; color: string; className?: string; strokeWidth?: number };

export function ToolIcon({ icon, color, className = "size-6", strokeWidth = 1.8 }: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={`shrink-0 ${className}`}>
      {icon.kind === "fill" ? (
        <path d={icon.path} fill={color} />
      ) : (
        <path d={icon.path} fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}
