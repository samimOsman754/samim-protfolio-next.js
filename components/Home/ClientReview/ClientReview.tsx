"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReviewCard from "./ClientReviewCard";

const ClientReviewData = [
  {
    id: 1,
    image: "/images/c1.png",
    name: "John Doe",
    role: "CEO, Landscape Co.",
    review: "I had an amazing experience with this landscaping company. They were professional, efficient, and delivered exceptional results. They transformed my outdoor space into a tranquil retreat. I am extremely satisfied with their work and would highly recommend them.",
  },
  {
    id: 2,
    image: "/images/c2.png",
    name: "Jane Smith",
    role: "Marketing Head, TechFlow",
    review: "The attention to detail and creative approach provided by the team was truly impressive. Our project was completed on time and exceeded all our expectations. A fantastic experience from start to finish! and I would highly recommend their services.",
  },
  {
    id: 3,
    image: "/images/c3.png",
    name: "Emily Johnson",
    role: "Owner, Bloom & Co.",
    review: " I am beyond impressed with the landscaping services provided by this company. They took my vision and turned it into a reality. The quality of their work and attention to detail is outstanding. I highly recommend them for any landscaping project!",
  },
  {
    id: 4,
    image: "/images/c4.png",
    name: "Michael Brown",
    role: "Director, Garden Solutions",
    review: " The team was professional, efficient, and delivered exceptional results. They transformed my outdoor space into a tranquil retreat. I am extremely satisfied with their work and would highly recommend them to anyone looking for top-notch landscaping services.",
  },
  {
    id: 5,
    image: "/images/c5.png",
    name: "Sarah Davis",
    role: "Manager, Outdoor Oasis",
    review: " I am beyond impressed with the landscaping services provided by this company. They took my vision and turned it into a reality. The quality of their work and attention to detail is outstanding. I highly recommend them for any landscaping project!",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ClientReview = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        Kind words from satisfied <br />{" "}
        <span className="text-cyan-200">clients</span>
      </h1>
      <div className="mt-16 w-[70%] mx-auto">
        <Carousel
          showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
        >
          {ClientReviewData.map((item) => (
            <ClientReviewCard
              key={item.id}
              name={item.name}
              role={item.role}
              image={item.image}
              review={item.review}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ClientReview;
