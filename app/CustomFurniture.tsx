import { CarouselWrapper } from "@/components/carousel-wrapper";
import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TextMotion from "@/components/ui/text-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import furnitureItems from "@/lib/furnitureItems";

const CustomFurniture = ({
  bgColor = "",
  textColor = "text-white",
}: {
  bgColor?: string;
  textColor?: string;
}) => {
  return (
    <>
      <section className="w-full py-12 md:py-24 ">
        <div className="container grid gap-8 px-4 md:px-6 max-w-6xl">
          <div className="grid gap-4">
            <div className="text-left">
              <h2 className="text-2xl font-light tracking-tighter sm:text-3xl md:text-4xl">
                Crafting Bespoke Interiors
              </h2>
              <p className=" mx-auto  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-gray-300">
                Discover our expertise in custom furniture design and
                manufacturing.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <CarouselWrapper>
                <CarouselContent>
                  {furnitureItems.map((item, index) => (
                    <CarouselItem key={index}>
                      <Image
                        alt="Carousel Image"
                        className="h-[400px] w-full object-cover object-center md:h-[700px] "
                        src={item.image}
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
              At KayuKaya Living, we take great pride in guiding our clients
              through the entire design and manufacturing process. Blending
              traditional craftsmanship with modern technology, we create
              intricate and precise custom furniture that seamlessly integrates
              into any interior.
            </p>
            <p className=" md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-gray-300">
              Our team of skilled designers and artisans work closely with you
              to understand your unique vision and requirements, ensuring that
              every piece we create is a true reflection of your personal style
              and the character of your space. From initial concept to final
              delivery, we are committed to delivering exceptional quality and
              an unparalleled customer experience.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomFurniture;
