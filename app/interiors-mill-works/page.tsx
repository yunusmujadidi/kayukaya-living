"use client";

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
          backgroundImage: `url(https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1578576733880-5KGFWPIB1A2A6LUV2M3U/IMG_0080.jpeg?format=2500w)`,
        }}
      >
        <h1 className="text-white text-4xl font-bold ">
          Interiors and Mill Works
        </h1>
      </section>
      <Featured />
      <Products />
      <SunLoungers />
      <CustomFurniture bgColor="bg-white" textColor="text-black" />
    </div>
  );
}

export default MyPage;
