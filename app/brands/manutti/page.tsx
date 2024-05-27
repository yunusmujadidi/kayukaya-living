"use client";

import { useEffect, useState } from "react";
import Title from "@/app/title";
import Logo from "@/lib/logo";
import Image from "next/image";

export default function Page({ params }: { params: any }) {
  return (
    <div>
      <section
        className="w-full h-[40vh] flex items-center justify-center bg-cover bg-center bg-gray-800/70"
        style={{
          backgroundImage: `url(https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1573459330387-TZ3JXR3O7CSBHS42L2G6/ray3.jpeg?format=2500w)`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center !bg-white bg-opacity-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="text-black text-lg font-semibold">
            <Image
              src="https://walterswicker.com/wp-content/uploads/2022/06/Manutti-Logo.png"
              alt={"logo"}
              width={200}
              height={100}
            />
          </span>
        </div>
      </section>
      <Title>asd</Title>
    </div>
  );
}
