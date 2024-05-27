import TextMotion from "@/components/ui/text-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Custom = () => {
  return (
    <section className="w-full py-12 md:py-10 px-2 md:px-20 bg-slate-100 text-black">
      <div className=" grid gap-8 px-4 md:px-6">
        <div className="space-y-4 md:space-y-6">
          <Link className="hover:underline" href="/about">
            <h2 className="text-2xl font-light tracking-tighter sm:text-3xl md:text-4xl ">
              Custom Furniture, Unlimited Possibilities*
            </h2>
            <hr />
          </Link>

          <TextMotion
            className=""
            paragraph=" In response to customer needs, we expanded our offerings in 2008 to include professional shades, umbrellas, and selected furniture brands. As the Sole Authorized Agent for Glatz in Asia, we offer a range of products, including umbrellas from Glatz Swiss (High wind proof Umbrella)   Jardinico Belgium (Resort type Umbrellas) , and Coro Italia. (outdoor yacht furniture )"
          />
        </div>
      </div>
    </section>
  );
};

export default Custom;
