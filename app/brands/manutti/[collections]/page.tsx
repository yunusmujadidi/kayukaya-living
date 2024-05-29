"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import Logo from "@/lib/logo";
import zendoSense from "@/lib/zendoSense";
import TextMotion from "@/components/ui/text-motion";

export default function Page({ product }: { product: string }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.1, // Adjust the delay to control stagger timing
          duration: 0.5,
        },
      }));
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Adjust the delay to control stagger timing
        duration: 0.5,
      },
    }),
  };

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
      <section
        ref={ref}
        className="w-full py-12 px-2 md:px-20 md:py-10 bg-slate-100"
      >
        <div className="grid gap-8 px-4 md:px-6">
          <div className="space-y-4 md:space-y-6  ">
            <div className="flex flex-col md:flex-row">
              <h2 className="text-2xl font-light tracking-tighter sm:text-3xl md:text-3xl hover:underline py-5">
                Zendo Sense by Stephane De Winter
              </h2>
              <TextMotion
                className="mt-7"
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
            </div>

            <hr />
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 ">
            {zendoSense.map(({ imgSrc, title, src }, i) => (
              <Link key={i} href={src}>
                <motion.div
                  key={i}
                  className="relative group overflow-hidden rounded-lg"
                  custom={i}
                  initial="hidden"
                  animate={controls}
                  variants={cardVariants}
                >
                  <Image
                    alt={`Logo ${i + 1}`}
                    className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:blur-md"
                    height={400}
                    src={imgSrc}
                    style={{
                      aspectRatio: "400/400",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                  <div className="absolute inset-0 flex items-center justify-center !bg-white bg-opacity-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-black text-lg font-semibold">
                      <Image
                        src={imgSrc}
                        alt={`Logo ${i + 1}`}
                        width={200}
                        height={100}
                      />
                      <h1 className="text-center">{title}</h1>
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
