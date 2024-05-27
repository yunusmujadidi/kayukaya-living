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
          backgroundImage: `url("https://source.unsplash.com/random/?furniture?sig=3")`,
        }}
      >
        <h1 className="text-white text-4xl font-bold ">Factory</h1>
      </section>
      <Title>Factory</Title>
    </div>
  );
}
