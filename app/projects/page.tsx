import React from "react";
import Title from "../title";
import Products from "../products";
import cards from "@/lib/card";

const page = () => {
  return (
    <div>
      <Title>Our Projects</Title>
      <Products cards={cards} title="" />
    </div>
  );
};

export default page;
