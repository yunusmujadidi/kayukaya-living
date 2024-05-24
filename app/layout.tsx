import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "./Navbar";

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
          "min-h-screen bg-background antialiased ",
          inter.className
        )}
      >
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}