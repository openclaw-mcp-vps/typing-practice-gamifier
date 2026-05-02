import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TypeQuest — Gamified Typing Practice",
  description: "Turn typing practice into RPG-style progression using classic books, documentation, and code samples. Level up your typing speed and accuracy.",
  keywords: "typing practice, typing game, RPG typing, learn to type, typing speed, WPM",
  openGraph: {
    title: "TypeQuest — Gamified Typing Practice",
    description: "Turn typing practice into RPG-style progression using classic books, documentation, and code samples.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="29884e36-08f6-444c-a614-01a7c02cae34"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
