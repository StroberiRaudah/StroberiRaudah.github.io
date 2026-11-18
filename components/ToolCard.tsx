import type { Tool } from "@/data/tools";

type Props = { tool: Tool; index: number };

export function ToolCard({ tool, index }: Props) {
  const { role, name, desc, color, icon } = tool;
  return (
    <div
      className="flex min-h-[176px] animate-rise flex-col gap-3.5 rounded-[20px] bg-card px-4 pt-[18px] pb-5 transition duration-300 ease-soft hover:-translate-y-1 hover:bg-white md:min-h-[196px] md:gap-[18px] md:rounded-[22px] md:px-5 md:pt-[22px] md:pb-6"
      style={{ animationDelay: `${index * 0.06}s` }}
    >
      <span className="font-mono text-[11px] tracking-[0.04em] text-muted uppercase">{role}</span>
      <svg viewBox="0 0 24 24" aria-hidden className="size-7 md:size-8">
        {icon.kind === "fill" ? (
          <path d={icon.path} fill={color} />
        ) : (
          <path d={icon.path} fill="none" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
      <span className="flex flex-col gap-1">
        <span className="font-display text-lg font-bold tracking-[-0.02em] md:text-xl">{name}</span>
        <span className="text-[13px] leading-[1.45] text-muted">{desc}</span>
      </span>
    </div>
  );
}
