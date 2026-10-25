"use client";

import { profile } from "@/data/profile";
import { useTypewriter } from "@/hooks/useTypewriter";
import { Label } from "./Label";

const kw = "text-blush";
const type = "text-[#D8C6F0]";
const str = "text-[#F3D9A4]";

export function Motto() {
  const typed = useTypewriter(profile.motto);

  return (
    <section className="flex flex-col gap-3.5 pb-22 md:gap-5 md:pb-30">
      <Label>best said in code</Label>
      <div className="overflow-hidden rounded-3xl bg-ink shadow-[0_30px_60px_rgba(42,24,32,0.18)] md:rounded-[28px]">
        <div className="flex items-center gap-1.5 border-b border-[#3D2A33] px-5 py-4 md:px-6">
          <span className="size-2.5 rounded-full bg-blush" />
          <span className="size-2.5 rounded-full bg-lilac" />
          <span className="size-2.5 rounded-full bg-sand" />
          <span className="ml-3 font-mono text-xs text-[#A88A98]">raudah.dart</span>
        </div>
        <pre className="overflow-x-auto px-5 pt-5 pb-6 font-mono text-[12.5px] leading-[1.8] whitespace-pre-wrap text-[#F3ECEF] md:px-8 md:pt-7 md:pb-8 md:text-[17px] md:whitespace-pre">
          <span className={kw}>class</span> <span className={type}>Raudah</span> <span className={kw}>extends</span>{" "}
          <span className={type}>StatelessWidget</span> {"{\n  "}
          <span className="text-[#A88A98]">@override</span>
          {"\n  "}
          <span className={type}>Widget</span> build(<span className={type}>BuildContext</span> context) {"{\n    "}
          <span className={kw}>return</span> <span className={type}>Text</span>(
          <span className={str}>&apos;{typed}</span>
          <span aria-hidden className="inline-block h-[1.1em] w-2 animate-blink bg-blush align-[-3px]" />
          <span className={str}>&apos;</span>);{"\n  }\n}"}
        </pre>
      </div>
    </section>
  );
}
