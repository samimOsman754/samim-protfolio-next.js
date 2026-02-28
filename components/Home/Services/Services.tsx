import ServicesCard from "./ServicesCard";

const servicesData = [
  {
    id: 1,
    icon: "/images/s1.png",
    name: "UI and UX Design",
    description:
      "Designing intuitive and engaging user interfaces and experiences.",
  },
  {
    id: 2,
    icon: "/images/s2.png",
    name: "Web Development",
    description: "Building responsive and scalable web applications.",
  },
  {
    id: 3,
    icon: "/images/s3.png",
    name: "Design & Creative",
    description: "Creating visually appealing and innovative designs.",
  },
  {
    id: 4,
    icon: "/images/s4.png",
    name: "Development",
    description:
      "Providing high-quality development services for various platforms.",
  },
];

const Services = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        Collaborate with brands <br />
        and agencies to create <br />
        impactful results.
      </h1>
      <div
        data-aos="fade-right"
        data-aos-anchor-placement="top-center"
        className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-8 mt-20 items-center"
      >
        {servicesData.map((item) => (
          <div key={item.id}>
            <ServicesCard
              icon={item.icon}
              name={item.name}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
