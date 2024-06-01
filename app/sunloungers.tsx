import NextJsImage from "@/components/album-image";
import React from "react";
import PhotoAlbum from "react-photo-album";
import Title from "./title";
import { CarouselWrapper } from "@/components/carousel-wrapper";
import {
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import TextMotion from "@/components/ui/text-motion";
import factoryitems from "@/lib/factoryitems";
import Image from "next/image";
import sunLoungers from "@/lib/sun-loungers";

const SunLoungers = () => {
  return (
    <>
      {/* <section className="w-full py-10 px-2 md:px-20 text-white">
        <PhotoAlbum
          layout="rows"
          photos={photos}
          renderPhoto={NextJsImage}
          defaultContainerWidth={1200}
          sizes={{ size: "calc(100vw - 240px)" }}
        />
      </section> */}
      <Title href="/interiors-mill-works">Sun Loungers</Title>
      <div className="container ">
        <CarouselWrapper>
          <CarouselContent>
            {sunLoungers.map((item, index) => (
              <CarouselItem key={index}>
                <Image
                  alt="Carousel Image"
                  className="h-[200px] w-full object-cover object-center md:h-[700px] "
                  src={item.src}
                  width={1000}
                  height={1000}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white text-black" />
          <CarouselNext className="bg-white text-black" />
        </CarouselWrapper>
        <TextMotion
          className="w-full py-10 px-2 md:px-20 text-md md:text-xl"
          paragraph="Our partner facility here in Indonesia has a state of the art facility Being committed to the improvement of furniture craftsmanship technology and quality, we have a large-scale technical research and development team with more than 400 professionals to cater to your brief from veneer to a dedicated CNC area with 10 machines, special finishes and custom area"
        />
      </div>
    </>
  );
};

export default SunLoungers;
