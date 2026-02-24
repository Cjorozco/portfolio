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
  metadataBase: new URL('https://portfolio-jcom.vercel.app'),
  title: {
    default: 'José Carlos Orozco – Senior Frontend Engineer',
    template: '%s | José Carlos Orozco'
  },
  description:
    'Senior Frontend Engineer con 8 años de experiencia especializado en React, TypeScript y Next.js. Arquitectura de aplicaciones bancarias y FinTech de alto rendimiento.',
  keywords: [
    'Frontend Developer',
    'React',
    'TypeScript',
    'Next.js',
    'Senior Engineer',
    'FinTech',
    'Portfolio',
    'José Carlos Orozco'
  ],
  authors: [{ name: 'José Carlos Orozco Medina' }],
  openGraph: {
    title: 'José Carlos Orozco – Senior Frontend Engineer',
    description:
      'Senior Frontend Engineer con experiencia en aplicaciones bancarias y FinTech de alto rendimiento.',
    url: 'https://portfolio-jcom.vercel.app/',
    siteName: 'José Carlos Orozco – Portfolio',
    type: 'website',
    locale: 'es_CO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'José Carlos Orozco – Senior Frontend Engineer',
    description:
      'Senior Frontend Engineer especializado en React, TypeScript y Next.js.',
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
    canonical: 'https://portfolio-jcom.vercel.app',
    languages: {
      'es-CO': 'https://portfolio-jcom.vercel.app',
      'en-US': 'https://portfolio-jcom.vercel.app',
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'José Carlos Orozco Medina',
  jobTitle: 'Senior Frontend Engineer',
  url: 'https://portfolio-jcom.vercel.app',
  sameAs: [
    'https://github.com/cjorozco',
    'https://www.linkedin.com/in/cjorozco',
  ],
  knowsAbout: ['React', 'TypeScript', 'Next.js', 'Frontend Architecture', 'FinTech'],
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
