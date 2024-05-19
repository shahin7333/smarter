"use client";
import Image from "next/image";
import React, { useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([
    {
      img: "/assets/cat-1.jpg",
      type1: "Popular",
      type2: "4 Properties",
    },
    {
      img: "/assets/cat-2.jpg",
      type1: "Modern Villa",
      type2: "10 Properties",
    },
    {
      img: "/assets/cat-3.jpg",
      type1: "Single Family",
      type2: "2 Properties",
    },
    {
      img: "/assets/cat-4.jpg",
      type1: "Office",
      type2: "9 Properties",
    },
    {
      img: "/assets/cat-5.jpg",
      type1: "Town House",
      type2: "15 Properties",
    },
  ]);
  return (
    <div className="py-12">
      <h1 className="text-lg md:text-2xl text-center font-semibold">
        Featured Categories
      </h1>
      <p className="text-sm text-center">Based on your view history</p>
      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
        {categories.map((item, index) => (
          <div key={index} className="relative group">
            <Image
              className="w-full h-[280px] object-cover"
              src={item.img}
              width="1400"
              height="600"
              alt="banner"
            />
            <div className="absolute top-0 flex-col items-center p-4 bg-white w-full text-secondary hidden group-hover:flex topacity-0 group-hover:opacity-75 transition-opacity duration-400">
              <p className="text-md font-semibold">{item.type1}</p>
              <p className="text-xs text-gray-800">{item.type2}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
