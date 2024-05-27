"use client";
import React, { useEffect } from "react";
import Contact from "./contact";
import Footer from "./footer";

const StickyFooter = () => {
  return (
    <div
      className="relative h-[900px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+900px)] -top-[100vh]">
        <div className="h-[900px] sticky top-[calc(100vh-900px)]">
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default StickyFooter;
