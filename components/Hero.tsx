import Image from "next/image";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="top"
      className="flex animate-rise flex-col-reverse items-start gap-6 pt-8 pb-16 md:flex-row md:items-end md:justify-between md:gap-10 md:pt-14"
    >
      <div className="flex min-w-0 flex-1 flex-col gap-6 md:gap-8 md:pb-6">
        <h1 className="font-display text-[64px] leading-[0.95] font-bold tracking-[-0.05em] md:text-[124px]">
          Hi, I’m
          <br />
          <span className="text-plum">{profile.name}.</span>
        </h1>
        <p className="max-w-[520px] font-display text-[22px] leading-snug tracking-[-0.02em] text-muted md:text-[30px]">
          {profile.hook}
        </p>
        <div className="flex flex-col gap-2.5 font-mono text-xs text-muted md:flex-row md:flex-wrap md:items-center md:gap-x-5 md:text-[13px]">
          <span>{profile.role}</span>
          <span className="inline-flex items-center gap-2.5">
            <Image src="/uitm.png" alt="UiTM logo" width={24} height={30} className="h-[30px] w-auto" />
            {profile.university}
          </span>
        </div>
      </div>
      <Image
        src="/avatar.png"
        alt={`Illustrated portrait of ${profile.name}`}
        width={867}
        height={900}
        priority
        className="w-[220px] shrink-0 animate-float self-end drop-shadow-[0_24px_28px_rgba(94,43,64,0.14)] md:w-[380px] md:self-auto"
      />
    </section>
  );
}
