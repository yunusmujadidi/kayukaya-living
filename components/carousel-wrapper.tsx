"use client";

import { Carousel } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function CarouselWrapper({
  children,
  autoplaySpeed = 3000,
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
          disableOnInteraction: false,
        }),
      ]}
    >
      {children}
    </Carousel>
  );
}
