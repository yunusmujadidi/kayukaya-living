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

const CustomFurniture = () => {
  return (
    <section className="w-full py-12 md:py-10  px-2 md:px-20 bg-slate-100">
      <div className=" grid gap-8 px-4 md:px-6">
        <div className="space-y-4 md:space-y-6">
          <Link className="hover:underline " href="/products/custom-furniture">
            <h2 className="text-2xl font-light tracking-tighter sm:text-3xl md:text-4xl text-gray-700">
              Custom Furniture
              <span>
                <ArrowUpRight className="inline mb-5 w-4 h-4 text-gray-500" />
              </span>
            </h2>
            <hr />
          </Link>
          <hr />
        </div>
      </div>

      <CarouselWrapper>
        <CarouselContent>
          {furnitureItems.map((item, index) => (
            <CarouselItem key={index}>
              <Image
                alt="Carousel Image"
                className="h-[200px] w-full object-cover object-center md:h-[700px] "
                src={item.image}
                width={1000}
                height={1000}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </CarouselWrapper>
      <TextMotion
        className="relative shadow-sm text-lg  text-gray-700 tracking-tighter"
        paragraph=" From concept to completion, we guide you through every step of the design and manufacturing process. Our expertise in traditional craftsmanship, combined with cutting-edge technology, enables us to produce intricate and complex designs with precision and accuracy.

"
      />
    </section>
  );
};

export default CustomFurniture;
