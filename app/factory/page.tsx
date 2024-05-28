"use client";

import { useEffect, useState } from "react";
import Title from "@/app/title";
import Logo from "@/lib/logo";
import Image from "next/image";
import TextMotion from "@/components/ui/text-motion";
import CustomFurniture from "../CustomFurniture";
import FactoryCarousel from "../FactoryCarousel";

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

      <FactoryCarousel bgColor="bg-white" textColor="text-black" />
    </div>
  );
}
