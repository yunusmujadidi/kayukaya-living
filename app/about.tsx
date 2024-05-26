import TextMotion from "@/components/ui/text-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const about = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 px-2 md:px-20 -mt-10 bg-[#2D2D2D]">
      <div className="container grid gap-8 px-4 md:px-6">
        <div className="space-y-4 md:space-y-6">
          <Link href="/about">
            <h2 className="text-2xl font-light tracking-tighter sm:text-3xl md:text-4xl text-slate-100">
              About KayuKaya Living
              <span>
                <ArrowUpRight className="inline mb-5 w-6 h-6 text-gray-500" />
              </span>
            </h2>
          </Link>
          <hr />
          <TextMotion
            className="relative shadow-sm text-xl lg:text-2xl text-slate-100 tracking-tighter"
            paragraph=" KayuKaya specializes in bespoke hospitality furniture solutions, catering to the commercial FF&E market with a focus on OEM or VE requirements for both exterior and interior applications.     Our expertise lies in large-scale manufacturing with shorter lead times and on-budget delivery. We utilize premium materials to meet the evolving demands of the market, and our flexible approach allows us to work closely with clients' concepts, designs, and briefs."
          />
        </div>
        <TextMotion
          className="relative shadow-sm text-xl lg:text-2xl text-slate-100 tracking-tighter"
          paragraph="Our impressive portfolio includes collaborations with high-end hotels, resorts, F&B establishments, public spaces, and condominiums worldwide, such as the Ritz Carlton in the Maldives, The Patina Maldives, The Royal Atlantis in Dubai, The Langham in Pasadena, Four Seasons in Bora Bora, Shangri La, HK  and many others across the globe, including Singapore.   "
        />
      </div>
    </section>
  );
};

export default about;
