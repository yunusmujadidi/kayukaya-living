import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "./Navbar";
import Footer from "./footer";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KayuKaya Living",
  description: "KayuKaya",
  icons: {
    icon: "/icon.ico",
  },
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
            "min-h-screen flex flex-col antialiased text-white bg-[#353929]",
            GeistMono.className
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
