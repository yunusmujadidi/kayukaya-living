import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const title = () => {
  return (
    <section className="px-4 md:px-20 py-12 md:py-16">
      <div className="space-y-4 md:space-y-6 px-5 py-5">
        <Link href="/products">
          <h2 className="text-2xl font-light tracking-tighter sm:text-3xl md:text-4xl">
            Explore Our Products
            <span>
              <ArrowUpRight className="inline mb-5 w-6 h-6 text-gray-500" />
            </span>
          </h2>
        </Link>
        <hr />
      </div>
    </section>
  );
};

export default title;
