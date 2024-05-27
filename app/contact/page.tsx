"use client";

import TextMotion from "@/components/ui/text-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

function MyPage() {
  return (
    <div>
      <section
        className="w-full h-[40vh] flex items-center justify-center bg-cover bg-center bg-gray-800/70"
        style={{
          backgroundImage: `url(https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1573459330387-TZ3JXR3O7CSBHS42L2G6/ray3.jpeg?format=2500w)`,
        }}
      >
        <h1 className="text-white text-4xl font-bold ">Contact Us</h1>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <p className="text-gray-500 dark:text-gray-400">
              Have a question or need help? Fill out the form and we&apos;ll get
              back to you as soon as possible.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-xl">
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="Enter your email address"
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  className="min-h-[150px]"
                  id="message"
                  placeholder="Write your message here..."
                />
              </div>
              <Button className="w-full" variant={"ghost"} type="submit">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MyPage;
