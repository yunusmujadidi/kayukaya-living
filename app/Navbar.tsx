"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

interface NavigationItem {
  title: string;
  href: string;
  description: string;
  children?: NavigationItem[];
}

const navigationItems: NavigationItem[] = [
  {
    title: "Interiors & Mill Works",
    href: "/interiors-mill-works",
    description: "Browse our interior design and millwork services.",
  },
  {
    title: "Umbrella",
    href: "/umbrella",
    description: "Explore our premium umbrellas and shades.",
  },
  {
    title: "Brands",
    href: "/brands",
    description: "Discover our company's mission, values, and practices.",
    children: [
      {
        title: "Manutti",
        href: "/brands/manutti",
        description: "An introduction to our company and core values.",
      },
      {
        title: "ethimo",
        href: "/brands/ethimo",
        description: "Explore our mission and vision for a sustainable future.",
      },
    ],
  },
  {
    title: "Factory",
    href: "/factory",
    description: "Information about our manufacturing facilities.",
  },
  {
    title: "Office",
    href: "/office",
    description: "Details about our office locations.",
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Discover our company's mission, values, and practices.",
    children: [
      {
        title: "Overview",
        href: "/about/overview",
        description: "An introduction to our company and core values.",
      },
      {
        title: "Our Mission",
        href: "/about/mission",
        description: "Explore our mission and vision for a sustainable future.",
      },
      {
        title: "Sustainability Practices",
        href: "/about/sustainability",
        description:
          "Learn about our environmental and social responsibility initiatives.",
      },
    ],
  },
];

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

  return (
    <div
      className={cn(
        "z-50 sticky h-24 w-full inset-x-0 items-center transition-all top-0 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 backdrop-blur-md shadow-md",
        isScrolled && "h-20 bg-white backdrop-blur-md shadow-md block",
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
                        className={navigationMenuTriggerStyle()}
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
        <div className="md:hidden bg-white shadow-md">
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

interface ListItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  href: string;
  children: React.ReactNode;
}

const CustomNavigationMenuItem: React.FC<{ item: NavigationItem }> = ({
  item,
}) => (
  <NavigationMenuItem>
    <Link className="hover:underline" href={item.href} passHref>
      <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
    </Link>
    {item.children && (
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
          {item.children.map((child) => (
            <ListItem
              className="font-bold text-emerald-800"
              key={child.title}
              title={child.title}
              href={child.href}
            >
              <p className="font-normal">{child.description}</p>
              {child.children && (
                <ul>
                  {child.children.map((subChild) => (
                    <ListItem
                      key={subChild.title}
                      title={subChild.title}
                      href={subChild.href}
                    >
                      {subChild.description}
                    </ListItem>
                  ))}
                </ul>
              )}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    )}
  </NavigationMenuItem>
);

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, children, ...props }, ref) => (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
);
ListItem.displayName = "ListItem";

export default Navbar;
