"use client";

import { useEffect, useState } from "react";
import Title from "@/app/title";
import Logo from "@/lib/logo";
import Image from "next/image";
import TextMotion from "@/components/ui/text-motion";
import CustomFurniture from "../CustomFurniture";

export default function Page({ params }: { params: any }) {
  return (
    <div>
      <section
        className="w-full h-[40vh] flex items-center justify-center bg-cover bg-center bg-gray-800/70"
        style={{
          backgroundImage: `url("https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1664118843605-JN5QN4UNQJ40HNU6Y3XE/games+room+.JPG")`,
        }}
      >
        <h1 className="text-white text-4xl font-bold ">Factory</h1>
      </section>
      <Title>Hotel Furniture Manufacturing Plant </Title>
      <TextMotion
        className="w-full py-10 px-2 md:px-20 text-xl"
        paragraph="Our partner facility here in Indonesia has a state of the art facility Being committed to the improvement of furniture craftsmanship technology and quality, we have a large-scale technical research and development team with more than 400 professionals to cater to your brief from veneer to a dedicated CNC area with 10 machines, special finishes and custom area"
      />
      <CustomFurniture bgColor="bg-white" textColor="text-black" />
    </div>
  );
}
