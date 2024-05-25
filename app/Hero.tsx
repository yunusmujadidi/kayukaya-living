import {
  CarouselItem,
  CarouselContent,
  Carousel,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full px-[-4px] bg-slate-200 mb-10">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <div className="relative">
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

              <div className="absolute bottom-4 left-20 rounded-md p-2 text-white">
                <h2 className="text-2xl font-light tracking-tighter sm:text-3xl md:text-4xl">
                  Featured Projects
                </h2>
                <p className="text-sm pt-3">Unlock your artistic potential.</p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative">
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

              <div className="absolute bottom-4 left-20 rounded-md p-2 text-white">
                <h2 className="text-2xl font-light tracking-tighter sm:text-3xl md:text-4xl">
                  Featured Projects
                </h2>
                <p className="text-sm pt-3">Unlock your artistic potential.</p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative">
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

              <div className="absolute bottom-4 left-20 rounded-md p-2 text-white">
                <h2 className="text-2xl font-light tracking-tighter sm:text-3xl md:text-4xl">
                  Featured Projects
                </h2>
                <p className="text-sm pt-3">Unlock your artistic potential.</p>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
}
