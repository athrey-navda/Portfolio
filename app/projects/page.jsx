"use client";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    name: "Rapid Cloudify",
    href: "http://rapidcloudify.com",
    imageSrc: "/images/homepage/rapidcloudify.png",
    imageAlt: "Rapid Cloudify",
    stack: "React, Nextjs, Tailwind, JWT, OAuth, Python, Ansible, AWS",
    description:
      "Automated AWS deployment for ReactJS, Node.js, and Python apps, cutting manual effort by 70% and accelerating cycles by 50% for small-scale industries. Crafted a robust CI/CD pipeline utilizing GitHub Webhooks to automate code updates, ensuring an impressive uptime of 99.9% and seamless scalability in real-time. Implemented Ansible for IaC, reducing AWS setup times by 60% and operational costs by 40%, while enhancing client control through a user-friendly interface.",
  },
  {
    id: 2,
    name: "My Portfolio",
    href: "https://portfolio-rho-swart.vercel.app/",
    imageSrc: "/images/logo/athrey-high-resolution-logo-white.png",
    imageAlt: "Rapid Cloudify",
    stack: "React with Nextjs (App Router), Redux, Chart.js,  Tailwind CSS",
    description:
      "An introductory site to my profile. Unleashing my technical skills, UI representation and many moore",
  },
  {
    id: 7,
    name: "Customer ticket management",
    href: "github.com/athrey-navda/rayca-backend",
    imageSrc: "/images/homepage/customer_ticket.jpeg",
    imageAlt: "Customer ticket",
    stack: "Node.js, Express.js, GraphQL, JWT, Oauth and Socket.io",
    description:
      "Evolved a Node.js microservice for managing customer support tickets ",
  },
  {
    id: 3,
    name: "Universal Booking System",
    href: "https://book.clayworks.space",
    imageSrc:
      "https://clayworks.space/assets/website/property/clayworks-cbd/Clayworks-cbd-hot-seats.jpg",
    imageAlt: "Booking System",
    stack:
      "React - Next.js(pageRouter), Node.js, ExpressJS, MySQL, Tailwind CSS, JWT and OAuth",
    description:
      "Pioneered the design and implementation of the Universal Booking System, leveraging React - Next.js (pageRouter) with Tailwind CSS and other animation effects for front-end used Headless UI, Tailwind Components for UI coomponents. Back-end with Node.js, ExpressJS for API’s, MySQL to handle database, JWT and OAuth technologies to create a secure application with sophisticated user hierarchy with 4 levels and credit management for booking.",
  },
  {
    id: 4,
    name: "Inventory Management System",
    href: "https://ims.clayworks.co/docs",
    imageSrc: "/images/homepage/ims.jpg",
    imageAlt: "IMS",
    stack: "Node, Express.js, MySQL, HTML, JS, Bootstrap CSS",
    description:
      "Spearheaded the creation of an Inventory management application using Node, Express.js for back-end API’s with MySQL, HTML, JS Bootstrap CSS for UI, resulting in a 20% reduction in wastage in the company. This contribution underscored my ability to address operational challenges through technological solutions.",
  },
  {
    id: 5,
    name: "ClayWorks",
    href: "https://clayworks.space",
    imageSrc: "https://clayworks.space/assets/website/fbm/build-1.jpg",
    imageAlt: "ClayWorks",
    stack: "JS, HTML, Bootstrap",
    description:
      "Drastically enhanced the company’s online presence by developing website for ClayWorks following Figma designs, using HTML, Javacscript and Bootstrapp CSS which lead to a substantial 30% increase in company’s online presence.",
  },
  {
    id: 6,
    name: "Spotch",
    href: "https://spotch.works",
    imageSrc: "https://spotch.works/assets/website/spotch/S3/S3-1.webp",
    imageAlt: "Spotch",
    stack: "JS, HTML, Bootstrap",
    description:
      "Spotch aims to be everything that you need to boost your projectsivity while working remotely. Drastically enhanced the company’s online presence by developing website for Spotch following Figma designs, using HTML, Javacscript and Bootstrapp CSS which lead to a substantial 30% increase in company’s online presence.",
  },
  {
    id: 7,
    name: "Spotch Blog - Wordpress",
    href: "blog.spotch.works",
    imageSrc:
      "https://blog.spotch.works/wp-content/uploads/2021/05/home-s3-1.jpg",
    imageAlt: "Spotch Blog",
    stack: "Wordpress, PHP, CSS",
    description:
      "Developed a blog site for using wordpress, altered themes using PHP and CSS.",
  },
  {
    id: 8,
    name: "Part-time Job Portal - Intra college",
    href: "#",
    imageSrc: "/images/homepage/jobportal.jpg",
    imageAlt: "Job portal",
    stack: "PHP, Laravel, CSS-Bootstrap, MySQL",
    description:
      "Directed the development of a comprehensive full-stack web application, enabling students to seamlessly apply for on-campus part-time opportunities, resulting in a 40% increase in student engagement with the platform. Collaborated within a front-end team of 4 to optimize application handling and responses, contributing to a significant milestone of 300+ registrations within a month, showcasing a 50% increase in platform utilization. The site is not used anymore",
  },
];
export default function Projects() {
  const [isMounted, setIsMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <div className="text-black dark:text-white bg-white dark:bg-black">
      <div className="md:container md:mx-auto flex min-h-screen flex-col items-center justify-between">
        <section className="d-block px-6 py-8 sm:py-4 lg:px-8">
          <div className="flex-col p-2 mt-24">
            <h2 className="text-3xl font-bold py-12 sm:text-4xl ">Projects</h2>
            {projects.map((projects) => (
              <div
                key={projects.id}
                className="mx-auto grid grid-cols-1 items-center sm:grid-cols-2  bg-gray-400 dark:bg-gray-900 mt-4 sm:mt-0"
              >
                <div
                  className={`order-1 ${
                    projects.id % 2 === 0 ? "sm:order-1" : "sm:order-2"
                  }`}
                >
                  <div
                    className="rounded-lg overflow-hidden"
                    style={{ height: "30rem" }}
                  >
                    <img
                      src={projects.imageSrc}
                      alt={projects.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div
                  className={`order-2 ${
                    projects.id % 2 === 0 ? "sm:order-2" : "sm:order-1"
                  }`}
                >
                  <div className="mx-4">
                    <h3 className="font-normal">{projects.name}</h3>
                    <div className="mt-2">
                      <div className="font-semibold">
                        Technology Used: {projects.stack}
                      </div>
                      <div className="mt-2 text-sm">{projects.description}</div>
                      <div className="my-4">
                        <Link href={projects.href}>
                          <div
                            className={
                              resolvedTheme === "dark"
                                ? `white-btn inline-flex items-center rounded-lg px-4 py-2 hover:bg-transparent hover:text-white`
                                : `black-btn inline-flex items-center rounded-lg px-4 py-2 hover:bg-transparent hover:text-black`
                            }
                          >
                            Visit site
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
