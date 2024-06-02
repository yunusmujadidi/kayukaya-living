import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <div className="grid gap-6">
            <h1 className="text-3xl md:text-4xl font-light tracking-tight">
              KayuKaya Living
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              KayuKaya specializes in bespoke hospitality furniture solutions,
              catering to the commercial FF&E market with a focus on OEM or VE
              requirements for both exterior and interior applications. Our
              expertise lies in large-scale manufacturing with shorter lead
              times and on-budget delivery. We utilize premium materials to meet
              the evolving demands of the market, and our flexible approach
              allows us to work closely with clients&apos; concepts, designs,
              and briefs.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our impressive portfolio includes collaborations with high-end
              hotels, resorts, F&B establishments, public spaces, and
              condominiums worldwide, such as the Ritz Carlton in the Maldives,
              The Patina Maldives, The Royal Atlantis in Dubai, The Langham in
              Pasadena, Four Seasons in Bora Bora, Shangri La, HK and many
              others across the globe, including Singapore.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              In response to customer needs, we expanded our offerings in 2008
              to include professional shades, umbrellas, and selected furniture
              brands. As the Sole Authorized Agent for Glatz in Asia, we offer a
              range of products, including umbrellas from Glatz Swiss (High wind
              proof Umbrella) Jardinico Belgium (Resort type Umbrellas) , and
              Coro Italia. (outdoor yacht furniture )
            </p>
          </div>
          <div className="grid gap-6 items-center">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1585285634115-B6OEW1X268G7D221HK8V/Main+page+-+de+castelli_.jpg"
              alt="KayuKaya Living"
              width={800}
              height={600}
              className="rounded-lg object-cover w-full aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
