import { CarouselWrapper } from "@/components/carousel-wrapper";
import { Badge } from "@/components/ui/badge";
import { CarouselItem, CarouselContent } from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

const carouselItems = [
  {
    title: "Amanyara - Turks and Caicos ",
    description: "Singapore skyscraper in CBD",
    category: "Outdoor furniture",
    image:
      "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1664107542275-YH9U4PLGSVFYU7RCXAU0/ppvilla10+copy.jpg?format=2500w",
  },

  {
    title: "St Thomas condominium, CORO Italy, VONDOM Spain",
    description: "Outdoor furniture",
    category: "Outdoor furniture",
    image:
      "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1664112886250-UFD7010O3TA0C4ZIMTJJ/DSCF1242.jpg",
  },
  {
    title: "Shangri La - Mauritius - Outdoor furniture ",
    description: "Unlock your artistic potential.",
    category: "Outdoor furniture",
    image:
      "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/f4e1cdad-8bd9-4379-9544-6460e6aa0d19/Screenshot+2022-09-30+at+10.17.11+PM.png",
  },
  {
    title: "De Castelli sculpto",
    description: "Unlock your artistic potential.",
    category: "Outdoor furniture",
    image:
      "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1677589620343-RXFPRVKO4UTQUWMKUU6R/2cdf9186-b074-470c-be41-b228f5294e8d.jpg",
  },
  {
    title: "One & Only Desaru",
    description: "Unlock your artistic potential.",
    category: "Outdoor furniture",
    image:
      "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1695222006593-OUAGW9C88MMYS8YPXBY9/IMG_3890.jpeg",
  },
];

export default function Hero() {
  return (
    <section className="w-full px-[-4px] mb-10">
      <CarouselWrapper>
        <CarouselContent>
          {carouselItems.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative">
                <Image
                  alt="Carousel Image"
                  className="h-[400px] w-full object-cover object-center md:h-[800px] "
                  height={1080}
                  src={item.image}
                  style={{
                    aspectRatio: "1920/1080",
                    objectFit: "cover",
                  }}
                  width={1920}
                />

                <div className="block md:absolute bottom-10 left-20 rounded-md p-3 border-b md:border-none">
                  <Link href="/#">
                    <h2 className="text-xl font-semibold md:text-4xl md:text-white text-black md:bg-black/50 rounded-lg p-3">
                      {item.title}
                    </h2>
                  </Link>
                  <div>
                    <Badge className="gap-2 md:my-2 ">
                      <p className="text-xs font-light">Outdoor furniture</p>
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
