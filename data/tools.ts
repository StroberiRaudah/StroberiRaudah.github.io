import {
  siClaude,
  siDart,
  siDocker,
  siDotnet,
  siFirebase,
  siFlask,
  siFlutter,
  siGit,
  siGithub,
  siGithubactions,
  siHtml5,
  siJavascript,
  siJsonwebtokens,
  siLaravel,
  siMysql,
  siNextdotjs,
  siOpenjdk,
  siPhp,
  siPython,
  siReact,
  siSympy,
  siTailwindcss,
  siTensorflow,
  siTypescript,
  siVite,
  siVitest,
} from "simple-icons";

/** A brand logo (filled path) or a hand-drawn glyph (stroked path), both on a 24×24 grid. */
export type ToolIcon = { kind: "fill" | "stroke"; path: string };

export type Tool = {
  role: string;
  name: string;
  desc: string;
  color: string;
  icon: ToolIcon;
};

export type ToolGroup = { label: string; tools: Tool[] };

const brand = (icon: { path: string }): ToolIcon => ({ kind: "fill", path: icon.path });
const glyph = (path: string): ToolIcon => ({ kind: "stroke", path });

// Tools with no official mark in Simple Icons get a simple line glyph.
const glyphs = {
  csharp: "M13 7.5a5 5 0 1 0 0 9 M15.5 9.5v5 M18.5 9.5v5 M14.5 11h5.5 M14.5 13h5.5",
  braces: "M8 4H7a2 2 0 0 0-2 2v4l-2 2 2 2v4a2 2 0 0 0 2 2h1 M16 4h1a2 2 0 0 1 2 2v4l2 2-2 2v4a2 2 0 0 1-2 2h-1 M10 12h.01 M14 12h.01",
  db: "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3z M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6 M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3",
  layers: "M4 6h7v7H4z M8 9h7v7H8z M13 12h7v7h-7z",
  patches: "M3 3h8v8H3z M13 3h8v8h-8z M3 13h8v8H3z M13 13h8v8h-8z M7 7h.01 M17 17h.01",
  yolo: "M3 8V3h5 M16 3h5v5 M21 16v5h-5 M8 21H3v-5 M8 9h8v6H8z",
  cloud: "M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.1 11.1 3.5 3.5 0 0 0 7 18z",
  check: "M4 4h16v16H4z M8 12l3 3 5-6",
};

export const toolGroups: ToolGroup[] = [
  {
    label: "languages",
    tools: [
      { role: "Typed JS", name: "TypeScript", desc: "JavaScript with types", color: "#3178C6", icon: brand(siTypescript) },
      { role: "Web", name: "JavaScript", desc: "The language of the web", color: "#C9A400", icon: brand(siJavascript) },
      { role: "AI & web", name: "Python", desc: "Models, scripts and Flask apps", color: "#3776AB", icon: brand(siPython) },
      { role: ".NET", name: "C#", desc: "Typed APIs with ASP.NET Core", color: "#68217A", icon: glyph(glyphs.csharp) },
      { role: "Server", name: "PHP", desc: "What Laravel speaks", color: "#777BB4", icon: brand(siPhp) },
      { role: "OOP", name: "Java", desc: "Servlets, JSP and MVC", color: "#E76F00", icon: brand(siOpenjdk) },
      { role: "Mobile", name: "Dart", desc: "Typed, fast, made for UI", color: "#0175C2", icon: brand(siDart) },
    ],
  },
  {
    label: "backend",
    tools: [
      { role: "Framework", name: "Laravel", desc: "REST APIs, auth and business logic in PHP", color: "#FF2D20", icon: brand(siLaravel) },
      { role: "Framework", name: "ASP.NET Core", desc: "C# web APIs with role-based access", color: "#512BD4", icon: brand(siDotnet) },
      { role: "Framework", name: "Flask", desc: "Lightweight Python web apps and model serving", color: "#2A1820", icon: brand(siFlask) },
      { role: "API", name: "REST + JSON", desc: "One clean contract for app and server", color: "#6B5B8C", icon: glyph(glyphs.braces) },
      { role: "Auth", name: "JWT", desc: "Signed tokens for secure sign-in", color: "#5E2B40", icon: brand(siJsonwebtokens) },
      { role: "Database", name: "MySQL", desc: "Relational SQL database", color: "#4479A1", icon: brand(siMysql) },
      { role: "Database", name: "SQL Server", desc: "With Entity Framework Core and Azure SQL", color: "#CC2927", icon: glyph(glyphs.db) },
    ],
  },
  {
    label: "frontend",
    tools: [
      { role: "UI library", name: "React", desc: "Component-based UI for the web", color: "#087EA4", icon: brand(siReact) },
      { role: "Web framework", name: "Next.js", desc: "Routing, server components and static export", color: "#000000", icon: brand(siNextdotjs) },
      { role: "Build tool", name: "Vite", desc: "Fast dev server and builds", color: "#646CFF", icon: brand(siVite) },
      { role: "Markup", name: "HTML / CSS", desc: "Semantic, accessible pages", color: "#E34F26", icon: brand(siHtml5) },
      { role: "Styling", name: "Tailwind CSS", desc: "Utility-first, responsive styling", color: "#06B6D4", icon: brand(siTailwindcss) },
      { role: "Mobile", name: "Flutter", desc: "One codebase for Android and iOS", color: "#02569B", icon: brand(siFlutter) },
      { role: "Backend as a service", name: "Firebase", desc: "Data, auth and push notifications", color: "#DD2C00", icon: brand(siFirebase) },
    ],
  },
  {
    label: "ai / ml",
    tools: [
      { role: "Framework", name: "TensorFlow", desc: "Training and running deep learning models", color: "#FF6F00", icon: brand(siTensorflow) },
      { role: "Deep learning", name: "CNN", desc: "Convolutional neural networks for image recognition", color: "#5E2B40", icon: glyph(glyphs.layers) },
      { role: "Deep learning", name: "ViT", desc: "Vision Transformer: reads images as patches", color: "#6B5B8C", icon: glyph(glyphs.patches) },
      { role: "Detection", name: "YOLO", desc: "Finds and boxes objects in a single pass", color: "#00A3A3", icon: glyph(glyphs.yolo) },
      { role: "LLM API", name: "Claude API", desc: "Explanations, checked before they are shown", color: "#D97757", icon: brand(siClaude) },
      { role: "Maths", name: "SymPy", desc: "Symbolic maths to verify every answer", color: "#3B5526", icon: brand(siSympy) },
    ],
  },
  {
    label: "devops",
    tools: [
      { role: "Version control", name: "Git", desc: "Branches, commits and pull requests", color: "#F05032", icon: brand(siGit) },
      { role: "Collaboration", name: "GitHub", desc: "Repos, pull requests and code review", color: "#2A1820", icon: brand(siGithub) },
      { role: "CI / CD", name: "GitHub Actions", desc: "Lint, test and build on every push", color: "#2088FF", icon: brand(siGithubactions) },
      { role: "Containers", name: "Docker", desc: "Same setup on every machine", color: "#2496ED", icon: brand(siDocker) },
      { role: "Cloud", name: "Azure", desc: "App Service and Static Web Apps", color: "#0078D4", icon: glyph(glyphs.cloud) },
      { role: "Testing", name: "Vitest", desc: "Fast unit tests for the web app", color: "#729B1B", icon: brand(siVitest) },
      { role: "Testing", name: "xUnit", desc: "Unit tests for the C# API", color: "#5E2B40", icon: glyph(glyphs.check) },
    ],
  },
];
