import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import ToggleColorScheme from "@/components/ToggleColorScheme";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Brain Street 7",
  description: "Project group.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-min flex flex-col pt-6 pb-12 px-[9vw] md:px-[20vw]`}
      >
        <MantineProvider defaultColorScheme="auto">
          <header className="mb-12 flex items-center justify-between">
            <h1 className="text-3xl font-bold">Brain Street 7</h1>
            <ToggleColorScheme />
          </header>

          <main className="flex-1">{children}</main>
        </MantineProvider>
      </body>
    </html>
  );
}
