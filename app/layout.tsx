import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "siti Raudah",
  description: "I build cross-platform apps, from front to back.",
  icons: { icon: "/avatar.png" },
};

export const viewport: Viewport = {
  themeColor: "#F7F2EC",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
