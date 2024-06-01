import React, { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const Title = ({
  children,
  href = "/",
}: {
  children: ReactNode;
  href?: string;
}) => {
  return (
    <section className="px-4 md:px-20 py-12 md:py-10">
      <div className="space-y-4 md:space-y-6 px-5 py-5"></div>
      <Link href={href} className="hover:underline">
        <h2 className="text-2xl font-light tracking-tighter sm:text-3xl md:text-4xl">
          {children}
          <span>
            <ArrowUpRight className="inline mb-5 w-4 h-4 text-white" />
          </span>
        </h2>
      </Link>
      <hr />
    </section>
  );
};

export default Title;
