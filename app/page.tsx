"use client";
import Brands from "./brands";
import Products from "./products";
import About from "./about";
import Hero from "./Hero";
import Title from "./title";
import Contact from "./contact";
import Category from "./category";
import Sustainable from "./sustainable";
import CustomFurniture from "./CustomFurniture";
import Paralax from "./paralax";
import { useEffect } from "react";
import Lenis from "lenis";

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
      <About />
      <Title>Explore our Products</Title>
      <Products />
      <Brands />
      <Category />
      <CustomFurniture />
      <Sustainable />
      <Paralax />
      <Contact />
    </>
  );
};

export default Page;
