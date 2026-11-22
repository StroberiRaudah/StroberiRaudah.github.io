"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";
import { toolGroups, type Tool } from "@/data/tools";
import { useMedia } from "@/hooks/useMedia";
import { Label } from "./Label";
import { ToolIcon } from "./ToolIcon";

const byName = new Map<string, Tool>(toolGroups.flatMap((g) => g.tools.map((t) => [t.name, t] as const)));
const n = projects.length;
const wrap = (v: number) => (v > n / 2 ? v - n : v < -n / 2 ? v + n : v);

export function Projects() {
  const wide = useMedia("(min-width: 768px)");
  const reduced = useMedia("(prefers-reduced-motion: reduce)");
  const [turn, setTurn] = useState(0);
  const [drag, setDrag] = useState(0); // fraction of a card, while dragging
  const pause = useRef(0); // auto-spin ticks to skip after the user takes over
  const start = useRef<{ x: number; step: number } | null>(null);
  const moved = useRef(false);

  useEffect(() => {
    if (reduced) return;
    const timer = setInterval(() => {
      if (start.current) return;
      if (pause.current > 0) pause.current -= 1;
      else setTurn((t) => t + 1);
    }, 3400);
    return () => clearInterval(timer);
  }, [reduced]);

  const spinTo = (t: number) => {
    pause.current = 3;
    setTurn(t);
  };

  const cur = ((turn % n) + n) % n;
  const project = projects[cur];
  const [w, h, r] = wide ? [420, 280, 520] : [250, 167, 210];

  return (
    <section id="projects" className="flex flex-col gap-6 pb-22 md:gap-10 md:pb-34">
      <div className="flex items-end justify-between gap-4">
        <div className="flex flex-col gap-2.5 md:gap-3.5">
          <Label>things I made</Label>
          <h2 className="font-display text-[40px] leading-none font-bold tracking-[-0.04em] md:text-[64px]">Projects</h2>
        </div>
        <div className="flex items-center gap-2 md:gap-2.5">
          {[
            { label: "Previous project", arrow: "←", delta: -1 },
            { label: "Next project", arrow: "→", delta: 1 },
          ].map(({ label, arrow, delta }) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              onClick={() => spinTo(turn + delta)}
              className="flex size-10 items-center justify-center rounded-full border-[1.5px] border-ink text-base transition-colors hover:bg-ink hover:text-white md:size-12 md:text-lg"
            >
              {arrow}
            </button>
          ))}
        </div>
      </div>

      <div
        className="relative h-[230px] cursor-grab touch-pan-y select-none [perspective-origin:50%_40%] [perspective:1000px] active:cursor-grabbing md:h-[380px] md:[perspective:1600px]"
        onPointerDown={(e) => {
          start.current = { x: e.clientX, step: wide ? 300 : 170 };
          moved.current = false;
          e.currentTarget.setPointerCapture(e.pointerId);
        }}
        onPointerMove={(e) => {
          if (!start.current) return;
          const dx = e.clientX - start.current.x;
          if (Math.abs(dx) > 6) moved.current = true;
          if (moved.current) setDrag(dx / start.current.step);
        }}
        onPointerUp={() => {
          if (!start.current) return;
          start.current = null;
          let steps = Math.round(drag);
          if (!steps && Math.abs(drag) > 0.15) steps = drag > 0 ? 1 : -1;
          setDrag(0);
          if (moved.current) spinTo(turn - steps);
        }}
        onPointerCancel={() => {
          start.current = null;
          setDrag(0);
        }}
      >
        <div
          aria-hidden
          className="absolute inset-x-[10%] bottom-0 h-7 rounded-[50%] bg-[radial-gradient(closest-side,rgba(94,43,64,0.18),rgba(94,43,64,0))] md:h-10"
        />
        <div className="absolute top-2 left-1/2 w-0 [transform-style:preserve-3d] md:top-5" style={{ height: h }}>
          {projects.map((p, i) => {
            const rel = wrap(wrap(((i - turn) % n + n) % n) + drag);
            const dist = Math.abs(rel);
            const angle = (rel * 2 * Math.PI) / n;
            return (
              <button
                key={p.name}
                type="button"
                aria-label={`Show ${p.name}`}
                onClick={() => {
                  if (moved.current) return;
                  spinTo(turn + (((i - cur + n + 2) % n) - 2));
                }}
                className="absolute top-0 overflow-hidden rounded-2xl bg-white p-0 shadow-[0_24px_50px_rgba(42,24,32,0.18)] md:rounded-[22px]"
                style={{
                  left: -w / 2,
                  width: w,
                  height: h,
                  zIndex: Math.round(10 - dist * 2),
                  opacity: Math.max(0.3, 1 - 0.33 * dist),
                  filter: `saturate(${Math.max(0.5, 1 - 0.25 * dist)})`,
                  transform: `translateX(${Math.sin(angle) * r}px) translateZ(${(Math.cos(angle) - 1) * r}px) rotateY(${-rel * 14}deg)`,
                  transition: drag ? "none" : "transform 1.1s cubic-bezier(.2,.8,.2,1), opacity .8s, filter .8s",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- static export, covers are SVG */}
                <img src={p.img} alt="" draggable={false} className="pointer-events-none block size-full object-cover" />
              </button>
            );
          })}
        </div>
      </div>
      <span className="self-center font-mono text-[11px] text-[#A8949E] md:text-xs">
        {wide ? "click" : "tap"} or drag to spin
      </span>

      <div aria-live="polite" className="grid gap-3 md:grid-cols-[360px_minmax(0,1fr)] md:gap-12 md:border-t md:border-line md:pt-8">
        <div className="flex flex-col gap-2.5">
          <span className="font-mono text-[11px] text-muted md:text-xs">
            {String(cur + 1).padStart(2, "0")} / {String(n).padStart(2, "0")} · {project.year}
          </span>
          <span className="font-display text-[30px] leading-[1.05] font-bold tracking-[-0.03em] md:text-[44px]">{project.name}</span>
          <span className="font-mono text-[11px] tracking-[0.04em] text-plum uppercase md:text-xs">{project.kind}</span>
        </div>
        <div className="flex flex-col gap-3 md:gap-[18px]">
          <p className="max-w-[560px] text-[15px] leading-relaxed text-[#4A3A42] md:text-lg">{project.desc}</p>
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            {project.stack.map((name) => {
              const tool = byName.get(name);
              return (
                <span
                  key={name}
                  className="inline-flex items-center gap-1.5 rounded-full bg-card px-2.5 py-1.5 font-mono text-[10px] tracking-[0.03em] md:px-3 md:py-[7px] md:text-[11px]"
                >
                  {tool && <ToolIcon icon={tool.icon} color={tool.color} className="size-3 md:size-[13px]" strokeWidth={2} />}
                  {name}
                </span>
              );
            })}
          </div>
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start border-b-[1.5px] border-current pb-0.5 font-mono text-xs text-plum md:text-[13px]"
            >
              view on GitHub ↗
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
