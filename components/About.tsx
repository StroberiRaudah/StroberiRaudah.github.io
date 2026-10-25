import { profile } from "@/data/profile";
import { Label } from "./Label";

export function About() {
  const { before, highlight, after } = profile.about;
  return (
    <section className="grid animate-rise gap-2.5 pb-16 [animation-delay:.15s] md:grid-cols-[160px_minmax(0,1fr)] md:gap-8 md:pb-22">
      <Label className="md:pt-3.5">for me,</Label>
      <p className="font-display text-[27px] leading-tight font-medium tracking-[-0.025em] md:text-[38px]">
        {before}
        <span className="text-plum">{highlight}</span>
        {after}
      </p>
    </section>
  );
}
