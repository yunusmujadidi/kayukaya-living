import Brands from "./brands";
import Products from "./products";
import About from "./about";
import Hero from "./Hero";
import Title from "./title";
import Contact from "./contact";
import Category from "./category";

import Sustainable from "./sustainable";
import CustomFurniture from "./CustomFurniture";
import Paralax from "./paralax";

const Page = () => {
  return (
    <>
      <Hero />
      <About />
      <Title>Explore our Products</Title>
      <Products />
      <Brands />
      <Category />
      <CustomFurniture />
      <Sustainable />
      <Paralax />
      <Contact />
    </>
  );
};

export default Page;
