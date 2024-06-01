import { CarouselWrapper } from "@/components/carousel-wrapper";
import { Badge } from "@/components/ui/badge";
import { CarouselItem, CarouselContent } from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import carouselItems from "../lib/carouselItems";

export default function Hero() {
  return (
    <section className="z-40 w-full px-[-4px]">
      <CarouselWrapper>
        <CarouselContent>
          {carouselItems.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative">
                <Image
                  alt="Carousel Image"
                  className="h-[300px] w-full object-cover object-center md:h-[800px] "
                  height={1080}
                  src={item.image}
                  style={{
                    aspectRatio: "1920/1080",
                    objectFit: "cover",
                  }}
                  width={1920}
                />

                <div className="block md:absolute bottom-10 left-20 rounded-md p-3 border-b md:border-none">
                  <Link href="/interiors-mill-works">
                    <h2 className="text-2xl font-semibold tracking-tighter sm:text-4xl md:text-white text-black md:bg-black/10 rounded-lg p-2">
                      {item.title}
                    </h2>
                  </Link>
                  <div>
                    <Badge className="gap-2 md:my-2 ml-2 md:ml-0 px-2.5 mb-5">
                      <p className="text-xs font-light">{item.category}</p>
                    </Badge>
                  </div>

                  {/* <p className="text-sm pt-3">{item.description}</p> */}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </CarouselWrapper>
    </section>
  );
}
