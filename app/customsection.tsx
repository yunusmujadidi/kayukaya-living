import React from "react";
import Link from "next/link";
import Image from "next/image";

const CustomSection = () => {
  return (
    <section className="w-full py-12 md:py-24 ">
      <div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <h2 className="vlock lg:hidden text-3xl md:text-4xl font-bold tracking-tight">
          Custom Furniture, Unlimited Possibilities*
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1697093306835-8PX9136HCROR2H9HBOSH/315334244_10160146470829920_4950937578501156693_n.jpg?format=1000w"
            alt="Furniture Design"
            width={400}
            height={400}
            className="aspect-square overflow-hidden rounded-lg object-cover opacity-60"
          />
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1716172639202-OPBE1L8RR4QD4XUVXIK7/IMG_3900.jpg?format=1000w"
            alt="Furniture Manufacturing"
            width={400}
            height={400}
            className="aspect-square overflow-hidden rounded-lg object-cover opacity-60"
          />
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1617847679395-SHF29I9LWUF0MJA2UYO6/WhatsApp+Image+2021-04-08+at+9.52.47+AM.jpeg?format=1000w"
            alt="Intricate Details"
            width={400}
            height={400}
            className="aspect-square overflow-hidden rounded-lg object-cover opacity-40"
          />
          <Image
            src="https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1664011077258-14Z3OKKWHMI6HB0FZOE1/IMG_3901+copy.jpg?format=1000w"
            alt="Precision Craftsmanship"
            width={400}
            height={400}
            className="aspect-square overflow-hidden rounded-lg object-cover opacity-60"
          />
        </div>
        <div className="space-y-4">
          <h2 className="hidden lg:block text-3xl md:text-4xl font-bold tracking-tight">
            Custom Furniture, Unlimited Possibilities*
          </h2>
          <p className="max-w-[700px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-gray-400">
            Our team of skilled artisans and designers combine traditional
            craftsmanship with cutting-edge technology to produce intricate and
            complex furniture designs with unparalleled precision and accuracy.
            From concept to completion, we work closely with our clients to
            bring their vision to life, ensuring every piece is a unique and
            exceptional work of art.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomSection;
