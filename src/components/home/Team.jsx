"use client";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";
import { IoLogoYoutube } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitterSquare } from "react-icons/fa";
import Link from "next/link";

const Team = () => {
  const [team, setTeam] = useState([
    {
      img: "/assets/profile-1.jpg",
      name: "Jhon Doe",
      subtile: "Marketer",
    },
    {
      img: "/assets/profile-2.jpg",
      name: "Jhonathon Doe",
      subtile: "Business Man",
    },
    {
      img: "/assets/profile-3.jpg",
      name: "Jhon Doe",
      subtile: "Business Man",
    },
    {
      img: "/assets/profile-4.jpg",
      name: "Jhonathon Doe",
      subtile: "Business Man",
    },
  ]);
  return (
    <div className="pb-12">
      <div className="mb-6">
        <h1 className="text-xl md:text-2xl font-semibold text-center">
          Meet Our Team Of Experts
        </h1>
        <p className="text-sm text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {team.map((item, index) => (
          <Card
            key={index}
            className="hover:shadow-lg rounded-none border-0 group dark:bg-gray-900"
          >
            <CardBody className="p-0 relative">
              <Image
                className="w-full h-[250px] object-cover"
                src={item.img}
                width="500"
                height="500"
                alt={item.name}
              />
              <div className="absolute top-0 right-0 bg-white dark:bg-gray-900 w-[40px] h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center flex-col gap-3 justify-center text-white bg-opacity-25 dark:bg-opacity-50">
                <Link href="#">
                  <IoLogoYoutube className="h-4 w-4 text-red-500" />
                </Link>
                <Link href="#">
                  <FaFacebookSquare className="h-4 w-4 text-blue-600" />
                </Link>
                <Link href="#">
                  <RiInstagramFill className="h-4 w-4 text-red-400" />
                </Link>
                <Link href="#">
                  <FaTwitterSquare className="h-4 w-4 text-sky-400" />
                </Link>
              </div>
            </CardBody>
            <CardFooter className="">
              <div className="text-xs">
                <p className="text-sm font-medium text-start">{item.name}</p>
                <p className="text-xs text-start pt-1">{item.subtile}</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Team;
