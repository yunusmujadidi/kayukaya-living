"use client";
import Brands from "./brands";
import Products from "./products";
import About from "./about";
import Hero from "./Hero";

import Contact from "./contact";
import Category from "./category";
import Sustainable from "./sustainable";
import CustomFurniture from "./CustomFurniture";
import Paralax from "./paralax";
import { useEffect } from "react";
import Lenis from "lenis";
import Featured from "./featured";
import SunLoungers from "./sunloungers";
import Visit from "./Visit";
import Lodging from "./lodging";
import Custom from "./custom";
import cards from "@/lib/card";
import manutti from "@/lib/manutti";

const Page = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <Hero />
      <Featured />
      <About />
      <Sustainable />
      <Custom />
      <Products slice={8} cards={manutti} title="Featured Collections" />
      <Brands />
      <Category />
      <SunLoungers />
      <CustomFurniture />
      <Lodging />
      <Paralax />
      <Contact />
    </>
  );
};

export default Page;
