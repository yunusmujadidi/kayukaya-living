import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Products() {
  const [showMore, setShowMore] = useState(false);

  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  };

  const renderCard = (sig: number, title: string) => (
    <div key={sig} className="relative group overflow-hidden rounded-lg">
      <Link className="absolute inset-0 z-10" href="#">
        <span className="sr-only">View</span>
      </Link>
      <Image
        alt={`Image ${sig}`}
        className="object-cover w-full aspect-[4/5] transition-transform duration-300 ease-in-out group-hover:scale-105"
        height="300"
        src={`https://source.unsplash.com/random/?interior?sig=${sig}`}
        width="700"
      />
      <div className="bg-white p-3 dark:bg-gray-950">
        <h3 className="font-semibold text-base">{title}</h3>
      </div>
    </div>
  );

  const cards = [
    { sig: 1, title: "Stylish Sunglasses" },
    { sig: 2, title: "Leather Crossbody Bag" },
    { sig: 3, title: "Wireless Headphones" },
    { sig: 4, title: "Classic Wristwatch" },
    { sig: 5, title: "Stylish Backpack" },
    { sig: 6, title: "Retro Camera" },
    // Duplicated cards
    { sig: 7, title: "Elegant Necklace" },
    { sig: 8, title: "Designer Shoes" },
    { sig: 9, title: "Smart Watch" },
    { sig: 10, title: "Vintage Radio" },
    { sig: 11, title: "Luxury Wallet" },
    { sig: 12, title: "Modern Lamp" },
    { sig: 13, title: "Designer Chair" },
    { sig: 14, title: "Stylish Sunglasses" },
    { sig: 15, title: "Leather Crossbody Bag" },
    { sig: 16, title: "Wireless Headphones" },
  ];

  return (
    <section className="px-4 md:px-20 py-12 md:py-16">
      <div className="space-y-4 md:space-y-6 px-5 py-5">
        <h2 className="text-md font-light tracking-tighter sm:text-3xl md:text-4xl">
          Featured Projects
        </h2>
        <hr />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {cards.slice(0, 8).map((card) => renderCard(card.sig, card.title))}
        {showMore &&
          cards.slice(8).map((card) => renderCard(card.sig, card.title))}
      </div>
      <div className="mt-8 text-center">
        <Button onClick={handleToggleShowMore}>
          {showMore ? "Show Less" : "Show More"}
        </Button>
      </div>
    </section>
  );
}
