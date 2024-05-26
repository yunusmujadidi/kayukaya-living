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
    title: "Products",
    href: "/products",
    description:
      "Browse our exclusive range of bespoke furniture and products.",
    children: [
      {
        title: "Custom Furniture",
        href: "/products/custom-furniture",
        description:
          "Discover our bespoke furniture solutions for luxury projects.",
      },
      {
        title: "Umbrellas and Shades",
        href: "/products/umbrellas-shades",
        description:
          "Explore our premium umbrellas and shades for various applications.",
        children: [
          {
            title: "Glatz Swiss",
            href: "/products/umbrellas-shades/glatz-swiss",
            description: "Durable, high wind-proof umbrellas by Glatz Swiss.",
          },
          {
            title: "Jardinico Belgium",
            href: "/products/umbrellas-shades/jardinico-belgium",
            description: "Elegant resort-style umbrellas by Jardinico Belgium.",
          },
          {
            title: "Coro Italia",
            href: "/products/umbrellas-shades/coro-italia",
            description: "Luxury outdoor yacht furniture by Coro Italia.",
          },
        ],
      },
      {
        title: "Mill Works",
        href: "/products/mill-works",
        description:
          "Custom millwork services featuring exquisite woodwork and finishes.",
      },
    ],
  },
  {
    title: "Projects",
    href: "/projects",
    description:
      "Explore our portfolio of completed projects showcasing our craftsmanship.",
    children: [
      {
        title: "Hotels and Resorts",
        href: "/projects/hotels-resorts",
        description:
          "View our work in luxury hotels and resorts like The Mulia Bali and One & Only Desaru.",
      },
      {
        title: "Public and Commercial Spaces",
        href: "/projects/public-commercial",
        description:
          "See our projects in public and commercial spaces such as Frasers Tower rooftop and Dubai Jebel Ali Park rooftop.",
      },
      {
        title: "Luxury Condominiums",
        href: "/projects/luxury-condominiums",
        description:
          "Browse our luxury condominium projects like St Thomas and V on Shenton.",
      },
    ],
  },
  {
    title: "Materials",
    href: "/materials",
    description:
      "Learn about the premium materials we use and our commitment to sustainability.",
    children: [
      {
        title: "High-Quality Materials",
        href: "/materials/high-quality",
        description:
          "Details on our premium materials, including FSC-certified hardwoods and recyclable metals.",
      },
      {
        title: "Sustainability Efforts",
        href: "/materials/sustainability",
        description:
          "Learn about our practices for reducing waste and minimizing our carbon footprint.",
      },
    ],
  },
  {
    title: "About Us",
    href: "/about",
    description: "Discover KayuKaya Living's mission, values, and practices.",
    children: [
      {
        title: "Overview",
        href: "/about/overview",
        description: "An introduction to KayuKaya Living and our core values.",
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
      {
        title: "Manufacturing Facilities",
        href: "/about/facilities",
        description:
          "Get details on our state-of-the-art facilities in Indonesia and beyond.",
      },
    ],
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Reach out to us for any inquiries or support.",
    children: [
      {
        title: "Headquarters",
        href: "/contact/headquarters",
        description: "Find contact information for our Singapore headquarters.",
      },
      {
        title: "Regional Offices",
        href: "/contact/regional-offices",
        description:
          "Get in touch with our offices in Semarang, Indonesia, and Karuizawa, Japan.",
      },
    ],
  },
];

const navigationItemsMobile = [
  {
    title: "Products",
    href: "/products",
    description:
      "Browse our exclusive range of bespoke furniture and products.",
  },
  {
    title: "Projects",
    href: "/projects",
    description:
      "Explore our portfolio of completed projects showcasing our craftsmanship.",
  },
  {
    title: "Materials",
    href: "/materials",
    description:
      "Learn about the premium materials we use and our commitment to sustainability.",
  },
  {
    title: "About Us",
    href: "/about",
    description: "Discover KayuKaya Living's mission, values, and practices.",
  },
  {
    title: "Contact",
    href: "/contact",
    description: "Reach out to us for any inquiries or support.",
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
        "z-50 sticky h-24 w-full inset-x-0 bg-eme items-center transition-all top-0 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 backdrop-blur-md shadow-md",
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
                src="https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1585542631378-98UBWDIV711MR3CNJLRJ/favicon.ico?format=100w"
                width={50}
                height={50}
              />
            ) : (
              <Image
                alt="Logo"
                src="https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/cad8ef74-7370-4494-929b-2c62cb4c6d27/Screenshot+2022-09-24+at+6.15.29+PM.jpg?format=1500w"
                width={250}
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
                {/* <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem> */}
                {navigationItems.map((item) => (
                  <CustomNavigationMenuItem key={item.title} item={item} />
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-start space-y-4 p-4">
            {navigationItemsMobile.map((item) => (
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
    <Link href={item.href} passHref>
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
