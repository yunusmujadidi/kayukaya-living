"use client";

import Umbrella from "@/lib/umbrella";
import CustomFurniture from "../CustomFurniture";
import Featured from "../featured";
import Products from "../products";
import SunLoungers from "../sunloungers";
import Title from "../title";
import Header from "@/components/ui/header";
import NextJsImage from "@/components/album-image";
import React from "react";
import PhotoAlbum from "react-photo-album";
import { CarouselWrapper } from "@/components/carousel-wrapper";
import {
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import TextMotion from "@/components/ui/text-motion";
import factoryitems from "@/lib/factoryitems";
import Image from "next/image";
import sunLoungers from "@/lib/sun-loungers";
import TitleNL from "../title-nolink";
import furnitureItems from "@/lib/furnitureItems";
import FurnitureCard from "./furniturecard";

function MyPage() {
  return (
    <div>
      <Header
        title="Interiors and Mill Works"
        url="https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1579583477916-947SK1VTPGW6F7VEWUFA/flexform+skyline.jpg?format=2500w"
      />

      <Featured title="Hotel Beach Resort" />
      <TitleNL>Sun Loungers</TitleNL>
      <section className="w-full py-10 px-2 md:px-20 text-white">
        <PhotoAlbum
          layout="rows"
          photos={sunLoungers}
          renderPhoto={NextJsImage}
          defaultContainerWidth={1200}
          sizes={{ size: "calc(100vw - 240px)" }}
        />
      </section>
      <FurnitureCard title="Interior Custom Furniture" />
    </div>
  );
}

export default MyPage;
