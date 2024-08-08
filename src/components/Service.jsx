import React, { useState } from "react";

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs.",
    fullDescription:
      "Creating visually appealing and user-friendly web designs that meet the needs of your business and users, including layout design, typography, and color schemes.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    fullDescription:
      "Building responsive and interactive user interfaces using the latest web technologies, ensuring a seamless user experience across all devices.",
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases.",
    fullDescription:
      "Developing robust server-side logic and databases that power your web applications, with a focus on performance, scalability, and security.",
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description: "Combining both frontend and backend development skills.",
    fullDescription:
      "Combining both frontend and backend development skills to create comprehensive web solutions that meet your business needs.",
  },
  {
    id: 5,
    title: "Content Writing",
    description: "Writing content for your business and companies.",
    fullDescription:
      "Writing compelling content for your business, including blog posts, articles, website copy, and social media content, tailored to your brand voice and audience.",
  },
  {
    id: 6,
    title: "Python Programming",
    description:
      "Enhancing your projects with advanced Python programming techniques and best practices.",
    fullDescription:
      "Enhancing your projects with advanced Python programming techniques and best practices, including automation, data analysis, and web development.",
  },
];

const Service = () => {
  const [expandedService, setExpandedService] = useState(null);

  const toggleExpand = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <div className="bg-black text-white py-20" id="services">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-600 to-blue-400"
              >
                {service.id}
              </div>
              <h3
                className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500"
              >
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">
                {expandedService === service.id
                  ? service.fullDescription
                  : service.description}
              </p>
              <button
                onClick={() => toggleExpand(service.id)}
                className="mt-4 inline-block text-green-400 hover:text-blue-500"
              >
                {expandedService === service.id ? "Show Less" : "Read More"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
