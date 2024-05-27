import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "./Navbar";
import Footer from "./footer";
import StickyFooter from "./StickyFooter";
<link rel="icon" href="/favicon.webp" sizes="any" />;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KayuKaya Living",
  description: "KayuKaya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen flex flex-col bg-background antialiased ",
          inter.className
        )}
      >
        <main>
          <Navbar />
          {children}
          <StickyFooter />
        </main>
      </body>
    </html>
  );
}
