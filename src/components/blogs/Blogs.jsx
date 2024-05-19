"use client";
import BlogCard from "@/components/blogs/BlogCard";
import Banner from "@/components/blogs/Banner";
import SizeCard from "@/components/blogs/SizeCard";
import { Pagination } from "@nextui-org/react";
import { useMemo, useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      type: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      name: "Jason Francisco",
      date: "August 20, 2022",
      img: "/assets/blog-1.jpg",
    },
    {
      id: 2,
      type: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      name: "Jason Francisco",
      date: "August 20, 2022",
      img: "/assets/blog-2.jpg",
    },
    {
      id: 3,
      type: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      name: "Jason Francisco",
      date: "August 20, 2022",
      img: "/assets/blog-3.jpg",
    },
    {
      id: 4,
      type: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      name: "Jason Francisco",
      date: "August 20, 2022",
      img: "/assets/blog-4.jpg",
    },
    {
      id: 5,
      type: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      name: "Jason Francisco",
      date: "August 20, 2022",
      img: "/assets/blog-5.jpg",
    },
    {
      id: 6,
      type: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      name: "Jason Francisco",
      date: "August 20, 2022",
      img: "/assets/blog-6.jpg",
    },
    {
      id: 7,
      type: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      name: "Jason Francisco",
      date: "August 20, 2022",
      img: "/assets/blog-7.jpg",
    },
    {
      id: 8,
      type: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      name: "Jason Francisco",
      date: "August 20, 2022",
      img: "/assets/blog-8.jpg",
    },
    {
      id: 9,
      type: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      name: "Jason Francisco",
      date: "August 20, 2022",
      img: "/assets/blog-8.jpg",
    },
    {
      id: 10,
      type: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      name: "Jason Francisco",
      date: "August 20, 2022",
      img: "/assets/blog-7.jpg",
    },
    {
      id: 11,
      type: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      name: "Jason Francisco",
      date: "August 20, 2022",
      img: "/assets/blog-6.jpg",
    },
    {
      id: 12,
      type: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      name: "Jason Francisco",
      date: "August 20, 2022",
      img: "/assets/blog-5.jpg",
    },
    {
      id: 13,
      type: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      name: "Jason Francisco",
      date: "August 20, 2022",
      img: "/assets/blog-5.jpg",
    },
    {
      id: 14,
      type: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      name: "Jason Francisco",
      date: "August 20, 2022",
      img: "/assets/blog-6.jpg",
    },
    {
      id: 15,
      type: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      name: "Jason Francisco",
      date: "August 20, 2022",
      img: "/assets/blog-7.jpg",
    },
    {
      id: 16,
      type: "Technology",
      title:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      name: "Jason Francisco",
      date: "August 20, 2022",
      img: "/assets/blog-8.jpg",
    },
  ]);
  const [page, setPage] = useState(1);
  const rowsPerPage = 8;

  const pages = Math.ceil(blogs.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return blogs.slice(start, end);
  }, [page, blogs]);
  return (
    <div className="px-4 md:px-8 xl:px-0 max-w-[1216px] mx-auto">
      <Banner />
      <div className="py-10 flex justify-center">
        <SizeCard />
      </div>
      <div>
        <h1 className="text-lg font-semibold mb-4">Latest Post</h1>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
        <div className="flex w-full justify-center pt-6">
          <Pagination
            showControls
            radius="none"
            // showShadow
            color="secondary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      </div>
      <div className="py-10 flex justify-center">
        <SizeCard />
      </div>
    </div>
  );
};

export default Blogs;
