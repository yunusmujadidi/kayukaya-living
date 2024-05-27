import React from "react";
import Title from "../title";
import Brands from "../brands";
import { ArrowUpRight } from "lucide-react";
import TextMotion from "@/components/ui/text-motion";

const page = () => {
  return (
    <div>
      <section
        className="w-full h-[40vh] flex items-center justify-center bg-cover bg-center bg-gray-800/70"
        style={{
          backgroundImage: `url(https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1585285634115-B6OEW1X268G7D221HK8V/Main+page+-+de+castelli_.jpg?format=1500w)`,
        }}
      >
        <h1 className="text-white text-4xl font-bold "></h1>
      </section>
      <div className="space-y-4 md:space-y-6"></div>
      <Brands />
      <TextMotion
        className="w-full py-10 px-2 md:px-20 text-xl"
        paragraph="Catering heavily to the outdoor space, we offer a vast selection of styles from our 8 different brands. Our pieces range from traditional to contemporary, with many materials to choose from."
      />
    </div>
  );
};

export default page;
