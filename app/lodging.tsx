import React from "react";
import TitleNL from "./title-nolink";
import TextMotion from "@/components/ui/text-motion";
import Image from "next/image";
import Link from "next/link";

const photos = [
  {
    src: "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1716090448726-EHQ8FEI5AR8X7V9OP6X9/Image+4+copy.jpg?format=1500w",
    width: 1184,
    height: 789,
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1664114029507-QFZPGT81IL0GOWVPXA16/a7e99fd5-93b5-4ab1-9cd0-f9a4007edd06-1.jpg?format=1500w",
    width: 1152,
    height: 648,
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1664114030064-9U0D7O3SZ6KP7U76Y2FA/3fb23ea1-3a03-4a62-b81d-99c79be49836.jpg?format=1500w",
    width: 1280,
    height: 720,
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1664116082672-JSMHBR6FTW80DMJCDA21/IMG_3871.jpg?format=1500w",
    width: 1208,
    height: 679,
  },
];

const Lodging = () => {
  return (
    <section className="w-full py-12 md:py-24  ">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
          <div className="space-y-4">
            <div className="inline-block rounded-lg px-3 py-1 text-sm font-medium bg-white text-black">
              Glamping
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              The New Luxury in Nature
            </h2>
            <p className="max-w-[600px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-gray-400">
              Discover the unique and intimate bond with nature that our Eco
              lodging solutions provide. Immerse yourself in the beauty of the
              great outdoors while enjoying the comforts of a luxury retreat.
            </p>
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-md  px-8 text-sm font-medium  shadow transition-colors focus-visible:outline-none focus-visible:ring-1  disabled:pointer-events-none disabled:opacity-50 bg-gray-50 text-gray-900 hover:bg-gray-50/90 focus-visible:ring-gray-300"
              prefetch={false}
            >
              Contact Us
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1716090448726-EHQ8FEI5AR8X7V9OP6X9/Image+4+copy.jpg?format=1500w"
              width={550}
              height={310}
              alt="Glamping 1"
              className="col-span-2 row-span-2 rounded-xl object-cover"
            />
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1664114029507-QFZPGT81IL0GOWVPXA16/a7e99fd5-93b5-4ab1-9cd0-f9a4007edd06-1.jpg?format=1500w"
              width={260}
              height={150}
              alt="Glamping 2"
              className="rounded-xl object-cover"
            />
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1664114030064-9U0D7O3SZ6KP7U76Y2FA/3fb23ea1-3a03-4a62-b81d-99c79be49836.jpg?format=1500w"
              width={260}
              height={150}
              alt="Glamping 3"
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
    //     <section className="w-full  bg-[#353929] text-white py-10">
    //       <div className="container">
    //         <h1 className="text-2xl font-light tracking-tighter sm:text-3xl md:text-4xl hover:underline mb-5">
    //           Glamping the New Luxury in Nature
    //           <hr />
    //         </h1>
    //         <div className="grid grid-cols-1 gap-4 pt-8 sm:grid-cols-2 md:grid-cols-4 py-10">
    //           <Image
    //             alt="Office Image 1"
    //             className="aspect-[4/3] rounded-lg object-cover"
    //             height={400}
    //             src={photos[0].src}
    //             width={400}
    //           />
    //           <Image
    //             alt="Office Image 2"
    //             className="aspect-[4/3] rounded-lg object-cover"
    //             height={400}
    //             src={photos[1].src}
    //             width={400}
    //           />
    //           <Image
    //             alt="Office Image 3"
    //             className="aspect-[4/3] rounded-lg object-cover"
    //             height={400}
    //             src={photos[2].src}
    //             width={400}
    //           />
    //           <Image
    //             alt="Office Image 3"
    //             className="aspect-[4/3] rounded-lg object-cover"
    //             height={400}
    //             src={photos[3].src}
    //             width={400}
    //           />
    //         </div>
    //         <TextMotion
    //           className="py-5 font-xl md:text-2xl font-sans font-light"
    //           paragraph="Unique lodging inspired by Nature and Tradition. Designed to bring the most intimate bond to nature."
    //         />
    //         <TextMotion
    //           className="py-5 font-xl md:text-2xl font-sans font-light"
    //           paragraph="

    // Our distinctive wooden Eco lodging solutions are as big as the view. They come with everything you need - nothing more, nothing less – but give the most space to glamorous experience of nature. Email us for more info and pricing at info@kayukaya.com"
    //         />
    //       </div>
    //     </section>
  );
};

export default Lodging;
