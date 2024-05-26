import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import cards from "@/lib/card";

export default function Products() {
  const [showMore, setShowMore] = useState(false);

  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  };

  const renderCard = (imgSrc: string, src: string, title: string) => (
    <Link href={`/products/${src}`} key={src}>
      <motion.div
        key={src}
        className="relative group overflow-hidden rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 1 }}
      >
        <Image
          alt={title}
          className="object-cover w-full aspect-[4/5] transition-transform duration-300 ease-in-out group-hover:scale-105"
          height={300}
          src={imgSrc}
          width={700}
        />
        <div className="bg-white p-3 dark:bg-gray-950">
          <h3 className="font-semibold text-base group-hover:underline text-md">
            {title}
          </h3>
        </div>
      </motion.div>
    </Link>
  );

  return (
    <section className="px-4 md:px-20 md:py-16">
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
        {cards
          .slice(0, 8)
          .map((card) => renderCard(card.imgSrc, card.src, card.title))}
        <AnimatePresence>
          {showMore &&
            cards
              .slice(8)
              .map((card) => renderCard(card.imgSrc, card.src, card.title))}
        </AnimatePresence>
      </div>
      <div className="mt-8 text-center">
        {/* {!showMore && <Button onClick={handleToggleShowMore}>Show More</Button>} */}
      </div>
    </section>
  );
}
