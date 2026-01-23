import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

// ✅ Advanced SEO Metadata
export const metadata: Metadata = {
  title: {
    default: "CeylonShine Travel Agency - Calm Sri Lankan Journeys",
    template: "%s | CeylonShine Travel Agency",
  },
  description:
    "Discover the soul of Sri Lanka with CeylonShine. We offer curated, aesthetic travel experiences, luxury tours, and serene nature retreats in the Pearl of the Indian Ocean.",
  keywords: [
    "sri lanka travel",
    "aesthetic travel sri lanka",
    "luxury tours sri lanka",
    "nature retreats sri lanka",
    "sri lanka holiday packages",
    "best travel agency sri lanka",
    "cultural tours sri lanka",
    "sigiriya tours",
    "ella hiking trips",
    "mirissa whale watching",
  ],
  authors: [{ name: "CeylonShine Travel Agency" }],
  creator: "CeylonShine",
  metadataBase: new URL("https://ceylonshine.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: "https://ceylonshine.com",
    title: "CeylonShine Travel Agency - Calm Sri Lankan Journeys",
    description: "Experience the serene beauty of Sri Lanka with our curated, aesthetic travel experiences.",
    siteName: "CeylonShine Travel Agency",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CeylonShine Travel Agency - Serenity in Every Journey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CeylonShine Travel Agency - Calm Sri Lankan Journeys",
    description: "Experience the serene beauty of Sri Lanka with our curated, aesthetic travel experiences.",
    images: ["/og-image.jpg"],
    creator: "@ceylonshine",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// ✅ Move viewport to its own export
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1DA2A0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
       <head>
        <JsonLd />
      </head>
      <body className="font-sans antialiased text-ceylon-dark bg-ceylon-light selection:bg-ceylon-gold/30">
        {children}
      </body>
    </html>
  );
}
