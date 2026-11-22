import { reading } from "@/data/reading";
import { Label } from "./Label";

export function CatchingUp() {
  return (
    <section className="flex flex-col gap-3.5 pb-22 md:gap-5 md:pb-34">
      <Label>catching up on</Label>
      <div
        aria-label="Catching up on"
        className="overflow-hidden rounded-3xl bg-ink shadow-[0_30px_60px_rgba(42,24,32,0.18)] md:rounded-[28px]"
      >
        <div className="flex items-center gap-1.5 border-b border-[#3D2A33] px-5 py-4 md:px-6">
          <span className="size-2.5 rounded-full bg-blush" />
          <span className="size-2.5 rounded-full bg-lilac" />
          <span className="size-2.5 rounded-full bg-sand" />
          <span className="ml-3 font-mono text-xs text-[#A88A98]">catching-up.md</span>
        </div>
        {reading.map(({ source, title, href, progress }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="grid gap-2.5 border-t border-[#3D2A33] p-[18px] first-of-type:border-t-0 md:grid-cols-[minmax(0,1fr)_200px_48px] md:items-center md:gap-7 md:px-8 md:py-[22px]"
          >
            <span className="flex flex-col gap-1.5">
              <span className="flex justify-between font-mono text-[10px] tracking-[0.06em] text-[#A88A98] uppercase md:text-[11px]">
                {source}
                <span className="text-[#F3D9A4] md:hidden">{progress}%</span>
              </span>
              <span className="font-display text-base leading-snug font-medium text-[#F3ECEF] md:text-lg">
                {title} <span aria-hidden className="text-blush">↗</span>
              </span>
            </span>
            <span aria-hidden className="block h-[3px] overflow-hidden rounded-full bg-[#3D2A33] md:h-1">
              <span className="block h-full rounded-full bg-blush" style={{ width: `${progress}%` }} />
            </span>
            <span className="hidden text-right font-mono text-sm text-[#F3D9A4] md:block">{progress}%</span>
          </a>
        ))}
      </div>
    </section>
  );
}
