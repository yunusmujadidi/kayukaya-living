import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "./Navbar";
import Footer from "./footer";

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
      <head>
        <body
          className={cn(
            "min-h-screen flex flex-col bg-background antialiased ",
            inter.className
          )}
        >
          <main>
            <Navbar />
            {children}
            <Footer />
          </main>
        </body>
      </head>
    </html>
  );
}
