import Image from "next/image";
import Link from "next/link";

export default function Products() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 px-4 md:px-6 py-12 md:py-16">
      <div className="relative group overflow-hidden rounded-lg">
        <Image
          alt="Image 1"
          className="object-cover w-full aspect-[4/3] transition-transform duration-300 ease-in-out group-hover:scale-105"
          height="300"
          src="https://source.unsplash.com/random/?interior?sig=1"
          width="400"
        />
        <div className="bg-white p-3 dark:bg-gray-950">
          <h3 className="font-semibold text-base">Stylish Sunglasses</h3>
        </div>
      </div>
      <div className="relative group overflow-hidden rounded-lg">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View</span>
        </Link>
        <Image
          alt="Image 2"
          className="object-cover w-full aspect-[4/3] transition-transform duration-300 ease-in-out group-hover:scale-105"
          height="300"
          src="https://source.unsplash.com/random/?interior?sig=2"
          width="400"
        />
        <div className="bg-white p-3 dark:bg-gray-950">
          <h3 className="font-semibold text-base">Leather Crossbody Bag</h3>
        </div>
      </div>
      <div className="relative group overflow-hidden rounded-lg">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View</span>
        </Link>
        <Image
          alt="Image 3"
          className="object-cover w-full aspect-[4/3] transition-transform duration-300 ease-in-out group-hover:scale-105"
          height="300"
          src="https://source.unsplash.com/random/?interior?sig=3"
          width="400"
        />
        <div className="bg-white p-3 dark:bg-gray-950">
          <h3 className="font-semibold text-base">Wireless Headphones</h3>
        </div>
      </div>
      <div className="relative group overflow-hidden rounded-lg">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View</span>
        </Link>
        <Image
          alt="Image 4"
          className="object-cover w-full aspect-[4/3] transition-transform duration-300 ease-in-out group-hover:scale-105"
          height="300"
          src="https://source.unsplash.com/random/?interior?sig=4"
          width="400"
        />
        <div className="bg-white p-3 dark:bg-gray-950">
          <h3 className="font-semibold text-base">Classic Wristwatch</h3>
        </div>
      </div>
      <div className="relative group overflow-hidden rounded-lg">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View</span>
        </Link>
        <Image
          alt="Image 5"
          className="object-cover w-full aspect-[4/3] transition-transform duration-300 ease-in-out group-hover:scale-105"
          height="300"
          src="https://source.unsplash.com/random/?interior?sig=5"
          width="400"
        />
        <div className="bg-white p-3 dark:bg-gray-950">
          <h3 className="font-semibold text-base">Stylish Backpack</h3>
        </div>
      </div>
      <div className="relative group overflow-hidden rounded-lg">
        <Link className="absolute inset-0 z-10" href="#">
          <span className="sr-only">View</span>
        </Link>
        <Image
          alt="Image 6"
          className="object-cover w-full aspect-[4/3] transition-transform duration-300 ease-in-out group-hover:scale-105"
          height="300"
          src="https://source.unsplash.com/random/?interior?sig=6"
          width="400"
        />
        <div className="bg-white p-3 dark:bg-gray-950">
          <h3 className="font-semibold text-base">Retro Camera</h3>
        </div>
      </div>
    </section>
  );
}
