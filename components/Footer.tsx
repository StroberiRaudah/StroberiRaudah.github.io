import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="flex flex-col gap-1.5 border-t border-line pt-5 pb-8 font-mono text-[11px] leading-relaxed text-muted md:flex-row md:flex-wrap md:justify-between md:gap-x-6 md:pt-6 md:pb-10 md:text-xs">
      <span>
        © {profile.year} {profile.name}
      </span>
      <span>{profile.credits}</span>
    </footer>
  );
}
