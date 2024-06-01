"use client";

import { useEffect, useState } from "react";
import Title from "@/app/title";
import Logo from "@/lib/logo";
import Image from "next/image";

export default function Page({ params }: { params: any }) {
  const { slug } = params;
  const [bgImage, setBgImage] = useState(
    "https://source.unsplash.com/random/?interior"
  );
  const [titleImage, setTitleImage] = useState("");

  useEffect(() => {
    const logo = Logo.find((logo) => logo.url === slug);
    if (logo) {
      setBgImage(logo.imgSrc);
      setTitleImage(logo.logoTitle);
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
        <div className="absolute inset-0 flex items-center justify-center ! bg-opacity-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="text-white text-lg font-semibold">
            <Image
              src="https://walterswicker.com/wp-content/uploads/2022/06/Manutti-Logo.png"
              alt={"logo"}
              width={200}
              height={100}
            />
          </span>
        </div>
      </section>
      <Title>{slug.toUpperCase()}</Title>
    </div>
  );
}
