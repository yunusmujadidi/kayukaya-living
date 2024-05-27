import React, { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const TitleNL = ({
  children,
  href = "/",
}: {
  children: ReactNode;
  href?: string;
}) => {
  return (
    <section className="px-4 md:px-20 py-12 md:py-10">
      <div className="space-y-4 md:space-y-6 px-5 py-5"></div>
      <div className="hover:underline">
        <h2 className="text-2xl font-light tracking-tighter sm:text-3xl md:text-4xl">
          {children}
        </h2>
      </div>
      <hr />
    </section>
  );
};

export default TitleNL;
