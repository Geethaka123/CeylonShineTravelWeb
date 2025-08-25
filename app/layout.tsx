import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CeylonShine Travel Agency - Your Journey Begins Here",
  description:
    "Discover amazing destinations, book unforgettable trips, and create memories that last a lifetime with our expert travel services.",
  keywords: "travel, agency, vacation, booking, destinations, tours, adventure",
  authors: [{ name: "CeylonShine Travel Agency" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
