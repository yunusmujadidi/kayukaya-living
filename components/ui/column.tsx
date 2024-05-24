import Image from "next/image";
import React from "react";
import styles from "./page.module.scss";

const Column = ({ images }: { images: string[] }) => {
  return (
    <div className={styles.column}>
      {images.map((src, index) => (
        <div key={index} className={styles.imageContainer}>
          <Image
            key={index}
            alt={`Image ${index}`}
            src={src} // Change 'images' to 'src'\
            width="700"
            height="900"
          />
        </div>
      ))}
    </div>
  );
};

export default Column;
