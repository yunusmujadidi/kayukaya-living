import React from "react";
import Image from "next/image";

const Visit = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-4 pt-8 sm:grid-cols-2 md:grid-cols-4">
          <Image
            alt="Office Image 1"
            className="aspect-[4/3] rounded-lg object-cover"
            height={400}
            src="https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1680184276836-AONLCEBDFOZLW7NK67SQ/0d94fb73-8507-453a-a695-63be63bddc0a.jpg"
            width={400}
          />
          <Image
            alt="Office Image 2"
            className="aspect-[4/3] rounded-lg object-cover"
            height={400}
            src="https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1680184274552-Q38XFWIQRNNE9OSOINKL/b00cd724-36ae-4dc1-87b1-b9736cb4895f.jpg"
            width={400}
          />
          <Image
            alt="Office Image 3"
            className="aspect-[4/3] rounded-lg object-cover"
            height={400}
            src="https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1680184275721-EVIEEE7EYCNJ3X624OL2/8e4f74f1-b400-40b8-a8dc-a897d821dc5c.jpg?format=300w"
            width={400}
          />
          <Image
            alt="Office Image 3"
            className="aspect-[4/3] rounded-lg object-cover"
            height={400}
            src="https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1680184393283-Q051XG0QBWU0QRQ6P9EG/ce4e35b9-c363-4407-8dc5-e887a7e7ffc5.jpg?format=300w"
            width={400}
          />
        </div>
      </div>
    </section>
  );
};

export default Visit;
