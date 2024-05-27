"use client";

import TextMotion from "@/components/ui/text-motion";
import CustomFurniture from "../CustomFurniture";
import Featured from "../featured";
import Products from "../products";
import SunLoungers from "../sunloungers";
import Title from "../title";
import Umbrella from "@/lib/umbrella";
import Image from "next/image";
import TitleNL from "../title-nolink";

function MyPage() {
  return (
    <div>
      <section
        className="w-full h-[40vh] flex items-center justify-center bg-cover bg-center bg-gray-800/70"
        style={{
          backgroundImage: `url(https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1573459330387-TZ3JXR3O7CSBHS42L2G6/ray3.jpeg?format=2500w)`,
        }}
      >
        <h1 className="text-white text-4xl font-bold ">Umbrella</h1>
      </section>
      <TextMotion
        className="w-full py-10 px-2 md:px-20 text-xl"
        paragraph="We carry a wide range of professional umbrellas, each series is wind tunnel tested according to usage. The maximum wind speed is about 110km/h with the largest size being 800cm or 800x600cm across All fabrics are highly UV and water resistance with 99% cut. "
      />
      <Products title=" Umbrella Collection " cards={Umbrella} />
      <section className="py-10">
        <TitleNL>Official Partner</TitleNL>
        <div className="flex justify-center items-center">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/8eba3cc3-6690-493d-9a1c-396a9b2c3493/03_glatz_logo_pos_rgb_l.jpg"
            alt="Official Partner"
            width={500}
            height={500}
            className=""
          />
        </div>
      </section>
    </div>
  );
}

export default MyPage;
