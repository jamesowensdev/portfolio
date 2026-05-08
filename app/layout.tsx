// app/layout.tsx
import "./globals.css";
import { Metadata } from "next";

import Header from "@/components/ui/Header";
import CustomCursor from "@/components/ui/CustomCursor";
import HeatmapBackground from "@/components/ui/HeatmapBackground";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://jamesowens.xyz"),
  title: "James Owens // Interactive Portfolio",
  description: "PhD Researcher in Spatial Ecology and Data Scientist.",
  openGraph: {
    title: "James Owens // Interactive Portfolio",
    description: "PhD Researcher in Spatial Ecology and Data Scientist.",
    url: "https://jamesowens.xyz",
    siteName: "James Owens Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "James Owens - Spatial Ecology & Data Science Portfolio",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#050214] antialiased`}>
        <HeatmapBackground />

        <Header />
        <CustomCursor />

        <div className="relative w-full h-full z-10 pointer-events-none">
          <div className="pointer-events-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
