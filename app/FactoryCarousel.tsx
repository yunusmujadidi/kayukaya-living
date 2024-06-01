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
import factoryitems from "@/lib/factoryitems";

const FactoryCarousel = ({
  bgColor = "bg-[#6D6B4F]",
  textColor = "text-white",
}: {
  bgColor?: string;
  textColor?: string;
}) => {
  return (
    <section
      className={`w-full py-12 md:py-10 px-2 md:px-20 ${bgColor} ${textColor} `}
    >
      <div className="container ">
        <CarouselWrapper>
          <CarouselContent>
            {factoryitems.map((item, index) => (
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
          <CarouselPrevious className="bg-[#353929] text-white" />
          <CarouselNext className="bg-[#353929] text-white" />
        </CarouselWrapper>
        <TextMotion
          className="w-full py-10 px-2 md:px-20 text-md md:text-xl"
          paragraph="Our partner facility here in Indonesia has a state of the art facility Being committed to the improvement of furniture craftsmanship technology and quality, we have a large-scale technical research and development team with more than 400 professionals to cater to your brief from veneer to a dedicated CNC area with 10 machines, special finishes and custom area"
        />
      </div>
    </section>
  );
};

export default FactoryCarousel;
