import { toolGroups } from "@/data/tools";
import { ToolCard } from "./ToolCard";

export function Tools() {
  return (
    <section id="tools" className="flex flex-col gap-5 pb-22 md:gap-7 md:pb-34">
      <h2 className="font-display text-[40px] leading-none font-bold tracking-[-0.04em] md:text-[64px]">What I use</h2>
      {toolGroups.map((group) => (
        <div
          key={group.label}
          className="grid gap-3 border-t border-line pt-[18px] md:grid-cols-[150px_minmax(0,1fr)] md:gap-6 md:pt-6"
        >
          <h3 className="font-display text-xl font-bold tracking-[-0.03em] text-plum md:pt-1.5 md:text-2xl">{group.label}</h3>
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-2.5">
            {group.tools.map((tool) => (
              <ToolCard key={`${group.label}-${tool.name}`} tool={tool} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
