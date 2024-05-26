import TextMotion from "@/components/ui/text-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const CustomFurniture = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 px-2 md:px-20 bg-[#2D2D2D]">
      <div className="container grid gap-8 px-4 md:px-6">
        <div className="space-y-4 md:space-y-6">
          <Link href="/products/custom-furniture">
            <h2 className="text-2xl font-light tracking-tighter sm:text-3xl md:text-4xl text-slate-100">
              Custom Furniture, Unlimited Possibilities*
              <span>
                <ArrowUpRight className="inline mb-5 w-4 h-4 text-gray-500" />
              </span>
            </h2>
          </Link>
          <hr />
          <TextMotion
            className="relative shadow-sm text-lg  text-slate-100 tracking-tighter"
            paragraph=" From concept to completion, we guide you through every step of the design and manufacturing process. Our expertise in traditional craftsmanship, combined with cutting-edge technology, enables us to produce intricate and complex designs with precision and accuracy.

"
          />
        </div>
      </div>
    </section>
  );
};

export default CustomFurniture;
