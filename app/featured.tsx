"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Lightbox from "yet-another-react-lightbox";
import LightboxImage from "@/components/lightbox-image";
import "yet-another-react-lightbox/styles.css";
import Title from "./title";
import TitleNL from "./title-nolink";
import projects from "@/lib/projects";

const Featured = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // Add state for the current index
  const [showMore, setShowMore] = useState(false);

  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const renderCard = (
    imgSrc: string,
    src: string,
    title: string,
    index: number
  ) => (
    <a className="hover:underline" key={src}>
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
          className="object-cover w-full aspect-[6/4] transition-transform duration-300 ease-in-out group-hover:scale-105 cursor-pointer"
          height={300}
          src={imgSrc}
          width={700}
          onClick={() => handleImageClick(index)}
        />
        <div className="bg-white p-3 dark:bg-gray-950">
          <h3 className="font-semibold text-base group-hover:underline text-md">
            {title}
          </h3>
        </div>
      </motion.div>
    </a>
  );

  return (
    <>
      <TitleNL>Project References</TitleNL>
      <section className="px-4 md:px-20 md:pb-5">
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
          <AnimatePresence>
            {projects
              .slice(0, 4)
              .map((card, index) =>
                renderCard(card.imgSrc, card.src, card.title, index)
              )}
            {projects
              .slice(4)
              .map((card, index) =>
                renderCard(card.imgSrc, card.src, card.title, index + 4)
              )}
          </AnimatePresence>
        </div>
        {/* <div className="mt-8 text-center">
          {!showMore && (
            <Button onClick={handleToggleShowMore}>Show More</Button>
          )}
        </div> */}
      </section>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex} // Set the initial slide based on currentIndex
        slides={projects.map((project) => ({ src: project.imgSrc }))}
        render={{ slide: LightboxImage }}
      />
    </>
  );
};

export default Featured;
