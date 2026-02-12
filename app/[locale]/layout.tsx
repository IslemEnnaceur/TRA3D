import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  return {
    metadataBase: new URL("https://tra-3d.vercel.app"),
    title: {
      default: "TRA 3D - Augmented Reality Menus for Restaurants & E-commerce",
      template: "%s | TRA 3D",
    },
    description: "Transform your brand with immersive 3D/AR product visualization. Let customers see dishes or products in AR before ordering—boost orders by 30% without an app.",
    keywords: ["AR Commerce", "3D product visualization", "AR menus", "QR code AR", "augmented reality shopping"],
    authors: [{ name: "TRA 3D" }],
    creator: "TRA 3D",
    openGraph: {
      type: "website",
      locale: locale === 'ar' ? 'ar_SA' : locale === 'fr' ? 'fr_FR' : 'en_US',
      url: `https://tra-3d.vercel.app/${locale}`,
      siteName: "TRA 3D",
      title: "TRA 3D - Immersive AR Commerce Platform",
      description: "The #1 AR Menu & product visualization platform. Boost sales with 3D models directly in your customer's space.",
      images: [
        {
          url: "/logo.png",
          width: 800,
          height: 600,
          alt: "TRA 3D AR Commerce",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "TRA 3D - Immersive AR Commerce Platform",
      description: "Boost your venue's sales with immersive AR menus and 3D product previews. No app required.",
      images: ["/logo.png"],
    },
    icons: {
      icon: "/logo.ico",
    },
    alternates: {
      canonical: `https://tra-3d.vercel.app/${locale}`,
      languages: {
        "en": "https://tra-3d.vercel.app/en",
        "fr": "https://tra-3d.vercel.app/fr",
        "ar": "https://tra-3d.vercel.app/ar",
        "x-default": "https://tra-3d.vercel.app/en",
      },
    },
  };
}


export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TRA 3D",
    "url": "https://tra-3d.vercel.app",
    "logo": "https://tra-3d.vercel.app/logo.png",
    "sameAs": [
      "https://www.instagram.com/tra_3d"
    ],
    "description": "AR Commerce platform for 3D product visualization and immersive menu experiences."
  };

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages} locale={locale}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
