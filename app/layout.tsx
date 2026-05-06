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
