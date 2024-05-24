"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={cn(
        "z-50 sticky h-24 w-full inset-x-0 items-center transition-all top-0",
        isScrolled && "h-16 bg-slate-50/50 backdrop-blur-md shadow-md"
      )}
    >
      <div className="h-full w-full mx-auto max-w-7xl px-2.5 md:px-20">
        <div className="flex h-full items-center justify-between">
          <Link
            href="#"
            className={cn(
              "flex font-light tracking-tight transition-all duration-300 ease-in-out text-sm md:text-2xl text-slate-700",
              isScrolled && "text-sm md:text-xl"
            )}
          >
            {isScrolled ? "KayuKaya" : "KayuKaya Living"}
          </Link>
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate-700 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-4 font-semibold">
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
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-start space-y-4 p-4">
            <Link
              href="/#"
              className={buttonVariants({
                variant: "ghost",
              })}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/#"
              className={buttonVariants({
                variant: "ghost",
              })}
              onClick={toggleMenu}
            >
              Interiors & mill works
            </Link>
            <Link
              href="/#"
              className={buttonVariants({
                variant: "ghost",
              })}
              onClick={toggleMenu}
            >
              Umbrella
            </Link>
            <Link
              href="/#"
              className={buttonVariants({
                variant: "ghost",
              })}
              onClick={toggleMenu}
            >
              Factory
            </Link>
            <Link
              href="/#"
              className={buttonVariants({
                variant: "ghost",
              })}
              onClick={toggleMenu}
            >
              Office
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
