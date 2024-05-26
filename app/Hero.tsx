import { CarouselWrapper } from "@/components/carousel-wrapper";
import { Badge } from "@/components/ui/badge";
import { CarouselItem, CarouselContent } from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

const carouselItems = [
  {
    title: "Amanyara - Turks and Caicos ",
    description: "Singapore skyscraper in CBD",
    category: "Hotels and Resorts",
    image:
      "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1664107542275-YH9U4PLGSVFYU7RCXAU0/ppvilla10+copy.jpg?format=2500w",
  },

  {
    title: "The Ritz Carlton Maldives",
    description: "Bespoke Hospitality Furniture Solutions",
    category: "Outdoor Furniture",
    image:
      "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1664117309470-092XJHMEJT6VCBCJKLD5/Screenshot+2022-09-25+at+12.44.44+PM.png",
  },
  {
    title: "Shangri La - Mauritius ",
    description: "Unlock your artistic potential.",
    category: "Hotels and Resorts",
    image:
      "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/f4e1cdad-8bd9-4379-9544-6460e6aa0d19/Screenshot+2022-09-30+at+10.17.11+PM.png",
  },
  {
    title: "Royal Atlantis - Dubai ",
    description: "Unlock your artistic potential.",
    category: "Hotels and Resorts",
    image:
      "https://scontent.cdninstagram.com/v/t51.29350-15/332411058_1637788493339546_7613288221633904155_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi43MjB4NDgwLnNkci5mMjkzNTAifQ&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=3KXChTNnKboQ7kNvgH4AjpA&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzA0NTM0MTE3OTY0ODExMTIyOQ%3D%3D.2-ccb7-5&oh=00_AYCuO_dVo_ovHQ8yDkfE3s26WmKc3sgS1n2hBWupjWiOUA&oe=6658F30A&_nc_sid=10d13b",
  },
  {
    title: "One & Only Desaru",
    description: "Unlock your artistic potential.",
    category: "Hotels and Resorts",
    image:
      "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1695222006593-OUAGW9C88MMYS8YPXBY9/IMG_3890.jpeg",
  },
];

export default function Hero() {
  return (
    <section className="w-full px-[-4px]">
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
                    <h2 className="text-2xl font-light tracking-tighter sm:text-4xl md:text-white text-black md:bg-black/90 rounded-lg p-2">
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
