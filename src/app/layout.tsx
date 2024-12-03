import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

import { ColorSchemeScript } from "@mantine/core";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

const theme = createTheme({
  /** Put your mantine theme override here */
});

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
    <html lang="en" className="h-full">
      <Head>
        <ColorSchemeScript />
      </Head>

      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=arrow_left_alt,arrow_right_alt,dark_mode,download,light_mode,link"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-min flex flex-col pt-6 pb-12 px-[9vw] md:px-[20vw]`}
      >
        <MantineProvider theme={theme}>
          <header>
            <h1 className="text-3xl font-bold mb-12">Brain Street 7</h1>
          </header>

          <main className="flex-1">{children}</main>
        </MantineProvider>
      </body>
    </html>
  );
}
