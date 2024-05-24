"use client";
import {
  CarouselItem,
  CarouselContent,
  Carousel,
} from "@/components/ui/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function Hero() {
  const plugin = useRef(
    Autoplay({
      delay: 5000,
      startFrom: 0,
      speed: 500,
      loop: true,
    })
  );
  return (
    <div className="w-full px-[-4px] bg-slate-200 mb-10">
      <Carousel plugins={[plugin.current]}>
        <CarouselContent>
          <CarouselItem>
            <Image
              alt="Carousel Image 1"
              className="h-[400px] w-full object-cover object-center md:h-[800px]"
              height={1080}
              src="/1.jpg"
              style={{
                aspectRatio: "1920/1080",
                objectFit: "cover",
              }}
              width={1920}
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              alt="Carousel Image 2"
              className="h-[400px] w-full object-cover object-center md:h-[800px]"
              height={1080}
              src="/2.jpg"
              style={{
                aspectRatio: "1920/1080",
                objectFit: "cover",
              }}
              width={1920}
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              alt="Carousel Image 3"
              className="h-[400px] w-full object-cover object-center md:h-[800px]"
              height={1080}
              src="/3.jpg"
              style={{
                aspectRatio: "1920/1080",
                objectFit: "cover",
              }}
              width={1920}
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
