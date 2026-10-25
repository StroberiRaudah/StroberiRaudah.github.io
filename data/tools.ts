import {
  siApple,
  siClaude,
  siDart,
  siFigma,
  siFirebase,
  siFlutter,
  siGit,
  siGithub,
  siLaravel,
  siMariadb,
  siMaterialdesign,
  siMysql,
  siPhp,
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
  key: "M18.5 8.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 1 1 7 0z M12.2 10.8 4 19 M6.5 16.5l2 2 M8.8 14.2l1.8 1.8",
  waves: "M12 12h.01 M8.5 8.5a5 5 0 0 0 0 7 M15.5 8.5a5 5 0 0 1 0 7 M5.6 5.6a9 9 0 0 0 0 12.8 M18.4 5.6a9 9 0 0 1 0 12.8",
  braces: "M8 4H7a2 2 0 0 0-2 2v4l-2 2 2 2v4a2 2 0 0 0 2 2h1 M16 4h1a2 2 0 0 1 2 2v4l2 2-2 2v4a2 2 0 0 1-2 2h-1 M10 12h.01 M14 12h.01",
  river: "M3 7c3-3 6 3 9 0s6 3 9 0 M3 12c3-3 6 3 9 0s6 3 9 0 M3 17c3-3 6 3 9 0s6 3 9 0",
};

export const toolGroups: ToolGroup[] = [
  {
    label: "backend",
    tools: [
      { role: "Framework", name: "Laravel", desc: "APIs, queues and business logic", color: "#FF2D20", icon: brand(siLaravel) },
      { role: "Language", name: "PHP", desc: "What the server speaks", color: "#777BB4", icon: brand(siPhp) },
      { role: "Auth", name: "LDAP", desc: "Directory-based authentication", color: "#5E2B40", icon: glyph(glyphs.key) },
      { role: "Real-time", name: "Laravel Reverb", desc: "WebSocket server for live updates", color: "#FF2D20", icon: glyph(glyphs.waves) },
      { role: "Push · Android & web", name: "Firebase FCM", desc: "Cloud messaging and push notifications", color: "#DD2C00", icon: brand(siFirebase) },
      { role: "Push · iOS", name: "APNs", desc: "Apple Push Notification service", color: "#2A1820", icon: brand(siApple) },
      { role: "API", name: "REST + JSON", desc: "One clean contract for app and server", color: "#6B5B8C", icon: glyph(glyphs.braces) },
      { role: "Database", name: "MySQL", desc: "Relational SQL database", color: "#4479A1", icon: brand(siMysql) },
      { role: "Database", name: "MariaDB", desc: "Open-source, MySQL-compatible database", color: "#003545", icon: brand(siMariadb) },
    ],
  },
  {
    label: "frontend",
    tools: [
      { role: "UI framework", name: "Flutter", desc: "One codebase for iOS, Android and web", color: "#02569B", icon: brand(siFlutter) },
      { role: "Language", name: "Dart", desc: "Typed, fast, made for UI", color: "#0175C2", icon: brand(siDart) },
      { role: "State", name: "Riverpod", desc: "Reactive, testable app state", color: "#5E2B40", icon: glyph(glyphs.river) },
      { role: "Design system", name: "Material 3", desc: "Consistent, accessible UI components", color: "#757575", icon: brand(siMaterialdesign) },
    ],
  },
  {
    label: "design",
    tools: [
      { role: "UI design", name: "Figma", desc: "Wireframes, flows and polished mockups", color: "#F24E1E", icon: brand(siFigma) },
      { role: "AI design", name: "Claude Design", desc: "Fast layout ideas and clickable prototypes", color: "#D97757", icon: brand(siClaude) },
      { role: "Design system", name: "Material 3", desc: "Colour, type and components I build on", color: "#757575", icon: brand(siMaterialdesign) },
    ],
  },
  {
    label: "workflow",
    tools: [
      { role: "Version control", name: "Git", desc: "Branches, commits, clean history", color: "#F05032", icon: brand(siGit) },
      { role: "Collaboration", name: "GitHub", desc: "Repos, pull requests and code review", color: "#2A1820", icon: brand(siGithub) },
    ],
  },
];
