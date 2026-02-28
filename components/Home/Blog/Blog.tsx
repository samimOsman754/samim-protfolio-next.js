import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        My latest <span className="text-cyan-200">Blog</span>
      </h1>
      <div
        className="w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-3 xl:gap-4 gap-10 items-center mt-16"
        data-aos="fade-right"
        data-aos-anchor-placement="top-center"
        data-aos-delay="200"
      >
        <BlogCard
          image="/images/b1.jpg"
          title="Learn how to build an amazing portfolio website using next js"
          date="5 July 2025"
        />
        <BlogCard
          image="/images/b2.jpg"
          title="Learn how to create an amazing Blog website using next js"
          date="10 September 2025"
        />
        <BlogCard
          image="/images/b3.jpg"
          title="Learn how to build an amazing Social Media website using next js"
          date="15 December 2025"
        />
      </div>
    </div>
  );
};

export default Blog;
