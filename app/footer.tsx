import React from "react";
import Link from "next/link";

const Footer = () => {
  const navigationItems = [
    {
      title: "Products",
      children: [
        {
          title: "Custom Furniture",
          href: "/products/custom-furniture",
        },
        {
          title: "Umbrellas and Shades",
          href: "/products/umbrellas-shades",
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
          title: "Mill Works",
          href: "/products/mill-works",
        },
      ],
    },
    {
      title: "Projects",
      children: [
        {
          title: "Hotels and Resorts",
          href: "/projects/hotels-resorts",
        },
        {
          title: "Public and Commercial Spaces",
          href: "/projects/public-commercial",
        },
        {
          title: "Luxury Condominiums",
          href: "/projects/luxury-condominiums",
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

  return (
    <footer className="bg-gray-100 p-6 md:py-12 w-full dark:bg-gray-800">
      <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
        {navigationItems.map((item, index) => (
          <div key={index} className="grid gap-1">
            <h3 className="font-semibold">{item.title}</h3>
            {item.children &&
              item.children.map((child, childIndex) => (
                <Link
                  key={childIndex}
                  className="hover:underline"
                  href={child.href}
                >
                  {child.title}
                </Link>
              ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
