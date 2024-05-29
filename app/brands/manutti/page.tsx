"use client";

import Title from "@/app/title";
import Image from "next/image";
import TextMotion from "@/components/ui/text-motion";
import Products from "@/app/products";
import manutti from "@/lib/manutti";

export default function Page({ params }: { params: any }) {
  return (
    <div>
      <section
        className="w-full h-[40vh] flex items-center justify-center bg-cover  bg-gray-800/70"
        style={{
          backgroundImage: `url(https://walterswicker.com/wp-content/uploads/2023/05/Prato-Featured-Image.jpg)`,
        }}
      >
        <h1 className="text-white text-4xl font-bold ">
          <Image
            src="https://walterswicker.com/wp-content/uploads/2022/06/Manutti-Logo.png"
            alt={"logo"}
            width={200}
            height={100}
            className=""
          />
        </h1>
      </section>
      <Title>About Manutti</Title>
      <TextMotion
        className="w-full py-10 px-2 md:px-20 text-md md:text-xl"
        paragraph="  For almost two decades, Manutti has focussed on the design and creation of luxury outdoor furniture as distinctive as our customers. All of our iconic tables, chairs, footrests, loungers and sofas incorporate the colors of the natural world and entice people to gather with their friends and families in luxury at any time of the day."
      />
      <Products cards={manutti} title="Manutti Collections" />
    </div>
  );
}
