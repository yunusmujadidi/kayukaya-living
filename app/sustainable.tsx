import TextMotion from "@/components/ui/text-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Sustainable = () => {
  return (
    <section className=" w-full py-12 md:py-10 px-2 md:px-20 ">
      <div className=" gap-8 px-4 md:px-6">
        <div className="space-y-4 md:space-y-6">
          <div>
            <h2 className="text-2xl font-light tracking-tighter sm:text-3xl md:text-4xl">
              Sustainable
            </h2>
            <hr />
          </div>
          <TextMotion
            className="font-xl md:text-2xl font-sans font-light "
            paragraph=" For the contract market, KayuKaya operates in an environmentally and socially responsible manner for all our regional operation as well as partners facilities ,we take great care to ensure high standards are maintained from our partner factories and vendors. Our manufacturing facilities continuously reduce waste , recycled materials while minimizing our carbon foot print as we go along . "
          />
          <TextMotion
            className="font-xl md:text-2xl font-sans font-light "
            paragraph=" The majority of our wood feature FSC certified hardwoods and we are able to supply formaldahyde free substrates with water based options for any customer request for Greenmark certifications. Our aluminium, Steel and iron metal components can be recycled as well . For the powder coat paint overspray, it is also reclaimed for reuse .Same goes to our packaging with corrugated carton material which is recycled."
          />
          {/* <TextMotion
            className="relative shadow-sm text-lg  text-gray-700 tracking-tighter"
            paragraph="  Learn how KayuKaya is leading the way in environmentally responsible
            manufacturing. "
          />
          <Link
            className={cn("ml-5", buttonVariants({ variant: "default" }))}
            href="/about/sustainability"
          >
            Learn More
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default Sustainable;
