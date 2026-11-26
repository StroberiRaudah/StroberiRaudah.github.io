import Image from "next/image";
import { Label } from "./Label";

const points = [
  "Led the build of a mobile booking app for staff, because the web eBooking system was hard to use on a phone.",
  "Turned staff needs into a Business Requirements Specification, then built the Laravel REST API and MySQL database.",
  "Wrote the technical documentation and helped run organisational programmes.",
];
const tags = ["Flutter", "Laravel", "MySQL", "REST + JSON", "BRS"];

export function Experience() {
  return (
    <section id="experience" className="flex flex-col gap-[22px] pb-22 md:gap-10 md:pb-34">
      <div className="flex flex-col gap-2.5 md:gap-3.5">
        <Label>where I work</Label>
        <h2 className="font-display text-[40px] leading-none font-bold tracking-[-0.04em] md:text-[64px]">Experience</h2>
      </div>
      <div className="grid overflow-hidden rounded-[22px] bg-white shadow-[0_20px_44px_rgba(42,24,32,0.10)] md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] md:rounded-[28px] md:shadow-[0_30px_60px_rgba(42,24,32,0.10)]">
        <Image
          src="/perkeso-team.jpg"
          alt="Raudah with the PERKESO team on stage"
          width={1200}
          height={800}
          className="aspect-[3/2] w-full object-cover md:aspect-auto md:h-full md:min-h-[420px]"
        />
        <div className="flex flex-col gap-3.5 px-5 pt-[22px] pb-6 md:gap-[18px] md:px-11 md:py-10">
          <span className="font-mono text-[10px] tracking-[0.05em] text-muted uppercase md:text-[11px]">Sep 2026 – now · Kuala Lumpur</span>
          <div className="flex flex-col gap-1.5">
            <span className="font-display text-[30px] leading-none font-bold tracking-[-0.035em] md:text-[40px]">IT Intern</span>
            <span className="font-display text-[15px] font-semibold text-plum md:text-lg">PERKESO · Social Security Organisation</span>
          </div>
          <ul className="flex flex-col gap-2.5 text-sm leading-relaxed text-[#4A3A42] md:text-base">
            {points.map((p) => (
              <li key={p} className="flex items-baseline gap-3">
                <span aria-hidden className="size-[7px] shrink-0 -translate-y-0.5 rounded-full bg-plum" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-1.5">
            {tags.map((t) => (
              <span key={t} className="rounded-full bg-card px-2.5 py-1.5 font-mono text-[10px] tracking-[0.03em] md:px-3 md:py-[7px] md:text-[11px]">
                {t}
              </span>
            ))}
          </div>
          <a href="#projects" className="self-start border-b-[1.5px] border-current pb-0.5 font-mono text-xs text-plum md:text-[13px]">
            see the app I built ↓
          </a>
        </div>
      </div>
    </section>
  );
}
