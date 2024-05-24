import Link from "next/link";
import Image from "next/image";

export default function Brands() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-8 px-4 md:px-6">
        <div className="space-y-4 md:space-y-6">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
            Explore Our Gallery
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Discover a curated collection of stunning images that capture the
            essence of our world.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          <div className="relative group overflow-hidden rounded-lg">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View</span>
            </Link>
            <Image
              alt="Image 1"
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
              height={400}
              src="https://source.unsplash.com/random/?furniture?sig=1"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
              width={400}
            />
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View</span>
            </Link>
            <Image
              alt="Image 2"
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
              height={400}
              src="https://source.unsplash.com/random/?furniture?sig=2"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
              width={400}
            />
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View</span>
            </Link>
            <Image
              alt="Image 3"
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
              height={400}
              src="https://source.unsplash.com/random/?furniture?sig=3"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
              width={400}
            />
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View</span>
            </Link>
            <Image
              alt="Image 4"
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
              height={400}
              src="https://source.unsplash.com/random/?furniture?sig=4"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
              width={400}
            />
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View</span>
            </Link>
            <Image
              alt="Image 5"
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
              height={400}
              src="https://source.unsplash.com/random/?furniture?sig=5"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
              width={400}
            />
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View</span>
            </Link>
            <Image
              alt="Image 6"
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
              height={400}
              src="https://source.unsplash.com/random/?furniture?sig=6"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
              width={400}
            />
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View</span>
            </Link>
            <Image
              alt="Image 7"
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
              height={400}
              src="https://source.unsplash.com/random/?furniture?sig=7"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
              width={400}
            />
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View</span>
            </Link>
            <Image
              alt="Image 8"
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
              height={400}
              src="https://source.unsplash.com/random/?furniture?sig=8"
              style={{
                aspectRatio: "400/400",
                objectFit: "cover",
              }}
              width={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
