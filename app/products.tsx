"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TitleNL from "./title-nolink";
import { Button } from "@/components/ui/button";

interface Card {
  imgSrc: string;
  src: string;
  title: string;
}

interface ProductsProps {
  title: string;
  cards: Card[];
  slice?: number;
}

const Products = ({ title, cards, slice = 50 }: ProductsProps) => {
  const [showMore, setShowMore] = useState(false);

  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  };

  const renderCard = (imgSrc: string, src: string, title: string) => (
    <a className="hover:underline" href={src} key={src}>
      <motion.div
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
    </a>
  );

  const initialCards = cards.slice(0, slice);
  const additionalCards = cards.slice(slice);

  return (
    <>
      <TitleNL>{title}</TitleNL>
      <section className="px-4 md:px-20 md:pb-5">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
          {initialCards.map((card) =>
            renderCard(card.imgSrc, card.src, card.title)
          )}
          <AnimatePresence>
            {showMore &&
              additionalCards.map((card) =>
                renderCard(card.imgSrc, card.src, card.title)
              )}
          </AnimatePresence>
        </div>
        {/* <div className="mt-8 text-center">
          {!showMore && additionalCards.length > 0 && (
            <Button onClick={handleToggleShowMore}>Show More</Button>
          )}
        </div> */}
      </section>
    </>
  );
};

export default Products;
