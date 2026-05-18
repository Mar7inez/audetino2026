import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const siteUrl = "https://audetino.com";

export const metadata: Metadata = {
  title: "Audetino — Gestión inteligente de proyectos",
  description:
    "La plataforma que simplifica la gestión adaptativa a tus proyectos y recursos. Catálogo inmobiliario, web institucional y API.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Audetino — Gestión inteligente de proyectos",
    description:
      "La plataforma que simplifica la gestión adaptativa a tus proyectos y recursos.",
    url: siteUrl,
    siteName: "Audetino",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Audetino — Gestión inteligente de proyectos",
    description:
      "La plataforma que simplifica la gestión adaptativa a tus proyectos y recursos.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Audetino",
  url: siteUrl,
  description:
    "Simplificando la gestión de proyectos desde 2015 con soluciones inmobiliarias, web y API.",
  foundingDate: "2015",
  email: "administracion@audetino.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
