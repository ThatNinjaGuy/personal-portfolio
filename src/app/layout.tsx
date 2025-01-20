import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ThatNinjaGuy: Premium Travel Gear & Essentials",
  description:
    "Discover top-quality travel bags, trending accessories, and ultimate travel packs. Shop the best travel things online for your next adventure. Premium, curated travel goods for every journey.",
  keywords: [
    "travel bags",
    "travel things online",
    "ultimate travel pack",
    "top quality travel goods",
    "trending travel",
    "good quality travel items",
  ],
  openGraph: {
    title: "TravelEase: Your One-Stop Shop for Premium Travel Gear",
    description:
      "Explore our curated collection of high-quality travel essentials. From stylish bags to innovative accessories, find everything you need for your next adventure.",
    // images: [
    //   {
    //     url: "/images/travel-gear-showcase.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "TravelEase Premium Travel Gear Collection",
    //   },
    // ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TravelEase: Premium Travel Essentials",
    description:
      "Shop the best travel gear online. Quality bags, trending accessories, and ultimate travel packs for every adventurer.",
    // images: ["/images/travel-gear-twitter-card.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
