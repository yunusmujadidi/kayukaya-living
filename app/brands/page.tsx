import React from "react";
import Title from "../title";
import Brands from "../brands";

const page = () => {
  return (
    <div>
      <section
        className="w-full h-[40vh] flex items-center justify-center bg-cover bg-center bg-gray-800/70"
        style={{
          backgroundImage: `url(https://source.unsplash.com/random/?hotel)`,
        }}
      >
        <h1 className="text-white text-4xl font-bold ">Brands</h1>
      </section>
      <Brands />
    </div>
  );
};

export default page;
