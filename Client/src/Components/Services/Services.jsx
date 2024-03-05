import React from "react";
import ServicesCard from "./ServicesCard";

function Services() {
  // Define props for ServicesCard
  const cardProps = {
    title: "Our services ",
    description:
      "Trio Business Cubers empowers entrepreneurs, coaches, and business owners to launch, manage, and grow their operations.",
    features: [
      {
        title: "Unique design",
        description:
          "I  design and develop services for customers of all sizes, specializing in creating stylish, modern websites.",
        icon: "fa-openid",
        link: "/abc",
      },
      {
        title: "Unique design",
        description:
          "I  design and develop services for customers of all sizes, specializing in creating stylish, modern websites.",
        icon: "fa-openid",
        link: "/abc",
      },
      {
        title: "Unique design",
        description:
          "I  design and develop services for customers of all sizes, specializing in creating stylish, modern websites.",
        icon: "fa-openid",
        link: "/abc",
      },
      {
        title: "Unique design",
        description:
          "I  design and develop services for customers of all sizes, specializing in creating stylish, modern websites.",
        icon: "fa-openid",
        link: "/abc",
      },
      {
        title: "Unique design",
        description:
          "I  design and develop services for customers of all sizes, specializing in creating stylish, modern websites.",
        icon: "fa-openid",
        link: "/abc",
      },
      {
        title: "Different Layout",
        description:
          "I  design and develop services for customers of all sizes, specializing in creating stylish, modern websites.",
        icon: "  fa-searchengin ",
        link: "/saabc",
      },
    ],
  };

  return (
    <>
      {/* Pass props to ServicesCard */}
      <ServicesCard {...cardProps} />
    </>
  );
}

export default Services;
