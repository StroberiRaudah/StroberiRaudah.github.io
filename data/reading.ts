export type ReadingItem = { source: string; title: string; href: string; progress: number };

/** What I’m catching up on lately; progress is a rough percentage. */
export const reading: ReadingItem[] = [
  { source: "Uber Engineering", title: "H3: Uber’s Hexagonal Hierarchical Spatial Index", href: "https://www.uber.com/blog/h3/", progress: 60 },
  {
    source: "Uber Engineering",
    title: "DeepETA: How Uber Predicts Arrival Times Using Deep Learning",
    href: "https://www.uber.com/blog/deepeta-how-uber-predicts-arrival-times/",
    progress: 40,
  },
  {
    source: "YouTube",
    title: "The Man Who Wrote Atomic Habits: Your Goals Are Quietly Restricting Your Happiness | James Clear",
    href: "https://www.youtube.com/watch?v=rtufWBLOXgw",
    progress: 100,
  },
];
