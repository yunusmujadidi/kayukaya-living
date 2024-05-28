"use client";

import Umbrella from "@/lib/umbrella";
import CustomFurniture from "../CustomFurniture";
import Featured from "../featured";
import Products from "../products";
import SunLoungers from "../sunloungers";
import Title from "../title";
import Header from "@/components/ui/header";

function MyPage() {
  return (
    <div>
      <Header
        title="Interiors and Mill Works"
        url="https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1579583477916-947SK1VTPGW6F7VEWUFA/flexform+skyline.jpg?format=2500w"
      />

      <Featured title="Hotel Beach Resort" />
      <SunLoungers />
      <CustomFurniture bgColor="bg-white" textColor="text-black" />
    </div>
  );
}

export default MyPage;
