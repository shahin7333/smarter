"use client";
import React, { useState } from "react";

const Count = () => {
  const [data, setData] = useState([
    {
      name: "Awward Winning",
      count: "600+",
    },
    {
      name: "Happy Customer",
      count: "8K+",
    },
    {
      name: "Property Ready",
      count: "500+",
    },
  ]);
  return (
    <div className="pt-12">
      <div className="p-4 md:p-6 border dark:border-0 bg-secondary-50 max-w-[800px] mx-auto grid grid-cols-3 gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className={`${index === 0 ? "" : "border-l border-secondary-400"}`}
          >
            <h1 className="text-3xl font-bold text-secondary text-center">
              {item.count}
            </h1>
            <p className="text-center text-[9px] md:text-xs font-medium text-gray-600 dark:text-gray-300">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Count;
