export type Activity = {
  year: string;
  title: string;
  tag: string;
  desc: string;
  /** Photo well colours, used behind the icon when there are no photos. */
  tint: string;
  ink: string;
  /** Line icon on a 24×24 grid. */
  glyph: string;
  photos: string[];
};

const a = (name: string) => `/activities/${name}.jpg`;

export const activities: Activity[] = [
  {
    year: "2026", title: "Hackathon UiTM Jasin", tag: "Co-curricular", tint: "#F3D9C8", ink: "#9A4F63",
    desc: "Built a website for the automotive industry in a 7-hour challenge, from idea to pitch.",
    glyph: "M4 6h16v10H4z M2 19h20 M9 10l-2 2 2 2 M15 10l2 2-2 2", photos: [a("hackathon")],
  },
  {
    year: "2026", title: "Tech Soci-IT Carnival", tag: "Leadership", tint: "#E6DFF2", ink: "#6B5B8C",
    desc: "Protocol bureau for a SULAM carnival with three primary schools.",
    glyph: "M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M3 20c0-3 3-5 6-5s6 2 6 5 M16 5a3 3 0 0 1 0 6 M18 15c2 .5 3 2.5 3 5",
    photos: [a("sulam-laptop"), a("sulam-smile")],
  },
  {
    year: "2026", title: "Leftenan Muda Kesatria", tag: "Leadership", tint: "#E3E6D8", ink: "#4F6B3A",
    desc: "Two years of officer training in leadership, discipline and teamwork.",
    glyph: "M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8L3.5 9.2l5.9-.9z", photos: [a("kesatria-uniform")],
  },
  {
    year: "2025", title: "Score Orienteering", tag: "Award · 5th place", tint: "#DCEBEA", ink: "#2F7D7A",
    desc: "Komander Kesatria Endurance Challenge at UiTM Kedah.",
    glyph: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M15.5 8.5l-2 5-5 2 2-5z", photos: [a("orient-run"), a("orient-team")],
  },
  {
    year: "2025", title: "Duke of Edinburgh Bronze", tag: "Award", tint: "#F6E7C8", ink: "#9A6B1F",
    desc: "72 hours of service, skills, recreation and an adventurous journey.",
    glyph: "M8 3l4 6 4-6 M12 21a6 6 0 1 0 0-12 6 6 0 0 0 0 12z M12 13v4 M10 15h4",
    photos: [a("doe-lifejacket"), a("doe-kayak"), a("doe-arprm")],
  },
  {
    year: "2025", title: "Data Storytelling", tag: "Competition", tint: "#F0E1DA", ink: "#5E2B40",
    desc: "Told the story of Melaka traffic through MOT data and charts.",
    glyph: "M5 20V11 M12 20V5 M19 20v-6 M3 20h18", photos: [a("data-video"), a("data-chart")],
  },
  {
    year: "2024–25", title: "Top Coders", tag: "Emcee", tint: "#E9E2F0", ink: "#6B5B8C",
    desc: "Emceed the national coding challenge, two years running.",
    glyph: "M12 3a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z M5 11a7 7 0 0 0 14 0 M12 18v3", photos: [a("topcoders")],
  },
  {
    year: "2022", title: "Peer-Assisted Learning", tag: "Volunteer", tint: "#F7EEE4", ink: "#8A5A3C",
    desc: "Helped run extra maths classes for PSPM at Melaka Matriculation College.",
    glyph: "M4 5h6a2 2 0 0 1 2 2v12a2 2 0 0 0-2-2H4z M20 5h-6a2 2 0 0 0-2 2v12a2 2 0 0 1 2-2h6z",
    photos: [a("pal-group"), a("pal-telegram")],
  },
];

export const highlights = [
  { value: "5th", label: "place, Score Orienteering" },
  { value: "72h", label: "Duke of Edinburgh service" },
  { value: "2 yrs", label: "Kesatria officer training" },
  { value: "8+", label: "activities since 2022" },
];
