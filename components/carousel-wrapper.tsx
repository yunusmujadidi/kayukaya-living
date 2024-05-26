"use client";

import { Carousel } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function CarouselWrapper({
  children,
  autoplaySpeed = 5000,
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
        }),
      ]}
    >
      {children}
    </Carousel>
  );
}
