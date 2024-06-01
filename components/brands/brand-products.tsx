"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import Logo from "@/lib/logo";
import zendoSense from "@/lib/zendoSense";
import TextMotion from "@/components/ui/text-motion";

const BrandProductsGrid = ({
  slice = zendoSense.length,
}: {
  slice?: number;
}) => {
  const controls = useAnimation();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.1,
          duration: 0.5,
        },
      }));
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2" ref={ref}>
      {zendoSense.slice(0, slice).map(({ imgSrc, title, src }, i) => (
        <Link key={i} href="/brands/manutti/zendo-sense">
          <motion.div
            key={i}
            className="relative group overflow-hidden rounded-lg"
            custom={i}
            initial="hidden"
            animate={controls}
            variants={cardVariants}
          >
            <Image
              alt={`Logo ${i + 1}`}
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:blur-md"
              height={400}
              src={imgSrc}
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
              width={400}
            />
            <h1 className="pb-5 block bg-white text-black lg:hidden font-bold text-center text-sm md:text-md">
              {title}
            </h1>
            <div className="absolute inset-0 flex items-center justify-center !bg-white bg-opacity-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-black font-semibold">
                <Image
                  src={imgSrc}
                  alt={`Logo ${i + 1}`}
                  width={200}
                  height={100}
                />
                <h1 className="hidden lg:block text-center text-sm md:text-lg">
                  {title}
                </h1>
              </span>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default BrandProductsGrid;
