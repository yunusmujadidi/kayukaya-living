import React from "react";
import Visit from "../Visit";
import Contact from "../contact";
import Header from "@/components/ui/header";

const page = () => {
  return (
    <div>
      <Header
        url="https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1664118489257-RRLA9G9ANF004387M4IN/IMG_8917.jpeg"
        title="Office"
      />

      <Visit />
      <Contact />
    </div>
  );
};

export default page;
