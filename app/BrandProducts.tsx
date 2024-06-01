"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import categoryList from "@/lib/category-list";
import BrandProductsGrid from "@/components/brands/brand-products";

export default function BrandProduct() {
  return (
    <section className="w-full py-12 px-2 md:px-20 md:py-10 ">
      <div className="grid gap-8 px-4 md:px-6">
        <div className="space-y-4 md:space-y-6">
          <Link className="hover:underline" href="/brands/manutti/zendo-sense">
            <h2 className="text-2xl font-light tracking-tighter sm:text-3xl md:text-4xl">
              Product Collection
              <span>
                <ArrowUpRight className="inline mb-5 w-4 h-4 text-gray-500" />
              </span>
            </h2>
            <hr />
          </Link>
        </div>
        <BrandProductsGrid slice={4} />
      </div>
    </section>
  );
}
