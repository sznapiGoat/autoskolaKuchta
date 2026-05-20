import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Autoškola Ing. Michael Kuchta | Bučovice & Rousínov",
  description:
    "Profesionální autoškola s pobočkami v Bučovicích a Rousínově. Výcvik skupin AM, A1, A2, A, B. Rychlokurz skupiny B za 6 týdnů.",
  keywords: [
    "autoškola",
    "Bučovice",
    "Rousínov",
    "řidičský průkaz",
    "výcvik",
    "skupina B",
    "motocykly",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
