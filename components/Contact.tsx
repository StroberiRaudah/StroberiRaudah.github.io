import { siGithub, siLinkedin } from "simple-icons";
import { profile } from "@/data/profile";

const socials = [
  { label: "GitHub", href: profile.links.github, icon: siGithub, color: "#2A1820" },
  { label: "LinkedIn", href: profile.links.linkedin, icon: siLinkedin, color: "#0A66C2" },
];

export function Contact() {
  return (
    <section id="contact" className="flex flex-wrap items-center justify-between gap-3 pb-12 md:gap-6 md:pb-18">
      <a
        href={`mailto:${profile.email}`}
        className="inline-flex items-center gap-3 rounded-full bg-plum px-6 py-4 font-display text-[19px] font-bold text-white transition hover:opacity-90 md:px-7 md:py-[18px] md:text-[22px]"
      >
        say hi <span aria-hidden>→</span>
      </a>
      <nav aria-label="Social" className="flex gap-2.5">
        {socials.map(({ label, href, icon, color }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="flex size-12 items-center justify-center rounded-2xl bg-white transition duration-300 hover:-translate-y-[3px] hover:bg-[#EFE6EB]"
          >
            <svg viewBox="0 0 24 24" aria-hidden className="size-5">
              <path d={icon.path} fill={color} />
            </svg>
          </a>
        ))}
      </nav>
    </section>
  );
}
