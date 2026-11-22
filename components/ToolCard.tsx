import type { Tool } from "@/data/tools";
import { ToolIcon } from "./ToolIcon";

export function ToolCard({ tool }: { tool: Tool }) {
  const { role, name, desc, color, icon } = tool;
  return (
    <div
      title={desc}
      className="flex min-w-0 items-center gap-3 rounded-2xl bg-card p-3.5 transition duration-300 ease-soft hover:-translate-y-0.5 hover:bg-white md:gap-3.5 md:rounded-[18px] md:px-[18px] md:py-4"
    >
      <ToolIcon icon={icon} color={color} className="size-6 md:size-7" />
      <span className="flex min-w-0 flex-col gap-[3px]">
        <span className="font-display text-[15px] leading-[1.15] font-bold tracking-[-0.015em] md:text-[17px]">{name}</span>
        <span className="truncate font-mono text-[9px] tracking-[0.04em] text-muted uppercase md:text-[10px]">{role}</span>
      </span>
    </div>
  );
}
