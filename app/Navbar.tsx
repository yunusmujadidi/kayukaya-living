"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState, useCallback } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import navigationItems from "@/lib/navigationItems";
import { useSelectedLayoutSegment } from "next/navigation";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setIsVisible(false); // Scrolling down
    } else {
      setIsVisible(true); // Scrolling up
    }
    setLastScrollY(currentScrollY);
    setIsScrolled(currentScrollY > 0);
  }, [lastScrollY]);

  useEffect(() => {
    const throttledHandleScroll = () => {
      setTimeout(() => {
        handleScroll();
      }, 200);
    };

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [handleScroll]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const segment = useSelectedLayoutSegment();

  const isActive = (href: string) => {
    const activeSegment = href === "/" ? null : href.split("/")[1];
    return activeSegment === segment;
  };

  const pathName = usePathname();
  const isHome = pathName === "/";

  const navClassName = `sticky lg:fixed z-50 w-full duration-200 transition-all lg:bg-black/5 bg-[#40513B]  ${
    isScrolled
      ? " h-16 lg:bg-[#40513B]"
      : isHome
      ? "group hover:bg-[#40513B] delay-75 h-24 "
      : "group lg:bg-[#40513B] delay-75 h-16 lg:sticky"
  } ${isVisible ? "top-0" : "-top-24"}`;

  return (
    <nav className={cn(navClassName)}>
      <div className="h-full w-full mx-auto max-w-7xl px-2.5">
        <div className="flex h-full items-center justify-between">
          <Link
            href="/"
            className={cn(
              "flex font-bold tracking-tight transition-all duration-300 ease-in-out text-xl md:text-3xl"
            )}
          >
            <Image
              alt="Logo"
              src="/assets/logo/logo.png"
              width={150}
              height={200}
              className={cn("transition-all duration-200 ease-in-out delay-75")}
            />
          </Link>
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
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
                      className="transition-all hover:underline"
                      href={item.href}
                      legacyBehavior
                      passHref
                    >
                      <NavigationMenuLink
                        className={cn(
                          buttonVariants({ variant: "link" }),
                          isScrolled
                            ? "text-white"
                            : !isHome
                            ? "text-white"
                            : "text-black group-hover:text-white",
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
        <div className="lg:hidden bg-white shadow-md">
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
    </nav>
  );
};

export default Navbar;
