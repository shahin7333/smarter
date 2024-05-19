import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="relative mt-4">
      <Image
        className="w-full h-[50vh] md:h-[75vh] object-fill"
        src="/assets/banner.jpg"
        width="1400"
        height="600"
        alt="banner"
      />
      <div className="flex justify-center mx-4">
        <Card className="absolute bottom-0 md:max-w-[598px] rounded-none p-2 md:p-4 border-0 bg-opacity-40">
          <CardHeader className="flex md:gap-3">
            <Chip size="sm" color="secondary">
              Technology
            </Chip>
          </CardHeader>
          <CardBody>
            <p className="text-sm md:text-xl font-semibold">
              Protecting Our Oceans: Key Initiatives for Marine Conservation in
              2024
            </p>
          </CardBody>
          <CardFooter>
            <div className="flex gap-3 items-center">
              <Avatar
                src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                size="sm"
              />
              <p className="text-xs">
                <span>Jason Francisco</span>
                <span className="ml-4">August 20, 2022</span>
              </p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Banner;
