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
  title: "Guilherme Müller | Full Stack Developer",
  description: "Portfólio de Guilherme Müller (coder-muller) - Desenvolvedor Full Stack especializado em React, Next.js, Node.js e tecnologias modernas.",
  keywords: ["Guilherme Müller", "coder-muller", "Full Stack Developer", "React", "Next.js", "TypeScript", "Node.js"],
  authors: [{ name: "Guilherme Müller" }],
  creator: "Guilherme Müller",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
