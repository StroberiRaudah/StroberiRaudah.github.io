# Raudah — portfolio

Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Where things live

| Path | What it is |
|---|---|
| `app/layout.tsx` | Page shell, `<title>`, theme colour |
| `app/page.tsx` | Puts the sections in order |
| `app/globals.css` | Design tokens (colours, fonts, animations) via Tailwind `@theme` |
| `components/` | One file per section: `Header`, `Hero`, `About`, `Motto`, `Tools`, `ToolCard`, `Contact`, `Footer` |
| `data/profile.ts` | Your name, hook, role, links, motto lines, credits — edit text here |
| `data/tools.ts` | The "What I use" groups and cards (logos from `simple-icons`) |
| `hooks/useTypewriter.ts` | The typing effect in the code window (a client-side React hook) |
| `public/` | `avatar.png`, `uitm.png` |

`Motto.tsx` is the only client component (`"use client"`) because it animates; everything else renders on the server.
