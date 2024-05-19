"use client";
import { Avatar, Card, CardBody, CardFooter, Chip } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <Card
      className="w-full rounded-none hover:shadow-xl dark:bg-gray-900"
      isPressable
      onPress={() => console.log("item pressed")}
    >
      <CardBody className="overflow-visible p-0">
        <Image
          width="400"
          height="500"
          alt="dd"
          className="object-cover w-full h-[200px]"
          src={blog.img}
        />
      </CardBody>
      <CardFooter>
        <div className="flex flex-col gap-3">
          <Chip size="sm" color="secondary">
            {blog.type}
          </Chip>
          <p className="text-start font-medium text-sm md:text-base">
            {blog.title}
          </p>
          <div className="flex gap-3 items-center">
            <Avatar
              src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
              size="sm"
            />
            <p className="text-xs text-gray-600 dark:text-gray-400">
              <span>{blog.name}</span>
              <span className="ml-4">{blog.date}</span>
            </p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
