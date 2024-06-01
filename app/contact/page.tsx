"use client";

import TextMotion from "@/components/ui/text-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";

function MyPage() {
  return (
    <div>
      <Header
        url="https://images.squarespace-cdn.com/content/v1/5dbfb66232cd095744bc5bdb/1677589336876-FR0WE6TTLGAA2N9HE25Q/2cdf9186-b074-470c-be41-b228f5294e8d.jpg?format=2500w"
        title="Contact Us"
      />

      <section className="w-full py-12 md:py-12 lg:py-12 bg-slate-59">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <p className="text-white">
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
              <Button
                className="w-full bg-white text-black hover:border hover:text-white"
                type="submit"
              >
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
