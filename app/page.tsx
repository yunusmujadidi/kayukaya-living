import React from "react";
import Hero from "./Hero";

const page = () => {
  return (
    <>
      <Hero />
      <section className="h-screen w-96 flex flex-col">
        <div className="w-96">
          {" "}
          <div className="w-96">
            {" "}
            <div className="w-96">
              {" "}
              <div className="w-96"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
