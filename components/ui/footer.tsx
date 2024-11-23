import React from "react";
import { Input } from "./input";
import { Button } from "./button";

function footer() {
  return (
    <div className="pt-16 pb-16 bg-black p-4 text-white">
      <div className="grid grid-cols-2 sm:grid-cols-3 sm:place-items-center gap-y-2">
        <div className="flex flex-col gap-y-1 sm:gap-y-2">
          <p className="font-bold text-lg">Contact Us</p>
          <p>About Us</p>
          <p>Support</p>
        </div>

        <div className="flex flex-col gap-y-1 sm:gap-y-2">
          <p className="font-bold text-lg">Resources</p>
          <p>Sitemap</p>
          <p>Privacy policy</p>
          <p>Terms of servies</p>
        </div>

        <div className="flex flex-col gap-y-1 sm:gap-y-2">
          <p className="font-bold text-lg">Sign up for news &amp; offers</p>
          <Input placeholder="Email"/>
          <Button>Subscribe</Button>
        </div>
      </div>
    </div>
  );
}

export default footer;
