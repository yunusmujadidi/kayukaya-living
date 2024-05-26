import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Products() {
  const [showMore, setShowMore] = useState(false);

  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  };

  const renderCard = (src: string, title: string) => (
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
        height="300"
        src={src}
        width="700"
      />
      <div className="bg-white p-3 dark:bg-gray-950">
        <h3 className="font-semibold text-base group-hover:underline text-md">
          {title}
        </h3>
      </div>
    </motion.div>
  );

  const cards = [
    {
      imgSrc:
        "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1664118838327-PR640BPKSISIACK69WBS/White+woven+wicker+club+house+.JPG",
      title: "Custom Furniture",
      src: "custom-furniture",
    },
    {
      imgSrc:
        "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1664451095051-XEIW4ST1Y4F8IYRVB6R9/IMG_3096.jpeg",
      title: "Umbrella",
      src: "umbrella",
    },
    {
      imgSrc:
        "https://scontent.cdninstagram.com/v/t39.30808-6/426021242_17955505286786348_647428394206833758_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDEwODAuc2RyLmYzMDgwOCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=lPOLApceHlMQ7kNvgGN4MDj&edm=APs17CUAAAAA&ccb=7-5&ig_cache_key=MzM2Nzc2NTc1OTMwODI5MTUzNg%3D%3D.2-ccb7-5&oh=00_AYAGnkLFisUgD8HAuwY25AtjPaDH_2I91iaIViFTRbu4bw&oe=6658C700&_nc_sid=10d13b",
      title: "Mill Works",
      src: "mill-works",
    },
    {
      imgSrc:
        "https://scontent.cdninstagram.com/v/t51.29350-15/341522830_774121274288115_1576177936499972435_n.jpg?stp=dst-jpg_e35_p1080x1080&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE3OTQuc2RyLmYyOTM1MCJ9&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=dOoxqi5S6hgQ7kNvgF3ocGK&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzA4MzcwMjMyNzgwMzg1ODQ1Mw%3D%3D.2-ccb7-5&oh=00_AYAco7sYqkmLMREPYvUcff0lOQT5Ws81IUCZR33ovJNjcg&oe=6658ED52&_nc_sid=10d13b",
      title: "Outdoor Furniture",
      src: "outdoor-furniture",
    },
    {
      imgSrc:
        "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1677589620343-RXFPRVKO4UTQUWMKUU6R/2cdf9186-b074-470c-be41-b228f5294e8d.jpg",
      title: "Interior Furniture",
      src: "interior-furniture",
    },
    {
      imgSrc:
        "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1664112886250-UFD7010O3TA0C4ZIMTJJ/DSCF1242.jpg",
      title: "Sun Loungers",
      src: "sun-loungers",
    },
    {
      imgSrc:
        "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1664118654226-KUWIUYILPWM2TM1L0KO3/Screenshot+2022-09-25+at+12.46.25+PM.png?format=750w",
      title: "Resort",
      src: "resort",
    },
    {
      imgSrc:
        "https://scontent.cdninstagram.com/v/t51.29350-15/316886335_196184629568206_3310152316108326828_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDgxMC5zZHIuZjI5MzUwIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=J_I_gvf_A9oQ7kNvgHWHiGO&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjk3OTcxMzg5NzU0MjA4OTQzMA%3D%3D.2-ccb7-5&oh=00_AYB5UoSt8v9zZMZ1gmvcTpa1H7HTZN1dgrG-iNUPm00y5w&oe=6658F4D5&_nc_sid=10d13b",
      title: "Stones Products",
      src: "stones-products",
    },
  ];

  return (
    <section className="px-4 md:px-20 py-12 md:py-16">
      <div className="space-y-4 md:space-y-6 px-5 py-5">
        <Link href="/products">
          <h2 className="text-2xl font-light tracking-tighter sm:text-3xl md:text-4xl">
            Explore Our Products
            <span>
              <ArrowUpRight className="inline mb-5 w-6 h-6 text-gray-500" />
            </span>
          </h2>
        </Link>
        <hr />
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
        {cards.slice(0, 8).map((card) => renderCard(card.src, card.title))}
        <AnimatePresence>
          {showMore &&
            cards.slice(8).map((card) => renderCard(card.src, card.title))}
        </AnimatePresence>
      </div>
      <div className="mt-8 text-center">
        {!showMore && <Button onClick={handleToggleShowMore}>Show More</Button>}
      </div>
    </section>
  );
}
