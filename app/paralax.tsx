import Column from "@/components/ui/column";
import React from "react";
import styles from "./page.module.scss";

const images = [
  "https://source.unsplash.com/random/?outdoor-furniture?sig=1",
  "https://source.unsplash.com/random/?outdoor-furniture?sig=2",
  "https://source.unsplash.com/random/?outdoor-furniture?sig=3",
  "https://source.unsplash.com/random/?outdoor-furniture?sig=4",
  "https://source.unsplash.com/random/?outdoor-furniture?sig=5",
  "https://source.unsplash.com/random/?outdoor-furniture?sig=6",
  "https://source.unsplash.com/random/?outdoor-furniture?sig=7",
  "https://source.unsplash.com/random/?outdoor-furniture?sig=8",
  "https://source.unsplash.com/random/?outdoor-furniture?sig=9",
  "https://source.unsplash.com/random/?outdoor-furniture?sig=10",
  "https://source.unsplash.com/random/?outdoor-furniture?sig=11",
  "https://source.unsplash.com/random/?outdoor-furniture?sig=12",
];

const Paralax = () => {
  return (
    <main className={styles.main}>
      <div className={styles.spacer}></div>
      <div className={styles.galery}>
        <div className={styles.galleryWrapper}>
          <Column images={[images[0], images[1], images[2]]} />
          <Column images={[images[3], images[4], images[5]]} />
          <Column images={[images[6], images[7], images[8]]} />
          <Column images={[images[9], images[10], images[11]]} />
        </div>
      </div>
      <div className={styles.spacer}></div>
    </main>
  );
};

export default Paralax;
