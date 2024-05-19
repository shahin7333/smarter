"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
} from "@nextui-org/react";
import { GoCommentDiscussion } from "react-icons/go";

const Comment = () => {
  return (
    <div className="pb-12">
      <div className="pb-6 flex justify-between items-center">
        <h2 className="text-base md:text-xl lg:text-2xl font-semibold">
          What our customers <br /> are saying us?
        </h2>
        <div className="flex gap-4 justify-end">
          <div>
            <p className="text-sm font-medium">10m+</p>
            <p className="text-[10px] md:text-xs">Happy People</p>
          </div>
          <div>
            <p className="text-sm font-medium">4.88</p>
            <p className="text-[10px] md:text-xs">Overall Rating</p>
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1220: {
            slidesPerView: 3.5,
            spaceBetween: 30,
          },
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {[0, 1, 2, 3, 4, 5, 6].map((item, index) => (
          <SwiperSlide key={index}>
            <div className="p-4 lg:p-8 bg-white dark:bg-gray-900">
              <div className="flex items-center justify-between">
                <div className="flex gap-3 items-center">
                  <Avatar
                    src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                    size="sm"
                  />
                  <p className="text-xs">
                    <span className="font-medium">Jason Francisco</span>
                    <span className="ml-4">August 20, 2022</span>
                  </p>
                </div>
                <GoCommentDiscussion />
              </div>
              <p className="text-sm pt-4">
                Searches for multiplexes, property comparisons, and the loan
                estimator. Works great. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dores.
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Comment;
