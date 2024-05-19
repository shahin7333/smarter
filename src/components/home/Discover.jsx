import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const Discover = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 xl:gap-20 items-center bg-white dark:bg-gray-900 p-4 md:p-8">
      <div className="order-1 md:order-2">
        <Image
          width="400"
          height="500"
          alt="dd"
          className="object-cover w-full h-auto"
          src="/assets/discover.jpg"
        />
      </div>
      <div className="order-2 md:order-1">
        <h2 className="text-xl md:text-2xl font-semibold mb-2">
          Discover Our Finest <br />
          Selection
        </h2>
        <p className="text-sm mb-4 xl:hidden">
          Pellentesque egestas elementum egestas faucibus sem. Velit nunc
          egestas ut morbi. Leo diam diam.
        </p>
        <p className="text-sm mb-4 hidden xl:flex">
          Pellentesque egestas elementum egestas faucibus sem. <br /> Velit nunc
          egestas ut morbi. Leo diam diam.
        </p>
        <Button size="sm" color="secondary" radius="none">
          Discover
        </Button>
      </div>
    </div>
  );
};

export default Discover;
