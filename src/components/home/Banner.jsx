"use client";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Select,
  SelectItem,
} from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";

const Banner = () => {
  const [animals, setAnimals] = useState([
    {
      label: "Real state",
      value: "Real state",
    },
    {
      label: "Business",
      value: "Business",
    },
    {
      label: "Traveling",
      value: "Traveling",
    },
  ]);
  return (
    <div>
      <div className="relative mt-4">
        <Image
          className="w-full h-[50vh] md:h-[75vh] object-cover"
          src="/assets/home-banner.jpg"
          width="1400"
          height="600"
          alt="banner"
        />
        <div className="flex justify-center mx-4">
          <Card className="absolute bottom-0 w-full md:max-w-[598px] rounded-none p-2 md:p-4 border-0 bg-opacity-40">
            <CardBody className="flex flex-col items-center ">
              <Chip size="sm" color="secondary">
                LET US GUIDE YOUR HOME
              </Chip>
              <p className="text-xl text-center md:text-2xl font-semibold mt-2">
                Enjoy The Finest Homes
              </p>
              <p className="text-xs md:text-sm text-center">
                From as low as $10 per day with limited time offer discounts
              </p>
            </CardBody>
          </Card>
          <div className="absolute top-0 md:top-48 w-full md:max-w-[598px] rounded-none p-4 border-0">
            <div className="grid grid-cols-3 gap-4">
              <Select
                size="sm"
                color="secondary"
                label="Type"
                className=""
                radius="none"
                classNames={{
                  base: "",
                  label: "text-[10.24px] font-bold uppercase z-0",
                  innerWrapper: "",
                  trigger: "",
                  value: "text-xs font-semibold",
                }}
              >
                {animals.map((animal) => (
                  <SelectItem key={animal.value} value={animal.value}>
                    {animal.label}
                  </SelectItem>
                ))}
              </Select>
              <Select
                size="sm"
                color="secondary"
                label="Area"
                className=""
                radius="none"
                classNames={{
                  base: "",
                  label: "text-[10.24px] font-bold uppercase z-0",
                  innerWrapper: "",
                  trigger: "",
                  value: "text-xs font-semibold",
                }}
              >
                {animals.map((animal) => (
                  <SelectItem key={animal.value} value={animal.value}>
                    {animal.label}
                  </SelectItem>
                ))}
              </Select>
              <Button className="bg-secondary" size="lg" radius="none">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
