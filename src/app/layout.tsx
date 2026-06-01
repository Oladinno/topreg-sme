import type { Metadata } from "next";
import { Hanken_Grotesk, JetBrains_Mono, Libre_Franklin } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hanken-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-libre-franklin",
});

export const metadata: Metadata = {
  title: "TopReg SME | Business Scaling Agency",
  description:
    "Bringing Your Business From Idea & Imagination, Into Reality. Legal, Launch, Brand & Structure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${hankenGrotesk.variable} ${jetbrainsMono.variable} ${libreFranklin.variable} light`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body-md antialiased">
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
