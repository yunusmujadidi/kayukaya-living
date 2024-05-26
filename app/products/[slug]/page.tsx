"use client";

import { useEffect, useState } from "react";
import cards from "@/lib/card";

export default function Page({ params }: { params: any }) {
  const { slug } = params;
  const [bgImage, setBgImage] = useState(
    "https://source.unsplash.com/random/?interior"
  );
  const [titleImage, setTitleImage] = useState("");

  useEffect(() => {
    const card = cards.find((card) => card.src === slug);
    if (card) {
      setBgImage(card.imgSrc);
      setTitleImage(card.title);
    }
  }, [slug]);

  return (
    <div>
      <section
        className="w-full h-[40vh] flex items-center justify-center bg-cover bg-center bg-gray-800/70"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white max-w-[800px] text-center">
          {titleImage}
        </h1>
      </section>
       <Title/>{slug}</Title>
    </div>
  );
}
