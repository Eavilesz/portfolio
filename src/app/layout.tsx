import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ernesto Aviles — Frontend Engineer",
  description:
    "Frontend-focused software developer and MERN instructor. I build fast, accessible, production-quality web experiences with React and Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={[
          geistSans.variable,
          geistMono.variable,
          "min-h-dvh font-sans antialiased",
        ].join(" ")}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a href="#content" className="sr-only focus:not-sr-only">
            Skip to content
          </a>

          <SiteHeader />

          <main id="content" className="mx-auto max-w-5xl px-4 py-10">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
