"use client";
import Brands from "./brands";
import Products from "./products";
import styles from "./page.module.scss";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import About from "./about";

import { useEffect, useRef, useState } from "react";

import { useTransform, useScroll, motion, MotionValue } from "framer-motion";

const images = [
  "https://source.unsplash.com/random/?furniture?sig=1",
  "https://source.unsplash.com/random/?furniture?sig=2",
  "https://source.unsplash.com/random/?furniture?sig=3",
  "https://source.unsplash.com/random/?furniture?sig=4",
  "https://source.unsplash.com/random/?furniture?sig=5",
  "https://source.unsplash.com/random/?furniture?sig=6",
  "https://source.unsplash.com/random/?furniture?sig=7",
  "https://source.unsplash.com/random/?furniture?sig=8",
  "https://source.unsplash.com/random/?furniture?sig=9",
  "https://source.unsplash.com/random/?furniture?sig=10",
  "https://source.unsplash.com/random/?furniture?sig=11",
  "https://source.unsplash.com/random/?furniture?sig=12",
];

const Column = ({
  images,
  y,
}: {
  images: string[];
  y: MotionValue<number>;
}) => {
  return (
    <motion.div style={{ y }} className={styles.column}>
      {images.map((src, index) => (
        <div key={index} className={styles.imageContainer}>
          <Image key={index} alt={`Image ${index}`} src={src} fill />
        </div>
      ))}
    </motion.div>
  );
};

const Page = () => {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <Products />
      <Brands />

      <section className="w-full py-12 md:py-24 lg:py-32 -mt-10 bg-[#2D2D2D]">
        <div className="container grid gap-8 px-4 md:px-6">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-md font-light tracking-tighter sm:text-3xl md:text-4xl text-white">
              About KayuKaya
            </h2>
            <hr />
            <About
              className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
              paragraph=" KayuKaya specializes in bespoke hospitality furniture solutions, catering to the commercial FF&E market with a focus on OEM or VE requirements for both exterior and interior applications.     Our expertise lies in large-scale manufacturing with shorter lead times and on-budget delivery. We utilize premium materials to meet the evolving demands of the market, and our flexible approach allows us to work closely with clients' concepts, designs, and briefs."
            />
          </div>
          <About
            className="relative shadow-sm"
            paragraph="Our impressive portfolio includes collaborations with high-end hotels, resorts, F&B establishments, public spaces, and condominiums worldwide, such as the Ritz Carlton in the Maldives, The Patina Maldives, The Royal Atlantis in Dubai, The Langham in Pasadena, Four Seasons in Bora Bora, Shangri La, HK  and many others across the globe, including Singapore.   "
          />
          <About
            className="relative shadow-sm"
            paragraph="In response to customer needs, we expanded our offerings in 2008 to include professional shades, umbrellas, and selected furniture brands. As the Sole Authorized Agent for Glatz in Asia, we offer a range of products, including umbrellas from Glatz Swiss (High wind proof Umbrella)   Jardinico Belgium (Resort type Umbrellas) , and Coro Italia. (outdoor yacht furniture )"
          />
          <About
            className="relative shadow-sm"
            paragraph="Our impressive portfolio includes collaborations with high-end hotels, resorts, F&B establishments, public spaces, and condominiums worldwide, such as the Ritz Carlton in the Maldives, The Patina Maldives, The Royal Atlantis in Dubai, The Langham in Pasadena, Four Seasons in Bora Bora, Shangri La, HK  and many others across the globe, including Singapore.
        
"
          />
          <About
            className="relative shadow-sm"
            paragraph="Our expertise lies in large-scale manufacturing with shorter lead times and on-budget delivery. We utilize premium materials to meet the evolving demands of the market, and our flexible approach allows us to work closely with clients' concepts, designs, and briefs"
          />
        </div>
      </section>
      <section>
        <div className={styles.main}>
          <div className={styles.gallery}>
            <div className={styles.galleryWrapper}>
              <Column images={[images[0], images[1], images[2]]} y={y} />
              <Column images={[images[3], images[4], images[5]]} y={y2} />
              <Column images={[images[6], images[7], images[8]]} y={y3} />
              <Column images={[images[9], images[10], images[11]]} y={y4} />
            </div>
          </div>
          <div className={styles.spacer}></div>
        </div>
      </section>
    </>
  );
};

export default Page;
