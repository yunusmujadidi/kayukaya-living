const navigationItems = [
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

export default navigationItems;
