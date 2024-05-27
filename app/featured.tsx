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

const projects = [
  {
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1664117246615-QKCEF5HTDHJGB69CSY1X/IMG_8634.jpeg",
    title: "Mulia Bali - De Castelli sculptor ",
    src: "custom-furniture",
  },
  {
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1664117309470-092XJHMEJT6VCBCJKLD5/Screenshot+2022-09-25+at+12.44.44+PM.png",
    title: "The Ritz Carlton Maldives",
    src: "umbrella",
  },
  {
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1664117324539-S7HC5TBNQLB9XSOL1LYR/IMG_8037.jpg?format=1000w",
    title: "Parc Komo ",
    src: "mill-works",
  },
  {
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1695222006593-OUAGW9C88MMYS8YPXBY9/IMG_3890.jpeg?format=750w",
    title: "One & Only Desaru  ",
    src: "outdoor-furniture",
  },
  // {
  //   imgSrc:
  //     "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1695222025188-TJ6BDYT2CHMLINUAUS0Y/IMG_3889.jpeg?format=750w",
  //   title: "One & Only Desaru ",
  //   src: "outdoor-furniture",
  // },
  {
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1695222028009-DUNCYZ896HK9KP8PX5B5/725440af-1c71-443d-964d-a372be9706a8.jpg",
    title: "Exuma PMC Bahama",
    src: "interior-furniture",
  },
  {
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/828c7b4c-4126-483b-a1ad-4cb782e29ef3/WhatsApp+Image+2024-02-01+at+19.02.10.jpeg",
    title: "Shangri La - HK",
    src: "interior-furniture",
  },
  {
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1e0c8c78-0e9b-48c2-9dcb-e5d84b75726e/Dubai-+Jebel+Ali+.jpg",
    title: "Dubai Jebel Ali Park - rooftop, pool and F&B , Umbrella.",
    src: "interior-furniture",
  },
  {
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1576065414233-8BPKR02SZPUMKN2XLNGG/The+Mulia%2C+bali.+Driade+Cape+west+hound+tooth.jpeg",
    title: "Bali’s Super Luxurious beach resort- The Mulia",
    src: "interior-furniture",
  },
  {
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/34766c4b-f7e3-46be-8def-7a5bf5233524/Screenshot+2021-01-13+at+1.10.45+PM.png",
    title:
      "Sofitel City Centre - Singapore- Outdoor furniture, Outdoor soft furnishings , Sunbrella fabrics and quick dry cushion on custom aluminium daybed",
    src: "interior-furniture",
  },
  {
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/f4e1cdad-8bd9-4379-9544-6460e6aa0d19/Screenshot+2022-09-30+at+10.17.11+PM.png",
    title: "Shangri La - Mauritius - Outdoor furniture ,Objet",
    src: "interior-furniture",
  },
  {
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1578576734311-7CAOVR46KNW9VTFBGC7V/fraser+tower+-+Singapore+-+roof+top+-+VONDOM+furniture+.jpeg",
    title: "Frasers Tower rooftop, Singapore skyscraper in CBD",
    src: "interior-furniture",
  },
  {
    imgSrc:
      "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1579582467486-7AG92F0TSQXJWGA1ZDBC/ST+Thomas+pool+.jpg",
    title: "St Thomas condominium, CORO Italy, VONDOM Spain",
    src: "interior-furniture",
  },
];

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
