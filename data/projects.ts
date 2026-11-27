export type Project = {
  name: string;
  kind: string;
  year: string;
  img: string;
  desc: string;
  /** Tool names; ones that match "What I use" get their logo. */
  stack: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    name: "SafeShift",
    kind: "Field incident reporting",
    year: "2026 – now",
    img: "/projects/safeshift.svg",
    desc: "Report hazards from the field and follow each one until it is closed, with separate access for workers, supervisors and HSE admins.",
    stack: ["C#", "ASP.NET Core", "React", "TypeScript", "Vite", "REST + JSON", "JWT", "SQL Server", "Azure", "Docker", "GitHub Actions", "xUnit", "Vitest"],
    href: "https://github.com/StroberiRaudah/SafeShift",
  },
  {
    name: "LexiMath",
    kind: "Handwritten maths recognition · final year project",
    year: "2025 – 2026",
    img: "/projects/leximath.jpg",
    desc: "Write an equation by hand and a CNN–ViT model reads it at 99.18% accuracy, then explains each step, checked by SymPy. Presented at APCECS 2026.",
    stack: ["Python", "Flask", "TensorFlow", "CNN", "ViT", "YOLO", "Claude API", "SymPy", "HTML / CSS", "JavaScript"],
    href: "https://github.com/StroberiRaudah/LexiMath",
  },
  {
    name: "Smart Booking",
    kind: "Room & vehicle booking · PERKESO internship",
    year: "2026",
    img: "/projects/booking.jpg",
    desc: "One Flutter app for Android and iOS to book meeting rooms and official cars. Staff sign in with their work account, see live availability and approvals, and get push alerts; drivers follow each trip on Google Maps. When a slot clashes, it suggests another room or time.",
    stack: ["Flutter", "Dart", "Laravel", "PHP", "REST + JSON", "MySQL", "Firebase", "Laravel Reverb", "LDAP", "Google Maps"],
  },
  {
    name: "This portfolio",
    kind: "Personal site",
    year: "2026",
    img: "/projects/portfolio.png",
    desc: "Designed in Claude Design, built with Next.js and shipped to GitHub Pages on every push.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "GitHub Actions", "Git", "GitHub"],
    href: "https://github.com/StroberiRaudah/StroberiRaudah.github.io",
  },
  {
    name: "Komander Kesatria",
    kind: "Uniform inventory · group project",
    year: "2025",
    img: "/projects/kesatria.jpg",
    desc: "Uniform booking with stock checks and admin approval, documented from requirements to test report.",
    stack: ["Java", "JSP", "Servlets", "MySQL", "HTML / CSS"],
    href: "https://github.com/StroberiRaudah/Kesatria-Inventory-Management-System-/",
  },
];
