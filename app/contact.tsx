"use client";

import dynamic from "next/dynamic";
import { CarouselContact } from "./contactcarousel";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const LazyMap = dynamic(() => import("@/components/map"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Contact() {
  return (
    <section className="w-full py-12 md:py-10 px-2 md:px-20 bg-[#2d2d2d]">
      <div className="container grid gap-8 px-4 md:px-6">
        <div className="space-y-4 md:space-y-6">
          <Link className="hover:underline" href="/contact/headquarters">
            <h2 className="text-2xl font-light tracking-tighter sm:text-3xl md:text-4xl text-slate-100">
              Visit our showroom office
              <span>
                <ArrowUpRight className="inline mb-5 w-4 h-4 text-gray-500" />
              </span>
            </h2>
          </Link>
          <hr />
          <div className="flex flex-row ">
            <LazyMap />
            <h1 className="flex items-center justify-between mt-4 text-2xl text-white text-center ml-10">
              61 Ubi Ave 1, #06-10, UB Point, Singapore 408941{" "}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
