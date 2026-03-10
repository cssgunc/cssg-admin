import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { PublicNavbar } from "../components/public-navbar";
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
  title: {
    default: "CSSG UNC",
    template: "%s | CSSG UNC",
  },
  description:
    "CS + Social Good at UNC Chapel Hill builds technology solutions for organizations creating social impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <PublicNavbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
