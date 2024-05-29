"use client";

import { useEffect, useState } from "react";
import Title from "@/app/title";
import Logo from "@/lib/logo";
import Image from "next/image";
import TextMotion from "@/components/ui/text-motion";
import CustomFurniture from "../CustomFurniture";
import FactoryCarousel from "../FactoryCarousel";
import Header from "@/components/ui/header";
import TitleNL from "../title-nolink";

export default function Page({ params }: { params: any }) {
  return (
    <div>
      <Header
        title="Factory"
        url="https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1664118843605-JN5QN4UNQJ40HNU6Y3XE/games+room+.JPG"
      />

      <TitleNL>Hotel Furniture Manufacturing Plant </TitleNL>

      <FactoryCarousel bgColor="bg-white" textColor="text-black" />
    </div>
  );
}
