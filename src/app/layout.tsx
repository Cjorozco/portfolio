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
  title: {
    default: 'José Carlos Orozco – Frontend Engineer',
    template: '%s | José Carlos Orozco'
  },
  description:
    'Senior Frontend Engineer specialized in React and Next.js with enterprise experience.',
  openGraph: {
    title: 'José Carlos Orozco – Frontend Engineer',
    description:
      'Frontend Engineer with experience in enterprise and banking applications.',
    url: 'https://portfolio-jcom.vercel.app/',
    siteName: 'José Carlos Portfolio',
    type: 'website'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
