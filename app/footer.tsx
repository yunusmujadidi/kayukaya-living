import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const navigationItems = [
    {
      title: "Interiors and Mill Works",
      children: [
        {
          title: "Custom Furniture",
          href: "/interiors-mill-works",
        },
        {
          title: "Umbrellas and Shades",
          href: "/interiors-mill-works",
        },
        {
          title: "Mill Works",
          href: "/interiors-mill-works",
        },
      ],
    },
    {
      title: "Umbrella",
      children: [
        {
          title: "Glatz Swiss",
          href: "/products/umbrellas-shades/glatz-swiss",
        },
        {
          title: "Jardinico Belgium",
          href: "/products/umbrellas-shades/jardinico-belgium",
        },
        {
          title: "Coro Italia",
          href: "/products/umbrellas-shades/coro-italia",
        },
      ],
    },
    {
      title: "Materials",
      children: [
        {
          title: "High-Quality Materials",
          href: "/materials/high-quality",
        },
        {
          title: "Sustainability Efforts",
          href: "/materials/sustainability",
        },
      ],
    },
    {
      title: "About Us",
      href: "/about",
      children: [
        {
          title: "Overview",
          href: "/about/overview",
        },
        {
          title: "Our Mission",
          href: "/about/mission",
        },
        {
          title: "Sustainability Practices",
          href: "/about/sustainability",
        },
        {
          title: "Manufacturing Facilities",
          href: "/about/facilities",
        },
      ],
    },
    {
      title: "Contact",
      href: "/contact",
      children: [
        {
          title: "Headquarters",
          href: "/contact/headquarters",
        },
        {
          title: "Regional Offices",
          href: "/contact/regional-offices",
        },
      ],
    },
  ];

  interface NavigationItem {
    title: string;
    href?: string;
    children?: NavigationItem[];
  }

  const renderNavigationItems = (items: NavigationItem[]): JSX.Element => (
    <div className="grid gap-1">
      {items.map((item, index) => (
        <div key={index}>
          <Link className="hover:underline " href={item.href || "#"}>
            {item.title}
          </Link>
          {item.children && (
            <div className="pl-4">{renderNavigationItems(item.children)}</div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <footer className="bg-[#40513B] p-6 md:py-12 w-full dark:bg-gray-800 text-white">
      <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
        {navigationItems.map((item, index) => (
          <div key={index}>
            <Link
              className="font-semibold hover:underline"
              href={item.href || "#"}
            >
              {item.title}
            </Link>
            {item.children && <div>{renderNavigationItems(item.children)}</div>}
          </div>
        ))}
      </div>
      <div className="container mx-auto px-4 md:px-6 mt-8 md:mt-12 text-center text-sm">
        <div>
          KayuKaya Semarang: No 19 Forest Hill blok A, Citraland BSB, Semarang
          50212, INDONESIA
        </div>
        KayuKaya Karuizawa: 247-2, Hotchi, Karuizawa-machi, Kitasaku-gun, Nagano
        389-0113, JAPAN
      </div>
      <div className="space-y-4 text-center">
        <p className="mx-auto md:text-sm dark:text-gray-400">
          TEL +65 6203 5585 FAX +65 6203 5525 INFO@KAYUKAYA.COM
        </p>
      </div>
      <div className="container mx-auto px-4 md:px-6 mt-8 md:mt-12 text-center text-sm">
        © 2024 KayuKaya Living. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
