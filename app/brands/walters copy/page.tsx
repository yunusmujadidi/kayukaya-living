"use client";

import Title from "@/app/title";
import Image from "next/image";
import TextMotion from "@/components/ui/text-motion";
import Products from "@/app/products";
import manutti from "@/lib/manutti";
import TitleNL from "@/app/title-nolink";

export default function Page({ params }: { params: any }) {
  return (
    <div>
      <section
        className="w-full h-[40vh] flex items-center justify-center bg-cover bg-center bg-gray-800/70"
        style={{
          backgroundImage: `url(https://walterswicker.com/wp-content/uploads/2019/08/Ethimo-Phorma.jpg)`,
        }}
      >
        <h1 className="text-white text-4xl font-bold ">
          <Image
            src="https://walterswicker.com/wp-content/uploads/2022/06/Ethimo-Logo.png"
            alt={"logo"}
            width={200}
            height={100}
            className=""
          />
        </h1>
      </section>
      <TitleNL>About Ethimo</TitleNL>
      <TextMotion
        className="w-full py-10 px-2 md:px-20 text-xl"
        paragraph=" Pure and authentic values inspired by Mediterranean culture, by the timeless architecture, the environment, its enchanting fragrances and the everyday customs combined with the savoir faire of artisans with sophisticated tastes. A well-balanced mix of beauty, nature, culture and tradition."
      />
      <Products cards={manutti} title="Ethimo Collections" />
    </div>
  );
}
