"use client";

import TextMotion from "@/components/ui/text-motion";
import CustomFurniture from "../CustomFurniture";
import Featured from "../featured";
import Products from "../products";
import SunLoungers from "../sunloungers";
import Title from "../title";

function MyPage() {
  return (
    <div>
      <section
        className="w-full h-[40vh] flex items-center justify-center bg-cover bg-center bg-gray-800/70"
        style={{
          backgroundImage: `url(https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1664451095051-XEIW4ST1Y4F8IYRVB6R9/IMG_3096.jpeg)`,
        }}
      >
        <h1 className="text-white text-4xl font-bold ">Umbrella</h1>
      </section>
      <TextMotion
        className="w-full py-10 px-2 md:px-20 text-xl"
        paragraph="We carry a wide range of professional umbrellas, each series is wind tunnel tested according to usage. The maximum wind speed is about 110km/h with the largest size being 800cm or 800x600cm across All fabrics are highly UV and water resistance with 99% cut. "
      />
      <Featured />
      <Products />
      <SunLoungers />
      <CustomFurniture bgColor="bg-white" textColor="text-black" />
    </div>
  );
}

export default MyPage;
