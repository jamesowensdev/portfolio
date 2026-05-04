// app/layout.tsx
import "./globals.css";
import Header from "@/components/ui/Header";
import CustomCursor from "@/components/ui/CustomCursor";
import HeatmapBackground from "@/components/ui/HeatmapBackground";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-[#050214] antialiased cursor-none`}
      >
        {/* Z-INDEX 0: The background that needs to "feel" the mouse */}
        <HeatmapBackground />

        {/* Z-INDEX 1000+: UI overlays */}
        <Header />
        <CustomCursor />

        {/*
           Z-INDEX 10: The Content Wrapper
           'pointer-events-none' allows mouse events to pass through to the heatmap.
        */}
        <div className="relative w-full h-full z-10 pointer-events-none">
          {/*
             'pointer-events-auto' ensures your buttons and links
             on the actual pages still work.
          */}
          <div className="pointer-events-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
