"use client";

import { useEffect, useState } from "react";
import { activities, highlights } from "@/data/activities";
import { useMedia } from "@/hooks/useMedia";
import { Label } from "./Label";

const tilt = [-1.6, 1.2, -0.8, 1.6, -1.2, 0.8, -1.6, 1.2];

export function Beyond() {
  const reduced = useMedia("(prefers-reduced-motion: reduce)");
  const roomy = useMedia("(min-width: 640px)");
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const timer = setInterval(() => setSlide((s) => s + 1), 3000);
    return () => clearInterval(timer);
  }, [reduced]);

  return (
    <section id="beyond" className="flex flex-col gap-[22px] pb-22 md:gap-10 md:pb-34">
      <div className="flex flex-col gap-2.5 md:gap-3.5">
        <Label>off the keyboard</Label>
        <h2 className="font-display text-[40px] leading-none font-bold tracking-[-0.04em] md:text-[64px]">Beyond code</h2>
      </div>

      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-[22px]">
        {highlights.map(({ value, label }) => (
          <div
            key={label}
            className="flex flex-col gap-1 rounded-2xl bg-card p-3.5 md:gap-1.5 md:rounded-none md:border-t-2 md:border-ink md:bg-transparent md:px-0 md:pt-5 md:pb-0"
          >
            <span className="font-display text-[26px] leading-none font-bold tracking-[-0.03em] text-plum md:text-[44px] md:tracking-[-0.04em]">
              {value}
            </span>
            <span className="text-xs leading-snug text-muted md:text-[13px]">{label}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3 sm:grid sm:grid-cols-2 sm:gap-x-[22px] sm:gap-y-7 lg:grid-cols-4">
        {activities.map((act, i) => {
          const shown = act.photos.length ? slide % act.photos.length : 0;
          return (
            <div
              key={act.title}
              className="flex items-center gap-3.5 rounded-[14px] bg-white p-2.5 pr-3.5 shadow-[0_10px_24px_rgba(42,24,32,0.08)] [transform:rotate(var(--r))] transition duration-300 ease-soft hover:[transform:translateY(-4px)] sm:flex-col sm:items-stretch sm:gap-3.5 sm:rounded-md sm:p-3 sm:pb-[18px] sm:shadow-[0_16px_34px_rgba(42,24,32,0.10)]"
              style={{ "--r": `${tilt[i] * (roomy ? 1 : 0.45)}deg` } as React.CSSProperties}
            >
              <div
                className="relative flex size-[84px] shrink-0 items-center justify-center overflow-hidden rounded-[10px] sm:aspect-[4/3] sm:size-auto sm:rounded-[3px]"
                style={{ background: act.tint, color: act.ink }}
              >
                {act.photos.length ? (
                  act.photos.map((src, j) => (
                    // eslint-disable-next-line @next/next/no-img-element -- static export
                    <img
                      key={src}
                      src={src}
                      alt=""
                      className="absolute inset-0 size-full object-cover transition-opacity duration-900"
                      style={{ opacity: j === shown ? 1 : 0 }}
                    />
                  ))
                ) : (
                  <svg viewBox="0 0 24 24" aria-hidden className="size-[30px] sm:size-11">
                    <path d={act.glyph} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {act.photos.length > 1 && (
                  <span className="absolute right-1.5 bottom-1.5 rounded-full bg-ink/60 px-[7px] py-[3px] font-mono text-[10px] text-white sm:right-2 sm:bottom-2">
                    {shown + 1} / {act.photos.length}
                  </span>
                )}
              </div>
              <div className="flex min-w-0 flex-col gap-1 sm:gap-[5px] sm:px-1">
                <span className="font-mono text-[10px] tracking-[0.04em] uppercase" style={{ color: act.ink }}>
                  {act.year} · {act.tag}
                </span>
                <span className="font-display text-base leading-tight font-bold tracking-[-0.015em] sm:text-[17px]">{act.title}</span>
                <span className="text-[12.5px] leading-snug text-muted sm:text-[13px]">{act.desc}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
