import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "william — product engineer",
  description:
    "User-focused Product Engineer with a keen eye for design, crafting high impact products.",
  icons:
    "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🐡</text></svg>",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cormorantGaramond.variable} relative antialiased`}
      >
        <main className="bg-background relative z-10 min-h-screen pb-24">
          {children}
        </main>

        <footer className="sticky bottom-0 z-0 flex h-32 items-end justify-start overflow-y-hidden bg-black text-white">
          <span className="-mb-6 font-serif text-9xl select-none">
            williamhzo
          </span>
        </footer>
      </body>
    </html>
  );
}
