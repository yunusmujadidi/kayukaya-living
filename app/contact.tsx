"use client";

import dynamic from "next/dynamic";
import { CarouselContact } from "./contactcarousel";

const LazyMap = dynamic(() => import("@/components/map"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Contact() {
  return (
    <section className="justify-center flex flex-row items-center w-full py-12 md:py-24 lg:py-32 px-2 md:px-20 bg-[#2D2D2D] text-white">
      <div className="mb-8">
        <LazyMap />
      </div>
      <div>
        <h1 className="mt-4 text-2xl text-white text-center space-x-10">
          61 Ubi Ave 1, #06-10, UB Point, Singapore 408941{" "}
        </h1>
      </div>
    </section>
  );
}
