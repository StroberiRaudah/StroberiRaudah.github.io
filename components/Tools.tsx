import { toolGroups } from "@/data/tools";
import { ToolCard } from "./ToolCard";

export function Tools() {
  return (
    <section id="tools" className="flex flex-col gap-9 pb-20 md:gap-12 md:pb-30">
      <h2 className="font-display text-[40px] leading-none font-bold tracking-[-0.04em] md:text-[64px]">What I use</h2>
      {toolGroups.map((group) => (
        <div
          key={group.label}
          className="grid gap-3.5 border-t border-line pt-5 md:grid-cols-[200px_minmax(0,1fr)] md:gap-8 md:pt-7"
        >
          <h3 className="font-display text-2xl font-bold tracking-[-0.03em] text-plum md:text-[30px]">{group.label}</h3>
          <div className="grid grid-cols-2 gap-2.5 md:gap-3 lg:grid-cols-3">
            {group.tools.map((tool, i) => (
              <ToolCard key={`${group.label}-${tool.name}`} tool={tool} index={i} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
