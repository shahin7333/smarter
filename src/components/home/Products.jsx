"use client";
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  Chip,
  Pagination,
} from "@nextui-org/react";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { LuBed } from "react-icons/lu";
import { MdOutlineBathroom } from "react-icons/md";
import { TiChartAreaOutline } from "react-icons/ti";

const Products = () => {
  const [data, setData] = useState([
    {
      title: "Skyper Pool Apartment",
      price: "$7,800.00",
      img: "/assets/house-1.jpg",
      chips: [
        {
          chip: "For Sale",
        },
        {
          chip: "Featured",
        },
      ],
      location: "1020 Bloomingdale Ave",
      bed: "3",
      bath: "2",
      area: "56",
    },
    {
      title: "North Dillard Street",
      price: "$1200.00",
      img: "/assets/house-2.jpg",
      chips: [
        {
          chip: "For Sale",
        },
        {
          chip: "Featured",
        },
      ],
      location: "1020 Bloomingdale Ave",
      bed: "3",
      bath: "2",
      area: "56",
    },
    {
      title: "Eaton Garth Penthouse",
      price: "$800.00",
      img: "/assets/house-3.jpg",
      chips: [
        {
          chip: "For Sale",
        },
      ],
      location: "1020 Bloomingdale Ave",
      bed: "3",
      bath: "2",
      area: "56",
    },
    {
      title: "Skyper Pool Apartment",
      price: "$7,800.00",
      img: "/assets/house-4.jpg",
      chips: [
        {
          chip: "For Sale",
        },
        {
          chip: "Featured",
        },
      ],
      location: "1020 Bloomingdale Ave",
      bed: "3",
      bath: "2",
      area: "56",
    },
    {
      title: "Skyper Pool Apartment",
      price: "$7,800.00",
      img: "/assets/house-5.jpg",
      chips: [
        {
          chip: "For Sale",
        },
        {
          chip: "Featured",
        },
      ],
      location: "1020 Bloomingdale Ave",
      bed: "3",
      bath: "2",
      area: "56",
    },
    {
      title: "Skyper Pool Apartment",
      price: "$7,800.00",
      img: "/assets/house-6.jpg",
      chips: [
        {
          chip: "For Sale",
        },
        {
          chip: "Featured",
        },
      ],
      location: "1020 Bloomingdale Ave",
      bed: "3",
      bath: "2",
      area: "56",
    },
    {
      title: "Skyper Pool Apartment",
      price: "$7,800.00",
      img: "/assets/house-7.jpg",
      chips: [
        {
          chip: "For Sale",
        },
        {
          chip: "Featured",
        },
      ],
      location: "1020 Bloomingdale Ave",
      bed: "3",
      bath: "2",
      area: "56",
    },
    {
      title: "Skyper Pool Apartment",
      price: "$7,800.00",
      img: "/assets/house-8.jpg",
      chips: [
        {
          chip: "For Sale",
        },
        {
          chip: "Featured",
        },
      ],
      location: "1020 Bloomingdale Ave",
      bed: "3",
      bath: "2",
      area: "56",
    },
    {
      title: "Skyper Pool Apartment",
      price: "$7,800.00",
      img: "/assets/cat-1.jpg",
      chips: [
        {
          chip: "For Sale",
        },
        {
          chip: "Featured",
        },
      ],
      location: "1020 Bloomingdale Ave",
      bed: "3",
      bath: "2",
      area: "56",
    },
    {
      title: "Skyper Pool Apartment",
      price: "$7,800.00",
      img: "/assets/blog-5.jpg",
      chips: [
        {
          chip: "For Sale",
        },
        {
          chip: "Featured",
        },
      ],
      location: "1020 Bloomingdale Ave",
      bed: "3",
      bath: "2",
      area: "56",
    },
    {
      title: "Skyper Pool Apartment",
      price: "$7,800.00",
      img: "/assets/blog-2.jpg",
      chips: [
        {
          chip: "For Sale",
        },
        {
          chip: "Featured",
        },
      ],
      location: "1020 Bloomingdale Ave",
      bed: "3",
      bath: "2",
      area: "56",
    },
    {
      title: "Skyper Pool Apartment",
      price: "$7,800.00",
      img: "/assets/blog-3.jpg",
      chips: [
        {
          chip: "For Sale",
        },
        {
          chip: "Featured",
        },
      ],
      location: "1020 Bloomingdale Ave",
      bed: "3",
      bath: "2",
      area: "56",
    },
  ]);
  const [page, setPage] = useState(1);
  const rowsPerPage = 4;

  const pages = Math.ceil(data.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return data.slice(start, end);
  }, [page, data]);
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-lg md:text-2xl text-center font-semibold">
          Homes For You
        </h1>
        <p className="text-sm text-center">Based on your view history</p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <Card
            key={index}
            className="w-full rounded-none hover:shadow-xl border-0 dark:bg-gray-900"
            isPressable
            onPress={() => console.log("item pressed")}
          >
            <CardBody className="p-0 relative">
              <Image
                width="400"
                height="500"
                alt="dd"
                className="object-cover w-full h-[200px]"
                src={item.img}
              />
              <div className="absolute top-4 left-4 flex gap-2 items-center">
                {item.chips.map((chip, i) => (
                  <Chip
                    key={i}
                    size="sm"
                    className={`text-white ${
                      i === 1 ? "bg-success-500" : "bg-secondary-500"
                    }`}
                  >
                    {chip.chip}
                  </Chip>
                ))}
              </div>
            </CardBody>
            <CardFooter className="flex flex-col">
              <div className="w-full flex">
                <p className="font-medium text-start text-sm md:text-base">
                  {item.title}
                </p>
              </div>

              <div className="flex gap-1 items-center pt-1 justify-between w-full">
                <p className="text-xs font-semibold text-red-400 pt-1">
                  {item.price}/Month
                </p>
                <div className="flex gap-1 items-center">
                  <CiLocationOn />
                  <p className="text-xs">{item.location}</p>
                </div>
              </div>
              <div className="mt-3 font-medium flex w-full gap-2 items-center">
                <p className="text-xs pr-3 border-r items-center flex gap-1">
                  <LuBed /> {item.bed} Beds
                </p>
                <p className="text-xs pr-3 border-r items-center flex gap-1">
                  <MdOutlineBathroom /> {item.bath} Bath
                </p>
                <p className="text-xs flex items-center gap-1">
                  <TiChartAreaOutline />
                  {item.area} sqft
                </p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="flex w-full justify-center pt-6">
        <Pagination
          radius="none"
          showControls
          // showShadow
          color="secondary"
          page={page}
          total={pages}
          onChange={(page) => setPage(page)}
        />
      </div>
    </div>
  );
};

export default Products;
