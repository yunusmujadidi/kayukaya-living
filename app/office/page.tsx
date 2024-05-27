import React from "react";
import Visit from "../Visit";
import Contact from "../contact";

const page = () => {
  return (
    <div>
      {" "}
      <section
        className="w-full h-[40vh] flex items-center justify-center bg-cover bg-center bg-gray-800/70"
        style={{
          backgroundImage: `url(https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1573459330387-TZ3JXR3O7CSBHS42L2G6/ray3.jpeg?format=2500w)`,
        }}
      >
        <h1 className="text-white text-4xl font-bold ">Office</h1>
      </section>
      <Visit />
      <Contact />
    </div>
  );
};

export default page;
