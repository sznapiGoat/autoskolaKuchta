import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Autoškola Ing. Michael Kuchta | Bučovice & Rousínov",
  description:
    "Profesionální autoškola s pobočkami v Bučovicích a Rousínově. Výcvik skupin AM, A1, A2, A, B. Rychlokurz skupiny B za 6 týdnů od 26 000 Kč.",
  keywords: [
    "autoškola",
    "Bučovice",
    "Rousínov",
    "řidičský průkaz",
    "výcvik",
    "skupina B",
    "motocykly",
    "rychlokurz",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <div className="grain" aria-hidden />
        {children}
      </body>
    </html>
  );
}
