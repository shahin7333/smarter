import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const Happy = () => {
  return (
    <div className="p-4 md:p-8 bg-white dark:bg-gray-900 my-12 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <Image
          width="400"
          height="500"
          alt="dd"
          className="object-cover w-full h-auto"
          src="/assets/happy.jpg"
        />
      </div>
      <div>
        <h2 className="text-xl md:text-2xl font-semibold mb-2">
          Local expertise for <br /> luxury homes
        </h2>
        <p className="text-sm mb-4">
          Pellentesque egestas elementum egestas faucibus sem. Velit nunc
          egestas ut morbi. Leo diam diam nibh eget fermentum massa pretium. Mi
          mauris nulla ac dictum ut mauris non.
        </p>
        <Button size="sm" color="secondary" radius="none">
          Learn More...
        </Button>
      </div>
    </div>
  );
};

export default Happy;
