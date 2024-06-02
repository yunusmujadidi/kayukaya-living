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
      <section className="w-full py-12 md:py-24 ">
        <div className="container grid gap-8 px-4 md:px-6 max-w-6xl">
          <div className="grid gap-4">
            <div className="text-left">
              <h2 className="text-2xl font-light tracking-tighter sm:text-3xl md:text-4xl">
                Sun Loungers by KayuKaya Contract
              </h2>
            </div>
            <div className="rounded-lg overflow-hidden">
              <CarouselWrapper>
                <CarouselContent>
                  {sunLoungers.map((item, index) => (
                    <CarouselItem key={index}>
                      <Image
                        alt="Carousel Image"
                        className="h-[400px] w-full object-cover object-center md:h-[700px] "
                        src={item.src}
                        width={1000}
                        height={1000}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </CarouselWrapper>
            </div>
          </div>
          <div className="grid gap-4 text-left">
            <p className="  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-gray-300">
              Discover our stunning sun loungers, designed to elevate your
              outdoor living experience. Explore the versatility of our
              collections, showcased in various residential and commercial
              projects.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SunLoungers;
