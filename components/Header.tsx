import Image from "next/image";
import { profile } from "@/data/profile";

export function Header() {
  return (
    <header className="flex items-center justify-between py-5 md:py-7">
      <a href="#top" aria-label="Home" className="flex items-center gap-3 font-display text-base font-bold md:text-lg">
        <Image src="/avatar.png" alt="" width={40} height={42} className="h-[42px] w-10 object-contain object-bottom" priority />
        {profile.name.toLowerCase()}
      </a>
      <span className="inline-flex items-center gap-2 font-mono text-xs text-muted">
        <span className="size-2 rounded-full bg-[#4E9A6A]" />
        open to work
      </span>
    </header>
  );
}
