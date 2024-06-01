import React from "react";

const Header = ({
  url = "https://source.unsplash.com/random/?interior",
  title,
}: {
  url?: string;
  title: string;
}) => {
  return (
    <section
      className="relative w-full h-[20vh] md:h-[35vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60 "></div>
      <h1 className="relative text-white text-xl tracking-widest md:text-4xl font-light">
        {title}
      </h1>
    </section>
  );
};

export default Header;
