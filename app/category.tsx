"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import categoryList from "@/lib/category-list";

export default function Category() {
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
          delay: i * 0.1, // Adjust the delay to control stagger timing
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
        delay: i * 0.2, // Adjust the delay to control stagger timing
        duration: 0.5,
      },
    }),
  };

  return (
    <section ref={ref} className="w-full py-12 px-2 md:px-20 md:py-10 bg-white">
      <div className="grid gap-8 px-4 md:px-6">
        <div className="space-y-4 md:space-y-6">
          <Link className="hover:underline" href="/umbrella">
            <h2 className="text-2xl font-light tracking-tighter sm:text-3xl md:text-4xl">
              Our Product Category
              <span>
                <ArrowUpRight className="inline mb-5 w-4 h-4 text-gray-500" />
              </span>
            </h2>
            <hr />
          </Link>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-6  gap-2 md:gap-3 lg:gap-4">
          {categoryList.map(({ imgSrc, title, url }, i) => (
            <Link key={i} href={url}>
              <motion.div
                key={i}
                className="relative group overflow-hidden rounded-lg"
                custom={i}
                initial="hidden"
                animate={controls}
                variants={cardVariants}
              >
                <Image
                  alt={`Category ${title}`}
                  className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:blur-md"
                  height={400}
                  src={imgSrc}
                  style={{
                    aspectRatio: "400/400",
                    objectFit: "cover",
                  }}
                  width={400}
                />
                <div className="absolute inset-0 flex items-center justify-center !bg-black bg-opacity-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-white text-lg font-semibold">
                    {title}
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
