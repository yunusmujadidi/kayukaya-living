import Link from "next/link";
import Image from "next/image";

export default function Brands() {
  return (
    <section className="w-full py-12 px-2 md:px-20 md:py-24 lg:py-32 -mt-10 bg-slate-100">
      <div className="grid gap-8 px-4 md:px-6">
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-md font-light tracking-tighter sm:text-3xl md:text-4xl">
            Explore Our Brands
          </h2>
          <hr />
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Discover a curated collection of stunning images that capture the
            essence of our world.
          </p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3 lg:gap-4">
          {Array.from({ length: 24 }, (_, i) => (
            <div key={i} className="relative group overflow-hidden rounded-lg">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </Link>
              <Image
                alt={`Image ${i + 1}`}
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:blur-sm"
                height={400}
                src={`https://source.unsplash.com/random/?furniture?sig=${
                  i + 1
                }`}
                style={{
                  aspectRatio: "400/400",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-white text-lg font-semibold">
                  Brand {i + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
