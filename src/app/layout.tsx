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
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-jcom.vercel.app'),
  title: {
    default: 'José Carlos Orozco – Senior Frontend Engineer · React, Next.js, TypeScript',
    template: '%s | José Carlos Orozco'
  },
  description:
    'Senior Frontend Engineer con más de 8 años de experiencia en React y JavaScript (TypeScript desde 2022) y Next.js. Especializado en Fintech, Banca, plataformas operativas y desarrollo asistido por IA.',
  keywords: [
    'Ingeniero Frontend Senior',
    'Senior Frontend Engineer',
    'React Specialist',
    'TypeScript Specialist',
    'Next.js',
    'FinTech',
    'Banca',
    'Cypress',
    'Cursor',
    'Claude Code',
    'Portfolio',
    'José Carlos Orozco'
  ],
  authors: [{ name: 'José Carlos Orozco Medina' }],
  openGraph: {
    title: 'José Carlos Orozco – Senior Frontend Engineer · React, Next.js, TypeScript',
    description:
      'Senior Frontend Engineer con más de 8 años de experiencia en React y JavaScript (TypeScript desde 2022) y Next.js. Especializado en Fintech, Banca y desarrollo asistido por IA.',
    url: './',
    siteName: 'José Carlos Orozco – Portfolio',
    type: 'website',
    locale: 'es_CO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'José Carlos Orozco – Senior Frontend Engineer · React, Next.js, TypeScript',
    description:
      'Senior Frontend Engineer con más de 8 años de experiencia en React y JavaScript (TypeScript desde 2022) y Next.js. Especializado en Fintech, Banca, plataformas operativas y desarrollo asistido por IA.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: './',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'José Carlos Orozco Medina',
  jobTitle: 'Senior Frontend Engineer · React, Next.js, TypeScript',
  url: 'https://portfolio-jcom.vercel.app',
  sameAs: [
    'https://github.com/cjorozco',
    'https://www.linkedin.com/in/cjorozco',
  ],
  knowsAbout: [
    'React',
    'TypeScript',
    'Next.js',
    'Frontend Architecture',
    'FinTech',
    'Banking Platforms',
    'Cypress E2E',
    'AI-Assisted Development (Cursor, Claude Code)'
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
