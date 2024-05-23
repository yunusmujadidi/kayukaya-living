"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div
      className={cn(
        "sticky h-24 w-full inset-x-0 items-center transition-all top-0",
        isScrolled && "h-16  text-white "
      )}
    >
      <div className="h-full w-full mx-auto max-w-7xl px-2.5 md:px-20">
        <div className="flex h-full items-center justify-between">
          <Link
            href="#"
            className={cn(
              "flex font-semibold tracking-tight transition-all duration-300 ease-in-out text-sm md:text-2xl",
              isScrolled
                ? "text-sm md:text-xl text-white"
                : "text-sm md:text-2xl"
            )}
          >
            KayuKaya
          </Link>
          <div className="flex items-center space-x-4 font-semibold">
            <Link
              href="/#"
              className={buttonVariants({
                variant: "ghost",
              })}
            >
              Home
            </Link>
            <Link
              href="/#"
              className={buttonVariants({
                variant: "ghost",
              })}
            >
              Interiors & mill works
            </Link>
            <Link
              href="/#"
              className={buttonVariants({
                variant: "ghost",
              })}
            >
              Umbrella
            </Link>
            <Link
              href="/#"
              className={buttonVariants({
                variant: "ghost",
              })}
            >
              Factory
            </Link>
            <Link
              href="/#"
              className={buttonVariants({
                variant: "ghost",
              })}
            >
              Office
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
