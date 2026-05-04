import "./globals.css"; // CRITICAL: Ensure this path is correct
import Header from "@/components/ui/Header";
import CustomCursor from "@/components/ui/CustomCursor";
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
        {/* Global UI Components */}
        <Header />
        <CustomCursor />

        {/* The Page Content */}
        <div className="relative w-full h-full">{children}</div>
      </body>
    </html>
  );
}
