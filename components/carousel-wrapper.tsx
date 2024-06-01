"use client";

import { Carousel } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function CarouselWrapper({
  children,
  autoplaySpeed = 1500,
}: {
  children: React.ReactNode;
  autoplaySpeed?: number;
}) {
  return (
    <Carousel
      className={"w-full"}
      plugins={[
        Autoplay({
          delay: autoplaySpeed,
          loop: true,
          waitForUser: true,
        }),
      ]}
    >
      {children}
    </Carousel>
  );
}
