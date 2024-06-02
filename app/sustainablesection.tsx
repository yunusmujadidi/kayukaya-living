import {
  Leaf,
  LeafIcon,
  LeafyGreenIcon,
  RecycleIcon,
  TreesIcon,
} from "lucide-react";
import React from "react";

const SustainableSection = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-light tracking-tight text-white md:text-4xl">
            Sustainable Practices
          </h2>
          <p className="mt-4 text-gray-300 md:text-xl lg:text-base xl:text-xl">
            At KayuKaya, we&apos;re committed to minimizing our environmental
            impact through sustainable manufacturing.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">
              Environmentally Responsible
            </h3>
            <p className="text-gray-300">
              We use only FSC certified hardwoods and formaldehyde-free
              substrates in our furniture production, ensuring the materials we
              source are responsibly harvested and processed. Additionally, our
              metal components are fully recyclable, and we recycle our powder
              coat paint overspray and corrugated packaging materials to reduce
              waste.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">
              Socially Responsible
            </h3>
            <p className="text-gray-300">
              We support local communities by providing fair wages to our
              workers. Our manufacturing facilities are located in regions with
              strong labor laws and worker protections, and we regularly audit
              our supply chain to ensure ethical practices are upheld.
            </p>
          </div>

          <div className="space-y-4 md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-semibold text-white">
              Minimizing Carbon Footprint
            </h3>
            <p className="text-gray-300">
              Our sustainable practices significantly reduce our carbon
              footprint and waste throughout the manufacturing process. We are
              continually exploring new ways to innovate and improve our
              environmental impact because we believe responsible business
              practices are essential for a healthier planet.
            </p>
          </div>
        </div>

        <div className="grid gap-8 mt-12 md:grid-cols-3">
          <div className="flex items-start gap-4">
            <LeafIcon className="h-6 w-6 flex-shrink-0 text-green-500" />
            <div>
              <h3 className="text-lg font-semibold text-white">
                Responsible Partner Factories
              </h3>
              <p className="text-gray-300">
                We uphold high standards at our partner factories and vendors to
                ensure ethical and environmentally responsible practices.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <TreesIcon className="h-6 w-6 flex-shrink-0 text-green-500" />
            <div>
              <h3 className="text-lg font-semibold text-white">
                Sustainable Materials and Certifications
              </h3>
              <p className="text-gray-300">
                Our use of FSC certified hardwoods and formaldehyde-free,
                water-based substrates helps us achieve Greenmark
                certifications.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <RecycleIcon className="h-6 w-6 flex-shrink-0 text-green-500" />
            <div>
              <h3 className="text-lg font-semibold text-white">
                Recycling and Reusing Materials
              </h3>
              <p className="text-gray-300">
                We recycle aluminum, steel, and iron components and reclaim and
                reuse powder coat paint overspray. Our packaging uses recycled
                corrugated carton material.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainableSection;
