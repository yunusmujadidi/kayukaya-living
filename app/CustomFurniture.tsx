import { buttonVariants } from "@/components/ui/button";
import TextMotion from "@/components/ui/text-motion";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const CustomFurniture = () => {
  return (
    <section className="w-full py-12 md:py-10  px-2 md:px-20 bg-slate-100">
      <div className=" grid gap-8 px-4 md:px-6">
        <div className="space-y-4 md:space-y-6">
          <Link className="hover:underline " href="/products/custom-furniture">
            <h2 className="text-2xl font-light tracking-tighter sm:text-3xl md:text-4xl text-gray-700">
              Custom Furniture
              <span>
                <ArrowUpRight className="inline mb-5 w-4 h-4 text-gray-500" />
              </span>
            </h2>
          </Link>
          <hr />
          <TextMotion
            className="relative shadow-sm text-lg  text-gray-700 tracking-tighter"
            paragraph=" From concept to completion, we guide you through every step of the design and manufacturing process. Our expertise in traditional craftsmanship, combined with cutting-edge technology, enables us to produce intricate and complex designs with precision and accuracy.

"
          />
          <Link
            className={cn(
              "ml-2 hover:underline text-black",
              buttonVariants({ variant: "ghost" })
            )}
            href="/about/sustainability"
          >
            Learn More{" "}
            <span>
              <ArrowUpRight className="inline mb-2 w-2 h-2 text-gray-500" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CustomFurniture;
