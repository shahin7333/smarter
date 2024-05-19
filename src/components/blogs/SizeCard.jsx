import React from "react";

const SizeCard = () => {
  return (
    <div className="p-6 border w-full md:w-[500px] xl:w-[800px] flex flex-col gap-1 items-center dark:border-0 bg-secondary-50 dark:bg-opacity-40">
      <p className="text-[10px]">Advertisement</p>
      <p className="text-xs uppercase font-semibold">You can place ads</p>
      <p className="text-xs">750x100</p>
    </div>
  );
};

export default SizeCard;
