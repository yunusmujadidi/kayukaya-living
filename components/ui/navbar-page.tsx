"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import navigationItems from "@/lib/navigationItems";
import { useSelectedLayoutSegment } from "next/navigation";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }
      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const segment = useSelectedLayoutSegment();

  const isActive = (href: string) => {
    const activeSegment = href === "/" ? null : href.split("/")[1];
    return activeSegment === segment;
  };

  return (
    <div
      className={cn(
        "z-50 sticky h-24 w-full inset-x-0 items-center transition-all top-0 border-b border-gray-200 dark:border-gray-800  dark:bg-gray-900 backdrop-blur-md shadow-md",
        isScrolled && "h-20  backdrop-blur-md shadow-md block",
        !isVisible && "-top-24 block"
      )}
    >
      <div className="h-full w-full mx-auto max-w-7xl px-2.5">
        <div className="flex h-full items-center justify-between">
          <Link
            href="/"
            className={cn(
              "flex font-bold tracking-tight transition-all duration-300 ease-in-out text-xl md:text-3xl text-emerald-800 ",
              isScrolled && "text-xl md:text-2xl"
            )}
          >
            {isScrolled ? (
              <Image
                alt="Logo"
                src="https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1585542631378-98UBWDIV711MR3CNJLRJ/favicon.ico"
                width={50}
                height={50}
              />
            ) : (
              <Image
                alt="Logo"
                src="https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/cad8ef74-7370-4494-929b-2c62cb4c6d27/Screenshot+2022-09-24+at+6.15.29+PM.jpg?format=1500w"
                width={150}
                height={200}
                className={cn(
                  "transition-all duration-200 ease-in-out delay-75"
                )}
              />
            )}
          </Link>
          <div className="flex items-center lg:hidden">
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
          <div className="hidden lg:flex items-center space-x-4 font-semibold">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <Link
                      className="hover:underline"
                      href={item.href}
                      legacyBehavior
                      passHref
                    >
                      <NavigationMenuLink
                        className={cn(
                          buttonVariants({ variant: "link" }),
                          isActive(item.href) && "underline"
                        )}
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden  shadow-md">
          <div className="flex flex-col items-start space-y-4 p-4">
            {navigationItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={buttonVariants({ variant: "ghost" })}
                onClick={toggleMenu}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
