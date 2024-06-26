"use client";
import TextMotion from "@/components/ui/text-motion";
import BrandProductsGrid from "@/components/brands/brand-products";

export default function Page() {
  return (
    <>
      <section
        className="relative w-full h-[20vh] md:h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(https://walterswicker.com/wp-content/uploads/2023/05/zendo-sense-hero-image.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-10 border-b"></div>
        <h1 className="relative text-white text-xl tracking-widest md:text-4xl font-light">
          Zendo Sense Collection
        </h1>
      </section>
      <section className="w-full py-12 px-2 md:px-20 md:py-10 ">
        <div className="grid gap-8 px-4 md:px-6">
          <div className="space-y-4 md:space-y-6  ">
            <TextMotion
              className="mt-7 text-lg md:text-3xl tracking-tighter font-extralight "
              paragraph=" A sleek frame, sophisticated upholstery fabrics, exceptional
                  seating comfort and endless combination possibilities are only a
                  few features of Zendo Sense, a new take on a timeless Manutti
                  icon. Carefully selected materials are crafted into durable,
                  weatherproof pieces that emanate luxury and show no distinction
                  between interior and exterior design. Offering modular and
                  freestanding sofas, club sofas, daybeds and coffee tables, the
              versatility of Zendo Sense makes it the perfect fit for settings
              of all shapes and sizes : from intimate urban balconies to lavish
              terraces with infinite views."
            />
            <h2 className="text-md font-light tracking-tighter ">
              Zendo Sense by Stephane De Winter
            </h2>
            <hr />
          </div>
          <BrandProductsGrid />
        </div>
      </section>
    </>
  );
}
