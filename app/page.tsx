"use client";
import Brands from "./brands";
import Products from "./products";
import styles from "./page.module.scss";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import About from "./about";
import Hero from "./Hero";

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
      <Hero />
      <Products />
      <Brands />

      <About />
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
        </div>
      </section>
    </>
  );
};

export default Page;
