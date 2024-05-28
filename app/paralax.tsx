"use client";
import styles from "./page.module.scss";
import Image from "next/image";
import Lenis from "lenis";

import { useEffect, useRef, useState } from "react";

import { useTransform, useScroll, motion, MotionValue } from "framer-motion";

const images = [
  "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1664010362273-MZ15A4OO1I3ZG2JTIQOK/IMG_3901.jpg",
  "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1664118296020-GDTOAOND6FL4X0OCZ1GJ/IMG_8763.jpeg?format=2500w",
  "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1664117324539-S7HC5TBNQLB9XSOL1LYR/IMG_8037.jpg?format=2500w",
  "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1617847679395-SHF29I9LWUF0MJA2UYO6/WhatsApp+Image+2021-04-08+at+9.52.47+AM.jpeg?format=2500w",
  "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1664118829461-NUXVB3CD4XX9U0LMVGVF/maple+pews.jpg?format=2500w",
  "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1664114030064-9U0D7O3SZ6KP7U76Y2FA/3fb23ea1-3a03-4a62-b81d-99c79be49836.jpg",
  "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1677589620343-RXFPRVKO4UTQUWMKUU6R/2cdf9186-b074-470c-be41-b228f5294e8d.jpg?format=1500w",
  "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1573459330387-TZ3JXR3O7CSBHS42L2G6/ray3.jpeg?format=2500w",
  "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1664451095051-XEIW4ST1Y4F8IYRVB6R9/IMG_3096.jpeg?format=2500w",
  "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1664450748653-KVUXVWD739GCYZ6CKTTO/alu+smart+capella+284668.jpg?format=2500w",
  "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1680184276836-AONLCEBDFOZLW7NK67SQ/0d94fb73-8507-453a-a695-63be63bddc0a.jpg",
  "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1680184274552-Q38XFWIQRNNE9OSOINKL/b00cd724-36ae-4dc1-87b1-b9736cb4895f.jpg",
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
const Paralax = () => {
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
  );
};

export default Paralax;
